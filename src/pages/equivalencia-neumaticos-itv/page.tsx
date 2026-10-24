import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Equivalencia de neumáticos ITV", "url": "https://recurretumulta.online/equivalencia-neumaticos-itv", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Qué significa neumático equivalente?", "acceptedAnswer": { "@type": "Answer", "text": "Que su diámetro no varía más del ±3% respecto al original." } }, { "@type": "Question", "name": "¿Dónde miro la medida original?", "acceptedAnswer": { "@type": "Answer", "text": "En la ficha técnica de la ITV y en el lateral del neumático." } }, { "@type": "Question", "name": "¿Hay multa por neumáticos no equivalentes?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, 200 € y defecto grave en ITV." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Equivalencia neumáticos", "item": "https://recurretumulta.online/equivalencia-neumaticos-itv" } ] } ] };

export default function EquivalenciaNeumaticosItvPage() {
  useSeo({
    title: "Equivalencia neumáticos ITV: calculadora",
    description: "Comprueba la equivalencia de medidas de tus neumáticos: calcula si el diámetro supera el ±3 % exigido en la ITV. Gratis, rápido y sin registro.",
    canonical: "/equivalencia-neumaticos-itv",
    keywords: ["equivalencia neumaticos itv", "medidas neumaticos", "cambiar neumaticos itv"],
  });
    const [medida, setMedida] = useState(""); const [resultado, setResultado] = useState<{ texto: string; d: number; min: number; max: number; w: number; p: number; r: number } | null>(null); const [errorMedida, setErrorMedida] = useState(""); const [filtroLlanta, setFiltroLlanta] = useState("todas"); const diam = (w: number, p: number, r: number) => r * 25.4 + 2 * (w * p / 100); const fmtV = (n: number) => n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); const ANCHOS = [135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305]; const PERFILES = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]; const LLANTAS = [13, 14, 15, 16, 17, 18, 19, 20]; function variantesEquivalentes(w: number, p: number, r: number) { const d0 = diam(w, p, r); const lista: { texto: string; d: number; dif: number; llanta: number }[] = []; for (const a of ANCHOS) { for (const pe of PERFILES) { for (const ll of LLANTAS) { if (a === w && pe === p && ll === r) continue; const d = diam(a, pe, ll); const dif = ((d - d0) / d0) * 100; if (ll >= r && Math.abs(dif) <= 3) { lista.push({ texto: `${a}/${pe} R${ll}`, d: d, dif: dif, llanta: ll }); } } } } lista.sort((x, y) => Math.abs(x.dif) - Math.abs(y.dif)); return lista; } function fmtDif(dif: number) { return (dif > 0 ? "+" : "") + dif.toFixed(1).replace(".", ",") + " %"; } const parsearMedida = (texto: string): { w: number; p: number; r: number } | null => { const m = texto.trim().match(/^(\d{2,3})\s*\/\s*(\d{2,3})\s*r?\s*(\d{2})$/i); if (!m) return null; const w = parseInt(m[1], 10); const p = parseInt(m[2], 10); const r = parseInt(m[3], 10); if (w < 125 || w > 365 || p < 25 || p > 85 || r < 10 || r > 24) return null; return { w, p, r }; }; const calcular = () => { const parsed = parsearMedida(medida); if (!parsed) { setResultado(null); setErrorMedida("Escribe una medida válida con el formato 205/55 R16."); return; } setErrorMedida(""); const d = diam(parsed.w, parsed.p, parsed.r); setResultado({ texto: `${parsed.w}/${parsed.p} R${parsed.r}`, d, min: d * 0.97, max: d * 1.03, w: parsed.w, p: parsed.p, r: parsed.r }); };

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/file_IEB6mhsLfEuh0Lgpx4GJ9H61.webp" alt="Neumático de coche montado en llanta de aleación: comprueba la equivalencia de medida para pasar la ITV" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link><span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link><span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">Equivalencia de neumáticos</span>
            </motion.nav>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.08}}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratuita · Sin registro</span>
              </div>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.16}} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Equivalencia de neumáticos para ITV: calculadora del 3%
            </motion.h1>
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.24}} className="text-white/80 text-sm md:text-base leading-relaxed">
              La medida no puede variar más del ±3% del diámetro original para pasar la ITV.
            </motion.p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">
        <section aria-label="Qué es la equivalencia de neumáticos" className="space-y-3">         <h2 className="text-xl sm:text-2xl font-bold">¿Qué es la equivalencia de neumáticos?</h2>         <p className="text-slate-600">La equivalencia de neumáticos indica si una medida distinta a la original de tu coche puede montarse legalmente: dos medidas se consideran equivalentes cuando el diámetro total de la rueda apenas varía.</p>         <p className="text-slate-600">Para pasar la ITV, el diámetro total del neumático no puede variar más de un ±3 % respecto al diámetro de la medida original homologada que figura en la ficha técnica del vehículo.</p>         <p className="text-slate-600">El diámetro total se calcula con la fórmula D = 2 × (ancho × perfil / 100) + llanta × 25,4, donde el ancho se mide en milímetros, el perfil es un porcentaje y la llanta se expresa en pulgadas (1 pulgada = 25,4 mm).</p>       </section>

                        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8"><h2 className="text-xl font-bold mb-1">Calculadora de equivalencia</h2><p className="text-sm text-slate-500 mb-4">Escribe tu medida original (la de la ficha técnica) con el formato 205/55 R16 y pulsa Calcular.</p><div className="flex flex-col sm:flex-row gap-3"><input value={medida} onChange={(e) => setMedida(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") calcular(); }} placeholder="205/55 R16" aria-label="Medida del neumático" className="flex-1 border border-slate-300 rounded-xl px-4 py-3 text-lg" /><button onClick={calcular} className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-xl transition">Calcular</button></div>{errorMedida && <p className="mt-3 text-sm text-red-600">{errorMedida}</p>}{resultado && (<div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center"><p className="text-sm text-slate-500">Medida introducida</p><p className="text-3xl font-bold text-slate-900">{resultado.texto}</p><p className="mt-4 text-lg text-slate-700">Diámetro: <strong>{fmtV(resultado.d)} mm</strong></p><div className="mt-3 flex justify-center gap-8 text-sm"><p className="text-slate-600">Mínimo ITV (-3 %)<br /><strong className="text-base text-slate-900">{fmtV(resultado.min)} mm</strong></p><p className="text-slate-600">Máximo ITV (+3 %)<br /><strong className="text-base text-slate-900">{fmtV(resultado.max)} mm</strong></p></div><p className="mt-4 text-sm text-slate-600">Para la ITV, una medida alternativa es válida si su diámetro está dentro de este rango.</p></div>)}
                        {resultado && (<section className="mt-8"><h2 className="text-lg font-bold text-slate-900 mb-2">Variantes equivalentes que puedes montar</h2><p className="text-sm text-slate-600 mb-4">Estas medidas tienen un diámetro dentro del ±3 % respecto a la tuya, que es el margen que exige la ITV para considerarlas equivalentes. Solo mostramos llantas iguales o mayores que la original: nunca una medida menor.</p><div className="flex flex-wrap gap-2 mb-4"><button onClick={() => setFiltroLlanta("todas")} className={`px-3 py-1.5 text-xs font-bold rounded-full border transition ${filtroLlanta === "todas" ? "bg-blue-700 text-white border-blue-700" : "bg-white text-slate-600 border-slate-300 hover:border-blue-500"}`}>Todas</button>{[...new Set(variantesEquivalentes(resultado.w, resultado.p, resultado.r).map(v => v.llanta))].sort((a, b) => a - b).map(ll => (<button key={ll} onClick={() => setFiltroLlanta(String(ll))} className={`px-3 py-1.5 text-xs font-bold rounded-full border transition ${filtroLlanta === String(ll) ? "bg-blue-700 text-white border-blue-700" : "bg-white text-slate-600 border-slate-300 hover:border-blue-500"}`}>R{ll}</button>))}</div><ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden">{variantesEquivalentes(resultado.w, resultado.p, resultado.r).filter(v => filtroLlanta === "todas" || String(v.llanta) === filtroLlanta).map(v => (<li key={v.texto} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm"><span className="font-bold text-slate-900">{v.texto}</span><span className="text-slate-500 whitespace-nowrap">Ø {fmtV(v.d)} mm · <span className="font-semibold text-slate-700">{fmtDif(v.dif)}</span></span></li>))}</ul></section>)}
          <div className="mt-5 flex gap-2.5 items-start bg-amber-50 border border-amber-300 rounded-2xl p-4">
            <span className="text-xl leading-none">⚠️</span>
            <p className="text-sm text-amber-900"><strong>Advertencia legal:</strong> en España, para que un neumático se considere equivalente y sea apto para la ITV, su diámetro exterior no puede variar más del ±3% respecto a la medida original homologada. Esta calculadora es orientativa: confirma siempre la medida con tu ficha técnica, tu ITV o tu taller antes de montar neumáticos nuevos. Es una estimación orientativa. Respeta siempre un índice de carga y un código de velocidad iguales o superiores a los de tu ficha técnica, y un ancho de llanta compatible. Ante cualquier duda, consulta en tu ITV.</p>
          </div>
          </section>

      <figure className="my-8">
        <img src="/media/neumaticos-comparativa-medidas.webp" alt="Dos neumáticos de medidas distintas comparados lado a lado con una cinta métrica en un taller" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<section aria-label="Ejemplo de equivalencias dentro del ±3 %" className="overflow-x-auto">         <h2 className="text-xl sm:text-2xl font-bold mb-4">Ejemplo de equivalencias dentro del ±3 %</h2>         <p className="text-slate-600 mb-4">Medida original 205/55 R16 = 631,9 mm. Rango admitido: 612,9–650,9 mm.</p>         <table className="w-full text-sm border border-slate-200 rounded-xl">           <thead>             <tr className="bg-slate-100 text-left">               <th className="px-4 py-2 font-semibold">Medida</th>               <th className="px-4 py-2 font-semibold">Diámetro</th>               <th className="px-4 py-2 font-semibold">Diferencia</th>             </tr>           </thead>           <tbody>             <tr className="border-t border-slate-200"><td className="px-4 py-2">215/45 R17</td><td className="px-4 py-2">625,3 mm</td><td className="px-4 py-2">−1,0 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">195/55 R16</td><td className="px-4 py-2">620,9 mm</td><td className="px-4 py-2">−1,7 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">225/50 R16</td><td className="px-4 py-2">631,4 mm</td><td className="px-4 py-2">−0,1 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">225/45 R17</td><td className="px-4 py-2">634,3 mm</td><td className="px-4 py-2">+0,4 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">205/50 R17</td><td className="px-4 py-2">636,8 mm</td><td className="px-4 py-2">+0,8 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">215/55 R16</td><td className="px-4 py-2">642,9 mm</td><td className="px-4 py-2">+1,7 %</td></tr>           </tbody>         </table>       </section>
          <div className="flex gap-2.5 items-center justify-center">
          <a href="https://wa.me/?text=Equivalencia%20de%20neum%C3%A1ticos%20para%20ITV%20https%3A%2F%2Frecurretumulta.online%2Fequivalencia-neumaticos-itv" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Equivalencia%20de%20neum%C3%A1ticos%20para%20ITV&url=https%3A%2F%2Frecurretumulta.online%2Fequivalencia-neumaticos-itv" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fequivalencia-neumaticos-itv" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      <section aria-label="Fuentes oficiales" className="rounded-2xl border border-slate-200 p-5">         <h2 className="text-xl sm:text-2xl font-bold mb-3">Fuentes oficiales</h2>         <ul className="list-disc pl-5 space-y-1 text-slate-600">           <li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dirección General de Tráfico (DGT)</a></li>           <li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Sede electrónica de la DGT</a></li>         </ul>       </section>
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Qué significa neumático equivalente?</h3><p className="text-slate-600">Que su diámetro no varía más del ±3% respecto al original.</p></div>
            <div><h3 className="font-bold mb-1">¿Dónde miro la medida original?</h3><p className="text-slate-600">En la ficha técnica de la ITV y en el lateral del neumático.</p></div>
            <div><h3 className="font-bold mb-1">¿Hay multa por neumáticos no equivalentes?</h3><p className="text-slate-600">Sí, 200 € y defecto grave en ITV.</p></div>
                  <div><h3 className="font-bold mb-1">¿Puedo pasar la ITV con neumáticos equivalentes?</h3><p className="text-slate-600">Sí, siempre que el diámetro total no varíe más del ±3 % respecto a la medida original homologada y se respeten el índice de carga, el código de velocidad y el ancho de llanta.</p></div>         <div><h3 className="font-bold mb-1">¿El ±3 % garantiza la homologación?</h3><p className="text-slate-600">No. El ±3 % es solo el requisito del diámetro: también importan el índice de carga, el código de velocidad y el ancho de llanta, que deben ser adecuados para tu vehículo.</p></div></div>
        </section>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Multa por el estado de tu coche?</h2>
          <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</Link>
        </div>

        <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Más herramientas</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/herramientas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Todas las herramientas</Link>
            <Link to="/calculadora-kw-a-cv/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Conversor kW a CV</Link>
            <Link to="/blog/ruedas-de-km0-chollo-o-timo-pros-contras-precios-reales-y-multas-por-neumaticos-caducados-o-gastados/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Ruedas de Km0: chollo o timo</Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
