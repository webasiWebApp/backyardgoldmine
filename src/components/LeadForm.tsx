import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  id?: string;
}

const LeadForm = ({ id }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "🎉 Congratulations!",
      description: "Your information has been submitted. We'll contact you shortly with your free trip details!",
    });
  };

  if (isSubmitted) {
    return (
      <section id={id} className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gold mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
              <Check className="w-10 h-10 text-navy" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-6">
              We've received your information. Our team will contact you within 24 hours to discuss your ADU options and your FREE trip to one of 150+ destinations!
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3">
              <Plane className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">Your free trip is on its way!</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
                <Plane className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">
                  FREE Trip Included
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                See If Your Home Qualifies
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Book your free consultation today and receive a complimentary trip to over <span className="font-bold text-gold">150+ destinations</span> when you provide your contact information.
              </p>

              <ul className="space-y-4 text-primary-foreground/90">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <span>Free lot evaluation to see if you qualify</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <span>Virtual interior tour of the Casita</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <span>Approved Casita plans & rebate details</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <span>FREE trip to 150+ destinations!</span>
                </li>
              </ul>
            </div>

            {/* Right side - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                Get Your Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, CA"
                    required
                    className="bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Get My Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive communications from Backyard Gold Mine. 
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
