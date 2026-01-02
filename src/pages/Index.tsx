import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onCtaClick={scrollToForm} />
      <BenefitsSection />
      <div ref={formRef}>
        <LeadForm id="lead-form" />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
