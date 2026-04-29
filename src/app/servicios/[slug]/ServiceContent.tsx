"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  TrendingDown,
  HeartPulse,
  Minimize2,
  Utensils,
  ShieldCheck,
  Clock,
  Activity,
  Award,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
  RefreshCw,
  Search,
  Wrench,
  Eye,
  Users,
  Settings,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  cardHover,
  scaleOnHover,
  accordionContent,
  accordionChevron,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";
import type { ServiceData, SubService } from "@/lib/services-data";
import { getOtherServices } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  TrendingDown,
  HeartPulse,
  Minimize2,
  Utensils,
  ShieldCheck,
  Clock,
  Activity,
  Award,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
  RefreshCw,
  Search,
  Wrench,
  Eye,
  Users,
  Settings,
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span
          className="font-serif text-lg font-medium pr-4"
          style={{ color: "var(--color-primary)" }}
        >
          {question}
        </span>
        <motion.span
          variants={accordionChevron}
          animate={open ? "expanded" : "collapsed"}
        >
          <ChevronDown
            className="h-5 w-5 flex-shrink-0"
            style={{ color: "var(--color-primary)" }}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-base leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Sub-service block: alternating layout (image left/right) ─── */
function SubServiceBlock({
  sub,
  index,
  categoryName,
}: {
  sub: SubService;
  index: number;
  categoryName: string;
}) {
  const isReversed = index % 2 === 1;

  return (
    <motion.section
      id={sub.slug}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      className="scroll-mt-24"
    >
      {/* Header del sub-service */}
      <motion.div variants={fadeInUp} className="mb-10 sm:mb-12">
        <p
          className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-2"
          style={{ color: "var(--color-primary)" }}
        >
          <span
            className="font-serif text-base font-light tracking-normal normal-case opacity-60"
            style={{ color: "var(--color-primary)" }}
          >
            0{index + 1}
          </span>
          <span
            className="h-px w-6"
            style={{ backgroundColor: "var(--color-primary)" }}
            aria-hidden="true"
          />
          {categoryName}
        </p>
        <h3
          className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.08] tracking-tight"
          style={{ color: "var(--color-primary)" }}
        >
          {sub.name}
        </h3>
        <p
          className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{ color: "var(--color-warm-text)" }}
        >
          {sub.shortDescription}
        </p>
      </motion.div>

      {/* Layout image + content */}
      <div
        className={`grid gap-8 lg:gap-12 lg:grid-cols-12 items-start ${
          isReversed ? "" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          variants={isReversed ? fadeInRight : fadeInLeft}
          className={`relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-2xl lg:rounded-3xl lg:col-span-5 ${
            isReversed ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={sub.image}
            alt={sub.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
            }}
          />
          {/* Stats overlay - bottom of image */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div
              className="grid grid-cols-2 gap-3 rounded-xl p-3 sm:p-4"
              style={{
                backgroundColor: "rgba(245, 235, 220, 0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {sub.stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <p
                    className="font-serif text-lg sm:text-xl font-semibold leading-none"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-1 text-[10px] sm:text-[11px] leading-tight"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={isReversed ? fadeInLeft : fadeInRight}
          className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}
        >
          {/* Description */}
          <div className="space-y-4 mb-8">
            {sub.description.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--color-warm-text)" }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {sub.benefits.map((b) => {
              const Icon = iconMap[b.icon] || ShieldCheck;
              return (
                <div
                  key={b.title}
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: "var(--color-card)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "var(--color-lilac)" }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: "var(--color-primary)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-serif text-sm font-medium leading-snug"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {b.title}
                      </p>
                      <p
                        className="mt-1 text-xs leading-relaxed"
                        style={{ color: "var(--color-warm-text)" }}
                      >
                        {b.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ideal para */}
          <div
            className="rounded-xl p-5 border mb-6"
            style={{
              backgroundColor: "var(--color-cream)",
              borderColor: "var(--color-border)",
            }}
          >
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Ideal para
            </p>
            <ul className="space-y-2">
              {sub.candidateProfile.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                  style={{ color: "var(--color-warm-text)" }}
                >
                  <CheckCircle
                    className="h-4 w-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-cta)" }}
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA inline */}
          <a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:shadow-[0_8px_24px_rgba(120,214,75,0.30)]"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "#1a3a0a",
            }}
          >
            <Calendar className="h-4 w-4" />
            Agenda tu evaluación
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── Main component ─── */
export default function ServiceContent({ service }: { service: ServiceData }) {
  const otherServices = getOtherServices(service.slug);

  return (
    <>
      {/* INTRO — descripción de la categoría + stats */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-start"
          >
            <motion.div variants={fadeInLeft}>
              <h2
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.08] tracking-tight"
                style={{ color: "var(--color-primary)" }}
              >
                ¿Qué es la {service.name.toLowerCase()}?
              </h2>
              <div className="mt-6 space-y-4">
                {service.intro.map((p, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="font-serif text-xl font-medium mb-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  Datos clave
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="font-serif text-2xl font-semibold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS — 3 razones por las que esta categoría destaca */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        style={{ backgroundColor: "var(--color-card)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-3 gap-6"
          >
            {service.highlights.map((h) => {
              const Icon = iconMap[h.icon] || ShieldCheck;
              return (
                <motion.div
                  key={h.title}
                  variants={staggerItem}
                  {...cardHover}
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--color-lilac)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3
                    className="mt-4 font-serif text-lg font-medium leading-snug"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {h.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {h.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TABLE OF CONTENTS — navegación a sub-servicios */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Procedimientos disponibles
            </p>
            <h2
              className="font-serif text-2xl sm:text-3xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              {service.subServices.length} procedimientos en esta especialidad
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {service.subServices.map((sub, i) => (
              <motion.a
                key={sub.slug}
                href={`#${sub.slug}`}
                variants={staggerItem}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="font-serif text-sm font-semibold tabular-nums opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--color-primary)" }}
                >
                  0{i + 1}
                </span>
                <span
                  className="font-sans text-sm font-medium flex-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {sub.name}
                </span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--color-primary)" }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SUB-SERVICES — bloque alternado por sub-servicio */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28 lg:space-y-32">
          {service.subServices.map((sub, i) => (
            <SubServiceBlock
              key={sub.slug}
              sub={sub}
              index={i}
              categoryName={service.tag}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-card)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Resolvemos tus dudas
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Preguntas frecuentes
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
          >
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl font-light"
            style={{ color: "var(--color-cream)" }}
          >
            Da el primer paso
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(245,235,220,0.75)" }}
          >
            Agenda una evaluación con el Dr. Salazar para definir cuál de los
            procedimientos de esta especialidad es el mejor para tu caso.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
              }}
            >
              <Calendar className="h-5 w-5" />
              Agenda tu evaluación
            </motion.a>
            <motion.a
              href={CLIENT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold"
              style={{
                borderColor: "rgba(245,235,220,0.3)",
                color: "var(--color-cream)",
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </motion.a>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES — las otras 2 categorías */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Explora otras especialidades
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Otras áreas de atención
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 gap-6"
          >
            {otherServices.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <Link href={`/servicios/${s.slug}`} className="group block h-full">
                  <motion.div
                    {...cardHover}
                    className="relative overflow-hidden rounded-2xl border h-full min-h-[260px] flex flex-col"
                    style={{
                      backgroundColor: "var(--color-card)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))",
                        }}
                      />
                      <span
                        className="absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase"
                        style={{
                          backgroundColor: "rgba(245,235,220,0.92)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className="font-serif text-xl font-medium leading-snug"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {s.name}
                      </h3>
                      <p
                        className="mt-2 text-sm leading-relaxed flex-1"
                        style={{ color: "var(--color-warm-text)" }}
                      >
                        {s.shortDescription}
                      </p>
                      <span
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                        style={{ color: "var(--color-primary)" }}
                      >
                        Ver especialidad <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
