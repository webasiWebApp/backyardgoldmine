import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToWidget = () => {
    // Scroll to the widget section within the hero
    document.querySelector('the-builder-search-field')?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onCtaClick={scrollToWidget} />
      <BenefitsSection />
      <Footer />
    </main>
  );
};

export default Index;
