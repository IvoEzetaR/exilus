"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

type Procedure = {
  label: string;
  slug?: string;
};

type Category = {
  number: string;
  tag: string;
  title: string;
  description: string;
  bgImage: string;
  procedures: Procedure[];
  forWhom: string;
};

const categories: Category[] = [
  {
    number: "01",
    tag: "Bariátrica",
    title: "Cirugía Bariátrica y Metabólica",
    description:
      "Procedimientos quirúrgicos de alta complejidad para el tratamiento definitivo de la obesidad y las enfermedades metabólicas asociadas.",
    bgImage: "/images/paso-cirugia.jpg",
    procedures: [
      { label: "Manga gástrica", slug: "manga-gastrica" },
      { label: "Bypass gástrico", slug: "bypass-gastrico" },
      { label: "Bipartición intestinal" },
      { label: "Cirugía revisional", slug: "cirugia-revisional" },
    ],
    forWhom:
      "Pacientes con obesidad, diabetes tipo 2, hipertensión o síndrome metabólico.",
  },
  {
    number: "02",
    tag: "Obesidad",
    title: "Manejo de Obesidad",
    description:
      "Abordaje integral y personalizado para el control del peso, combinando evaluación médica, acompañamiento nutricional y soporte farmacológico cuando corresponde.",
    bgImage: "/images/doctor-consulta.jpg",
    procedures: [
      { label: "Tratamiento multidisciplinario" },
      { label: "Tratamiento farmacológico" },
      { label: "Balón intragástrico", slug: "balon-intragastrico" },
    ],
    forWhom:
      "Quienes buscan un tratamiento completo y sostenido del sobrepeso.",
  },
  {
    number: "03",
    tag: "Laparoscópica",
    title: "Cirugía Laparoscópica",
    description:
      "Técnica mínimamente invasiva para el tratamiento de patologías abdominales. Menos dolor, recuperación más rápida y resultados estéticos superiores.",
    bgImage: "/images/doctor-scrubs.jpg",
    procedures: [
      { label: "Vesícula", slug: "cirugia-laparoscopica" },
      { label: "Apéndice", slug: "cirugia-laparoscopica" },
      { label: "Hernia", slug: "cirugia-laparoscopica" },
      { label: "Reflujo", slug: "cirugia-laparoscopica" },
      { label: "Colon", slug: "cirugia-laparoscopica" },
      { label: "y más", slug: "cirugia-laparoscopica" },
    ],
    forWhom:
      "Patologías abdominales que requieren intervención con mínima invasión.",
  },
];

function ProcedureChip({ p }: { p: Procedure }) {
  const baseClasses =
    "text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-colors duration-300 hover:bg-white/20";
  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.10)",
    color: "rgba(255, 255, 255, 0.88)",
    border: "1px solid rgba(255, 255, 255, 0.10)",
  } as const;

  if (p.slug) {
    return (
      <Link href={`/servicios/${p.slug}`} className={baseClasses} style={style}>
        {p.label}
      </Link>
    );
  }
  return (
    <span className={baseClasses} style={style}>
      {p.label}
    </span>
  );
}

function CategoryCard({ c }: { c: Category }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl sm:rounded-[28px] min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] cursor-default flex flex-col justify-end"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
        <div className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <Image
            src={c.bgImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Gradient overlay */}
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
        style={{
          fontSize: "clamp(4rem, 12vw, 8rem)",
          color: "#fff",
          letterSpacing: "-0.06em",
        }}
      >
        {c.number}
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
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
              {c.tag}
            </span>
            <span className="font-serif text-sm tabular-nums text-white/35">
              — {c.number}
            </span>
          </div>

          <h3
            className="font-serif text-lg sm:text-[22px] lg:text-[24px] font-normal leading-[1.15] text-white mb-1.5 sm:mb-2.5"
            style={{ letterSpacing: "-0.015em" }}
          >
            {c.title}
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-white/75 mb-3 sm:mb-4">
            {c.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
            {c.procedures.map((p) => (
              <ProcedureChip key={p.label} p={p} />
            ))}
          </div>

          <p className="text-[10px] sm:text-[11px] text-white/50 mb-3 sm:mb-4 leading-relaxed">
            <span className="font-semibold text-white/65 uppercase tracking-wider text-[9px] sm:text-[10px]">
              Ideal para:{" "}
            </span>
            {c.forWhom}
          </p>

          <a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-all duration-300 hover:gap-3"
            aria-label={`Agenda tu evaluación para ${c.title}`}
          >
            Agenda tu evaluación
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServiceCardGrid() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Categorías de servicios Exilus"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-2xl mb-12 sm:mb-14"
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
            Tres especialidades
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Encuentra el procedimiento
            <br />
            <em
              className="italic"
              style={{ color: "var(--color-primary-dark)" }}
            >
              indicado para ti.
            </em>
          </h2>
          <p
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--color-warm-text)" }}
          >
            Cada área reúne los procedimientos específicos. Toca un subservicio
            con detalle disponible para conocer más sobre técnica, recuperación
            y candidatos.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((c) => (
            <CategoryCard key={c.number} c={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
