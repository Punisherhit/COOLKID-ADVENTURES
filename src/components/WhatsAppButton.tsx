import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254795573688"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      style={{ 
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
