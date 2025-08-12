import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Users, Megaphone, Filter } from "lucide-react";
import { useState } from "react";

import partnershipSebraeImage from "@/assets/news/partnership-sebrae.jpg";
import demoDayImage from "@/assets/news/demo-day.jpg";
import preIncubacaoImage from "@/assets/news/pre-incubacao.jpg";
import workshopInovacaoImage from "@/assets/news/workshop-inovacao.jpg";
import agtechStartupImage from "@/assets/news/agtech-startup.jpg";
import edtechPlatformImage from "@/assets/news/edtech-platform.jpg";

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const news = [
    {
      type: "noticia",
      title: "Sertão Maker anuncia parceria com Sebrae para expansão de programas",
      excerpt: "Nova parceria visa ampliar o alcance dos programas de incubação para mais 50 municípios do Sertão Central.",
      date: "15 Jan 2024",
      readTime: "3 min",
      category: "Parcerias",
      image: partnershipSebraeImage
    },
    {
      type: "evento",
      title: "Demo Day 2024 - Apresentação das Startups Incubadas",
      excerpt: "Evento presencial onde as startups apresentam seus projetos para investidores e parceiros.",
      date: "25 Mar 2024",
      readTime: "3 horas",
      category: "Eventos",
      image: demoDayImage
    },
    {
      type: "processo",
      title: "Edital Aberto: Pré-incubação 2024.1",
      excerpt: "Inscrições abertas para o programa de pré-incubação. Prazo final: 20 de fevereiro.",
      date: "Até 20 Fev",
      readTime: "Candidatura",
      category: "Editais",
      image: preIncubacaoImage
    },
    {
      type: "evento",
      title: "Workshop de Inovação no Sertão Central",
      excerpt: "Capacitação gratuita em metodologias de inovação e design thinking para empreendedores locais.",
      date: "10 Fev 2024",
      readTime: "6 horas",
      category: "Capacitação",
      image: workshopInovacaoImage
    },
    {
      type: "noticia",
      title: "Startup de AgTech recebe investimento de R$ 500 mil",
      excerpt: "Empresa incubada desenvolve solução para otimização do uso da água na agricultura do sertão.",
      date: "28 Jan 2024",
      readTime: "4 min",
      category: "Investimentos",
      image: agtechStartupImage
    },
    {
      type: "noticia",
      title: "Plataforma de EdTech conecta estudantes rurais",
      excerpt: "Solução desenvolvida por startup incubada já atende mais de 2.000 estudantes da região.",
      date: "05 Fev 2024",
      readTime: "5 min",
      category: "Tecnologia",
      image: edtechPlatformImage
    }
  ];

  const categories = ["todas", "Parcerias", "Eventos", "Editais", "Capacitação", "Investimentos", "Tecnologia"];

  const filteredNews = selectedCategory === "todas" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "noticia": return <Megaphone className="w-5 h-5" />;
      case "evento": return <Users className="w-5 h-5" />;
      case "processo": return <Calendar className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "noticia": return "bg-sertao-green/20 text-sertao-green border-sertao-green/30";
      case "evento": return "bg-sertao-blue/20 text-sertao-blue border-sertao-blue/30";
      case "processo": return "bg-sertao-earth/20 text-sertao-earth border-sertao-earth/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "noticia": return "Notícia";
      case "evento": return "Evento";
      case "processo": return "Edital";
      default: return type;
    }
  };

  return (
    <section id="noticias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Notícias, Eventos e Editais
          </h2>
          <p className="text-lg text-muted-foreground">
            Fique por dentro das últimas novidades e oportunidades da Incubadora Sertão Maker
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Filter className="w-4 h-4" />
            <span>Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-background border-border/50 hover:shadow-soft transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className={`${getTypeColor(item.type)} flex items-center gap-1`}
                >
                  {getTypeIcon(item.type)}
                  {getTypeLabel(item.type)}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                {item.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
              >
                {item.type === "processo" ? "Ver Edital" : "Ler Mais"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-card border-border/50 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Não perca nenhuma novidade
            </h3>
            <p className="text-muted-foreground mb-6">
              Inscreva-se em nossa newsletter e receba em primeira mão informações sobre 
              editais, eventos e oportunidades de negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta">
                Inscrever-se
                </Button>
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;