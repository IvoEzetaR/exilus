import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AuthorityLite from "@/components/sections/AuthorityLite";
import Method from "@/components/sections/Method";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import CandidateTest from "@/components/sections/CandidateTest";
import AuthorityDeep from "@/components/sections/AuthorityDeep";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

const siteUrl = "https://exilus.pe";

// FAQPage SOLO en la home (las 5 preguntas del componente FAQ de abajo).
// No va en layout.tsx: las service pages emiten su propio FAQPage y dos
// FAQPage en la misma URL violan las guidelines de rich results.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Soy candidato para cirugía bariátrica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generalmente, son candidatos los pacientes con IMC ≥ 30 con comorbilidades o IMC ≥ 35 con o sin enfermedades asociadas. Sin embargo, cada caso se evalúa de forma personalizada en consulta con el Dr. Salazar para determinar la mejor alternativa según tu situación médica e historia clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto peso se pierde después de la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los resultados varían según el procedimiento realizado y el compromiso del paciente con el seguimiento multidisciplinario. La evidencia de la ASMBS muestra una reducción significativa del exceso de peso, pero cada caso es individual. El acompañamiento integral — nutrición, psicología y control médico — es clave para sostener los resultados a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿La cirugía es riesgosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cirugía bariátrica es un procedimiento con respaldo médico cuando es realizado por un equipo especializado y en un centro acreditado. En Exilus utilizamos técnicas laparoscópicas avanzadas que ayudan a reducir los riesgos quirúrgicos y favorecen la recuperación postoperatoria. Toda intervención conlleva riesgos que se evalúan en la consulta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué seguimiento se realiza después de la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tratamiento incluye un seguimiento multidisciplinario continuo con cirugía, nutrición, psicología y control médico. El proceso no termina en el quirófano — el acompañamiento postoperatorio es parte integral de nuestro método y es fundamental para sostener los resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo varía según cada caso clínico y se define en la evaluación. La inversión incluye la evaluación integral preoperatoria, el procedimiento y el seguimiento. Contáctanos para una evaluación personalizada donde podremos orientarte sobre las opciones que mejor se adaptan a tu situación.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* 1 — Hero editorial */}
        <Hero />

        {/* 2 — AuthorityLite: quién es el cirujano (construye confianza temprana) */}
        <AuthorityLite />

        {/* 3 — CandidateTest: micro-commitment inmediato tras conocer al doctor */}
        <CandidateTest />

        {/* 4 — Services: qué ofrecemos (3 categorías con páginas dedicadas) */}
        <Services />

        {/* 5 — Method: cómo funciona el proceso */}
        <Method />

        {/* 6 — Results: outcomes y trayectoria cuantificada */}
        <Results />

        {/* 7 — Testimonials: prueba social de pacientes */}
        <Testimonials />

        {/* 8 — AuthorityDeep: membresías y formación académica para skeptics */}
        <AuthorityDeep />

        {/* 9 — FAQ: objeciones */}
        <FAQ />

        {/* 10 — FinalCTA: cierre */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
