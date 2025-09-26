// src/pages/PinturaInterior.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Home, Palette, Shield } from "lucide-react";
import interiorImage from "@/assets/pintura-interior-valencia.jpg";

const PinturaInterior = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pintura interior en Valencia",
    "description": "Servicio profesional de pintura interior de pisos y casas en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/pintura-interior-pisos-casas",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 8,
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
        "name": "Pintura interior",
        "item": "https://pintores-valencia.com/pintura-interior-pisos-casas"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Pintura interior en Valencia - Pisos y casas profesional"
        description="Pintura interior profesional en Valencia. Renovamos pisos y casas con pinturas premium, limpieza incluida. Desde 8€/m². Presupuesto gratis."
        keywords="pintura interior valencia, pintar piso valencia, pintura casa interior, pintores interior"
        canonicalUrl="https://pintores-valencia.com/pintura-interior-pisos-casas"
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Servicios", href: "/servicios" },
          { label: "Pintura interior" }
        ]} />
        
        <div className="py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-accent">Servicio premium</Badge>
                <Badge variant="outline">Garantía 3 años</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pintura interior en Valencia
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Renovamos completamente el interior de tu hogar con pinturas de primera calidad. 
                Trabajos profesionales con limpieza incluida y garantía escrita.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-primary">desde 8€/m²</div>
                <div className="text-sm text-muted-foreground">Mano de obra</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-gradient-cta shadow-cta">
                  <Link to="/presupuesto">Pedir presupuesto gratis</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:722208131" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>722 208 131</span>
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Pinturas premium</span>
                </div>
                <div className="flex flex-col items-center">
                  <Home className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Limpieza incluida</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Garantía 3 años</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={interiorImage} 
                alt="Pintura interior profesional en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Trabajo reciente</p>
                <p className="text-xs text-muted-foreground">Apartamento en Benimaclet</p>
              </div>
            </div>
          </div>

          {/* Servicios incluidos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">¿Qué incluye nuestro servicio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Preparación completa</h3>
                  <p className="text-sm text-muted-foreground">Protección de mobiliario, limpieza previa y reparación de pequeñas imperfecciones.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Pinturas de calidad</h3>
                  <p className="text-sm text-muted-foreground">Utilizamos marcas reconocidas como Bruguer, Titan o Montó para resultados duraderos.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Limpieza final</h3>
                  <p className="text-sm text-muted-foreground">Recogemos todos los materiales y dejamos tu hogar impecable y listo para habitar.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Precios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Precios pintura interior</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Concepto</th>
                    <th className="text-left p-4 font-semibold">Precio/m²</th>
                    <th className="text-left p-4 font-semibold">Incluye</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Pintura plástica estándar</td>
                    <td className="p-4 font-bold text-primary">desde 8€</td>
                    <td className="p-4 text-sm">2 manos, limpieza previa</td>
                  </tr>
                  <tr className="border-t bg-accent/5">
                    <td className="p-4">Pintura plástica premium</td>
                    <td className="p-4 font-bold text-primary">desde 10€</td>
                    <td className="p-4 text-sm">2 manos, imprimación, reparaciones menores</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Alisado + pintura</td>
                    <td className="p-4 font-bold text-primary">desde 12€</td>
                    <td className="p-4 text-sm">Alisado imperfecciones, imprimación, 2 manos</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Techos</td>
                    <td className="p-4 font-bold text-primary">desde 6€</td>
                    <td className="p-4 text-sm">Pintura específica para techos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              *Precios orientativos. El presupuesto final incluirá el coste de materiales según la calidad elegida.
            </p>
          </section>

          {/* Proceso de trabajo */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { num: "1", titulo: "Visita técnica", desc: "Evaluamos el estado y tomamos medidas" },
                { num: "2", titulo: "Preparación", desc: "Protegemos mobiliario y reparamos defectos" },
                { num: "3", titulo: "Imprimación", desc: "Aplicamos base para mejor adherencia" },
                { num: "4", titulo: "Pintura", desc: "2 manos de pintura con rodillo y brocha" },
                { num: "5", titulo: "Acabados", desc: "Retoques finales y limpieza completa" }
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

          {/* Tipos de pintura */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tipos de pintura interior que utilizamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pintura plástica</CardTitle>
                  <Badge variant="outline">Más popular</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fácil aplicación</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Buen precio</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Variedad de colores</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Lavable</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">Ideal para salones, dormitorios y pasillos</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pintura antihumedad</CardTitle>
                  <Badge className="bg-accent">Recomendada</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Resistente al vapor</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Previene moho</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fácil limpieza</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Larga duración</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">Perfecta para baños y cocinas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Esmalte sintético</CardTitle>
                  <Badge variant="outline">Premium</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Muy resistente</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Acabado brillante</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fácil lavado</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Muy duradero</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">Ideal para puertas, ventanas y radiadores</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Caso real */}
          <section className="mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Caso real: Renovación en Benimaclet</h2>
                    <p className="text-muted-foreground mb-4">
                      Pintamos completamente un apartamento de 80m² en Benimaclet. Los propietarios querían 
                      modernizar su hogar antes de la llegada de su bebé.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Superficie:</strong> 80m² útiles (240m² de pared)</div>
                      <div><strong>Tiempo:</strong> 3 días</div>
                      <div><strong>Servicios:</strong> Alisado, imprimación y 2 manos</div>
                      <div><strong>Colores:</strong> Blanco roto en general, gris suave en dormitorio</div>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-2">👶</div>
                    <p className="font-semibold">Hogar preparado para la llegada del bebé</p>
                    <p className="text-sm text-muted-foreground">"Quedó perfecto, justo como lo habíamos imaginado"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tu hogar?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Solicita tu presupuesto personalizado. Te visitamos gratis en Valencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/presupuesto">Solicitar presupuesto</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:722208131" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Llamar ahora</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinturaInterior;
