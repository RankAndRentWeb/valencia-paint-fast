// src/pages/servicios/LocalesComerciales.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Phone, Building, Clock, Moon, Users, Shield } from "lucide-react";

const LocalesComerciales = () => {
  // === JSON-LD ===
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pintura locales comerciales en Valencia",
    "description": "Servicio profesional de pintura para locales comerciales en Valencia con horarios flexibles y trabajo nocturno",
    "provider": { "@type": "LocalBusiness", "name": "Pintores en Valencia" },
    "areaServed": [{ "@type": "City", "name": "Valencia" }],
    "offers": {
      "@type": "Offer",
      "url": "https://pintores-valencia.com/pintura-locales-comerciales",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 12,
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
        "name": "Locales comerciales",
        "item": "https://pintores-valencia.com/pintura-locales-comerciales"
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Locales comerciales", path: "/pintura-locales-comerciales" }
  ];

  return (
    <>
      <SEOHead
        title="Pintura Locales Comerciales Valencia - Horarios Flexibles"
        description="Damos imagen profesional a tu negocio con trabajos rápidos y de calidad que no interrumpan tu actividad. Horarios flexibles y trabajo nocturno."
        keywords="pintura locales comerciales valencia, pintar negocio, tiendas valencia, oficinas valencia, trabajo nocturno"
        canonicalUrl="https://pintores-valencia.com/pintura-locales-comerciales"
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
                  Horarios flexibles
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  Trabajo nocturno
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pintura Locales Comerciales Valencia
              </h1>
              
                            <p className="text-xl text-muted-foreground mb-8">
                Transformamos locales comerciales con pintura profesional. Trabajamos en horarios flexibles para no interrumpir tu negocio.
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
                  <Clock className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Horarios flexibles</span>
                </div>
                <div className="flex flex-col items-center">
                  <Moon className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Trabajo nocturno</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">Mínimas molestias</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Pintura profesional de locales comerciales en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Trabajo reciente</p>
                <p className="text-xs text-muted-foreground">Restaurante en El Carmen</p>
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
                <h3 className="font-semibold mb-2">Planificación adaptada</h3>
                <p className="text-sm text-muted-foreground">Organizamos el trabajo según tus horarios de apertura para no interrumpir tu negocio.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Pinturas comerciales</h3>
                <p className="text-sm text-muted-foreground">Usamos pinturas específicas para alto tránsito, lavables y resistentes al desgaste diario.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Moon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Trabajo nocturno</h3>
                <p className="text-sm text-muted-foreground">Trabajamos de madrugada o fines de semana para que abras con tu local recién pintado.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Precios locales comerciales</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Tipo de local</th>
                  <th className="text-left p-4 font-semibold">Precio/m²</th>
                  <th className="text-left p-4 font-semibold">Incluye</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Oficinas y despachos</td>
                  <td className="p-4 font-bold text-primary">desde 12€</td>
                  <td className="p-4 text-sm">Pintura lavable + imprimación</td>
                </tr>
                <tr className="border-t bg-accent/5">
                  <td className="p-4">Tiendas y comercios</td>
                  <td className="p-4 font-bold text-primary">desde 14€</td>
                  <td className="p-4 text-sm">Pintura alto tránsito + acabado satinado</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Restaurantes y bares</td>
                  <td className="p-4 font-bold text-primary">desde 16€</td>
                  <td className="p-4 text-sm">Pintura antigrasa + tratamiento específico</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Grandes superficies</td>
                  <td className="p-4 font-bold text-primary">desde 10€</td>
                  <td className="p-4 text-sm">Precio especial por volumen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            *Precios orientativos. Incluye trabajo nocturno y festivos sin recargo adicional.
          </p>
        </section>

        {/* Proceso de trabajo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "1", titulo: "Visita comercial", desc: "Evaluamos el local y planificamos horarios" },
              { num: "2", titulo: "Protección", desc: "Cubrimos mobiliario y equipos con cuidado" },
              { num: "3", titulo: "Preparación", desc: "Reparamos imperfecciones y limpiamos superficies" },
              { num: "4", titulo: "Pintado", desc: "Aplicamos pinturas comerciales de alta calidad" },
              { num: "5", titulo: "Limpieza", desc: "Dejamos todo listo para la apertura" }
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

        {/* Tipos de locales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Especializados en todo tipo de locales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Oficinas</h3>
                <p className="text-sm text-muted-foreground">Espacios profesionales y corporativos</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Tiendas</h3>
                <p className="text-sm text-muted-foreground">Comercios y boutiques</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Restauración</h3>
                <p className="text-sm text-muted-foreground">Bares, restaurantes y cafeterías</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Centros</h3>
                <p className="text-sm text-muted-foreground">Clínicas, academias y servicios</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Podéis trabajar por las noches?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, trabajamos en horarios nocturnos y fines de semana sin recargo adicional. 
                  Planificamos el trabajo para que no interrumpa tu actividad comercial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto tiempo necesitáis para un local?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Depende del tamaño y estado del local. Un comercio de 100m² típicamente se completa en 2-3 noches de trabajo, 
                  permitiendo que abras normalmente durante el día.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Las pinturas resisten el uso comercial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos pinturas específicas para alto tránsito, lavables y resistentes al desgaste. 
                  Son ideales para locales con mucho público y fáciles de mantener limpias.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Hay descuentos para cadenas o múltiples locales?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, ofrecemos precios especiales para cadenas comerciales, franquicias o empresas con múltiples locales. 
                  Contacta con nosotros para un presupuesto personalizado.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Necesitas renovar tu local comercial?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Trabajamos en tu horario para que no pierdas ni un día de ventas. Presupuesto gratis en 24h.
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

export default LocalesComerciales;
