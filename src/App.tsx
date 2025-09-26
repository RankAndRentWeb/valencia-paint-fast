// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCallButton from "@/components/MobileCallButton";
import SkipLink from "@/components/SkipLink";

import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Zonas from "./pages/Zonas";
import Precios from "./pages/Precios";
import Trabajos from "./pages/Trabajos";
import Presupuesto from "./pages/Presupuesto";
import Contacto from "./pages/Contacto";
import QuitarGotele from "./pages/servicios/QuitarGotele";
import PinturaInterior from "./pages/servicios/PinturaInterior";
import PinturaExterior from "./pages/servicios/PinturaExterior";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            {/* Enlace de salto para accesibilidad (aparece al usar TAB) */}
            <SkipLink />

            <Header />

            {/* Contenido principal accesible */}
            <main id="main-content" tabIndex={-1} className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/zonas" element={<Zonas />} />
                <Route path="/precios" element={<Precios />} />
                <Route path="/trabajos" element={<Trabajos />} />
                <Route path="/presupuesto" element={<Presupuesto />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/quitar-gotele-alisar-paredes" element={<QuitarGotele />} />
                <Route path="/pintura-interior-pisos-casas" element={<PinturaInterior />} />
                <Route path="/pintura-exterior-fachadas" element={<PinturaExterior />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />

            {/* flotantes; no afectan el landmark principal */}
            <WhatsAppFloat />
            <MobileCallButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
