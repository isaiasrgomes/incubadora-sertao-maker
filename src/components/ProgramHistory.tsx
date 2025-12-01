import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programa } from "@/data/programa";
import { Link } from "react-router-dom";

export default function ProgramHistory() {
  return (
    <section id="historico" className="py-20 bg-gradient-to-b from-background to-muted/20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Histórico de Programas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todas as edições, startups participantes e um resumo de cada ciclo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {programa.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className="p-8 rounded-2xl shadow-soft border border-border/20
                bg-gradient-to-b from-background/80 to-muted/40
                hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4 h-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {p.nome}
                    </h2>
                    <Badge
                      variant="outline"
                      className="mt-2 px-3 py-1 text-sm bg-primary/10 text-primary"
                    >
                      {p.ano}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    {p.descricao}
                  </p>

                  <div className="mt-4">
                    <Link to={`/programa/${p.id}`}>
                      <Button
                        variant="default"
                        size="sm"
                        className="rounded-xl px-5 py-2 hover:shadow-md"
                      >
                        Ver Startups
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
