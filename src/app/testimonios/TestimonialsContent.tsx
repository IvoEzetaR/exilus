"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Calendar, Heart, MessageCircle, Play, Quote } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
  scaleOnHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";

type SocialComment = {
  id: number;
  user: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
  date: string;
  platform: "TikTok" | "Instagram" | "Facebook";
  comment: string;
  likes: number;
  badge?: string;
  reply?: string;
};

const socialComments: SocialComment[] = [
  {
    id: 1,
    user: "Chechi Escobal",
    initials: "CE",
    avatarBg: "#9B3A5C",
    avatarText: "#F5EBDC",
    date: "abr 2",
    platform: "TikTok",
    comment:
      "Mi papá y yo fuimos operados por este excelente Doctor… todo de maravillas… mil gracias.",
    likes: 2,
    reply: "Qué gusto saber de Ud, muchas gracias",
  },
  {
    id: 2,
    user: "eduardocubas10",
    initials: "EC",
    avatarBg: "#78D64B",
    avatarText: "#1a3a0a",
    date: "jul 3, 2025",
    platform: "TikTok",
    comment: "Mi doctor el mejor del norte, saludos. Ya 3 años de operado 💪",
    likes: 3,
    reply: "Excelente Eduardo, el éxito es tuyo",
  },
  {
    id: 3,
    user: "Charlie Segura",
    initials: "CS",
    avatarBg: "#6C1D45",
    avatarText: "#F5EBDC",
    date: "ago 9, 2025",
    platform: "TikTok",
    comment:
      "Experiencia es lo que también indica garantía y Ud es uno de los más experimentados bariatras, Dr., y su tecnología de última generación.",
    likes: 2,
    badge: "Primer comentario",
    reply: "Muchas gracias Carlos",
  },
  {
    id: 4,
    user: "Nathaly Landazuri",
    initials: "NL",
    avatarBg: "#9B3A5C",
    avatarText: "#F5EBDC",
    date: "nov 19, 2025",
    platform: "TikTok",
    comment:
      "Yo antes de conocer al Dr., fui con un carnicero (literal). Cuando desistí de operarme con ese médico, mi hermana me habló de Exilus. Ahí conocí al Dr. Augusto y a todo su equipo. Quedé agradecida con ellos y lo recomiendo… pondría mi vida en sus manos las veces que sea necesario.",
    likes: 1,
  },
  {
    id: 5,
    user: "CHACHAPLUS",
    initials: "CP",
    avatarBg: "#DFD0F1",
    avatarText: "#6C1D45",
    date: "jul, 2025",
    platform: "TikTok",
    comment:
      "Doy fe de ello y agradezco al Dr. Augusto por haberme realizado una buena operación bypass. En este Julio cumplo 3 años de operado.",
    likes: 1,
  },
  {
    id: 6,
    user: "Jomarita",
    initials: "J",
    avatarBg: "#6C1D45",
    avatarText: "#F5EBDC",
    date: "jun 20, 2025",
    platform: "TikTok",
    comment:
      "Felicitaciones, doctor Salazar. A mi nieto Ud lo operó de manga gástrica, está excelente.",
    likes: 1,
  },
  {
    id: 7,
    user: "MARY LEÓN",
    initials: "ML",
    avatarBg: "#78D64B",
    avatarText: "#1a3a0a",
    date: "abr 4",
    platform: "TikTok",
    comment: "Excelente médico, bendiciones 😍",
    likes: 2,
    reply: "Muchas gracias 🥰🥰🥰",
  },
  {
    id: 8,
    user: "Helen",
    initials: "H",
    avatarBg: "#9B3A5C",
    avatarText: "#F5EBDC",
    date: "jul 20, 2025",
    platform: "TikTok",
    comment: "El mejor, recomendado 🥰",
    likes: 2,
  },
  {
    id: 9,
    user: "Omar Pardo",
    initials: "OP",
    avatarBg: "#DFD0F1",
    avatarText: "#6C1D45",
    date: "abr 3",
    platform: "TikTok",
    comment: "Un crack 💯",
    likes: 1,
    reply: "Gracias, un abrazo",
  },
  {
    id: 10,
    user: "Brenda Mercedes Caro",
    initials: "BC",
    avatarBg: "#6C1D45",
    avatarText: "#F5EBDC",
    date: "abr 2",
    platform: "TikTok",
    comment: "Muy buen especialista.",
    likes: 1,
    reply: "Muchas gracias 🥰",
  },
];

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

      {/* Comentarios sociales — TikTok / Instagram */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
        aria-label="Comentarios reales de pacientes en redes sociales"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-14"
          >
            <p
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Comentarios reales en redes
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Lo que dicen pacientes y familiares en TikTok
            </h2>
            <p
              className="mt-3 text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              Comentarios públicos en las redes oficiales del Dr. Augusto Salazar — sin
              edición, sin filtros, directo de la comunidad Exilus.
            </p>
          </motion.div>

          {/* Masonry-like grid columns para que las cards de distinta altura no dejen gaps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
          >
            {socialComments.map((c) => (
              <motion.article
                key={c.id}
                variants={staggerItem}
                whileHover={{
                  y: -3,
                  boxShadow: "0 18px 36px rgba(108,29,69,0.12)",
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                }}
                className="mb-5 break-inside-avoid rounded-2xl border p-5 shadow-sm"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Header: avatar + user + plataforma */}
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-semibold text-sm"
                    style={{
                      backgroundColor: c.avatarBg,
                      color: c.avatarText,
                    }}
                    aria-hidden="true"
                  >
                    {c.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p
                        className="font-sans text-sm font-semibold leading-tight truncate"
                        style={{ color: "#1f1f1f" }}
                      >
                        {c.user}
                      </p>
                      <BadgeCheck
                        className="h-3.5 w-3.5"
                        style={{ color: "#6C1D45" }}
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: "#888" }}
                    >
                      {c.platform} · {c.date}
                    </p>
                  </div>
                </div>

                {/* Badge primer comentario */}
                {c.badge && (
                  <span
                    className="mt-3 inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      backgroundColor: "#F0E4D2",
                      color: "var(--color-primary)",
                    }}
                  >
                    {c.badge}
                  </span>
                )}

                {/* Comentario */}
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "#1f1f1f" }}
                >
                  {c.comment}
                </p>

                {/* Footer: likes + responder */}
                <div className="mt-4 flex items-center gap-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs"
                    style={{ color: "#1f1f1f" }}
                  >
                    <Heart
                      className="h-4 w-4"
                      fill="#FF3B5C"
                      style={{ color: "#FF3B5C" }}
                      aria-hidden="true"
                    />
                    {c.likes}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#888" }}
                  >
                    Responder
                  </span>
                </div>

                {/* Respuesta del doctor (Creador) */}
                {c.reply && (
                  <div
                    className="mt-4 ml-3 pl-4 border-l-2 rounded-r-md py-3 pr-3"
                    style={{
                      borderColor: "var(--color-primary)",
                      backgroundColor: "rgba(108,29,69,0.05)",
                    }}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full font-semibold text-[10px]"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-cream)",
                        }}
                        aria-hidden="true"
                      >
                        Dr
                      </div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        Exilus — Dr. Augusto Salazar
                      </p>
                      <span
                        className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: "rgba(108,29,69,0.15)",
                          color: "var(--color-primary)",
                        }}
                      >
                        Creador
                      </span>
                    </div>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "#1f1f1f" }}
                    >
                      {c.reply}
                    </p>
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="mt-10 text-center text-xs leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Comentarios extraídos de redes sociales públicas del Dr. Augusto Salazar.
            Cada testimonio refleja la experiencia individual del paciente y los resultados
            pueden variar.
          </motion.p>
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
