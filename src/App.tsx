import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCallButton from "@/components/MobileCallButton";
import SkipLink from "@/components/SkipLink";

import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Precios from "./pages/Precios";
import Trabajos from "./pages/Trabajos";
import Presupuesto from "./pages/Presupuesto";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";
import QuitarGotele from "./pages/servicios/QuitarGotele";
import PinturaInterior from "./pages/servicios/PinturaInterior";
import PinturaExterior from "./pages/servicios/PinturaExterior";
import Impermeabilizacion from "./pages/servicios/Impermeabilizacion";
import LocalesComerciales from "./pages/servicios/LocalesComerciales";
import PinturaComunidades from "./pages/servicios/PinturaComunidades";
import LacadoPuertas from "./pages/servicios/LacadoPuertas";
import PapelPintado from "./pages/servicios/PapelPintado";

// Categorías del blog
import GoteleCategory from "./pages/blog/GoteleCategory";
import ImpermeabilizacionCategory from "./pages/blog/ImpermeabilizacionCategory";
import ColoresInteriorCategory from "./pages/blog/ColoresInteriorCategory";
import FachadasExteriorCategory from "./pages/blog/FachadasExteriorCategory";
import BarnicesMaderaCategory from "./pages/blog/BarnicesMaderaCategory";

import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Enfoca el <main id="main-content"> al cambiar de ruta (a11y)
function RouteChangeFocus() {
  const location = useLocation();
  useEffect(() => {
    const el = document.getElementById("main-content");
    if (el) el.focus();
  }, [location.pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeFocus />
          <div className="min-h-screen flex flex-col">
            {/* Enlace de salto (usa href="#main") */}
            <SkipLink />

            <Header />

            <main id="main-content" tabIndex={-1} className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                
                {/* Categorías del blog */}
                <Route path="/blog/gotele" element={<GoteleCategory />} />
                <Route path="/blog/impermeabilizacion" element={<ImpermeabilizacionCategory />} />
                <Route path="/blog/colores-interior" element={<ColoresInteriorCategory />} />
                <Route path="/blog/fachadas-exterior" element={<FachadasExteriorCategory />} />
                <Route path="/blog/barnices-madera" element={<BarnicesMaderaCategory />} />
                
                <Route path="/precios" element={<Precios />} />
                <Route path="/trabajos" element={<Trabajos />} />
                <Route path="/presupuesto" element={<Presupuesto />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/quitar-gotele-alisar-paredes" element={<QuitarGotele />} />
                <Route path="/pintura-interior-pisos-casas" element={<PinturaInterior />} />
                <Route path="/pintura-exterior-fachadas" element={<PinturaExterior />} />
                <Route path="/impermeabilizacion-terrazas-y-fachadas" element={<Impermeabilizacion />} />
                <Route path="/pintura-locales-comerciales" element={<LocalesComerciales />} />
                <Route path="/pintura-comunidades" element={<PinturaComunidades />} />
                <Route path="/lacado-puertas-carpinteria" element={<LacadoPuertas />} />
                <Route path="/papel-pintado-vinilos" element={<PapelPintado />} />
                <Route path="/aviso-legal" element={<AvisoLegal />} />
                <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />

            {/* flotantes; no afectan el landmark principal */}
            <WhatsAppFloat />
            <MobileCallButton />
          </div>

          {/* métricas (no pinta UI visible) */}
          {import.meta.env.PROD && <SpeedInsights />}
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
