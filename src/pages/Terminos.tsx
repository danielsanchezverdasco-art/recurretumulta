import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { FileText, ArrowLeft } from "lucide-react";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const YEAR = new Date().getFullYear();

export default function TerminosPage() {
  useSeo({
    title: "Términos y Condiciones",
    description: "Términos y condiciones de uso de RecurreTuMulta.online. Servicio de análisis de multas de tráfico DGT con inteligencia artificial.",
    canonical: "/terminos",
    keywords: ["términos condiciones RecurreTuMulta", "condiciones uso servicio multas DGT"],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Términos y Condiciones — RecurreTuMulta.online",
      "url": "https://recurretumulta.online/terminos",
      "inLanguage": "es-ES",
    },
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SharedNavbar />
      <main className="max-w-3xl mx-auto px-4 pt-[73px] pb-12 space-y-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio
        </Link>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-red-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900">{"Términos y Condiciones"}</h1>
          </div>
          <p className="text-sm text-gray-500">{"Última actualización: " + YEAR}</p>
        </div>
        <img src="/media/terminos-condiciones.webp" alt="Términos y condiciones: contrato firmado que regula el uso del servicio" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg" loading="lazy" />

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-black text-gray-900">1. Objeto y naturaleza del servicio</h2>
            <p>RecurreTuMulta.online es una herramienta de <strong>apoyo informativo y redacción asistida por inteligencia artificial</strong>. El servicio analiza documentos de multas de tráfico y genera borradores de recursos de reposición basados en el contenido del documento subido.</p>
            <p><strong>Importante:</strong> RecurreTuMulta.online <strong>no es un despacho de abogados</strong> ni presta asesoramiento jurídico personalizado. Los documentos generados son borradores informativos que el usuario debe revisar, adaptar y presentar bajo su propia responsabilidad. Para casos complejos, te recomendamos consultar con un abogado especialista en derecho de tráfico.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">2. Sin registro: acceso al servicio</h2>
            <p>RecurreTuMulta.online no requiere crear una cuenta ni usar contraseñas. El análisis de tu multa con IA es gratuito y no necesitas registrarte. Cuando adquieres el recurso PDF (4,99 €), te pedimos los datos necesarios para redactarlo (nombre completo, DNI/NIE y domicilio) y una dirección de correo electrónico a la que enviártelo. El acceso a tu pack de recursos se realiza mediante el enlace personal que te enviamos por email.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">3. Precios y pagos</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Análisis con IA:</strong> Siempre gratuito. Incluye viabilidad %, defectos detectados y resumen.</li>
              <li><strong>Asistente de multas (suscripción anual):</strong> 7,99 € al año, IVA incluido. Incluye vigilancia, avisos, análisis y los recursos en PDF del año. Se renueva cada año salvo que la canceles antes de la renovación. El análisis de una multa sigue siendo gratis.</li>
            </ul>
            <p>Los pagos se procesan de forma segura a través de Stripe. Emitimos factura por cada compra.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">4. Política de reembolso</h2>
            <p>Ofrecemos reembolso completo si el análisis de tu multa no detecta ningún defecto ni genera ningún argumento útil. Puedes solicitarlo en los 14 días posteriores a la compra escribiendo a <a href="mailto:soporte@recurretumulta.online" className="text-red-600 underline">soporte@recurretumulta.online</a>. El reembolso no aplica si el recurso generado fue descargado y presentado.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">5. Propiedad intelectual</h2>
            <img src="/media/aviso-legal.webp" alt="Balanza de la justicia y documentos legales: marco jurídico de los términos del servicio" className="w-full h-40 sm:h-52 object-cover rounded-2xl shadow mb-6" loading="lazy" />
            <p>Todo el contenido de RecurreTuMulta.online (textos, diseño, código, marca) es propiedad de RecurreTuMulta.online y está protegido por las leyes de propiedad intelectual. Los recursos generados por la IA a partir de tu multa son tuyos: puedes usarlos, presentarlos y modificarlos libremente.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">6. Limitación de responsabilidad</h2>
            <p>RecurreTuMulta.online no garantiza el éxito de ningún recurso administrativo. Los resultados dependen del contenido específico de cada multa, de los plazos legales y de la decisión de los organismos administrativos. El usuario actúa en todo momento bajo su propia responsabilidad.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">7. Legislación aplicable</h2>
            <p>Estos términos se rigen por la legislación española. Para cualquier disputa, las partes se someten a los juzgados y tribunales del domicilio del usuario, salvo que la normativa aplicable establezca otro fuero imperativo.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">8. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos: <a href="mailto:legal@recurretumulta.online" className="text-red-600 underline">legal@recurretumulta.online</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter editorial={false} />
      </footer>
    </div>
  );
}
