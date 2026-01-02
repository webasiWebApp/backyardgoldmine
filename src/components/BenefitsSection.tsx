import { DollarSign, Home, TrendingUp, Calendar } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    value: "$110,000",
    label: "Fully Installed Price",
    description: "After $40,000 instant rebate",
  },
  {
    icon: TrendingUp,
    value: "$2,500+",
    label: "Monthly Rental Income",
    description: "Potential passive income",
  },
  {
    icon: Home,
    value: "$799",
    label: "Monthly Payment",
    description: "Affordable financing options",
  },
  {
    icon: Calendar,
    value: "$310K",
    label: "Potential Resale Value",
    description: "Increase your property value",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Backyard is Worth More Than You Think
          </h2>
          <p className="text-lg text-muted-foreground">
            Most California homeowners qualify for 2-3 ADUs. Start generating passive income in 2026.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Value */}
                <div className="text-3xl font-bold text-gold mb-1">
                  {benefit.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-foreground mb-2">
                  {benefit.label}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                A Boxabl Casita Retails for $150,000 Installed
              </h3>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-xs font-bold text-navy">✓</span>
                  </div>
                  Includes the cost of the Casita and installation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-xs font-bold text-navy">✓</span>
                  </div>
                  Most homes can have 2 or 3 ADUs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-xs font-bold text-navy">✓</span>
                  </div>
                  County-approved Boxabl Casita plans
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-gold rounded-2xl p-6 text-navy">
                <div className="text-sm font-medium mb-1">Limited Time Offer</div>
                <div className="text-4xl font-bold mb-2">$40,000</div>
                <div className="text-lg font-semibold">Instant Rebate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
