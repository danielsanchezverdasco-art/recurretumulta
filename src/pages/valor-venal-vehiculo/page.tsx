import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Valor venal del coche", "url": "https://recurretumulta.online/valor-venal-vehiculo", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Qué es el valor venal?", "acceptedAnswer": { "@type": "Answer", "text": "Estimación orientativa del valor actual según antigüedad y kilómetros." } }, { "@type": "Question", "name": "¿Es válido ante el seguro o Hacienda?", "acceptedAnswer": { "@type": "Answer", "text": "No, es solo orientativo. No sustituye una tasación profesional." } }, { "@type": "Question", "name": "¿Qué es el valor de reposición?", "acceptedAnswer": { "@type": "Answer", "text": "Lo que costaría adquirir un vehículo similar en el mercado." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Valor venal", "item": "https://recurretumulta.online/valor-venal-vehiculo" } ] } ] };

export default function ValorVenalVehiculoPage() {
  useSeo({
    title: "Valor venal del coche: calcúlalo gratis",
    description: "Calcula gratis el valor venal de tu coche: estimación orientativa según antigüedad y kilómetros, útil ante siniestros, ventas o reclamaciones.",
    canonical: "/valor-venal-vehiculo",
    keywords: ["valor venal vehiculo", "calcular valor venal coche", "tabla valor venal dgt"],
  });

  const [precio, setPrecio] = useState("22000");
  const [anos, setAnos] = useState("6");
  const [km, setKm] = useState("120000");
  const p0 = parseFloat(precio) || 0;
  const a = Math.min(Math.floor(parseFloat(anos) || 0), 30);
  const kmN = parseFloat(km) || 0;
  // Porcentajes de depreciación oficiales de la Orden HAC/1501/2025 (BOE-A-2025-26357),
  // los mismos de la tabla que se muestra en esta página: índice = antigüedad en años, con tope en 12.
  const PORCENTAJES_HACIENDA = [100, 84, 67, 56, 47, 39, 34, 28, 24, 19, 17, 13, 10];
  let v = p0 * (PORCENTAJES_HACIENDA[Math.min(a, 12)] / 100);
  const kmRef = a * 15000;
  const diff = kmN - kmRef;
  v *= Math.max(0.7, Math.min(1.15, 1 - diff / 1000000));
  v = Math.max(0, Math.round(v));
  const deprec = p0 ? Math.round((1 - v / p0) * 100) : 0;
  const fmtEur = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/file_6pZAnJSViJ3SBvqILrY1RgUX.webp" alt="Coche de segunda mano a la venta en un concesionario" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link><span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link><span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">Valor venal</span>
            </motion.nav>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.08}}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratuita · Sin registro</span>
              </div>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.16}} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Valor venal del coche
            </motion.h1>
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.24}} className="text-white/80 text-sm md:text-base leading-relaxed">
              Estimación orientativa del valor actual de tu coche según antigüedad y kilómetros. Útil ante siniestros, ventas o reclamaciones.
            </motion.p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">
      <section aria-label="Qué es el valor venal" className="space-y-3">         <h2 className="text-xl sm:text-2xl font-bold">¿Qué es el valor venal de un vehículo?</h2>         <p className="text-slate-600">El valor venal es el precio que tendría tu vehículo si lo vendieras hoy en el mercado de segunda mano: una estimación orientativa de su valor actual según su antigüedad y características.</p>         <p className="text-slate-600">Se utiliza como referencia para calcular indemnizaciones por siniestro total y para liquidar impuestos como el Impuesto sobre Transmisiones Patrimoniales (ITP) o el Impuesto sobre Sucesiones.</p>         <p className="text-slate-600">Hacienda publica cada año las tablas oficiales de valoración en el BOE: la Orden HAC/1501/2025, de 17 de diciembre, aprueba los precios medios de venta vigentes para 2026.</p>       </section>

        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            <div><label htmlFor="precio" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Precio nuevo (€)</label><input id="precio" type="number" value={precio} min="0" onChange={(e) => setPrecio(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" /></div>
            <div><label htmlFor="anos" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Antigüedad (años)</label><input id="anos" type="number" value={anos} min="0" max="30" onChange={(e) => setAnos(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" /></div>
            <div><label htmlFor="km" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Kilómetros</label><input id="km" type="number" value={km} min="0" onChange={(e) => setKm(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" /></div>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Valor venal estimado</p>
            <p className="text-4xl font-bold font-mono text-green-700 mb-2">{fmtEur(v)} €</p>
            <p className="text-sm text-slate-500">Depreciación aplicada: {deprec} % sobre el precio nuevo</p>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4 max-w-2xl mx-auto">Modelo: porcentajes oficiales de la Orden HAC/1501/2025, 15.000 km/año de referencia. No es tasación profesional ni fiscal.</p>
        </section>

<section aria-label="Porcentajes de depreciación por antigüedad" className="overflow-x-auto">         <h2 className="text-xl sm:text-2xl font-bold mb-4">Porcentajes de depreciación por antigüedad (tablas oficiales de Hacienda)</h2>         <table className="w-full text-sm border border-slate-200 rounded-xl">           <thead>             <tr className="bg-slate-100 text-left">               <th className="px-4 py-2 font-semibold">Antigüedad</th>               <th className="px-4 py-2 font-semibold">Porcentaje sobre el precio medio</th>             </tr>           </thead>           <tbody>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Hasta 1 año</td><td className="px-4 py-2">100 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 1 año, hasta 2</td><td className="px-4 py-2">84 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 2 años, hasta 3</td><td className="px-4 py-2">67 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 3 años, hasta 4</td><td className="px-4 py-2">56 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 4 años, hasta 5</td><td className="px-4 py-2">47 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 5 años, hasta 6</td><td className="px-4 py-2">39 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 6 años, hasta 7</td><td className="px-4 py-2">34 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 7 años, hasta 8</td><td className="px-4 py-2">28 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 8 años, hasta 9</td><td className="px-4 py-2">24 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 9 años, hasta 10</td><td className="px-4 py-2">19 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 10 años, hasta 11</td><td className="px-4 py-2">17 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 11 años, hasta 12</td><td className="px-4 py-2">13 %</td></tr>             <tr className="border-t border-slate-200"><td className="px-4 py-2">Más de 12 años</td><td className="px-4 py-2">10 %</td></tr>           </tbody>         </table>         <p className="text-sm text-slate-500 mt-3">El resultado se reduce al 70 % si el vehículo estuvo dedicado más de seis meses a autoescuela, alquiler sin conductor o taxi. Fuente: Orden HAC/1501/2025 (BOE-A-2025-26357).</p>       </section>
        <figure className="overflow-hidden rounded-2xl border border-slate-200">
          <img src="/media/file_MQlPJJmlt72odiMRpxeywm6m.webp" alt="Coche con etiqueta de precio: estimación orientativa del valor venal del vehículo" width={1920} height={1280} loading="lazy" className="w-full h-auto block" />
        </figure>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-700">Compartir:</span>
          <a href="https://wa.me/?text=Valor%20venal%20del%20coche%20https%3A%2F%2Frecurretumulta.online%2Fvalor-venal-vehiculo" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Valor%20venal%20del%20coche&url=https%3A%2F%2Frecurretumulta.online%2Fvalor-venal-vehiculo" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fvalor-venal-vehiculo" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      <section aria-label="Fuentes oficiales" className="rounded-2xl border border-slate-200 p-5">         <h2 className="text-xl sm:text-2xl font-bold mb-3">Fuentes oficiales</h2>         <ul className="list-disc pl-5 space-y-1 text-slate-600">           <li><a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26357" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">BOE: Orden HAC/1501/2025, tablas de precios medios de venta de vehículos para 2026</a></li>           <li><a href="https://sede.agenciatributaria.gob.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Sede electrónica de la Agencia Tributaria</a></li>         </ul>       </section>
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Qué es el valor venal?</h3><p className="text-slate-600">Estimación orientativa del valor actual según antigüedad y kilómetros.</p></div>
            <div><h3 className="font-bold mb-1">¿Es válido ante el seguro o Hacienda?</h3><p className="text-slate-600">No, es solo orientativo. No sustituye una tasación profesional.</p></div>
            <div><h3 className="font-bold mb-1">¿Qué es el valor de reposición?</h3><p className="text-slate-600">Lo que costaría adquirir un vehículo similar en el mercado.</p></div>
                  <div><h3 className="font-bold mb-1">¿El valor venal es lo que me paga el seguro?</h3><p className="text-slate-600">Es la referencia habitual cuando hay siniestro total, pero lo que realmente te paga el seguro depende de las condiciones de tu póliza.</p></div>         <div><h3 className="font-bold mb-1">¿Cada cuánto se actualizan las tablas?</h3><p className="text-slate-600">Cada año, por Orden ministerial: Hacienda publica en el BOE los precios medios de venta y los porcentajes de depreciación vigentes para el ejercicio siguiente.</p></div></div>
        </section>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Problemas con una indemnización o una multa?</h2>
          <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</Link>
        </div>

        <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Más herramientas</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/herramientas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Todas las herramientas</Link>
            <Link to="/mejor-coche-por-presupuesto/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">¿Qué coche me compro con mi presupuesto?</Link>
            <Link to="/calculadora-kw-a-cv/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Conversor kW a CV</Link>
            <Link to="/calculadora-consumo-camper/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Consumo camper</Link>
            <Link to="/equivalencia-neumaticos-itv/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Equivalencia neumáticos</Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
