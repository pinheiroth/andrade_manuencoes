import { Link } from "react-router-dom";
import logo from "@/assets/logo-andrade.jpg";

const Footer = () => {
  return (
    <footer className="py-10 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Reformas e Manutenções Andrade" className="h-14 w-auto mb-3" />
            <p className="font-body text-sm text-accent-foreground/70">
              Excelência em reformas e manutenções para residências e empresas.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm text-accent-foreground/70 hover:text-primary transition-colors">Início</Link>
              <Link to="/servicos" className="font-body text-sm text-accent-foreground/70 hover:text-primary transition-colors">Serviços</Link>
              <a href="/#sobre" className="font-body text-sm text-accent-foreground/70 hover:text-primary transition-colors">Sobre</a>
              <a href="/#contato" className="font-body text-sm text-accent-foreground/70 hover:text-primary transition-colors">Contato</a>
            </nav>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Contato</h4>
            <div className="space-y-2 font-body text-sm text-accent-foreground/70">
              <p>(11) 99999-9999</p>
              <p>contato@andrademanutenções.com.br</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>
        <div className="border-t border-accent-foreground/10 pt-6 text-center">
          <p className="font-body text-sm text-accent-foreground/70">
            © {new Date().getFullYear()} Reformas e Manutenções Andrade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
