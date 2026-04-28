"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  scaleOnHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

type Case = {
  id: string;
  name: string;
  procedure: string;
  highlight: string;
  quote: string;
  closing?: string;
  /** Single composite image (already with antes/después) */
  composite?: string;
  /** Or pair antes/después */
  antes?: string;
  despues?: string;
};

const featuredCases: Case[] = [
  {
    id: "mariana",
    name: "Mariana",
    procedure: "Manga Gástrica",
    highlight: "110 kg → 68 kg",
    quote:
      "Nuestra paciente Mariana llegó a nosotros con un peso inicial de 110 kg. Actualmente, luego de 6 meses de su cirugía de Manga Gástrica, su peso es de 68 kg.",
    composite: "/images/mariana-antes-despues.jpg",
  },
  {
    id: "daniel",
    name: "Daniel",
    procedure: "Bypass Gástrico",
    highlight: "−14 kg en el primer mes",
    quote:
      "En el primer mes después del bypass gástrico, Daniel perdió 14 kg. Gracias al Dr. Víctor y a su equipo, pudo mejorar su estilo de vida.",
    antes: "/images/daniel-antes.png",
    despues: "/images/daniel-despues.jpg",
  },
  {
    id: "diana",
    name: "Diana",
    procedure: "Cirugía Bariátrica",
    highlight: "Volvió a caminar y viajar sin cansarse",
    quote:
      "“Muchas gracias Doctor Augusto… ahora ya puedo caminar y no me canso en mis viajes.”",
    closing:
      "En Exilus estamos felices de los resultados obtenidos en cada paciente. Así como Diana, hay muchos otros casos de pacientes que han recuperado su salud y mejorado su calidad de vida.",
    antes: "/images/diana-antes.jpg",
    despues: "/images/diana-despues.jpg",
  },
];

/* ─── Card que muestra antes/después en pareja o composite único ─── */
function CaseCard({ c }: { c: Case }) {
  return (
    <motion.article
      variants={staggerItem}
      className="rounded-2xl overflow-hidden border flex flex-col h-full"
      style={{
        backgroundColor: "var(--color-card)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Imagen(es) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
        {c.composite ? (
          <Image
            src={c.composite}
            alt={`${c.name} — antes y después`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="grid grid-cols-2 h-full">
            <div className="relative">
              <Image
                src={c.antes!}
                alt={`${c.name} — antes`}
                fill
                sizes="(max-width: 640px) 50vw, 200px"
                className="object-cover"
              />
              <span
                className="absolute top-2 left-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-cream)",
                }}
              >
                Antes
              </span>
            </div>
            <div className="relative border-l-2 border-white">
              <Image
                src={c.despues!}
                alt={`${c.name} — después`}
                fill
                sizes="(max-width: 640px) 50vw, 200px"
                className="object-cover"
              />
              <span
                className="absolute top-2 right-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "#1a3a0a",
                }}
              >
                Después
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Cuerpo */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="font-serif text-lg font-medium"
            style={{ color: "var(--color-primary)" }}
          >
            {c.name}
          </span>
          <span
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
            style={{
              backgroundColor: "var(--color-lilac)",
              color: "var(--color-primary)",
            }}
          >
            {c.procedure}
          </span>
        </div>

        <p
          className="text-xs font-semibold tracking-wide uppercase mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          {c.highlight}
        </p>

        <Quote
          className="h-6 w-6 mb-2"
          style={{ color: "rgba(108,29,69,0.25)" }}
          aria-hidden="true"
        />
        <p
          className="text-sm sm:text-base leading-relaxed flex-1"
          style={{ color: "var(--color-warm-text)" }}
        >
          {c.quote}
        </p>

        {c.closing && (
          <p
            className="mt-4 text-xs sm:text-sm leading-relaxed italic"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {c.closing}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Testimonios de pacientes Exilus"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="text-center mb-14"
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Testimonios
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Lo que dicen nuestros pacientes
          </h2>
          <p
            className="mt-4 text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--color-warm-text)" }}
          >
            Historias reales de transformación que van más allá del peso —
            calidad de vida, salud recuperada y confianza renovada.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredCases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </motion.div>

        {/* CTA → /testimonios */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12 sm:mt-14 text-center"
        >
          <motion.div {...scaleOnHover} className="inline-block">
            <Link
              href="/testimonios"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-cream)",
                boxShadow: "0 8px 24px rgba(108,29,69,0.20)",
              }}
            >
              Ver más casos de éxito
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <p
            className="mt-3 text-xs"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Más historias de pacientes felices que recuperaron su salud
          </p>
        </motion.div>
      </div>
    </section>
  );
}
