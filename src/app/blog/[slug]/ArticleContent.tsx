"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Check,
  ChevronDown,
  ClipboardCheck,
  ArrowRight,
  BookOpen,
  Stethoscope,
  ExternalLink,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  accordionContent,
  accordionChevron,
  cardHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";
import type { BlogPost, BlogSection } from "@/lib/blog-data";

// ─── Inline markdown-lite: [texto](href) + **negrita** ─────────────────────
// Mantiene el interlinking dentro de los párrafos sin meter HTML en la data.
function renderInline(text: string): React.ReactNode {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return tokens.map((token, i) => {
    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 decoration-1 transition-opacity hover:opacity-75"
            style={{ color: "var(--color-primary)" }}
          >
            {label}
          </a>
        );
      }
      return (
        <Link
          key={i}
          href={href}
          className="font-medium underline underline-offset-4 decoration-1 transition-opacity hover:opacity-75"
          style={{ color: "var(--color-primary)" }}
        >
          {label}
        </Link>
      );
    }
    const boldMatch = token.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={i} className="font-semibold" style={{ color: "var(--color-primary)" }}>
          {boldMatch[1]}
        </strong>
      );
    }
    return <Fragment key={i}>{token}</Fragment>;
  });
}

// ─── Callout ────────────────────────────────────────────────────────────────
function Callout({
  type,
  title,
  text,
}: {
  type: "info" | "cta";
  title?: string;
  text: string;
}) {
  const isCta = type === "cta";
  return (
    <div
      className="mt-8 rounded-2xl border p-6 sm:p-7"
      style={{
        backgroundColor: isCta ? "var(--color-primary)" : "var(--color-lilac)",
        borderColor: isCta ? "var(--color-primary)" : "rgba(108,29,69,0.15)",
      }}
    >
      {title && (
        <p
          className="font-serif text-xl font-normal mb-2"
          style={{ color: isCta ? "var(--color-cream)" : "var(--color-primary)" }}
        >
          {title}
        </p>
      )}
      <p
        className="text-base leading-relaxed [&_a]:!text-inherit [&_a]:font-semibold"
        style={{
          color: isCta ? "rgba(245,235,220,0.92)" : "var(--color-warm-text)",
        }}
      >
        {renderInline(text)}
      </p>
    </div>
  );
}

// ─── Sección del artículo ───────────────────────────────────────────────────
function Section({ section }: { section: BlogSection }) {
  return (
    <motion.section
      id={section.id}
      className="scroll-mt-32"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight tracking-tight text-primary mt-14 mb-5">
        {section.heading}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-base sm:text-lg text-warm-text leading-relaxed mb-4">
          {renderInline(p)}
        </p>
      ))}

      {section.list && (
        <ul className="mt-5 space-y-3">
          {section.list.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              {section.list!.type === "check" ? (
                <span
                  className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-cta-soft)" }}
                >
                  <Check className="h-3 w-3" style={{ color: "#1a3a0a" }} aria-hidden="true" />
                </span>
              ) : (
                <span
                  className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                  aria-hidden="true"
                />
              )}
              <span className="text-base text-warm-text leading-relaxed">
                {renderInline(item)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-6 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--color-border)" }}>
          <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
            <thead>
              <tr style={{ backgroundColor: "var(--color-primary)" }}>
                {section.table.headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3.5 font-sans text-xs sm:text-sm font-semibold tracking-wide"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    backgroundColor: ri % 2 === 0 ? "var(--color-card)" : "var(--color-muted)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3.5 align-top leading-relaxed ${
                        ci === 0 ? "font-semibold text-primary" : "text-warm-text"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {section.table.caption && (
            <p
              className="px-4 py-3 text-xs leading-relaxed border-t"
              style={{ color: "var(--color-muted-foreground)", borderColor: "var(--color-border)" }}
            >
              {section.table.caption}
            </p>
          )}
        </div>
      )}

      {section.callout && (
        <Callout
          type={section.callout.type}
          title={section.callout.title}
          text={section.callout.text}
        />
      )}
    </motion.section>
  );
}

// ─── FAQ accordion ──────────────────────────────────────────────────────────
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        borderColor: isOpen ? "rgba(108,29,69,0.30)" : "var(--color-border)",
        backgroundColor: "var(--color-card)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-sans text-base font-semibold text-primary">{question}</span>
        <motion.span
          variants={accordionChevron}
          animate={isOpen ? "expanded" : "collapsed"}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-base text-warm-text leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Artículo completo ──────────────────────────────────────────────────────
export default function ArticleContent({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* ── Columna principal ── */}
          <div className="max-w-3xl">
            {/* Lo esencial — bloque citable (AI Overviews) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="rounded-2xl border p-6 sm:p-8"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
            >
              <motion.p
                variants={staggerItem}
                className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-4"
              >
                Lo esencial en 30 segundos
              </motion.p>
              <ul className="space-y-3">
                {post.keyTakeaways.map((t, i) => (
                  <motion.li key={i} variants={staggerItem} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--color-lilac)" }}
                    >
                      <Check className="h-3 w-3" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                    </span>
                    <span className="text-base text-warm-text leading-relaxed">{t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Secciones */}
            {post.sections.map((s) => (
              <Section key={s.id} section={s} />
            ))}

            {/* Disclaimer médico (YMYL — fijo en todos los artículos) */}
            <div
              className="mt-14 rounded-xl border-l-4 px-5 py-4"
              style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-muted)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                Este artículo tiene fines educativos y no reemplaza la consulta médica
                presencial. Cada caso es individual: la indicación de cualquier
                procedimiento requiere una evaluación profesional completa.
              </p>
            </div>

            {/* Autor — E-E-A-T */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="mt-10 flex flex-col sm:flex-row gap-6 rounded-2xl border p-6 sm:p-8"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src="/images/doctor-saco-blanco.jpg"
                  alt={`${CLIENT.doctor} — Cirujano Bariatra en Trujillo`}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-1.5">
                  Escrito y revisado médicamente por
                </p>
                <p className="font-serif text-2xl font-normal text-primary">{CLIENT.doctor}</p>
                <p className="text-sm text-warm-text mt-1">{CLIENT.doctorRole}</p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-muted-foreground)" }}>
                  Más de 16 años de experiencia en cirugía abdominal y 10 en cirugía
                  bariátrica. Miembro FACS, ASMBS, IFSO y SAGES. Pionero de la cirugía
                  bariátrica en el norte del Perú — atiende en Trujillo.
                </p>
                <Link
                  href="/contacto"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-75"
                >
                  Agenda una evaluación con el Dr. Salazar
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="mt-14"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight tracking-tight text-primary mb-6">
                Preguntas frecuentes
              </h2>
              <div className="space-y-3">
                {post.faqs.map((f, i) => (
                  <FAQItem
                    key={i}
                    question={f.question}
                    answer={f.answer}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Fuentes */}
            <div className="mt-12">
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-3">
                Fuentes consultadas
              </p>
              <ul className="space-y-2">
                {post.sources.map((s, i) => (
                  <li key={i}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 text-sm transition-opacity hover:opacity-75"
                      style={{ color: "var(--color-muted-foreground)" }}
                    >
                      <ExternalLink className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Sidebar sticky ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {/* TOC */}
              <nav
                aria-label="Contenido del artículo"
                className="rounded-2xl border p-6"
                style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
              >
                <p className="flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-4">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  En esta guía
                </p>
                <ol className="space-y-2.5">
                  {post.sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-start gap-2.5 text-sm leading-snug text-warm-text transition-colors hover:text-primary"
                      >
                        <span
                          className="font-serif text-sm mt-px"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* CTA card */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <span
                  className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(245,235,220,0.12)" }}
                >
                  <Stethoscope className="h-5 w-5" style={{ color: "var(--color-cream)" }} aria-hidden="true" />
                </span>
                <p className="font-serif text-xl font-normal" style={{ color: "var(--color-cream)" }}>
                  Resuelve tu caso en una evaluación
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(245,235,220,0.75)" }}>
                  Con el Dr. Augusto Salazar en Trujillo. Sin compromiso.
                </p>
                <a
                  href={CLIENT.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--color-cta)", color: "#1a3a0a" }}
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Agenda tu evaluación
                </a>
                <Link
                  href="/#soy-candidato"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
                  style={{ borderColor: "rgba(245,235,220,0.30)", color: "var(--color-cream)" }}
                >
                  <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                  ¿Soy candidato? — Test 1 min
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Relacionados: servicios + artículos ── */}
        <div className="mt-20 border-t pt-14" style={{ borderColor: "var(--color-border)" }}>
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-2">
            Sigue explorando
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-primary mb-8">
            Te puede servir también
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rp) => (
              <motion.div key={rp.slug} {...cardHover} className="h-full">
                <Link
                  href={`/blog/${rp.slug}`}
                  className="flex h-full flex-col rounded-2xl border p-6 transition-colors"
                  style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
                >
                  <span
                    className="self-start rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{ backgroundColor: "var(--color-lilac)", color: "var(--color-primary)" }}
                  >
                    {rp.category}
                  </span>
                  <p className="mt-3 font-serif text-xl font-normal leading-snug text-primary">
                    {rp.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "var(--color-muted-foreground)" }}>
                    {rp.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Leer la guía
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
            {post.relatedServices.map((rs) => (
              <motion.div key={rs.href} {...cardHover} className="h-full">
                <Link
                  href={rs.href}
                  className="flex h-full flex-col rounded-2xl border p-6"
                  style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary)" }}
                >
                  <span
                    className="self-start rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{ backgroundColor: "rgba(245,235,220,0.12)", color: "var(--color-cream)" }}
                  >
                    Exilus Trujillo
                  </span>
                  <p className="mt-3 font-serif text-xl font-normal leading-snug" style={{ color: "var(--color-cream)" }}>
                    {rs.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "rgba(245,235,220,0.75)" }}>
                    {rs.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-cta)" }}>
                    Conocer más
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
