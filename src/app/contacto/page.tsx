import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para agendar tu evaluación con el Dr. Augusto Salazar. Cirugía bariátrica y laparoscópica en Trujillo. WhatsApp, email o visita nuestra clínica.",
  alternates: { canonical: "https://exilus.pe/contacto" },
  openGraph: {
    title: "Contacto — Exilus Cirugía Bariátrica",
    description:
      "Agenda tu consulta. Clínica Sanna Sánchez Ferrer, Trujillo. +51 972 652 353.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"MedicalClinic","name":"Exilus Cirugía Bariátrica","address":{"@type":"PostalAddress","streetAddress":"Calle Los Laureles 436, Of. 403, Urb. California — Clínica Sanna Sánchez Ferrer","addressLocality":"Trujillo","addressCountry":"PE"},"telephone":"+51 972 652 353","openingHours":["Mo-Fr 09:00-19:00","Sa 09:00-13:00"],"url":"https://exilus.pe"}) }}
      />
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Estamos para ayudarte"
          title="Contacto — Dr. Augusto Salazar, Cirugía Bariátrica Trujillo"
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
