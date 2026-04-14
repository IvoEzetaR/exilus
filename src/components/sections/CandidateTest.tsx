"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Calendar, AlertCircle } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import { calcularIMC, evaluarCandidatura } from "@/lib/imc-logic";
import { maxWidth, sectionPadding } from "@/lib/design-system";

const comorbilidades = [
  { value: "diabetes", label: "Diabetes tipo 2" },
  { value: "hipertension", label: "Hipertensión arterial" },
  { value: "apnea", label: "Apnea del sueño" },
];

export default function CandidateTest() {
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [morbilidades, setMorbilidades] = useState<string[]>([]);
  const [intentos, setIntentos] = useState(false);
  const [resultado, setResultado] = useState<ReturnType<typeof evaluarCandidatura> | null>(null);
  const [showResult, setShowResult] = useState(false);

  const toggleMorbilidad = (val: string) => {
    setMorbilidades((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const handleCalcular = () => {
    const pesoNum = parseFloat(peso);
    const tallaNum = parseFloat(talla);
    if (!pesoNum || !tallaNum) return;
    const res = evaluarCandidatura(pesoNum, tallaNum, morbilidades, intentos);
    setResultado(res);
    setShowResult(true);
  };

  const colorBanner: Record<string, string> = {
    "no-candidato": "bg-muted border-border",
    candidato: "bg-primary border-primary",
    "candidato-imc": "bg-primary border-primary",
    "fuerte-candidato": "bg-primary border-primary",
  };

  const textBanner: Record<string, string> = {
    "no-candidato": "text-foreground",
    candidato: "text-white",
    "candidato-imc": "text-white",
    "fuerte-candidato": "text-white",
  };

  return (
    <section className={`bg-white ${sectionPadding}`}>
      <div className={maxWidth}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Imagen decorativa — izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col justify-center gap-6"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/doctor-consulta.jpg"
              alt="Consulta personalizada con el Dr. Víctor Salazar"
              fill
              sizes="(max-width: 1280px) 50vw, 640px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-semibold leading-snug">Consulta personalizada con el Dr. Salazar</p>
              <p className="text-white/70 text-xs mt-1">Evaluación integral · Sin compromiso</p>
            </div>
          </div>
        </motion.div>

        {/* Formulario — derecha */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Test rápido
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
              ¿Eres candidato a cirugía bariátrica?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Completa este formulario orientativo en menos de 1 minuto.
            </p>
          </motion.div>

          {/* Card del formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-primary/20 bg-white shadow-lg p-8"
          >
            {/* Peso y talla */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  value={peso}
                  onChange={(e) => { setPeso(e.target.value); setShowResult(false); }}
                  placeholder="Ej: 90"
                  min="30"
                  max="300"
                  className="w-full border-b-2 border-border bg-transparent pb-2 text-lg font-semibold text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Talla (cm o m)
                </label>
                <input
                  type="number"
                  value={talla}
                  onChange={(e) => { setTalla(e.target.value); setShowResult(false); }}
                  placeholder="Ej: 165 o 1.65"
                  min="1"
                  max="250"
                  className="w-full border-b-2 border-border bg-transparent pb-2 text-lg font-semibold text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* IMC en tiempo real */}
            {peso && talla && (
              <div className="mb-6 p-3 rounded-lg bg-lilac text-center">
                <span className="text-xs font-medium text-muted-foreground">Tu IMC estimado: </span>
                <span className="text-lg font-extrabold text-primary">
                  {(calcularIMC(parseFloat(peso), parseFloat(talla)) ?? 0).toFixed(1)}
                </span>
              </div>
            )}

            {/* Enfermedades */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-foreground mb-3">
                Enfermedades preexistentes (seleccione todas las que apliquen)
              </label>
              <div className="flex flex-wrap gap-3">
                {comorbilidades.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => { toggleMorbilidad(c.value); setShowResult(false); }}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      morbilidades.includes(c.value)
                        ? "bg-primary border-primary text-white"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => { setMorbilidades([]); setShowResult(false); }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    morbilidades.length === 0
                      ? "bg-primary border-primary text-white"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  Ninguno
                </button>
              </div>
            </div>

            {/* Intentos previos */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-foreground mb-3">
                ¿Ha intentado perder peso con dieta y ejercicio sin éxito sostenido?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => { setIntentos(true); setShowResult(false); }}
                  className={`rounded-full border px-6 py-2 text-sm font-medium transition-all ${
                    intentos === true
                      ? "bg-primary border-primary text-white"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  Sí
                </button>
                <button
                  type="button"
                  onClick={() => { setIntentos(false); setShowResult(false); }}
                  className={`rounded-full border px-6 py-2 text-sm font-medium transition-all ${
                    intentos === false
                      ? "bg-primary border-primary text-white"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Botón calcular */}
            <button
              type="button"
              onClick={handleCalcular}
              disabled={!peso || !talla}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Calculator className="h-5 w-5" />
              Calcular mi candidatura
            </button>
          </motion.div>

          {/* Resultado */}
          <AnimatePresence>
            {showResult && resultado && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`mt-5 rounded-2xl border p-6 ${colorBanner[resultado.nivel]}`}
              >
                <div className={`flex items-start gap-3 ${textBanner[resultado.nivel]}`}>
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                  <div>
                    <p className="font-semibold">{resultado.mensaje}</p>
                    <p className="text-xs mt-1 opacity-70">
                      IMC calculado: {resultado.imc.toFixed(1)}
                    </p>
                  </div>
                </div>
                {resultado.showCTA && (
                  <a
                    href={CLIENT.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                    Agenda tu evaluación
                  </a>
                )}
                <p className={`mt-4 text-xs opacity-60 text-center ${textBanner[resultado.nivel]}`}>
                  Este test es orientativo. La evaluación médica personalizada es indispensable.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>{/* fin formulario */}
        </div>{/* fin grid */}
      </div>
    </section>
  );
}
