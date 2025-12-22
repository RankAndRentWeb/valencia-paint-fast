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
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "HousePainter"],
    "@id": "https://pintores-valencia.com/#business",
    name: "Pintores en Valencia",
    description: "Empresa de pintura profesional en Valencia. Nos desplazamos a toda la ciudad y alrededores para servicios de pintura de interiores, exteriores, fachadas, comunidades y más.",
    url: "https://pintores-valencia.com",
    image: "https://pintores-valencia.com/og-home.webp",
    telephone: "+34722208131",
    email: "info@pintores-valencia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Comunitat Valenciana",
      addressCountry: "ES",
    },
    openingHours: ["Mo-Sa 08:00-20:00"],
    priceRange: "€€",
    areaServed: [
      {
        "@type": "City",
        name: "Valencia",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Comunitat Valenciana"
        }
      },
      // Centro histórico y Ciutat Vella
      { "@type": "PostalCodeSpecification", postalCode: "46001", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46002", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46003", addressLocality: "Valencia", addressCountry: "ES" },
      // Eixample
      { "@type": "PostalCodeSpecification", postalCode: "46004", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46005", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46006", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46007", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46008", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46009", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46010", addressLocality: "Valencia", addressCountry: "ES" },
      // Extramurs y otras zonas
      { "@type": "PostalCodeSpecification", postalCode: "46011", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46012", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46013", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46014", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46015", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46016", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46017", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46018", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46019", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46020", addressLocality: "Valencia", addressCountry: "ES" },
      // Campanar, Benimaclet, Poblados marítimos
      { "@type": "PostalCodeSpecification", postalCode: "46021", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46022", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46023", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46024", addressLocality: "Valencia", addressCountry: "ES" },
      { "@type": "PostalCodeSpecification", postalCode: "46025", addressLocality: "Valencia", addressCountry: "ES" }
    ],
    knowsAbout: [
      "Pintura de interiores y exteriores en Valencia",
      "Eliminación de gotelé y alisado de paredes",
      "Impermeabilización de terrazas y cubiertas",
      "Rehabilitación y pintura de fachadas",
      "Pintura de comunidades de vecinos",
      "Instalación de papel pintado y vinilos decorativos",
      "Lacado de puertas y carpintería",
      "Pintura de locales comerciales",
      "Barnizado de madera",
      "Tratamientos anti-humedad",
      "Reparación de grietas y fisuras",
      "Aplicación de revestimientos impermeables"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      "telephone": "+34722208131",
      "contactType": "customer service",
      "areaServed": "ES",
      "availableLanguage": ["Spanish", "Valencian"]
    }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Pintura en Valencia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pintura Interior",
            description: "Pintura completa de interiores con materiales premium y garantía",
            url: "https://pintores-valencia.com/servicios/pintura-interior/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Interior Painting",
            provider: {
              "@id": "https://pintores-valencia.com/#business"
            }
          },
          price: "12.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Quitar Gotelé",
            description: "Eliminación de gotelé y alisado de paredes sin polvo",
            url: "https://pintores-valencia.com/servicios/quitar-gotele/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Wall Smoothing",
            provider: {
              "@id": "https://pintores-valencia.com/#business"
            }
          },
          price: "10.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pintura Exterior y Fachadas",
            description: "Pintura exterior resistente al clima con andamiaje incluido",
            url: "https://pintores-valencia.com/servicios/pintura-exterior-fachadas/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Exterior Painting",
            provider: {
              "@id": "https://pintores-valencia.com/#business"
            }
          },
          price: "15.00",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Impermeabilización",
            description: "Impermeabilización de terrazas y fachadas con garantía",
            url: "https://pintores-valencia.com/servicios/impermeabilizacion-terrazas/",
            areaServed: {
              "@type": "City",
              name: "Valencia",
              sameAs: "https://www.wikidata.org/wiki/Q8818"
            },
            serviceType: "Waterproofing",
            provider: {
              "@id": "https://pintores-valencia.com/#business"
            }
          },
          price: "25.00",
          priceCurrency: "EUR"
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
              Presupuesto en menos de 24h
            </p>
            <p className="text-xl mb-12 text-white/90">
              Envíanos unas fotos y te damos precio | +10 años de experiencia | Garantía escrita
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
        Nuestros Servicios de Pintura en Valencia
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
        Pintamos pisos, casas, locales y comunidades en Valencia con <strong>materiales de calidad</strong> y sin complicarte la vida. Envíanos unas fotos de lo que necesitas y te mandamos un presupuesto sin que tengas que esperarnos en casa.
      </p>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Como <strong>pintores profesionales en Valencia</strong>, trabajamos con pinturas de marcas reconocidas (Bruguer, Jotun, Titan) y nos encargamos de todo: desde preparar las superficies hasta dejarte el espacio limpio. Factura oficial y <strong>garantía por escrito</strong> en cada proyecto.
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
            Quitamos el gotelé de techos y paredes en Valencia sin llenar tu casa de polvo. Usamos lijadoras con aspiración continua, enlucimos, alisamos y dejamos todo listo para pintar. Perfecto para darle un aire nuevo a pisos antiguos. Protegemos muebles y limpiamos al terminar cada día.
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
          <Button
            asChild
            size="sm"
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
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
            Pintamos pisos, casas y oficinas en Valencia con pinturas lavables de calidad. Preparamos las paredes, tapamos grietas pequeñas, imprimamos y damos dos manos de acabado. Ideal si quieres renovar tu casa antes de venderla, alquilarla o simplemente disfrutarla como nueva.
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
          <Button
            asChild
            size="sm"
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
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
            Pintamos fachadas en Valencia con productos impermeables y anti-moho que aguantan bien el clima mediterráneo. Limpiamos a presión, arreglamos grietas, imprimamos y aplicamos revestimientos elásticos. Montamos andamios certificados y tenemos seguro de responsabilidad civil.
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
          <Button
            asChild
            size="sm"
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
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
            Arreglamos filtraciones en terrazas, balcones y cubiertas en Valencia aplicando membranas líquidas o láminas asfálticas de calidad. Sellamos juntas y desagües, y dejamos acabados por los que puedes andar sin problema. Protegemos tu casa de humedades y goteras con <strong>garantía por escrito</strong>.
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 mb-4">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Sistemas certificados</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Garantía por escrito</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Acabados transitables</span>
            </li>
          </ul>
          <Button
            asChild
            size="sm"
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
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
            Pintamos tu local, tienda, oficina o restaurante en Valencia en horarios que no te compliquen (noches o fines de semana). Usamos pinturas resistentes al tránsito, igualamos colores corporativos exactos (Pantone/RAL) y cumplimos los plazos que acordemos.
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
          <Button
            asChild
            size="sm"
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
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
            Pintamos escaleras, portales, garajes y fachadas de comunidades de vecinos en Valencia. Hablamos con presidentes y administradores, trabajamos por fases para molestar lo menos posible y usamos pinturas resistentes para zonas de mucho paso. Señalizamos, protegemos accesos y limpiamos cada día.
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
          <Button
            asChild
            size="sm"
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
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
              ¿Qué Necesitas Pintar?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Acabas de comprar un piso en Ruzafa o Benimaclet</strong> y quieres darle una mano de pintura antes de mudarte? Con nuestro servicio de <a href="/servicios/pintura-interior/" className="text-blue-600 hover:underline font-semibold">pintura interior</a> renovamos tu casa completa: preparamos paredes, tapamos imperfecciones, imprimamos y damos dos manos de acabado con pinturas lavables de calidad. Envíanos fotos y te decimos cuánto cuesta sin que tengas que estar en casa esperándonos.
              </p>
              
              <p>
                <strong>¿Tienes un piso antiguo con gotelé?</strong> Si esas paredes con textura ya no te gustan, podemos <a href="/servicios/quitar-gotele/" className="text-blue-600 hover:underline font-semibold">quitarlo y dejarte todo liso</a>. Lijamos sin llenar de polvo (usamos aspiración), enlucimos y alisamos hasta que quede perfecto para pintar. Es una buena forma de modernizar tu casa y que valga más si decides venderla.
              </p>
              
              <p>
                <strong>¿Se te cuela el agua por la terraza?</strong> Si tienes problemas de filtraciones en Patraix, Campanar o donde sea, nuestro servicio de <a href="/servicios/impermeabilizacion-terrazas/" className="text-blue-600 hover:underline font-semibold">impermeabilización</a> lo arregla de verdad. Aplicamos membranas o láminas de calidad, sellamos juntas y desagües, y te damos <strong>garantía por escrito</strong> para que estés tranquilo.
              </p>
              
              <p>
                <strong>¿Tu fachada tiene moho o se está cayendo la pintura?</strong> Pintamos <a href="/servicios/pintura-exterior-fachadas/" className="text-blue-600 hover:underline font-semibold">fachadas de edificios, chalets y locales</a> con productos impermeables que aguantan bien la lluvia y el sol mediterráneo. Montamos andamios certificados y tenemos seguro de responsabilidad civil.
              </p>
              
              <p>
                <strong>¿Tienes un local o negocio que renovar?</strong> Pintamos <a href="/servicios/pintura-locales-comerciales/" className="text-blue-600 hover:underline font-semibold">locales comerciales</a> en horarios que no te compliquen (noches o fines de semana). Igualamos colores corporativos exactos y cumplimos los plazos que necesites.
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
              Pintores en Valencia que Trabajan Bien
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Usamos buenos materiales, dejamos todo limpio y damos <strong>garantía por escrito</strong>. 
              Sin complicarte: envíanos fotos y te presupuestamos en menos de 24 horas.
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
                    Llevamos años pintando <a href="/servicios/pintura-interior/" className="text-blue-600 hover:underline"><strong>pisos</strong></a>, <a href="/servicios/pintura-exterior-fachadas/" className="text-blue-600 hover:underline"><strong>fachadas</strong></a>, <a href="/servicios/pintura-locales-comerciales/" className="text-blue-600 hover:underline"><strong>locales</strong></a> y comunidades por toda la ciudad y alrededores. También hacemos <a href="/servicios/impermeabilizacion-terrazas/" className="text-blue-600 hover:underline"><strong>impermeabilizaciones</strong></a> para que no se te cuele el agua por la terraza.
                  </p>
                  
                  <p>
                    Trabajamos con materiales de calidad y te damos <strong>garantía por escrito</strong> en cada trabajo. <strong>Envíanos unas fotos de lo que necesitas</strong> y te mandamos presupuesto en menos de 24 horas, sin que tengas que perder tiempo con visitas. Mira ejemplos de trabajos hechos en <a href="/trabajos/" className="text-blue-600 hover:underline"><strong>proyectos realizados</strong></a>.
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
              Por Qué Contratarnos
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Llevamos <strong>más de 10 años</strong> pintando por toda la ciudad y alrededores. Hemos ayudado a cientos de familias, negocios y comunidades a renovar sus espacios con buenos resultados. Nuestro equipo se forma continuamente para estar al día en técnicas y materiales, así que trabajamos bien y con seriedad.
              </p>
              
              <p>
                Sabemos que buscar <strong>un pintor de confianza</strong> no es fácil, por eso somos transparentes desde el principio. <strong>Envíanos unas fotos de lo que necesitas pintar</strong> y te mandamos presupuesto en menos de 24 horas, con todos los detalles: materiales, mano de obra, cuánto tardamos y qué garantía te damos. Sin perder tiempo con visitas ni esperas.
              </p>
              
              <p>
                Cumplimos los plazos que acordamos y dejamos tu casa limpia. Protegemos suelos y muebles, aspiramos el polvo cada día y al terminar lo limpiamos todo a fondo. Todos nuestros trabajos incluyen <strong>garantía por escrito</strong> para que estés tranquilo.
              </p>
              
              <p>
                Usamos <strong>materiales de calidad</strong> de marcas reconocidas (Bruguer, Jotun, Titan) porque una buena pintura se ve mejor y dura más. Además tenemos <strong>seguro de responsabilidad civil</strong> y cumplimos toda la normativa de prevención de riesgos.
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
                  <h3 className="font-semibold text-gray-900 mb-1">Presupuesto por fotos en 24h</h3>
                  <p className="text-sm text-gray-600">Sin desplazamientos, detallado y sin compromiso</p>
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
                  <p className="text-sm text-gray-600">Factura oficial y seguro RC vigente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Materiales de calidad</h3>
                  <p className="text-sm text-gray-600">Bruguer, Jotun y Titan</p>
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
            ¿Quieres saber cuánto cuesta?
          </h2>
          <p className="text-xl mb-8 text-white">
            Envíanos fotos y te presupuestamos en menos de 24h
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
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Las dudas más habituales sobre cómo trabajamos, precios y garantías.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cuánto tardáis en pintar un piso?
                </h3>
                <p className="text-muted-foreground">
                  Depende del tamaño y del estado. Un piso normal de 70-80 m² nos lleva entre 4 y 6 días: preparamos, pintamos dos manos y limpiamos. Si hay que quitar gotelé, sumamos 2-3 días más. Te diremos el calendario exacto cuando te mandemos el presupuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cómo calculais el precio?
                </h3>
                <p className="text-muted-foreground">
                  Depende de la superficie, el tipo de trabajo (interior, exterior, quitar gotelé), el estado de las paredes y la calidad de pintura. Como referencia, pintar el interior de un piso suele estar entre 8-15€/m². <strong>Envíanos unas fotos</strong> de lo que necesitas y te damos un presupuesto cerrado, sin sorpresas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Los materiales están incluidos?
                </h3>
                <p className="text-muted-foreground">
                  Sí, el presupuesto incluye todo: materiales de calidad, mano de obra y limpieza. Trabajamos con pinturas de marcas conocidas (Bruguer, Jotun, Titan). Si quieres aportar tú la pintura o elegir otra gama, te ajustamos el precio sin problema.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Trabajáis en fin de semana?
                </h3>
                <p className="text-muted-foreground">
                  Sí, sobre todo en locales comerciales para no interrumpir el negocio. En casas particulares solemos ir de lunes a viernes, pero si necesitas otro horario (noches, sábados) nos adaptamos. Cuéntanos qué necesitas y buscamos la mejor forma.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Cómo trabajáis en comunidades de vecinos?
                </h3>
                <p className="text-muted-foreground">
                  Hablamos con el presidente o administrador, planificamos por fases para molestar lo mínimo y trabajamos de forma ordenada. Ponemos señales, protegemos accesos y limpiamos cada día. Os vamos mandando fotos y avisando de cómo va todo para que estéis informados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Dónde trabajáis?
                </h3>
                <p className="text-muted-foreground">
                  Por toda la ciudad: Ruzafa, El Carmen, Benimaclet, Campanar, Patraix y demás barrios. También vamos a los pueblos de alrededor (Torrent, Mislata, Paterna, Burjassot, Manises, Xirivella, Aldaia, Quart de Poblet...). Si estás más lejos, cuéntanos y vemos si podemos ir.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Dais factura y garantía?
                </h3>
                <p className="text-muted-foreground">
                  Sí, siempre. Somos una empresa legal con todos los papeles al día. Te damos factura oficial con IVA y <strong>garantía por escrito</strong> en todos los trabajos. Además tenemos seguro de responsabilidad civil para que estés tranquilo.
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
