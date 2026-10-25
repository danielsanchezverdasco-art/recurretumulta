import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { Scale, ArrowLeft } from "lucide-react";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";


export default function AvisoLegalPage() {

  useSeo({
    title: "Aviso Legal",
    description: "Aviso legal de RecurreTuMulta.online: datos identificativos del titular del sitio, condiciones de uso del contenido y régimen de responsabilidad.",
    canonical: "/aviso-legal",
    keywords: ["aviso legal RecurreTuMulta", "datos identificativos titular web"],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Aviso Legal — RecurreTuMulta.online",
      "url": "https://recurretumulta.online/aviso-legal",
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
              <Scale className="w-5 h-5 text-red-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900">Aviso Legal</h1>
          </div>
          <p className="text-sm text-gray-500">Última actualización: 17 de octubre de 2026</p>
          <p className="text-xs text-gray-400">
            Titular: Daniel Sánchez Verdasco · NIF 51706202V · Plaza de Corcubión 6, 28029 Madrid · soporte@recurretumulta.online.
            Los contenidos de este sitio web tienen carácter meramente informativo y no constituyen asesoramiento jurídico.
          </p>
        </div>
        <img src="/media/aviso-legal.webp" alt="Aviso legal: balanza de la justicia y documentos legales españoles" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg" loading="lazy" />

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-black text-gray-900">1. Datos identificativos</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Denominación:</strong> RecurreTuMulta.online</li>
              <li><strong>Actividad:</strong> Herramienta de análisis y redacción asistida por inteligencia artificial de recursos administrativos contra sanciones de tráfico</li>
              <li><strong>Correo de contacto:</strong> <a href="mailto:legal@recurretumulta.online" className="text-red-600 underline">legal@recurretumulta.online</a></li>
              <li><strong>Dominio:</strong> recurretumulta.online</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">2. Objeto y ámbito de aplicación</h2>
            <p>Este aviso legal regula el acceso y uso del sitio web recurretumulta.online. El acceso al sitio implica la aceptación de las condiciones aquí descritas, sin perjuicio de lo establecido en nuestros <Link to="/terminos/" className="text-red-600 underline">Términos y Condiciones</Link> y nuestra <Link to="/privacidad/" className="text-red-600 underline">Política de Privacidad</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">3. Naturaleza del servicio</h2>
            <p>RecurreTuMulta.online <strong>no presta servicios de asesoramiento jurídico personalizado ni sustituye a un abogado o graduado social</strong>. El contenido de este sitio, incluidas las guías del blog y los recursos generados por IA, tiene una finalidad informativa y de apoyo, y debe contrastarse con la normativa aplicable a cada caso concreto.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">4. Propiedad intelectual e industrial</h2>
            <img src="/media/vicios-forma-documento.webp" alt="Documentos legales españoles sobre una mesa: base jurídica del aviso legal" className="w-full h-40 sm:h-52 object-cover rounded-2xl shadow mb-6" loading="lazy" />
            <p>Los textos, diseños, logotipos, código y demás contenidos de este sitio son propiedad de RecurreTuMulta.online o de sus licenciantes, salvo el contenido normativo de carácter público (leyes, reglamentos, resoluciones) citado con fines informativos. Queda prohibida su reproducción total o parcial sin autorización expresa, salvo cita con enlace a la fuente original.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">5. Enlaces a fuentes oficiales</h2>
            <p>Este sitio enlaza ocasionalmente a fuentes oficiales como la Dirección General de Tráfico (dgt.es) y el Boletín Oficial del Estado (boe.es) con fines exclusivamente informativos. RecurreTuMulta.online no controla ni se responsabiliza del contenido de dichos sitios externos.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">6. Exclusión de responsabilidad</h2>
            <p>RecurreTuMulta.online no garantiza la disponibilidad continuada del sitio ni el resultado de ningún recurso administrativo. El uso del contenido y de las herramientas del sitio se realiza bajo la responsabilidad exclusiva del usuario.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">7. Legislación aplicable</h2>
            <p>Este aviso legal se rige por la legislación española. Para más información sobre protección de datos, consulta nuestra <Link to="/privacidad/" className="text-red-600 underline">Política de Privacidad</Link>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter editorial={false} />
      </footer>
    </div>
  );
}
