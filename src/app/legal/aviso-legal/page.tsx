import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import { CLIENT } from "@/lib/client-data";
import LegalSection from "../LegalSection";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de Exilus — Dr. Víctor Augusto Salazar Tantaleán. Información del responsable, condiciones de uso del sitio y disclaimer médico.",
  alternates: { canonical: "https://exilus.pe/legal/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Información legal"
          title="Aviso Legal"
          subtitle="Datos del responsable del sitio, condiciones de uso y aviso médico."
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Aviso Legal" },
          ]}
        />
        <LegalSection>
          <p className="legal-updated">Última actualización: enero de 2026</p>

          <h2>1. Responsable del sitio</h2>
          <p>
            El presente sitio web, <strong>exilus.pe</strong>, es titularidad de{" "}
            <strong>Exilus — Cirugía Bariátrica</strong>, bajo la dirección
            médica del <strong>{CLIENT.doctor}</strong>, cirujano bariatra y
            laparoscopista.
          </p>
          <ul>
            <li>
              <strong>Consultorio:</strong> Calle Los Laureles 436, Of. 403,
              Urb. California — Clínica Sanna Sánchez Ferrer, Trujillo, La
              Libertad, Perú.
            </li>
            <li>
              <strong>Correo de contacto:</strong>{" "}
              <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>
            </li>
            <li>
              <strong>Teléfono / WhatsApp:</strong> {CLIENT.phone}
            </li>
          </ul>

          <h2>2. Objeto del sitio</h2>
          <p>
            Este sitio tiene como finalidad ofrecer información sobre los
            servicios de cirugía bariátrica, cirugía laparoscópica y manejo de
            la obesidad que brinda el Dr. Augusto Salazar en Trujillo, así como
            permitir a los usuarios solicitar una evaluación médica o ponerse en
            contacto con el consultorio.
          </p>

          <h2>3. Aviso médico</h2>
          <p>
            La información publicada en este sitio tiene carácter{" "}
            <strong>informativo y referencial</strong> y{" "}
            <strong>no reemplaza la consulta médica</strong> ni constituye un
            diagnóstico, prescripción o tratamiento. Cada caso clínico es
            individual y los resultados pueden variar según el paciente. Toda
            decisión sobre un procedimiento o tratamiento debe tomarse en una
            evaluación médica presencial. Ante cualquier duda o síntoma, consulta
            directamente con un profesional de la salud.
          </p>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Los contenidos, textos, imágenes, logotipos y elementos gráficos de
            este sitio están protegidos por las normas de propiedad intelectual.
            Queda prohibida su reproducción total o parcial sin autorización
            previa y por escrito del responsable.
          </p>

          <h2>5. Condiciones de uso</h2>
          <p>
            El usuario se compromete a utilizar el sitio de forma lícita y a no
            realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio
            o impedir su normal funcionamiento.
          </p>

          <h2>6. Enlaces a terceros</h2>
          <p>
            Este sitio puede incluir enlaces a plataformas de terceros (por
            ejemplo, redes sociales o sistemas de agenda en línea). No nos
            hacemos responsables del contenido ni de las políticas de privacidad
            de dichos sitios externos.
          </p>

          <h2>7. Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación peruana. Para cualquier
            controversia, las partes se someten a los juzgados y tribunales de
            Trujillo, La Libertad, Perú.
          </p>

          <p>
            Para más información sobre el tratamiento de tus datos personales,
            revisa nuestra{" "}
            <a href="/legal/privacidad">Política de Privacidad</a>.
          </p>
        </LegalSection>
      </main>
      <Footer />
    </>
  );
}
