import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" aria-label="Información de pie de página">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2" aria-label="Marca">
              <img
                src="/pintores-valencia-logo.png"
                width={32}
                height={32}
                alt=""
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold">Pintores en Valencia</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empresa profesional de pintores en Valencia capital y provincia.
              Trabajos de calidad con garantía escrita.
            </p>
          </div>

          {/* Contact Info */}
          <address className="not-italic space-y-4" aria-label="Datos de contacto">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a
                  href="tel:722208131"
                  className="hover:text-accent transition-colors"
                  aria-label="Llamar al 722 208 131"
                >
                  722 208 131
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a
                  href="mailto:edgarberriojimenez@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  edgarberriojimenez@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" aria-hidden="true" />
                <span>Valencia, España</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5" aria-hidden="true" />
                <span>L–S 8:00–20:00</span>
              </li>
            </ul>
          </address>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Servicios</h4>
            <nav aria-label="Enlaces de servicios">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/quitar-gotele-alisar-paredes" className="hover:text-accent transition-colors">
                    Quitar gotelé
                  </Link>
                </li>
                <li>
                  <Link to="/pintura-interior-pisos-casas" className="hover:text-accent transition-colors">
                    Pintura interior
                  </Link>
                </li>
                <li>
                  <Link to="/pintura-exterior-fachadas" className="hover:text-accent transition-colors">
                    Fachadas exteriores
                  </Link>
                </li>
                <li>
                  <Link to="/presupuesto" className="hover:text-accent transition-colors">
                    Pedir presupuesto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <nav aria-label="Enlaces legales">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/aviso-legal" className="hover:text-accent transition-colors">
                    Aviso legal
                  </Link>
                </li>
                <li>
                  <Link to="/politica-privacidad" className="hover:text-accent transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/politica-cookies" className="hover:text-accent transition-colors">
                    Política de cookies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80 gap-2">
            <p>
              &copy; {new Date().getFullYear()} Pintores en Valencia. Todos los derechos
              reservados.
            </p>
            <p>Empresa profesional de pintores en Valencia y provincia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
