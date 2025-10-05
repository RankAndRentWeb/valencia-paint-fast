import SEOHead from '@/components/SEOHead';

const PoliticaPrivacidad = () => {
  return (
    <>
      <SEOHead
        title="Política de Privacidad - Pintores en Valencia"
        description="Política de privacidad y protección de datos de Pintores en Valencia. Información sobre el tratamiento de datos personales según RGPD."
        canonicalUrl="https://pintores-valencia.com/politica-privacidad"
        noindex={true}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Información sobre Protección de Datos</h2>
              <p className="mb-4">
                En cumplimiento de lo dispuesto en el Reglamento General de Protección de Datos (RGPD) 2016/679, 
                le informamos sobre el tratamiento de los datos personales que nos proporciona.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">Responsable del tratamiento:</h3>
                <ul className="space-y-1">
                  <li><strong>Responsable:</strong> Pintores en Valencia</li>
                  <li><strong>Teléfono:</strong> +34 722 208 131</li>
                  <li><strong>Email:</strong> edgarberriojimenez@gmail.com</li>
                  <li><strong>Domicilio:</strong> Valencia, España</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Finalidad del Tratamiento</h2>
              <p className="mb-4">Los datos personales que nos proporcione serán tratados con las siguientes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Gestión de consultas y presupuestos:</strong> Para atender sus solicitudes de información y elaborar presupuestos personalizados.</li>
                <li><strong>Prestación de servicios:</strong> Para la correcta prestación de nuestros servicios de pintura profesional.</li>
                <li><strong>Comunicación comercial:</strong> Para enviarle información sobre nuestros servicios y ofertas (solo con su consentimiento previo).</li>
                <li><strong>Cumplimiento legal:</strong> Para cumplir con las obligaciones legales aplicables a nuestra actividad.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Base Jurídica</h2>
              <p className="mb-4">La base jurídica para el tratamiento de sus datos es:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
                <li><strong>Ejecución contractual:</strong> Para la prestación de servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Para la gestión de consultas y atención al cliente</li>
                <li><strong>Cumplimiento legal:</strong> Para cumplir obligaciones fiscales y contables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Categorías de Datos</h2>
              <p className="mb-4">Los tipos de datos personales que tratamos son:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Datos identificativos: nombre, apellidos, teléfono, email</li>
                <li>Datos de contacto: dirección, localidad</li>
                <li>Datos del proyecto: tipo de trabajo, superficie, presupuesto</li>
                <li>Datos de navegación: dirección IP, cookies (según nuestra política de cookies)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Conservación de Datos</h2>
              <p className="mb-4">
                Sus datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad 
                para la que se recogieron y, en cualquier caso, durante los plazos establecidos por la legislación aplicable:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Datos de clientes: 6 años (obligaciones fiscales)</li>
                <li>Datos de consultas: 2 años desde la última comunicación</li>
                <li>Comunicaciones comerciales: hasta que retire su consentimiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Derechos del Interesado</h2>
              <p className="mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Acceso:</strong> Solicitar información sobre los datos que tratamos</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento en determinados casos</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento por motivos de su situación particular</li>
              </ul>
              <p className="mb-4">
                Para ejercer estos derechos, puede contactarnos en: <strong>edgarberriojimenez@gmail.com</strong> 
                o <strong>+34 722 208 131</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Comunicación de Datos</h2>
              <p className="mb-4">
                Sus datos personales no serán comunicados a terceros, salvo obligación legal o consentimiento expreso. 
                En caso de utilizar proveedores de servicios (hosting, software, etc.), estos actuarán como encargados 
                del tratamiento bajo nuestras instrucciones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Medidas de Seguridad</h2>
              <p className="mb-4">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus 
                datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Reclamaciones</h2>
              <p className="mb-4">
                Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, puede presentar 
                una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Modificaciones</h2>
              <p className="mb-4">
                Nos reservamos el derecho a modificar esta política de privacidad para adaptarla a cambios 
                legislativos o jurisprudenciales, así como a prácticas de la industria. Le notificaremos 
                dichos cambios a través de nuestro sitio web.
              </p>
            </section>

            <div className="mt-12 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center">
                <strong>Última actualización:</strong> Septiembre 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidad;
