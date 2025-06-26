
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stories from "./pages/Stories";
import Arts from "./pages/Arts";
import Games from "./pages/Games";
import VirtualReality from "./pages/VirtualReality";
import JammuKashmir from "./pages/JammuKashmir";
import Delhi from "./pages/Delhi";
import Chandigarh from "./pages/Chandigarh";
import Puducherry from "./pages/Puducherry";
import AndamanNicobar from "./pages/AndamanNicobar";
import Lakshadweep from "./pages/Lakshadweep";
import DadraNavgarHaveliDamanDiu from "./pages/DadraNavgarHaveliDamanDiu";
import Ladakh from "./pages/Ladakh";
import OfficialLanguages from "./pages/OfficialLanguages";
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
          <Route path="/stories" element={<Stories />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/games" element={<Games />} />
          <Route path="/vr" element={<VirtualReality />} />
          <Route path="/official-languages" element={<OfficialLanguages />} />
          <Route path="/jammu-kashmir" element={<JammuKashmir />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/chandigarh" element={<Chandigarh />} />
          <Route path="/puducherry" element={<Puducherry />} />
          <Route path="/andaman-and-nicobar-islands" element={<AndamanNicobar />} />
          <Route path="/lakshadweep" element={<Lakshadweep />} />
          <Route path="/dadra-and-nagar-haveli-and-daman-and-diu" element={<DadraNavgarHaveliDamanDiu />} />
          <Route path="/ladakh" element={<Ladakh />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
