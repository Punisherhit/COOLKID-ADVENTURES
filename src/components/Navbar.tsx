import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#calculator", label: "Calculator" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-display text-2xl text-primary tracking-wide">
            COOLKID ADVENTURES
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="adventure"
              size="sm"
              onClick={() => window.open("https://wa.me/254795573688?text=Hello%20Coolkid%20Adventures,%20I%20would%20like%20to%20book%20a%20sand%20dune%20experience.", "_blank")}
            >
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="adventure"
                size="sm"
                onClick={() => window.open("https://wa.me/254795573688?text=Hello%20Coolkid%20Adventures,%20I%20would%20like%20to%20book%20a%20sand%20dune%20experience.", "_blank")}
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
