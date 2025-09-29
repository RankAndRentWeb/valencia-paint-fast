// src/components/SEOHead.tsx
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  noindex?: boolean;
  schema?: object | object[];
  ogImage?: string;
  /** Preload de imágenes críticas (ej. hero) para mejorar LCP */
  preloadImages?: string[];
};

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  keywords,
  noindex,
  schema,
  ogImage,
  preloadImages,
}: Props) {
  const robots = noindex ? "noindex,nofollow" : "index,follow";

  return (
    <>
      <Helmet>
        <html lang="es-ES" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <meta name="language" content="es" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Pintores en Valencia" />
        <meta property="og:image" content={ogImage || "https://pintores-valencia.com/og-home.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pintores profesionales en Valencia - Presupuesto gratis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage || "https://pintores-valencia.com/og-home.jpg"} />

        {/* Preload de imágenes críticas (mejora LCP en móvil) */}
        {preloadImages?.map((src, i) => (
          <link key={i} rel="preload" as="image" href={src} />
        ))}
      </Helmet>

      {schema && (
        <>
          {Array.isArray(schema) ? (
            schema.map((s, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
              />
            ))
          ) : (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          )}
        </>
      )}
    </>
  );
}
