"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CLIENT } from "@/lib/client-data";

/**
 * StickyBookingCTA — botón flotante persistente.
 *
 * Comportamiento:
 * - Oculto mientras el usuario está dentro del Hero (primer 100vh).
 * - Aparece al hacer scroll más allá del hero, desaparece cerca del footer.
 * - Desktop: esquina inferior derecha (fixed, bottom-6 right-6).
 * - Mobile: barra full-width en la parte inferior (fixed, bottom-0 inset-x-0).
 * - Animación sutil de pulso para llamar la atención sin ser invasivo.
 * - Respeta prefers-reduced-motion: sin pulso ni animación de entrada elaborada.
 */
export default function StickyBookingCTA() {
  const shouldReduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.85; // pasado el 85% del hero
      const docHeight = document.documentElement.scrollHeight;
      const footerOffset = 400; // ocultar cerca del footer
      const nearBottom = scrollY + window.innerHeight >= docHeight - footerOffset;

      setVisible(scrollY > heroThreshold && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // evaluar posición inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Desktop: pill esquina inferior derecha ── */}
          <motion.a
            key="sticky-desktop"
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{
              duration: shouldReduce ? 0.01 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label="Agendar evaluación bariátrica"
            className="hidden sm:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold shadow-2xl"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "#1a3a0a",
              boxShadow:
                "0 8px 32px rgba(120,214,75,0.40), 0 2px 8px rgba(0,0,0,0.12)",
            }}
            whileHover={
              shouldReduce
                ? {}
                : {
                    scale: 1.06,
                    boxShadow:
                      "0 12px 40px rgba(120,214,75,0.55), 0 2px 8px rgba(0,0,0,0.14)",
                  }
            }
            whileTap={shouldReduce ? {} : { scale: 0.96 }}
          >
            {/* Pulso de fondo — solo sin reduced motion */}
            {!shouldReduce && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: "var(--color-cta)" }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            <Calendar className="relative z-10 h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="relative z-10">Agendar ahora</span>
          </motion.a>

          {/* ── Mobile: barra full-width en bottom ── */}
          <motion.div
            key="sticky-mobile"
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 56 }}
            transition={{
              duration: shouldReduce ? 0.01 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3"
            style={{
              background:
                "linear-gradient(to top, rgba(108,29,69,0.85) 0%, transparent 100%)",
            }}
          >
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar evaluación bariátrica"
              className="flex items-center justify-center gap-2.5 w-full rounded-xl py-4 text-sm font-bold"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 4px 20px rgba(120,214,75,0.45)",
              }}
            >
              <Calendar className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              Agendar ahora
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
