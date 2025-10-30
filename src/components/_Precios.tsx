// src/pages/Precios.tsx

import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, X, Phone, Info } from "lucide-react";

const Precios = () => {
  const preciosInterior = [
    {
      concepto: "Pintura plástica (2 manos)",
      precio: "desde 8€/m²",
      incluye: ["Limpieza previa", "Protección mobiliario", "2 manos de pintura"],
      noIncluye: ["Material", "Reparaciones"]
    },
    {
      concepto: "Pintura + alisado pequeñas imperfecciones",
      precio: "desde 12€/m²", 
      incluye: ["Alisado menor", "Imprimación", "2 manos pintura", "Limpieza"],
      noIncluye: ["Material premium", "Grandes reparaciones"]
    },
    {
      concepto: "Quitar gotelé + alisar + pintar",
      precio: "desde 18€/m²",
      incluye: ["Eliminación gotelé", "Alisado perfecto", "Imprimación", "2 manos"],
      noIncluye: ["Retirada escombros", "Reparación grietas grandes"]
    }
  ];

  const preciosFachada = [
    {
      concepto: "Fachada pintura plástica",
      precio: "desde 15€/m²",
      incluye: ["Limpieza alta presión", "Imprimación", "2 manos exterior"],
      noIncluye: ["Andamiaje complejo", "Reparaciones estructurales"]
    },
    {
      concepto: "Fachada pintura elastomérica",
      precio: "desde 22€/m²",
      incluye: ["Limpieza", "Imprimación", "2 manos elastómero", "Garantía 7 años"],
      noIncluye: ["Reparación grietas grandes", "Andamiaje especial"]
    },
    {
      concepto: "Impermeabilización transparente",
      precio: "desde 25€/m²",
      incluye: ["Limpieza", "Sellado fisuras", "2 manos impermeabilizante"],
      noIncluye: ["Reparaciones estructurales", "Cambio de juntas"]
    }
  ];

  const serviciosExtras = [
    { servicio: "Lacado puertas (por puerta)", precio: "desde 120€" },
    { servicio: "Papel pintado instalación", precio: "desde 8€/m²" },
    { servicio: "Quitar papel pintado", precio: "desde 6€/m²" },
    { servicio: "Plastecido decorativo", precio: "desde 25€/m²" },
    { servicio: "Pintar radiadores", precio: "desde 35€/ud" },
    { servicio: "Pequeñas reparaciones", precio: "desde 20€/h" }
  ];

  // === JSON-LD estructurado (no afecta al diseño) ===
  // Catalogamos interior, fachada y extras con precios "desde".
  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Tarifas de pintura en Valencia",
    "url": "https://pintores-valencia.com/precios",
    "itemListElement": [
      // Interior
      {
        "@type": "Offer",
        "name": "Pintura plástica (2 manos) - interior",
        "category": "interior",
        "itemOffered": { "@type": "Service", "name": "Pintura interior" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "8",
          "priceCurrency": "EUR",
          "unitCode": "MTK" // m²
        }
      },
      {
        "@type": "Offer",
        "name": "Pintura + alisado ligero - interior",
        "category": "interior",
        "itemOffered": { "@type": "Service", "name": "Pintura interior con alisado" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "12",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Offer",
        "name": "Quitar gotelé + alisar + pintar",
        "category": "interior",
        "itemOffered": { "@type": "Service", "name": "Eliminación de gotelé y alisado" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "18",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      // Fachadas / exteriores
      {
        "@type": "Offer",
        "name": "Fachada pintura plástica",
        "category": "exterior",
        "itemOffered": { "@type": "Service", "name": "Pintura de fachadas" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "15",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Offer",
        "name": "Fachada pintura elastomérica",
        "category": "exterior",
        "itemOffered": { "@type": "Service", "name": "Pintura elastomérica de fachadas" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "22",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Offer",
        "name": "Impermeabilización transparente",
        "category": "exterior",
        "itemOffered": { "@type": "Service", "name": "Impermeabilización" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "25",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      // Extras (unidades y hora)
      {
        "@type": "Offer",
        "name": "Lacado de puertas",
        "category": "extra",
        "itemOffered": { "@type": "Service", "name": "Lacado de puertas" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "120",
          "priceCurrency": "EUR",
          "unitCode": "EACH"
        }
      },
      {
        "@type": "Offer",
        "name": "Instalación papel pintado",
        "category": "extra",
        "itemOffered": { "@type": "Service", "name": "Instalación de papel pintado" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "8",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Offer",
        "name": "Retirada papel pintado",
        "category": "extra",
        "itemOffered": { "@type": "Service", "name": "Retirada de papel pintado" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "6",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Offer",
        "name": "Plastecido decorativo",
        "category": "extra",
        "itemOffered": { "@type": "Service", "name": "Plastecido decorativo" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "25",
          "priceCurrency": "EUR",
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Offer",
        "name": "Pintar radiadores",
        "category": "extra",
        "itemOffered": { "@type": "Service", "name": "Pintado de radiadores" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "35",
          "priceCurrency": "EUR",
          "unitCode": "EACH"
        }
      },
      {
        "@type": "Offer",
        "name": "Pequeñas reparaciones",
        "category": "extra",
        "itemOffered": { "@type": "Service", "name": "Reparaciones menores" },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "20",
          "priceCurrency": "EUR",
          "unitCode": "HUR" // por hora
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Precios de pintura en Valencia - Tarifas transparentes"
        description="Consulta nuestros precios de pintura en Valencia: interior desde 8€/m², fachadas desde 15€/m², quitar gotelé desde 18€/m². Presupuesto gratis."
        keywords="precios pintura valencia, tarifas pintores, precio pintar casa, coste quitar gotele"
        canonicalUrl="https://pintores-valencia.com/precios"
        schema={offerCatalog}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Precios" }]} />
        
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Precios transparentes y competitivos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Consulta nuestras tarifas orientativas para trabajos de pintura en Valencia. 
              Todos los precios incluyen mano de obra y garantía.
            </p>
          </div>

          {/* Alerta precios orientativos */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 flex items-start space-x-3">
            <Info className="w-5 h-5 text-accent mt-0.5" />
            <div className="text-sm">
              <strong>Precios orientativos:</strong> Los precios finales pueden variar según el estado de las superficies, 
              accesibilidad, materiales elegidos y complejidad del trabajo. Solicita un presupuesto personalizado para conocer el precio exacto.
            </div>
          </div>

          {/* Pintura Interior */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Pintura interior</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {preciosInterior.map((item, index) => (
                <Card key={index} className={index === 1 ? "ring-2 ring-accent ring-opacity-50" : ""}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.concepto}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{item.precio}</div>
                    {index === 1 && <Badge className="w-fit bg-accent">Más popular</Badge>}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-600 flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Incluye:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {item.incluye.map((incluido, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {incluido}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 flex items-center mb-2">
                          <X className="w-4 h-4 mr-2" />
                          No incluye:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {item.noIncluye.map((noIncluido, i) => (
                            <li key={i} className="flex items-center text-muted-foreground">
                              <X className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                              {noIncluido}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pintura Exterior */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Fachadas y exteriores</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {preciosFachada.map((item, index) => (
                <Card key={index} className={index === 1 ? "ring-2 ring-accent ring-opacity-50" : ""}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.concepto}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{item.precio}</div>
                    {index === 1 && <Badge className="w-fit bg-accent">Recomendado</Badge>}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-600 flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Incluye:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {item.incluye.map((incluido, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {incluido}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 flex items-center mb-2">
                          <X className="w-4 h-4 mr-2" />
                          No incluye:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {item.noIncluye.map((noIncluido, i) => (
                            <li key={i} className="flex items-center text-muted-foreground">
                              <X className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                              {noIncluido}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Servicios extras */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Servicios adicionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviciosExtras.map((servicio, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{servicio.servicio}</span>
                      <span className="text-primary font-bold">{servicio.precio}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Factores que afectan el precio */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Factores que influyen en el precio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Factores que aumentan el coste</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Paredes en mal estado</li>
                    <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Techos muy altos (&gt;3m)</li>
                    <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Acceso complicado</li>
                    <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Colores oscuros sobre claros</li>
                    <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Muchos obstáculos</li>
                    <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Trabajo urgente</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Factores que reducen el coste</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Superficies en buen estado</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Espacios amplios y despejados</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fácil acceso</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Metros cuadrados altos</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Flexibilidad en fechas</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Trabajo en temporada baja</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Quieres un presupuesto personalizado?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Cada proyecto es único. Te ofrecemos un presupuesto detallado y sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton 
                variant="orange" 
                size="lg" 
                asChild 
                href="/presupuesto"
              >
                Solicitar presupuesto gratis
              </CustomButton>
              <CustomButton 
                variant="blue" 
                size="lg" 
                asChild 
                href="tel:722208131"
                className="flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar para consultar</span>
              </CustomButton>
            </div>
          </div>

          {/* Garantías */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestras garantías</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Precio final sin sorpresas</h3>
                  <p className="text-sm text-muted-foreground">El presupuesto incluye todo. No hay costes ocultos ni extras sorpresa.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Garantía de calidad</h3>
                  <p className="text-sm text-muted-foreground">3 años en interiores, 7 años en fachadas. Garantía escrita.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Satisfacción garantizada</h3>
                  <p className="text-sm text-muted-foreground">Si no quedas satisfecho, lo repetimos sin coste adicional.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Precios;
