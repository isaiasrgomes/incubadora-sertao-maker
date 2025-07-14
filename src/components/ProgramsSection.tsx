import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Pré-incubação",
      subtitle: "Para quem está começando",
      description: "Apoio inicial para validação de ideias e desenvolvimento de protótipos. Ideal para empreendedores em estágio inicial.",
      duration: "3-6 meses",
      participants: "Até 20 vagas",
      focus: "Validação de Ideia",
      features: [
        "Workshops de ideação",
        "Mentoria individual",
        "Prototipagem rápida",
        "Networking local",
        "Pitch básico"
      ],
      color: "sertao-yellow",
      badge: "Ideal para iniciantes"
    },
    {
      title: "Incubação",
      subtitle: "Para startups formalizadas",
      description: "Programa estruturado para startups já constituídas que buscam crescimento e estruturação do negócio.",
      duration: "6-12 meses",
      participants: "Até 15 vagas",
      focus: "Crescimento",
      features: [
        "Mentoria especializada",
        "Modelo de negócio",
        "Estratégia de marketing",
        "Captação de recursos",
        "Demo Day"
      ],
      color: "sertao-green",
      badge: "Mais procurado"
    },
    {
      title: "Mentorias",
      subtitle: "Acesso a especialistas",
      description: "Programa contínuo de mentorias com especialistas em diversas áreas do empreendedorismo e inovação.",
      duration: "Contínuo",
      participants: "Ilimitado",
      focus: "Especialização",
      features: [
        "Mentores especializados",
        "Sessões 1:1",
        "Workshops temáticos",
        "Networking premium",
        "Acesso permanente"
      ],
      color: "sertao-orange",
      badge: "Flexível"
    }
  ];

  return (
    <section id="programas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Programas e Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o programa ideal para o estágio da sua startup e acelere seu crescimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="relative p-8 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {program.subtitle}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {program.badge}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Program Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Duração: <span className="font-medium text-foreground">{program.duration}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Vagas: <span className="font-medium text-foreground">{program.participants}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Foco: <span className="font-medium text-foreground">{program.focus}</span>
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 mb-8">
                <h4 className="font-semibold text-foreground mb-3">O que está incluído:</h4>
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="cta" 
                className="w-full group-hover:shadow-soft transition-all duration-300"
              >
                Inscrever-se
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Não tem certeza qual programa é ideal?
            </h3>
            <p className="text-muted-foreground mb-6">
              Converse com nossa equipe para uma avaliação gratuita do seu projeto
            </p>
            <Button variant="outline">
              Agendar Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;