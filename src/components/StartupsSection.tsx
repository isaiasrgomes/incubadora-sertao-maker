import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ExternalLink, Filter } from "lucide-react";

const StartupsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = [
    { id: "todas", label: "Todas" },
    { id: "educacao", label: "Educação" },
    { id: "saude", label: "Saúde" },
    { id: "agro", label: "Agronegócio" },
    { id: "tecnologia-social", label: "Tecnologia Social" },
    { id: "fintech", label: "Fintech" }
  ];

  const startups = [
    {
      name: "EduSertão",
      category: "educacao",
      description: "Plataforma de educação digital para estudantes do Sertão Central com conteúdo adaptado à realidade local.",
      stage: "Incubada",
      logo: "🎓",
      website: "#"
    },
    {
      name: "AgroChuva",
      category: "agro",
      description: "Sistema de captação e armazenamento inteligente de água da chuva para pequenos produtores.",
      stage: "Acelerada",
      logo: "🌧️",
      website: "#"
    },
    {
      name: "SaudeConnect",
      category: "saude",
      description: "Telemedicina especializada para comunidades rurais do nordeste brasileiro.",
      stage: "Pré-incubada",
      logo: "🏥",
      website: "#"
    },
    {
      name: "SolarTech",
      category: "tecnologia-social",
      description: "Soluções de energia solar acessíveis para comunidades isoladas do sertão.",
      stage: "Incubada",
      logo: "☀️",
      website: "#"
    },
    {
      name: "FinCaatinga",
      category: "fintech",
      description: "Microcrédito digital para pequenos empreendedores rurais com foco em sustentabilidade.",
      stage: "Acelerada",
      logo: "💳",
      website: "#"
    },
    {
      name: "CisternaTech",
      category: "tecnologia-social",
      description: "Tecnologia IoT para monitoramento de cisternas e gestão de recursos hídricos.",
      stage: "Incubada",
      logo: "💧",
      website: "#"
    },
    {
      name: "BioSertão",
      category: "agro",
      description: "Biodefensivos naturais desenvolvidos a partir da biodiversidade da caatinga.",
      stage: "Pré-incubada",
      logo: "🌿",
      website: "#"
    },
    {
      name: "RuralLearn",
      category: "educacao",
      description: "Capacitação técnica online para jovens rurais em tecnologias emergentes.",
      stage: "Incubada",
      logo: "💻",
      website: "#"
    }
  ];

  const filteredStartups = selectedCategory === "todas" 
    ? startups 
    : startups.filter(startup => startup.category === selectedCategory);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Pré-incubada": return "bg-sertao-yellow/20 text-sertao-yellow border-sertao-yellow/30";
      case "Incubada": return "bg-sertao-green/20 text-sertao-green border-sertao-green/30";
      case "Acelerada": return "bg-sertao-orange/20 text-sertao-orange border-sertao-orange/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="startups" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Startups Incubadas
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as startups que estão transformando o Sertão Central brasileiro
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {selectedCategory === category.id && <Filter className="w-4 h-4 mr-2" />}
              {category.label}
            </Button>
          ))}
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup, index) => (
            <Card key={index} className="p-6 bg-background border-border/50 hover:shadow-soft transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{startup.logo}</div>
                <Badge 
                  variant="outline" 
                  className={getStageColor(startup.stage)}
                >
                  {startup.stage}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {startup.name}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {startup.description}
              </p>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {categories.find(cat => cat.id === startup.category)?.label}
                </Badge>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quer fazer parte desta comunidade?
            </h3>
            <p className="text-muted-foreground mb-6">
              Inscreva sua startup em nossos programas e transforme sua ideia em realidade
            </p>
            <Button variant="cta" size="lg">
              Inscrever Startup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;