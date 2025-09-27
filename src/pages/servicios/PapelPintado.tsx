// src/pages/servicios/PapelPintado.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Palette, Eye, Lightbulb, Clock, Shield } from "lucide-react";

const PapelPintado = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Papel pintado y vinilos en Valencia",
    "description": "Instalación profesional de papel pintado y vinilos decorativos para personalizar cualquier espacio en Valencia",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/papel-pintado-vinilos",
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
        "name": "Papel pintado y vinilos",
        "item": "https://pintores-valencia.com/papel-pintado-vinilos"
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Papel pintado y vinilos", path: "/papel-pintado-vinilos" }
  ];

  return (
    <>
      <SEOHead
        title="Papel Pintado y Vinilos Valencia - Instalación Profesional"
        description="Instalación profesional de papel pintado y vinilos decorativos para personalizar cualquier espacio. Diseños únicos, instalación perfecta."
        keywords="papel pintado valencia, vinilos decorativos, empapelado valencia, decoración paredes, papel pared"
        canonicalUrl="https://pintores-valencia.com/papel-pintado-vinilos"
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
                  Diseños únicos
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Instalación perfecta
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Papel Pintado y Vinilos Valencia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Instalación profesional de papel pintado y vinilos decorativos para personalizar cualquier espacio.
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
                  <Palette className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Diseños únicos</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Instalación perfecta</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lightbulb className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Asesoramiento</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Instalación profesional de papel pintado en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Diseño personalizado</p>
                <p className="text-xs text-muted-foreground">Dormitorio en Ruzafa</p>
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
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Asesoramiento completo</h3>
                <p className="text-sm text-muted-foreground">Te ayudamos a elegir el diseño perfecto según tu espacio y estilo decorativo.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Preparación perfecta</h3>
                <p className="text-sm text-muted-foreground">Preparamos las paredes con masilla y lijado para un acabado impecable.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Instalación profesional</h3>
                <p className="text-sm text-muted-foreground">Colocamos el papel o vinilo sin burbujas ni imperfecciones, con acabado perfecto.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Precios papel pintado y vinilos</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Tipo de material</th>
                  <th className="text-left p-4 font-semibold">Precio/m²</th>
                  <th className="text-left p-4 font-semibold">Incluye</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Vinilos decorativos</td>
                  <td className="p-4 font-bold text-primary">desde 25€</td>
                  <td className="p-4 text-sm">Material + instalación + limpieza</td>
                </tr>
                <tr className="border-t bg-accent/5">
                  <td className="p-4">Papel pintado estándar</td>
                  <td className="p-4 font-bold text-primary">desde 30€</td>
                  <td className="p-4 text-sm">Preparación + papel + colocación</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Papel pintado premium</td>
                  <td className="p-4 font-bold text-primary">desde 45€</td>
                  <td className="p-4 text-sm">Diseños exclusivos + instalación técnica</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Murales personalizados</td>
                  <td className="p-4 font-bold text-primary">desde 60€</td>
                  <td className="p-4 text-sm">Diseño personalizado + impresión + instalación</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            *Precios orientativos. No incluye el coste del material base (papel o vinilo).
          </p>
        </section>

        {/* Proceso de trabajo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "1", titulo: "Asesoramiento", desc: "Visitamos el espacio y aconsejamos diseños" },
              { num: "2", titulo: "Preparación", desc: "Preparamos las paredes con masilla y lijado" },
              { num: "3", titulo: "Medición", desc: "Tomamos medidas exactas y calculamos material" },
              { num: "4", titulo: "Instalación", desc: "Colocamos el papel o vinilo con precisión" },
              { num: "5", titulo: "Acabados", desc: "Revisamos y limpiamos todo el trabajo" }
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

        {/* Tipos de aplicaciones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Aplicaciones y estilos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Dormitorios</h3>
                <p className="text-sm text-muted-foreground">Cabeceros y paredes principales con diseños relajantes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Salones</h3>
                <p className="text-sm text-muted-foreground">Paredes de acento y espacios de reunión</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Cocinas</h3>
                <p className="text-sm text-muted-foreground">Vinilos lavables y resistentes a la humedad</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Oficinas</h3>
                <p className="text-sm text-muted-foreground">Espacios corporativos y de trabajo</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ventajas del papel pintado */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Ventajas del papel pintado y vinilos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Personalización única</h3>
                      <p className="text-sm text-muted-foreground">Miles de diseños y posibilidad de crear patrones personalizados</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Cambio rápido</h3>
                      <p className="text-sm text-muted-foreground">Transforma completamente un espacio en pocas horas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Durabilidad</h3>
                      <p className="text-sm text-muted-foreground">Los vinilos de calidad duran años sin deteriorarse</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Fácil mantenimiento</h3>
                      <p className="text-sm text-muted-foreground">La mayoría son lavables y resistentes a manchas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Texturas y efectos</h3>
                      <p className="text-sm text-muted-foreground">Efectos 3D, texturas que imitan materiales naturales</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Reversible</h3>
                      <p className="text-sm text-muted-foreground">Los vinilos se pueden retirar sin dañar la pared</p>
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
                <CardTitle className="text-lg">¿En qué se diferencia el papel pintado del vinilo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El papel pintado es más tradicional y elegante, mientras que el vinilo es más resistente, 
                  lavable y fácil de mantener. Ambos tienen sus ventajas según el uso y ubicación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Se puede instalar sobre cualquier superficie?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La superficie debe estar lisa, limpia y seca. Preparamos las paredes con masilla y lijado 
                  si es necesario para garantizar una instalación perfecta.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto dura la instalación?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Depende de la superficie, pero generalmente 1-2 días para una habitación completa. 
                  Los vinilos son más rápidos de instalar que el papel pintado tradicional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Ayudáis a elegir el diseño?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, ofrecemos asesoramiento completo. Visitamos el espacio, analizamos la decoración existente 
                  y recomendamos los diseños que mejor se adapten a tus gustos y necesidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Quieres personalizar tus paredes?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Dale vida a tu hogar con nuestros diseños únicos. Asesoramiento y presupuesto gratis.
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

export default PapelPintado;
