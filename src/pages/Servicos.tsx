import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Paintbrush, Layers, Zap, Monitor, Wind, Wrench, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import imgPintura from "@/assets/service-pintura.jpg";
import imgDrywall from "@/assets/service-drywall.jpg";
import imgEletrica from "@/assets/service-eletrica.jpg";
import imgEletronica from "@/assets/service-eletronica.jpg";
import imgArcondicionado from "@/assets/service-arcondicionado.jpg";
import imgManutencao from "@/assets/manutencao.jpg";

const servicesData = [
  {
    slug: "pintura",
    icon: Paintbrush,
    title: "Pintura",
    subtitle: "Residencial e Comercial",
    image: imgPintura,
    description:
      "Realizamos serviços de pintura interna e externa com acabamento profissional. Utilizamos tintas de alta qualidade para garantir durabilidade e beleza em cada projeto.",
    items: [
      "Pintura interna e externa",
      "Textura e grafiato",
      "Massa corrida e PVA",
      "Pintura epóxi para pisos",
      "Pintura de fachadas",
      "Preparação e tratamento de superfícies",
    ],
  },
  {
    slug: "drywall",
    icon: Layers,
    title: "Drywall",
    subtitle: "Paredes, Forros e Divisórias",
    image: imgDrywall,
    description:
      "Especialistas em drywall, oferecemos soluções modernas para divisão de ambientes, forros decorativos e sancas com acabamento perfeito.",
    items: [
      "Paredes e divisórias",
      "Forros lisos e decorativos",
      "Sancas abertas e fechadas",
      "Nichos e estantes embutidas",
      "Isolamento acústico e térmico",
      "Reparos e manutenção em drywall",
    ],
  },
  {
    slug: "eletrica",
    icon: Zap,
    title: "Elétrica",
    subtitle: "Instalações e Manutenções",
    image: imgEletrica,
    description:
      "Serviços elétricos completos seguindo todas as normas de segurança. Nossa equipe é certificada e utiliza materiais de primeira linha.",
    items: [
      "Instalações elétricas residenciais",
      "Quadros de distribuição",
      "Troca de fiação e cabeamento",
      "Instalação de tomadas e interruptores",
      "Iluminação decorativa e funcional",
      "Laudos e projetos elétricos",
    ],
  },
  {
    slug: "eletronica",
    icon: Monitor,
    title: "Eletrônica",
    subtitle: "Automação e Infraestrutura",
    image: imgEletronica,
    description:
      "Instalação e configuração de sistemas eletrônicos para residências e empresas, incluindo automação e infraestrutura de rede.",
    items: [
      "Automação residencial",
      "Instalação de câmeras (CFTV)",
      "Infraestrutura de rede e internet",
      "Sistemas de som ambiente",
      "Instalação de TVs e projetores",
      "Porteiros eletrônicos e interfones",
    ],
  },
  {
    slug: "arcondicionado",
    icon: Wind,
    title: "Ar Condicionado",
    subtitle: "Instalação e Manutenção",
    image: imgArcondicionado,
    description:
      "Serviços completos de climatização, desde a instalação até a manutenção preventiva e corretiva de sistemas split e multi-split.",
    items: [
      "Instalação de split e multi-split",
      "Manutenção preventiva",
      "Manutenção corretiva",
      "Higienização completa",
      "Carga de gás refrigerante",
      "Desinstalação e remanejamento",
    ],
  },
  {
    slug: "manutencao",
    icon: Wrench,
    title: "Manutenção Geral",
    subtitle: "Predial e Residencial",
    image: imgManutencao,
    description:
      "Serviços diversos de manutenção para manter seu imóvel sempre em perfeitas condições. Equipe multidisciplinar e atendimento ágil.",
    items: [
      "Reparos hidráulicos",
      "Troca de torneiras e registros",
      "Montagem de móveis",
      "Instalação de acessórios",
      "Pequenos reparos em geral",
      "Manutenção predial preventiva",
    ],
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

const ServicosPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase">
              Nossos Serviços
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
              Soluções completas para sua <span className="text-primary">reforma</span>
            </h1>
            <p className="font-body text-lg text-accent-foreground/70 max-w-2xl mx-auto">
              Conheça em detalhes cada um dos nossos serviços e veja como podemos transformar seus espaços.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16 space-y-24"
      >
        {servicesData.map((service, index) => (
          <motion.section
            key={service.slug}
            id={service.slug}
            variants={item}
            className="scroll-mt-20"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-elevated)" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground">
                    <service.icon className="h-4 w-4" />
                    <span className="font-body text-sm font-semibold">{service.title}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase">
                  {service.subtitle}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  {service.title}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.items.map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="gap-2 font-semibold" asChild>
                    <a href="/#contato">
                      <Phone className="h-4 w-4" />
                      Solicitar Orçamento
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 font-semibold" asChild>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar no WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </motion.div>

      {/* CTA Banner */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar sua <span className="text-primary">reforma</span>?
          </h2>
          <p className="font-body text-lg text-accent-foreground/70 mb-8 max-w-xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base font-semibold px-8" asChild>
              <a href="/#contato">
                <Phone className="h-5 w-5" />
                Solicitar Orçamento Grátis
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-base font-semibold bg-accent-foreground/10 px-8 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/30" asChild>
              <Link to="/">
                Voltar ao Início
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicosPage;
