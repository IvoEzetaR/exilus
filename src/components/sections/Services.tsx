"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

/* ─── Data ─── */
const services = [
  {
    number: "01",
    tag: "Bariátrica",
    title: "Cirugía Bariátrica y Metabólica",
    description:
      "Procedimientos quirúrgicos de alta complejidad para el tratamiento definitivo de la obesidad y las enfermedades metabólicas asociadas.",
    bgImage: "/images/paso-cirugia.jpg",
    procedures: [
      "Manga gástrica",
      "Bypass gástrico",
      "Bipartición intestinal",
      "Cirugía revisional",
    ],
    forWhom:
      "Pacientes con obesidad, diabetes tipo 2, hipertensión o síndrome metabólico.",
    detailHref: "/servicios/cirugia-bariatrica",
  },
  {
    number: "02",
    tag: "Obesidad",
    title: "Manejo de Obesidad",
    description:
      "Abordaje integral y personalizado para el control del peso, combinando evaluación médica, acompañamiento nutricional y soporte farmacológico cuando corresponde.",
    bgImage: "/images/doctor-consulta.jpg",
    procedures: [
      "Tratamiento multidisciplinario",
      "Tratamiento farmacológico",
      "Balón intragástrico",
    ],
    forWhom:
      "Quienes buscan un tratamiento completo y sostenido del sobrepeso.",
    detailHref: "/servicios/manejo-obesidad",
  },
  {
    number: "03",
    tag: "Laparoscópica",
    title: "Cirugía Laparoscópica",
    description:
      "Técnica mínimamente invasiva para el tratamiento de patologías abdominales. Menos dolor, recuperación más rápida y resultados estéticos superiores.",
    bgImage: "/images/doctor-cirugia-laparoscopica.jpg",
    procedures: [
      "Vesícula",
      "Apéndice",
      "Hernia",
      "Reflujo",
      "Colon",
    ],
    forWhom:
      "Patologías abdominales que requieren intervención con mínima invasión.",
    detailHref: "/servicios/cirugia-laparoscopica",
  },
];

/* ─── Glassmorphism Card ─── */
function GlassCard({ s }: { s: (typeof services)[0] }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl sm:rounded-[28px] min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] cursor-default flex flex-col justify-end"
    >
      {/* Background image with zoom on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
        <div className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <Image
            src={s.bgImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Number watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-3 right-4 sm:top-6 sm:right-8 select-none font-serif font-light leading-none opacity-[0.12]"
        style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: "#fff", letterSpacing: "-0.06em" }}
      >
        {s.number}
      </div>

      {/* Glass panel */}
      <div className="relative p-3 sm:p-5 lg:p-7">
        <div
          className="rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          style={{
            backgroundColor: "rgba(245, 235, 220, 0.10)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(245, 235, 220, 0.15)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
              {s.tag}
            </span>
            <span className="font-serif text-sm tabular-nums text-white/35">
              — {s.number}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-serif text-lg sm:text-[22px] lg:text-[24px] font-normal leading-[1.15] text-white mb-1.5 sm:mb-2.5"
            style={{ letterSpacing: "-0.015em" }}
          >
            {s.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] leading-relaxed text-white/75 mb-3 sm:mb-4">
            {s.description}
          </p>

          {/* Procedure chips */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
            {s.procedures.map((p) => (
              <span
                key={p}
                className="text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-colors duration-300 hover:bg-white/20"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  color: "rgba(255, 255, 255, 0.88)",
                  border: "1px solid rgba(255, 255, 255, 0.10)",
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Ideal para */}
          <p className="text-[10px] sm:text-[11px] text-white/50 mb-3 sm:mb-4 leading-relaxed">
            <span className="font-semibold text-white/65 uppercase tracking-wider text-[9px] sm:text-[10px]">
              Ideal para:{" "}
            </span>
            {s.forWhom}
          </p>

          {/* CTA pair — Ver más información (outline) + Agenda tu evaluación (primary) */}
          <div className="flex flex-col gap-2 sm:gap-2.5 mt-1">
            <Link
              href={s.detailHref}
              aria-label={`Ver más información sobre ${s.title}`}
              className="group/btn inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-[12.5px] font-semibold transition-all duration-300"
              style={{
                backgroundColor: "rgba(245, 235, 220, 0.12)",
                color: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(245, 235, 220, 0.28)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              Ver más información
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Agenda tu evaluación para ${s.title}`}
              className="group/btn inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-[12.5px] font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(120,214,75,0.45)]"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 6px 18px rgba(120,214,75,0.30)",
              }}
            >
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              Agenda tu evaluación
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ─── */
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
            className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.05] tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Tres áreas de atención.
            <br />
            <em
              className="italic"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Un solo equipo.
            </em>
          </h2>
          <p
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--color-warm-text)" }}
          >
            Atención quirúrgica especializada con tecnología de vanguardia y un
            equipo multidisciplinario comprometido con tu bienestar a largo
            plazo.
          </p>
        </motion.div>

        {/* Cards grid — 3 cols */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <GlassCard key={s.number} s={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
