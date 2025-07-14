import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Users, Megaphone } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      type: "noticia",
      title: "Sertão Maker anuncia parceria com Sebrae para expansão de programas",
      excerpt: "Nova parceria visa ampliar o alcance dos programas de incubação para mais 50 municípios do semiárido.",
      date: "15 Jan 2024",
      readTime: "3 min",
      category: "Parcerias"
    },
    {
      type: "evento",
      title: "Demo Day 2024 - Apresentação das Startups Incubadas",
      excerpt: "Evento presencial onde as startups apresentam seus projetos para investidores e parceiros.",
      date: "25 Mar 2024",
      readTime: "3 horas",
      category: "Eventos"
    },
    {
      type: "processo",
      title: "Edital Aberto: Pré-incubação 2024.1",
      excerpt: "Inscrições abertas para o programa de pré-incubação. Prazo final: 20 de fevereiro.",
      date: "Até 20 Fev",
      readTime: "Candidatura",
      category: "Editais"
    }
  ];

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
      case "evento": return "bg-sertao-orange/20 text-sertao-orange border-sertao-orange/30";
      case "processo": return "bg-sertao-yellow/20 text-sertao-yellow border-sertao-yellow/30";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="p-6 bg-background border-border/50 hover:shadow-soft transition-all duration-300 group">
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