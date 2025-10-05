// src/pages/servicios/LacadoPuertas.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Zap, Crown, Star, Clock, Shield } from "lucide-react";

const LacadoPuertas = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lacado de puertas y carpintería en Valencia",
    "description": "Renovamos puertas, ventanas y elementos de madera con lacados de alta calidad y acabados duraderos en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/lacado-puertas-carpinteria",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 80,
        "priceCurrency": "EUR",
        "unitCode": "C62" // unidad
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
        "name": "Lacado de puertas",
        "item": "https://pintores-valencia.com/lacado-puertas-carpinteria"
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Lacado de puertas", path: "/lacado-puertas-carpinteria" }
  ];

  return (
    <>
      <SEOHead
        title="Lacado de Puertas y Carpintería Valencia - Sin Quitar Puertas"
        description="Renovamos puertas, ventanas y elementos de madera con lacados de alta calidad y acabados duraderos. Sin quitar puertas, lacas premium."
        keywords="lacado puertas valencia, lacado carpintería, renovar puertas, lacas premium valencia, carpintería valencia"
        canonicalUrl="https://pintores-valencia.com/lacado-puertas-carpinteria"
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
                  Sin quitar puertas
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  Lacas premium
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lacado de Puertas y Carpintería
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Renovamos puertas, ventanas y elementos de madera con lacados de alta calidad y acabados duraderos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="/presupuesto">
                    Presupuesto gratuito
                  </a>
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
                  <Zap className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Sin quitar puertas</span>
                </div>
                <div className="flex flex-col items-center">
                  <Crown className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Lacas premium</span>
                </div>
                <div className="flex flex-col items-center">
                  <Star className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Acabado perfecto</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Lacado profesional de puertas en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Lacado premium</p>
                <p className="text-xs text-muted-foreground">Puertas en Eixample</p>
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
                <h3 className="font-semibold mb-2">Preparación exhaustiva</h3>
                <p className="text-sm text-muted-foreground">Lijado, limpieza y preparación de la superficie sin dañar herrajes ni marcos.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Lacas de alta gama</h3>
                <p className="text-sm text-muted-foreground">Utilizamos lacas premium con acabados satinados, mate o brillo según preferencia.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Acabado profesional</h3>
                <p className="text-sm text-muted-foreground">Resultado impecable con textura lisa y uniforme, como recién estrenado.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Precios lacado puertas</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Elemento</th>
                  <th className="text-left p-4 font-semibold">Precio/unidad</th>
                  <th className="text-left p-4 font-semibold">Incluye</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Puertas de paso</td>
                  <td className="p-4 font-bold text-primary">desde 80€</td>
                  <td className="p-4 text-sm">Preparación + laca premium + barnizado</td>
                </tr>
                <tr className="border-t bg-accent/5">
                  <td className="p-4">Puertas de armario</td>
                  <td className="p-4 font-bold text-primary">desde 60€</td>
                  <td className="p-4 text-sm">Lacado completo ambas caras</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Marcos y molduras</td>
                  <td className="p-4 font-bold text-primary">desde 25€</td>
                  <td className="p-4 text-sm">Por metro lineal, preparación incluida</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Ventanas de madera</td>
                  <td className="p-4 font-bold text-primary">desde 120€</td>
                  <td className="p-4 text-sm">Lacado interior + exterior con protección UV</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            *Precios orientativos. Incluye lacas premium y acabados de alta calidad.
          </p>
        </section>

        {/* Proceso de trabajo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "1", titulo: "Desmontaje", desc: "Retiramos herrajes y elementos sin dañar" },
              { num: "2", titulo: "Preparación", desc: "Lijado y limpieza exhaustiva de la madera" },
              { num: "3", titulo: "Imprimación", desc: "Aplicamos base de adherencia específica" },
              { num: "4", titulo: "Lacado", desc: "2-3 capas de laca premium con pistola" },
              { num: "5", titulo: "Montaje", desc: "Colocamos herrajes y ajustamos puertas" }
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

        {/* Tipos de lacado */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de acabados disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">MATE</span>
                </div>
                <h3 className="font-semibold mb-2">Lacado mate</h3>
                <p className="text-sm text-muted-foreground">Acabado suave sin brillo, muy elegante y moderno</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-white border border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-medium text-gray-600">SATÍN</span>
                </div>
                <h3 className="font-semibold mb-2">Lacado satinado</h3>
                <p className="text-sm text-muted-foreground">Brillo suave, fácil limpieza y gran durabilidad</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                  <span className="text-xs font-medium text-gray-600">BRILLO</span>
                </div>
                <h3 className="font-semibold mb-2">Lacado brillo</h3>
                <p className="text-sm text-muted-foreground">Máximo brillo y resistencia, fácil mantenimiento</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ventajas del lacado */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Ventajas del lacado profesional</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Renovación completa</h3>
                      <p className="text-sm text-muted-foreground">Como tener puertas nuevas a fracción del coste</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Sin obras ni molestias</h3>
                      <p className="text-sm text-muted-foreground">Trabajamos sin ensuciar ni generar polvo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Durabilidad extrema</h3>
                      <p className="text-sm text-muted-foreground">Las lacas premium duran décadas sin deterioro</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Fácil mantenimiento</h3>
                      <p className="text-sm text-muted-foreground">Se limpian con un paño húmedo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Cualquier color</h3>
                      <p className="text-sm text-muted-foreground">Carta RAL completa y colores personalizados</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Revaloriza la vivienda</h3>
                      <p className="text-sm text-muted-foreground">Mejora significativa del aspecto general</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Tenéis que quitar las puertas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No siempre. Para un acabado perfecto preferimos trabajar en taller, pero podemos lacar in situ 
                  si no es posible desmontarlas. El resultado es excelente en ambos casos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto tiempo tarda el proceso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Depende del número de puertas, pero generalmente 3-5 días para un piso completo. 
                  Cada puerta necesita 24-48 horas de secado entre capas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Se puede lacar cualquier tipo de madera?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, lacamos madera maciza, DM, contrachapado y otros materiales. 
                  Cada superficie requiere una preparación específica para garantizar la adherencia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Incluís la garantía?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ofrecemos 3 años de garantía en el lacado contra defectos de aplicación. 
                  Las lacas premium que utilizamos mantienen su aspecto durante décadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Quieres renovar tus puertas como nuevas?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Transforma tu hogar con nuestro lacado profesional. Presupuesto detallado gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="/presupuesto">Solicitar presupuesto</a>
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

export default LacadoPuertas;
