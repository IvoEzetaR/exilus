"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  TrendingDown,
  HeartPulse,
  Minimize2,
  Utensils,
  ShieldCheck,
  Clock,
  Activity,
  Award,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
  RefreshCw,
  Search,
  Wrench,
  Eye,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  cardHover,
  scaleOnHover,
  accordionContent,
  accordionChevron,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";
import type { ServiceData } from "@/lib/services-data";
import { getOtherServices } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  TrendingDown,
  HeartPulse,
  Minimize2,
  Utensils,
  ShieldCheck,
  Clock,
  Activity,
  Award,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
  RefreshCw,
  Search,
  Wrench,
  Eye,
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span
          className="font-serif text-lg font-medium pr-4"
          style={{ color: "var(--color-primary)" }}
        >
          {question}
        </span>
        <motion.span
          variants={accordionChevron}
          animate={open ? "expanded" : "collapsed"}
        >
          <ChevronDown
            className="h-5 w-5 flex-shrink-0"
            style={{ color: "var(--color-primary)" }}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-base leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceContent({ service }: { service: ServiceData }) {
  const otherServices = getOtherServices(service.slug);

  return (
    <>
      {/* Description + Stats */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-start"
          >
            <motion.div variants={fadeInLeft}>
              <h2
                className="font-serif text-3xl sm:text-4xl font-light leading-tight"
                style={{ color: "var(--color-primary)" }}
              >
                Qué es la {service.name.toLowerCase()}?
              </h2>
              <div className="mt-6 space-y-4">
                {service.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="font-serif text-xl font-medium mb-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  Datos clave
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="font-serif text-2xl font-semibold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Candidate Profile */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-card)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Para quién es este procedimiento?
            </h2>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="space-y-4"
          >
            {service.candidateProfile.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-3 rounded-xl p-4 border"
                style={{
                  backgroundColor: "var(--color-cream)",
                  borderColor: "var(--color-border)",
                }}
              >
                <CheckCircle
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-cta)" }}
                />
                <span
                  className="text-base"
                  style={{ color: "var(--color-warm-text)" }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
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
              Beneficios
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon] || ShieldCheck;
              return (
                <motion.div
                  key={benefit.title}
                  variants={staggerItem}
                  {...cardHover}
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "var(--color-card)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--color-lilac)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3
                    className="mt-4 font-serif text-lg font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-cream)" }}
            >
              El procedimiento paso a paso
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="space-y-6"
          >
            {service.steps.map((step) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="flex gap-5 items-start"
              >
                <div
                  className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full font-serif text-lg font-semibold"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-cream)",
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3
                    className="font-serif text-lg font-medium"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: "rgba(245,235,220,0.70)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
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
              Recuperación
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.recovery.map((phase, i) => (
              <motion.div
                key={phase.phase}
                variants={staggerItem}
                className="rounded-2xl p-6 border relative"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-3"
                  style={{
                    backgroundColor: "var(--color-lilac)",
                    color: "var(--color-primary)",
                  }}
                >
                  {phase.timeframe}
                </span>
                <h3
                  className="font-serif text-base font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  {phase.phase}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--color-warm-text)" }}
                >
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-card)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Preguntas frecuentes
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
          >
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl font-light"
            style={{ color: "var(--color-primary)" }}
          >
            Da el primer paso
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            Agenda una evaluación personalizada con el Dr. Salazar para
            determinar si la {service.name.toLowerCase()} es la mejor opción
            para tu caso.
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
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </motion.a>
          </div>
        </div>
      </section>

      {/* Other Services */}
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
            className="text-center mb-10"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Otros servicios
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {otherServices.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <Link href={`/servicios/${s.slug}`} className="group block">
                  <motion.div
                    {...cardHover}
                    className="rounded-2xl p-5 border h-full"
                    style={{
                      backgroundColor: "var(--color-cream)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <h3
                      className="font-serif text-base font-medium"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="mt-2 text-xs leading-relaxed line-clamp-2"
                      style={{ color: "var(--color-warm-text)" }}
                    >
                      {s.shortDescription}
                    </p>
                    <span
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Ver más <ArrowRight className="h-3 w-3" />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
