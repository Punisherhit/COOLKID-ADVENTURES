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
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
