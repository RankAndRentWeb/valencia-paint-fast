// src/pages/Zonas.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Phone } from "lucide-react";

const Zonas = () => {
  const zonas = [
    { name: "Russafa", link: "/pintores-russafa", description: "Barrio artístico y moderno de Valencia capital", destacado: true },
    { name: "Benimaclet", link: "/pintores-benimaclet", description: "Zona universitaria con gran actividad", destacado: true },
    { name: "Centro Histórico", link: "/pintores-centro-valencia", description: "Casco antiguo de Valencia" },
    { name: "Paterna", link: "/pintores-paterna", description: "Municipio próximo a Valencia capital", destacado: true },
    { name: "Torrent", link: "/pintores-torrent", description: "Una de las ciudades más importantes de la provincia" },
    { name: "Mislata", link: "/pintores-mislata", description: "Municipio muy cercano a Valencia capital" },
    { name: "Burjassot", link: "/pintores-burjassot", description: "Zona norte del área metropolitana" },
    { name: "Sagunto", link: "/pintores-sagunto", description: "Ciudad histórica al norte de Valencia" },
    { name: "Xàtiva", link: "/pintores-xativa", description: "Ciudad del interior de la provincia" },
    { name: "Cullera", link: "/pintores-cullera", description: "Ciudad costera al sur de Valencia" },
    { name: "Alzira", link: "/pintores-alzira", description: "Capital de La Ribera" },
    { name: "Gandia", link: "/pintores-gandia", description: "Importante ciudad costera de La Safor" }
  ];

  return (
    <>
      <SEOHead
        title="Zonas de trabajo - Pintores en Valencia capital y provincia"
        description="Trabajamos en Valencia capital y toda la provincia: Russafa, Benimaclet, Paterna, Torrent, Sagunto, Gandia y más. Presupuesto gratis."
        keywords="pintores valencia capital, pintores russafa, pintores benimaclet, pintores paterna, zonas valencia"
        canonicalUrl="https://pintores-valencia.com/zonas"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Zonas de trabajo" }]} />

        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trabajamos en Valencia capital y provincia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos nuestros servicios de pintura profesional en Valencia capital
              y en los principales municipios de la provincia. Consulta tu zona específica.
            </p>
          </div>

          {/* Mapa placeholder */}
          <div className="mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="bg-gradient-hero text-primary-foreground rounded-lg p-8 text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h2 className="text-2xl font-bold mb-4">Área de cobertura</h2>
                  <p className="text-primary-foreground/90 mb-6">
                    Radio de trabajo: 50 km desde Valencia capital
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>Valencia capital</div>
                    <div>Área metropolitana</div>
                    <div>La Ribera</div>
                    <div>L'Horta</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {zonas.map((zona, index) => (
              <Card
                key={index}
                className={`hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${
                  zona.destacado ? "ring-2 ring-accent ring-opacity-50" : ""
                }`}
              >
                <CardContent className="p-6">
                  {zona.destacado && (
                    <div className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full inline-block mb-3">
                      Zona destacada
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">Pintores en {zona.name}</h3>
                  <p className="text-muted-foreground mb-4">{zona.description}</p>
                  <div className="space-y-2">
                    <Button
                      asChild
                      className="w-full"
                      variant={zona.destacado ? "default" : "outline"}
                    >
                      <a href={zona.link}>Ver información de zona</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Tu zona no aparece en la lista?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Contáctanos y consultaremos si podemos llegar hasta tu ubicación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="tel:722208131" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Consultar zona: 722 208 131</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 transition-colors"
              >
                <a href="/contacto">Contactar</a>
              </Button>
            </div>
          </div>

          {/* Services Available */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Servicios disponibles en todas las zonas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Pintura interior</h4>
                <p className="text-sm text-muted-foreground">Todas las zonas</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Quitar gotelé</h4>
                <p className="text-sm text-muted-foreground">Todas las zonas</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Fachadas</h4>
                <p className="text-sm text-muted-foreground">Todas las zonas</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Impermeabilización</h4>
                <p className="text-sm text-muted-foreground">Todas las zonas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zonas;
