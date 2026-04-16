"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar, Activity, HeartPulse } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInRight,
  scaleOnHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

const pillars = [
  {
    number: "01",
    title: "Excelencia quirúrgica",
    description:
      "Técnicas laparoscópicas avanzadas con el más alto nivel de precisión y seguridad.",
  },
  {
    number: "02",
    title: "Acompañamiento integral",
    description:
      "Equipo multidisciplinario — cirugía, nutrición, psicología — presente en cada etapa.",
  },
  {
    number: "03",
    title: "Resultados sostenibles",
    description:
      "El proceso no termina en el quirófano. El seguimiento continuo garantiza cambios duraderos.",
  },
];

const differentials = [
  "Enfoque multidisciplinario real",
  "Tecnología mínimamente invasiva",
  "Seguimiento continuo postoperatorio",
  "Atención personalizada",
  "Equipo altamente especializado",
];

/* ─── Animation variants — progressive scroll reveal per step ─── */
const EASE = [0.22, 1, 0.36, 1] as const;

const stepContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

const cardFromLeft: Variants = {
  hidden: { opacity: 0, x: -70, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

const cardFromRight: Variants = {
  hidden: { opacity: 0, x: 70, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

const circlePop: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 14 },
  },
};

const stepViewport = { once: true, margin: "-100px" } as const;

type Step = {
  step: string;
  title: string;
  description: string;
  image?: string;
};

const steps: Step[] = [
  {
    step: "1",
    title: "Evaluación inicial",
    description:
      "Consulta médica personalizada para conocer tu historia clínica, objetivos y condición actual.",
    image: "/images/paso-evaluacion-inicial.jpg",
  },
  {
    step: "2",
    title: "Estudios preoperatorios",
    description:
      "Exámenes de laboratorio e imagen necesarios para planificar el procedimiento de forma segura.",
    image: "/images/paso-cirugia.jpg",
  },
  {
    step: "3",
    title: "Evaluación multidisciplinaria",
    description:
      "Revisión conjunta con el equipo de nutrición, psicología y medicina interna.",
    image: "/images/paso-evaluacion-multi.jpg",
  },
  {
    step: "4",
    title: "Cirugía",
    description:
      "Intervención programada en clínica acreditada, con los más altos estándares de seguridad.",
    image: "/images/doctor-quirofano.jpg",
  },
  {
    step: "5",
    title: "Seguimiento postoperatorio",
    description:
      "Control continuo para asegurar tu recuperación y el mantenimiento de los resultados a largo plazo.",
    image: "/images/paso-seguimiento.jpg",
  },
];

/* ─── Step Card — horizontal layout with glass effect ─── */
function StepCard({ s, accent }: { s: Step; accent?: boolean }) {
  return (
    <div
      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        border: accent
          ? "1.5px solid rgba(180, 100, 120, 0.45)"
          : "1px solid var(--color-border)",
      }}
    >
      <div className="flex sm:flex-row flex-col">
        {/* Image */}
        {s.image && (
          <div className="relative h-48 sm:h-auto sm:min-h-[200px] lg:min-h-[240px] sm:w-[42%] flex-shrink-0 overflow-hidden">
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 280px, 340px"
              className="object-cover"
            />
          </div>
        )}
        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-center min-w-0">
          <h3
            className="font-serif text-lg sm:text-xl lg:text-2xl font-normal mb-2 sm:mb-2.5 leading-snug"
            style={{ color: "var(--color-primary)" }}
          >
            {s.title}
          </h3>
          <p
            className="text-sm sm:text-base lg:text-[15px] leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            {s.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 5 card — with icons row ─── */
function Step5Card({ s }: { s: Step }) {
  return (
    <div
      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex sm:flex-row flex-col">
        {/* Image */}
        {s.image && (
          <div className="relative h-48 sm:h-auto sm:min-h-[200px] lg:min-h-[240px] sm:w-[42%] flex-shrink-0 overflow-hidden">
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 280px, 340px"
              className="object-cover"
            />
          </div>
        )}
        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-center min-w-0">
          <h3
            className="font-serif text-lg sm:text-xl lg:text-2xl font-normal mb-2 sm:mb-2.5 leading-snug"
            style={{ color: "var(--color-primary)" }}
          >
            {s.title}
          </h3>
          <p
            className="text-sm sm:text-base lg:text-[15px] leading-relaxed mb-4 sm:mb-5"
            style={{ color: "var(--color-warm-text)" }}
          >
            {s.description}
          </p>
          {/* Icons row */}
          <div className="flex gap-2.5">
            <div
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg"
              style={{ backgroundColor: "var(--color-lilac)" }}
            >
              <Activity className="h-5 w-5 sm:h-[22px] sm:w-[22px]" style={{ color: "var(--color-primary)" }} />
            </div>
            <div
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg"
              style={{ backgroundColor: "var(--color-lilac)" }}
            >
              <HeartPulse className="h-5 w-5 sm:h-[22px] sm:w-[22px]" style={{ color: "var(--color-primary)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Method() {
  return (
    <section
      id="proceso"
      aria-label="Método Exilus y proceso del paciente"
    >
      {/* Bloque 1 — Pilares y diferenciales (fondo morado invertido) */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Izquierda — Intro + pilares */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <motion.p
                variants={staggerItem}
                className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                style={{ color: "rgba(245,235,220,0.60)" }}
              >
                Nuestro enfoque
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="font-serif text-4xl sm:text-5xl font-light leading-tight tracking-tight"
                style={{ color: "var(--color-cream)" }}
              >
                El método Exilus
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="mt-5 text-base leading-relaxed"
                style={{ color: "rgba(245,235,220,0.75)" }}
              >
                No somos un consultorio más. Somos un equipo especializado que te acompaña
                en cada paso del proceso, desde la evaluación inicial hasta el seguimiento
                a largo plazo.
              </motion.p>

              {/* 3 pilares */}
              <motion.div variants={staggerItem} className="mt-10 space-y-6">
                {pillars.map((p) => (
                  <div key={p.number} className="flex gap-5">
                    <span
                      className="font-serif text-sm font-light flex-shrink-0 mt-0.5"
                      style={{ color: "rgba(245,235,220,0.35)" }}
                    >
                      {p.number}
                    </span>
                    <div>
                      <p
                        className="font-serif text-lg font-normal mb-1"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {p.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(245,235,220,0.70)" }}
                      >
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Derecha — ¿Por qué Exilus? */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <p
                className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-6"
                style={{ color: "rgba(245,235,220,0.60)" }}
              >
                ¿Por qué elegirnos?
              </p>
              <ul className="space-y-3">
                {differentials.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl px-6 py-4"
                    style={{ backgroundColor: "rgba(245,235,220,0.08)" }}
                  >
                    <span
                      className="font-serif text-lg font-light flex-shrink-0 w-6 text-right"
                      style={{ color: "rgba(245,235,220,0.30)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          Bloque 2 — Tu proceso, paso a paso (zigzag timeline con imágenes)
          Diseño: cards con imagen alternando izquierda/derecha, línea
          vertical central con números circulares.
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="text-center mb-12 sm:mb-14 lg:mb-16"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Tu proceso, paso a paso
            </h2>
            <p
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              Desde la primera consulta hasta tu seguimiento a largo plazo, cada etapa está
              pensada para que te sientas acompañado y seguro.
            </p>
          </motion.div>

          {/* ── Timeline zigzag — all breakpoints ── */}
          <div className="relative">
            {/* Línea vertical central */}
            <div
              className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-[2px]"
              style={{ backgroundColor: "var(--color-border)" }}
              aria-hidden="true"
            />

            {/* Steps — progressive scroll reveal per item */}
            <ol
              className="space-y-6 sm:space-y-8 lg:space-y-10"
              aria-label="Pasos del proceso"
            >
              {steps.map((s, idx) => {
                const isLeft = idx % 2 === 0;
                const isLast = idx === steps.length - 1;
                const isStep4 = idx === 3;
                const cardVariant = isLeft ? cardFromLeft : cardFromRight;

                return (
                  <motion.li
                    key={s.step}
                    variants={stepContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={stepViewport}
                    className="relative"
                  >
                    <div className="grid grid-cols-[1fr_48px_1fr] sm:grid-cols-[1fr_64px_1fr] lg:grid-cols-[1fr_80px_1fr] gap-3 sm:gap-5 lg:gap-6 items-start">
                      {/* Left column */}
                      <div>
                        {isLeft ? (
                          <motion.div variants={cardVariant}>
                            {isLast ? (
                              <Step5Card s={s} />
                            ) : (
                              <StepCard s={s} accent={isStep4} />
                            )}
                          </motion.div>
                        ) : (
                          <div />
                        )}
                      </div>

                      {/* Center — number circle (spring pop-in) */}
                      <div className="flex justify-center pt-8 sm:pt-10 lg:pt-12">
                        <motion.div
                          variants={circlePop}
                          className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex-shrink-0 items-center justify-center rounded-full border-2 text-base sm:text-lg lg:text-xl font-bold"
                          style={{
                            backgroundColor: "var(--color-cream)",
                            borderColor: "var(--color-primary)",
                            color: "var(--color-primary)",
                          }}
                        >
                          {s.step}
                        </motion.div>
                      </div>

                      {/* Right column */}
                      <div>
                        {!isLeft ? (
                          <motion.div variants={cardVariant}>
                            <StepCard s={s} accent={isStep4} />
                          </motion.div>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="mt-14 sm:mt-16 lg:mt-20 text-center"
          >
            <motion.a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 8px 24px rgba(120,214,75,0.28)",
              }}
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Iniciar evaluación
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
