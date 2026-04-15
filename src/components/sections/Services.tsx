"use client";

import { motion } from "framer-motion";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

const services = [
  {
    number: "01",
    tag: "Bariátrica",
    title: "Cirugía Bariátrica y Metabólica",
    description:
      "Procedimientos quirúrgicos avanzados para el tratamiento de la obesidad y enfermedades metabólicas asociadas.",
    procedures: [
      "Manga gástrica",
      "Bypass gástrico",
      "Bipartición intestinal",
      "Cirugía revisional",
    ],
    forWhom:
      "Pacientes con obesidad, diabetes tipo 2, hipertensión o síndrome metabólico.",
  },
  {
    number: "02",
    tag: "Obesidad",
    title: "Manejo Integral del Sobrepeso y Obesidad",
    description:
      "Abordaje multidisciplinario personalizado que integra evaluación médica, nutricional y psicológica.",
    procedures: [
      "Evaluación médica integral",
      "Soporte nutricional",
      "Acompañamiento psicológico",
      "Intervención quirúrgica (si aplica)",
    ],
    forWhom:
      "Quienes buscan un tratamiento completo y sostenido del sobrepeso.",
  },
  {
    number: "03",
    tag: "Laparoscópica",
    title: "Cirugía Laparoscópica Avanzada",
    description:
      "Técnicas mínimamente invasivas que reducen riesgos y aceleran la recuperación postoperatoria.",
    procedures: [
      "Colecistectomía (vesícula)",
      "Apendicectomía",
      "Hernias abdominales",
      "Cirugía de colon e intestino",
    ],
    forWhom:
      "Patologías abdominales que requieren intervención con mínima invasión.",
  },
  {
    number: "04",
    tag: "Digestiva",
    title: "Cirugía Digestiva Especializada",
    description:
      "Tratamiento de enfermedades del sistema digestivo con tecnología de última generación.",
    procedures: [
      "Reflujo gastroesofágico",
      "Enfermedades gástricas",
      "Patología hepática",
      "Cirugía pancreática",
    ],
    forWhom:
      "Pacientes con patologías del tracto digestivo superior e inferior.",
  },
  {
    number: "05",
    tag: "Proctología",
    title: "Proctología y Cirugía Anorrectal",
    description:
      "Diagnóstico y tratamiento especializado de enfermedades del colon, recto y ano.",
    procedures: [
      "Hemorroides",
      "Fisuras anales",
      "Fístulas",
      "Abscesos perianales",
    ],
    forWhom:
      "Enfermedades anorrectales que requieren evaluación o corrección quirúrgica.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Servicios de Exilus"
    >
      {/* Blob decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "var(--color-lilac)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <p
            className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 inline-flex items-center gap-2"
            style={{ color: "var(--color-primary)" }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: "var(--color-primary)" }}
              aria-hidden="true"
            />
            Especialidades
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Cinco especialidades.
            <br />
            <em className="italic" style={{ color: "var(--color-primary-dark)" }}>
              Un solo equipo.
            </em>
          </h2>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--color-warm-text)" }}
          >
            Atención quirúrgica especializada con tecnología de vanguardia y
            un equipo multidisciplinario comprometido con tu bienestar a largo plazo.
          </p>
        </motion.div>

        {/* Cards grid — 6 cols con fila 2 centrada */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 260, damping: 22 },
              }}
              className={`group relative overflow-hidden rounded-[24px] p-7 sm:p-8 flex flex-col border cursor-default transition-[border-color,box-shadow] duration-500 lg:col-span-2 ${
                idx === 3 ? "lg:col-start-2" : ""
              } ${idx === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "rgba(108, 29, 69, 0.10)",
              }}
            >
              {/* Número watermark XL */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 -right-3 select-none font-serif font-light leading-none transition-opacity duration-500 group-hover:opacity-[0.10]"
                style={{
                  fontSize: "9.5rem",
                  color: "var(--color-primary)",
                  opacity: 0.05,
                  letterSpacing: "-0.06em",
                }}
              >
                {s.number}
              </div>

              {/* Eyebrow — tag + numero */}
              <div className="relative flex items-center justify-between mb-5">
                <span
                  className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  {s.tag}
                </span>
                <span
                  className="font-serif text-sm font-normal tabular-nums"
                  style={{ color: "var(--color-primary)", opacity: 0.55 }}
                >
                  — {s.number}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px w-12 mb-6 transition-all duration-500 group-hover:w-20"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-hidden="true"
              />

              {/* Título */}
              <h3
                className="relative font-serif text-[26px] sm:text-[28px] font-normal leading-[1.15] mb-4"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.015em",
                }}
              >
                {s.title}
              </h3>

              {/* Descripción */}
              <p
                className="relative text-[15px] leading-relaxed mb-7"
                style={{ color: "var(--color-warm-text)" }}
              >
                {s.description}
              </p>

              {/* Label Procedimientos */}
              <p
                className="relative text-[10px] font-semibold tracking-[0.2em] uppercase mb-1"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Procedimientos
              </p>

              {/* Lista editorial con separadores */}
              <ul className="relative mb-7 flex-1" role="list">
                {s.procedures.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-center justify-between py-3 text-[14px]"
                    style={{
                      borderBottom: "1px solid rgba(108, 29, 69, 0.08)",
                      color: "var(--color-warm-text)",
                    }}
                  >
                    <span>{p}</span>
                    <span
                      className="font-serif text-[11px] tabular-nums"
                      style={{ color: "var(--color-primary)", opacity: 0.5 }}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Ideal para */}
              <div
                className="relative rounded-2xl p-4 mb-7"
                style={{ backgroundColor: "var(--color-lilac)" }}
              >
                <p
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1.5"
                  style={{ color: "var(--color-primary)" }}
                >
                  Ideal para
                </p>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  {s.forWhom}
                </p>
              </div>

              {/* CTA editorial */}
              <a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: "var(--color-primary)" }}
                aria-label={`Agenda tu evaluación para ${s.title}`}
              >
                <span>Agenda tu evaluación</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
