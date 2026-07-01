import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatButton } from "@/components/layout/WhatsAppFloatButton";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { SymptomChecklist } from "@/components/sections/SymptomChecklist";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Benefits } from "@/components/sections/Benefits";
import { HowToUse } from "@/components/sections/HowToUse";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <SymptomChecklist />
        <ProblemSolution />
        <ProductShowcase />
        <Benefits />
        <HowToUse />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
