import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SALearnMate from "./pages/SALearnMate";
import NeurovaAI from "./pages/NeurovaAI";
import PocketWise from "./pages/PocketWise";
import SmartPlannerAI from "./pages/SmartPlannerAI";
import NexusAI from "./pages/NexusAI";
import LinkUp from "./pages/LinkUp";
import CosmicMemory from "./pages/CosmicMemory";
import LocalGuideSA from "./pages/LocalGuideSA";
import GlobalAuctions from "./pages/GlobalAuctions";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/sa-learnmate" element={<SALearnMate />} />
          <Route path="/neurova-ai" element={<NeurovaAI />} />
          <Route path="/pocketwise" element={<PocketWise />} />
          <Route path="/smart-planner-ai" element={<SmartPlannerAI />} />
          <Route path="/nexus-ai" element={<NexusAI />} />
          <Route path="/linkup" element={<LinkUp />} />
          <Route path="/cosmic-memory" element={<CosmicMemory />} />
          <Route path="/localguide-sa" element={<LocalGuideSA />} />
          <Route path="/globalauctions" element={<GlobalAuctions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
