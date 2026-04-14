import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Services from "@/components/sections/Services";
import Differential from "@/components/sections/Differential";
import Results from "@/components/sections/Results";
import CandidateTest from "@/components/sections/CandidateTest";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Services />
        <Differential />
        <Results />
        <CandidateTest />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
