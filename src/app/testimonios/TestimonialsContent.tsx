"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Play, Quote } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
  scaleOnHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";

const stats = [
  { value: "+500", label: "Pacientes atendidos" },
  { value: "98%", label: "Tasa de satisfacción" },
  { value: "+16", label: "Años de experiencia" },
  { value: "4.9", label: "Valoración promedio" },
];

const testimonials = [
  {
    name: "María Elena Rodríguez",
    procedure: "Manga Gástrica",
    city: "Trujillo",
    quote:
      "Después de años luchando con mi peso, la manga gástrica fue la mejor decisión de mi vida. El Dr. Salazar me explicó todo con mucha paciencia y el equipo me acompañó en cada paso. En 10 meses bajé 35 kilos y mi diabetes está controlada.",
    timeAgo: "Hace 8 meses",
  },
  {
    name: "Carlos Alberto Mendoza",
    procedure: "Bypass Gástrico",
    city: "Chiclayo",
    quote:
      "Viajé desde Chiclayo porque me recomendaron al Dr. Salazar. La cirugía fue un éxito total. Mi diabetes tipo 2 prácticamente desapareció en los primeros meses. El seguimiento nutricional es excelente.",
    timeAgo: "Hace 1 año",
  },
  {
    name: "Patricia Sánchez Vega",
    procedure: "Balón Intragástrico",
    city: "Trujillo",
    quote:
      "No me sentía lista para una cirugía y el Dr. Salazar me recomendó el balón. Fue la opción perfecta para mí. Bajé 18 kilos en 6 meses y aprendí a comer de forma saludable con el programa nutricional.",
    timeAgo: "Hace 6 meses",
  },
  {
    name: "Jorge Luis Castillo",
    procedure: "Manga Gástrica",
    city: "Piura",
    quote:
      "Tenía miedo de operarme pero la confianza que me dio el Dr. Salazar fue clave. Todo el proceso fue muy profesional, desde la primera consulta hasta el seguimiento. He perdido 42 kilos y me siento como nuevo.",
    timeAgo: "Hace 1 año",
  },
  {
    name: "Rosa Martínez de López",
    procedure: "Cirugía Revisional",
    city: "Trujillo",
    quote:
      "Me operé hace 5 años con otro doctor y no tuve buenos resultados. El Dr. Salazar me hizo una revisión de manga a bypass y por fin estoy viendo los resultados que esperaba. Agradecida infinitamente.",
    timeAgo: "Hace 4 meses",
  },
  {
    name: "Fernando Gutiérrez Ríos",
    procedure: "Bypass Gástrico",
    city: "Cajamarca",
    quote:
      "Mi peso estaba afectando mi corazón y mis rodillas. Después del bypass he perdido 50 kilos y todos mis exámenes mejoraron. El Dr. Salazar y su equipo son de primera. Vale cada sol invertido.",
    timeAgo: "Hace 9 meses",
  },
  {
    name: "Ana Lucía Vargas",
    procedure: "Manga Gástrica",
    city: "Trujillo",
    quote:
      "Lo que más valoro es el acompañamiento integral. No solo la cirugía sino el antes y después: nutricionista, psicóloga, controles. Me sentí cuidada en todo momento. Ya van 28 kilos menos y contando.",
    timeAgo: "Hace 5 meses",
  },
  {
    name: "Roberto Díaz Flores",
    procedure: "Cirugía Laparoscópica",
    city: "Trujillo",
    quote:
      "Me operaron de vesícula por laparoscopía. La recuperación fue increíblemente rápida, a los 3 días ya estaba haciendo mis actividades normales. Las cicatrices son mínimas. Muy satisfecho con el resultado.",
    timeAgo: "Hace 3 meses",
  },
];

const videoPlaceholders = [
  { name: "María Elena R.", procedure: "Manga Gástrica", duration: "3:24" },
  { name: "Carlos A. M.", procedure: "Bypass Gástrico", duration: "4:12" },
  { name: "Patricia S. V.", procedure: "Balón Intragástrico", duration: "2:47" },
];

export default function TestimonialsContent() {
  return (
    <>
      {/* Stats Section */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="rounded-2xl p-6 border text-center"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <p
                  className="font-serif text-3xl sm:text-4xl font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-card)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Lo que dicen nuestros pacientes
            </h2>
            <p
              className="mt-3 text-base max-w-2xl mx-auto"
              style={{ color: "var(--color-warm-text)" }}
            >
              Historias reales de personas que tomaron la decisión de
              transformar su salud.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 gap-6"
          >
            {testimonials.map((t) => (
              <motion.article
                key={t.name}
                variants={staggerItem}
                {...cardHover}
                className="rounded-2xl p-6 sm:p-8 border"
                style={{
                  backgroundColor: "var(--color-cream)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Quote icon */}
                <Quote
                  className="h-8 w-8 mb-4"
                  style={{ color: "var(--color-lilac)" }}
                />

                {/* Quote text */}
                <p
                  className="text-base leading-relaxed italic"
                  style={{ color: "var(--color-warm-text)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author info */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p
                      className="font-serif text-base font-medium"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--color-muted-foreground)" }}
                    >
                      {t.city} &middot; {t.timeAgo}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "var(--color-lilac)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t.procedure}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Video testimonios
            </h2>
            <p
              className="mt-3 text-base"
              style={{ color: "var(--color-warm-text)" }}
            >
              Próximamente: escucha directamente de nuestros pacientes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-3 gap-6"
          >
            {videoPlaceholders.map((v) => (
              <motion.div
                key={v.name}
                variants={staggerItem}
                className="rounded-2xl overflow-hidden border group cursor-pointer"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="relative h-48 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play
                      className="h-6 w-6 ml-0.5"
                      style={{ color: "var(--color-cream)" }}
                    />
                  </div>
                  <span
                    className="absolute bottom-3 right-3 rounded-md px-2 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      color: "var(--color-cream)",
                    }}
                  >
                    {v.duration}
                  </span>
                </div>
                <div
                  className="p-4"
                  style={{ backgroundColor: "var(--color-card)" }}
                >
                  <p
                    className="font-serif text-sm font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {v.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {v.procedure}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl font-light"
            style={{ color: "var(--color-cream)" }}
          >
            Tu historia puede ser la siguiente
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(245,235,220,0.75)" }}
          >
            Cada transformación comienza con una decisión. Agenda tu evaluación
            con el Dr. Salazar y descubre cómo podemos ayudarte.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
              }}
            >
              <Calendar className="h-5 w-5" />
              Agenda tu evaluación
            </motion.a>
            <motion.a
              href={CLIENT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold"
              style={{
                borderColor: "rgba(245,235,220,0.3)",
                color: "var(--color-cream)",
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
