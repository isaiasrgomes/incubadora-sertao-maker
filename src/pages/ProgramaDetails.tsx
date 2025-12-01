import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProgramaById } from "@/data/programa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ProgramaDetalhesPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const programa = getProgramaById(id || "");
  const [startupSelecionada, setStartupSelecionada] = useState(null);

  if (!programa) {
    return <div className="p-10 text-center text-xl">Programa não encontrado.</div>;
  }

  const abrirModal = (startup) => setStartupSelecionada(startup);
  const fecharModal = () => setStartupSelecionada(null);

  return (
    <div className="min-h-screen py-5 container mx-auto px-6">

      {/* Botão Voltar */}
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </Button>

      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">{programa.nome}</h1>

        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          {programa.descricao}
        </p>

        <Badge
          variant="outline"
          className="mt-4 bg-primary/10 text-primary border-primary/20 px-3 py-1 rounded-full"
        >
          {programa.ano}
        </Badge>
      </div>

      {/* GRID */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {programa.startups.map((startup, index) => (
          <Card
            key={index}
            className="w-[90%] sm:w-[80%] max-w-[320px] p-6 rounded-2xl 
            bg-white/70 dark:bg-black/30 backdrop-blur-sm
            border border-border/30 shadow-md hover:-translate-y-1 hover:shadow-lg
            transition-all"
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center mb-3">

                {/* Logo */}
                <div className="w-20 h-20 mb-3 bg-white rounded-xl shadow-sm border border-border/40 overflow-hidden">
                  <img
                    src={startup.logo}
                    alt={startup.nome}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}
                  />
                </div>

                <h2 className="text-xl font-semibold text-foreground">{startup.nome}</h2>
              </div>

              <div className="text-center mt-4">
                <Button
                  className="w-full font-medium rounded-xl"
                  onClick={() => abrirModal(startup)}
                >
                  Ver Descrição
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      <Dialog open={!!startupSelecionada} onOpenChange={fecharModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{startupSelecionada?.nome}</DialogTitle>
          </DialogHeader>

          <p className="text-muted-foreground text-sm leading-relaxed mt-2">
            {startupSelecionada?.descricao}
          </p>

          <div className="mt-4 flex justify-end">
            <Button onClick={fecharModal} variant="outline">
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
