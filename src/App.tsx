import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// importe o novo componente
import ProgramHistory from "../src/components/ProgramHistory"
import ProgramaDetails from "./pages/ProgramaDetails";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<Index />} />
          <Route path={`${import.meta.env.BASE_URL}programa/:id`} element={<ProgramaDetails />} />

          {/* Rota do histórico*/}
          <Route path="/historico" element={<ProgramHistory />} />
           

          <Route path="/programa/:id" element={<ProgramaDetails />} />


          {/* rotas personalizadas devem ficar acima desta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
