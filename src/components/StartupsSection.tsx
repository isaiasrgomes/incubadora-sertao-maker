import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";

import { startupDescription } from "./startupDescription";
import nossaRocaLogo from "../assets/img/startupLogos/nossa-roca.jpeg";
import beyondTheAridLogo from "../assets/img/startupLogos/beyond-the-arid.jpeg";
import detektaiLogo from "../assets/img/startupLogos/detektai.jpeg";
import ecosolLogo from "../assets/img/startupLogos/ecosol.png";
import freteGessoLogo from "../assets/img/startupLogos/frete-gesso.jpeg";
import hubEduLogo from "../assets/img/startupLogos/hubedu.jpeg";
import neureonLogo from "../assets/img/startupLogos/neureon.jpeg";
import vitallyLogo from "../assets/img/startupLogos/vitally.jpeg";
import zeatechLogo from "../assets/img/startupLogos/zeatech.jpeg";

const StartupsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [expandedCards, setExpandedCards] = useState({});
  const [overflowCards, setOverflowCards] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedStartup, setSelectedStartup] = useState(null);

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
    { id: "turismo", label: "Turismo" },
  ];

  const startups = [
    {
      id: 1,
      name: "Nossa Roça",
      category: "agricultura",
      description: startupDescription.nossaRoca,
      stage: "Incubada",
      logo: nossaRocaLogo,
      website: "#",
    },
    {
      id: 2,
      name: "Aromas do Vale",
      category: "agricultura",
      description: startupDescription.aromasDoVale,
      stage: "Acelerada",
      logo: "🌿",
      website: "#",
    },
    {
      id: 3,
      name: "ArtEsfera",
      category: "artes_e_cultura",
      description: startupDescription.ArtEsfera,
      stage: "Pré-incubada",
      logo: "🎭",
      website: "#",
    },
    {
      id: 4,
      name: "Zilly",
      category: "construcao_civil",
      description: startupDescription.zilly,
      stage: "Incubada",
      logo: "🏗️",
      website: "#",
    },
    {
      id: 5,
      name: "Hibuddy",
      category: "educacao",
      description: startupDescription.hibuddy,
      stage: "Acelerada",
      logo: "📚",
      website: "#",
    },
    {
      id: 6,
      name: "Desvenda",
      category: "turismo",
      description: startupDescription.desvenda,
      stage: "Incubada",
      logo: "🧳",
      website: "#",
    },
    {
      id: 7,
      name: "SERA462",
      category: "educacao",
      description: startupDescription.sera462,
      stage: "Pré-incubada",
      logo: "📚",
      website: "#",
    },
    {
      id: 8,
      name: "Rolê App",
      category: "turismo",
      description: startupDescription.roleApp,
      stage: "Incubada",
      logo: "🧳",
      website: "#",
    },
    {
      id: 9,
      name: "Ser Fit",
      category: "alimentos",
      description: startupDescription.serFit,
      stage: "Incubada",
      logo: "🍲",
      website: "#",
    },
    {
      id: 10,
      name: "Lamparina.Social",
      category: "educacao",
      description: startupDescription.lamparinaSocial,
      stage: "Incubada",
      logo: "📚",
      website: "#",
    },
    {
      id: 11,
      name: "Mype",
      category: "saude",
      description: startupDescription.mype,
      stage: "Incubada",
      logo: "🏥",
      website: "#",
    },
    {
      id: 12,
      name: "Oxe, Comprei",
      category: "economia",
      description: startupDescription.oxeComprei,
      stage: "Incubada",
      logo: "💰",
      website: "#",
    },
    {
      id: 13,
      name: "Beyond the Arid",
      category: "agronegocio",
      description: startupDescription.beyondTheArid,
      stage: "Incubada",
      logo: beyondTheAridLogo,
      website: "#",
    },
    {
      id: 14,
      name: "Avaliação econômica de Impacto e Resultados",
      category: "agricultura",
      description: startupDescription.avaliacaoEconomica,
      stage: "Incubada",
      logo: "🌿",
      website: "#",
    },
    {
      id: 15,
      name: "Hub Criativo do Pajeú",
      category: "artes_e_cultura",
      description: startupDescription.hubPajeu,
      stage: "Incubada",
      logo: "🎭",
      website: "#",
    },
    {
      id: 16,
      name: "Detekt AI",
      category: "seguranca_publica",
      description: startupDescription.detektAI,
      stage: "Incubada",
      logo: detektaiLogo,
      website: "#",
    },
    {
      id: 17,
      name: "Frete Gesso",
      category: "logistica",
      description: startupDescription.freteGesso,
      stage: "Incubada",
      logo: freteGessoLogo,
      website: "#",
    },
    {
      id: 18,
      name: "Neureon",
      category: "saude",
      description: startupDescription.neureon,
      stage: "Incubada",
      logo: neureonLogo,
      website: "#",
    },
    {
      id: 19,
      name: "Vitally",
      category: "saude",
      description: startupDescription.vitally, // <- aqui você passa a variável importada
      stage: "Incubada",
      logo: vitallyLogo,
      website: "#",
    },
    {
      id: 20,
      name: "Inovação sustentável para produtividade e economia",
      category: "agricultura",
      description: startupDescription.inovacaoSustentavelEco,
      stage: "Incubada",
      logo: "🌿",
      website: "#",
    },
    {
      id: 21,
      name: "Eco Sol do Araripe",
      category: "energia_fotovoltaica",
      description: startupDescription.ecoSolDoAraripe,
      stage: "Incubada",
      logo: ecosolLogo,
      website: "#",
    },
    {
      id: 22,
      name: "Aceleração Digital BR (ADBR)",
      category: "ia",
      description: startupDescription.adbr,
      stage: "Incubada",
      logo: "🤖", // <- aqui você passa a variável importada
      website: "#",
    },
    {
      id: 23,
      name: "Automatech",
      category: "automacao",
      description: startupDescription.automatech,
      stage: "Incubada",
      logo: "💻",
      website: "#",
    },
    {
      id: 24,
      name: "Salão Escola Beleza que Transforma",
      category: "educacao",
      description: startupDescription.SalãoEscolaBeleza,
      stage: "Incubada",
      logo: "📚",
      website: "#",
    },
    {
      id: 25,
      name: "AgroTronix",
      category: "automacao",
      description: startupDescription.agroTronix,
      stage: "Incubada",
      logo: "🤖",
      website: "#",
    },
    {
      id: 26,
      name: "Rede Sertão Criativo",
      category: "artes_e_cultura",
      description: startupDescription.redeSertaoCriativo,
      stage: "Incubada",
      logo: "🎭",
      website: "#",
    },
    {
      id: 27,
      name: "Equipamentos Didáticos Interativos (EDI)",
      category: "educacao",
      description: startupDescription.edi,
      stage: "Incubada",
      logo: "📚",
      website: "#",
    },
    {
      id: 28,
      name: "Agro Eventos",
      category: "agronegocio",
      description: startupDescription.agroEventos,
      stage: "Incubada",
      logo: "🌿",
      website: "#",
    },
    {
      id: 29,
      name: "ZeaTech",
      category: "agricultura",
      description: startupDescription.ZeaTech,
      stage: "Incubada",
      logo: zeatechLogo,
      website: "#",
    },
    {
      id: 30,
      name: "Aquatech",
      category: "agricultura",
      description: startupDescription.aquatech,
      stage: "Incubada",
      logo: "🌿",
      website: "#",
    },
    {
      id: 31,
      name: "HubEdu",
      category: "educacao",
      description: startupDescription.eduHub,
      stage: "Incubada",
      logo: hubEduLogo,
      website: "#",
    },
    {
      id: 32,
      name: "Agro Gestão e Consultoria",
      category: "agrogestao",
      description: startupDescription.agroGestaoConsultoria,
      stage: "Incubada",
      logo: "🌿",
      website: "#",
    },
  ];

  const filteredStartups =
    selectedCategory === "todas"
      ? startups
      : startups.filter((startup) => startup.category === selectedCategory);

  // Só mostra até visibleCount startups
  const visibleStartups = filteredStartups.slice(0, visibleCount);

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
  }, [visibleStartups]);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Mostrar mais startups
  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Ao trocar categoria, resetar visibleCount para 6
  const onCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleCount(6);
  };

  return (

    

    <section
      id="startups"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
       {/* botão em algum lugar do topo ou CTA */}
        {/*<Link to="/historico">
          <Button variant="outline" className="ml-3">Histórico de Programas</Button>
        </Link>*/}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Startups Incubadas
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as startups que estão transformando o Sertão Central
            brasileiro
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {visibleStartups.map((startup, index) => (
            <Card
              key={startup.id}
              className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[320px] p-6 
                 bg-gradient-to-b from-background to-muted/40 
                 border border-border/30 rounded-2xl shadow-soft 
                 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-20 h-20 mb-3">
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    className="w-full h-full object-contain rounded-xl shadow-md border border-border/40 bg-white"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {startup.name}
                </h3>
                <Badge
                  variant="outline"
                  className={`text-xs px-2 py-1 ${getStageColor(
                    startup.stage
                  )}`}
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
                  maxHeight: expandedCards[index] ? "1000px" : "96px",
                }}
              >
                {startup.description}
              </p>

              {overflowCards[index] && (
                <Button
                  variant="link"
                  size="sm"
                  className="mb-4 p-0 h-auto text-primary"
                  onClick={() => setSelectedStartup(startup)}
                >
                  Ler mais
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

        {/* Botão Mostrar Mais */}
        {visibleCount < filteredStartups.length && (
          <div className="text-center mt-8">
            <Button
              onClick={showMore}
              variant="outline"
              className="transform hover:scale-105 hover:shadow-md transition-all duration-300 ease-out"
            >
              Mostrar mais
            </Button>
          </div>
        )}

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

      {selectedStartup && (
        <div
          key={selectedStartup.id}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4
              transition-opacity duration-300 
              ${selectedStartup ? "opacity-100" : "opacity-0"}`}
        >
          <Card
            className={`w-full max-w-xl p-6 relative transform transition-all duration-300 ease-out
              ${
                selectedStartup ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setSelectedStartup(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Conteúdo da startup */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-24 h-24 mb-3">
                <img
                  src={selectedStartup.logo}
                  alt={selectedStartup.name}
                  className="w-full h-full object-contain rounded-xl shadow-md border border-border/40 bg-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {selectedStartup.name}
              </h3>
              <Badge
                variant="outline"
                className={`text-xs px-2 py-1 ${getStageColor(
                  selectedStartup.stage
                )}`}
              >
                {selectedStartup.stage}
              </Badge>
            </div>

            <p className="text-muted-foreground mb-4">
              {selectedStartup.description}
            </p>

            <div className="flex justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={selectedStartup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" /> Visitar site
                </a>
              </Button>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
};

export default StartupsSection;
