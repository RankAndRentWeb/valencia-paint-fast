// src/pages/PinturaExterior.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Building, Shield, Sun } from "lucide-react";
import fachadaImage from "@/assets/fachada-exterior-valencia.jpg";

const PinturaExterior = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pintura de fachadas en Valencia",
    "description": "Servicio profesional de pintura exterior y fachadas en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/pintura-exterior-fachadas",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 15,
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
        "name": "Pintura exterior",
        "item": "https://pintores-valencia.com/pintura-exterior-fachadas"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Pintura de fachadas en Valencia - Exteriores profesionales"
        description="Pintura profesional de fachadas en Valencia. Protegemos y embellecemos exteriores con pinturas resistentes. Desde 15€/m². Andamiaje incluido."
        keywords="pintura fachadas valencia, pintura exterior, fachadas valencia, pintar edificio"
        canonicalUrl="https://pintores-valencia.com/pintura-exterior-fachadas"
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: "Pintura exterior" }
          ]}
        />

        <div className="py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-accent">Especialistas</Badge>
                <Badge variant="outline">Andamiaje incluido</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pintura de fachadas en Valencia
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Protegemos y embellecemos fachadas con pinturas resistentes a la intemperie. 
                Técnicas especializadas con andamiaje profesional y seguro RC.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-primary">desde 15€/m²</div>
                <div className="text-sm text-muted-foreground">Andamiaje incluido</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-gradient-cta shadow-cta">
                  <a href="/presupuesto">Pedir presupuesto gratis</a>
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
                  <Sun className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Resistente al clima</span>
                </div>
                <div className="flex flex-col items-center">
                  <Building className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Andamiaje incluido</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Seguro RC</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={fachadaImage}
                alt="Pintura de fachadas profesional en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Fachada renovada</p>
                <p className="text-xs text-muted-foreground">Edificio en Centro Valencia</p>
              </div>
            </div>
          </div>

          {/* Tipos de pintura exterior */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tipos de pintura para fachadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pintura plástica exterior</CardTitle>
                  <div className="text-2xl font-bold text-primary">desde 15€/m²</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Resistente a la lluvia</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Buena cobertura</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Variedad de colores</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Garantía 5 años</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">Ideal para fachadas en buen estado</p>
                </CardContent>
              </Card>

              <Card className="ring-2 ring-accent ring-opacity-50">
                <CardHeader>
                  <Badge className="w-fit bg-accent mb-2">Recomendada</Badge>
                  <CardTitle>Pintura elastomérica</CardTitle>
                  <div className="text-2xl font-bold text-primary">desde 22€/m²</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Máxima elasticidad</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Cubre microfisuras</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Anti-moho y algas</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Garantía 7 años</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">Perfecta para fachadas con pequeñas grietas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Siloxano premium</CardTitle>
                  <div className="text-2xl font-bold text-primary">desde 28€/m²</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Máxima durabilidad</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Transpirable</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Autolimpiante</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Garantía 10 años</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">La mejor opción para fachadas premium</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Proceso de trabajo */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Proceso de pintura de fachadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { num: "1", titulo: "Inspección", desc: "Evaluamos estado de la fachada y accesos" },
                { num: "2", titulo: "Montaje", desc: "Instalamos andamiaje homologado y seguro" },
                { num: "3", titulo: "Preparación", desc: "Limpieza alta presión y reparaciones" },
                { num: "4", titulo: "Pintura", desc: "Imprimación y 2 manos de acabado" },
                { num: "5", titulo: "Finalización", desc: "Desmontaje y limpieza completa" }
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

          {/* Tabla de precios completa */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Precios completos fachadas</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Servicio</th>
                    <th className="text-left p-4 font-semibold">Precio/m²</th>
                    <th className="text-left p-4 font-semibold">Incluye</th>
                    <th className="text-left p-4 font-semibold">Garantía</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Pintura plástica</td>
                    <td className="p-4 font-bold text-primary">desde 15€</td>
                    <td className="p-4 text-sm">Limpieza, imprimación, 2 manos, andamiaje</td>
                    <td className="p-4 text-sm">5 años</td>
                  </tr>
                  <tr className="border-t bg-accent/5">
                    <td className="p-4">Elastomérica</td>
                    <td className="p-4 font-bold text-primary">desde 22€</td>
                    <td className="p-4 text-sm">Limpieza, sellado fisuras, imprimación, 2 manos</td>
                    <td className="p-4 text-sm">7 años</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Siloxano premium</td>
                    <td className="p-4 font-bold text-primary">desde 28€</td>
                    <td className="p-4 text-sm">Preparación completa, siloxano 2 manos</td>
                    <td className="p-4 text-sm">10 años</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Solo limpieza</td>
                    <td className="p-4 font-bold text-primary">desde 8€</td>
                    <td className="p-4 text-sm">Limpieza alta presión, andamiaje</td>
                    <td className="p-4 text-sm">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Servicios adicionales */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Servicios adicionales para fachadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { servicio: "Reparación de grietas", precio: "desde 12€/ml", descripcion: "Sellado profesional de fisuras" },
                { servicio: "Picado de azulejos", precio: "desde 25€/m²", descripcion: "Eliminación de azulejos antiguos" },
                { servicio: "Impermeabilización", precio: "desde 25€/m²", descripcion: "Protección contra filtraciones" },
                { servicio: "Pintura de balcones", precio: "desde 180€/ud", descripcion: "Barandillas y estructura completa" },
                { servicio: "Limpieza de grafitis", precio: "desde 15€/m²", descripcion: "Eliminación profesional" },
                { servicio: "Canalones", precio: "desde 8€/ml", descripcion: "Pintura y mantenimiento" }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.servicio}</h3>
                    <div className="text-lg font-bold text-primary mb-2">{item.precio}</div>
                    <p className="text-sm text-muted-foreground">{item.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Por qué elegir pintura exterior profesional */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">¿Por qué pintar la fachada?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Protección del edificio</h4>
                      <p className="text-sm text-muted-foreground">La pintura protege la fachada de la lluvia, sol y contaminación, evitando deterioros costosos.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Aumento del valor</h4>
                      <p className="text-sm text-muted-foreground">Una fachada bien pintada aumenta significativamente el valor de la propiedad.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Sun className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Eficiencia energética</h4>
                      <p className="text-sm text-muted-foreground">Los colores claros reflejan el calor, reduciendo el consumo energético.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-hero text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Nuestras garantías</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Andamiaje homologado y certificado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Seguro de responsabilidad civil</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Materiales de primeras marcas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Garantía escrita hasta 10 años</span>
                    </li>
                  </ul>
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
                    <h2 className="text-2xl font-bold mb-4">Caso real: Edificio en Centro Valencia</h2>
                    <p className="text-muted-foreground mb-4">
                      Renovamos completamente la fachada de un edificio de 6 plantas en el centro de Valencia. 
                      El edificio tenía problemas de humedad y la pintura se desconchaba.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Superficie:</strong> 800m² de fachada</div>
                      <div><strong>Problema:</strong> Desconchones y filtraciones</div>
                      <div><strong>Solución:</strong> Pintura elastomérica transpirable</div>
                      <div><strong>Tiempo:</strong> 2 semanas</div>
                      <div><strong>Garantía:</strong> 7 años por escrito</div>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-2">🏢</div>
                    <p className="font-semibold">Problema resuelto definitivamente</p>
                    <p className="text-sm text-muted-foreground">"Llevábamos años con goteras, ahora está perfecto"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Tu fachada necesita renovación?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Protege tu inversión con nuestro servicio profesional de pintura de fachadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/presupuesto">Solicitar presupuesto</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:722208131" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Consultar fachada</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinturaExterior;
