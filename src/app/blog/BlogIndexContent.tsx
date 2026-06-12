"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  ClipboardCheck,
  Stethoscope,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";
import type { BlogPost } from "@/lib/blog-data";

function PostCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  return (
    <motion.div variants={staggerItem} {...cardHover} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border ${
          featured ? "lg:flex-row" : ""
        }`}
        style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
      >
        {/* Imagen */}
        <div
          className={`relative overflow-hidden ${
            featured ? "h-64 lg:h-auto lg:w-[46%] lg:flex-shrink-0" : "h-52"
          }`}
        >
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 46vw" : "(max-width: 640px) 100vw, 50vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(47,14,28,0.35) 0%, transparent 45%)" }}
            aria-hidden="true"
          />
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-sm"
            style={{ backgroundColor: "rgba(245,235,220,0.92)", color: "var(--color-primary)" }}
          >
            {post.category}
          </span>
        </div>

        {/* Texto */}
        <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-10 lg:justify-center" : "sm:p-7"}`}>
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {post.dateDisplay}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingMinutes} min de lectura
            </span>
          </div>
          <h2
            className={`mt-3 font-serif font-light leading-snug tracking-tight text-primary ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {post.title}
          </h2>
          <p
            className={`mt-3 leading-relaxed flex-1 ${featured ? "text-base sm:text-lg" : "text-sm"}`}
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {post.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Leer la guía completa
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogIndexContent({ posts }: { posts: BlogPost[] }) {
  const [featured, ...rest] = posts;

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        {/* Posts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="space-y-8"
        >
          {featured && <PostCard post={featured} featured />}
          {rest.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2">
              {rest.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Interlinking a páginas money */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-16"
        >
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-2">
            Nuestros servicios
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-primary mb-8">
            De la lectura a la acción
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                label: "Cirugía Bariátrica",
                href: "/servicios/cirugia-bariatrica",
                description: "Manga gástrica, bypass y cirugía revisional en Trujillo.",
              },
              {
                label: "Manejo de Obesidad",
                href: "/servicios/manejo-obesidad",
                description: "Tratamiento integral, farmacológico y balón intragástrico.",
              },
              {
                label: "Cirugía Laparoscópica",
                href: "/servicios/cirugia-laparoscopica",
                description: "Vesícula, hernias, reflujo y más — mínimamente invasiva.",
              },
            ].map((s) => (
              <motion.div key={s.href} {...cardHover} className="h-full">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border p-6"
                  style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--color-lilac)" }}
                  >
                    <Stethoscope className="h-5 w-5" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-serif text-xl font-normal text-primary">{s.label}</p>
                  <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "var(--color-muted-foreground)" }}>
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ver servicio
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-16 overflow-hidden rounded-3xl px-6 py-12 sm:px-12 text-center"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(245,235,220,0.65)" }}>
            El siguiente paso
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight" style={{ color: "var(--color-cream)" }}>
            Las guías informan. La evaluación decide.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: "rgba(245,235,220,0.80)" }}>
            Conversa tu caso con el Dr. Augusto Salazar en Trujillo y recibe una
            recomendación personalizada, sin compromiso.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-cta)", color: "#1a3a0a" }}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Agenda tu evaluación
            </a>
            <Link
              href="/#soy-candidato"
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
              style={{ borderColor: "rgba(245,235,220,0.30)", color: "var(--color-cream)" }}
            >
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              ¿Soy candidato? — Test de 1 minuto
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
