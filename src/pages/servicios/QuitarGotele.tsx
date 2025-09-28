// src/pages/QuitarGotele.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Clock, Shield, Star } from "lucide-react";
import interiorImage from "@/assets/pintura-interior-valencia.jpg";

const QuitarGotele = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quitar gotelé en Valencia",
    "description": "Servicio profesional de eliminación de gotelé y alisado de paredes en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/quitar-gotele-alisar-paredes",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 18,
        "priceCurrency": "EUR",
        "unitCode": "MTK" // m²
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Servicios", "item": "https://pintores-valencia.com/servicios" },
      { "@type": "ListItem", "position": 2, "name": "Quitar gotelé", "item": "https://pintores-valencia.com/quitar-gotele-alisar-paredes" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda en eliminar el gotelé?",
        "acceptedAnswer": { "@type": "Answer", "text": "Depende de la superficie; normalmente hasta 40 m² en un día de trabajo completo." }
      },
      {
        "@type": "Question",
        "name": "¿Realmente no hacen polvo?",
        "acceptedAnswer": { "@type": "Answer", "text": "Usamos técnica húmeda para ablandar el gotelé antes de retirarlo, evitando el polvo." }
      },
      {
        "@type": "Question",
        "name": "¿Queda listo para pintar directamente?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sí. Tras el alisado y la imprimación, las paredes quedan listas para pintar." }
      }
    ]
  };

  const proceso = [
    { numero: "1", titulo: "Preparación", descripcion: "Protegemos mobiliario y suelos. Preparamos las herramientas especializadas." },
    { numero: "2", titulo: "Humedecido", descripcion: "Aplicamos agua con productos específicos para ablandar el gotelé." },
    { numero: "3", titulo: "Rascado", descripcion: "Eliminamos el gotelé con herramientas profesionales sin dañar la pared." },
    { numero: "4", titulo: "Alisado", descripcion: "Aplicamos pasta alisadora para conseguir una superficie perfectamente lisa." },
    { numero: "5", titulo: "Lijado y acabado", descripcion: "Lijamos finamente y aplicamos imprimación. Listo para pintar." }
  ];

  const materiales = [
    "Pasta alisadora premium",
    "Herramientas especializadas",
    "Productos químicos específicos",
    "Imprimación de calidad",
    "Lijas de grano fino",
    "Material de protección"
  ];

  return (
    <>
      <SEOHead
        title="Quitar gotelé en Valencia - Alisado perfecto de paredes"
        description="Eliminamos el gotelé de forma profesional en Valencia. Sin polvo, acabado perfecto, técnica especializada. Desde 18€/m². Presupuesto gratis."
        keywords="quitar gotele valencia, alisar paredes, eliminar gotele, alisado paredes valencia"
        canonicalUrl="https://pintores-valencia.com/quitar-gotele-alisar-paredes"
        schema={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Servicios", href: "/servicios" },
          { label: "Quitar gotelé" }
        ]} />
        
        <div className="py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-accent">Servicio especializado</Badge>
                <Badge variant="outline">Sin polvo</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quitar gotelé en Valencia
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Eliminamos el gotelé de forma profesional y dejamos tus paredes completamente lisas. 
                Técnica sin polvo, acabado perfecto y listo para pintar.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-primary">desde 18€/m²</div>
                <div className="text-sm text-muted-foreground">Material incluido</div>
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
                  <CheckCircle className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Sin polvo</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Rápido</span>
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
                alt="Antes y después de quitar gotelé en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Antes y después</p>
                <p className="text-xs text-muted-foreground">Apartamento en Russafa</p>
              </div>
            </div>
          </div>

          {/* Problema y Solución */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">El problema del gotelé</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Aspecto anticuado y poco estético</li>
                    <li>• Acumula polvo y suciedad</li>
                    <li>• Dificulta la limpieza</li>
                    <li>• Reduce el valor de la vivienda</li>
                    <li>• No permite decoración moderna</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">Nuestra solución</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Eliminación completa sin polvo</li>
                    <li>• Alisado perfecto de paredes</li>
                    <li>• Acabado listo para pintar</li>
                    <li>• Técnica profesional especializada</li>
                    <li>• Resultado duradero y estético</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Proceso */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso en 5 pasos</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {proceso.map((paso, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {paso.numero}
                    </div>
                    <h3 className="font-semibold mb-2">{paso.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{paso.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Precios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Precios quitar gotelé</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <div className="text-2xl font-bold text-primary">18€/m²</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Eliminación gotelé</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Alisado básico</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Limpieza incluida</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="ring-2 ring-accent ring-opacity-50">
                <CardHeader>
                  <Badge className="w-fit bg-accent mb-2">Más popular</Badge>
                  <CardTitle>Completo</CardTitle>
                  <div className="text-2xl font-bold text-primary">24€/m²</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Eliminación gotelé</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Alisado perfecto</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Imprimación incluida</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Reparación pequeñas grietas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <div className="text-2xl font-bold text-primary">32€/m²</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Todo lo anterior</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />1 mano de pintura</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Pintura premium incluida</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Garantía 5 años</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Materiales */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Materiales que utilizamos</h2>
                <div className="grid grid-cols-2 gap-4">
                  {materiales.map((material, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="bg-gradient-hero text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">¿Por qué elegir nuestra técnica?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Sin polvo: técnica húmeda especializada</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Acabado perfecto: alisado profesional</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Rapidez: hasta 40m² en un día</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Limpieza: recogemos todos los residuos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Caso local */}
          <section className="mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Caso real: Piso en Russafa</h2>
                    <p className="text-muted-foreground mb-4">
                      Eliminamos el gotelé de un apartamento completo de 75m² en el barrio de Russafa. 
                      El propietario quería modernizar su vivienda antes de ponerla en alquiler.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Superficie:</strong> 75m² de paredes</div>
                      <div><strong>Tiempo:</strong> 2 días completos</div>
                      <div><strong>Técnica:</strong> Eliminación sin polvo + alisado perfecto</div>
                      <div><strong>Resultado:</strong> Paredes lisas listas para pintar</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-6">
                      <div className="text-3xl mb-2">😊</div>
                      <p className="font-semibold">Cliente 100% satisfecho</p>
                      <p className="text-sm text-muted-foreground">Aumentó el valor de su propiedad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Final */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para eliminar el gotelé?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Transforma tus paredes con nuestro servicio profesional. Presupuesto gratis en 24h.
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

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Cuánto tiempo tarda en eliminar el gotelé?</h3>
                  <p className="text-muted-foreground">Depende de la superficie, pero generalmente podemos hacer hasta 40m² en un día de trabajo completo.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Realmente no hacen polvo?</h3>
                  <p className="text-muted-foreground">Correcto. Utilizamos técnica húmeda que ablanda el gotelé antes de eliminarlo, evitando completamente el polvo.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Queda listo para pintar directamente?</h3>
                  <p className="text-muted-foreground">Sí, después del alisado y la imprimación, las paredes quedan perfectas para aplicar cualquier tipo de pintura.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default QuitarGotele;
