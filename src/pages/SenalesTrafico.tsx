import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Search, Signpost, X, CircleAlert } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  SENALES,
  CATEGORIAS_SENAL,
  buscarSenales,
  type CategoriaSenal,
  type Senal,
} from "@/lib/senales-trafico.ts";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const FAQS = [
  {
    q: "¿Qué hago si una señal está tapada por un árbol, un camión o un cartel?",
    a: "Si la señal no era visible, la multa puede ser anulable: una sanción por una señal que no podías ver vulnera tu derecho de defensa. Haz fotos del lugar cuanto antes (que se vea la señal tapada y tu posición) y analízala gratis con IA en la portada: es uno de los defectos de forma más habituales.",
  },
  {
    q: "¿Cuál es la diferencia entre advertencia, prohibición y obligación?",
    a: "Las de advertencia de peligro son triangulares con borde rojo y solo avisan (no multan por sí mismas). Las de prohibición son circulares con borde rojo y prohíben algo (saltárselas suele costar 200 €). Las de obligación son circulares azules e indican lo que DEBES hacer. Las de indicación (cuadradas o rectangulares azules) solo informan.",
  },
  {
    q: "¿Hay señales nuevas? ¿Este diccionario está actualizado?",
    a: "La DGT actualiza el catálogo de señales con cada reforma del Reglamento General de Circulación. Este diccionario se revisa periódicamente y recoge las señales vigentes, incluidas las de obras (fondo amarillo) y las novedades de movilidad como el carril bici obligatorio.",
  },
  {
    q: "¿Todas las señales de prohibición multan con 200 €?",
    a: "La mayoría de las prohibiciones son infracciones graves de 200 € (STOP, ceda el paso, dirección prohibida, giros prohibidos, adelantar donde no se puede). Las excepciones: el exceso de velocidad va de 100 € a 600 € según cuánto te pases, y el estacionamiento indebido depende de cada ordenanza municipal (80 € a 200 €).",
  },
  {
    q: "¿Qué significa que una señal tenga el fondo amarillo?",
    a: "Es señalización provisional de obras y PREVALECE sobre la señalización fija: si una señal amarilla contradice a una normal, manda la amarilla. La sanción por incumplirla es la misma que la de su equivalente habitual.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Diccionario visual de señales de tráfico",
      "url": "https://recurretumulta.online/senales-trafico",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "All",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" },
      "description":
        "Diccionario visual de las señales de tráfico españolas: busca por nombre o código, filtra por categoría y descubre qué significa cada señal, qué debes hacer y qué multa te cae si la ignoras.",
    },
    {
      "@type": "ItemList",
      "name": "Señales de tráfico explicadas",
      "itemListElement": SENALES.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${s.codigo} — ${s.nombre}`,
        "url": `https://recurretumulta.online/senales-trafico#${s.id}`,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" },
        { "@type": "ListItem", "position": 3, "name": "Diccionario de señales de tráfico", "item": "https://recurretumulta.online/senales-trafico" },
      ],
    },
  ],
};

const CATEGORIA_STYLE: Record<CategoriaSenal, string> = {
  advertencia: "bg-amber-100 text-amber-800 border-amber-200",
  prohibicion: "bg-red-100 text-red-800 border-red-200",
  obligacion: "bg-blue-100 text-blue-800 border-blue-200",
  indicacion: "bg-emerald-100 text-emerald-800 border-emerald-200",
  obras: "bg-yellow-100 text-yellow-800 border-yellow-200",
};

function TarjetaSenal({ senal, onOpen }: { senal: Senal; onOpen: (s: Senal) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(senal)}
      className="text-left border border-gray-200 rounded-2xl p-4 bg-white hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <img
        src={senal.imagen}
        alt={`Señal ${senal.codigo}: ${senal.nombre}`}
        className="w-full aspect-square object-contain bg-white rounded-xl"
        loading="lazy"
      />
      <p className="mt-3 text-[11px] font-black text-gray-400 uppercase tracking-wide">{senal.codigo}</p>
      <h3 className="font-bold text-gray-900 leading-snug text-sm">{senal.nombre}</h3>
      <span className={`inline-block mt-2 text-[11px] font-bold px-2 py-0.5 rounded-full border ${CATEGORIA_STYLE[senal.categoria]}`}>
        {CATEGORIAS_SENAL.find((c) => c.id === senal.categoria)?.nombre}
      </span>
    </button>
  );
}

function ModalSenal({ senal, onClose }: { senal: Senal; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Señal ${senal.codigo}: ${senal.nombre}`}
    >
      <div
        className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{senal.codigo}</p>
            <h2 className="text-xl font-black text-gray-900">{senal.nombre}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle de la señal"
            className="shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <img
          src={senal.imagen}
          alt={`Señal ${senal.codigo}: ${senal.nombre}`}
          className="w-40 h-40 object-contain bg-white mx-auto"
        />
        <div className="space-y-3 text-sm leading-relaxed">
          <div>
            <p className="font-bold text-gray-900 mb-1">Qué significa</p>
            <p className="text-gray-600">{senal.significado}</p>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-1">Qué debes hacer</p>
            <p className="text-gray-600">{senal.queHacer}</p>
          </div>
          {senal.multa && (
            <p className="text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-900 flex gap-2">
              <CircleAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span><strong>Si la ignoras:</strong> {senal.multa}</span>
            </p>
          )}
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors w-full justify-center"
        >
          ¿Te multaron por esta señal? Analízala gratis
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function SenalesTraficoPage() {
  useSeo({
    title: "Señales de tráfico 2026: significado",
    description:
      "¿Qué significa esa señal? Diccionario visual con las 43 señales de tráfico más buscadas: foto, explicación en lenguaje normal, qué debes hacer y la multa si la ignoras. Gratis.",
    canonical: "/senales-trafico",
    keywords: [
      "señales de tráfico",
      "significado señales tráfico",
      "diccionario señales dgt",
      "qué significa esta señal",
      "señales de prohibido",
      "multa por saltarse señal",
    ],
  });

  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<CategoriaSenal | "todas">("todas");
  const [seleccionada, setSeleccionada] = useState<Senal | null>(null);

  const resultados = useMemo(() => buscarSenales(query, categoria), [query, categoria]);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <main className="pt-14 sm:pt-[73px] pb-16">
        {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
        <div className="relative px-4 pt-10 pb-12 overflow-hidden">
          <DriveInImage
            src="/media/senales-hero.webp"
            alt="Carretera española al atardecer con señales de tráfico en el arcén: límite de velocidad, ceda el paso y stop"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-2xl mx-auto space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Señales de tráfico</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
              <Signpost className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratis</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl sm:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Diccionario visual de <span className="text-red-400">señales de tráfico</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm sm:text-base leading-relaxed">
              ¿Qué significa esa señal que acabas de ver? Busca por nombre o código entre las 43 señales que más dudas generan: qué significan en lenguaje normal, qué debes hacer y qué multa te cae si las ignoras.
            </motion.p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 space-y-8 pt-8">
          {/* Cómo leer las señales */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">Cómo leer una señal de un vistazo</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              No hace falta memorizarlas todas: con la <strong>forma y el color</strong> ya sabes de qué va. Las triangulares con borde rojo <strong>advierten de un peligro</strong>; las circulares con borde rojo <strong>prohíben</strong> algo; las circulares azules te dicen lo que <strong>debes hacer</strong>; y las cuadradas o rectangulares azules solo <strong>informan</strong>. Las de <strong>fondo amarillo</strong> son provisionales de obras y mandan sobre las demás.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Toca cualquier tarjeta para ver la explicación completa de cada señal. Y si ya te ha caído una multa por una de ellas, el{" "}
              <Link to="/" className="text-red-600 font-bold hover:underline">analizador gratuito con IA</Link>{" "}
              te dice en dos minutos si es recurrible.
            </p>
          </section>

          {/* Buscador */}
          <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-6 space-y-4">
            <label htmlFor="buscador-senales" className="block text-xs font-bold uppercase tracking-wide text-slate-700">
              Busca por nombre o código
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="buscador-senales"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej.: stop, rotonda, R-301, vaca…"
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategoria("todas")}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                  categoria === "todas" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                Todas
              </button>
              {CATEGORIAS_SENAL.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategoria(c.id)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                    categoria === c.id ? "bg-slate-900 text-white border-slate-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {c.nombre}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              {resultados.length === SENALES.length
                ? `${SENALES.length} señales en el diccionario.`
                : `${resultados.length} resultado${resultados.length === 1 ? "" : "s"} para tu búsqueda.`}
            </p>
          </section>

          {/* Resultados */}
          <section aria-live="polite">
            {resultados.length === 0 ? (
              <div className="border border-dashed border-gray-300 rounded-2xl p-8 text-center space-y-2">
                <p className="font-bold text-gray-900">Sin resultados</p>
                <p className="text-sm text-gray-500">
                  Prueba con otro nombre o código. Este diccionario cubre las 43 señales más buscadas; el catálogo oficial completo está en el Reglamento General de Circulación.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {resultados.map((s) => (
                  <TarjetaSenal key={s.id} senal={s} onOpen={setSeleccionada} />
                ))}
              </div>
            )}
          </section>

          {/* Texto intermedio + vídeo */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-gray-900">Las señales que más multas provocan</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              El STOP y el ceda el paso encabezan la lista de sanciones por señales: 200 € y 4 puntos cada vez que no los respetas. Les siguen los límites de velocidad (de 100 € a 600 € según el exceso) y las prohibiciones de adelantar o de entrar en sentido prohibido. La mayoría de estas multas llegan por despiste, no por temeridad: un cruce que no conoces, una señal tapada por un camión, un límite que cambió hace dos curvas.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Por eso existe el recurso: una multa por señalización es anulable si la señal no era visible, estaba deteriorada o era contradictoria. Si te ha llegado una, no la pagues a ciegas: primero comprueba si se puede recurrir.
            </p>

          </section>

          {/* Enlaces internos + CTA */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
            <h2 className="font-black text-gray-900">¿Te multaron por una señal? Analiza la multa gratis</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sube la denuncia al{" "}
              <Link to="/" className="text-red-600 font-bold hover:underline">
                analizador gratuito con IA
              </Link>{" "}
              y detecta defectos de forma en segundos. También puedes consultar el{" "}
              <Link to="/buscador-codigo-multa/" className="text-red-600 font-bold hover:underline">
                buscador de infracciones por código
              </Link>
              , las{" "}
              <Link to="/guias/vicios-forma/" className="text-red-600 font-bold hover:underline">
                causas más habituales para anular una multa
              </Link>{" "}
              o la guía de{" "}
              <Link to="/guias/radares/" className="text-red-600 font-bold hover:underline">
                radares y márgenes de error
              </Link>
              .
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              Analizar mi multa gratis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Preguntas frecuentes</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-2xl p-5 bg-white">
                  <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SharedFooter />
      {seleccionada && <ModalSenal senal={seleccionada} onClose={() => setSeleccionada(null)} />}
    </div>
  );
}
