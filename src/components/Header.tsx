
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b bg-background sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + marca */}
        <Link
          to="/"
          aria-label="Pintores en Valencia — ir al inicio"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          <img
            src="/pintores-valencia-logo.png"
            width={40}
            height={40}
            alt=""
            aria-hidden="true"
            className="rounded-md"
            decoding="async"
            loading="eager"
          />
          <span className="font-semibold">Pintores en Valencia</span>
        </a>

        {/* Navegación Desktop */}
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Inicio
              </a>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Servicios
              </a>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Blog
              </a>
            </li>
            <li>
              <NavLink
                to="/precios"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Precios
              </a>
            </li>
            <li>
              <NavLink
                to="/trabajos"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Trabajos
              </a>
            </li>
            <li>
              <NavLink
                to="/quienes-somos"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Quiénes somos
              </a>
            </li>
            <li>
              <NavLink
                to="/presupuesto"
                className="inline-flex items-center rounded-md px-3 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta"
              >
                Presupuesto
              </a>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side - Phone & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Phone Button */}
          <a
            href="tel:722208131"
            className="hidden md:inline-flex items-center gap-2 rounded-md px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Llamar al 722 208 131"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>722 208 131</span>
          </a>

          {/* Mobile Phone Button */}
          <a
            href="tel:722208131"
            className="md:hidden inline-flex items-center gap-2 rounded-md px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
            aria-label="Llamar al 722 208 131"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
          </a>

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
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Inicio
              </a>
              
              <NavLink
                to="/servicios"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Servicios
              </a>
              
              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Blog
              </a>
              
              <NavLink
                to="/precios"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Precios
              </a>
              
              <NavLink
                to="/trabajos"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Trabajos
              </a>
              
              <NavLink
                to="/quienes-somos"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Quiénes somos
              </a>
              
              <NavLink
                to="/presupuesto"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Presupuesto
              </a>
              
              <NavLink
                to="/contacto"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`
                }
              >
                Contacto
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
