// src/pages/QuienesSomos.tsx
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Star, Award, Users, CheckCircle } from "lucide-react";

const QuienesSomos = () => {
  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Quiénes somos", path: "/quienes-somos" }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "name": "Pintores en Valencia",
    "url": "https://pintores-valencia.com",
    "description": "Empresa de pintores profesionales en Valencia con más de 10 años de experiencia",
    "founder": {
      "@type": "Person",
      "name": "Edgar Berrio Jiménez"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Valencia",
      "addressRegion": "Comunidad Valenciana",
      "addressCountry": "ES"
    },
    "telephone": "+34722208131",
    "email": "edgarberriojimenez@gmail.com",
    "openingHours": [
      "Mo-Sa 08:00-20:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4699,
        "longitude": -0.3763
      },
      "geoRadius": "50000"
    },
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "areaServed": [
      { "@type": "City", "name": "Valencia" },
      { "@type": "City", "name": "Sagunto" },
      { "@type": "City", "name": "Xàtiva" },
      { "@type": "City", "name": "Cullera" }
    ]
  };

  return (
    <>
      <SEOHead
        title="Quiénes Somos - Pintores Profesionales en Valencia"
        description="Conoce nuestro equipo de pintores profesionales en Valencia. Más de 10 años de experiencia, garantía escrita y miles de clientes satisfechos."
        keywords="pintores valencia, empresa pintura valencia, profesionales pintura, equipo pintores"
        canonicalUrl="https://pintores-valencia.com/quienes-somos"
        schema={localBusinessSchema}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  +10 años de experiencia
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  +2.000 clientes
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pintores Profesionales en Valencia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Somos una empresa familiar de pintores profesionales con más de una década de experiencia 
                transformando hogares y negocios en Valencia y toda la provincia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Equipo de pintores profesionales en Valencia"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3">
                <p className="text-sm font-medium">Nuestro equipo</p>
                <p className="text-xs text-muted-foreground">Profesionales certificados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores y experiencia */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Experiencia comprobada</h3>
                <p className="text-sm text-muted-foreground">
                  Más de 10 años en el sector con miles de trabajos completados con éxito en toda Valencia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Garantía escrita</h3>
                <p className="text-sm text-muted-foreground">
                  Todos nuestros trabajos incluyen garantía por escrito de hasta 5 años según el servicio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Equipo profesional</h3>
                <p className="text-sm text-muted-foreground">
                  Pintores certificados, formados continuamente y con seguro de responsabilidad civil.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Información de contacto NAP */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Información de contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                <CardTitle>Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Valencia, España<br />
                  Servicios en toda la provincia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 text-accent mx-auto mb-2" />
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  <a href="tel:722208131" className="hover:text-accent">
                    722 208 131
                  </a>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Llamadas y WhatsApp
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <CardTitle>Horarios</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Lunes - Sábado<br />
                  08:00 - 20:00
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonios destacados */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "Profesionales de confianza. Llegaron puntuales, trabajaron limpio y el resultado fue excelente. Repetiré seguro."
                </p>
                <div>
                  <p className="font-semibold">Carmen Ruiz</p>
                  <p className="text-sm text-muted-foreground">Piso en Ruzafa</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "Pintaron toda mi oficina en un fin de semana. Cumplieron el presupuesto y los plazos al pie de la letra."
                </p>
                <div>
                  <p className="font-semibold">David Martín</p>
                  <p className="text-sm text-muted-foreground">Local comercial, Centro</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "La mejor inversión que he hecho en casa. Eliminaron el gotelé y quedó como nuevo. Muy recomendables."
                </p>
                <div>
                  <p className="font-semibold">Ana Torres</p>
                  <p className="text-sm text-muted-foreground">Chalet en Sagunto</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes un proyecto de pintura?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Cuéntanos tu proyecto y te damos presupuesto personalizado en 24 horas.
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

export default QuienesSomos;
