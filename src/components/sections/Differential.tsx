"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer, maxWidth, sectionPadding } from "@/lib/design-system";

const differentials = [
  "Enfoque multidisciplinario real",
  "Tecnología mínimamente invasiva",
  "Seguimiento continuo postoperatorio",
  "Atención personalizada",
  "Equipo altamente especializado",
];

export default function Differential() {
  return (
    <section className={`bg-lilac ${sectionPadding}`}>
      <div className={maxWidth}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Nuestro diferencial
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight">
              ¿Por qué elegir Exilus?
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              No somos un consultorio más. Somos un equipo especializado que te
              acompaña en cada paso del proceso, desde la evaluación inicial
              hasta el seguimiento a largo plazo.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {differentials.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                </div>
                <span className="font-semibold text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
