import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { Shield } from "lucide-react";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";


export default function PrivacidadPage() {
  useSeo({
    title: "Política de Privacidad",
    description: "Política de privacidad de RecurreTuMulta.online. Cómo recogemos, usamos y protegemos tus datos personales conforme al RGPD y la LOPDGDD española.",
    canonical: "/privacidad",
    keywords: ["política privacidad RecurreTuMulta", "protección datos RGPD", "privacidad multas DGT"],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Política de Privacidad — RecurreTuMulta.online",
      "url": "https://recurretumulta.online/privacidad",
      "inLanguage": "es-ES",
      "isPartOf": { "@id": "https://recurretumulta.online/#website" },
    },
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SharedNavbar />

      <main className="max-w-3xl mx-auto px-4 pt-[73px] pb-12 space-y-8">
        {/* Migas de pan visibles (23/10/2026) */}
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-gray-900">Política de Privacidad</span>
        </nav>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900">{"Política de Privacidad"}</h1>
          </div>
          <p className="text-sm text-gray-500">{"Última actualización: 31 de octubre de 2026"}</p>
        </div>
        <img src="/media/privacidad-datos.webp" alt="Protección de datos personales: candado digital que simboliza la seguridad de tu privacidad" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg" loading="lazy" />

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-black text-gray-900">1. Responsable del tratamiento</h2>
            <p>El responsable del tratamiento de tus datos personales es <strong>Daniel Sánchez Verdasco</strong> (titular de RecurreTuMulta.online) · DNI 51706202V · Plaza de Corcubión 6, 28029 Madrid · soporte@recurretumulta.online, con dirección de contacto para privacidad en <a href="mailto:privacidad@recurretumulta.online" className="text-red-600 underline">privacidad@recurretumulta.online</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">2. Datos que recopilamos</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Datos para redactar tu recurso:</strong> nombre completo, DNI/NIE, domicilio y dirección de correo electrónico. Solo los usamos para redactar el recurso y enviártelo por email.</li>
              <li><strong>Documentos de multas:</strong> los PDFs o imágenes de multas que subes para su análisis. Se procesan en tiempo real y <strong>no se almacenan permanentemente</strong> en nuestros servidores.</li>
              <li><strong>Datos extraídos de la multa:</strong> número de expediente, importe, fecha e infracción, que incluimos en tu recurso.</li>
              <li><strong>Datos de uso:</strong> páginas visitadas, acciones en la plataforma, para mejorar el servicio.</li>
              <li><strong>Datos de pago:</strong> procesados íntegramente por Stripe. RecurreTuMulta.online nunca almacena datos de tarjeta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">3. Base legal del tratamiento</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Ejecución del contrato</strong> (art. 6.1.b RGPD): para prestarte el servicio de análisis y generación del recurso.</li>
              <li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): para mejorar el servicio y prevenir fraudes.</li>
              <li><strong>Consentimiento</strong> (art. 6.1.a RGPD): para comunicaciones de marketing, si das tu autorización.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">4. Finalidades del tratamiento</h2>
            <p>Usamos tus datos para: (1) Prestarte el servicio de análisis de multas con IA. (2) Redactar tu recurso y enviártelo por email, junto con tu enlace personal de acceso al pack. (3) Gestionar tus pagos. (4) Enviarte comunicaciones sobre el servicio. (5) Cumplir nuestras obligaciones legales.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">5. Destinatarios y transferencias</h2>
            <img src="/media/vicios-forma-documento.webp" alt="Expediente con documentos oficiales: tus datos solo se comparten con quien la ley exige" className="w-full h-40 sm:h-52 object-cover rounded-2xl shadow mb-6" loading="lazy" />
            <p>No vendemos tus datos ni los cedemos a terceros para sus propios fines. Solo acceden a ellos los <strong>encargados del tratamiento</strong> estrictamente necesarios para prestarte el servicio, con los que tenemos las garantías exigidas por el RGPD (art. 28):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Stripe Inc.</strong> (procesamiento de pagos) — EEUU, con garantías adecuadas.</li>
              <li><strong>Resend Inc.</strong> (envío de emails con tu recurso) — EEUU, con garantías adecuadas.</li>
              <li><strong>Convex Inc.</strong> (base de datos: guarda tus pedidos y los datos necesarios para generar tu recurso) — EEUU, con garantías adecuadas.</li>
              <li><strong>Groq Inc.</strong> (inteligencia artificial que analiza tu multa o sanción) — EEUU, con garantías adecuadas.</li>
            </ul>
            <p>Además, si aceptas las cookies de publicidad y medición, <strong>Google Ireland Limited / Google LLC</strong> (Google Analytics y Google AdSense) y los proveedores publicitarios que participan en sus anuncios pueden tratar datos de tu navegador (identificadores de cookies, dirección IP, datos del dispositivo) como responsables de su propio tratamiento. Puedes ver cómo usa Google esos datos en <a href="https://policies.google.com/technologies/partner-sites" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">«Cómo utiliza Google los datos de sitios o aplicaciones que usan sus servicios»</a>. Las transferencias a EEUU se apoyan en el Marco de Privacidad de Datos UE-EEUU o en cláusulas contractuales tipo.</p>
            <p>No compartimos con Google ni con terceros los datos de tus multas, tu DNI ni tus datos personales de contacto.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">6. Conservación de datos</h2>
            <p>Los datos para redactar tu recurso (nombre, DNI/NIE, domicilio y email) se conservan el tiempo necesario para prestarte el servicio, enviártelo y atender posibles consultas relacionadas. Los documentos de multas se procesan y eliminan inmediatamente tras el análisis. Los datos de facturación, 5 años por obligaciones fiscales.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">7. Tus derechos</h2>
            <p>Tienes derecho a: <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong>, <strong>suprimirlos</strong> ("derecho al olvido"), <strong>oponerte</strong> al tratamiento, <strong>portabilidad</strong> de tus datos, y <strong>limitación</strong> del tratamiento. Puedes ejercerlos escribiendo a <a href="mailto:privacidad@recurretumulta.online" className="text-red-600 underline">privacidad@recurretumulta.online</a>. También puedes reclamar ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en www.aepd.es.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">8. Cookies, publicidad y analítica</h2>
            <p>Usamos cookies técnicas (necesarias para el funcionamiento), analíticas (Google Analytics 4) y publicitarias (Google AdSense). Las analíticas y publicitarias <strong>solo se activan si las aceptas</strong> en el aviso de cookies: hasta entonces Google Analytics y AdSense funcionan en modo «denegado» (Consent Mode v2, sin almacenar cookies de analítica ni de publicidad personalizada). Puedes cambiar tu elección en cualquier momento con el enlace «Configurar cookies» del pie de página. La base legal es tu <strong>consentimiento</strong> (art. 6.1.a RGPD y art. 22.2 LSSI) y puedes retirarlo cuando quieras sin que afecte a lo anterior.</p>
            <p>Detalle de cada cookie, proveedor y duración en nuestra <Link to="/cookies/" className="text-red-600 underline">Política de Cookies</Link>.</p>
            <p>Cómo gestionar o rechazar la publicidad personalizada:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://adssettings.google.com" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">Configuración de anuncios de Google (adssettings.google.com)</a></li>
              <li><a href="https://www.aboutads.info/choices/" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a> y <a href="https://www.youronlinechoices.eu/" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">youronlinechoices.eu</a> (opciones de publicidad basada en intereses)</li>
              <li><a href="https://policies.google.com/technologies/partner-sites" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a> (cómo usa Google los datos de sitios que usan sus servicios)</li>
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">Complemento de inhabilitación de Google Analytics</a></li>
            </ul>
            <p>Para consultas de privacidad o para ejercer tus derechos, escribe a soporte@recurretumulta.online. Si consideras que no hemos atendido tu solicitud, puedes reclamar ante la <a href="https://www.aepd.es" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (aepd.es)</a>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter editorial={false} />
      </footer>
    </div>
  );
}
