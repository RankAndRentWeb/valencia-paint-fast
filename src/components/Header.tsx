import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/zonas", label: "Zonas" },
    { href: "/precios", label: "Precios" },
    { href: "/trabajos", label: "Trabajos" },
    { href: "/presupuesto", label: "Presupuesto" },
    { href: "/contacto", label: "Contacto" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/pintores-valencia-logo.png.png" 
                alt="Pintores Valencia Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Pintores en Valencia</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Profesionales · Rápidos · Garantía</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Right side - Phone & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop Phone Button */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Valencia, España</span>
              </div>
              <Button asChild variant="default" size="sm" className="bg-gradient-cta shadow-cta">
                <a href="tel:722208131" className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>722 208 131</span>
                </a>
              </Button>
            </div>

            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;