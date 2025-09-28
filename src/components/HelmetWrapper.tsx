import React from 'react';

// Wrapper que desactiva Helmet cuando estamos en Astro
export const Helmet = ({ children, ...props }: any) => {
  // En Astro, no renderizamos nada porque el SEO se maneja en el layout
  return null;
};

export const HelmetProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Helmet; 