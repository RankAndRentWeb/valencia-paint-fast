// App.tsx simplificado - Solo providers para React Islands
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = {
  defaultOptions: {
    queries: { staleTime: 60 * 1000 }
  }
};

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      {import.meta.env.PROD && <SpeedInsights />}
    </div>
  );
}