import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Filter } from "lucide-react";
import interiorImage from "@/assets/pintura-interior-valencia.jpg";
import fachadaImage from "@/assets/fachada-exterior-valencia.jpg";

const Trabajos = () => {
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const trabajos = [
    {
      id: 1,
      titulo: "Renovación completa piso en Russafa",
      tipo: "interior",
      zona: "Russafa, Valencia",
      descripcion: "Alisado de paredes, eliminación de gotelé y pintura completa de 90m²",
      imagen: interiorImage,
      año: "2024"
    },
    {
      id: 2,
      titulo: "Fachada edificio residencial",
      tipo: "fachada",
      zona: "Benimaclet, Valencia", 
      descripcion: "Pintura elastomérica en fachada de 8 plantas con andamiaje completo",
      imagen: fachadaImage,
      año: "2024"
    },
    {
      id: 3,
      titulo: "Local comercial en Centro",
      tipo: "comercial",
      zona: "Centro, Valencia",
      descripcion: "Pintura interior y exterior de local comercial 200m²",
      imagen: interiorImage,
      año: "2024"
    },
    {
      id: 4,
      titulo: "Comunidad de propietarios Paterna",
      tipo: "comunidad",
      zona: "Paterna, Valencia",
      descripcion: "Pintura completa de zonas comunes y fachada",
      imagen: fachadaImage,
      año: "2023"
    },
    {
      id: 5,
      titulo: "Casa unifamiliar Torrent",
      tipo: "interior",
      zona: "Torrent, Valencia",
      descripcion: "Pintura interior completa y lacado de puertas",
      imagen: interiorImage,
      año: "2023"
    },
    {
      id: 6,
      titulo: "Oficinas Mislata",
      tipo: "comercial",
      zona: "Mislata, Valencia",
      descripcion: "Renovación completa de oficinas 150m²",
      imagen: interiorImage,
      año: "2023"
    }
  ];

  const filtros = [
    { id: "todos", label: "Todos los trabajos", count: trabajos.length },
    { id: "interior", label: "Pintura interior", count: trabajos.filter(t => t.tipo === "interior").length },
    { id: "fachada", label: "Fachadas", count: trabajos.filter(t => t.tipo === "fachada").length },
    { id: "comercial", label: "Locales comerciales", count: trabajos.filter(t => t.tipo === "comercial").length },
    { id: "comunidad", label: "Comunidades", count: trabajos.filter(t => t.tipo === "comunidad").length }
  ];

  const trabajosFiltrados = filtroActivo === "todos" 
    ? trabajos 
    : trabajos.filter(trabajo => trabajo.tipo === filtroActivo);

  return (
    <>
      <SEOHead
        title="Trabajos realizados - Galería de Pintores en Valencia"
        description="Descubre nuestros trabajos de pintura en Valencia: interiores, fachadas, locales comerciales y comunidades. Galería de proyectos realizados."
        keywords="trabajos pintura valencia, galeria pintores, proyectos realizados, antes y despues pintura"
        canonicalUrl="https://pintores-valencia.com/trabajos"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Trabajos realizados" }]} />
        
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros trabajos realizados
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre algunos de los proyectos de pintura que hemos realizado en Valencia. 
              Cada trabajo refleja nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filtrar por tipo:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filtros.map((filtro) => (
                <Button
                  key={filtro.id}
                  variant={filtroActivo === filtro.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFiltroActivo(filtro.id)}
                  className={filtroActivo === filtro.id ? "bg-gradient-cta shadow-cta" : ""}
                >
                  {filtro.label} ({filtro.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Grid de trabajos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trabajosFiltrados.map((trabajo) => (
              <Card key={trabajo.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={trabajo.imagen} 
                    alt={trabajo.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {trabajo.año}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-cta">
                      {trabajo.tipo === "interior" && "Interior"}
                      {trabajo.tipo === "fachada" && "Fachada"}
                      {trabajo.tipo === "comercial" && "Comercial"}
                      {trabajo.tipo === "comunidad" && "Comunidad"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trabajo.titulo}</h3>
                  <p className="text-muted-foreground mb-3">{trabajo.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{trabajo.zona}</span>
                    <Button variant="outline" size="sm">Ver detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mensaje si no hay trabajos */}
          {trabajosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay trabajos de este tipo disponibles.</p>
            </div>
          )}

          {/* Estadísticas */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-primary-foreground/90">Trabajos realizados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-primary-foreground/90">Años de experiencia</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-primary-foreground/90">Clientes satisfechos</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <p className="text-primary-foreground/90">Zonas de Valencia</p>
              </div>
            </div>
          </div>

          {/* Testimonios de trabajos */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <h4 className="font-semibold">Trabajo excepcional en Russafa</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Eliminaron el gotelé de toda la casa y la dejaron impecable. Muy profesionales, 
                    limpios y puntuales. El resultado superó nuestras expectativas."
                  </p>
                  <div className="text-sm">
                    <p className="font-medium">Carmen M.</p>
                    <p className="text-muted-foreground">Russafa, Valencia</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <h4 className="font-semibold">Fachada perfecta en Benimaclet</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Pintaron la fachada de nuestro edificio con pintura elastomérica. 
                    Trabajo impecable, cumplieron plazos y precio ajustado. Muy recomendables."
                  </p>
                  <div className="text-sm">
                    <p className="font-medium">José L.</p>
                    <p className="text-muted-foreground">Benimaclet, Valencia</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Tu proyecto será el siguiente?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Solicita tu presupuesto gratuito y únete a nuestros clientes satisfechos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-cta shadow-cta">
                <a href="/presupuesto">Solicitar presupuesto</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/contacto">Ver más trabajos</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trabajos;