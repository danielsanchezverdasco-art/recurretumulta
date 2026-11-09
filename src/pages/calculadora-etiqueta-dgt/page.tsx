import { Link } from "react-router-dom";
import { useState } from "react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Calculadora de etiqueta medioambiental DGT", "url": "https://recurretumulta.online/calculadora-etiqueta-dgt", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Qué pasa si mi coche no tiene etiqueta medioambiental?", "acceptedAnswer": { "@type": "Answer", "text": "Puede circular por carretera, pero las Zonas de Bajas Emisiones restringen el acceso a los vehículos sin distintivo. En las grandes ciudades ya no pueden entrar en la ZBE." } }, { "@type": "Question", "name": "¿Un híbrido enchufable con 35 km de autonomía eléctrica es ECO?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Para llevar la etiqueta CERO, un híbrido enchufable necesita al menos 40 km de autonomía eléctrica homologada. Con menos, corresponde la ECO." } }, { "@type": "Question", "name": "¿Dónde miro la etiqueta de mi coche?", "acceptedAnswer": { "@type": "Answer", "text": "En la web de la DGT puedes consultar el distintivo de tu coche con la matrícula. El distintivo físico se compra en oficinas de Correos y talleres autorizados." } }, { "@type": "Question", "name": "¿Las ZBE aceptan la etiqueta B?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de la ordenanza de cada municipio. En ciudades como Madrid, la etiqueta B ya está restringida en el interior de la ZBE. Consulta siempre la ordenanza local antes de entrar." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Calculadora de etiqueta DGT", "item": "https://recurretumulta.online/calculadora-etiqueta-dgt" } ] } ] };

type Motor =
  | "gasolina"
  | "diesel"
  | "hev"
  | "phev"
  | "bev"
  | "reev"
  | "glp-gnc";

const MOTORES: { value: Motor; label: string }[] = [
  { value: "gasolina", label: "Gasolina" },
  { value: "diesel", label: "Diésel" },
  { value: "hev", label: "Híbrido no enchufable (HEV)" },
  { value: "phev", label: "Híbrido enchufable (PHEV)" },
  { value: "bev", label: "Eléctrico de batería (BEV)" },
  { value: "reev", label: "Eléctrico de autonomía extendida (REEV)" },
  { value: "glp-gnc", label: "GLP o GNC" },
];

type Etiqueta = "CERO" | "ECO" | "C" | "B" | "SIN";

const ETIQUETA_STYLE: Record<Etiqueta, { bg: string; text: string; ring: string }> = {
  CERO: { bg: "bg-sky-500", text: "text-white", ring: "border-sky-600" },
  ECO: { bg: "bg-gradient-to-br from-green-500 to-sky-500", text: "text-white", ring: "border-green-600" },
  C: { bg: "bg-green-500", text: "text-white", ring: "border-green-600" },
  B: { bg: "bg-yellow-300", text: "text-slate-900", ring: "border-yellow-400" },
  SIN: { bg: "bg-slate-300", text: "text-slate-700", ring: "border-slate-400" },
};

const ETIQUETA_DESC: Record<Etiqueta, string> = {
  CERO: "Acceso total a las ZBE, incluso en episodios de alta contaminación. Los vehículos menos contaminantes.",
  ECO: "Acceso amplio a las ZBE, con restricciones solo en los episodios más graves de contaminación.",
  C: "Puede entrar en la mayoría de ZBE, pero con restricciones en episodios de alta contaminación.",
  B: "Acceso cada vez más restringido: muchas ZBE ya vetan la etiqueta B en su interior. Consulta la ordenanza local.",
  SIN: "Sin acceso a las ZBE: los vehículos sin distintivo no pueden circular por estas zonas.",
};

function calcularEtiqueta(motor: Motor, ano: number | null, phev40: boolean): Etiqueta | null {
  if (motor === "bev" || motor === "reev") return "CERO";
  if (motor === "phev") return phev40 ? "CERO" : "ECO";
  if (motor === "hev") return "ECO";
  if (motor === "glp-gnc") return "ECO";
  if (ano === null) return null;
  if (motor === "gasolina") {
    if (ano >= 2006) return "C";
    if (ano >= 2001) return "B";
    return "SIN";
  }
  if (motor === "diesel") {
    if (ano >= 2015) return "C";
    if (ano >= 2006) return "B";
    return "SIN";
  }
  return null;
}

export default function CalculadoraEtiquetaDgtPage() {
  useSeo({
    title: "Calculadora etiqueta DGT gratis 2026",
    description: "Qué etiqueta DGT le corresponde a tu coche (CERO, ECO, C, B o sin etiqueta) según motor y año. Con criterios oficiales. Gratis.",
    canonical: "/calculadora-etiqueta-dgt",
    keywords: ["Calculadora etiqueta medioambiental DGT", "que etiqueta DGT tiene mi coche", "etiqueta CERO ECO C B"],
  });

  const [motor, setMotor] = useState<Motor>("gasolina");
  const [ano, setAno] = useState("2015");
  const [phev40, setPhev40] = useState("si");

  const anoNum = parseInt(ano, 10);
  const anoValido = !isNaN(anoNum) && anoNum >= 1900 && anoNum <= new Date().getFullYear();
  const necesitaAno = motor === "gasolina" || motor === "diesel";
  const esPhev = motor === "phev";
  const etiqueta = calcularEtiqueta(motor, necesitaAno ? (anoValido ? anoNum : null) : anoNum, phev40 === "si");
  const style = etiqueta ? ETIQUETA_STYLE[etiqueta] : null;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        {/* Hero animado estilo blog */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/etiqueta-dgt.webp" alt="Pegatina de la etiqueta medioambiental de la DGT en el parabrisas de un coche, en una calle de Madrid" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Etiqueta DGT</span>
            </nav>
            <div>
              <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Herramienta gratuita · Sin registro</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Calculadora de etiqueta medioambiental DGT
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Descubre qué distintivo le corresponde a tu coche (CERO, ECO, C, B o ninguno) según el tipo de motor y el año de matriculación, con los criterios oficiales de la DGT.
            </p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">

        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="grid gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <label htmlFor="motor" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Tipo de motor</label>
              <select id="motor" value={motor} onChange={(e) => setMotor(e.target.value as Motor)} className="w-full rounded-xl border border-slate-300 p-3 text-base font-bold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                {MOTORES.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>
            </div>
            {necesitaAno && (
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <label htmlFor="ano" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Año de matriculación</label>
                <input id="ano" type="number" value={ano} min="1900" max={new Date().getFullYear()} step="1" onChange={(e) => setAno(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-green-500 outline-none" />
                {!anoValido && <p className="mt-2 text-xs text-red-600">Introduce un año válido.</p>}
              </div>
            )}
            {esPhev && (
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <label htmlFor="phev40" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Autonomía eléctrica ≥ 40 km</label>
                <select id="phev40" value={phev40} onChange={(e) => setPhev40(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-base font-bold focus:ring-2 focus:ring-green-500 outline-none bg-white">
                  <option value="si">Sí, 40 km o más</option>
                  <option value="no">No, menos de 40 km</option>
                </select>
                <p className="mt-2 text-xs text-slate-500">Es la autonomía eléctrica homologada del modelo, no la que consigas tú.</p>
              </div>
            )}
          </div>

          <div className="mt-6">
            {etiqueta && style ? (
              <div className={`rounded-3xl border-2 ${style.ring} p-6 text-center`}>
                <p className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-3">Tu etiqueta DGT</p>
                <span className={`inline-block ${style.bg} ${style.text} text-6xl font-black rounded-2xl px-10 py-4 shadow-md`}>
                  {etiqueta === "SIN" ? "—" : etiqueta}
                </span>
                <p className="text-slate-700 font-semibold mt-4">
                  {etiqueta === "CERO" && "Distintivo CERO emisiones (azul)"}
                  {etiqueta === "ECO" && "Distintivo ECO (verde y azul)"}
                  {etiqueta === "C" && "Distintivo C (verde)"}
                  {etiqueta === "B" && "Distintivo B (amarillo)"}
                  {etiqueta === "SIN" && "Sin distintivo medioambiental"}
                </p>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">{ETIQUETA_DESC[etiqueta]}</p>
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-dashed border-slate-300 p-6 text-center text-slate-500 text-sm">
                Introduce los datos para calcular tu etiqueta.
              </div>
            )}
          </div>

          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
            Aviso: el año de matriculación es una aproximación según la norma Euro correspondiente. La etiqueta oficial de tu coche la confirma la DGT consultando la matrícula en{" "}
            <a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="underline font-semibold">dgt.es</a>.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
                <figure className="my-8">
        <img src="/media/etiqueta-dgt-tipos.webp" alt="Las cuatro etiquetas medioambientales de la DGT: 0 emisiones, ECO, C y B" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mb-4">Criterios oficiales de la DGT</h2>
          <p className="text-slate-600 mb-4">Esta calculadora aplica la clasificación de distintivos ambientales de la <a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="underline font-semibold">DGT</a>:</p>
          <ul className="space-y-2 text-slate-600">
            <li><strong className="text-sky-700">CERO:</strong> eléctricos de batería (BEV), de autonomía extendida (REEV), de pila de combustible e híbridos enchufables con ≥ 40 km de autonomía eléctrica.</li>
            <li><strong className="text-green-700">ECO:</strong> híbridos enchufables con &lt; 40 km de autonomía eléctrica, híbridos no enchufables (HEV) y vehículos de GLP, GNC o GNL.</li>
            <li><strong className="text-green-700">C:</strong> gasolina Euro 4/5/6 (matriculados desde enero de 2006) y diésel Euro 6 (desde 2015).</li>
            <li><strong className="text-yellow-700">B:</strong> gasolina Euro 3 (2001–2005) y diésel Euro 4/5 (2006–2014).</li>
            <li><strong className="text-slate-700">Sin etiqueta:</strong> gasolina anteriores a 2001 y diésel anteriores a 2006.</li>
          </ul>
        </section>

        <figure className="mb-2">
          <video src="/media/etiqueta-dgt.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: una mano pega la etiqueta medioambiental de la DGT en el parabrisas" />
          <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: así se coloca el distintivo ambiental en el parabrisas.</figcaption>
        </figure>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-700">Compartir:</span>
          <a href="https://wa.me/?text=Calculadora%20gratuita%20de%20etiqueta%20medioambiental%20DGT%20https%3A%2F%2Frecurretumulta.online%2Fcalculadora-etiqueta-dgt" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Calculadora%20gratuita%20de%20etiqueta%20medioambiental%20DGT&url=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-etiqueta-dgt" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-etiqueta-dgt" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Qué pasa si mi coche no tiene etiqueta?</h3><p className="text-slate-600">Puede circular por carretera, pero las Zonas de Bajas Emisiones restringen el acceso a los vehículos sin distintivo. En las grandes ciudades ya no pueden entrar en la ZBE.</p></div>
            <div><h3 className="font-bold mb-1">¿Un híbrido enchufable con 35 km de autonomía eléctrica es ECO?</h3><p className="text-slate-600">Sí. Para llevar la etiqueta CERO, un híbrido enchufable necesita al menos 40 km de autonomía eléctrica homologada. Con menos, corresponde la ECO.</p></div>
            <div><h3 className="font-bold mb-1">¿Dónde miro la etiqueta de mi coche?</h3><p className="text-slate-600">En la web de la <a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="underline">DGT</a> puedes consultar el distintivo de tu coche con la matrícula. El distintivo físico se compra en oficinas de Correos y talleres autorizados.</p></div>
            <div><h3 className="font-bold mb-1">¿Las ZBE aceptan la etiqueta B?</h3><p className="text-slate-600">Depende de la ordenanza de cada municipio. En ciudades como Madrid, la etiqueta B ya está restringida en el interior de la ZBE. Consulta siempre la ordenanza local antes de entrar.</p></div>
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
            <Link to="/calculadora-autonomia-real/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Calculadora de autonomía real</Link>
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
