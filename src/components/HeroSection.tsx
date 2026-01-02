import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
import heroImage from "@/assets/hero-casita.jpg";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Plane className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              FREE Trip to 150+ Destinations with Consultation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Turn Your Backyard Into a{" "}
            <span className="text-gold">2026 Income Stream</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A Boxabl Casita can add <span className="font-bold text-gold">$24,000–$36,000/year</span> in rental income.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Fully installed from <span className="font-bold text-gold">$110,000</span> (after $40,000 rebate).
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              onClick={onCtaClick}
              size="lg"
              className="group bg-gold hover:bg-gold-dark text-navy font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              See If Your Home Qualifies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">County-Approved ADUs</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">Only 5 Units at This Price</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">Free Lot Evaluation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
