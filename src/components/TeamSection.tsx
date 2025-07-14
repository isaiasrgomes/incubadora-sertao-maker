import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

import anaPaulaImage from "@/assets/team/ana-paula.jpg";
import carlosEduardoImage from "@/assets/team/carlos-eduardo.jpg";
import mariaFernandaImage from "@/assets/team/maria-fernanda.jpg";
import joaoPedroImage from "@/assets/team/joao-pedro.jpg";
import luciaMendesImage from "@/assets/team/lucia-mendes.jpg";
import rafaelCostaImage from "@/assets/team/rafael-costa.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Ana Paula Santos",
      role: "Coordenadora Geral",
      bio: "Especialista em empreendedorismo e inovação com 15 anos de experiência no ecossistema de startups.",
      image: anaPaulaImage,
      linkedin: "#",
      email: "ana@sertaomaker.com"
    },
    {
      name: "Carlos Eduardo Silva",
      role: "Diretor de Programas",
      bio: "PhD em Administração com foco em desenvolvimento regional e sustentabilidade empresarial.",
      image: carlosEduardoImage,
      linkedin: "#",
      email: "carlos@sertaomaker.com"
    },
    {
      name: "Maria Fernanda Lima",
      role: "Mentora de Tecnologia",
      bio: "CTO com 12 anos de experiência em desenvolvimento de produtos digitais e transformação digital.",
      image: mariaFernandaImage,
      linkedin: "#",
      email: "maria@sertaomaker.com"
    },
    {
      name: "João Pedro Oliveira",
      role: "Mentor de Negócios",
      bio: "Empreendedor serial e investidor anjo, especialista em modelos de negócio e captação de recursos.",
      image: joaoPedroImage,
      linkedin: "#",
      email: "joao@sertaomaker.com"
    },
    {
      name: "Lucia Mendes",
      role: "Coordenadora de Impacto",
      bio: "Especialista em impacto social e sustentabilidade, com experiência em ONGs e negócios sociais.",
      image: luciaMendesImage,
      linkedin: "#",
      email: "lucia@sertaomaker.com"
    },
    {
      name: "Rafael Costa",
      role: "Analista de Projetos",
      bio: "Engenheiro de produção especializado em gestão de projetos e metodologias ágeis.",
      image: rafaelCostaImage,
      linkedin: "#",
      email: "rafael@sertaomaker.com"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais experientes dedicados ao sucesso das startups do Sertão Central
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300 group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              
              <div className="text-primary font-medium mb-4">
                {member.role}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="icon" className="group-hover:border-primary group-hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="group-hover:border-primary group-hover:text-primary">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quer fazer parte da nossa equipe?
            </h3>
            <p className="text-muted-foreground mb-6">
              Estamos sempre em busca de mentores e especialistas apaixonados por inovação
            </p>
            <Button variant="cta">
              Tornar-se Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;