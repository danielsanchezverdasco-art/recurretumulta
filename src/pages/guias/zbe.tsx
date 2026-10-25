import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/zbe#faq","mainEntity":[
{"@type":"Question","name":"¿Cuánto es la multa por entrar en la ZBE?","acceptedAnswer":{"@type":"Answer","text":"200 euros (100 con pronto pago). La impone el ayuntamiento titular de la vía."}},
{"@type":"Question","name":"¿Las multas ZBE las pone la DGT o el ayuntamiento?","acceptedAnswer":{"@type":"Answer","text":"El ayuntamiento, mediante sus cámaras. El recurso se presenta ante el propio ayuntamiento, no ante la DGT."}},
{"@type":"Question","name":"¿Puedo entrar en la ZBE con etiqueta B?","acceptedAnswer":{"@type":"Answer","text":"Depende de la ciudad y del año: cada ordenanza fija qué etiquetas pueden acceder y cuándo. Revisa la ordenanza vigente el día de la denuncia."}},
{"@type":"Question","name":"¿Hay que señalizar los accesos a la ZBE?","acceptedAnswer":{"@type":"Answer","text":"Sí. La señalización del acceso es uno de los puntos que debes revisar en tu recurso: si era deficiente o confusa, puede alegarse."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias/zbe"}]}]};

export default function GuiaZbePage() {
  useSeo({
    title: "Multas ZBE 2026: Madrid y Barcelona",
    description: "Te han multado por entrar en una Zona de Bajas Emisiones. Revisa qué debes comprobar: señalización, ordenanza vigente y etiquetas, y cómo recurrir.",
    canonical: "/guias/zbe",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/pilar-zbe.webp" alt="Señal de Zona de Bajas Emisiones en una calle de Madrid con un coche con distintivo ambiental de la DGT" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: multas ZBE</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Multas ZBE: guía para recurrirlas (2026)
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Las Zonas de Bajas Emisiones multan con cámaras automáticas y cada ciudad tiene sus propias reglas. Esta guía te explica qué revisar antes de pagar y cómo recurrir.
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es una ZBE:</strong> una Zona de Bajas Emisiones es un área urbana donde el ayuntamiento restringe la circulación de los vehículos más contaminantes según su distintivo ambiental de la DGT (etiquetas B, C, ECO y Cero). La Ley 7/2021 de cambio climático obliga a tener una ZBE a todos los municipios españoles de más de 50.000 habitantes. Acceder sin autorización es una infracción grave sancionada con 200 € (100 € con pronto pago), sin pérdida de puntos, y se controla con cámaras de lectura de matrículas.</p>
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-4">Qué es una ZBE y quién multa</h2>
      <p className="text-slate-600 mb-4">Una ZBE restringe el acceso a los vehículos más contaminantes según su etiqueta ambiental. Las denuncias las formula el <strong>ayuntamiento</strong> titular de la vía mediante cámaras, y el recurso se presenta ante el propio ayuntamiento en 20 días naturales. La sanción es de <strong>200 €</strong> (100 € con pronto pago).</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Madrid y Barcelona: lo esencial de cada una</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><strong>Madrid:</strong> la ZBE abarca todo el término municipal, con calendario progresivo y excepciones (residentes, vehículos históricos, etc.).</li>
      <li><strong>Barcelona:</strong> el ámbito lo definen el ayuntamiento y el AMB, con su propio calendario y excepciones.</li>
      <li>Otras ciudades (Valencia, Sevilla, etc.) aplican sus ordenanzas municipales: comprueba siempre la vigente el día de la denuncia.</li>
      </ul>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm text-slate-600 border-collapse">
          <caption className="text-left font-bold text-slate-900 mb-2">ZBE de Madrid y Barcelona: lo esencial</caption>
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-2 pr-4 font-bold text-slate-900">Ciudad</th>
              <th className="text-left py-2 pr-4 font-bold text-slate-900">Ámbito</th>
              <th className="text-left py-2 font-bold text-slate-900">Multa por acceder sin autorización</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="py-2 pr-4 font-semibold">Madrid</td>
              <td className="py-2 pr-4">Todo el término municipal, con calendario progresivo y excepciones</td>
              <td className="py-2">200 € (100 € con pronto pago), sin puntos</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-semibold">Barcelona</td>
              <td className="py-2 pr-4">Ámbito definido por el ayuntamiento y el AMB, con calendario propio</td>
              <td className="py-2">200 € (100 € con pronto pago), sin puntos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className="my-8">
        <img src="/media/zbe-camara-control.webp" alt="Cámara de control de tráfico en una calle de Madrid con señal de Zona de Bajas Emisiones" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Qué revisar antes de pagar una multa ZBE</h2>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
      <li><strong>La señalización del acceso:</strong> debía advertir con claridad de la restricción.</li>
      <li><strong>La ordenanza vigente ese día:</strong> las fases y excepciones cambian por años; pide la norma aplicable a tu fecha.</li>
      <li><strong>Tu etiqueta y tus excepciones:</strong> empadronamiento, vehículo histórico, movilidad reducida u otras causas pueden eximirte.</li>
      <li><strong>La identificación del vehículo:</strong> la cámara debe identificar correctamente la matrícula.</li>
      </ol>
      <p className="text-slate-600 mb-4">Tienes el desarrollo completo, con modelos, en <a href="https://recurretumulta.online/blog/como-recurrir-multas-de-la-zbe-en-madrid-barcelona-y-toda-espana-guia-definitiva-y-modelos-con-ia" className="text-green-700 font-semibold hover:underline">cómo recurrir multas de la ZBE en Madrid, Barcelona y toda España</a> y en <a href="https://recurretumulta.online/blog/multas-de-trafico-en-barcelona-y-la-zbe-como-recurrir-sanciones-de-la-dgt-y-el-ayuntamiento-al-instante" className="text-green-700 font-semibold hover:underline">multas de tráfico en Barcelona y la ZBE</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2022-22689" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Real Decreto 1052/2022 (BOE)</a>: regula las zonas de bajas emisiones en desarrollo del art. 14.3 de la Ley 7/2021.</li>
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: infracciones graves y procedimiento sancionador.</li>
      </ul>
      <p className="text-slate-600 mb-4">Si te han multado en Madrid o Barcelona, revisa su guía de provincia (<a href="https://recurretumulta.online/multas/madrid" className="text-green-700 font-semibold hover:underline">multas en Madrid</a>, <a href="https://recurretumulta.online/multas/barcelona" className="text-green-700 font-semibold hover:underline">multas en Barcelona</a>) y busca el código de tu denuncia en el <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones</a>. Y si la denuncia tiene errores formales, la <a href="https://recurretumulta.online/guias/vicios-forma" className="text-green-700 font-semibold hover:underline">guía de defectos de forma</a> te explica qué alegar.</p>

      <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Cuánto es la multa por entrar en la ZBE?</h3><p className="text-slate-600">200 € (100 € con pronto pago). La impone el ayuntamiento.</p></div>
      <div><h3 className="font-bold mb-1">¿Las multas ZBE las pone la DGT o el ayuntamiento?</h3><p className="text-slate-600">El ayuntamiento, y ante él se recurre.</p></div>
      <div><h3 className="font-bold mb-1">¿Puedo entrar con etiqueta B?</h3><p className="text-slate-600">Depende de la ciudad y del año. Revisa la ordenanza vigente el día de la denuncia.</p></div>
      <div><h3 className="font-bold mb-1">¿Tienen que señalizar los accesos?</h3><p className="text-slate-600">Sí, y una señalización deficiente es un motivo de recurso.</p></div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-3">¿Multa ZBE en tu buzón?</h2>
      <p className="text-slate-300 mb-6">Analízala gratis y descubre si es recurrible.</p>
      <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
      </div>
      </main>
      <SharedFooter />
    </div>
  );
}
