import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/pintores-valencia-logo-fondo-blanco.png" 
                alt="Logo Pintores en Valencia" 
                className="w-8 h-8 rounded-lg"
              />
              <h3 className="text-lg font-bold">Pintores en Valencia</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empresa profesional de pintores en Valencia capital y provincia. 
              Trabajos de calidad con garantía escrita.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+34722208131" className="hover:text-accent transition-colors">
                  +34 722 208 131
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:edgarberriojimenez@gmail.com" className="hover:text-accent transition-colors">
                  edgarberriojimenez@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Valencia, España</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <span>Lun–Sáb 08:00–20:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Servicios</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/quitar-gotele-alisar-paredes" className="block hover:text-accent transition-colors">
                Quitar gotelé
              </Link>
              <Link to="/pintura-interior-pisos-casas" className="block hover:text-accent transition-colors">
                Pintura interior
              </Link>
              <Link to="/pintura-exterior-fachadas" className="block hover:text-accent transition-colors">
                Fachadas exteriores
              </Link>
              <Link to="/presupuesto" className="block hover:text-accent transition-colors">
                Pedir presupuesto
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/aviso-legal" className="block hover:text-accent transition-colors">
                Aviso legal
              </Link>
              <Link to="/politica-privacidad" className="block hover:text-accent transition-colors">
                Política de privacidad
              </Link>
              <Link to="/politica-cookies" className="block hover:text-accent transition-colors">
                Política de cookies
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Pintores en Valencia. Todos los derechos reservados.</p>
            <p>Empresa profesional de pintores en Valencia y provincia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;