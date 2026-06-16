// Helper único de tracking de conversión — GA4 (gtag).
// GA4 ya está cableado en src/app/layout.tsx (G-6B167Z5VEY) vía window.dataLayer + gtag().
// trackEvent() es client-side: solo dispara en el browser. Si gtag aún no cargó
// (Script afterInteractive), hace fallback a window.dataLayer.push para no perder el evento.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envía un evento custom a GA4.
 * @param name   Nombre del evento (ej. "whatsapp_click", "form_submit").
 * @param params Parámetros adicionales (ej. { location: "hero" }).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }

  // Fallback: gtag todavía no inicializó — empujamos directo al dataLayer.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
