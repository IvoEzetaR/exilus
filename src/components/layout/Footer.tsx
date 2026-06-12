import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CLIENT } from "@/lib/client-data";

const FOOTER_NAV = [
  { label: "Cirugía Bariátrica", href: "/servicios/cirugia-bariatrica" },
  { label: "Manejo de Obesidad", href: "/servicios/manejo-obesidad" },
  { label: "Cirugía Laparoscópica", href: "/servicios/cirugia-laparoscopica" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Blog y guías", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconTikTok = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.78a8.18 8.18 0 004.78 1.52V6.85a4.85 4.85 0 01-1.01-.16z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-primary-dark)" }}
      aria-label="Pie de página"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center">
              <div className="relative h-14 w-44">
                <Image
                  src="/images/exilus-logo.png"
                  alt="Exilus — Cirugía Bariátrica Trujillo"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(245,235,220,0.70)" }}>
              Cirugía bariátrica y laparoscópica avanzada con excelencia médica,
              enfoque humano y resultados sostenibles en Trujillo, Perú.
            </p>

            {/* Redes sociales */}
            <div className="mt-6 flex gap-3">
              <a
                href={CLIENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Exilus"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-cream/50 hover:opacity-80"
                style={{ borderColor: "rgba(245,235,220,0.20)", color: "rgba(245,235,220,0.70)" }}
              >
                <IconInstagram />
              </a>
              <a
                href={CLIENT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Exilus"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-cream/50 hover:opacity-80"
                style={{ borderColor: "rgba(245,235,220,0.20)", color: "rgba(245,235,220,0.70)" }}
              >
                <IconFacebook />
              </a>
              <a
                href={CLIENT.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok del Dr. Salazar"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-cream/50 hover:opacity-80"
                style={{ borderColor: "rgba(245,235,220,0.20)", color: "rgba(245,235,220,0.70)" }}
              >
                <IconTikTok />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-opacity hover:opacity-100"
                    style={{ color: "rgba(245,235,220,0.70)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              Contacto
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "rgba(245,235,220,0.70)" }}>
              <a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {CLIENT.phone}
              </a>
              <a
                href={`mailto:${CLIENT.email}`}
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {CLIENT.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  Calle Los Laureles 436, Of. 403<br />
                  Urb. California<br />
                  Clínica Sanna Sánchez Ferrer<br />
                  Trujillo, Perú
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              ¿Listo para dar el primer paso?
            </h4>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(245,235,220,0.70)" }}>
              Agenda tu evaluación médica personalizada con el Dr. Salazar.
              Sin compromiso, sin presión.
            </p>
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 4px 16px rgba(120,214,75,0.25)",
              }}
            >
              Agenda tu evaluación
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 border-t pt-8 space-y-3 text-center"
          style={{ borderColor: "rgba(245,235,220,0.10)" }}
        >
          {/* Disclaimer médico global (YMYL) */}
          <p className="text-xs max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(245,235,220,0.50)" }}>
            La información de este sitio es referencial y no reemplaza la consulta
            médica. Cada caso es individual y los resultados varían según el
            paciente.
          </p>

          {/* Enlaces legales */}
          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
              <li>
                <a
                  href="/legal/aviso-legal"
                  className="transition-opacity hover:opacity-100"
                  style={{ color: "rgba(245,235,220,0.60)" }}
                >
                  Aviso Legal
                </a>
              </li>
              <li aria-hidden="true" style={{ color: "rgba(245,235,220,0.30)" }}>·</li>
              <li>
                <a
                  href="/legal/privacidad"
                  className="transition-opacity hover:opacity-100"
                  style={{ color: "rgba(245,235,220,0.60)" }}
                >
                  Política de Privacidad
                </a>
              </li>
              <li aria-hidden="true" style={{ color: "rgba(245,235,220,0.30)" }}>·</li>
              <li>
                <a
                  href="/legal/terminos"
                  className="transition-opacity hover:opacity-100"
                  style={{ color: "rgba(245,235,220,0.60)" }}
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xs" style={{ color: "rgba(245,235,220,0.35)" }}>
            © 2026 Exilus — Cirugía Bariátrica. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,235,220,0.65)" }}>
            <a
              href="https://ideagency.pro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sitio web desarrollado por IDE Agency"
              className="group inline-flex items-center gap-1.5 font-medium transition-opacity"
            >
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">Hecho por</span>
              <span
                className="font-bold bg-clip-text text-transparent transition-all duration-500 group-hover:[background-position:100%_50%] group-hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.6))]"
                style={{
                  backgroundImage: "linear-gradient(110deg, #a855f7 0%, #ec4899 50%, #a855f7 100%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "0% 50%",
                }}
              >
                IDE Agency
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
