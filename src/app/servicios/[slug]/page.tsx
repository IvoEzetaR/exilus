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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: `${service.shortDescription} Dr. Augusto Salazar, cirujano bariatra en Trujillo con más de 16 años de experiencia.`,
    openGraph: {
      title: `${service.name} — Exilus Cirugía Bariátrica`,
      description: service.shortDescription,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.name }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Servicios especializados"
          title={service.name}
          subtitle={service.heroSubtitle}
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
        />
        <ServiceContent service={service} />
      </main>
      <Footer />
    </>
  );
}
