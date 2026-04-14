"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-primary shadow-lg shadow-primary/30 border-b border-primary/20"
          : "top-10 bg-primary/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/exilus-logo.png"
            alt="Exilus — Cirugía Bariátrica"
            width={140}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:opacity-90 transition-opacity"
          >
            <Calendar className="h-4 w-4" />
            Agenda tu evaluación
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary px-4 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <Calendar className="h-4 w-4" />
            Agenda tu evaluación
          </a>
        </div>
      )}
    </nav>
  );
}
