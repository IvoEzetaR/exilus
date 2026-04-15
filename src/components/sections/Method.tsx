"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
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

const steps = [
  {
    step: "1",
    title: "Evaluación inicial",
    description:
      "Consulta médica personalizada para conocer tu historia clínica, objetivos y condición actual.",
  },
  {
    step: "2",
    title: "Estudios preoperatorios",
    description:
      "Exámenes de laboratorio e imagen necesarios para planificar el procedimiento de forma segura.",
  },
  {
    step: "3",
    title: "Evaluación multidisciplinaria",
    description:
      "Revisión conjunta con el equipo de nutrición, psicología y medicina interna.",
  },
  {
    step: "4",
    title: "Cirugía",
    description:
      "Intervención programada en clínica acreditada, con los más altos estándares de seguridad.",
  },
  {
    step: "5",
    title: "Seguimiento postoperatorio",
    description:
      "Control continuo para asegurar tu recuperación y el mantenimiento de los resultados a largo plazo.",
  },
];

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

      {/* Bloque 2 — Proceso del paciente (fondo crema) */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
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
              Tu camino con nosotros
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl font-light leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Tu proceso, paso a paso
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              Desde la primera consulta hasta tu seguimiento a largo plazo, cada etapa está
              pensada para que te sientas acompañado y seguro.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="relative"
            aria-label="Pasos del proceso"
          >
            {/* Línea vertical — desktop */}
            <div
              className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px hidden lg:block"
              style={{ backgroundColor: "var(--color-border)" }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {steps.map((s, idx) => (
                <motion.li
                  key={s.step}
                  variants={staggerItem}
                  className={`flex items-start gap-6 lg:gap-0 lg:grid lg:grid-cols-2 ${
                    idx % 2 === 0 ? "lg:text-right" : ""
                  }`}
                >
                  {/* Contenido izquierda (pares) */}
                  {idx % 2 === 0 ? (
                    <>
                      <div className="lg:pr-14 hidden lg:block">
                        <p
                          className="font-serif text-xl font-normal mb-1"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {s.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-warm-text)" }}
                        >
                          {s.description}
                        </p>
                      </div>

                      {/* Número central */}
                      <div className="flex lg:justify-start lg:pl-14 items-center gap-4">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold"
                          style={{
                            backgroundColor: "var(--color-cream)",
                            borderColor: "var(--color-primary)",
                            color: "var(--color-primary)",
                          }}
                        >
                          {s.step}
                        </div>
                        {/* Mobile content */}
                        <div className="lg:hidden">
                          <p
                            className="font-serif text-lg font-normal mb-1"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {s.title}
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--color-warm-text)" }}
                          >
                            {s.description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Número central (impares) */}
                      <div className="flex lg:justify-end lg:pr-14 items-center gap-4">
                        {/* Mobile content */}
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold"
                          style={{
                            backgroundColor: "var(--color-cream)",
                            borderColor: "var(--color-primary)",
                            color: "var(--color-primary)",
                          }}
                        >
                          {s.step}
                        </div>
                        <div className="lg:hidden">
                          <p
                            className="font-serif text-lg font-normal mb-1"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {s.title}
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--color-warm-text)" }}
                          >
                            {s.description}
                          </p>
                        </div>
                      </div>

                      {/* Contenido derecha (impares) */}
                      <div className="lg:pl-14 hidden lg:block">
                        <p
                          className="font-serif text-xl font-normal mb-1"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {s.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-warm-text)" }}
                        >
                          {s.description}
                        </p>
                      </div>
                    </>
                  )}
                </motion.li>
              ))}
            </div>
          </motion.ol>

          {/* CTA proceso */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="mt-14 text-center"
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
