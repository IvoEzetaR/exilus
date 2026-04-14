"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, maxWidth, sectionPadding } from "@/lib/design-system";

// Count-up hook: anima de 0 al valor target cuando entra en viewport
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

function StatCard({
  prefix,
  target,
  suffix,
  label,
  note,
  inView,
}: {
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
  note: string;
  inView: boolean;
}) {
  const count = useCountUp(target, 1800, inView);

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <p className="text-6xl sm:text-7xl font-extrabold text-primary leading-none tabular-nums">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="mt-3 text-base font-bold text-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{note}</p>
    </motion.div>
  );
}

const stats = [
  {
    prefix: "+",
    target: 16,
    suffix: " años",
    label: "De experiencia quirúrgica",
    note: "Cirugía abdominal y bariátrica avanzada",
  },
  {
    prefix: "+",
    target: 1000,
    suffix: "",
    label: "Pacientes operados",
    // TODO: cliente debe confirmar cifra exacta de pacientes
    note: "Resultados sostenibles a largo plazo",
  },
  {
    prefix: "",
    target: 95,
    suffix: "%",
    label: "Satisfacción del paciente",
    note: "Mejora en calidad de vida y salud metabólica",
  },
];

export default function Results() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`bg-cream ${sectionPadding}`}>
      <div className={maxWidth}>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Resultados
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Resultados que transforman vidas
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-8 lg:gap-16"
        >
          {stats.map((s) => (
            <StatCard
              key={s.label}
              prefix={s.prefix}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              note={s.note}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
