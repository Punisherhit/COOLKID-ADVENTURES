const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl text-primary-foreground mb-1">
              COOLKID ADVENTURES & QUAD TRIALS
            </h3>
            <p className="font-body text-sm text-primary-foreground/60">
              Your ultimate sand dune experience in Kenya
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-body text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <p className="font-body text-xs text-primary-foreground/50 mt-2">
              Designed by <span className="text-primary-foreground/70 font-medium">ANTHONY DERIC</span>
            </p>
            <p className="font-body text-xs text-primary-foreground/50">
              <a href="https://wa.me/254103120054" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">+254 103 120 054</a>
              {" | "}
              <a href="mailto:antondewin457@gmail.com" className="hover:text-primary-foreground/70 transition-colors">antondewin457@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
