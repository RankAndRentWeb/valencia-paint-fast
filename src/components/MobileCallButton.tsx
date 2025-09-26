import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50 md:hidden">
      <a
        href="tel:722208131"
        aria-label="Llamar al 722 208 131"
        title="Llamar al 722 208 131"
        className="inline-flex items-center justify-center rounded-full
                   bg-[hsl(var(--accent))] text-white shadow-cta
                   hover:bg-[hsl(var(--accent))/0.9] transition-colors
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                   focus-visible:ring-blue-500 w-14 h-14"
      >
        <Phone className="w-7 h-7" aria-hidden="true" />
        <span className="sr-only">Llamar ahora</span>
      </a>
    </div>
  );
};

export default MobileCallButton;
