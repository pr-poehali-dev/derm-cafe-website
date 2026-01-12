
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CosmeticSurgery from "./pages/CosmeticSurgery";
import SkinCancer from "./pages/SkinCancer";
import BasalCell from "./pages/BasalCell";
import SquamousCell from "./pages/SquamousCell";
import Melanoma from "./pages/Melanoma";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/cosmetic-surgery" element={<CosmeticSurgery />} />
          <Route path="/skin-cancer" element={<SkinCancer />} />
          <Route path="/skin-cancer/basal-cell" element={<BasalCell />} />
          <Route path="/skin-cancer/squamous-cell" element={<SquamousCell />} />
          <Route path="/skin-cancer/melanoma" element={<Melanoma />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;