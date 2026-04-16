"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { SERVICES } from "@/lib/services-data";

export default function ServiceCardGrid() {
  return (
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <Link href={`/servicios/${service.slug}`} className="group block h-full">
                <motion.article
                  {...cardHover}
                  className="h-full rounded-2xl overflow-hidden border transition-shadow"
                  style={{
                    backgroundColor: "var(--color-card)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(108,29,69,0.4) 0%, transparent 60%)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="font-serif text-xl font-medium"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed line-clamp-3"
                      style={{ color: "var(--color-warm-text)" }}
                    >
                      {service.shortDescription}
                    </p>

                    {/* Stats pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.stats.slice(0, 2).map((stat) => (
                        <span
                          key={stat.label}
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                          style={{
                            backgroundColor: "var(--color-lilac)",
                            color: "var(--color-primary)",
                          }}
                        >
                          {stat.value} {stat.label.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Conocer más
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
