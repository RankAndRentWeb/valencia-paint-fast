// src/pages/servicios/PinturaComunidades.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Building, FileText, Users, Calendar, Clock, Shield } from "lucide-react";

const PinturaComunidades = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pintura comunidades en Valencia",
    "description": "Servicios especializados para comunidades de propietarios con gestión completa del proyecto en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/pintura-comunidades",
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
        "name": "Pintura comunidades",
        "item": "https://pintores-valencia.com/pintura-comunidades"
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Pintura comunidades", path: "/pintura-comunidades" }
  ];

  return (
    <>
      <SEOHead
        title="Pintura Comunidades Valencia - Gestión Completa del Proyecto"
        description="Servicios especializados para comunidades de propietarios con gestión completa del proyecto. Presupuesto detallado y coordinación con vecinos."
        keywords="pintura comunidades valencia, comunidades propietarios, pintar edificio, fachadas comunidad, escaleras comunidad"
        canonicalUrl="https://pintores-valencia.com/pintura-comunidades"
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
                  Gestión completa
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  Presupuesto detallado
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pintura Comunidades Valencia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Servicios especializados para comunidades de propietarios con gestión completa del proyecto.
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
                  <CheckCircle className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Gestión completa</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileText className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Presupuesto detallado</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Coordinación vecinos</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Pintura profesional de comunidades en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Proyecto completado</p>
                <p className="text-xs text-muted-foreground">Comunidad en Malvarrosa</p>
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
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Gestión administrativa</h3>
                <p className="text-sm text-muted-foreground">Tramitamos licencias, seguros y toda la documentación necesaria para la comunidad.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Coordinación vecinal</h3>
                <p className="text-sm text-muted-foreground">Nos encargamos de toda la comunicación y coordinación con los vecinos durante el proyecto.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Planificación completa</h3>
                <p className="text-sm text-muted-foreground">Organizamos todo el proyecto con cronograma detallado y mínimas molestias.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Precios pintura comunidades</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Zona del edificio</th>
                  <th className="text-left p-4 font-semibold">Precio/m²</th>
                  <th className="text-left p-4 font-semibold">Incluye</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Escaleras y rellanos</td>
                  <td className="p-4 font-bold text-primary">desde 15€</td>
                  <td className="p-4 text-sm">Pintura lavable + imprimación</td>
                </tr>
                <tr className="border-t bg-accent/5">
                  <td className="p-4">Fachadas exteriores</td>
                  <td className="p-4 font-bold text-primary">desde 18€</td>
                  <td className="p-4 text-sm">Pintura exterior + tratamiento antihumedad</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Patios interiores</td>
                  <td className="p-4 font-bold text-primary">desde 16€</td>
                  <td className="p-4 text-sm">Pintura transpirable + sellado fisuras</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Garajes y sótanos</td>
                  <td className="p-4 font-bold text-primary">desde 12€</td>
                  <td className="p-4 text-sm">Pintura específica para humedad</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            *Precios orientativos. Incluye gestión completa y coordinación del proyecto.
          </p>
        </section>

        {/* Proceso de trabajo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "1", titulo: "Reunión inicial", desc: "Presentación del proyecto en junta de propietarios" },
              { num: "2", titulo: "Presupuesto", desc: "Elaboramos presupuesto detallado por zonas" },
              { num: "3", titulo: "Gestión", desc: "Tramitamos permisos y seguros necesarios" },
              { num: "4", titulo: "Ejecución", desc: "Realizamos los trabajos coordinando con vecinos" },
              { num: "5", titulo: "Entrega", desc: "Entregamos proyecto finalizado con garantías" }
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

        {/* Servicios específicos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios para comunidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Fachadas</h3>
                <p className="text-sm text-muted-foreground">Exteriores e interiores con sistemas específicos</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Escaleras</h3>
                <p className="text-sm text-muted-foreground">Pintura de escaleras y rellanos comunitarios</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Garajes</h3>
                <p className="text-sm text-muted-foreground">Tratamiento antihumedad en sótanos</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Patios</h3>
                <p className="text-sm text-muted-foreground">Patios de luces y zonas comunes</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ventajas para comunidades */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">¿Por qué elegirnos para tu comunidad?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Experiencia demostrable</h3>
                      <p className="text-sm text-muted-foreground">+200 comunidades pintadas en Valencia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Gestión integral</h3>
                      <p className="text-sm text-muted-foreground">Nos ocupamos de todo el papeleo y trámites</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Seguro de responsabilidad</h3>
                      <p className="text-sm text-muted-foreground">Cobertura completa durante los trabajos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Facilidades de pago</h3>
                      <p className="text-sm text-muted-foreground">Financiación adaptada a la comunidad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Mínimas molestias</h3>
                      <p className="text-sm text-muted-foreground">Planificamos para no interrumpir la vida diaria</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Garantía por escrito</h3>
                      <p className="text-sm text-muted-foreground">5 años en todos nuestros trabajos</p>
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
                <CardTitle className="text-lg">¿Cómo se aprueba el proyecto en la comunidad?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Presentamos el proyecto en la junta de propietarios con presupuesto detallado. Se necesita mayoría simple 
                  para aprobar trabajos de mantenimiento o mayoría cualificada para mejoras.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué permisos necesitamos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Para trabajos en fachadas exteriores se necesita licencia municipal. Nosotros nos encargamos 
                  de todos los trámites y permisos necesarios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo se organiza el pago?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ofrecemos diferentes opciones: pago al contado con descuento, financiación a medida de la comunidad, 
                  o pago por fases según avance del proyecto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué pasa si llueve durante los trabajos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Planificamos los trabajos según meteorología y tenemos protocolos para días de lluvia. 
                  Los trabajos interiores continúan normalmente.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tu comunidad necesita una renovación?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Nos encargamos de todo para que no tengas que preocuparte por nada. Presupuesto detallado gratis.
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

export default PinturaComunidades;
