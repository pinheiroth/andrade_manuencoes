const Footer = () => {
  return (
    <footer className="py-10 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#inicio" className="font-heading text-xl font-bold tracking-tight">
            Reforma<span className="text-primary">Pro</span>
          </a>
          <p className="font-body text-sm text-accent-foreground/70">
            © {new Date().getFullYear()} ReformaPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
