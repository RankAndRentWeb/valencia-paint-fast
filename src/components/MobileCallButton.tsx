import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallButton = () => {
  return (
    <div className="lg:hidden fixed bottom-20 left-6 z-50">
      <Button
        asChild
        className="bg-gradient-cta shadow-cta rounded-full p-3"
        size="sm"
      >
        <a href="tel:722208131" aria-label="Llamar ahora">
          <Phone className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};

export default MobileCallButton;