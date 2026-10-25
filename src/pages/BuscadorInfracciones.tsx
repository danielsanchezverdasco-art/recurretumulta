import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { DriveInImage } from "@/components/motion.tsx";
import { useMemo, useState } from "react";
import { ArrowRight, BadgeEuro, FileSearch, Gavel, Scale, Search, ShieldAlert } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  INFRACCIONES,
  CATEGORIAS,
  buscarInfracciones,
  formatoImporte,
  type CategoriaInfraccion,
  type Gravedad,
  type Infraccion,
} from "@/lib/infracciones.ts";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const FAQS = [
  {
    q: "¿Dónde encuentro el código de la infracción en mi multa?",
    a: "En la denuncia suele aparecer como «artículo» o «precepto infringido» (p. ej. «Art. 18.2 RGC» o «Art. 50 RGC»). También verás la norma: RGC (Reglamento General de Circulación), LSV (Ley de Tráfico) o la ordenanza municipal. Escríbelo tal cual en el buscador.",
  },
  {
    q: "¿El importe que muestra el buscador es lo que tengo que pagar?",
    a: "Es el importe base de la sanción, sin aplicar el descuento del 50 % por pronto pago. Si pagas dentro de los 20 días naturales desde la notificación, la mayoría de las multas se reducen a la mitad, pero pagar implica renunciar al recurso.",
  },
  {
    q: "¿Qué significan leve, grave y muy grave?",
    a: "Es la calificación legal de la infracción: las leves se sancionan con hasta 100 €, las graves con 200 € y las muy graves con 500 €, salvo que la ley fije otro importe específico (como los 1.000 € del alcohol o los 6.000 € del inhibidor de radar). La gravedad también condiciona el plazo de prescripción.",
  },
  {
    q: "¿Todos los puntos se restan igual?",
    a: "No. Solo se restan puntos si tienes permiso de conducción y la infracción los lleva aparejados (de 2 a 6 según el caso). Las infracciones en patinete eléctrico, en bici o como peatón no restan puntos porque no exigen carné.",
  },
  {
    q: "Me han multado por un código que no sale aquí, ¿qué hago?",
    a: "Esta base cubre las infracciones más habituales de la DGT. Si tu código no aparece (por ejemplo, una ordenanza municipal concreta), usa el análisis gratuito con IA de la portada: sube la foto o el PDF de la denuncia y te diremos qué significa y si es recurrible.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Buscador de infracciones por código",
      "url": "https://recurretumulta.online/buscador-codigo-multa",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "All",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" },
      "description":
        "Busca cualquier infracción de tráfico por su código o artículo y descubre el importe de la multa, los puntos que resta, su gravedad y la base legal en el BOE.",
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
        { "@type": "ListItem", "position": 3, "name": "Buscador de infracciones por código", "item": "https://recurretumulta.online/buscador-codigo-multa" },
      ],
    },
  ],
};

const GRAVEDAD_STYLE: Record<Gravedad, string> = {
  leve: "bg-emerald-100 text-emerald-800 border-emerald-200",
  grave: "bg-amber-100 text-amber-800 border-amber-200",
  "muy grave": "bg-red-100 text-red-800 border-red-200",
};

function TarjetaInfraccion({ inf }: { inf: Infraccion }) {
  return (
    <article className="border border-gray-200 rounded-2xl p-5 bg-white space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          <Gavel className="w-3 h-3" />
          {inf.codigo}
        </span>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${GRAVEDAD_STYLE[inf.gravedad]}`}>
          {inf.gravedad === "leve" ? "Leve" : inf.gravedad === "grave" ? "Grave" : "Muy grave"}
        </span>
        <span className="text-xs text-gray-500 font-medium">{inf.categoria}</span>
      </div>

      <h3 className="font-black text-gray-900 leading-snug">{inf.titulo}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{inf.descripcion}</p>
      {inf.nota && (
        <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 flex gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{inf.nota}</span>
        </p>
      )}

      <div className="flex items-end justify-between gap-3 pt-1">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold">Importe</p>
          <p className="text-2xl font-black text-gray-900 flex items-center gap-1">
            <BadgeEuro className="w-5 h-5 text-red-600" />
            {formatoImporte(inf)}
          </p>
          <p className="text-[11px] text-gray-400">sin pronto pago (50 % menos si pagas en 20 días)</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold">Puntos</p>
          <p className={`text-2xl font-black ${inf.puntos > 0 ? "text-red-600" : "text-gray-400"}`}>
            {inf.puntos > 0 ? `−${inf.puntos}` : "—"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
        <a
          href={inf.boeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 font-medium"
        >
          <Scale className="w-3.5 h-3.5" />
          {inf.baseLegal}
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
        >
          Analizar mi multa gratis
          <ArrowRight className="w-4 h-4" />
        </Link>
        {inf.guiaSlug && (
          <Link
            to={`/guias/${inf.guiaSlug}`}
            className="inline-flex items-center gap-1.5 border border-gray-200 hover:border-red-300 text-gray-700 text-sm font-bold px-4 py-2 rounded-xl transition-colors"
          >
            Ver guía
          </Link>
        )}
      </div>
    </article>
  );
}

export default function BuscadorInfraccionesPage() {
  useSeo({
    title: "Qué significa el código de tu multa",
    description:
      "Busca cualquier infracción de tráfico por su código o artículo: importe de la multa, puntos que resta, gravedad y base legal en el BOE. Gratis y sin registro.",
    canonical: "/buscador-codigo-multa",
    keywords: [
      "buscador de infracciones",
      "código infracción multa",
      "artículo multa tráfico",
      "cuánto es la multa por",
      "puntos carnet infracciones",
    ],
  });

  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<CategoriaInfraccion | "todas">("todas");

  const resultados = useMemo(() => buscarInfracciones(query, categoria), [query, categoria]);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <main className="pt-14 sm:pt-[73px] pb-16">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <DriveInImage
            src="/media/buscador-infracciones.webp"
            alt="Denuncia de tráfico sobre el salpicadero de un coche con una lupa señalando el código de la infracción"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">Buscador</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <FileSearch className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratis</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Código de tu multa: <span className="text-red-400">qué significa y cuánto pagas</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
              ¿Te ha llegado una multa y no entiendes el código? Escribe el artículo (p. ej. «18.2», «50» o «20») o una palabra («móvil», «alcohol», «patinete») y descubre el importe, los puntos, la gravedad y la base legal.
            </motion.p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 space-y-6 -mt-0 pt-8">
          {/* Buscador */}
          <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-6 space-y-4">
            <label htmlFor="buscador" className="block text-xs font-bold uppercase tracking-wide text-slate-700">
              Código, artículo o palabra clave
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="buscador"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej.: 18.2, alcohol, patinete, ITV…"
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(["todas", ...CATEGORIAS] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategoria(c)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                    categoria === c
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {c === "todas" ? "Todas" : c}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              {resultados.length === INFRACCIONES.length
                ? `${INFRACCIONES.length} infracciones en la base de datos.`
                : `${resultados.length} resultado${resultados.length === 1 ? "" : "s"} para tu búsqueda.`}
            </p>
          </section>

          {/* Resultados */}
          <section className="space-y-4" aria-live="polite">
            {resultados.length === 0 ? (
              <div className="border border-dashed border-gray-300 rounded-2xl p-8 text-center space-y-2">
                <p className="font-bold text-gray-900">Sin resultados</p>
                <p className="text-sm text-gray-500">
                  Prueba con otro código o palabra. Si tu multa es de una ordenanza municipal concreta,{" "}
                  <Link to="/" className="text-red-600 font-bold hover:underline">
                    analízala gratis con IA
                  </Link>
                  .
                </p>
              </div>
            ) : (
              resultados.map((inf) => <TarjetaInfraccion key={`${inf.codigo}-${inf.titulo}`} inf={inf} />)
            )}
          </section>

          {/* Enlaces internos */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">

<h2 className="font-black text-gray-900">¿Ya sabes lo que te piden? Analiza la multa gratis</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Saber el importe está bien, pero lo importante es saber si la multa se puede recurrir. Sube la denuncia al{" "}
              <Link to="/" className="text-red-600 font-bold hover:underline">
                analizador gratuito con IA
              </Link>{" "}
              y detecta defectos de forma en segundos. También puedes consultar las{" "}
              <Link to="/guias/vicios-forma/" className="text-red-600 font-bold hover:underline">
                causas más habituales para anular una multa
              </Link>{" "}
              o los{" "}
              <Link to="/guias/prescripcion/" className="text-red-600 font-bold hover:underline">
                plazos de prescripción
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section>
                  <figure className="my-8">
        <img src="/media/tabla-multas-exceso-velocidad-2026.webp" alt="Tabla con los importes y puntos de las multas de tráfico más comunes en España en 2026" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

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
    </div>
  );
}
