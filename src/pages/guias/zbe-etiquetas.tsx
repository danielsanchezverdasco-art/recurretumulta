import { useSeo } from "@/hooks/use-seo.ts";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/zbe-etiquetas#faq","mainEntity":[
{"@type":"Question","name":"¿Qué etiqueta DGT tiene mi coche?","acceptedAnswer":{"@type":"Answer","text":"Depende del combustible y de la norma Euro: gasolina Euro 3 es B, gasolina Euro 4, 5 y 6 es C, diésel Euro 4 y 5 es B y diésel Euro 6 es C. Los híbridos y eléctricos son ECO o Cero según el caso. Compruébalo con la calculadora de etiqueta DGT."}},
{"@type":"Question","name":"¿Un coche con etiqueta Cero puede entrar siempre en una ZBE?","acceptedAnswer":{"@type":"Answer","text":"En general sí, sin restricciones: la etiqueta Cero es la más favorable. Solo en episodios de alta contaminación o en zonas de especial protección con reglas propias podrían aplicar matices; la ordenanza de cada ciudad manda."}},
{"@type":"Question","name":"¿Puedo entrar en el centro de Madrid con etiqueta B?","acceptedAnswer":{"@type":"Answer","text":"No, salvo excepciones: la Zona de Bajas Emisiones de Especial Protección de Distrito Centro restringe el acceso a los vehículos sin distintivo y con etiqueta B, salvo residentes, vehículos históricos y otros supuestos de la ordenanza."}},
{"@type":"Question","name":"¿Quién multa por entrar en una ZBE sin autorización?","acceptedAnswer":{"@type":"Answer","text":"El ayuntamiento titular de la vía, con cámaras de lectura de matrículas. La sanción es de 200 euros (100 con pronto pago) y el recurso se presenta ante el propio ayuntamiento."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias"},
{"@type":"ListItem","position":3,"name":"ZBE y etiquetas DGT","item":"https://recurretumulta.online/guias/zbe-etiquetas"}]}]};

export default function GuiaZbeEtiquetasPage() {
  useSeo({
    title: "ZBE y etiquetas DGT 2026: qué puede circular",
    description: "Qué significa cada etiqueta DGT (Cero, ECO, C, B) y qué vehículos pueden entrar en las ZBE de Madrid, Barcelona y el resto de España.",
    canonical: "/guias/zbe-etiquetas",
    schema: FAQ_SCHEMA,
  });

  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen" style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}>
      <main className="max-w-4xl mx-auto px-4 pt-10 pb-16">
      <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
        <a href="https://recurretumulta.online/" className="hover:underline">Inicio</a>
        <span aria-hidden="true">/</span>
        <a href="https://recurretumulta.online/guias" className="hover:underline">Guías</a>
        <span aria-hidden="true">/</span>
        <span className="text-slate-400">ZBE y etiquetas DGT</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-black leading-tight text-balance">ZBE y etiquetas DGT: qué puede circular</h1>
      <p className="text-slate-600 mt-4 leading-relaxed">Una Zona de Bajas Emisiones (ZBE) es un área urbana donde el ayuntamiento restringe la circulación según el distintivo ambiental de la DGT. La Ley 7/2021, de cambio climático, obliga a tener una ZBE a todos los municipios españoles de más de 50.000 habitantes, y el Real Decreto 1052/2022 desarrolla cómo deben ser. Lo que decide si tu coche entra o no es su etiqueta, no su antigüedad a secas.</p>
      <p className="text-xs text-slate-500 mt-3">Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Las cinco situaciones: de Cero a sin distintivo</h2>
      <table className="w-full text-sm text-slate-600 mb-4">
        <thead><tr className="text-left border-b border-slate-200"><th className="py-2 pr-4">Distintivo</th><th className="py-2 pr-4">Qué vehículos lo llevan</th><th className="py-2">Acceso habitual a una ZBE</th></tr></thead>
        <tbody>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">Cero</td><td className="py-2 pr-4">Eléctricos de batería, híbridos enchufables con autonomía eléctrica de 40 km o más, eléctricos de autonomía extendida y pila de combustible.</td><td className="py-2">Sin restricciones en general.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">ECO</td><td className="py-2 pr-4">Híbridos no enchufables, híbridos enchufables con menos de 40 km de autonomía eléctrica y vehículos de gas (GNC, GNL y GLP).</td><td className="py-2">Sin restricciones en general; en episodios de alta contaminación pueden aplicar matices.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">C</td><td className="py-2 pr-4">Gasolina Euro 4, 5 y 6 (matriculados desde 2006) y diésel Euro 6 (desde 2015).</td><td className="py-2">Entra en la ZBE, pero no en zonas de especial protección con reglas más duras.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">B</td><td className="py-2 pr-4">Gasolina Euro 3 (desde 2000) y diésel Euro 4 y 5 (desde 2006).</td><td className="py-2">Entra en la ZBE general, pero no en zonas de especial protección salvo excepciones.</td></tr>
          <tr><td className="py-2 pr-4 font-semibold text-slate-900">Sin distintivo</td><td className="py-2 pr-4">Gasolina anteriores a 2000 y diésel anteriores a 2006.</td><td className="py-2">No entra en la ZBE salvo excepciones (residentes, históricos y supuestos de la ordenanza).</td></tr>
        </tbody>
      </table>
      <p className="text-slate-600 mb-4">Si no sabes qué etiqueta lleva tu coche, usa la <a href="https://recurretumulta.online/calculadora-etiqueta-dgt" className="text-red-600 font-semibold hover:underline">calculadora de etiqueta DGT</a> o consulta el distintivo en la web de la DGT.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Madrid y Barcelona: lo esencial</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><strong>Madrid:</strong> la ZBE abarca todo el término municipal. Dentro de ella, la Zona de Bajas Emisiones de Especial Protección de Distrito Centro aplica restricciones más duras, con excepciones para residentes, vehículos históricos y otros supuestos de la ordenanza.</li>
        <li><strong>Barcelona:</strong> la ZBE Rondes abarca Barcelona y parte de su área metropolitana, con su propio calendario y excepciones, fijados por el ayuntamiento y el Área Metropolitana de Barcelona.</li>
        <li><strong>El resto de España:</strong> cada municipio de más de 50.000 habitantes tiene su propia ordenanza: ámbito, calendario y excepciones. Antes de circular, comprueba la ordenanza vigente en esa ciudad ese día.</li>
      </ul>
      <p className="text-slate-600 mb-4">Entrar sin autorización es una infracción grave: 200 € (100 € con pronto pago), sin pérdida de puntos, y la impone el ayuntamiento. Si ya te han multado, la <a href="https://recurretumulta.online/guias/zbe" className="text-red-600 font-semibold hover:underline">guía de multas ZBE</a> explica qué revisar para recurrir.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Qué etiqueta DGT tiene mi coche?</h3><p className="text-slate-600">Depende del combustible y de la norma Euro: gasolina Euro 3 es B, gasolina Euro 4, 5 y 6 es C, diésel Euro 4 y 5 es B y diésel Euro 6 es C. Los híbridos y eléctricos son ECO o Cero según el caso.</p></div>
      <div><h3 className="font-bold mb-1">¿Un coche con etiqueta Cero puede entrar siempre en una ZBE?</h3><p className="text-slate-600">En general sí, sin restricciones. Solo en episodios de alta contaminación o en zonas de especial protección con reglas propias podrían aplicar matices; la ordenanza de cada ciudad manda.</p></div>
      <div><h3 className="font-bold mb-1">¿Puedo entrar en el centro de Madrid con etiqueta B?</h3><p className="text-slate-600">No, salvo excepciones: la ZBE de Especial Protección de Distrito Centro restringe el acceso a los vehículos sin distintivo y con etiqueta B, salvo residentes, vehículos históricos y otros supuestos de la ordenanza.</p></div>
      <div><h3 className="font-bold mb-1">¿Quién multa por entrar en una ZBE sin autorización?</h3><p className="text-slate-600">El ayuntamiento titular de la vía, con cámaras de lectura de matrículas. La sanción es de 200 € (100 € con pronto pago) y el recurso se presenta ante el propio ayuntamiento.</p></div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><a href="https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">DGT · Distintivo ambiental</a>: qué significa cada etiqueta.</li>
        <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2022-22689" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">Real Decreto 1052/2022 (BOE)</a>: regula las zonas de bajas emisiones en desarrollo del art. 14.3 de la Ley 7/2021.</li>
        <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: infracciones y procedimiento sancionador.</li>
      </ul>
      </main>
      <SharedFooter />
    </div>
  );
}
