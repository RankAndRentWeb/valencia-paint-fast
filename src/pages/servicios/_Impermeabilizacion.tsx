// src/pages/servicios/Impermeabilizacion.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Shield, Droplets, Clock, Award } from "lucide-react";

const Impermeabilizacion = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Impermeabilización en Valencia",
    "description": "Servicio profesional de impermeabilización de terrazas, balcones y fachadas en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/impermeabilizacion-terrazas-y-fachadas",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 25,
        "priceCurrency": "EUR",
        "unitCode": "MTK" // m²
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Servicios",
        "item": "https://pintores-valencia.com/servicios"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Impermeabilización",
        "item": "https://pintores-valencia.com/impermeabilizacion-terrazas-y-fachadas"
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Impermeabilización", path: "/impermeabilizacion-terrazas-y-fachadas" }
  ];

  return (
    <>
      <SEOHead
        title="Impermeabilización Valencia - Terrazas, Balcones y Fachadas"
        description="Protegemos terrazas, balcones y fachadas contra filtraciones de agua con sistemas de impermeabilización avanzados. Garantía 10 años, sin obras."
        keywords="impermeabilización valencia, impermeabilizar terraza, balcones valencia, fachadas impermeabilización, filtraciones agua"
        canonicalUrl="https://pintores-valencia.com/impermeabilizacion-terrazas-y-fachadas"
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  Garantía 10 años
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Sin obras
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Impermeabilización en Valencia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Protegemos terrazas, balcones y fachadas contra filtraciones de agua con sistemas de impermeabilización avanzados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/presupuesto">
                    Presupuesto gratuito
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:722208131" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    722 208 131
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Garantía 10 años</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Sin obras</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Secado rápido</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Impermeabilización profesional en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Sistema avanzado</p>
                <p className="text-xs text-muted-foreground">Terraza en Ciutat Vella</p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios incluidos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué incluye nuestro servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Inspección detallada</h3>
                <p className="text-sm text-muted-foreground">Evaluamos el estado de la superficie y detectamos puntos críticos de filtración.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Sistemas avanzados</h3>
                <p className="text-sm text-muted-foreground">Utilizamos membranas líquidas y productos poliuretano de última generación.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Garantía extendida</h3>
                <p className="text-sm text-muted-foreground">Ofrecemos garantía de 10 años por escrito en todos nuestros trabajos.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Precios impermeabilización</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Superficie</th>
                  <th className="text-left p-4 font-semibold">Precio/m²</th>
                  <th className="text-left p-4 font-semibold">Incluye</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Terrazas transitables</td>
                  <td className="p-4 font-bold text-primary">desde 25€</td>
                  <td className="p-4 text-sm">Membrana líquida + protección UV</td>
                </tr>
                <tr className="border-t bg-accent/5">
                  <td className="p-4">Balcones y voladizos</td>
                  <td className="p-4 font-bold text-primary">desde 30€</td>
                  <td className="p-4 text-sm">Sistema completo + sellado juntas</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Fachadas</td>
                  <td className="p-4 font-bold text-primary">desde 20€</td>
                  <td className="p-4 text-sm">Revestimiento hidrófugo transpirable</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Cubiertas no transitables</td>
                  <td className="p-4 font-bold text-primary">desde 22€</td>
                  <td className="p-4 text-sm">Membrana completa + drenaje</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            *Precios orientativos. Incluye materiales de primera calidad y garantía de 10 años.
          </p>
        </section>

        {/* Proceso de trabajo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "1", titulo: "Inspección", desc: "Evaluamos filtraciones y estado de la superficie" },
              { num: "2", titulo: "Preparación", desc: "Limpieza y reparación de grietas y fisuras" },
              { num: "3", titulo: "Imprimación", desc: "Aplicamos base de adherencia específica" },
              { num: "4", titulo: "Impermeabilización", desc: "Aplicación de membrana en 2-3 capas" },
              { num: "5", titulo: "Acabado", desc: "Protección UV y pruebas de estanqueidad" }
            ].map((paso, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {paso.num}
                  </div>
                  <h3 className="font-semibold mb-2">{paso.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{paso.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto dura la garantía?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ofrecemos 10 años de garantía por escrito en todos nuestros trabajos de impermeabilización, 
                  cubriendo tanto materiales como mano de obra.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Es necesario hacer obras?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No. Nuestros sistemas de impermeabilización líquida no requieren obras ni romper el pavimento existente. 
                  Se aplican directamente sobre la superficie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto tiempo tarda en secar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Depende del sistema usado, pero generalmente entre 4-8 horas al tacto y 24-48 horas para el secado completo. 
                  Las condiciones climáticas pueden afectar estos tiempos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Trabajáis en toda Valencia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, trabajamos en Valencia capital y en toda la provincia. Ofrecemos presupuesto gratuito 
                  y sin compromiso en menos de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes problemas de filtraciones?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            No esperes más. Te damos presupuesto gratuito en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/presupuesto">Solicitar presupuesto</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:722208131" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Impermeabilizacion;
