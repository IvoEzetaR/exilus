import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ServiceContent from "./ServiceContent";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

const siteUrl = "https://exilus.pe";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} en Trujillo`,
    description: `${service.shortDescription} Dr. Augusto Salazar, cirujano bariatra en Trujillo con más de 16 años de experiencia.`,
    alternates: { canonical: `${siteUrl}/servicios/${service.slug}` },
    openGraph: {
      title: `${service.name} en Trujillo — Exilus`,
      description: service.shortDescription,
      url: `${siteUrl}/servicios/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: `${service.name} en Trujillo` }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pageUrl = `${siteUrl}/servicios/${service.slug}`;

  // ── BreadcrumbList ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Servicios", item: `${siteUrl}/#servicios` },
      { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
    ],
  };

  // ── @graph: un MedicalProcedure / MedicalTherapy por procedimiento + FAQPage ──
  const procedureGraph = service.subServices.map((sub) => {
    if (sub.schemaType === "MedicalTherapy") {
      return {
        "@type": "MedicalTherapy",
        "@id": `${pageUrl}#${sub.slug}`,
        name: `${sub.name} en Trujillo`,
        description: sub.howPerformed ?? sub.shortDescription,
        ...(sub.bodyLocation ? { bodyLocation: sub.bodyLocation } : {}),
        relevantSpecialty: { "@type": "MedicalSpecialty", name: "Bariatric Surgery" },
      };
    }
    return {
      "@type": "MedicalProcedure",
      "@id": `${pageUrl}#${sub.slug}`,
      name: `${sub.name} en Trujillo`,
      description: sub.shortDescription,
      ...(sub.procedureType ? { procedureType: `https://schema.org/${sub.procedureType}` } : {}),
      ...(sub.bodyLocation ? { bodyLocation: sub.bodyLocation } : {}),
      ...(sub.howPerformed ? { howPerformed: sub.howPerformed } : {}),
      relevantSpecialty: { "@type": "MedicalSpecialty", name: "Bariatric Surgery" },
    };
  });

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [...procedureGraph, faqSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow={`Especialidad — ${service.tag}`}
          title={`${service.name} en Trujillo`}
          subtitle={service.heroSubtitle}
          bgImage={service.image}
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/#servicios" },
            { label: service.name },
          ]}
        />
        <ServiceContent service={service} />
      </main>
      <Footer />
    </>
  );
}
