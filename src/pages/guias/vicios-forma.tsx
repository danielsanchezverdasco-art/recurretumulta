import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/vicios-forma#faq","mainEntity":[
{"@type":"Question","name":"¿Qué es un defecto de forma en una multa?","acceptedAnswer":{"@type":"Answer","text":"Un error en cómo se tramitó la denuncia: falta de datos obligatorios, identificación incompleta del agente, errores en la matrícula o notificación defectuosa."}},
{"@type":"Question","name":"¿Un error en la matrícula anula la multa?","acceptedAnswer":{"@type":"Answer","text":"Si la matrícula de la denuncia no coincide con la de tu vehículo, la identificación del infractor falla y la sanción no se sostiene."}},
{"@type":"Question","name":"¿Cuánto plazo tengo para el recurso de reposición?","acceptedAnswer":{"@type":"Answer","text":"20 días naturales desde la notificación. Presentarlo es gratis."}},
{"@type":"Question","name":"¿Dónde se presenta el recurso?","acceptedAnswer":{"@type":"Answer","text":"Ante el organismo que denunció: Jefatura Provincial de Tráfico si es la DGT, o el ayuntamiento si la multa es municipal."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias/vicios-forma"}]}]};

export default function GuiaViciosFormaPage() {
  useSeo({
    title: "Defectos que anulan multas 2026",
    description: "Los errores en la tramitación de una multa pueden anularla: matrícula, identificación del agente, notificación y modelo de recurso de reposición.",
    canonical: "/guias/vicios-forma",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/pilar-vicios-forma.webp" alt="Lupa sobre una denuncia de tráfico revisando un posible defecto de forma" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: defectos de forma y recursos</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Defectos de forma que anulan multas (2026)
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
            A veces no hace falta discutir si cometiste la infracción: basta con que la administración la tramitara mal. Estos son los defectos formales que más multas anulan.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </motion.p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es un vicio de forma:</strong> un vicio de forma es un error en el procedimiento con el que la administración tramita una multa de tráfico (datos incompletos en el boletín, notificación defectuosa, radar sin verificación vigente). Cuando el defecto es grave, la multa puede anularse aunque la infracción se cometiera, porque el procedimiento no respeta las garantías del artículo 112 y siguientes del texto refundido de la Ley de Tráfico (RDL 6/2015).</p>
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-4">Los 5 defectos de forma más habituales</h2>
      <div className="rounded-2xl border border-slate-200 mb-4">
      <table className="w-full text-xs sm:text-sm text-left bg-white">
      <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Defecto</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Qué revisar en tu denuncia</th></tr></thead>
      <tbody>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Matrícula errónea</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Si no coincide con la de tu vehículo, la identificación del infractor falla y la sanción no se sostiene.</td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Datos incompletos del boletín</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Fecha, hora, lugar o precepto infringido ausentes o contradictorios.</td></tr>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Identificación del agente</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">En denuncias sin imagen, la identificación incompleta debilita la presunción de veracidad.</td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Notificación defectuosa</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Si no te notificaron correctamente, se vulnera tu derecho de defensa (arts. 90-92 del RDL 6/2015).</td></tr>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Mediciones sin verificación</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Cinemómetros o etilómetros sin verificación metrológica en vigor.</td></tr>
      </tbody>
      </table>
      </div>
      <p className="text-slate-600 mb-4">Desarrollo completo en <a href="https://recurretumulta.online/blog/defectos-forma-anulan-multa-dgt" className="text-green-700 font-semibold hover:underline">defectos de forma que anulan multas de la DGT</a>.</p>
      
      <figure className="mb-8">
  <video src="/media/guia-vicios-forma.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: lupa sobre un documento legal con letra pequeña" />
  <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: revisando con lupa la letra pequeña de una denuncia.</figcaption>
</figure>
      <figure className="my-8">
        <img src="/media/vicios-forma-documento.webp" alt="Lupa sobre una denuncia de tráfico con marcas rojas señalando posibles defectos de forma" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">El recurso de reposición: tu primera arma</h2>
      <p className="text-slate-600 mb-4">Tienes <strong>20 días naturales</strong> desde la notificación para presentarlo ante quien te multó (Jefatura Provincial de Tráfico o ayuntamiento). Es <strong>gratis</strong>. Si pagas con descuento antes, pierdes el derecho a recurrir. Modelo y pasos en <a href="https://recurretumulta.online/blog/recurso-reposicion-multa-modelo-2026" className="text-green-700 font-semibold hover:underline">recurso de reposición: modelo 2026</a>.</p>
      
      <h2 className="text-2xl font-bold mt-10 mb-4">¿Y si el conductor no era yo?</h2>
      <p className="text-slate-600 mb-4">El requerimiento de identificación llega al domicilio del titular en el Registro de Vehículos. No identificar al conductor es infracción muy grave (el doble o el triple de la multa original). Puedes identificarlo por internet en la sede electrónica de la DGT. Detalles en <a href="https://recurretumulta.online/blog/me-ha-llegado-una-multa-de-la-dgt-pero-el-conductor-no-era-yo-quien-paga-como-identificarlo-y-plazos-para-evitar-multas-triplicadas" className="text-green-700 font-semibold hover:underline">me ha llegado una multa pero el conductor no era yo</a>.</p>
      
      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: procedimiento sancionador y notificaciones (arts. 83-94).</li>
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Ley 39/2015 del Procedimiento Administrativo Común (BOE)</a>: recursos administrativos, plazos y requisitos de los actos.</li>
      <li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Sede electrónica de la DGT</a>: presentación de alegaciones y consulta de expedientes.</li>
      </ul>
      <p className="text-slate-600 mb-4">Si además tu multa llegó fuera de plazo, revisa la <a href="https://recurretumulta.online/guias/prescripcion" className="text-green-700 font-semibold hover:underline">guía de prescripción y caducidad</a>, y localiza el código de tu denuncia en el <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Qué es un defecto de forma?</h3><p className="text-slate-600">Un error en la tramitación: datos, identificación, matrícula o notificación.</p></div>
      <div><h3 className="font-bold mb-1">¿Un error en la matrícula anula la multa?</h3><p className="text-slate-600">Si no coincide con tu vehículo, la sanción no se sostiene.</p></div>
      <div><h3 className="font-bold mb-1">¿Cuánto plazo tengo para recurrir?</h3><p className="text-slate-600">20 días naturales desde la notificación.</p></div>
      <div><h3 className="font-bold mb-1">¿Dónde se presenta?</h3><p className="text-slate-600">Ante quien te multó: DGT o ayuntamiento.</p></div>
      </div>
      
      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-3">¿Tu multa tiene defectos de forma?</h2>
      <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA.</p>
      <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
      </div>
      </main>
      <SharedFooter />
    </div>
  );
}
