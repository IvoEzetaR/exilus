"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
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

export default function AuthorityDeep() {
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
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 32px rgba(108,29,69,0.10)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="rounded-2xl p-5 border flex flex-col gap-2"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="font-serif text-xl font-normal leading-none"
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
          {/* Columna izquierda: encabezado */}
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
          </motion.div>

          {/* Columna derecha: lista de títulos */}
          <motion.div variants={staggerItem}>
            <ol className="relative border-l" style={{ borderColor: "var(--color-border)" }}>
              {formacion.map((f, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="mb-8 ml-6 last:mb-0"
                >
                  {/* Punto de la línea de tiempo */}
                  <span
                    className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2"
                    style={{
                      backgroundColor: "var(--color-cream)",
                      borderColor: "var(--color-accent)",
                      outline: "3px solid var(--color-cream)",
                    }}
                    aria-hidden="true"
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
              ))}
            </ol>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
