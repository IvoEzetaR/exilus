"use client";

import { motion } from "framer-motion";
import { Scale, HeartPulse, Microscope, Utensils, Activity, ArrowRight } from "lucide-react";
import Image from "next/image";
import { fadeInUp, staggerContainer, maxWidth, sectionPadding } from "@/lib/design-system";

const services = [
  {
    icon: Scale,
    title: "Cirugía Bariátrica y Metabólica",
    description: "Procedimientos quirúrgicos avanzados para el tratamiento de la obesidad y sus enfermedades asociadas.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
  {
    icon: HeartPulse,
    title: "Manejo Integral de la Obesidad",
    description: "Abordaje multidisciplinario que combina evaluación médica, nutricional y psicológica personalizada.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    icon: Microscope,
    title: "Cirugía Laparoscópica Avanzada",
    description: "Técnicas mínimamente invasivas que reducen el tiempo de recuperación y los riesgos postoperatorios.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
  },
  {
    icon: Utensils,
    title: "Cirugía Digestiva",
    description: "Tratamiento quirúrgico de patologías del sistema digestivo con tecnología de última generación.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
  },
  {
    icon: Activity,
    title: "Proctología",
    description: "Diagnóstico y tratamiento especializado de enfermedades del colon, recto y ano.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  },
];

export default function Services() {
  return (
    <section id="servicios" className={`bg-white ${sectionPadding}`}>
      <div className={maxWidth}>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Especialidades
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atención especializada con tecnología de vanguardia y un equipo
            multidisciplinario comprometido con tu bienestar.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Imagen de fondo */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/10 group-hover:from-primary transition-all duration-500" />

              {/* Icono — top right */}
              <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-lg">
                <s.icon className="h-5 w-5 text-white" />
              </div>

              {/* Contenido — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-sm font-extrabold leading-snug">{s.title}</h3>
                <p className="mt-2 text-xs text-white/75 leading-relaxed line-clamp-2">{s.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
