import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/zonas", label: "Zonas" },
    { href: "/precios", label: "Precios" },
    { href: "/trabajos", label: "Trabajos" },
    { href: "/presupuesto", label: "Presupuesto" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Pintores en Valencia</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Profesionales · Rápidos · Garantía</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Valencia, España</span>
            </div>
            <Button asChild variant="default" size="sm" className="bg-gradient-cta shadow-cta">
              <a href="tel:722208131" className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">722 208 131</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="lg:hidden border-t pt-4 pb-2">
          <div className="grid grid-cols-4 gap-2 text-xs">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-center py-2 px-1 rounded transition-colors ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs mt-2">
            {navItems.slice(4).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-center py-2 px-1 rounded transition-colors ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;