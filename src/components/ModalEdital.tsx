import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModalEdital() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Verifica se já foi exibido na sessão
    const alreadyShown = sessionStorage.getItem("modalEditalShown");

    if (!alreadyShown) {
      setOpen(true);
      sessionStorage.setItem("modalEditalShown", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        
        {/* Botão fechar */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setOpen(false)}
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-3">
          📢 Novo Edital em Breve!
        </h2>

        <p className="text-gray-600 text-center leading-relaxed mb-6">
          Um novo edital de incubação será lançado em breve.
          Fique atento às nossas redes sociais e ao site da Incubadora.
        </p>

        <div className="flex justify-center">
          <Button onClick={() => setOpen(false)} className="px-6 py-2 rounded-lg">
            Ok, entendi
          </Button>
        </div>
      </div>
    </div>
  );
}
