import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Plus, Trash2, TriangleAlert } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Calculadora de alcoholemia gratis", "url": "https://recurretumulta.online/calculadora-alcoholemia", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Cuánto tarda en bajar el alcohol en sangre?", "acceptedAnswer": { "@type": "Answer", "text": "El cuerpo elimina el alcohol a un ritmo de entre 0,10 y 0,15 gramos por litro y hora, y nada lo acelera: ni el café, ni la ducha fría, ni el aire, ni vomitar. Una vez en sangre, solo el tiempo lo baja." } }, { "@type": "Question", "name": "¿Qué factores influyen en la tasa de alcoholemia?", "acceptedAnswer": { "@type": "Answer", "text": "El peso corporal, el sexo, la cantidad y graduación de la bebida, si se ha comido (la comida retrasa la absorción pero no reduce el total) y el tiempo transcurrido. Por eso dos personas que beben lo mismo pueden dar tasas muy distintas." } }, { "@type": "Question", "name": "¿Cuáles son los límites legales de alcohol en España?", "acceptedAnswer": { "@type": "Answer", "text": "0,5 gramos por litro en sangre (0,25 mg/l en aire espirado) para conductores en general, y 0,3 g/l en sangre (0,15 mg/l en aire) para conductores noveles (menos de 2 años de carnet) y profesionales." } }, { "@type": "Question", "name": "¿Qué pasa si doy positivo en un control de alcoholemia?", "acceptedAnswer": { "@type": "Answer", "text": "Superar la tasa es una infracción grave: 500 € y 4 puntos, o 1.000 € y 6 puntos si superas el doble de la tasa o reincides. Por encima de 0,60 mg/l en aire espirado (o conducir bajo la influencia) es delito: prisión o multa y privación del permiso de 1 a 4 años." } }, { "@type": "Question", "name": "¿Puedo fiarme de esta calculadora para decidir si conduzco?", "acceptedAnswer": { "@type": "Answer", "text": "No. Es una estimación orientativa con la fórmula de Widmark y valores estándar; tu metabolismo real puede variar mucho. Si has bebido, no conduzcas: la única tasa segura es 0,0." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Calculadora de alcoholemia", "item": "https://recurretumulta.online/calculadora-alcoholemia" } ] } ] };

type Preset = { id: string; nombre: string; ml: number; grad: number };

const PRESETS: Preset[] = [
  { id: "cana", nombre: "Caña de cerveza", ml: 200, grad: 5 },
  { id: "tercio", nombre: "Tercio / botellín de cerveza", ml: 330, grad: 5 },
  { id: "vino", nombre: "Copa de vino", ml: 150, grad: 12 },
  { id: "vermut", nombre: "Vermut", ml: 100, grad: 15 },
  { id: "combinado", nombre: "Copa / combinado", ml: 50, grad: 40 },
  { id: "chupito", nombre: "Chupito", ml: 40, grad: 40 },
  { id: "custom", nombre: "Personalizada…", ml: 0, grad: 0 },
];

type Bebida = { key: number; presetId: string; unidades: number; ml: number; grad: number };

const DENSIDAD_ALCOHOL = 0.789; // g/ml
const ELIMINACION = 0.15; // g/l por hora
const R_HOMBRE = 0.68;
const R_MUJER = 0.55;

const fmtGl = (n: number) => n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function horaFinADate(hora: string): Date | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hora.trim());
  if (!m) return null;
  const d = new Date();
  d.setHours(parseInt(m[1], 10), parseInt(m[2], 10), 0, 0);
  if (d.getTime() > Date.now()) d.setDate(d.getDate() - 1); // si es futura, fue ayer
  return d;
}

export default function CalculadoraAlcoholemiaPage() {
  useSeo({
    title: "Calculadora alcoholemia gratis 2026: estima tu tasa",
    description: "Estima tu alcoholemia con la fórmula de Widmark: peso, sexo, bebidas y horas. Con los límites legales de la DGT. Gratis.",
    canonical: "/calculadora-alcoholemia",
    keywords: ["calculadora de alcoholemia", "cuanto tarda en bajar el alcohol", "tasa de alcoholemia", "limites alcohol dgt"],
  });

  const [peso, setPeso] = useState("75");
  const [sexo, setSexo] = useState<"hombre" | "mujer">("hombre");
  const [bebidas, setBebidas] = useState<Bebida[]>([{ key: 1, presetId: "cana", unidades: 2, ml: 200, grad: 5 }]);
  const [horaFin, setHoraFin] = useState(() => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  });
  const [nextKey, setNextKey] = useState(2);

  const pesoNum = parseFloat(peso);
  const pesoValido = !isNaN(pesoNum) && pesoNum >= 30 && pesoNum <= 250;
  const r = sexo === "hombre" ? R_HOMBRE : R_MUJER;

  const calc = useMemo(() => {
    if (!pesoValido) return null;
    let gramos = 0;
    for (const b of bebidas) {
      const ml = b.presetId === "custom" ? b.ml : (PRESETS.find((p) => p.id === b.presetId)?.ml ?? 0);
      const grad = b.presetId === "custom" ? b.grad : (PRESETS.find((p) => p.id === b.presetId)?.grad ?? 0);
      if (b.unidades > 0 && ml > 0 && grad > 0) gramos += b.unidades * ml * (grad / 100) * DENSIDAD_ALCOHOL;
    }
    if (gramos <= 0) return { gramos: 0, pico: 0, actual: 0, horasCero: 0, horaCero: null as Date | null, hayConsumo: false };
    const pico = gramos / (pesoNum * r);
    const fin = horaFinADate(horaFin);
    const horasTranscurridas = fin ? Math.max(0, (Date.now() - fin.getTime()) / 3600000) : 0;
    const actual = Math.max(0, pico - ELIMINACION * horasTranscurridas);
    const horasCero = actual / ELIMINACION;
    const horaCero = new Date(Date.now() + horasCero * 3600000);
    return { gramos, pico, actual, horasCero, horaCero, hayConsumo: true };
  }, [pesoValido, pesoNum, r, bebidas, horaFin]);

  const addBebida = () => {
    setBebidas((prev) => [...prev, { key: nextKey, presetId: "cana", unidades: 1, ml: 200, grad: 5 }]);
    setNextKey((k) => k + 1);
  };
  const updateBebida = (key: number, patch: Partial<Bebida>) =>
    setBebidas((prev) => prev.map((b) => (b.key === key ? { ...b, ...patch } : b)));
  const removeBebida = (key: number) => setBebidas((prev) => prev.filter((b) => b.key !== key));

  const estadoTasa = calc && calc.hayConsumo
    ? calc.actual >= 0.5
      ? { nivel: "alta" as const, texto: "Por encima del límite general (0,50 g/l)", color: "text-red-500" }
      : calc.actual >= 0.3
        ? { nivel: "media" as const, texto: "Por encima del límite de noveles y profesionales (0,30 g/l en sangre = 0,15 mg/l en aire)", color: "text-amber-400" }
        : calc.actual > 0.02
          ? { nivel: "baja" as const, texto: "Por debajo de los límites legales, pero no es una tasa segura", color: "text-amber-300" }
          : { nivel: "cero" as const, texto: "Estimación cercana a 0,0 g/l", color: "text-green-400" }
    : null;

  const barraPct = calc ? Math.min(100, (calc.actual / 1.0) * 100) : 0;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        {/* Hero animado estilo blog */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/alcoholemia.webp" alt="Agente de la Guardia Civil de Tráfico con etilómetro en un control de alcoholemia nocturno" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Alcoholemia</span>
            </nav>
            <div>
              <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Herramienta gratuita · Sin registro</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Calculadora de alcoholemia gratis
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Estima tu tasa de alcohol en sangre con la fórmula de Widmark según tu peso, sexo, lo que has bebido y las horas transcurridas. Orientativa, honesta y sin registro.
            </p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">

        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 flex gap-3" role="alert">
          <TriangleAlert className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm text-red-900">
            <p className="font-black mb-1">Aviso importante: esto es una estimación orientativa.</p>
            <p>No sirve para decidir si puedes conducir. Tu metabolismo real puede variar mucho y la única tasa segura es <strong>0,0</strong>. Si has bebido, no conduzcas.</p>
          </div>
        </div>

        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8" aria-label="Calculadora">
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="peso" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Tu peso (kg)</label>
              <input id="peso" type="number" value={peso} min="30" max="250" step="1" onChange={(e) => setPeso(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" />
              {!pesoValido && <p className="mt-2 text-xs text-red-600">Introduce un peso entre 30 y 250 kg.</p>}
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="sexo" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Sexo</label>
              <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value as "hombre" | "mujer")} className="w-full rounded-xl border border-slate-300 p-3 text-base font-bold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
              <p className="mt-2 text-xs text-slate-500">Influye en el reparto del alcohol en el cuerpo (fórmula de Widmark).</p>
            </div>
          </div>

          <div className="mt-4 max-w-2xl mx-auto">
            <h2 className="font-bold text-slate-800 mb-3">Lo que has bebido</h2>
            <div className="space-y-3">
              {bebidas.map((b) => {
                const preset = PRESETS.find((p) => p.id === b.presetId);
                return (
                  <div key={b.key} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="flex gap-2">
                      <select value={b.presetId} onChange={(e) => updateBebida(b.key, { presetId: e.target.value })} aria-label="Tipo de bebida" className="flex-1 min-w-0 rounded-xl border border-slate-300 p-3 text-base font-semibold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                        {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.nombre}{p.id !== "custom" ? ` (${p.ml} ml, ${p.grad}°)` : ""}</option>)}
                      </select>
                      <input type="number" min="0" max="50" step="1" value={b.unidades} onChange={(e) => updateBebida(b.key, { unidades: Math.max(0, parseInt(e.target.value || "0", 10)) })} aria-label="Unidades" className="w-20 rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono text-center focus:ring-2 focus:ring-green-500 outline-none" />
                      <button type="button" onClick={() => removeBebida(b.key)} aria-label="Eliminar bebida" className="w-12 shrink-0 rounded-xl border border-slate-300 text-slate-400 hover:text-red-600 hover:border-red-300 flex items-center justify-center">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    {b.presetId === "custom" && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <label className="text-xs text-slate-600">Mililitros<input type="number" min="0" value={b.ml} onChange={(e) => updateBebida(b.key, { ml: Math.max(0, parseFloat(e.target.value || "0")) })} className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 font-mono focus:ring-2 focus:ring-green-500 outline-none" /></label>
                        <label className="text-xs text-slate-600">Graduación (%)<input type="number" min="0" max="100" value={b.grad} onChange={(e) => updateBebida(b.key, { grad: Math.max(0, parseFloat(e.target.value || "0")) })} className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 font-mono focus:ring-2 focus:ring-green-500 outline-none" /></label>
                      </div>
                    )}
                    {preset && b.presetId !== "custom" && <p className="mt-2 text-xs text-slate-500">{b.unidades} × {preset.ml} ml al {preset.grad}% ≈ {(b.unidades * preset.ml * (preset.grad / 100) * DENSIDAD_ALCOHOL).toLocaleString("es-ES", { maximumFractionDigits: 1 })} g de alcohol puro.</p>}
                  </div>
                );
              })}
            </div>
            <button type="button" onClick={addBebida} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800 border border-green-300 rounded-xl px-4 py-2.5 hover:bg-green-50 transition">
              <Plus className="w-4 h-4" /> Añadir otra bebida
            </button>
          </div>

          <div className="mt-4 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="horafin" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">¿A qué hora terminaste de beber?</label>
              <input id="horafin" type="time" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" />
              <p className="mt-2 text-xs text-slate-500">El cuerpo elimina unos 0,15 g/l por hora desde que dejas de beber.</p>
            </div>
          </div>

          {calc && (
            <div className="mt-6 bg-slate-900 rounded-2xl p-6 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-400 font-bold mb-1">Tu alcoholemia estimada ahora</p>
              <p className="text-5xl font-black text-white font-mono">{calc.hayConsumo ? fmtGl(calc.actual) : "0,00"}</p>
              <p className="text-slate-400 text-sm mt-1">gramos por litro en sangre (estimación)</p>
              {estadoTasa && <p className={`font-bold mt-3 ${estadoTasa.color}`}>{estadoTasa.texto}</p>}
              <div className="mt-5 text-left">
                <div className="relative h-4 bg-slate-700 rounded-full overflow-visible">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-amber-400 to-red-500 rounded-full" style={{ width: `${barraPct}%` }} />
                  <div className="absolute inset-y-[-4px]" style={{ left: "30%" }} title="Límite noveles y profesionales: 0,30 g/l"><div className="w-0.5 h-6 bg-white/80" /></div>
                  <div className="absolute inset-y-[-4px]" style={{ left: "50%" }} title="Límite general: 0,50 g/l"><div className="w-0.5 h-6 bg-white/80" /></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                  <span>0</span><span>0,30 novel/prof.</span><span>0,50 general</span><span>1,0</span>
                </div>
              </div>
              {calc.hayConsumo && calc.actual > 0.02 && (
                <p className="text-slate-300 text-sm mt-4">Volverías a una estimación de 0,0 aproximadamente a las <strong className="text-white">{calc.horaCero ? calc.horaCero.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) : "—"}</strong> (unas {calc.horasCero.toLocaleString("es-ES", { maximumFractionDigits: 1 })} h desde ahora).</p>
              )}
              <p className="text-red-300 text-sm font-bold mt-4 border-t border-slate-700 pt-4">Aunque la estimación esté por debajo del límite legal, no significa que puedas conducir. Si has bebido, no conduzcas.</p>
            </div>
          )}
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
                <figure className="my-8">
        <img src="/media/alcoholimetro-faq.webp" alt="Alcoholímetro digital de la policía preparado para un control de alcoholemia" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mb-4">Límites legales en España</h2>
          <p className="text-slate-600 mb-4">La DGT fija dos límites de alcohol en sangre (arts. 20 y 21 del Reglamento General de Circulación):</p>
          <ul className="space-y-3 text-slate-600">
            <li className="bg-slate-50 border border-slate-200 rounded-xl p-4"><strong className="text-slate-800">0,50 g/l en sangre</strong> (0,25 mg/l en aire espirado): conductores en general.</li>
            <li className="bg-slate-50 border border-slate-200 rounded-xl p-4"><strong className="text-slate-800">0,30 g/l en sangre</strong> (0,15 mg/l en aire espirado): conductores noveles (menos de 2 años de carnet) y profesionales.</li>
          </ul>
          <p className="text-slate-600 mt-4">Superar la tasa es infracción grave: <strong>500 € y 4 puntos</strong> (1.000 € y 6 puntos si doblas la tasa o reincides). Por encima de 0,60 mg/l en aire o conduciendo bajo la influencia es <strong>delito</strong> (art. 379.2 del Código Penal). Tienes el detalle completo en nuestra <Link to="/guias/alcohol-drogas/" className="text-green-700 font-semibold hover:underline">guía de alcohol y drogas al volante</Link>.</p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4">Cómo se calcula: fórmula de Widmark</h2>
          <p className="text-slate-600 mb-4">Esta calculadora usa la fórmula de Widmark, la referencia clásica en medicina legal, con valores estándar y honestos:</p>
          <ul className="space-y-3 text-slate-600">
            <li><strong className="text-slate-800">Alcohol ingerido.</strong> Cada bebida aporta mililitros × graduación × 0,789 g/ml (densidad del etanol).</li>
            <li><strong className="text-slate-800">Reparto en el cuerpo.</strong> Los gramos se dividen entre tu peso y el factor de distribución: 0,68 en hombres y 0,55 en mujeres.</li>
            <li><strong className="text-slate-800">Eliminación.</strong> Se restan 0,15 g/l por cada hora desde que terminaste de beber. Es un valor medio: tu hígado puede ir más lento.</li>
          </ul>
          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-5">La comida, el tipo de bebida, tu estado de salud y tu metabolismo individual cambian el resultado real. Por eso esto es una orientación, no una medición.</p>
        </section>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-700">Compartir:</span>
          <a href="https://wa.me/?text=Calculadora%20gratuita%20de%20alcoholemia%20https%3A%2F%2Frecurretumulta.online%2Fcalculadora-alcoholemia" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Calculadora%20gratuita%20de%20alcoholemia&url=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-alcoholemia" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-alcoholemia" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Cuánto tarda en bajar el alcohol en sangre?</h3><p className="text-slate-600">Entre 0,10 y 0,15 gramos por litro y hora, y nada lo acelera: ni el café, ni la ducha fría, ni el aire, ni vomitar. Una vez que el alcohol está en sangre, solo el tiempo lo elimina.</p></div>
            <div><h3 className="font-bold mb-1">¿Qué factores influyen en la tasa de alcoholemia?</h3><p className="text-slate-600">El peso, el sexo, la cantidad y graduación de la bebida, si has comido (la comida retrasa la absorción pero no reduce el total) y el tiempo transcurrido. Dos personas que beben lo mismo pueden dar tasas muy distintas.</p></div>
            <div><h3 className="font-bold mb-1">¿Cuáles son los límites legales de alcohol en España?</h3><p className="text-slate-600">0,5 g/l en sangre (0,25 mg/l en aire) para conductores en general, y 0,3 g/l en sangre (0,15 mg/l en aire) para noveles con menos de 2 años de carnet y profesionales.</p></div>
            <div><h3 className="font-bold mb-1">¿Qué pasa si doy positivo en un control?</h3><p className="text-slate-600">Superar la tasa es infracción grave: 500 € y 4 puntos (1.000 € y 6 puntos si doblas la tasa o reincides en un año). Por encima de 0,60 mg/l en aire espirado, o conduciendo bajo la influencia del alcohol, es delito con privación del permiso de 1 a 4 años.</p></div>
            <div><h3 className="font-bold mb-1">¿Puedo fiarme de esta calculadora para decidir si conduzco?</h3><p className="text-slate-600">No. Es una estimación orientativa y tu metabolismo real puede variar mucho. Si has bebido, no conduzcas: la única tasa segura es 0,0.</p></div>
          </div>
        </section>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Te ha llegado una multa de alcoholemia?</h2>
          <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA y descubre si tiene defectos recurribles.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</Link>
        </div>

        <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Más herramientas y guías</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/herramientas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Todas las herramientas</Link>
            <Link to="/guias/alcohol-drogas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Guía: alcohol y drogas al volante</Link>
            <Link to="/buscador-codigo-multa/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Buscador de infracciones por código</Link>
            <Link to="/calculadora-autonomia-real/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Calculadora de autonomía real</Link>
            <Link to="/calculadora-etiqueta-dgt/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Calculadora de etiqueta DGT</Link>
            <Link to="/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Analizador gratuito de multas</Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
