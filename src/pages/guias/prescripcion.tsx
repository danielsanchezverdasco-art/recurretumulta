import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import CalculadoraPrescripcion from "@/components/CalculadoraPrescripcion.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/prescripcion#faq","mainEntity":[
{"@type":"Question","name":"¿Cuándo prescribe una multa de tráfico?","acceptedAnswer":{"@type":"Answer","text":"Las infracciones leves prescriben a los 3 meses y las graves y muy graves a los 6 meses. Las sanciones (una vez firmes) prescriben a los 4 años."}},
{"@type":"Question","name":"¿Cuándo caduca un expediente sancionador de tráfico?","acceptedAnswer":{"@type":"Answer","text":"Si la administración no dicta resolución en 12 meses desde que se inició el procedimiento, el expediente caduca y debe archivarse."}},
{"@type":"Question","name":"¿La publicación en el BOE interrumpe la prescripción?","acceptedAnswer":{"@type":"Answer","text":"Sí. Si intentaron notificarte dos veces en tu domicilio sin localizarte, la publicación en el BOE cuenta como notificación válida e interrumpe la prescripción."}},
{"@type":"Question","name":"¿La prescripción es igual en todas las provincias?","acceptedAnswer":{"@type":"Answer","text":"Sí. La prescripción la marca la ley estatal, no el ayuntamiento o la DGT que denuncie."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias/prescripcion"}]}]};

export default function GuiaPrescripcionPage() {
  useSeo({
    title: "Prescripción multas 2026: plazos",
    description: "¿Cuándo prescribe una multa de tráfico? Plazos de prescripción y caducidad del expediente sancionador, cómo se interrumpen y qué hacer si te llega tarde.",
    canonical: "/guias/prescripcion",
    image: "https://recurretumulta.online/media/pilar-prescripcion.webp",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/pilar-prescripcion.webp" alt="Notificación de multa de tráfico sobre una mesa junto a un calendario con la fecha límite señalada" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: prescripción y caducidad</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Prescripción y caducidad de multas: plazos (2026)
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Dos conceptos que se confunden y que pueden anular tu multa: la <strong>prescripción</strong> (pasa el tiempo sin que te notifiquen) y la <strong>caducidad</strong> (el expediente se eterniza sin resolución).
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es la prescripción de una multa:</strong> la prescripción es la extinción de la responsabilidad por el paso del tiempo sin que la administración actúe. En tráfico, las infracciones leves prescriben a los 3 meses y las graves y muy graves a los 6 meses, contados desde que se cometieron los hechos (art. 112.1 del RDL 6/2015). Si te notifican fuera de plazo, la multa no es válida. No hay que confundirla con la caducidad, que es el archivo del expediente cuando la administración tarda más de 1 año en resolverlo (art. 112.3).</p>
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-4">¿Ha prescrito mi multa? Calcula la fecha límite</h2>
      <p className="text-slate-600 mb-4">Introduce la fecha de los hechos y la gravedad de la infracción: la calculadora te dice cuándo vence el plazo de prescripción según el <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">art. 112 del RDL 6/2015</a>.</p>
      <CalculadoraPrescripcion />
      <h2 className="text-2xl font-bold mt-10 mb-4">Plazos de prescripción de las infracciones</h2>
      <div className="rounded-2xl border border-slate-200 mb-4">
      <table className="w-full text-xs sm:text-sm text-left bg-white">
      <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Plazo</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Qué significa</th></tr></thead>
      <tbody>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">3 meses</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Prescripción de las infracciones <strong>leves</strong>: si en 3 meses desde los hechos no te han notificado, la infracción prescribe.</td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">6 meses</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Prescripción de las infracciones <strong>graves y muy graves</strong> (la mayoría de multas de tráfico).</td></tr>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">12 meses</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600"><strong>Caducidad del procedimiento</strong>: si la administración no dicta resolución en 12 meses desde su inicio, el expediente caduca y debe archivarse.</td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">4 años</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Prescripción de la <strong>sanción</strong>: una vez la multa es firme, prescribe a los 4 años.</td></tr>
      </tbody>
      </table>
      </div>
      <p className="text-slate-600 mb-4">Base legal: artículo 112 del texto refundido de la Ley de Tráfico (RDL 6/2015).</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Comparativa: prescripción de la infracción, caducidad y prescripción de la sanción</h2>
      <p className="text-slate-600 mb-4">Los tres conceptos con su plazo, su cómputo y su base legal exacta:</p>
      <div className="rounded-2xl border border-slate-200 mb-4 overflow-x-auto">
      <table className="w-full text-xs sm:text-sm text-left bg-white min-w-[560px]">
      <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold">Concepto</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold">Plazo y cómputo</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold">Base legal</th></tr></thead>
      <tbody>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-slate-900">Prescripción de la infracción leve</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600"><strong className="text-slate-900">3 meses</strong>, contados desde el mismo día en que se cometieron los hechos.</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600 whitespace-nowrap">art. 112.1 <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">RDL 6/2015</a></td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-slate-900">Prescripción de la infracción grave o muy grave</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600"><strong className="text-slate-900">6 meses</strong>, contados desde el mismo día en que se cometieron los hechos.</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600 whitespace-nowrap">art. 112.1 <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">RDL 6/2015</a></td></tr>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-slate-900">Caducidad del procedimiento</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600"><strong className="text-slate-900">1 año</strong> sin resolución sancionadora desde la iniciación del procedimiento; se archiva.</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600 whitespace-nowrap">art. 112.3 <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">RDL 6/2015</a></td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-slate-900">Prescripción de la sanción (multa firme)</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600"><strong className="text-slate-900">4 años</strong>, contados desde el día siguiente a la firmeza en vía administrativa.</td><td className="px-2 sm:px-4 py-2 sm:py-3 text-slate-600 whitespace-nowrap">art. 112.4 <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">RDL 6/2015</a></td></tr>
      </tbody>
      </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Prescripción y caducidad, sin confundir</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><strong>Prescripción de la infracción:</strong> el tiempo corre desde los hechos; si no te notifican en 3 o 6 meses, la infracción se extingue.</li>
      <li><strong>Caducidad del expediente:</strong> una vez iniciado el procedimiento, si no hay resolución en 12 meses, el expediente caduca aunque la infracción aún no hubiera prescrito.</li>
      <li><strong>Prescripción de la sanción:</strong> cuando la multa ya es firme, la administración tiene 4 años para cobrarla.</li>
      </ul>
      <p className="text-slate-600 mb-4">El plazo cuenta igual en Madrid, Barcelona o cualquier provincia: lo marca la ley estatal. Revisa también si tu multa tiene algún <a href="https://recurretumulta.online/guias/vicios-forma" className="text-green-700 font-semibold hover:underline">defecto de forma</a>, que es otra vía para anularla.</p>

      <figure className="mb-8">
  <video src="/media/guia-prescripcion.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: reloj antiguo y calendario, el paso del tiempo" />
  <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: el paso del tiempo, clave en la prescripción de las multas.</figcaption>
</figure>
      <figure className="my-8">
        <img src="/media/prescripcion-calendario-plazos.webp" alt="Calendario con fechas límite marcadas en rojo junto a una notificación oficial en un sobre" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Qué interrumpe la prescripción</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li>Cualquier notificación válida que te dirijan (incluida la publicación en el BOE tras dos intentos fallidos en tu domicilio).</li>
      <li>Tus propios escritos y recursos también reinician el cómputo: ojo con recurrir "por si acaso" si el plazo estaba a punto de cumplirse.</li>
      </ul>
      <p className="text-slate-600 mb-4">El análisis completo, con mitos y casos, en <a href="https://recurretumulta.online/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo" className="text-green-700 font-semibold hover:underline">prescripción y caducidad de las multas de tráfico</a> y en <a href="https://recurretumulta.online/blog/prescripcion-multas-trafico-plazos" className="text-green-700 font-semibold hover:underline">prescripción de multas: plazos</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: plazos de prescripción y caducidad (art. 112), notificaciones (arts. 90-92).</li>
      <li><a href="https://www.boe.es/notificaciones/" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">TEU – Tablón Edictal Único (BOE)</a>: consulta si tienes sanciones publicadas que no te llegaron al domicilio.</li>
      <li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Sede electrónica de la DGT</a>: DEV, consulta de multas pendientes y presentación de escritos.</li>
      </ul>
      <p className="text-slate-600 mb-4">¿No sabes qué código aparece en tu denuncia? Búscalo en el <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones por código</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Cuándo prescribe una multa de tráfico?</h3><p className="text-slate-600">Leves: 3 meses. Graves y muy graves: 6 meses.</p></div>
      <div><h3 className="font-bold mb-1">¿Cuándo caduca el expediente?</h3><p className="text-slate-600">A los 12 meses sin resolución desde su inicio.</p></div>
      <div><h3 className="font-bold mb-1">¿El BOE interrumpe la prescripción?</h3><p className="text-slate-600">Sí, tras dos intentos de notificación en tu domicilio.</p></div>
      <div><h3 className="font-bold mb-1">¿Vale igual en toda España?</h3><p className="text-slate-600">Sí, la ley es estatal.</p></div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-3">¿Te ha llegado una multa antigua?</h2>
      <p className="text-slate-300 mb-6">Comprueba gratis si ha prescrito o caducado.</p>
      <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
      </div>
      </main>
      <SharedFooter />
    </div>
  );
}
