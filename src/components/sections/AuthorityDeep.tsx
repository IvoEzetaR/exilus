"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  scaleIn,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

// Membresías internacionales con descripción para el paciente
const memberships = [
  {
    sigla: "FACS",
    nombre: "Fellow of the American College of Surgeons",
    nota: "Distinción honorífica otorgada a los cirujanos de mayor excelencia mundial. Pocos cirujanos peruanos la ostentan.",
  },
  {
    sigla: "ASMBS",
    nombre: "American Society for Metabolic & Bariatric Surgery",
    nota: "Sociedad científica líder en cirugía bariátrica y metabólica a nivel internacional.",
  },
  {
    sigla: "IFSO",
    nombre: "International Federation for the Surgery of Obesity",
    nota: "Federación mundial que establece los estándares de calidad y seguridad en cirugía de obesidad.",
  },
  {
    sigla: "SAGES",
    nombre: "Society of American Gastrointestinal and Endoscopic Surgeons",
    nota: "Referente global en técnicas laparoscópicas y endoscópicas avanzadas.",
  },
  {
    sigla: "ATLS",
    nombre: "Advanced Trauma Life Support — American College of Surgeons",
    nota: "Certificación internacional en manejo avanzado de trauma quirúrgico.",
  },
  {
    sigla: "APCBEM",
    nombre: "Asociación Peruana de Cirugía Bariátrica y Enfermedades Metabólicas",
    nota: "Miembro activo de la asociación que regula y promueve la especialidad en el Perú.",
  },
];

// Formación académica
const formacion = [
  {
    titulo: "MBA en Gestión de Salud",
    institucion: "CENTRUM PUCP",
    anio: "2021",
  },
  {
    titulo: "Doctorado en Medicina (M.D.)",
    institucion: "Universidad Nacional de Trujillo",
    anio: "2015",
  },
  {
    titulo: "Maestría en Medicina",
    institucion: "Universidad Nacional de Trujillo",
    anio: "2013",
  },
  {
    titulo: "Especialización en Cirugía Laparoscópica y Bariátrica",
    institucion: "Centro de Entrenamiento de Cirugía Mínimamente Invasiva — Tijuana, México",
    anio: "2009",
  },
  {
    titulo: "Especialidad en Cirugía General",
    institucion: "Universidad Nacional de Trujillo",
    anio: "2009",
  },
];

/* ─── Item del timeline con animación al entrar al viewport ─── */
function FormacionItem({
  f,
  index,
  total,
}: {
  f: (typeof formacion)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isActive = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className={`ml-6 ${index === total - 1 ? "" : "mb-8"}`}
    >
      {/* Punto de la línea de tiempo — anillo + relleno animado */}
      <span
        aria-hidden="true"
        className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full"
        style={{
          backgroundColor: "var(--color-cream)",
          border: "2px solid var(--color-accent)",
          outline: "3px solid var(--color-cream)",
          transition: "background-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease",
          ...(isActive
            ? {
                backgroundColor: "var(--color-primary)",
                boxShadow: "0 0 0 4px rgba(108,29,69,0.18)",
                transform: "scale(1.05)",
              }
            : {}),
        }}
      />

      <p
        className="text-[10px] font-semibold tracking-widest uppercase mb-1"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        {f.anio}
      </p>
      <p
        className="text-sm font-semibold leading-snug"
        style={{ color: "var(--color-primary)" }}
      >
        {f.titulo}
      </p>
      <p
        className="text-xs leading-relaxed mt-0.5"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        {f.institucion}
      </p>
    </motion.li>
  );
}

export default function AuthorityDeep() {
  const shouldReduce = useReducedMotion();
  const timelineRef = useRef<HTMLOListElement>(null);

  /* Línea vertical animada que crece según el scroll de la sección */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="credenciales"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Credenciales y formación del Dr. Víctor Salazar"
    >
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">

        {/* Membresías y certificaciones internacionales */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.p
            variants={staggerItem}
            className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Certificaciones y membresías internacionales
          </motion.p>

          <motion.h3
            variants={staggerItem}
            className="font-serif text-3xl sm:text-4xl font-light leading-tight tracking-tight mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            Respaldado por los organismos<br className="hidden sm:block" /> científicos más exigentes del mundo
          </motion.h3>

          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            aria-label="Membresías internacionales"
          >
            {memberships.map((m) => (
              <motion.div
                key={m.sigla}
                variants={scaleIn}
                className="membership-card group rounded-2xl p-5 flex flex-col gap-2"
              >
                <span
                  className="font-serif text-xl font-normal leading-none transition-colors duration-500 group-hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-accent)" }}
                >
                  {m.sigla}
                </span>
                <p
                  className="text-xs font-semibold leading-snug"
                  style={{ color: "var(--color-primary)" }}
                >
                  {m.nombre}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {m.nota}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Formación académica */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Columna izquierda: encabezado + imagen del doctor (solo desktop) */}
          <motion.div variants={staggerItem}>
            <p
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Formación académica
            </p>
            <h3
              className="font-serif text-3xl sm:text-4xl font-light leading-tight tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Clínica, gestión y docencia. Una formación sin precedentes en el norte del Perú.
            </h3>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              El Dr. Salazar es el único cirujano bariátrico de la región con doble perfil:
              doctor en medicina y MBA en gestión de salud por CENTRUM PUCP — la escuela de
              negocios número uno del Perú. Eso significa que dirige su clínica con los mismos
              estándares con los que opera.
            </p>

            {/* Imagen del doctor — solo desktop, contenida y elegante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block mt-10 relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/doctor-formacion.jpg"
                alt="Dr. Víctor Augusto Salazar Tantaleán"
                fill
                sizes="400px"
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(108,29,69,0.45) 0%, rgba(108,29,69,0.05) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-5 right-5">
                <p
                  className="font-serif text-lg font-light leading-tight"
                  style={{ color: "var(--color-cream)" }}
                >
                  Dr. Víctor A. Salazar T.
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(245,235,220,0.85)" }}
                >
                  FACS · MBA · Cirujano Bariátrico
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha: timeline animado */}
          <motion.div variants={staggerItem} className="relative">
            {/* Track estática */}
            <ol
              ref={timelineRef}
              className="relative"
              style={{
                borderLeft: "1px solid var(--color-border)",
              }}
            >
              {/* Línea quirúrgica vino que crece con el scroll */}
              <motion.span
                aria-hidden="true"
                className="absolute left-[-1px] top-0 w-[2px] origin-top"
                style={{
                  height: shouldReduce ? "100%" : lineHeight,
                  background:
                    "linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 60%, var(--color-lilac) 100%)",
                }}
              />

              {formacion.map((f, i) => (
                <FormacionItem key={i} f={f} index={i} total={formacion.length} />
              ))}
            </ol>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
