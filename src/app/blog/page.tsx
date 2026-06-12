import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import BlogIndexContent from "./BlogIndexContent";
import { BLOG_POSTS } from "@/lib/blog-data";
import { CLIENT } from "@/lib/client-data";

const siteUrl = "https://exilus.pe";

export const metadata: Metadata = {
  title: "Blog — Guías de cirugía bariátrica",
  description:
    "Guías claras sobre cirugía bariátrica en el Perú, escritas y revisadas por el Dr. Augusto Salazar, cirujano bariatra en Trujillo: procedimientos, costos, recuperación y más.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${siteUrl}/blog`,
    siteName: CLIENT.fullName,
    title: "Blog Exilus — Guías de cirugía bariátrica en Trujillo",
    description:
      "Procedimientos, costos y decisiones explicados sin tecnicismos por el Dr. Augusto Salazar, cirujano bariatra en Trujillo.",
    images: [
      {
        url: "/images/doctor-consulta.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Augusto Salazar — guías de cirugía bariátrica, Trujillo",
      },
    ],
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    name: "Blog Exilus — Guías de cirugía bariátrica",
    description:
      "Guías educativas sobre cirugía bariátrica y manejo de obesidad, escritas y revisadas por el Dr. Augusto Salazar (Trujillo, Perú).",
    url: `${siteUrl}/blog`,
    inLanguage: "es-PE",
    publisher: { "@id": `${siteUrl}/#organization` },
    author: { "@id": `${siteUrl}/#physician` },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${siteUrl}/blog/${p.slug}#article`,
      headline: p.title,
      url: `${siteUrl}/blog/${p.slug}`,
      datePublished: p.dateISO,
      dateModified: p.updatedISO,
      author: { "@id": `${siteUrl}/#physician` },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Blog — Educación del paciente"
          title="Guías claras para una decisión importante"
          subtitle="Cirugía bariátrica explicada sin tecnicismos, escrita y revisada por el Dr. Augusto Salazar — cirujano bariatra en Trujillo."
          bgImage="/images/doctor-consulta.jpg"
          breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Blog" }]}
        />
        <BlogIndexContent posts={BLOG_POSTS} />
      </main>
      <Footer />
    </>
  );
}
