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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — Hero editorial */}
        <Hero />

        {/* 2 — AuthorityLite: quién es el cirujano (construye confianza temprana) */}
        <AuthorityLite />

        {/* 3 — Method: cómo funciona el proceso */}
        <Method />

        {/* 4 — Results: outcomes y trayectoria cuantificada */}
        <Results />

        {/* 5 — Testimonials: prueba social de pacientes */}
        <Testimonials />

        {/* 6 — Services: qué ofrecemos */}
        <Services />

        {/* 7 — CandidateTest: micro-commitment post-persuasión */}
        <CandidateTest />

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
