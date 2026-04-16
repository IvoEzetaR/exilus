import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Conoce las historias de éxito de nuestros pacientes de cirugía bariátrica en Trujillo. Más de 500 pacientes confían en el Dr. Augusto Salazar.",
  openGraph: {
    title: "Testimonios — Exilus Cirugía Bariátrica",
    description:
      "Historias reales de transformación. Pacientes que recuperaron su salud y calidad de vida.",
  },
};

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Historias de transformación"
          title="Testimonios"
          subtitle="Cada paciente tiene una historia. Conoce cómo la cirugía bariátrica transformó la vida de quienes confiaron en nosotros."
          bgImage="/images/doctor-consulta.jpg"
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Testimonios" },
          ]}
        />
        <TestimonialsContent />
      </main>
      <Footer />
    </>
  );
}
