import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase">
            Fale conosco
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Solicite seu Orçamento
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Entre em contato e receba um orçamento personalizado para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl bg-accent text-accent-foreground" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <h3 className="font-heading text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-accent-foreground/70">Telefone</p>
                    <p className="font-body font-semibold">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-accent-foreground/70">Email</p>
                    <p className="font-body font-semibold">contato@reformapro.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-accent-foreground/70">Endereço</p>
                    <p className="font-body font-semibold">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5 p-8 rounded-xl bg-card border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                <Input placeholder="Seu nome" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Telefone</label>
                <Input placeholder="(00) 00000-0000" />
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Serviço Desejado</label>
              <Input placeholder="Ex: Pintura, Drywall, Elétrica..." />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
              <Textarea placeholder="Descreva seu projeto..." rows={4} />
            </div>
            <Button size="lg" className="w-full text-base font-semibold">
              Enviar Mensagem
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
