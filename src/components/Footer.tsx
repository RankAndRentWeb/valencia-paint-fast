
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
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
              <h3 className="text-lg font-bold text-white">Pintores en Valencia</h3>
            </div>
            <p className="text-sm text-gray-200">
              Empresa profesional de pintores en Valencia capital y provincia. 
              Trabajos de calidad con garantía escrita.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+34722208131" className="text-white hover:text-accent transition-colors">
                  +34 722 208 131
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:edgarberriojimenez@gmail.com" className="text-white hover:text-accent transition-colors">
                  edgarberriojimenez@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-white" />
                <span className="text-white">Valencia, España</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-white" />
                <span className="text-white">Lun–Sáb 08:00–20:00</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Servicios</h4>
            <nav className="space-y-2 text-sm">
              <a href="/quitar-gotele-alisar-paredes" className="block text-white hover:text-accent transition-colors">
                Quitar gotelé y alisar paredes
              </a>
              <a href="/pintura-interior-pisos-casas" className="block text-white hover:text-accent transition-colors">
                Pintura interior
              </a>
              <a href="/pintura-exterior-fachadas" className="block text-white hover:text-accent transition-colors">
                Pintura exterior y fachadas
              </a>
              <a href="/lacado-puertas-armarios-muebles" className="block text-white hover:text-accent transition-colors">
                Lacado de puertas
              </a>
              <a href="/impermeabilizacion-terrazas-balcones" className="block text-white hover:text-accent transition-colors">
                Impermeabilización
              </a>
              <a href="/pintura-comunidades-edificios" className="block text-white hover:text-accent transition-colors">
                Pintura de comunidades
              </a>
            </nav>
          </div>

          {/* Enlaces importantes */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Enlaces</h4>
            <nav className="space-y-2 text-sm">
              <a href="/precios" className="block text-white hover:text-accent transition-colors">
                Precios
              </a>
              <a href="/quienes-somos" className="block text-white hover:text-accent transition-colors">
                Quiénes somos
              </a>
              <a href="/trabajos" className="block text-white hover:text-accent transition-colors">
                Trabajos realizados
              </a>
              <a href="/zonas" className="block text-white hover:text-accent transition-colors">
                Zonas de trabajo
              </a>
              <a href="/blog" className="block text-white hover:text-accent transition-colors">
                Blog
              </a>
              <a href="/presupuesto" className="block text-white hover:text-accent transition-colors">
                Presupuesto gratis
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <nav className="space-y-2 text-sm">
              <a href="/aviso-legal" className="block text-white hover:text-accent transition-colors">
                Aviso legal
              </a>
              <a href="/politica-privacidad" className="block text-white hover:text-accent transition-colors">
                Política de privacidad
              </a>
              <a href="/politica-cookies" className="block text-white hover:text-accent transition-colors">
                Política de cookies
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-white">&copy; {new Date().getFullYear()} Pintores en Valencia. Todos los derechos reservados.</p>
            <p className="text-white">Empresa profesional de pintores en Valencia y provincia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
