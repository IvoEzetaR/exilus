"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MessageCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";

const trustItems = [
  "16 años de experiencia quirúrgica",
  "+1,000 pacientes operados",
  "Pionero en el norte del Perú",
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: imagen se mueve más lento que el scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen bg-primary flex items-center pt-[74px] pb-16 overflow-hidden"
    >
      {/* Fondo decorativo — gradiente diagonal sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Columna izquierda — texto */}
          <div>
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-5 py-2 mb-7"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-semibold tracking-widest uppercase">
                Centro Multidisciplinario · Trujillo
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Transforma tu salud.{" "}
              <span className="text-accent">Recupera tu vida.</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg"
            >
              Cirugía bariátrica y laparoscópica avanzada con un enfoque integral,
              seguro y personalizado. El único cirujano bariatra pionero en el norte del Perú.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent/30 hover:opacity-90 transition-opacity"
              >
                <Calendar className="h-5 w-5" />
                Agenda tu evaluación
              </a>
              <a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white hover:border-white/70 hover:bg-white/5 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-3"
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-white/75">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Columna derecha — foto con parallax */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Contenedor imagen con parallax */}
              <motion.div
                style={{ y: imageY }}
                className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/doctor-scrubs.jpg"
                  alt="Dr. Víctor A. Salazar — Cirujano Bariatra, Trujillo"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-center"
                />
                {/* Overlay sutil en la parte inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </motion.div>

              {/* Card flotante bottom-left — credenciales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl max-w-[200px]"
              >
                <p className="text-xs font-extrabold text-primary leading-tight">Dr. Víctor A. Salazar T.</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-snug">
                  Cirujano Bariatra<br />
                  Director del HRDT
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] text-accent font-semibold">Disponible en Trujillo</span>
                </div>
              </motion.div>

              {/* Badge flotante top-right — años de experiencia */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -top-4 -right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-accent shadow-xl shadow-accent/30"
              >
                <span className="text-lg font-extrabold text-white leading-none">+16</span>
                <span className="text-[8px] font-semibold text-white/80 text-center leading-tight">años</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
