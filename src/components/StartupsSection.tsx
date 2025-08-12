import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { startupDescription } from "./startupDescription";

import nossaRocaLogo from "../assets/img/startupLogos/nossaRoca.png"

const StartupsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [expandedCards, setExpandedCards] = useState({});
  const [overflowCards, setOverflowCards] = useState({});

  const descRefs = useRef({});

  const categories = [
    { id: "todas", label: "Todas" },
    { id: "agricultura", label: "Agricultura" },
    { id: "agrogestao", label: "Agrogestão" },
    { id: "agronegocio", label: "Agronegócio" },
    { id: "alimentos", label: "Alimentos" },
    { id: "artes_e_cultura", label: "Artes e Cultura" },
    { id: "automacao", label: "Automação" },
    { id: "construcao_civil", label: "Construção Civil" },
    { id: "economia", label: "Economia" },
    { id: "educacao", label: "Educação" },
    { id: "energia_fotovoltaica", label: "Energia Fotovoltaica" },
    { id: "ia", label: "Inteligência Artificial" },
    { id: "logistica", label: "Logística" },
    { id: "saude", label: "Saúde" },
    { id: "seguranca_publica", label: "Segurança Pública" },
    { id: "turismo", label: "Turismo" }
  ];

  const startups = [
    {
      name: "Nossa Roça",
      category: "agricultura",
      description: startupDescription.nossaRoca,
      stage: "Incubada",
      logo: "🌿",
      website: "#"
    },
    {
      name: "Aromas do Vale",
      category: "agricultura",
      description: startupDescription.aromasDoVale,
      stage: "Acelerada",
      logo: "🌧️",
      website: "#"
    },
    {
      name: "ArtEsfera",
      category: "artes_e_cultura",
      description: startupDescription.ArtEsfera,
      stage: "Pré-incubada",
      logo: "🏥",
      website: "#"
    },
    {
      name: "Zilly",
      category: "construcao_civil",
      description: startupDescription.zilly,
      stage: "Incubada",
      logo: "☀️",
      website: "#"
    },
    {
      name: "Hibuddy",
      category: "educacao",
      description: startupDescription.hibuddy,
      stage: "Acelerada",
      logo: "💳",
      website: "#"
    },
    {
      name: "Desvenda",
      category: "turismo",
      description: startupDescription.desvenda,
      stage: "Incubada",
      logo: "💧",
      website: "#"
    },
    {
      name: "SERA462",
      category: "educacao",
      description: startupDescription.sera462,
      stage: "Pré-incubada",
      logo: "🌿",
      website: "#"
    },
    {
      name: "Rolê App",
      category: "turismo",
      description: startupDescription.roleApp,
      stage: "Incubada",
      logo: "💻",
      website: "#"
    },
    {
      name: "Ser Fit",
      category: "alimentos",
      description: startupDescription.serFit,
      stage: "Incubada",
      logo: "💻",
      website: "#"
    },  
    {
      name: "Lamparina.Social",
      category: "educacao",
      description: startupDescription.lamparinaSocial,
      stage: "Incubada",
      logo: "💻",
      website: "#"
    },
    {
      name: "Mype",
      category: "saude",
      description: startupDescription.mype,
      stage: "Incubada",
      logo: "💻",
      website: "#"
    },
  ];

  const filteredStartups =
    selectedCategory === "todas"
      ? startups
      : startups.filter((startup) => startup.category === selectedCategory);

  const getStageColor = (stage) => {
    switch (stage) {
      case "Pré-incubada":
        return "bg-sertao-green/20 text-sertao-green border-sertao-yellow/30";
      case "Incubada":
        return "bg-sertao-green/20 text-sertao-green border-sertao-green/30";
      case "Acelerada":
        return "bg-sertao-orange/20 text-sertao-orange border-sertao-orange/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  useEffect(() => {
    const newOverflow = {};
    Object.keys(descRefs.current).forEach((key) => {
      const el = descRefs.current[key];
      if (el && el.scrollHeight > 96) {
        newOverflow[key] = true;
      }
    });
    setOverflowCards(newOverflow);
  }, [filteredStartups]);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
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
              {selectedCategory === category.id && (
                <Filter className="w-4 h-4 mr-2" />
              )}
              {category.label}
            </Button>
          ))}
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup, index) => (
            <Card
              key={index}
              className="p-6 bg-background border-border/50 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{startup.logo}</div>

                  {/*<img src={startup.logo} alt={`${startup.name} logo`} className="w-20 h-20" />* colocar imagem */}
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

              <p
                ref={(el) => (descRefs.current[index] = el)}
                className="text-muted-foreground mb-2 leading-relaxed overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expandedCards[index] ? "1000px" : "96px"
                }}
              >
                {startup.description}
              </p>

              {overflowCards[index] && (
                <Button
                  variant="link"
                  size="sm"
                  className="mb-4 p-0 h-auto text-primary"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedCards[index] ? "Ler menos" : "Ler mais"}
                </Button>
              )}

              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  {categories.find((cat) => cat.id === startup.category)?.label}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:text-primary"
                >
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
              Inscreva sua startup em nossos programas e transforme sua ideia em
              realidade
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
