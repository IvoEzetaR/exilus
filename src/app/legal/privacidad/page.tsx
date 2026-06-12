import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import { CLIENT } from "@/lib/client-data";
import LegalSection from "../LegalSection";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Exilus conforme a la Ley N.° 29733 de Protección de Datos Personales del Perú. Finalidad, conservación y derechos ARCO.",
  alternates: { canonical: "https://exilus.pe/legal/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Información legal"
          title="Política de Privacidad"
          subtitle="Cómo tratamos y protegemos tus datos personales, conforme a la Ley N.° 29733."
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Política de Privacidad" },
          ]}
        />
        <LegalSection>
          <p className="legal-updated">Última actualización: enero de 2026</p>

          <p>
            En <strong>Exilus — Cirugía Bariátrica</strong>, bajo la dirección
            del <strong>{CLIENT.doctor}</strong>, respetamos tu privacidad y
            tratamos tus datos personales conforme a la{" "}
            <strong>Ley N.° 29733, Ley de Protección de Datos Personales</strong>{" "}
            del Perú y su reglamento.
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li>
              <strong>Responsable:</strong> Exilus — Cirugía Bariátrica /{" "}
              {CLIENT.doctor}.
            </li>
            <li>
              <strong>Dirección:</strong> Calle Los Laureles 436, Of. 403, Urb.
              California — Clínica Sanna Sánchez Ferrer, Trujillo, La Libertad,
              Perú.
            </li>
            <li>
              <strong>Correo:</strong>{" "}
              <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a> ·{" "}
              <strong>WhatsApp:</strong> {CLIENT.phone}
            </li>
          </ul>

          <h2>2. Datos que recopilamos</h2>
          <p>
            Recopilamos únicamente los datos que nos proporcionas de forma
            voluntaria a través del formulario de contacto o por nuestros canales
            de comunicación: nombre, correo electrónico, número de teléfono,
            servicio de interés y el mensaje o consulta que decidas enviarnos.
          </p>

          <h2>3. Finalidad del tratamiento</h2>
          <p>Tus datos se utilizan exclusivamente para:</p>
          <ul>
            <li>Agendar y gestionar tu evaluación médica.</li>
            <li>Responder tus consultas y mantener el contacto contigo.</li>
            <li>
              Brindarte información sobre los servicios que solicitaste.
            </li>
          </ul>
          <p>
            No utilizamos tus datos para fines distintos a los aquí descritos sin
            tu consentimiento previo.
          </p>

          <h2>4. Conservación de los datos</h2>
          <p>
            Conservamos tus datos personales durante el tiempo necesario para
            cumplir la finalidad para la que fueron recopilados y mientras exista
            una relación de contacto o atención. Una vez cumplida dicha finalidad,
            los datos se eliminan o anonimizan, salvo que una obligación legal
            exija conservarlos por un plazo mayor.
          </p>

          <h2>5. Cesión a terceros</h2>
          <p>
            <strong>No cedemos ni vendemos tus datos personales a terceros</strong>,
            salvo cuando exista una obligación legal o un requerimiento de
            autoridad competente. Algunos proveedores tecnológicos (por ejemplo,
            el sistema de agenda en línea) pueden procesar datos por encargo,
            siempre bajo medidas de seguridad y confidencialidad.
          </p>

          <h2>6. Tus derechos (ARCO)</h2>
          <p>
            Conforme a la Ley N.° 29733, puedes ejercer en cualquier momento tus
            derechos de:
          </p>
          <ul>
            <li>
              <strong>Acceso:</strong> conocer qué datos tuyos tratamos.
            </li>
            <li>
              <strong>Rectificación:</strong> corregir datos inexactos o
              incompletos.
            </li>
            <li>
              <strong>Cancelación:</strong> solicitar la supresión de tus datos.
            </li>
            <li>
              <strong>Oposición:</strong> oponerte al tratamiento de tus datos.
            </li>
          </ul>
          <p>
            Para ejercer estos derechos, escríbenos a{" "}
            <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>. También tienes
            derecho a presentar un reclamo ante la Autoridad Nacional de
            Protección de Datos Personales del Perú.
          </p>

          <h2>7. Seguridad</h2>
          <p>
            Adoptamos medidas técnicas y organizativas razonables para proteger
            tus datos personales frente a accesos no autorizados, pérdida o
            alteración.
          </p>

          <h2>8. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios legales o
            mejoras en nuestros procesos. La versión vigente siempre estará
            disponible en esta página.
          </p>

          <p>
            Consulta también nuestro{" "}
            <a href="/legal/aviso-legal">Aviso Legal</a> y los{" "}
            <a href="/legal/terminos">Términos y Condiciones</a>.
          </p>
        </LegalSection>
      </main>
      <Footer />
    </>
  );
}
