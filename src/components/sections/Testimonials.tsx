"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeInUp, staggerContainer, maxWidth, sectionPadding } from "@/lib/design-system";

// TODO: reemplazar cuando cliente envíe testimonios con autorización de pacientes
const testimonials = [
  {
    initials: "A",
    name: "Paciente A",
    quote:
      "Testimonio pendiente — cliente debe enviar autorización de publicación.",
  },
  {
    initials: "B",
    name: "Paciente B",
    quote:
      "Testimonio pendiente — cliente debe enviar autorización de publicación.",
  },
  {
    initials: "C",
    name: "Paciente C",
    quote:
      "Testimonio pendiente — cliente debe enviar autorización de publicación.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className={`bg-white ${sectionPadding}`}>
      <div className={maxWidth}>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonios
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-5">
                <span className="text-2xl font-extrabold text-primary">{t.initials}</span>
              </div>
              <Quote className="h-6 w-6 text-primary/20 mb-4" />
              {/* TODO: reemplazar con testimonio real cuando cliente lo envíe */}
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-5">
                {t.quote}
              </p>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Paciente de Exilus</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
