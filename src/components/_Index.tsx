/* 
---
title: "Cómo quitar el gotelé paso a paso (Guía profesional en Valencia)"
excerpt: "Aprende cómo quitar el gotelé y dejar las paredes lisas. Guía completa con métodos, herramientas y precios reales en Valencia."
categorySlug: "gotele"
postSlug: "como-quitar-gotele-paredes"
cover: "/assets/blog/como-quitar-gotele.jpg"
date: "2025-09-30"
tags: ["quitar gotelé", "alisar paredes", "gotelé Valencia", "pintores Valencia"]
description: "Guía profesional para quitar gotelé paso a paso. Descubre métodos, herramientas, precios reales en Valencia y cuándo es mejor contratar a un pintor especializado."
---
*/

import SEOHead from "@/components/SEOHead";

import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Brush,
  Home,
  Building,
  Clock,
} from "lucide-react";
import trabajadoresImage from "../assets/madre-hijo-salon-pequeno.jpg";

interface IndexProps {
  heroImage?: any;
  featureImage?: any;
}

// ⭐ Estrellas accesibles sin ARIA prohibido
const RatingStars = ({ value = 5 }: { value?: number }) => (
  <div className="flex items-center space-x-1 mb-3">
    <span className="sr-only">Valoración {value} de 5</span>
    {Array.from({ length: value }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
    ))}
  </div>
);

const Index = ({ heroImage, featureImage }: IndexProps = {}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": "https://pintores-valencia.com/#business",
    name: "Pintores en Valencia",
    url: "https://pintores-valencia.com",
    image: "https://pintores-valencia.com/og-home.jpg",
    telephone: "+34722208131",
    email: "info@pintores-valencia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Comunitat Valenciana",
      postalCode: "46000",
      addressCountry: "ES",
    },
    openingHours: ["Mo-Sa 08:00-20:00"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.4699,
        longitude: -0.3763,
      },
      geoRadius: { "@type": "Distance", value: 50, unitText: "km" },
    },
    priceRange: "€€",
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "AdministrativeArea", name: "Comunitat Valenciana" }
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      "telephone": "+34722208131",
      "contactType": "customer service",
      "areaServed": "Valencia"
    }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Pintura en Valencia",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Pintura Interior",
          description: "Pintura completa de interiores con materiales premium y garantía",
          url: "https://pintores-valencia.com/servicios/pintura-interior/"
        },
        {
          "@type": "Offer", 
          name: "Quitar Gotelé",
          description: "Eliminación de gotelé y alisado de paredes sin polvo",
          url: "https://pintores-valencia.com/servicios/quitar-gotele/"
        },
        {
          "@type": "Offer",
          name: "Pintura Exterior y Fachadas",
          description: "Pintura exterior resistente al clima con andamiaje incluido",
          url: "https://pintores-valencia.com/servicios/pintura-exterior-fachadas/"
        },
        {
          "@type": "Offer",
          name: "Impermeabilización",
          description: "Impermeabilización de terrazas y fachadas",
          url: "https://pintores-valencia.com/servicios/impermeabilizacion-terrazas/"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿En cuánto tiempo dan el presupuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos comprometemos a enviar el presupuesto en menos de 24 horas tras recibir la solicitud."
        }
      },
      {
        "@type": "Question", 
        name: "¿Qué incluye el servicio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluimos materiales, mano de obra, limpieza posterior y garantía escrita. Todo transparente en el presupuesto."
        }
      },
      {
        "@type": "Question",
        name: "¿Trabajan en toda Valencia?", 
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, trabajamos en Valencia capital y en toda la provincia. Consultanos tu zona específica."
        }
      }
    ]
  };

  const services = [
    {
      title: "Quitar gotelé",
      description: "Eliminamos el gotelé y alisamos paredes",
      link: "/servicios/quitar-gotele/",
      icon: <Brush className="w-6 h-6" />,
    },
    {
      title: "Pintura interior",
      description: "Renovamos el interior de tu hogar",
      link: "/servicios/pintura-interior/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Fachadas",
      description: "Pintamos exteriores con garantía",
      link: "/servicios/pintura-exterior-fachadas/",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Impermeabilización",
      description: "Protegemos terrazas y fachadas",
      link: "/servicios/impermeabilizacion-terrazas/",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Locales comerciales",
      description: "Pintamos tu negocio profesionalmente",
      link: "/servicios/pintura-locales-comerciales/",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Comunidades",
      description: "Servicios para comunidades de propietarios",
      link: "/servicios/pintura-comunidades/",
      icon: <Building className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Russafa, Valencia",
      text: "Excelente trabajo. Terminaron en el plazo acordado y dejaron todo impecable.",
      rating: 5,
    },
    {
      name: "José Martínez",
      location: "Benimaclet, Valencia",
      text: "Muy profesionales. El presupuesto fue ajustado y cumplieron con todo lo prometido.",
      rating: 5,
    },
    {
      name: "Ana López",
      location: "Centro, Valencia",
      text: "Recomiendo totalmente. Trabajo de calidad y atención excelente.",
      rating: 5,
    },
  ];

  // Meta Title actualizado según solicitud
  const homeTitle = "Pintores en Valencia | Pintura de pisos, fachadas y gotelé (Presupuesto 24h)";
  const homeDesc =
    "Empresa de pintores profesionales en Valencia. Presupuesto en 24h, limpieza incluida, seguro RC y garantía escrita. ☎️ 722 208 131";
  const homeCanon = "https://pintores-valencia.com";

  return (
    <>
      <SEOHead
        title={homeTitle}
        description={homeDesc}
        canonicalUrl={homeCanon}
        schema={[localBusinessSchema, faqSchema]}
        preloadImages={heroImage ? [heroImage.src] : []}
        ogImage="https://pintores-valencia.com/og-home.jpg"
      />

      {/* Hero Section - Background image with overlay */}
      <section className="relative min-h-[56vh] overflow-clip">
        {heroImage && (
          <>
            <img 
              src={heroImage.src} 
              alt="Pintor profesional trabajando en Valencia" 
              fetchPriority="high"
              loading="eager"
              width={heroImage.width}
              height={heroImage.height}
              className="absolute inset-0 -z-10 w-full h-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-transparent"></div>
          </>
        )}
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pintores Profesionales en Valencia
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium">
              Presupuesto gratuito en menos de 24 horas
            </p>
            <p className="text-xl mb-12 text-white/90">
              Empresa de pintura con +10 años de experiencia | Garantía escrita | Limpieza incluida
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Botón Presupuesto Gratis naranja */}
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a href="/presupuesto/" className="flex items-center justify-center">
                  Presupuesto Gratis
                </a>
              </Button>
              
              {/* Botón Llamar azul */}
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a
                  href="tel:+34722208131"
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>722 208 131</span>
                </a>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Presupuesto 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Limpieza incluida</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Seguro RC</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Garantía escrita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicios Profesionales de Pintura en Valencia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Como <strong>empresa de pintura profesional en Valencia</strong>, ofrecemos servicios completos de pintura interior, exterior, quitar gotelé, impermeabilización y mucho más. Trabajamos en <strong>pisos, casas, chalets, locales comerciales y comunidades de vecinos</strong> en Valencia capital y toda el área metropolitana.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestro equipo de <strong>pintores profesionales certificados</strong> utiliza materiales de primera calidad de marcas líderes como Bruguer, Jotun y Titan. Ofrecemos <strong>presupuestos rápidos en 24 horas</strong>, limpieza total incluida y <strong>garantía por escrito</strong> en todos nuestros trabajos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Quitar Gotelé */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Brush className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Quitar Gotelé</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Eliminamos el gotelé de techos y paredes con sistema sin polvo mediante lijado y aspiración. Incluye enlucido profesional, alisado perfecto y acabado listo para pintar. Ideal para modernizar pisos antiguos en Valencia y aumentar el valor de tu vivienda. Trabajamos con plásticos protectores y limpieza diaria.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sistema sin polvo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Alisado perfecto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Listo para pintar</span>
                  </li>
                </ul>
                <Button asChild size="sm" className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                  <a href="/servicios/quitar-gotele/">Ver detalles</a>
                </Button>
              </CardContent>
            </Card>

            {/* Pintura Interior */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Pintura Interior</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Renovamos el interior completo de pisos, casas y oficinas con pinturas plásticas lavables de máxima calidad. Incluye preparación de superficies, reparación de pequeñas imperfecciones, imprimación y dos manos de acabado. Perfecto para propietarios que quieren actualizar su vivienda antes de vender o alquilar.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Pinturas premium lavables</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Protección de muebles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Limpieza total incluida</span>
                  </li>
                </ul>
                <Button asChild size="sm" className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                  <a href="/servicios/pintura-interior/">Ver detalles</a>
                </Button>
              </CardContent>
            </Card>

            {/* Fachadas */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Pintura Exterior y Fachadas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Protegemos y embellecemos fachadas de edificios con pinturas impermeables anti-moho resistentes al clima de Valencia. Incluye limpieza a presión, reparación de grietas, imprimación y aplicación de revestimientos elásticos. Montamos andamios certificados y contamos con seguro de responsabilidad civil.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Pinturas impermeables</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Andamios certificados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Seguro RC incluido</span>
                  </li>
                </ul>
                <Button asChild size="sm" className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                  <a href="/servicios/pintura-exterior-fachadas/">Ver detalles</a>
                </Button>
              </CardContent>
            </Card>

            {/* Impermeabilización */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Impermeabilización</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Solucionamos problemas de filtraciones en terrazas, balcones y cubiertas con membranas líquidas o láminas asfálticas. Incluye sellado de juntas y desagües, acabados transitables y garantía de 5 años contra filtraciones. Ideal para proteger tu vivienda de humedades y goteras permanentemente.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sistemas certificados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Garantía 5 años</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Acabados transitables</span>
                  </li>
                </ul>
                <Button asChild size="sm" className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                  <a href="/servicios/impermeabilizacion-terrazas/">Ver detalles</a>
                </Button>
              </CardContent>
            </Card>

            {/* Locales Comerciales */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Locales Comerciales</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pintamos locales, tiendas, oficinas y restaurantes con horarios flexibles (noches y fines de semana) para no interrumpir tu negocio. Acabados profesionales con pinturas de alto tránsito, branding corporativo con colores Pantone/RAL exactos y plazos de ejecución rápidos garantizados.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Horarios flexibles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sin interrumpir negocio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Colores corporativos</span>
                  </li>
                </ul>
                <Button asChild size="sm" className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                  <a href="/servicios/pintura-locales-comerciales/">Ver detalles</a>
                </Button>
              </CardContent>
            </Card>

            {/* Comunidades */}
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Comunidades de Vecinos</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pintamos escaleras, portales, garajes y fachadas de comunidades. Nos coordinamos con presidentes y administradores, planificamos por fases para minimizar molestias y aplicamos pinturas duraderas especiales para zonas de tránsito. Incluye señalización, protección de accesos y limpieza diaria.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Coordinación total</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Pinturas extra-resistentes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Trabajo por fases</span>
                  </li>
                </ul>
                <Button asChild size="sm" className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                  <a href="/servicios/pintura-comunidades/">Ver detalles</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <CustomButton 
              variant="orange" 
              size="lg" 
              asChild 
              href="/servicios/"
            >
              Ver todos los servicios
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Nueva sección: ¿Qué servicio necesitas? */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              ¿Qué Servicio de Pintura Necesitas en Valencia?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Si acabas de comprar un <strong>piso en Ruzafa, el centro de Valencia o Benimaclet</strong> y necesitas renovarlo completamente antes de mudarte, nuestro servicio de <a href="/servicios/pintura-interior/" className="text-blue-600 hover:underline font-semibold">pintura interior</a> es tu mejor opción. Incluye preparación de superficies, reparación de pequeñas imperfecciones, imprimación y dos manos de pintura plástica lavable de alta calidad. Trabajamos con las mejores marcas del mercado y dejamos tu hogar impecable.
              </p>
              
              <p>
                Para pisos antiguos con <strong>gotelé en paredes y techos</strong>, ofrecemos un servicio especializado para <a href="/servicios/quitar-gotele/" className="text-blue-600 hover:underline font-semibold">quitar gotelé y alisar paredes</a>. Utilizamos sistemas de lijado sin polvo con aspiración continua y técnicas profesionales de enlucido que dejan las superficies completamente lisas y listas para pintar. Este servicio es perfecto para modernizar tu vivienda y aumentar significativamente su valor en el mercado inmobiliario de Valencia.
              </p>
              
              <p>
                Si tienes una <strong>terraza en Patraix, Campanar o cualquier zona de Valencia</strong> con problemas de filtraciones o humedades, nuestro servicio de <a href="/servicios/impermeabilizacion-terrazas/" className="text-blue-600 hover:underline font-semibold">impermeabilización de terrazas</a> soluciona definitivamente estos problemas. Aplicamos membranas líquidas o láminas asfálticas de alta calidad, sellamos juntas y desagües, y ofrecemos garantía de 5 años contra filtraciones.
              </p>
              
              <p>
                Para <strong>fachadas de edificios, chalets o locales comerciales</strong> que han perdido color o presentan moho y desconchones, realizamos <a href="/servicios/pintura-exterior-fachadas/" className="text-blue-600 hover:underline font-semibold">pintura exterior y rehabilitación de fachadas</a> con pinturas especiales impermeables y transpirables que protegen contra la lluvia, el sol y la contaminación de Valencia. Montamos andamios certificados y contamos con seguro de responsabilidad civil.
              </p>
              
              <p>
                Si tienes un <strong>local comercial en el centro de Valencia</strong> o en zonas comerciales y necesitas renovarlo sin cerrar tu negocio, ofrecemos <a href="/servicios/pintura-locales-comerciales/" className="text-blue-600 hover:underline font-semibold">pintura de locales comerciales</a> con horarios flexibles en noches y fines de semana, acabados corporativos profesionales y plazos de ejecución rápidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Excellence Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Los mejores pintores de Valencia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformamos tu hogar con la máxima calidad profesional. Garantía escrita, 
              materiales premium y resultados que superan expectativas.
            </p>
          </div>

          {/* Content layout - Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              {featureImage ? (
                <figure className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={featureImage.src}
                    alt="Pintor aplicando pintura de interior"
                    loading="lazy"
                    width={featureImage.width}
                    height={featureImage.height}
                    className="w-full h-auto object-cover"
                  />

                </figure>
              ) : (
                <div className="relative overflow-hidden rounded-2xl shadow-xl">

                  <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] bg-gradient-to-r from-orange-400 to-orange-600"></div>
                </div>
              )}
            </div>

            {/* Right side - Text content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 h-[300px] sm:h-[400px] md:h-[450px] flex flex-col justify-center">
                <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4 md:space-y-6">
                  <p>
                    Si buscas <strong>pintores de confianza en Valencia capital y provincia</strong>, somos tu mejor opción. Realizamos trabajos de <a href="/servicios/pintura-interior/" className="text-blue-600 hover:underline"><strong>pintura en viviendas</strong></a>, <a href="/servicios/pintura-exterior-fachadas/" className="text-blue-600 hover:underline"><strong>fachadas</strong></a>, <a href="/servicios/pintura-locales-comerciales/" className="text-blue-600 hover:underline"><strong>locales comerciales</strong></a> y comunidades, además de ofrecer <a href="/servicios/impermeabilizacion-terrazas/" className="text-blue-600 hover:underline"><strong>impermeabilización</strong></a> de terrazas y superficies exteriores para protegerlas del desgaste.
                  </p>
                  
                  <p>
                    Usamos <strong>materiales de alta calidad</strong> y ofrecemos <strong>garantía escrita</strong> en cada proyecto. <strong>Pide tu presupuesto gratuito en menos de 24 horas</strong> y descubre un servicio profesional, cercano y con la mejor relación calidad-precio. Mira ejemplos de nuestro trabajo en <a href="/trabajos/" className="text-blue-600 hover:underline"><strong>proyectos realizados</strong></a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Por qué elegirnos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Por Qué Elegirnos Como Tus Pintores en Valencia
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Con más de <strong>10 años de experiencia</strong> trabajando como <strong>empresa de pintura en Valencia</strong>, hemos ayudado a cientos de familias, negocios y comunidades a transformar sus espacios con resultados impecables. Nuestro equipo de <strong>pintores profesionales certificados</strong> está formado continuamente en las últimas técnicas y materiales del sector, lo que nos permite ofrecer soluciones modernas y duraderas adaptadas a cada proyecto.
              </p>
              
              <p>
                Sabemos que contratar <strong>pintores fiables en Valencia</strong> es una decisión importante, por eso nos esforzamos en ser transparentes desde el primer contacto. Te ofrecemos <strong>presupuesto gratuito en menos de 24 horas</strong>, con todos los detalles incluidos: materiales, mano de obra, plazos y garantías. No trabajamos con precios cerrados por teléfono: preferimos visitar tu proyecto para evaluar el estado real de las superficies y darte un precio justo y realista.
              </p>
              
              <p>
                Como <strong>empresa de pintura profesional</strong>, nos comprometemos a cumplir los plazos acordados y a mantener tu espacio limpio durante toda la obra. Protegemos suelos y muebles, aspiramos el polvo diariamente y realizamos una limpieza final completa. Además, todos nuestros trabajos incluyen <strong>garantía por escrito</strong>: 2 años en pintura interior, 3 años en exteriores, y 5 años en impermeabilizaciones.
              </p>
              
              <p>
                Trabajamos exclusivamente con <strong>materiales de alta calidad</strong> de marcas líderes como Bruguer, Jotun, Sikkens y Titan porque sabemos que una buena pintura no solo se ve mejor, sino que dura mucho más tiempo. Además, contamos con <strong>seguro de responsabilidad civil vigente</strong> y cumplimos toda la normativa de prevención de riesgos laborales.
              </p>
            </div>
            
            {/* Grid de beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Más de 10 años de experiencia</h3>
                  <p className="text-sm text-gray-600">Pintores profesionales certificados en Valencia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Presupuesto en 24 horas</h3>
                  <p className="text-sm text-gray-600">Gratuito, detallado y sin compromiso</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Limpieza total incluida</h3>
                  <p className="text-sm text-gray-600">Protección de muebles y aspirado diario</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Garantía por escrito</h3>
                  <p className="text-sm text-gray-600">Hasta 5 años según el servicio</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Materiales premium</h3>
                  <p className="text-sm text-gray-600">Bruguer, Jotun, Sikkens y Titan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Building className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Valencia y área metropolitana</h3>
                  <p className="text-sm text-gray-600">Servicio en toda la provincia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Necesitas un presupuesto?
          </h2>
          <p className="text-xl mb-8 text-white">
            Te respondemos en menos de 24 horas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="orange"
              size="lg"
              asChild
              href="/presupuesto"
            >
              Pedir presupuesto gratis
            </CustomButton>
            <CustomButton
              variant="blue"
              size="lg"
              asChild
              href="tel:+34722208131"
              className="flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>722 208 131</span>
            </CustomButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas Frecuentes sobre Nuestros Servicios de Pintura en Valencia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resolvemos las dudas más comunes de nuestros clientes sobre servicios, precios, materiales y garantías.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cuánto tiempo tardáis en pintar un piso en Valencia?
                </h3>
                <p className="text-muted-foreground">
                  El tiempo depende del tamaño y estado del piso. Un piso estándar de 70-80 m² suele llevarnos entre 4 y 6 días laborables, incluyendo preparación de superficies, dos manos de pintura y limpieza final. Si además hay que quitar gotelé, el plazo se alarga unos 2-3 días más. Te daremos un calendario exacto en el presupuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cuánto cuesta pintar un piso por metro cuadrado en Valencia?
                </h3>
                <p className="text-muted-foreground">
                  El precio se calcula según la superficie a pintar, el tipo de trabajo (interior, exterior, quitar gotelé), el estado de las paredes y la calidad de pintura elegida. Como orientación, la pintura interior puede costar entre 8-15€/m² dependiendo del estado inicial. Siempre hacemos una visita previa gratuita para evaluar el proyecto y darte un presupuesto cerrado sin sorpresas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Los materiales están incluidos en el precio?
                </h3>
                <p className="text-muted-foreground">
                  Sí, todos nuestros presupuestos incluyen materiales de primera calidad salvo que se indique lo contrario. Trabajamos con pinturas de marcas líderes como Bruguer, Jotun, Sikkens y Titan. Si prefieres aportar tú la pintura o elegir una gama superior, te ajustamos el presupuesto deduciendo el coste del material.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Trabajáis también en fines de semana?
                </h3>
                <p className="text-muted-foreground">
                  Sí, especialmente en proyectos de locales comerciales donde es necesario no interrumpir la actividad del negocio. En viviendas particulares solemos trabajar de lunes a viernes, pero podemos adaptar horarios si tienes necesidades especiales. Consúltanos tu situación y buscaremos la mejor solución.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cómo se organiza la pintura de una comunidad de vecinos?
                </h3>
                <p className="text-muted-foreground">
                  Nos coordinamos directamente con el presidente o administrador de la comunidad para planificar los trabajos por fases, minimizando molestias a los vecinos. Colocamos señalización, protegemos accesos y limpiamos diariamente. Enviamos informes de avance y fotos para mantener informada a la comunidad durante todo el proceso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿En qué zonas de Valencia trabajáis?
                </h3>
                <p className="text-muted-foreground">
                  Trabajamos en toda Valencia capital (Ruzafa, El Carmen, Benimaclet, Campanar, Patraix, Benicalap, Mestalla, etc.) y en toda el área metropolitana: Torrent, Mislata, Paterna, Burjassot, Manises, Xirivella, Aldaia, Quart de Poblet y poblaciones cercanas. Si estás fuera de esta zona, consúltanos y valoraremos tu caso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Dais factura y garantía por escrito?
                </h3>
                <p className="text-muted-foreground">
                  Sí, siempre. Somos una empresa legal en Valencia con todos los permisos al día. Emitimos factura oficial con IVA y ofrecemos garantía por escrito en todos nuestros trabajos: 2 años en pintura interior, 3 años en exteriores y 5 años en impermeabilizaciones. Además, contamos con seguro de responsabilidad civil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
