import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ServiceCardGrid from "./ServiceCardGrid";
import { CLIENT } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Cirugía bariátrica y laparoscópica avanzada en Trujillo: manga gástrica, bypass gástrico, balón intragástrico, cirugía revisional y laparoscópica. Dr. Augusto Salazar.",
  openGraph: {
    title: "Servicios — Exilus Cirugía Bariátrica",
    description:
      "Conoce todos nuestros procedimientos bariátricos y laparoscópicos. Más de 16 años de experiencia en Trujillo.",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Nuestros procedimientos"
          title="Servicios Especializados"
          subtitle="Cada paciente es único. Ofrecemos un abanico de procedimientos bariátricos y laparoscópicos para encontrar la solución ideal para tu caso."
          bgImage="/images/paso-cirugia.jpg"
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Servicios" },
          ]}
        />

        {/* Service Cards Grid */}
        <ServiceCardGrid />

        {/* CTA Section */}
        <section
          className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="font-serif text-3xl sm:text-4xl font-light leading-tight"
              style={{ color: "var(--color-cream)" }}
            >
              No sabes cuál procedimiento es para ti?
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(245,235,220,0.75)" }}
            >
              Agenda una evaluación con el Dr. Salazar. En la consulta inicial
              evaluaremos tu caso y te recomendaremos la mejor opción.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "#1a3a0a",
                  boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
                }}
              >
                <Calendar className="h-5 w-5" />
                Agenda tu evaluación
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold transition-colors"
                style={{
                  borderColor: "rgba(245,235,220,0.3)",
                  color: "var(--color-cream)",
                }}
              >
                Contáctanos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
