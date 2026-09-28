"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Botón flotante "¿Soy candidato?" — fijado bottom-left para no chocar con
// WhatsAppButton (bottom-right). Hace scroll suave al ancla #soy-candidato
// cuando estamos en home, navega a /#soy-candidato desde otras páginas.
//
// Visibilidad:
//   - Oculto mientras el hero (#inicio) ocupa la pantalla: ahí tapaba el CTA
//     principal y el hero ya tiene su propio enlace al test. Aparece al bajar.
//   - Se oculta también cuando la sección #soy-candidato está visible en
//     pantalla (sería redundante mostrarla mientras el usuario ya la ve).
export default function CandidateFloatButton() {
  const reduced = useReducedMotion() ?? false;
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [pastHero, setPastHero] = useState(!isHome);
  const [candidateVisible, setCandidateVisible] = useState(false);
  const show = pastHero && !candidateVisible;

  // Fuera del hero: aparece cuando ya se scrolleó más de la mitad del hero.
  useEffect(() => {
    const hero = isHome ? document.getElementById("inicio") : null;
    if (!hero) {
      setPastHero(true);
      return;
    }
    const update = () => setPastHero(window.scrollY > hero.offsetHeight * 0.55);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  // Ocultar cuando la sección #soy-candidato está visible en viewport.
  useEffect(() => {
    const target = isHome ? document.getElementById("soy-candidato") : null;
    if (!target) {
      setCandidateVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCandidateVisible(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      { threshold: [0, 0.25, 0.5] }
    );
    observer.observe(target);

    return () => observer.disconnect();
  }, [isHome]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent("candidate_test_open", { location: "floating_button" });
    if (!isHome) return; // Deja que el navegador navegue a /#soy-candidato
    const target = document.getElementById("soy-candidato");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block fixed z-50 bottom-6 left-6"
        >
          <motion.a
            href={isHome ? "#soy-candidato" : "/#soy-candidato"}
            onClick={handleClick}
            aria-label="Test orientativo: ¿soy candidato a cirugía bariátrica?"
            whileHover={
              reduced
                ? {}
                : {
                    scale: 1.04,
                    boxShadow:
                      "0 10px 36px rgba(108,29,69,0.45), 0 2px 10px rgba(0,0,0,0.18)",
                  }
            }
            whileTap={reduced ? {} : { scale: 0.96 }}
            animate={
              reduced
                ? {}
                : {
                    boxShadow: [
                      "0 6px 24px rgba(108,29,69,0.35), 0 0 0 0 rgba(108,29,69,0.45)",
                      "0 6px 28px rgba(108,29,69,0.40), 0 0 0 10px rgba(108,29,69,0)",
                      "0 6px 24px rgba(108,29,69,0.35), 0 0 0 0 rgba(108,29,69,0.45)",
                    ],
                  }
            }
            transition={
              reduced
                ? {}
                : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
            }
            className="group inline-flex items-center gap-2.5 rounded-full px-5 py-3 sm:px-6 sm:py-3.5 text-sm font-semibold backdrop-blur-sm"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              border: "1px solid rgba(245,235,220,0.20)",
              boxShadow:
                "0 6px 24px rgba(108,29,69,0.35), 0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(245,235,220,0.18)" }}
            >
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap">¿Soy candidato?</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
