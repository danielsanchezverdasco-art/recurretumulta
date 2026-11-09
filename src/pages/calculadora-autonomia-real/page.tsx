import { Link } from "react-router-dom";
import { useState } from "react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Calculadora de autonomía real de un coche eléctrico", "url": "https://recurretumulta.online/calculadora-autonomia-real", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Por qué la autonomía WLTP no se cumple en la vida real?", "acceptedAnswer": { "@type": "Answer", "text": "El ciclo WLTP de homologación se mide en condiciones ideales: temperatura templada, sin climatización, conducción suave y sin viento. Por eso casi ningún conductor lo alcanza en el día a día." } }, { "@type": "Question", "name": "¿Cuánta autonomía quita el frío a un coche eléctrico?", "acceptedAnswer": { "@type": "Answer", "text": "Bastante: por debajo de 0 °C la autonomía real puede caer en torno a un 25 %. La batería rinde peor en frío y la calefacción del habitáculo consume mucha energía." } }, { "@type": "Question", "name": "¿En autopista se gasta más batería que en ciudad?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. La resistencia aerodinámica crece con el cuadrado de la velocidad, así que a 120 km/h el consumo se dispara. En ciudad el frenado regenerativo compensa parte del gasto." } }, { "@type": "Question", "name": "¿Esta calculadora vale para híbridos?", "acceptedAnswer": { "@type": "Answer", "text": "No. Es solo para coches eléctricos puros (BEV). Los híbridos dependen también del depósito de combustible, así que la autonomía eléctrica no cuenta toda la historia." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Calculadora de autonomía real", "item": "https://recurretumulta.online/calculadora-autonomia-real" } ] } ] };

const TEMP_FACTORS = [
  { value: "1.0", label: "Más de 20 °C" },
  { value: "0.95", label: "10-20 °C" },
  { value: "0.85", label: "0-10 °C" },
  { value: "0.75", label: "Bajo 0 °C" },
] as const;

const USO_FACTORS = [
  { value: "1.05", label: "Ciudad" },
  { value: "1.0", label: "Mixto" },
  { value: "0.8", label: "Autopista 120 km/h" },
] as const;

const BASE_FACTOR = 0.85;
const CLIMA_FACTOR = 0.92;

export default function CalculadoraAutonomiaRealPage() {
  useSeo({
    title: "Calculadora autonomía real coche eléctrico gratis",
    description: "Calcula la autonomía real de tu coche eléctrico desde el WLTP: frío, autopista y climatización. Estimación honesta, gratis.",
    canonical: "/calculadora-autonomia-real",
    keywords: ["Calculadora de autonomía real coche eléctrico", "autonomia real vs WLTP", "cuanta autonomia quita el frio"],
  });

  const [wltp, setWltp] = useState("420");
  const [temp, setTemp] = useState("1.0");
  const [uso, setUso] = useState("1.0");
  const [clima, setClima] = useState("no");

  const wltpNum = parseFloat(wltp);
  const valid = !isNaN(wltpNum) && wltpNum > 0;
  const tempF = parseFloat(temp);
  const usoF = parseFloat(uso);
  const climaF = clima === "si" ? CLIMA_FACTOR : 1.0;
  const resultado = valid ? Math.round(wltpNum * BASE_FACTOR * tempF * usoF * climaF) : null;

  const tempLabel = TEMP_FACTORS.find((t) => t.value === temp)?.label ?? temp;
  const usoLabel = USO_FACTORS.find((u) => u.value === uso)?.label ?? uso;

  const breakdown: { label: string; factor: string }[] = [
    { label: "Autonomía WLTP declarada", factor: `${valid ? wltpNum.toLocaleString("es-ES") : "—"} km` },
    { label: "Ajuste WLTP → real (×0,85)", factor: valid ? `${Math.round(wltpNum * BASE_FACTOR).toLocaleString("es-ES")} km` : "—" },
    { label: `Temperatura: ${tempLabel}`, factor: `×${tempF.toLocaleString("es-ES")}` },
    { label: `Tipo de uso: ${usoLabel}`, factor: `×${usoF.toLocaleString("es-ES")}` },
    { label: `Climatización: ${clima === "si" ? "encendida" : "apagada"}`, factor: clima === "si" ? "×0,92" : "×1,0" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        {/* Hero animado estilo blog */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/autonomia-real.webp" alt="Coche eléctrico circulando por una autopista española al atardecer" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Autonomía real</span>
            </nav>
            <div>
              <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Herramienta gratuita · Sin registro</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Calculadora de autonomía real de un coche eléctrico
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              El WLTP es optimista por diseño. Introduce la autonomía declarada y ajusta por temperatura, uso y climatización para obtener una estimación realista.
            </p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">

        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="wltp" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Autonomía WLTP (km)</label>
              <input id="wltp" type="number" value={wltp} min="0" step="1" onChange={(e) => setWltp(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" />
              <p className="mt-2 text-xs text-slate-500">La que anuncia el fabricante en la ficha técnica.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="temp" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Temperatura ambiente</label>
              <select id="temp" value={temp} onChange={(e) => setTemp(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-base font-bold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                {TEMP_FACTORS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="uso" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Tipo de uso</label>
              <select id="uso" value={uso} onChange={(e) => setUso(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-base font-bold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                {USO_FACTORS.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="clima" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Climatización</label>
              <select id="clima" value={clima} onChange={(e) => setClima(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-base font-bold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                <option value="no">No (apagada)</option>
                <option value="si">Sí (calefacción o A/A)</option>
              </select>
            </div>
          </div>

          <div className="mt-6 bg-slate-900 rounded-2xl p-6 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-400 font-bold mb-1">Tu autonomía real estimada</p>
            <p className="text-5xl font-black text-green-400 font-mono">{resultado !== null ? resultado.toLocaleString("es-ES") : "—"}</p>
            <p className="text-slate-400 text-sm mt-1">km</p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-slate-800 mb-3">Desglose de factores aplicados</h2>
            <ul className="space-y-2">
              {breakdown.map((b) => (
                <li key={b.label} className="flex items-center justify-between gap-3 text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                  <span className="text-slate-600">{b.label}</span>
                  <span className="font-mono font-bold text-slate-800 whitespace-nowrap">{b.factor}</span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 text-sm bg-green-50 border border-green-200 rounded-xl px-4 py-2.5">
                <span className="text-green-900 font-semibold">Resultado final</span>
                <span className="font-mono font-black text-green-700 whitespace-nowrap">{resultado !== null ? `${resultado.toLocaleString("es-ES")} km` : "—"}</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
                <figure className="my-8">
        <img src="/media/autonomia-real-carga.webp" alt="Coche eléctrico cargando en una electrolinera de una autopista española al atardecer" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mb-4">Metodología: de dónde salen estos factores</h2>
          <p className="text-slate-600 mb-4">Esta calculadora no hace promesas: ofrece una <strong>estimación honesta</strong>. Los factores son conservadores y se explican por física básica:</p>
          <ul className="space-y-3 text-slate-600">
            <li><strong className="text-slate-800">Punto de partida ×0,85 del WLTP.</strong> El ciclo de homologación se mide con temperatura ideal, sin climatización y con conducción suave. Casi nadie lo alcanza en el día a día, así que partimos de un 85 %.</li>
            <li><strong className="text-slate-800">Temperatura.</strong> El frío reduce la eficiencia química de la batería y obliga a calentarla (y al habitáculo). A más de 20 °C no hay penalización (×1,0); de 10 a 20 °C, ×0,95; de 0 a 10 °C, ×0,85; bajo 0 °C, ×0,75.</li>
            <li><strong className="text-slate-800">Tipo de uso.</strong> En autopista a 120 km/h la resistencia aerodinámica (que crece con el cuadrado de la velocidad) dispara el consumo: ×0,80. En ciudad el frenado regenerativo recupera energía: ×1,05. Uso mixto: ×1,0.</li>
            <li><strong className="text-slate-800">Climatización.</strong> La calefacción y el aire acondicionado consumen varios kW sostenidos: si está encendida, ×0,92.</li>
          </ul>
          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-5">Aviso: es una estimación con fines orientativos. Tu estilo de conducción, el estado de la batería, el viento y la orografía también influyen.</p>
        </section>

        <figure className="mb-2">
          <video src="/media/autonomia-real.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: coche eléctrico circulando por una autopista española al atardecer" />
          <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: la autonomía real se decide en carretera, no en el laboratorio.</figcaption>
        </figure>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-700">Compartir:</span>
          <a href="https://wa.me/?text=Calculadora%20gratuita%20de%20autonom%C3%ADa%20real%20de%20coches%20el%C3%A9ctricos%20https%3A%2F%2Frecurretumulta.online%2Fcalculadora-autonomia-real" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Calculadora%20gratuita%20de%20autonom%C3%ADa%20real%20de%20coches%20el%C3%A9ctricos&url=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-autonomia-real" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-autonomia-real" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Por qué la autonomía WLTP no se cumple en la vida real?</h3><p className="text-slate-600">El ciclo WLTP de homologación se mide en condiciones ideales: temperatura templada, sin climatización, conducción suave y sin viento. Por eso casi ningún conductor lo alcanza en el día a día.</p></div>
            <div><h3 className="font-bold mb-1">¿Cuánta autonomía quita el frío a un coche eléctrico?</h3><p className="text-slate-600">Bastante: por debajo de 0 °C la autonomía real puede caer en torno a un 25 %. La batería rinde peor en frío y la calefacción del habitáculo consume mucha energía.</p></div>
            <div><h3 className="font-bold mb-1">¿En autopista se gasta más batería que en ciudad?</h3><p className="text-slate-600">Sí. La resistencia aerodinámica crece con el cuadrado de la velocidad, así que a 120 km/h el consumo se dispara. En ciudad el frenado regenerativo compensa parte del gasto.</p></div>
            <div><h3 className="font-bold mb-1">¿Esta calculadora vale para híbridos?</h3><p className="text-slate-600">No. Es solo para coches eléctricos puros (BEV). Los híbridos dependen también del depósito de combustible, así que la autonomía eléctrica no cuenta toda la historia.</p></div>
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
            <Link to="/calculadora-etiqueta-dgt/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Calculadora de etiqueta DGT</Link>
            <Link to="/comparador-coches/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Comparador de coches eléctricos</Link>
            <Link to="/blog/como-recurrir-multas-de-la-zbe-en-madrid-barcelona-y-toda-espana-guia-definitiva-y-modelos-con-ia/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Zonas de Bajas Emisiones (ZBE)</Link>
            <Link to="/blog/recurrir-multa-radar-velocidad/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Cómo recurrir una multa de radar</Link>
            <Link to="/blog/defectos-forma-anulan-multa-dgt/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Defectos de forma que anulan multas</Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
