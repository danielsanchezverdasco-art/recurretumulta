import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Conversor de kW a CV y CV a kW", "url": "https://recurretumulta.online/calculadora-kw-a-cv", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Cómo se convierten kW a CV?", "acceptedAnswer": { "@type": "Answer", "text": "Multiplica los kilovatios por 1,35962. Ejemplo: 110 kW × 1,35962 = 149,56 CV." } }, { "@type": "Question", "name": "¿Y de CV a kW?", "acceptedAnswer": { "@type": "Answer", "text": "Divide los caballos entre 1,35962. Ejemplo: 150 CV ÷ 1,35962 = 110,33 kW." } }, { "@type": "Question", "name": "¿Dónde miro los kW de mi coche?", "acceptedAnswer": { "@type": "Answer", "text": "En el permiso de circulación, apartado P.2, y en la tarjeta de la ITV." } }, { "@type": "Question", "name": "¿Un error en la potencia anula la multa automáticamente?", "acceptedAnswer": { "@type": "Answer", "text": "No. Puede alegarse como defecto de forma dentro del recurso, pero quien decide es el organismo que tramita la sanción." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Conversor kW a CV", "item": "https://recurretumulta.online/calculadora-kw-a-cv" } ] } ] };

export default function CalculadoraKwACvPage() {
  useSeo({
    title: "Conversor kW a CV gratis 2026",
    description: "Convierte kilovatios (kW) a caballos (CV) y al revés gratis. Comprueba la potencia de tu ficha técnica y detecta errores en multas de radar de la DGT.",
    canonical: "/calculadora-kw-a-cv",
    keywords: ["Conversor de kW a CV y CV a kW gratis", "convertir kw a cv", "potencia vehiculo kw cv"],
  });

  const [kw, setKw] = useState("110");
  const [cv, setCv] = useState("150");
  const F = 1.35962;
  const fmt = (n: number) => n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const kwNum = parseFloat(kw);
  const cvNum = parseFloat(cv);
  const kwToCv = isNaN(kwNum) ? "—" : fmt(kwNum * F);
  const cvToKw = isNaN(cvNum) ? "—" : fmt(cvNum / F);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/file_MBuRNvnQCSEfzLMiHKRi9qMQ.webp" alt="Motor de coche: equivalencia de potencia entre kilovatios (kW) y caballos de vapor (CV)" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link><span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link><span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">Conversor kW a CV</span>
            </motion.nav>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.08}}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratuita · Sin registro</span>
              </div>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.16}} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Conversor de kW a CV y CV a kW gratis
            </motion.h1>
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.24}} className="text-white/80 text-sm md:text-base leading-relaxed">
              Pasa la potencia de tu ficha técnica de kilovatios a caballos (y al revés) y comprueba que los datos de tu denuncia de la DGT cuadran con los reales.
            </motion.p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">
        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="kw" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Kilovatios (kW)</label>
              <input id="kw" type="number" value={kw} min="0" step="0.1" onChange={(e) => setKw(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" />
              <p className="mt-3 text-sm text-slate-600">= <strong className="text-green-700 text-lg font-mono">{kwToCv}</strong> CV</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="cv" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Caballos (CV)</label>
              <input id="cv" type="number" value={cv} min="0" step="0.1" onChange={(e) => setCv(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" />
              <p className="mt-3 text-sm text-slate-600">= <strong className="text-green-700 text-lg font-mono">{cvToKw}</strong> kW</p>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-5">Factor aplicado: 1 kW = 1,35962 CV</p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">

      <figure className="my-8">
        <img src="/media/kw-cv-equivalencia.webp" alt="Motor de coche moderno: equivalencia de potencia entre kilovatios (kW) y caballos de vapor (CV)" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mb-4">¿Para qué sirve esto ante una multa?</h2>
          <p className="text-slate-600 mb-4">La denuncia debe identificar correctamente tu vehículo. Si la potencia que figura en el boletín no coincide con la de tu permiso de circulación (apartado P.2) ni con la ficha de la ITV, esa discrepancia puede incluirse en tu recurso como defecto de forma.</p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600">
            <li>Localiza la potencia en tu denuncia y en tu permiso de circulación.</li>
            <li>Convierte ambas cifras con esta calculadora.</li>
            <li>Si no cuadran, menciónalo en tus alegaciones junto al resto de motivos.</li>
          </ol>
          <p className="text-sm text-slate-500 mt-4">Ten en cuenta que un defecto de forma no garantiza la anulación: la decisión la toma el organismo sancionador.</p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold">De dónde sale el factor 1,35962</h2>
          <p className="text-slate-600">El caballo de vapor métrico (CV, o PS en alemán) se define como la potencia necesaria para elevar 75 kilogramos a un metro de altura en un segundo, que equivale a 735,49875 vatios. Dividiendo 1.000 W entre esa cifra sale el factor de esta página: 1 kW son 1,35962 CV, y 1 CV son 0,73550 kW. No hay que confundirlo con el «hp» anglosajón, que vale 745,69987 W: un hp es un 1,4 % más potente que un CV, así que 100 hp son 101,39 CV. Si la ficha de un coche importado indica hp, conviene convertirlo antes de compararlo con el permiso español.</p>

          <h3 className="text-lg font-bold">Umbrales de potencia que fija la ley</h3>
          <p className="text-slate-600">El artículo 4 del Reglamento General de Conductores (Real Decreto 818/2009) pone límites en kW que en las fichas comerciales suelen aparecer en CV. Esta tabla los traduce con el mismo factor de la calculadora:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-700"><tr><th className="px-3 py-2">Límite en la norma</th><th className="px-3 py-2">kW</th><th className="px-3 py-2">CV</th></tr></thead>
              <tbody className="text-slate-600">
                <tr className="border-t border-slate-100"><td className="px-3 py-2">Permiso A1 (moto hasta 125 cm³, 0,1 kW/kg)</td><td className="px-3 py-2">11</td><td className="px-3 py-2">14,96</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">Triciclo de motor accesible con A1 o B antes de los 21 años</td><td className="px-3 py-2">15</td><td className="px-3 py-2">20,39</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">Permiso A2 (0,2 kW/kg)</td><td className="px-3 py-2">35</td><td className="px-3 py-2">47,59</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600">La DGT resume el límite del A2 como «algo menos de 47 cv», que coincide con el cálculo. Los 35 kW solo son una de las dos condiciones: la moto tampoco puede superar 0,2 kW por kilo ni derivar de un modelo con más del doble de potencia. Circular con una moto que excede esos valores sin el permiso correspondiente es una infracción distinta de las multas de velocidad.</p>

          <h3 className="text-lg font-bold">Potencia real y caballos fiscales no son lo mismo</h3>
          <p className="text-slate-600">En la tarjeta ITV y en el recibo del impuesto de circulación aparece también la potencia fiscal, que no se mide en un banco de pruebas. El Anexo V del Reglamento General de Vehículos (Real Decreto 2822/1998) la calcula con la fórmula 0,08 × cilindrada unitaria elevada a 0,6 × número de cilindros para los motores de cuatro tiempos, y con kW ÷ 5,152 para los eléctricos, siempre redondeando por defecto a dos decimales. El resultado decide la cuota base del impuesto de vehículos de tracción mecánica según el artículo 95 del texto refundido de la Ley de Haciendas Locales, que luego cada ayuntamiento puede multiplicar por un coeficiente de hasta 2.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-700"><tr><th className="px-3 py-2">Motor (ejemplo calculado)</th><th className="px-3 py-2">Potencia fiscal</th><th className="px-3 py-2">Cuota base turismo</th></tr></thead>
              <tbody className="text-slate-600">
                <tr className="border-t border-slate-100"><td className="px-3 py-2">999 cm³, 3 cilindros</td><td className="px-3 py-2">7,82 CVF</td><td className="px-3 py-2">12,62 €</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">1.598 cm³, 4 cilindros</td><td className="px-3 py-2">11,64 CVF</td><td className="px-3 py-2">34,08 €</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">1.998 cm³, 4 cilindros</td><td className="px-3 py-2">13,31 CVF</td><td className="px-3 py-2">71,94 €</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">2.999 cm³, 6 cilindros</td><td className="px-3 py-2">19,97 CVF</td><td className="px-3 py-2">89,61 €</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">Eléctrico de 100 kW</td><td className="px-3 py-2">19,40 CVF</td><td className="px-3 py-2">89,61 €</td></tr>
                <tr className="border-t border-slate-100"><td className="px-3 py-2">Eléctrico de 150 kW</td><td className="px-3 py-2">29,11 CVF</td><td className="px-3 py-2">112,00 €</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">Cálculos propios aplicando las fórmulas del BOE a los motores de ejemplo. Los tramos son los del artículo 95.1 del Real Decreto Legislativo 2/2004 (menos de 8 CVF: 12,62 €; de 8 a 11,99: 34,08 €; de 12 a 15,99: 71,94 €; de 16 a 19,99: 89,61 €; desde 20: 112,00 €), según su texto consolidado consultado el 31/10/2026. Fuentes: <a className="underline" href="https://www.boe.es/buscar/act.php?id=BOE-A-2009-9481" target="_blank" rel="noopener noreferrer">Reglamento General de Conductores</a>, <a className="underline" href="https://www.boe.es/buscar/act.php?id=BOE-A-1999-1826" target="_blank" rel="noopener noreferrer">Reglamento General de Vehículos</a>, <a className="underline" href="https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214" target="_blank" rel="noopener noreferrer">Ley de Haciendas Locales</a> y la <a className="underline" href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/clases-de-permisos-de-conducir/" target="_blank" rel="noopener noreferrer">página de clases de permisos de la DGT</a>.</p>
          <p className="text-xs text-slate-500">Redacción: Equipo editorial de RecurreTuMulta.</p>
        </section>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-700">Compartir:</span>
          <a href="https://wa.me/?text=Conversor%20gratuito%20de%20kW%20a%20CV%20y%20CV%20a%20kW%20https%3A%2F%2Frecurretumulta.online%2Fcalculadora-kw-a-cv" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Conversor%20gratuito%20de%20kW%20a%20CV%20y%20CV%20a%20kW&url=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-kw-a-cv" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-kw-a-cv" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Cómo se convierten kW a CV?</h3><p className="text-slate-600">Multiplica los kilovatios por 1,35962. Ejemplo: 110 kW × 1,35962 = 149,56 CV.</p></div>
            <div><h3 className="font-bold mb-1">¿Y de CV a kW?</h3><p className="text-slate-600">Divide los caballos entre 1,35962. Ejemplo: 150 CV ÷ 1,35962 = 110,33 kW.</p></div>
            <div><h3 className="font-bold mb-1">¿Dónde miro los kW de mi coche?</h3><p className="text-slate-600">En el permiso de circulación, apartado P.2, y en la tarjeta de la ITV.</p></div>
            <div><h3 className="font-bold mb-1">¿Un error en la potencia anula la multa automáticamente?</h3><p className="text-slate-600">No. Puede alegarse como defecto de forma dentro del recurso, pero quien decide es el organismo que tramita la sanción.</p></div>
          </div>
        </section>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Te ha llegado una multa?</h2>
          <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA y descubre si tiene defectos recurribles.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</Link>
        </div>

        <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Más herramientas y guías</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/herramientas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Todas las herramientas</Link>
            <Link to="/buscador-codigo-multa/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Buscador de infracciones por código</Link>
            <Link to="/blog/margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Márgenes de error de los radares</Link>
            <Link to="/blog/recurrir-multa-radar-velocidad/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Cómo recurrir una multa de radar</Link>
            <Link to="/blog/defectos-forma-anulan-multa-dgt/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Defectos de forma que anulan multas</Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
