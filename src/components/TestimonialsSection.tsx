import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    service: "Pintura Residencial",
    text: "Excelente trabalho! A equipe da Andrade transformou completamente minha sala. Profissionalismo e acabamento impecável. Super recomendo!",
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    service: "Drywall e Elétrica",
    text: "Contratei para fazer divisórias em drywall e refazer toda a parte elétrica. Ficou perfeito, entregaram no prazo e o preço foi justo.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    service: "Ar Condicionado",
    text: "Instalaram 3 splits na minha empresa. Atendimento rápido, instalação limpa e funcionando perfeitamente. Voltarei a contratar com certeza.",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    service: "Reforma Completa",
    text: "Fizeram toda a reforma do meu apartamento. Da pintura ao acabamento elétrico, tudo ficou exatamente como eu queria. Equipe muito profissional!",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection = () => {
  return (
    <section id="testemunhos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            O que nossos clientes dizem
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="relative p-8 rounded-xl bg-background border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="font-body text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div>
                <p className="font-body font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
