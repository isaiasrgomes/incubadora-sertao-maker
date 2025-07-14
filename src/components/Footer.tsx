import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Programas", href: "#programas" },
    { label: "Startups", href: "#startups" },
    { label: "Equipe", href: "#equipe" },
  ];

  const programs = [
    { label: "Pré-incubação", href: "#programas" },
    { label: "Incubação", href: "#programas" },
    { label: "Mentorias", href: "#programas" },
    { label: "Aceleração", href: "#programas" },
  ];

  const resources = [
    { label: "Blog", href: "#" },
    { label: "Recursos", href: "#" },
    { label: "Eventos", href: "#noticias" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sertão Maker</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transformando ideias do Sertão Central em soluções para o mundo através 
              de inovação, empreendedorismo e impacto social.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programas</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.label}>
                  <a 
                    href={program.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">
                  Petrolina, PE - Brasil
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">
                  contato@sertaomaker.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">
                  (87) 9999-0000
                </span>
              </div>
            </div>
            <Button variant="hero" size="sm" className="mt-4">
              Entre em Contato
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Incubadora Sertão Maker. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;