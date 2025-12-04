import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ready to start your adventure? Contact us today!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/254795573688"
              target="_blank"
              rel="noopener noreferrer"
              className="card-service p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                <Phone className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">WhatsApp</h3>
              <p className="font-body text-muted-foreground text-sm">+254 795 573 688</p>
            </a>

            {/* Email */}
            <a
              href="mailto:zironickson@gmail.com"
              className="card-service p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Email</h3>
              <p className="font-body text-muted-foreground text-sm">zironickson@gmail.com</p>
            </a>

            {/* Location */}
            <div className="card-service p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Location</h3>
              <p className="font-body text-muted-foreground text-sm">Mambrui, Malindi - Kenya</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              BOOK YOUR ADVENTURE NOW
            </h3>
            <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
              Experience the thrill of sand dune adventures and quad biking. Don't miss out!
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open("https://wa.me/254795573688?text=Hello%20Coolkid%20Adventures,%20I%20would%20like%20to%20book%20a%20sand%20dune%20experience.", "_blank")}
            >
              BOOK VIA WHATSAPP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
