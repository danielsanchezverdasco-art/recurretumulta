import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/alcohol-drogas#faq","mainEntity":[
{"@type":"Question","name":"¿Cuál es la tasa máxima de alcohol permitida?","acceptedAnswer":{"@type":"Answer","text":"Para el conductor general: 0,5 g/l en sangre (0,25 mg/l en aire). Para noveles (menos de 2 años de carnet) y profesionales: 0,3 g/l (0,15 mg/l). Los menores tienen tasa 0,0."}},
{"@type":"Question","name":"¿Cuánto es la multa por dar positivo en alcohol?","acceptedAnswer":{"@type":"Answer","text":"500 € y 4 puntos en el tramo de 0,25 a 0,50 mg/l (0,15 a 0,30 en noveles y profesionales). 1.000 € y 6 puntos por encima de 0,50 mg/l (0,30) o por reincidencia. Por encima de 0,60 mg/l puede ser delito."}},
{"@type":"Question","name":"¿Y por drogas?","acceptedAnswer":{"@type":"Answer","text":"Conducir con presencia de drogas en el organismo: 1.000 euros y 6 puntos, además de la inmovilización del vehículo."}},
{"@type":"Question","name":"¿Puedo negarme a la prueba?","acceptedAnswer":{"@type":"Answer","text":"No es recomendable: negarse es una infracción muy grave (1.000 euros y 6 puntos) y puede ser delito (art. 383 del Código Penal)."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias/alcohol-drogas"}]}]};

const TASAS = [
  ["Conductor general", "0,5 g/l en sangre · 0,25 mg/l en aire"],
  ["Noveles (menos de 2 años de carnet) y profesionales", "0,3 g/l en sangre · 0,15 mg/l en aire"],
  ["Menores de edad (cualquier vehículo)", "0,0: cualquier presencia de alcohol es sancionable"],
];

const SANCIONES = [
  ["0,25–0,50 mg/l en aire (0,15–0,30 en noveles y profesionales)", "500 €", "4"],
  ["Más de 0,50 mg/l en aire (0,30 en noveles y profesionales) o reincidencia en el último año", "1.000 €", "6"],
  ["Más de 0,60 mg/l en aire o conducir bajo la influencia: vía penal", "Delito (art. 379.2 CP)", "Privación del permiso de 1 a 4 años"],
];

export default function GuiaAlcoholDrogasPage() {
  useSeo({
    title: "Multa por alcohol y drogas 2026: tasas",
    description: "Tasas de alcohol vigentes en España, sanciones por alcohol y drogas al volante, qué pasa en un control y cómo recurrir una multa de alcoholemia.",
    canonical: "/guias/alcohol-drogas",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/pilar-alcohol-drogas.webp" alt="Control de alcoholemia de la Guardia Civil en un control nocturno de tráfico" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: alcohol y drogas</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Alcohol y drogas al volante: multas y recurso (2026)
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
            Qué tasas de alcohol están vigentes en España, qué sanciones te esperan por dar positivo, qué pasa en un control y qué se puede recurrir de una multa de alcoholemia.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisado en octubre de 2026
          </motion.p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es la tasa de alcoholemia:</strong> la tasa de alcoholemia es la cantidad de alcohol en aire espirado (mg/l) o en sangre (g/l) que determina si un conductor supera el límite legal. En España el límite general es 0,25 mg/l en aire (0,50 g/l en sangre), y 0,15 mg/l para noveles y profesionales (arts. 20 y 21 del Reglamento General de Circulación). Superarlo es infracción grave (500 € y 4 puntos) o muy grave (1.000 € y 6 puntos), y por encima de 0,60 mg/l puede ser delito penal.</p>
      </div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Tasas de alcohol vigentes en España</h2>
      <p className="text-slate-600 mb-4">Los límites están en los artículos 20 y 21 del Reglamento General de Circulación y no han cambiado: no hay una única tasa para todos.</p>
      <div className="rounded-2xl border border-slate-200 mb-4">
      <table className="w-full text-xs sm:text-sm text-left bg-white">
      <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Conductor</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Tasa máxima permitida</th></tr></thead>
      <tbody>{TASAS.map(([c,t],i)=>(<tr key={c} className={i%2?"bg-slate-50":"bg-white"}><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">{c}</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">{t}</td></tr>))}</tbody>
      </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Sanciones administrativas por alcohol</h2>
      <div className="rounded-2xl border border-slate-200 mb-4">
      <table className="w-full text-xs sm:text-sm text-left bg-white">
      <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Tasa detectada</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Multa</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Puntos</th></tr></thead>
      <tbody>{SANCIONES.map(([t,m,p],i)=>(<tr key={i} className={i%2?"bg-slate-50":"bg-white"}><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">{t}</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">{m}</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">{p}</td></tr>))}</tbody>
      </table>
      </div>
      <p className="text-slate-600 mb-4">Ojo con la propuesta de <strong>tasa única de 0,2</strong> que aparece en la prensa: es una proposición de ley en tramitación parlamentaria, <strong>no está en vigor</strong>. Los límites vigentes son los de la tabla. El estado de la reforma, explicado en <a href="https://recurretumulta.online/blog/tasa-unica-alcohol-02-reforma" className="text-green-700 font-semibold hover:underline">tasa única de alcohol 0,2: la reforma</a>.</p>

<h2 className="text-2xl font-bold mt-10 mb-4">Drogas: tolerancia cero</h2>
      <p className="text-slate-600 mb-4">Conducir con presencia de drogas en el organismo: <strong>1.000 € y 6 puntos</strong>, más la inmovilización del vehículo. No hay umbral mínimo: basta la presencia confirmada. La prueba es salival, con contraste en laboratorio. La única excepción legal son las sustancias consumidas bajo prescripción médica y con finalidad terapéutica (art. 14.1 del RDL 6/2015).</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Negarse a la prueba sale peor</h2>
      <p className="text-slate-600 mb-4">Negarse a someterse a las pruebas de alcoholemia o drogas cuando lo requieren los agentes es infracción muy grave: <strong>1.000 € y 6 puntos</strong> en vía administrativa. Y además puede ser delito (art. 383 del Código Penal): prisión de 6 meses a 1 año y privación del derecho a conducir de más de 1 a 4 años.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Qué revisar si quieres recurrir</h2>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
      <li><strong>Verificación del etilómetro:</strong> debe estar calibrado y con la verificación en vigor.</li>
      <li><strong>El procedimiento:</strong> dos mediciones con el intervalo reglamentario y derecho a prueba de contraste.</li>
      <li><strong>La notificación y los datos:</strong> cualquier defecto formal (identificación, tasas transcritas) puede alegarse. Más en la <a href="https://recurretumulta.online/guias/vicios-forma" className="text-green-700 font-semibold hover:underline">guía de defectos de forma</a>.</li>
      <li><strong>Alcoholímetros obligatorios (Alcolock):</strong> los coches nuevos incorporan la preinstalación según la normativa europea GSR2. Más info en <a href="https://recurretumulta.online/blog/preinstalacion-obligatoria-de-alcoholimetros-alcolock-en-coches-nuevos-normativa-europea-gsr2-multas-y-como-afecta-en-espana-francia-italia-y-portugal" className="text-green-700 font-semibold hover:underline">Alcolock y normativa GSR2</a>.</li>
      </ol>
      <p className="text-slate-600 mb-4">¿No sabes qué código aparece en tu denuncia? Búscalo en el <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones por código</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: infracciones y sanciones por alcohol y drogas (arts. 14, 77 y 80).</li>
      <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Reglamento General de Circulación (RD 1428/2003, BOE)</a>: tasas de alcohol vigentes (arts. 20 y 21).</li>
      <li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">DGT</a>: información oficial sobre controles y campañas de alcoholemia.</li>
      </ul>

      <img src="/media/alcoholimetro-faq.webp" alt="Alcoholímetro de la policía en un control de tráfico" className="w-full rounded-3xl border border-slate-200 my-8" loading="lazy" />
        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Cuál es la tasa máxima de alcohol permitida?</h3><p className="text-slate-600">0,5 g/l en sangre (0,25 mg/l en aire) para el conductor general; 0,3 g/l (0,15 mg/l) para noveles y profesionales; 0,0 para menores.</p></div>
      <div><h3 className="font-bold mb-1">¿Cuánto es la multa por alcoholemia?</h3><p className="text-slate-600">500 € y 4 puntos en el tramo de 0,25 a 0,50 mg/l; 1.000 € y 6 puntos por encima de 0,50 mg/l o por reincidencia. Por encima de 0,60 mg/l, vía penal.</p></div>
      <div><h3 className="font-bold mb-1">¿Y por drogas?</h3><p className="text-slate-600">1.000 €, 6 puntos e inmovilización. No hay umbral mínimo.</p></div>
      <div><h3 className="font-bold mb-1">¿Puedo negarme a soplar?</h3><p className="text-slate-600">Es muy grave (1.000 € y 6 puntos) y puede ser delito. No compensa.</p></div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-3">¿Multa de alcoholemia?</h2>
      <p className="text-slate-300 mb-6">Analiza gratis si el procedimiento tuvo fallos recurribles.</p>
      <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
      </div>
      </main>
      <SharedFooter />
    </div>
  );
}
