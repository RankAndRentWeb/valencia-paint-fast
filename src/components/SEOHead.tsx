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
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={robots} />
        <meta name="language" content="es" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {/* Preload de imágenes críticas (mejora LCP en móvil) */}
        {preloadImages?.map((src, i) => (
          <link key={i} rel="preload" as="image" href={src} />
        ))}
      </Helmet>

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
