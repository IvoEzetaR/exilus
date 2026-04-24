"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ─── SVG oficial de WhatsApp ───────────────────────────────────────────────
// Logo oficial: círculo verde con el ícono característico de bocadillo/teléfono.
// SVG embebido — sin dependencia externa, pixel-perfect al brand oficial.
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      {/* Sombra de fondo leve */}
      <circle cx="24" cy="24" r="24" fill="white" />
      {/* Ícono verde WhatsApp */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4C13.0 4 4 13.0 4 24c0 3.6 1.0 7.0 2.7 9.9L4 44l10.4-2.7A19.9 19.9 0 0 0 24 44c11.0 0 20-9.0 20-20S35.0 4 24 4zm0 36.4a16.3 16.3 0 0 1-8.3-2.3l-.6-.3-6.2 1.6 1.6-6-.4-.6A16.4 16.4 0 1 1 24 40.4z"
        fill="#25D366"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5 27.8c-.5-.2-3-1.5-3.5-1.6-.5-.2-.8-.2-1.2.3s-1.4 1.6-1.7 2c-.3.3-.6.4-1.1.1-3-1.5-5-2.7-6.9-6-.5-.9.5-.8 1.4-2.7.2-.4.1-.7 0-.9-.1-.2-1.2-2.8-1.6-3.8-.4-1-.8-.9-1.2-.9h-1c-.3 0-.9.1-1.3.6-.5.5-1.8 1.7-1.8 4.2s1.8 4.9 2.1 5.2c.3.3 3.6 5.4 8.7 7.6 3.3 1.4 4.6 1.5 6.2 1.3 1-.2 3-1.2 3.5-2.4.4-1.2.4-2.2.3-2.4-.2-.3-.5-.4-1-.6z"
        fill="#25D366"
      />
    </svg>
  );
}

// ─── Anillo de pulso radial ────────────────────────────────────────────────
function PulseRing({ reduced }: { reduced: boolean }) {
  if (reduced) return null;
  return (
    <>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.7, 1.7], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0 }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.45, 1.45], opacity: [0.35, 0, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
      />
    </>
  );
}

// ─── Burbuja "Agenda Tu Consulta Hoy" ────────────────────────────────────
function Bubble({
  visible,
  reduced,
}: {
  visible: boolean;
  reduced: boolean;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6, scale: 0.92 }}
          animate={
            reduced
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [6, -3, 0],
                  scale: [0.92, 1.04, 1],
                }
          }
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          // Posición: mobile → encima del botón, anclado a la izquierda del botón
          //           desktop → a la derecha del botón (centrado vertical)
          className="
            absolute
            bottom-[calc(100%+12px)] left-0
            sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
            sm:left-[calc(100%+14px)]
            pointer-events-none
          "
          role="tooltip"
          aria-label="Agenda Tu Consulta Hoy"
        >
          {/* Burbuja */}
          <div
            className="
              relative whitespace-nowrap rounded-xl
              bg-white/95 backdrop-blur-sm
              px-4 py-2.5 text-sm font-semibold
              text-slate-800 shadow-lg shadow-black/10
              border border-white/60
            "
            style={{ letterSpacing: "-0.01em" }}
          >
            Agenda Tu Consulta Hoy

            {/* Pico apuntando al botón — desktop: burbuja a la derecha, pico apunta hacia la izquierda */}
            <span
              aria-hidden="true"
              className="
                hidden sm:block
                absolute top-1/2 -translate-y-1/2 -left-[8px]
                w-0 h-0
                border-t-[7px] border-t-transparent
                border-r-[8px] border-r-white/95
                border-b-[7px] border-b-transparent
              "
            />
            {/* Pico apuntando al botón — mobile: burbuja encima, pico apunta hacia abajo */}
            <span
              aria-hidden="true"
              className="
                block sm:hidden
                absolute left-5 -bottom-[8px]
                w-0 h-0
                border-l-[7px] border-l-transparent
                border-t-[8px] border-t-white/95
                border-r-[7px] border-r-transparent
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────
export default function WhatsAppButton({
  phoneNumber,
}: {
  phoneNumber: string;
}) {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const reduced = useReducedMotion() ?? false;

  // Burbuja: aparece al montar (1s delay), se puede ocultar al hacer click fuera,
  // reaparece cada 12s para recordar al usuario sin molestar.
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleBubble = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setBubbleVisible(true);
      // Auto-ocultar después de 6s de mostrarse
      timerRef.current = setTimeout(() => {
        setBubbleVisible(false);
        // Volver a mostrar en 12s (ciclo continuo)
        scheduleBubble();
      }, 6000);
    }, 1200);
  };

  useEffect(() => {
    scheduleBubble();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ocultar burbuja al hacer click en cualquier otro lugar
  useEffect(() => {
    const hide = () => setBubbleVisible(false);
    document.addEventListener("click", hide);
    return () => document.removeEventListener("click", hide);
  }, []);

  return (
    /*
     * Layout de convivencia con StickyBookingCTA:
     *
     * Desktop (sm+):
     *   — StickyBookingCTA: bottom-6 right-6  (pill verde lima)
     *   — WhatsApp:         bottom-6 left-6   (círculo verde WhatsApp)
     *
     * Mobile (<sm):
     *   — StickyBookingCTA: bottom-0 inset-x-0  (barra full-width, 56px alto aprox.)
     *   — WhatsApp:         bottom-[72px] left-4 (flota sobre la barra, costado izquierdo)
     *     → no tapa el botón de booking ni el contenido central.
     */
    <div
      className="
        fixed z-50
        bottom-[72px] left-4
        sm:bottom-6 sm:left-6
      "
    >
      {/* Burbuja tooltip */}
      <Bubble visible={bubbleVisible} reduced={reduced} />

      {/* Botón principal */}
      <motion.a
        href={`https://wa.me/${cleanNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp — Agenda Tu Consulta Hoy"
        onClick={(e) => e.stopPropagation()} // no ocultar burbuja al clickear el widget
        className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full"
        style={{
          backgroundColor: "#25D366",
          boxShadow:
            "0 0 0 0 rgba(37,211,102,0.7), 0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)",
        }}
        // Glow animado continuo via motion
        animate={
          reduced
            ? {}
            : {
                boxShadow: [
                  "0 0 0 0px rgba(37,211,102,0.6), 0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)",
                  "0 0 0 10px rgba(37,211,102,0), 0 6px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.18)",
                  "0 0 0 0px rgba(37,211,102,0.6), 0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)",
                ],
              }
        }
        transition={
          reduced
            ? {}
            : {
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        whileHover={
          reduced
            ? {}
            : {
                scale: 1.12,
                boxShadow:
                  "0 0 0 0px rgba(37,211,102,0), 0 8px 36px rgba(37,211,102,0.65), 0 2px 10px rgba(0,0,0,0.20)",
              }
        }
        whileTap={reduced ? {} : { scale: 0.94 }}
      >
        {/* Anillos de pulso radial */}
        <PulseRing reduced={reduced} />

        {/* Logo WhatsApp oficial */}
        <span className="relative z-10 flex items-center justify-center">
          <WhatsAppIcon size={30} />
        </span>
      </motion.a>
    </div>
  );
}
