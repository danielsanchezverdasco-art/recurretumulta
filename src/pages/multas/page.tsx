import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Search, ArrowRight, Shield, Sparkles, BarChart2, Radar,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { PROVINCIAS } from "@/lib/provincias-data.ts";
import { RADARES_POR_PROVINCIA, TOTAL_RADARES } from "@/lib/radares-por-provincia.generated.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

// Group by CCAA
const CCAA_ORDER = [
  "Comunidad de Madrid",
  "Cataluña",
  "Andalucía",
  "Comunitat Valenciana",
  "País Vasco",
  "Castilla y León",
  "Castilla-La Mancha",
  "Galicia",
  "Aragón",
  "Extremadura",
  "Principado de Asturias",
  "Cantabria",
  "La Rioja",
  "Comunidad Foral de Navarra",
  "Región de Murcia",
  "Islas Baleares",
  "Canarias",
  "Ciudad Autónoma de Ceuta",
  "Ciudad Autónoma de Melilla",
];

// 25/10/2026 (Merlín): las tarjetas son las 50 provincias + Ceuta y Melilla. Vigo y
// Santiago son ciudades (noindex, sus radares son los de Pontevedra/A Coruña) y
// duplicaban Galicia; Ceuta y Melilla faltaban porque su CCAA no estaba en CCAA_ORDER.
const CIUDADES_NO_PROVINCIA = new Set(["vigo", "santiago-compostela"]);
const PROVINCIAS_INDICE = PROVINCIAS.filter((p) => !CIUDADES_NO_PROVINCIA.has(p.slug));
const PROVINCIAS_AZ = [...PROVINCIAS_INDICE].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

function groupByCcaa(provincias: typeof PROVINCIAS) {
  const map: Record<string, typeof PROVINCIAS> = {};
  for (const p of provincias) {
    if (!map[p.ccaa]) map[p.ccaa] = [];
    map[p.ccaa].push(p);
  }
  return map;
}

// Nombre CCAA (provincias-data) -> slug de /comunidades/{slug}
const CCAA_SLUGS: Record<string, string> = {
  "Andalucía": "andalucia",
  "Aragón": "aragon",
  "Principado de Asturias": "asturias",
  "Islas Baleares": "baleares",
  "Canarias": "canarias",
  "Cantabria": "cantabria",
  "Castilla-La Mancha": "castilla-la-mancha",
  "Castilla y León": "castilla-y-leon",
  "Cataluña": "cataluna",
  "Extremadura": "extremadura",
  "Galicia": "galicia",
  "Comunidad de Madrid": "madrid",
  "Región de Murcia": "murcia",
  "Comunidad Foral de Navarra": "navarra",
  "País Vasco": "pais-vasco",
  "La Rioja": "la-rioja",
  "Comunitat Valenciana": "comunidad-valenciana",
  "Ciudad Autónoma de Ceuta": "ceuta",
  "Ciudad Autónoma de Melilla": "melilla",
};

export default function MultasIndexPage() {
  const [search, setSearch] = useState("");

  useSeo({
    title: "Multas DGT por Provincia: 52 Guías",
    description: "Recurre tu multa DGT en las 52 provincias de España. Instrucciones locales, emails de jefaturas, radares y ZBE por provincia. Análisis IA gratis.",
    canonical: "/multas",
    keywords: [
      "recurrir multa DGT por provincia",
      "jefatura provincial tráfico",
      "recurso multa tráfico España",
      "multas DGT 50 provincias",
      "cómo recurrir multa tráfico mi ciudad",
      "recurrir multa ayuntamiento",
      "zona de bajas emisiones multa recurso",
      "recurrir multa Policía Local",
    ],
  });

  const filtered = PROVINCIAS_INDICE.filter(
    (p) =>
      !search ||
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.ccaa.toLowerCase().includes(search.toLowerCase()) ||
      p.capital.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = groupByCcaa(filtered);
  const totalKeywords = PROVINCIAS_INDICE.flatMap((p) => p.keywords).length;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <main className="pt-[57px]">
        {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/file_Pm1lY1y4dFZNF5Vbdp2fGaoe.webp" alt="Coche patrulla de la Guardia Civil de Tráfico en una carretera española" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          {/* Banner con pastillas de stats abajo: Cosa más pequeño para no taparlas */}
          <CosaEnBanner imgClassName="h-28 w-auto" />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Provincias</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Guías locales · 52 provincias</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Recurrir multas de tráfico<br />
              <span className="text-red-400">en tu provincia</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
              Guías específicas para recurrir multas DGT en las 52 provincias españolas. Información sobre radares, zonas restringidas, jefaturas de tráfico y plazos.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-xs pt-2">
              {[
    { v: "52", l: "Provincias" },                { v: "52", l: "Guías locales" },
                { v: "Gratis", l: "Análisis IA" },
              ].map(({ v, l }) => (
                <div key={l} className="bg-white/10 rounded-xl p-2 text-center">
                  <p className="text-lg font-black text-white">{v}</p>
                  <p className="text-[10px] text-gray-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="max-w-4xl mx-auto px-4 pt-10"><div className="space-y-4 text-gray-600 leading-relaxed text-[15px]"><p>Las <strong className="text-gray-900">multas de tráfico en España</strong> son sanciones económicas que imponen la DGT, los ayuntamientos y otras administraciones cuando se incumple la normativa de circulación. Además del importe, muchas infracciones restan puntos del carnet.</p><p>Si pagas dentro de los 20 días naturales desde la notificación, tienes derecho a un <strong className="text-gray-900">50 % de descuento por pronto pago</strong>. Pero atención: <strong className="text-gray-900">presentar alegaciones implica renunciar a ese descuento</strong> (art. 94 del texto refundido de la Ley de Tráfico). Por eso conviene analizar bien tu caso antes de decidir entre pagar o recurrir.</p><p>En esta página tienes las guías para recurrir multas en las 52 provincias, una tabla con las sanciones más comunes y las respuestas a las dudas más frecuentes.</p><Link to="/#analizador" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"><Sparkles className="w-4 h-4" />Analiza tu multa gratis con IA antes de decidir</Link></div></section>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Busca tu provincia o comunidad autónoma..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 rounded-xl text-sm h-11"
            />
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-5 text-white space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black">¿Tienes una multa española?</p>
                <p className="text-white/80 text-sm">Analízala gratis con IA independientemente de la provincia.</p>
              </div>
            </div>
            <Link to="/#analizador" className="block">
              <Button className="bg-white text-red-600 hover:bg-white/90 font-black rounded-xl w-full h-11">
                Analizar mi multa ahora — Gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Radares: acceso al mapa completo (también dentro de cada provincia) */}
          <Link to="/radares/" className="block group">
            <div className="border-2 border-red-200 bg-red-50/60 rounded-3xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <Radar className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-black text-gray-900">Mapa de radares de España</p>
                <p className="text-sm text-gray-600">{TOTAL_RADARES} radares fijos con ficha, mapa y Street View — y la lista de radares dentro de la página de cada provincia.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-red-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Province groups by CCAA */}
          <AdBanner slotId={AD_SLOTS.horizontal} format="horizontal" className="rounded-xl overflow-hidden" />

          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-gray-200" />
              <p className="font-semibold">No hay provincias que coincidan</p>
            </div>
          ) : (
            <div className="space-y-8">
              {CCAA_ORDER.filter((ccaa) => grouped[ccaa]).map((ccaa) => (
                <div key={ccaa} className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-1 h-5 bg-red-600 rounded-full" />
                    <h2 className="text-sm font-black text-gray-700 uppercase tracking-wide">{ccaa}</h2>
                    {CCAA_SLUGS[ccaa] && (
                      <Link
                        to={`/comunidades/${CCAA_SLUGS[ccaa]}`}
                        className="text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline"
                      >
                        Guía autonómica →
                      </Link>
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {grouped[ccaa].map((prov, i) => (
                      <div
                        key={prov.slug}
                      >
                        <Link to={`/multas/${prov.slug}/`} className="block group">
                          <div className="border border-gray-200 rounded-xl p-3 hover:border-red-300 hover:shadow-sm transition-all bg-white space-y-1.5">
                            <div className="flex items-start justify-between gap-1">
                              <p className="text-xs font-black text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                                {prov.nombre}
                              </p>
                              <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-red-500 shrink-0 mt-0.5 transition-colors" />
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-2.5 h-2.5 text-gray-300" />
                              <span className="text-[10px] text-gray-400">{prov.multas.tiposMasFrecuentes.length} tipos de multa frecuentes</span>
                            </div>
                            {(RADARES_POR_PROVINCIA[prov.slug]?.length ?? 0) > 0 && (
                              <div className="flex items-center gap-1">
                                <Radar className="w-2.5 h-2.5 text-red-400" />
                                <span className="text-[10px] text-gray-400">{RADARES_POR_PROVINCIA[prov.slug].length} radares con mapa</span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}






          <section className="max-w-4xl mx-auto px-4 pt-10" aria-labelledby="otras-provincias"><h2 id="otras-provincias" className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Otras provincias, de la A a la Z</h2><div className="flex flex-wrap gap-2">{PROVINCIAS_AZ.map((op) => (<Link key={op.slug} to={`/multas/${op.slug}/`} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-600 rounded-full px-3 py-1.5 font-semibold transition-colors">{op.nombre}</Link>))}<Link to="/comunidades/" className="text-xs bg-red-600 text-white rounded-full px-3 py-1.5 font-semibold hover:bg-red-700 transition-colors">Ver por comunidad →</Link></div></section><section className="max-w-4xl mx-auto px-4 py-10"><h2 className="text-2xl font-black text-gray-900 mb-2">Multas de tráfico más comunes en España</h2><p className="text-gray-500 text-sm mb-6">Importes y pérdida de puntos según la DGT y el texto refundido de la Ley de Tráfico (RDL 6/2015).</p><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm text-left"><thead><tr className="bg-gray-900 text-white"><th className="px-4 py-3 font-bold">Infracción</th><th className="px-4 py-3 font-bold">Importe</th><th className="px-4 py-3 font-bold">Puntos</th><th className="px-4 py-3 font-bold">Gravedad</th></tr></thead><tbody>{[["Exceso de velocidad (grave)","100–400 €","2–4","Grave"],["Exceso de velocidad (muy grave)","500–600 €","6","Muy grave"],["Saltarse un semáforo en rojo","200 €","4","Grave"],["No respetar un stop o ceda el paso","200 €","4","Grave"],["Usar el móvil sujetándolo con la mano","200 €","6","Grave"],["No usar el cinturón de seguridad","200 €","4","Grave"],["Alcohol al volante","500–1.000 €","4–6","Muy grave"],["Acceder a una ZBE sin autorización","200 €","—","Grave"],["Circular con la ITV caducada o desfavorable","200 €","—","Grave"],["Circular con ITV negativa (defectos muy graves)","500 €","—","Grave"],["Circular sin seguro obligatorio","601–3.005 €","—","Muy grave"]].map(([inf,imp,pts,grav],i)=>(<tr key={i} className={i%2?"bg-gray-50":"bg-white"}><td className="px-4 py-3 text-gray-700">{inf}</td><td className="px-4 py-3 font-bold text-gray-900 whitespace-nowrap">{imp}</td><td className="px-4 py-3 text-gray-700 text-center">{pts}</td><td className="px-4 py-3 text-gray-700">{grav}</td></tr>))}</tbody></table></div><p className="text-xs text-gray-500 mt-3">Importes sin aplicar el 50 % de descuento por pronto pago.</p></section><div className="max-w-4xl mx-auto px-4"></div><section className="max-w-4xl mx-auto px-4 py-10"><h2 className="text-2xl font-black text-gray-900 mb-6">Fuentes oficiales</h2><div className="bg-gray-50 border border-gray-200 rounded-2xl p-6"><ul className="space-y-3 text-[15px]"><li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">DGT – Dirección General de Tráfico</a><span className="text-gray-500"> — Información oficial sobre multas, puntos y trámites.</span></li><li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">Sede electrónica de la DGT</a><span className="text-gray-500"> — Consulta y pago de sanciones, identificación del conductor.</span></li><li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">Texto refundido de la Ley de Tráfico (BOE)</a><span className="text-gray-500"> — Real Decreto Legislativo 6/2015: infracciones, sanciones y procedimiento.</span></li><li><a href="https://sede.dgt.gob.es/es/otros-tramites/testra/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">TESTRA – Tablón Edictal de Sanciones de Tráfico</a><span className="text-gray-500"> — Consulta si tienes multas pendientes de notificar.</span></li></ul></div></section><section className="max-w-4xl mx-auto px-4 py-10"><h2 className="text-2xl font-black text-gray-900 mb-6">Preguntas frecuentes</h2><div className="space-y-4"><div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"><h3 className="font-bold text-gray-900 mb-2">¿Cuánto tiempo tengo para recurrir una multa?</h3><p className="text-gray-600 text-sm leading-relaxed">Dispones de 20 días naturales desde la notificación para presentar alegaciones o pagar con el 50 % de descuento por pronto pago.</p></div><div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"><h3 className="font-bold text-gray-900 mb-2">¿Pierdo el descuento del 50 % si recurro?</h3><p className="text-gray-600 text-sm leading-relaxed">Sí. Presentar alegaciones implica renunciar al descuento por pronto pago (art. 94 del texto refundido de la Ley de Tráfico). Solo puedes optar por una de las dos vías.</p></div><div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"><h3 className="font-bold text-gray-900 mb-2">¿Dónde puedo consultar si tengo multas?</h3><p className="text-gray-600 text-sm leading-relaxed">En el TESTRA (Tablón Edictal de Sanciones de Tráfico) y en la DEV (Dirección Electrónica Vial) de la DGT, accesibles desde su sede electrónica.</p></div><div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"><h3 className="font-bold text-gray-900 mb-2">¿Qué pasa si no pago una multa?</h3><p className="text-gray-600 text-sm leading-relaxed">La deuda pasa a vía de apremio con recargos e intereses, y la Administración puede embargar bienes o saldos de tus cuentas para cobrarla.</p></div></div></section><section className="max-w-4xl mx-auto px-4 py-10"><h2 className="text-2xl font-black text-gray-900 mb-6">Guías y herramientas relacionadas</h2><div className="grid sm:grid-cols-2 gap-3">{[["/guias/radares","Guía: multas de radar"],["/guias/vicios-forma","Guía: defectos de forma"],["/guias/prescripcion","Guía: prescripción y caducidad"],["/guias/zbe","Guía: multas ZBE"],["/buscador-codigo-multa","Buscador de infracciones por código"],["/blog","Blog con todas las guías"]].map(([href,t])=>(<Link key={href} to={href} className="flex items-center justify-between gap-2 bg-white border border-gray-200 hover:border-red-300 rounded-2xl px-5 py-4 font-bold text-gray-900 hover:text-red-600 transition-colors">{t}<ArrowRight className="w-4 h-4 text-gray-300 shrink-0" /></Link>))}</div></section>{/* Schema structured data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Guías para recurrir multas de tráfico por provincia en España",
                "description": "Información detallada para impugnar multas DGT en todas las provincias de España",
                "itemListElement": PROVINCIAS_INDICE.map((p, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "name": `Recurrir multas en ${p.nombre}`,
                  "url": `https://recurretumulta.online/multas/${p.slug}`,
                })),
              }),
            }}
          />

          {/* Footer */}
          <SharedFooter />
        </div>
      </main>
    </div>
  );
}
