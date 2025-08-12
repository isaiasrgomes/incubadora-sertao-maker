import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Wrench, CheckCircle, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Ideação",
      description: "Identificação e validação inicial de ideias inovadoras com potencial de impacto.",
      color: "text-sertao-blue"
    },
    {
      icon: Users,
      title: "Mentorias e Treinamentos",
      description: "Acesso a especialistas e workshops sobre modelo de negócio, marketing e tecnologia.",
      color: "text-sertao-blue"
    },
    {
      icon: Wrench,
      title: "Prototipagem",
      description: "Desenvolvimento de protótipos e MVPs com suporte técnico especializado.",
      color: "text-sertao-blue"
    },
    {
      icon: CheckCircle,
      title: "Validação de Mercado",
      description: "Testes com usuários reais e validação do produto-mercado fit.",
      color: "text-sertao-blue"
    },
    {
      icon: Rocket,
      title: "Incubação ou Aceleração",
      description: "Programa estruturado para crescimento e captação de investimentos.",
      color: "text-sertao-blue"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Como Funciona Nosso Processo
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo estruturado e personalizado para transformar sua ideia em uma startup de sucesso
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                
                <Card className="relative z-10 p-6 text-center bg-background border-border/50 hover:shadow-soft transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      Etapa {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          {/* Process Duration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-card rounded-2xl px-8 py-4 border border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6-18</div>
                <div className="text-sm text-muted-foreground">Meses</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Duração do Programa</div>
                <div className="text-sm text-muted-foreground">Varia conforme o estágio da startup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;