import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para agendar tu evaluación con el Dr. Augusto Salazar. Cirugía bariátrica y laparoscópica en Trujillo. WhatsApp, email o visita nuestra clínica.",
  openGraph: {
    title: "Contacto — Exilus Cirugía Bariátrica",
    description:
      "Agenda tu consulta. Clínica Sanna Sánchez Ferrer, Trujillo. +51 972 652 353.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Estamos para ayudarte"
          title="Contáctanos"
          subtitle="Agenda tu evaluación o escríbenos para resolver cualquier duda. Tu primera consulta es el primer paso hacia una nueva vida."
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Contacto" },
          ]}
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
