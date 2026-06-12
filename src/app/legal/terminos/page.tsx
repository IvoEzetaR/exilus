import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import { CLIENT } from "@/lib/client-data";
import LegalSection from "../LegalSection";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Exilus — Cirugía Bariátrica, Dr. Augusto Salazar, Trujillo.",
  alternates: { canonical: "https://exilus.pe/legal/terminos" },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Información legal"
          title="Términos y Condiciones"
          subtitle="Condiciones que rigen el uso de este sitio web y sus servicios de información."
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Términos y Condiciones" },
          ]}
        />
        <LegalSection>
          <p className="legal-updated">Última actualización: enero de 2026</p>

          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar el sitio web <strong>exilus.pe</strong>, el
            usuario acepta los presentes Términos y Condiciones. Si no estás de
            acuerdo con ellos, te pedimos no utilizar el sitio.
          </p>

          <h2>2. Naturaleza de la información</h2>
          <p>
            El contenido de este sitio tiene fines{" "}
            <strong>informativos y referenciales</strong> sobre los servicios de
            cirugía bariátrica, cirugía laparoscópica y manejo de la obesidad que
            ofrece el <strong>{CLIENT.doctor}</strong> en Trujillo. La
            información <strong>no reemplaza la consulta médica</strong> ni
            constituye un diagnóstico o tratamiento. Cada caso es individual y los
            resultados pueden variar según el paciente.
          </p>

          <h2>3. Uso del sitio</h2>
          <p>
            El usuario se compromete a utilizar el sitio de forma lícita y a
            proporcionar información veraz cuando complete el formulario de
            contacto. El envío de una consulta no constituye, por sí mismo, una
            relación médico-paciente, la cual se establece únicamente tras una
            evaluación presencial.
          </p>

          <h2>4. Agenda y contacto</h2>
          <p>
            Las solicitudes de cita realizadas a través del sitio o de los canales
            de contacto están sujetas a confirmación por parte del consultorio.
            Los horarios y la disponibilidad pueden variar.
          </p>

          <h2>5. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio están protegidos por las normas de
            propiedad intelectual y no pueden reproducirse sin autorización
            previa y por escrito.
          </p>

          <h2>6. Limitación de responsabilidad</h2>
          <p>
            El responsable del sitio no garantiza la disponibilidad
            ininterrumpida del mismo y no se hace responsable de los daños
            derivados de un uso inadecuado o de la interpretación que el usuario
            haga de la información publicada, la cual siempre debe contrastarse en
            una consulta médica.
          </p>

          <h2>7. Legislación aplicable</h2>
          <p>
            Estos términos se rigen por la legislación peruana. Cualquier
            controversia se someterá a los juzgados y tribunales de Trujillo, La
            Libertad, Perú.
          </p>

          <p>
            Consulta también nuestro{" "}
            <a href="/legal/aviso-legal">Aviso Legal</a> y nuestra{" "}
            <a href="/legal/privacidad">Política de Privacidad</a>.
          </p>
        </LegalSection>
      </main>
      <Footer />
    </>
  );
}
