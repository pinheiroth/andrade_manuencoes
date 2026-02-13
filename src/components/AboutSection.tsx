import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 10 anos de experiência no mercado",
  "Equipe qualificada e treinada",
  "Materiais de primeira linha",
  "Compromisso com prazos",
  "Orçamento sem compromisso",
  "Atendimento personalizado",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "500+", label: "Projetos Realizados" },
              { value: "10+", label: "Anos de Experiência" },
              { value: "100%", label: "Clientes Satisfeitos" },
              { value: "24h", label: "Suporte Disponível" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-xl bg-background border border-border text-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="font-heading text-4xl font-bold text-primary block">
                  {stat.value}
                </span>
                <span className="font-body text-sm text-muted-foreground mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase">
              Quem somos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Qualidade e confiança em cada detalhe
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Somos uma empresa especializada em reformas e manutenções, comprometida em 
              entregar resultados que superam expectativas. Nossa equipe altamente qualificada 
              utiliza os melhores materiais e técnicas do mercado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
