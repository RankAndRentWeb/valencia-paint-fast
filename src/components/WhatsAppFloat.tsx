import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/34722208131?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20de%20pintura"
        aria-label="Abrir WhatsApp para chatear"
        title="Abrir WhatsApp para chatear"
        className="inline-flex items-center justify-center rounded-full shadow-cta
                   bg-white text-blue-500 border border-blue-500 transition-colors
                   hover:bg-blue-500 hover:text-white focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
                   w-14 h-14"
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
