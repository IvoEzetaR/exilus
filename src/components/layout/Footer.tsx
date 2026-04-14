import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";

// SVG icons para redes sociales (lucide-react v1.7 no incluye social icons)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/exilus-logo.png"
                alt="Exilus — Cirugía Bariátrica"
                width={120}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Cirugía bariátrica y laparoscópica avanzada con excelencia médica,
              enfoque humano y resultados sostenibles en Trujillo, Perú.
            </p>
            {/* Redes sociales */}
            <div className="mt-5 flex gap-4">
              <a
                href={CLIENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Exilus"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors"
              >
                <IconInstagram />
              </a>
              <a
                href={CLIENT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Exilus"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors"
              >
                <IconFacebook />
              </a>
              <a
                href={CLIENT.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Dr. Salazar"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.78a8.18 8.18 0 004.78 1.52V6.85a4.85 4.85 0 01-1.01-.16z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Contacto</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                {CLIENT.phone}
              </a>
              <a
                href={`mailto:${CLIENT.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                {CLIENT.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Calle Los Laureles 436, Of. 403<br />
                  Urb. California<br />
                  Clínica Sanna Sánchez Ferrer<br />
                  Trujillo, Perú
                </span>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">¿Listo para cambiar tu vida?</h4>
            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              Agenda tu evaluación médica personalizada con el Dr. Víctor Salazar.
            </p>
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:opacity-90 transition-opacity"
            >
              Agenda tu evaluación
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 space-y-3 text-center">
          <p className="text-xs text-white/50 max-w-2xl mx-auto">
            La evaluación médica personalizada es indispensable. Los resultados pueden variar según cada paciente.
          </p>
          <p className="text-xs text-white/40">
            © 2026 Exilus — Cirugía Bariátrica. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30">
            Sitio web por{" "}
            <a
              href="https://www.ideagency.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              IDE Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
