"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { CLIENT } from "@/lib/client-data";
import { fadeInUp, staggerContainer } from "@/lib/design-system";

export default function FinalCTA() {
  return (
    <section className="bg-primary py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp} className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Da el primer paso
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            ¿Listo para cambiar tu vida?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            El Dr. Víctor Salazar y su equipo están listos para acompañarte en
            tu proceso de transformación. Agenda tu evaluación hoy.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent/30 hover:opacity-90 transition-opacity"
            >
              <Calendar className="h-5 w-5" />
              Agenda tu evaluación hoy
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
        </motion.div>
      </div>
    </section>
  );
}
