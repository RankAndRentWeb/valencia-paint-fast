import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos lo antes posible.",
    });
    setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEOHead
        title="Contacto - Pintores en Valencia"
        description="Contacta con Pintores en Valencia. Teléfono 722 208 131, email, WhatsApp. Horario L-S 8:00-20:00. Presupuesto gratis en Valencia."
        keywords="contacto pintores valencia, telefono pintores, presupuesto pintura valencia"
        canonicalUrl="https://pintores-valencia.com/contacto"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Contacto" }]} />
        
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contacta con nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos por teléfono, WhatsApp, email o 
              rellena el formulario para un presupuesto personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-hero text-primary-foreground">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <Phone className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Teléfono</h3>
                        <p className="text-primary-foreground/90 mb-2">
                          Llámanos directamente para consultas urgentes
                        </p>
                        <Button asChild className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 transition-colors">
                          <a href="tel:+34722208131" className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>722 208 131</span>
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-500 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="text-primary-foreground/90 mb-2">
                          Envíanos fotos y recibe presupuesto rápido
                        </p>
                        <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                          <a href="https://wa.me/34722208131" className="flex items-center space-x-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>Abrir WhatsApp</span>
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <Mail className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-primary-foreground/90 mb-2">
                          Para consultas detalladas y presupuestos
                        </p>
                        <a 
                          href="mailto:info@pintores-valencia.com"
                          className="text-accent hover:underline break-all"
                        >
                          info@pintores-valencia.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <MapPin className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Zona de trabajo</h3>
                        <p className="text-primary-foreground/90">
                          Valencia capital y provincia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <Clock className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horario</h3>
                        <p className="text-primary-foreground/90">
                          Lunes a Sábado: 8:00 - 20:00
                        </p>
                        <p className="text-sm text-primary-foreground/70">
                          Emergencias: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Solicita tu presupuesto gratuito</CardTitle>
                  <p className="text-muted-foreground">
                    Rellena el formulario y te contactaremos en menos de 24 horas
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre y apellidos"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="Tu número de teléfono"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Cuéntanos tu proyecto *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Describe qué necesitas: tipo de trabajo, metros cuadrados, zona, etc."
                        rows={5}
                      />
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Al enviar este formulario aceptas que te contactemos para ofrecerte 
                      un presupuesto personalizado. Tus datos están protegidos según la LOPD.
                    </div>

                    <Button type="submit" className="w-full bg-gradient-cta shadow-cta">
                      Enviar solicitud de presupuesto
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">💡 Consejo profesional</h3>
                <p className="text-sm text-muted-foreground">
                  Para un presupuesto más preciso, envíanos fotos por WhatsApp del espacio 
                  a pintar junto con las medidas aproximadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;