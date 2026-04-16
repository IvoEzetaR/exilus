"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleOnHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";
import { SERVICES } from "@/lib/services-data";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp / Teléfono",
    value: CLIENT.phone,
    href: CLIENT.whatsapp,
    description: "Respuesta en menos de 2 horas",
  },
  {
    icon: Mail,
    label: "Email",
    value: CLIENT.email,
    href: `mailto:${CLIENT.email}`,
    description: "Te respondemos en 24 horas",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Clínica Sanna Sánchez Ferrer",
    href: "https://maps.google.com/?q=Clinica+Sanna+Sanchez+Ferrer+Trujillo",
    description: CLIENT.address,
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lun - Vie: 9:00am - 7:00pm",
    href: undefined,
    description: "Sábados: 9:00am - 1:00pm",
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Client-side only — no backend
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Form + Info Section */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              variants={fadeInLeft}
            >
              <h2
                className="font-serif text-3xl sm:text-4xl font-light mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Envíanos un mensaje
              </h2>
              <p
                className="mb-8 text-base"
                style={{ color: "var(--color-warm-text)" }}
              >
                Completa el formulario y nos pondremos en contacto contigo a la
                brevedad.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl p-8 border text-center"
                  style={{
                    backgroundColor: "var(--color-card)",
                    borderColor: "var(--color-cta)",
                  }}
                >
                  <CheckCircle
                    className="h-12 w-12 mx-auto mb-4"
                    style={{ color: "var(--color-cta)" }}
                  />
                  <h3
                    className="font-serif text-2xl font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Mensaje enviado
                  </h3>
                  <p
                    className="mt-2 text-base"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    Gracias por contactarnos. Nuestro equipo te responderá
                    pronto.
                  </p>
                  <motion.a
                    href={CLIENT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...scaleOnHover}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--color-cta)",
                      color: "#1a3a0a",
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Respuesta inmediata por WhatsApp
                  </motion.a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors focus:ring-2"
                      style={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-warm-text)",
                        // @ts-expect-error CSS custom property
                        "--tw-ring-color": "var(--color-primary)",
                      }}
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors focus:ring-2"
                      style={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-warm-text)",
                        // @ts-expect-error CSS custom property
                        "--tw-ring-color": "var(--color-primary)",
                      }}
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Teléfono
                    </label>
                    <PhoneInput
                      defaultCountry="pe"
                      value={form.telefono}
                      onChange={(phone) =>
                        setForm({ ...form, telefono: phone })
                      }
                      inputStyle={{
                        width: "100%",
                        borderRadius: "0.75rem",
                        border: `1px solid var(--color-border)`,
                        backgroundColor: "var(--color-card)",
                        color: "var(--color-warm-text)",
                        padding: "0.75rem 1rem",
                        fontSize: "1rem",
                      }}
                      countrySelectorStyleProps={{
                        buttonStyle: {
                          borderRadius: "0.75rem 0 0 0.75rem",
                          border: `1px solid var(--color-border)`,
                          backgroundColor: "var(--color-card)",
                          padding: "0.75rem",
                        },
                      }}
                    />
                  </div>

                  {/* Servicio */}
                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={form.servicio}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors focus:ring-2 appearance-none"
                      style={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-warm-text)",
                        // @ts-expect-error CSS custom property
                        "--tw-ring-color": "var(--color-primary)",
                      }}
                    >
                      <option value="">Selecciona un servicio</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                      <option value="otro">Otro / No estoy seguro</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors focus:ring-2 resize-none"
                      style={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-warm-text)",
                        // @ts-expect-error CSS custom property
                        "--tw-ring-color": "var(--color-primary)",
                      }}
                      placeholder="Cuéntanos sobre tu caso o consulta..."
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    {...scaleOnHover}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
                    style={{
                      backgroundColor: "var(--color-cta)",
                      color: "#1a3a0a",
                      boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
                    }}
                  >
                    <Send className="h-5 w-5" />
                    Enviar mensaje
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="space-y-5"
            >
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={staggerItem}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block rounded-2xl p-5 border transition-shadow hover:shadow-md"
                      style={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ backgroundColor: "var(--color-lilac)" }}
                        >
                          <info.icon
                            className="h-5 w-5"
                            style={{ color: "var(--color-primary)" }}
                          />
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "var(--color-muted-foreground)" }}
                          >
                            {info.label}
                          </p>
                          <p
                            className="mt-1 font-serif text-lg font-medium"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {info.value}
                          </p>
                          <p
                            className="mt-0.5 text-sm"
                            style={{ color: "var(--color-warm-text)" }}
                          >
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="rounded-2xl p-5 border"
                      style={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ backgroundColor: "var(--color-lilac)" }}
                        >
                          <info.icon
                            className="h-5 w-5"
                            style={{ color: "var(--color-primary)" }}
                          />
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "var(--color-muted-foreground)" }}
                          >
                            {info.label}
                          </p>
                          <p
                            className="mt-1 font-serif text-lg font-medium"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {info.value}
                          </p>
                          <p
                            className="mt-0.5 text-sm"
                            style={{ color: "var(--color-warm-text)" }}
                          >
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Booking CTA */}
              <motion.div variants={staggerItem}>
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <Calendar
                    className="h-8 w-8 mx-auto mb-3"
                    style={{ color: "var(--color-cream)" }}
                  />
                  <h3
                    className="font-serif text-xl font-medium"
                    style={{ color: "var(--color-cream)" }}
                  >
                    Agenda directo
                  </h3>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "rgba(245,235,220,0.70)" }}
                  >
                    Selecciona fecha y hora que te convengan en nuestro
                    calendario en línea.
                  </p>
                  <motion.a
                    href={CLIENT.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...scaleOnHover}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--color-cta)",
                      color: "#1a3a0a",
                    }}
                  >
                    <Calendar className="h-4 w-4" />
                    Agenda tu evaluación
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-card)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
          >
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div
                className="h-64 sm:h-80 flex items-center justify-center"
                style={{ backgroundColor: "var(--color-muted)" }}
              >
                <div className="text-center px-4">
                  <MapPin
                    className="h-10 w-10 mx-auto mb-3"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <p
                    className="font-serif text-lg font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Clínica Sanna Sánchez Ferrer
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {CLIENT.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Clinica+Sanna+Sanchez+Ferrer+Trujillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
