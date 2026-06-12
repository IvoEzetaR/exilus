import type { ReactNode } from "react";

/**
 * Contenedor de contenido para las páginas legales.
 * Tipografía sobria y legible, coherente con la paleta de marca.
 */
export default function LegalSection({ children }: { children: ReactNode }) {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="legal-prose mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
