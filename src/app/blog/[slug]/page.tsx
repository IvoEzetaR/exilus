import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ArticleContent from "./ArticleContent";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { CLIENT } from "@/lib/client-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

const siteUrl = "https://exilus.pe";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "es_PE",
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: CLIENT.fullName,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.dateISO,
      modifiedTime: post.updatedISO,
      authors: [CLIENT.doctor],
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const relatedPosts = getRelatedPosts(post);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  // Article + MedicalWebPage: autor y revisor referencian al Physician del layout
  // (@id global) — un solo grafo de entidad para E-E-A-T.
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "MedicalWebPage"],
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.metaDescription,
        url: pageUrl,
        inLanguage: "es-PE",
        datePublished: post.dateISO,
        dateModified: post.updatedISO,
        image: `${siteUrl}${post.heroImage}`,
        author: { "@id": `${siteUrl}/#physician` },
        reviewedBy: { "@id": `${siteUrl}/#physician` },
        publisher: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        about: {
          "@type": "MedicalSpecialty",
          name: "Bariatric Surgery",
        },
        audience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        isPartOf: { "@id": `${siteUrl}/blog#blog` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow={`Blog — ${post.category}`}
          title={post.title}
          subtitle={`Por ${CLIENT.doctor} · ${post.dateDisplay} · Lectura de ${post.readingMinutes} min`}
          bgImage={post.heroImage}
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
        <ArticleContent post={post} relatedPosts={relatedPosts} />
      </main>
      <Footer />
    </>
  );
}
