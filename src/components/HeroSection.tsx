import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-renovation.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Reforma profissional em andamento"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 text-primary font-body text-sm font-semibold tracking-wide border border-primary/30">
            Excelência em Reformas
          </span>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-accent-foreground leading-tight mb-6">
            Transformamos seus{" "}
            <span className="text-primary">espaços</span> com qualidade e profissionalismo
          </h1>

          <p className="font-body text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-lg">
            Pintura, drywall, elétrica, eletrônica, ar condicionado e muito mais. 
            Sua reforma completa em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 text-base font-semibold px-8">
              Solicitar Orçamento
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base font-semibold px-8 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
            >
              Nossos Serviços
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
