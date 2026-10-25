import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/itv-documentacion#faq","mainEntity":[
{"@type":"Question","name":"¿Cuánto es la multa por circular sin ITV?","acceptedAnswer":{"@type":"Answer","text":"200 euros con la ITV caducada o desfavorable. Con resultado negativo (defectos muy graves) son 500 euros y el vehículo queda inmovilizado."}},
{"@type":"Question","name":"¿Puedo pasar la ITV en otra provincia?","acceptedAnswer":{"@type":"Answer","text":"Sí, en cualquier estación de España, con independencia de dónde esté matriculado el vehículo."}},
{"@type":"Question","name":"¿Qué neumáticos pasan la ITV?","acceptedAnswer":{"@type":"Answer","text":"Los equivalentes a los de la ficha técnica: el diámetro no puede variar más del ±3%."}},
{"@type":"Question","name":"¿Qué documentación debo llevar en el coche?","acceptedAnswer":{"@type":"Answer","text":"Permiso de circulación, ficha técnica (tarjeta ITV) y acreditación del seguro en vigor."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias/itv-documentacion"}]}]};

export default function GuiaItvDocumentacionPage() {
  useSeo({
    title: "ITV 2026: neumáticos, multas y recurso",
    description: "Cada cuánto pasa la ITV tu coche, multas por circular sin ella, equivalencia de neumáticos y documentación obligatoria. Guía 2026.",
    canonical: "/guias/itv-documentacion",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/pilar-itv-documentacion.webp" alt="Coche pasando la inspección técnica de vehículos (ITV) en España" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: ITV y documentación</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            ITV, neumáticos y documentación: guía (2026)
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
            Plazos de la ITV según la antigüedad de tu coche, qué pasa si te paran sin ella, equivalencia de neumáticos y papeles obligatorios.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </motion.p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es la ITV:</strong> la Inspección Técnica de Vehículos (ITV) es la revisión periódica obligatoria que acredita que un vehículo cumple las condiciones de seguridad y emisiones para circular. En España es obligatoria para turismos a los 4 años de su matriculación, cada 2 años hasta los 10 años y cada año a partir de entonces. Circular sin la ITV en vigor es una infracción grave sancionada con 200 €, sin pérdida de puntos.</p>
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-4">Cada cuánto te toca la ITV</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><strong>Turismos:</strong> exentos los primeros 4 años; bienal de 4 a 10 años; anual a partir de los 10.</li>
      <li><strong>Motos y ciclomotores:</strong> primera a los 4 años (motos) y bienal después; los ciclomotores, bienal desde los 3 años.</li>
      <li><strong>Campers y caravanas:</strong> como turismos en general, pero ojo con las reformas: deben estar homologadas e incluidas en la ficha.</li>
      </ul>
      <p className="text-slate-600 mb-4">Tabla completa por años en <a href="https://recurretumulta.online/blog/itv-cada-cuanto-me-toca-tabla-por-anos-multas-por-circular-sin-ella-y-que-pasa-si-llevo-reformas-en-el-coche" className="text-green-700 font-semibold hover:underline">ITV: cada cuánto me toca</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Multas por circular sin ITV</h2>
      <div className="rounded-2xl border border-slate-200 mb-4">
      <table className="w-full text-xs sm:text-sm text-left bg-white">
      <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Situación</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Multa</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Consecuencias</th></tr></thead>
      <tbody>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">ITV caducada (sin pasar en plazo)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">200 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Infracción grave. Te retiran el permiso de circulación y te dan 10 días para pasarla (sin poder circular).</td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">ITV desfavorable (defectos graves)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">200 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Infracción grave. Solo puedes circular para ir al taller; 2 meses para reparar y repetir la inspección.</td></tr>
      <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">ITV negativa (defectos muy graves, peligro inminente)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">500 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Vehículo inmovilizado: no puede circular ni para ir al taller, solo en grúa.</td></tr>
      <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">Sin la pegatina V-19 visible</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">80 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Infracción leve. No afecta a la validez de la inspección.</td></tr>
      </tbody>
      </table>
      </div>
      <p className="text-slate-600 mb-4">Ninguna de estas sanciones resta puntos del carnet. En los controles en carretera de la Guardia Civil de Tráfico (hay campañas específicas) es una de las sanciones más frecuentes, y las cámaras también cruzan matrículas con el registro de inspecciones.</p>

      <figure className="my-8">
        <img src="/media/itv-documentacion-revision.webp" alt="Técnico de ITV revisando la ficha técnica y la documentación de un coche en la estación" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Neumáticos: la equivalencia del ±3%</h2>
      <p className="text-slate-600 mb-4">Para pasar la ITV, los neumáticos deben ser equivalentes a los de la ficha técnica: el diámetro exterior no puede variar más del ±3%. Circular con medidas no equivalentes: 200 € de multa. Compruébalo con nuestra <a href="https://recurretumulta.online/equivalencia-neumaticos-itv" className="text-green-700 font-semibold hover:underline">calculadora de equivalencia de neumáticos</a> y lee <a href="https://recurretumulta.online/blog/ruedas-de-km0-chollo-o-timo-pros-contras-precios-reales-y-multas-por-neumaticos-caducados-o-gastados" className="text-green-700 font-semibold hover:underline">neumáticos: multas y consejos</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Campers y reformas</h2>
      <p className="text-slate-600 mb-4">Las reformas (suspensiones, separadores, camperizaciones) deben estar homologadas y anotadas en la ficha técnica, o la ITV las tumba. Guía específica en <a href="https://recurretumulta.online/blog/homologacion-camper-y-caravanas-en-espana-vacios-legales-itv-y-como-evitar-multas-de-la-dgt" className="text-green-700 font-semibold hover:underline">homologación camper y caravanas</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: infracciones y sanciones (arts. 76, 77 y 80).</li>
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Reglamento General de Circulación (RD 1428/2003, BOE)</a>: condiciones técnicas y neumáticos (art. 12).</li>
      <li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">DGT</a>: información oficial sobre la ITV y sus campañas de control.</li>
      </ul>
      <p className="text-slate-600 mb-4">¿Te han puesto una denuncia y no sabes qué código es? Búscalo en el <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones por código</a>, y si ves un error en la tramitación revisa la <a href="https://recurretumulta.online/guias/vicios-forma" className="text-green-700 font-semibold hover:underline">guía de defectos de forma</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Cuánto es la multa por ir sin ITV?</h3><p className="text-slate-600">200 € con la ITV caducada o desfavorable; 500 € con resultado negativo (inmovilización incluida).</p></div>
      <div><h3 className="font-bold mb-1">¿Puedo pasarla en otra provincia?</h3><p className="text-slate-600">Sí, en cualquier estación de España.</p></div>
      <div><h3 className="font-bold mb-1">¿Qué neumáticos pasan la ITV?</h3><p className="text-slate-600">Los equivalentes: ±3% del diámetro original.</p></div>
      <div><h3 className="font-bold mb-1">¿Qué papeles debo llevar?</h3><p className="text-slate-600">Permiso de circulación, ficha técnica y seguro en vigor.</p></div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-3">¿Multa relacionada con tu coche?</h2>
      <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA.</p>
      <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
      </div>
      </main>
      <SharedFooter />
    </div>
  );
}
