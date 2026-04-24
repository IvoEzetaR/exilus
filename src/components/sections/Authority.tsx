"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInUp,
  scaleOnHover,
  scaleIn,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

// ─── Credenciales cuantitativas ─────────────────────────────────────────────
const credentials = [
  { label: "19+", note: "años en cirugía abdominal" },
  { label: "13+", note: "años cirujano titular, Clínica SANNA" },
  { label: "FACS", note: "Fellow — American College of Surgeons" },
  { label: "Director", note: "Hospital Regional Docente de Trujillo" },
];

// ─── Membresías internacionales con descripción para el paciente ─────────────
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

// ─── Formación académica ─────────────────────────────────────────────────────
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

export default function Authority() {
  return (
    <section
      id="nosotros"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Sobre el Dr. Víctor Salazar"
    >
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">

        {/* ── Bloque principal: foto + bio ─────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen — izquierda */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Foto */}
              <div
                className="relative w-80 sm:w-96 lg:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/doctor-terno.jpg"
                  alt="Dr. Víctor Augusto Salazar Tantaleán — Director General del Hospital Regional Docente de Trujillo y Cirujano Bariátrico"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 420px"
                  className="object-cover object-top"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(108,29,69,0.35) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Badge Director */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl px-4 py-2.5 shadow-lg"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-cream)",
                }}
              >
                <p className="text-xs font-bold leading-tight">Director General</p>
                <p className="text-[10px] mt-0.5 opacity-70">Hospital Regional Docente de Trujillo</p>
              </div>

              {/* Badge años */}
              <div
                className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-xl border"
                style={{
                  backgroundColor: "var(--color-cream)",
                  borderColor: "var(--color-border)",
                }}
              >
                <p
                  className="font-serif text-3xl font-light leading-none"
                  style={{ color: "var(--color-accent)" }}
                >
                  19+
                </p>
                <p className="text-[10px] font-medium mt-0.5" style={{ color: "var(--color-warm-text)" }}>
                  años de experiencia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texto — derecha */}
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
              Director Médico de Exilus
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl sm:text-5xl font-light leading-tight tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              {CLIENT.doctor}
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-1 text-sm font-semibold"
              style={{ color: "var(--color-warm-text)" }}
            >
              Cirujano Bariátrico y Laparoscopista Avanzado · FACS · MBA en Gestión de Salud
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="mt-6 text-base leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              Más de 19 años operando en cirugía abdominal y bariátrica en el Hospital Regional
              Docente de Trujillo, institución pública de alta complejidad nivel III-1. Cirujano
              titular en Clínica SANNA Sánchez Ferrer desde 2013 y docente universitario activo
              en la Universidad Nacional de Trujillo.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Director General del principal hospital público de La Libertad desde 2023. Presidente
              de la Sociedad Peruana de Cirugía Endoscópica, filial Trujillo. Autor publicado en la
              Revista de Gastroenterología del Perú. Formación internacional en México y Brasil.
              El único cirujano bariátrico de la región con MBA en Gestión de Salud (CENTRUM PUCP)
              y titulación FACS del American College of Surgeons.
            </motion.p>

            {/* Grid de credenciales cuantitativas */}
            <motion.div
              variants={staggerItem}
              className="mt-8 grid grid-cols-2 gap-3"
              aria-label="Credenciales cuantitativas"
            >
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: "var(--color-lilac)",
                    borderColor: "transparent",
                  }}
                >
                  <p
                    className="font-serif text-2xl font-light leading-none"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {c.label}
                  </p>
                  <p className="mt-1 text-xs font-medium leading-snug" style={{ color: "var(--color-warm-text)" }}>
                    {c.note}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="mt-8">
              <motion.a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-cream)",
                  boxShadow: "0 8px 24px rgba(108,29,69,0.20)",
                }}
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Agenda una consulta
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Membresías y certificaciones internacionales ──────────────── */}
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

        {/* ── Formación académica ───────────────────────────────────────── */}
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
