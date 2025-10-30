
export default function SiteFooter() {
  return (
    <footer className="w-full bg-blue-600 text-white mt-16">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/pintores-valencia-logo.png" 
                alt="Pintores en Valencia" 
                className="w-8 h-8"
                loading="lazy"
              />
              <h4 className="font-semibold text-lg text-white">Pintores en Valencia</h4>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Especialistas en pintura profesional en Valencia capital y provincia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-semibold text-white mb-4">Navegación</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-blue-100 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/servicios/" className="text-blue-100 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/blogs/" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/precios/" className="text-blue-100 hover:text-white transition-colors">Precios</a></li>
              <li><a href="/contacto/" className="text-blue-100 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-white mb-4">Servicios</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/servicios/pintura-interior/" className="text-blue-100 hover:text-white transition-colors">Pintura Interior</a></li>
              <li><a href="/servicios/quitar-gotele/" className="text-blue-100 hover:text-white transition-colors">Quitar Gotelé</a></li>
              <li><a href="/servicios/" className="text-blue-100 hover:text-white transition-colors">Todos los servicios</a></li>
              <li><a href="/presupuesto/" className="text-white font-medium hover:text-blue-100 transition-colors">Solicitar presupuesto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4">Contacto</h5>
            <div className="space-y-2 text-sm">
              <div>
                <a href="tel:+34722208131" className="text-white font-medium hover:text-blue-100 transition-colors">
                  722 208 131
                </a>
              </div>
              <div>
                <a href="mailto:info@pintores-valencia.com" className="text-blue-100 hover:text-white transition-colors">
                  info@pintores-valencia.com
                </a>
              </div>
              <div className="text-blue-100">Valencia, España</div>
              <div className="text-blue-100">Lun–Sáb 08:00–20:00</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-500 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-blue-100">
              © 2025 Pintores en Valencia. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <a href="/aviso-legal/" className="text-blue-100 hover:text-white transition-colors">
                Aviso Legal
              </a>
              <a href="/politica-privacidad/" className="text-blue-100 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="/politica-cookies/" className="text-blue-100 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
