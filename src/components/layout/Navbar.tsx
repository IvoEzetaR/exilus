"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT } from "@/lib/client-data";

const sectionLinks = [
  { label: "Inicio", anchor: "#inicio", href: "/" },
  { label: "Proceso", anchor: "#proceso", href: "/#proceso" },
  { label: "FAQ", anchor: "#faq", href: "/#faq" },
];

const pageLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build all nav links in order: Inicio | Servicios | Proceso | Testimonios | FAQ | Contacto
  const allLinks = [
    // Inicio
    {
      label: "Inicio",
      href: isHome ? "#inicio" : "/",
      isPage: !isHome,
    },
    // Servicios (page)
    { label: "Servicios", href: "/servicios", isPage: true },
    // Proceso (section)
    {
      label: "Proceso",
      href: isHome ? "#proceso" : "/#proceso",
      isPage: !isHome,
    },
    // Testimonios (page)
    { label: "Testimonios", href: "/testimonios", isPage: true },
    // FAQ (section)
    {
      label: "FAQ",
      href: isHome ? "#faq" : "/#faq",
      isPage: !isHome,
    },
    // Contacto (page)
    { label: "Contacto", href: "/contacto", isPage: true },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 shadow-sm border-b"
          : "top-10"
      }`}
      style={{
        backgroundColor: "var(--color-cream)",
        borderColor: scrolled ? "var(--color-border)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Exilus — inicio">
          <div className="relative h-10 w-10">
            <Image
              src="/images/exilus-logo.png"
              alt="Exilus — Cirugía Bariátrica Trujillo"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </div>
          <span
            className="ml-2 font-serif text-lg font-medium tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Exilus
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {allLinks.map((l) =>
            l.isPage ? (
              <Link
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium transition-colors group"
                style={{
                  color:
                    pathname === l.href
                      ? "var(--color-primary)"
                      : "var(--color-warm-text)",
                }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                    pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium transition-colors group"
                style={{ color: "var(--color-warm-text)" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </a>
            )
          )}

          {/* CTA verde */}
          <motion.a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "#1a3a0a",
              boxShadow: "0 4px 16px rgba(120, 214, 75, 0.30)",
            }}
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Agenda tu evaluación
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-primary/5"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          style={{ color: "var(--color-primary)" }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t px-4 py-4 md:hidden"
            style={{
              backgroundColor: "var(--color-cream)",
              borderColor: "var(--color-border)",
            }}
          >
            {allLinks.map((l) =>
              l.isPage ? (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium border-b transition-colors hover:opacity-70"
                  style={{
                    color:
                      pathname === l.href
                        ? "var(--color-primary)"
                        : "var(--color-warm-text)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium border-b transition-colors hover:opacity-70"
                  style={{
                    color: "var(--color-warm-text)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {l.label}
                </a>
              )
            )}
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--color-cta)", color: "#1a3a0a" }}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Agenda tu evaluación
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
