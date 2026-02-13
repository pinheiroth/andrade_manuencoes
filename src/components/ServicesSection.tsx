import { motion } from "framer-motion";
import { Paintbrush, Layers, Zap, Monitor, Wind, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Pintura residencial e comercial com acabamento impecável e tintas de alta qualidade.",
    slug: "pintura",
  },
  {
    icon: Layers,
    title: "Drywall",
    description: "Instalação de paredes, forros e divisórias em drywall com precisão e agilidade.",
    slug: "drywall",
  },
  {
    icon: Zap,
    title: "Elétrica",
    description: "Instalações e manutenções elétricas seguindo todas as normas de segurança.",
    slug: "eletrica",
  },
  {
    icon: Monitor,
    title: "Eletrônica",
    description: "Instalação de sistemas eletrônicos, automação e infraestrutura tecnológica.",
    slug: "eletronica",
  },
  {
    icon: Wind,
    title: "Ar Condicionado",
    description: "Instalação, manutenção preventiva e corretiva de sistemas de climatização.",
    slug: "arcondicionado",
  },
  {
    icon: Wrench,
    title: "Manutenção Geral",
    description: "Serviços diversos de manutenção predial e residencial com equipe qualificada.",
    slug: "manutencao",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Nossos Serviços
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Oferecemos uma gama completa de serviços de reforma e manutenção para transformar qualquer ambiente.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary p-0" asChild>
                <Link to={`/servicos#${service.slug}`}>
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button size="lg" className="gap-2 text-base font-semibold px-8" asChild>
            <Link to="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
