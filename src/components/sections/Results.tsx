"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, VIEWPORT_ONCE } from "@/lib/design-system";

// Count-up hook — anima de 0 al target cuando entra al viewport
function useCountUp(target: number, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

// Solo stats con datos confirmados del brief
const stats = [
  {
    prefix: "+",
    target: 16,
    suffix: " años",
    label: "de experiencia quirúrgica",
    note: "Cirugía abdominal laparoscópica avanzada",
    color: "var(--color-accent)",
  },
  {
    prefix: "+",
    target: 10,
    suffix: " años",
    label: "en cirugía bariátrica",
    note: "Especialización exclusiva en obesidad y metabolismo",
    color: "var(--color-accent)",
  },
  {
    prefix: "",
    target: 1,
    suffix: "° Norte",
    label: "Pionero",
    note: "Primera clínica de cirugía bariátrica en el norte del Perú",
    color: "var(--color-accent)",
  },
];

function StatCard({
  prefix,
  target,
  suffix,
  label,
  note,
  color,
  inView,
}: {
  prefix: string;
  target: number;
  suffix: string;
  label: string;
  note: string;
  color: string;
  inView: boolean;
}) {
  const count = useCountUp(target, 1600, inView);

  return (
    <motion.div
      variants={staggerItem}
      className="text-center px-4"
    >
      {/* Stat número */}
      <p
        className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light leading-none tabular-nums"
        style={{ color }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      {/* Label */}
      <p
        className="mt-4 font-serif text-xl font-light"
        style={{ color: "var(--color-primary)" }}
      >
        {label}
      </p>
      {/* Nota */}
      <p
        className="mt-2 text-sm leading-relaxed max-w-[220px] mx-auto"
        style={{ color: "var(--color-warm-text)" }}
      >
        {note}
      </p>
    </motion.div>
  );
}

export default function Results() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-lilac)" }}
      aria-label="Trayectoria y experiencia"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="text-center mb-16"
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Trayectoria
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Años de experiencia,<br className="hidden sm:block" /> vidas transformadas
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            Una trayectoria construida con centenares de pacientes acompañados
            y una alta tasa de éxito clínico sostenido en el tiempo.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid sm:grid-cols-3 gap-10 lg:gap-16 divide-y sm:divide-y-0 sm:divide-x divide-primary/10"
        >
          {stats.map((s) => (
            <StatCard
              key={s.label}
              prefix={s.prefix}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              note={s.note}
              color={s.color}
              inView={inView}
            />
          ))}
        </motion.div>

        {/* Nota cualitativa */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-14 text-center"
        >
          <p
            className="text-xs max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Mejoría significativa en enfermedades metabólicas como diabetes tipo 2 e
            hipertensión arterial documentada en la mayoría de pacientes operados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
