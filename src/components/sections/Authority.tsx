"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import { staggerContainer, fadeInUp, maxWidth, sectionPadding } from "@/lib/design-system";

const stats = [
  { value: "16+", label: "Años en cirugía abdominal" },
  { value: "10+", label: "Años en cirugía bariátrica" },
  { value: "+1,000", label: "Pacientes operados" },
  { value: "1°", label: "Pionero Norte del Perú" },
];

export default function Authority() {
  return (
    <section id="nosotros" className={`bg-cream ${sectionPadding}`}>
      <div className={maxWidth}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen — izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctor-terno.jpg"
                  alt="Dr. Víctor A. Salazar — Director del Hospital Regional Docente de Trujillo"
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              {/* Badge Director */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-white text-xs font-bold">Director Médico</p>
                <p className="text-white/70 text-[10px]">HRDT Trujillo</p>
              </div>
              {/* Badge años */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-2xl font-extrabold text-primary leading-none">16+</p>
                <p className="text-[10px] text-muted-foreground font-medium">años de experiencia</p>
              </div>
            </div>
          </motion.div>

          {/* Texto — derecha */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre el Director Médico
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight">
              Experiencia, liderazgo y compromiso con tu salud
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-sm font-semibold text-muted-foreground">
              {CLIENT.doctorRole}
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 text-base text-muted-foreground leading-relaxed">
              Más de 16 años de experiencia en cirugía abdominal y 10 años en cirugía
              bariátrica, combinando excelencia médica, enfoque humano y liderazgo en
              gestión de salud.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Director del Hospital Regional Docente de Trujillo y pionero en el
              tratamiento quirúrgico de la obesidad en el norte del Perú. Su compromiso
              con cada paciente va más allá del quirófano: acompañamiento integral en
              todo el proceso de transformación.
            </motion.p>

            {/* Grid de stats */}
            <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-border">
                  <p className="text-2xl font-extrabold text-primary leading-none">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
              >
                <Calendar className="h-4 w-4" />
                Agenda una consulta
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
