import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
              Backyard <span className="text-gold">Gold Mine</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Your backyard is worth more than you think.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-2">
              Authorized Boxabl Dealer
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <a href="tel:951-392-9158" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors">
              <Phone className="w-5 h-5 text-gold" />
              <span>951-392-9158</span>
            </a>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Santa Ana, CA</span>
            </div>
            <a href="mailto:info@backyardgoldmine.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors">
              <Mail className="w-5 h-5 text-gold" />
              <span>info@backyardgoldmine.com</span>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center md:text-right">
            <div className="inline-block bg-gold/20 border border-gold/30 rounded-xl p-4">
              <p className="text-primary-foreground/90 text-sm mb-1">
                Text <span className="font-bold text-gold">"INFO"</span> to
              </p>
              <p className="text-2xl font-bold text-gold">951-392-9158</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Backyard Gold Mine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
