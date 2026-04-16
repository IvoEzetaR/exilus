"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/design-system";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function InnerPageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  breadcrumbs,
}: InnerPageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-primary)",
        paddingTop: "calc(40px + 64px + 3rem)",
        paddingBottom: "4rem",
      }}
    >
      {/* Background image (optional) */}
      {bgImage && (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(47,14,28,0.88) 0%, rgba(47,14,28,0.72) 45%, rgba(47,14,28,0.45) 100%)",
            }}
          />
        </div>
      )}

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "var(--color-lilac)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full opacity-8 blur-3xl"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {eyebrow && (
            <motion.p
              variants={staggerItem}
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
              style={{ color: "rgba(245,235,220,0.65)" }}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            variants={staggerItem}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight"
            style={{ color: "var(--color-cream)" }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="mt-4 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(245,235,220,0.85)" }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div variants={staggerItem}>
            <Breadcrumb items={breadcrumbs} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
