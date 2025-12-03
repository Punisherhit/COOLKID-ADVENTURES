import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-dunes.jpg";

const HeroSection = () => {
  const scrollToPackages = () => {
    const element = document.querySelector("#packages");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-4 tracking-wide animate-fade-in">
          COOLKID ADVENTURES
        </h1>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-6 tracking-wide animate-fade-in" style={{ animationDelay: "0.2s" }}>
          & QUAD TRIALS
        </h2>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Book Your Sand Dune Adventure Today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="hero"
            size="xl"
            onClick={() => window.open("https://wa.me/254103120054?text=Hello%20Coolkid%20Adventures,%20I%20would%20like%20to%20book%20a%20sand%20dune%20experience.", "_blank")}
          >
            BOOK NOW
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={scrollToPackages}
          >
            VIEW PACKAGES
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToPackages}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary-foreground/80 hover:text-primary transition-colors"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
};

export default HeroSection;
