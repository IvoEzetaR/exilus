import { Phone, MapPin } from "lucide-react";
import { CLIENT } from "@/lib/client-data";

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function TopBar() {
  return (
    <div className="h-10 bg-primary-dark flex items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Izquierda: teléfono / WhatsApp */}
        <a
          href={CLIENT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/90 text-xs hover:text-white transition-colors"
        >
          <Phone className="h-3 w-3 flex-shrink-0" />
          <span>+51 972 652 353</span>
        </a>

        {/* Centro: dirección (hidden en mobile) */}
        <span className="hidden lg:flex items-center gap-1.5 text-white/70 text-xs">
          <MapPin className="h-3 w-3 flex-shrink-0" />
          Clínica Sanna Sánchez Ferrer, Trujillo
        </span>

        {/* Derecha: Instagram */}
        <a
          href={CLIENT.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/90 text-xs hover:text-white transition-colors"
        >
          <IconInstagram />
          <span>@exilus.pe</span>
        </a>
      </div>
    </div>
  );
}
