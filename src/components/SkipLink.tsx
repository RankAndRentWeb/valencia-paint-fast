// src/components/SkipLink.tsx
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Saltar al contenido principal
    </a>
  );
}
