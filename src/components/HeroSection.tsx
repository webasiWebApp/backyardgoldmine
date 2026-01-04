import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
import heroImage from "@/assets/hero-casita.jpg";
import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'the-builder-map-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'the-builder-search-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  useEffect(() => {
    // Load the map page script
    const mapScript = document.createElement('script');
    mapScript.src = "https://assets.thebuilder.ai/fc71d69e4c03506e4e592a83067c5145/embedded/TheBuilderMapPage.js";
    mapScript.type = "module";
    document.body.appendChild(mapScript);

    // Load the search field script
    const searchScript = document.createElement('script');
    searchScript.src = "https://assets.thebuilder.ai/fc71d69e4c03506e4e592a83067c5145/embedded/TheBuilderSearchField.js";
    searchScript.type = "module";
    document.body.appendChild(searchScript);

    return () => {
      document.body.removeChild(mapScript);
      document.body.removeChild(searchScript);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex-shrink-0">
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

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
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

      {/* Builder Widget - Search and Map */}
      <div className="relative z-10 flex-1 w-full px-4 pb-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <div className="container mx-auto h-full flex flex-col">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              See If Your Home Qualifies
            </h2>
            <p className="text-primary-foreground/70">
              Enter your address to check eligibility and claim your FREE trip!
            </p>
          </div>
          <div className="max-w-2xl mx-auto w-full mb-4">
            <the-builder-search-field></the-builder-search-field>
          </div>
          <div className="flex-1 min-h-[400px] rounded-xl overflow-hidden shadow-lg">
            <the-builder-map-page style={{ display: 'block', width: '100%', height: '100%' }}></the-builder-map-page>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
