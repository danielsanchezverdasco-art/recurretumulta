import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import { MorphCard, PageHero, Countdown } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { LANZAMIENTOS_SEED } from "@/lib/lanzamientos-2026-2027.ts";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";

// Artículo del blog para los modelos que ya tienen noticia publicada (ficha
// técnica completa, fotos, vídeos). Clave: "marca modelo" en minúsculas.
// Si un modelo del calendario tiene artículo, la tarjeta enlaza a la noticia;
// si no, se mantiene el enlace al comparador.
const ARTICULOS: Record<string, string> = {
  "skoda epiq": "skoda-epiq-electrico-barato-precio-espana",
  "volkswagen id.polo (id.2)": "volkswagen-id-polo-electrico-precio-espana-2026",
  "hyundai ioniq 3": "hyundai-ioniq-3-precio-espana-2026",
  "bmw i3 (neue klasse)": "nuevo-bmw-serie-3-i3-electrico-2026-precio-ficha-tecnica",
  "li auto l6": "li-auto-l6-ficha-tecnica-precio",
  "deepal s07": "deepal-s07-precio-espana-ficha-tecnica",
  "xiaomi yu7": "xiaomi-yu7-suv-electrico-llegada-europa",
};

// Fichas de la web para los modelos de la semilla que ya tienen artículo.
// Clave: "marca modelo" en minúsculas. El resto enlaza al comparador.
const FICHAS: Record<string, string> = {
  "deepal s07": "deepal-s07-precio-espana-ficha-tecnica",
  "xiaomi yu7": "xiaomi-yu7-suv-electrico-llegada-europa",
  "li auto l6": "li-auto-l6-ficha-tecnica-precio",
};

const FAQ_SCHEMA_ITEMS = [
  {
    "@type": "Question",
    "name": "¿Cada cuánto se actualiza el calendario de lanzamientos?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Se revisa cada mes: se añaden los nuevos anuncios de los fabricantes, se confirman fechas y se eliminan los modelos que ya están a la venta en España.",
    },
  },
  {
    "@type": "Question",
    "name": "¿Qué significa que una fecha esté «por confirmar»?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Que la fecha no es oficial del fabricante: es una estimación basada en anuncios, salones del automóvil o prensa especializada. Solo marcamos como confirmada la fecha comunicada oficialmente por la marca.",
    },
  },
  {
    "@type": "Question",
    "name": "¿Dónde puedo comparar los modelos que ya están disponibles?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "En nuestro comparador de coches, con autonomía, batería, carga rápida y precio lado a lado.",
    },
  },
];

function buildSchema(filas: typeof LANZAMIENTOS_SEED) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://recurretumulta.online/calendario-lanzamientos-2026-2027#faq",
        "mainEntity": FAQ_SCHEMA_ITEMS,
      },
      {
        "@type": "ItemList",
        "name": "Calendario de lanzamientos de coches 2026-2027",
        "itemListElement": filas.map((l, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": `${l.marca} ${l.modelo}`,
          "description": `${l.segmento}. Fecha prevista: ${l.fechaPrevista}.${l.notas ? " " + l.notas : ""}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
          { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" },
          { "@type": "ListItem", "position": 3, "name": "Calendario de lanzamientos 2026-2027", "item": "https://recurretumulta.online/calendario-lanzamientos-2026-2027" },
        ],
      },
    ],
  };
}

function CalendarioLanzamientosPage() {
  const [segmento, setSegmento] = useState<string>("Todos");

  // Datos remotos de Convex; durante el prerender (convex.cloud bloqueado) la
  // query queda en undefined y la página renderiza completa con la semilla local.
  const remoto = useQuery(api.lanzamientos.listar);
  const filas = remoto && remoto.length > 0 ? remoto : LANZAMIENTOS_SEED;

  const segmentos = ["Todos", ...Array.from(new Set(filas.map((l) => l.segmento)))];
  const visibles = segmento === "Todos" ? filas : filas.filter((l) => l.segmento === segmento);

  useSeo({
    title: "Lanzamientos coches 2026-2027: calendario y fechas",
    description: "Qué coches llegan a España en 2026 y 2027: calendario actualizado cada mes con fechas previstas, segmentos y modelos confirmados.",
    canonical: "/calendario-lanzamientos-2026-2027",
    schema: buildSchema(filas),
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
      <SharedNavbar />
      <nav aria-label="Migas de pan" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-slate-500">
        <a href="https://recurretumulta.online/" className="hover:text-slate-800">Inicio</a> {">"} <a href="https://recurretumulta.online/herramientas" className="hover:text-slate-800">Herramientas</a> {">"} <span className="text-slate-800 font-medium">Calendario de lanzamientos 2026-2027</span>
      </nav>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        <div className="mb-8">
          <PageHero
            image="/media/calendario-lanzamientos.webp"
            imageAlt="Coche nuevo cubierto con una lona en una presentación con focos, ambiente de evento del motor"
            badge="🚗 Actualizado · octubre 2026"
            title={
              <>
                Calendario de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                  lanzamientos
                </span>
                <br />
                2026 – 2027
              </>
            }
            subtitle="Los próximos coches que llegarán a España y Europa: eléctricos, híbridos y novedades de todas las marcas, con su fecha prevista de llegada. Toca cualquier modelo para ver su noticia completa: ficha técnica, fotos y vídeos."
            stats={[
              { value: filas.length, label: "Modelos en seguimiento", countUp: true },
              {
                value: filas.filter((l) => l.fechaConfirmada).length,
                label: "Fechas confirmadas",
                countUp: true,
              },
            ]}
          >
            <div className="flex flex-col items-start gap-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Cuenta atrás para 2027
              </p>
              <Countdown target="2027-01-01T00:00:00" label="Cuenta atrás para 2027" />
            </div>
          </PageHero>
        </div>

        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrar por segmento">
          {segmentos.map((s) => (
            <button
              key={s}
              onClick={() => setSegmento(s)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition cursor-pointer ${
                segmento === s
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-red-600 hover:text-red-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-10">
          {visibles.map((l) => {
            const fichaId = FICHAS[`${l.marca} ${l.modelo}`.toLowerCase()];
            const articuloSlug = ARTICULOS[`${l.marca} ${l.modelo}`.toLowerCase()];
            const titulo = articuloSlug ? (
              <a href={`https://recurretumulta.online${hrefDesdeBlog(articuloSlug)}`} className="hover:text-red-700 hover:underline">
                <h2 className="text-xl font-bold">{l.modelo}</h2>
              </a>
            ) : (
              <h2 className="text-xl font-bold">{l.modelo}</h2>
            );
            return (
              <article key={`${l.marca}-${l.modelo}`} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {l.imagen && (
                  articuloSlug ? (
                    <MorphCard href={hrefDesdeBlog(articuloSlug)} label={`Ver la noticia completa del ${l.marca} ${l.modelo}`} className="block">
                      <img
                        src={l.imagen}
                        alt={`${l.marca} ${l.modelo}, ${l.segmento.toLowerCase()} de próxima llegada a España`}
                        className="w-full h-44 sm:h-52 object-cover"
                        loading="lazy"
                      />
                    </MorphCard>
                  ) : (
                    <img
                      src={l.imagen}
                      alt={`${l.marca} ${l.modelo}, ${l.segmento.toLowerCase()} de próxima llegada a España`}
                      className="w-full h-44 sm:h-52 object-cover"
                      loading="lazy"
                    />
                  )
                )}
                <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{l.marca}</p>
                    {titulo}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{l.segmento}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-slate-800">📅 {l.fechaPrevista}</span>
                  {!l.fechaConfirmada && (
                    <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Fecha por confirmar</span>
                  )}
                </div>
                {l.notas && <p className="text-sm text-slate-600 mb-3">{l.notas}</p>}
                <div className="flex flex-wrap gap-3">
                  {articuloSlug && (
                    <a href={`https://recurretumulta.online${hrefDesdeBlog(articuloSlug)}`} className="text-sm text-white font-bold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition">
                      Ver la noticia completa →
                    </a>
                  )}
                  {fichaId && (
                    <a href={`https://recurretumulta.online/coches/${fichaId}`} className="text-sm text-red-700 font-semibold hover:underline self-center">
                      Ver ficha del modelo →
                    </a>
                  )}
                  <a href="https://recurretumulta.online/comparador-coches/" className="text-sm text-red-700 font-semibold hover:underline self-center">
                    Comparar con otros coches →
                  </a>
                </div>
                </div>
              </article>
            );
          })}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
          <div>
            <h3 className="font-bold mb-1">¿Cada cuánto se actualiza el calendario de lanzamientos?</h3>
            <p className="text-slate-600">Se revisa cada mes: se añaden los nuevos anuncios, se confirman fechas y se eliminan los modelos que ya están a la venta.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Qué significa que una fecha esté «por confirmar»?</h3>
            <p className="text-slate-600">Que no es oficial del fabricante: es una estimación basada en anuncios o prensa especializada. Solo marcamos como confirmada la fecha comunicada por la marca.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Dónde puedo comparar los modelos que ya están disponibles?</h3>
            <p className="text-slate-600">En nuestro <a href="https://recurretumulta.online/comparador-coches/" className="text-red-700 font-semibold hover:underline">comparador de coches</a>: autonomía, batería, carga rápida y precio, lado a lado.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Buscas coche ahora?</h2>
          <p className="text-slate-300 mb-6">Mientras llegan las novedades, compara los modelos que ya puedes comprar.</p>
          <a href="https://recurretumulta.online/comparador-coches/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition">Ir al comparador</a>
        </div>
      </main>
      <SharedFooter />
    </div>
  );
}

export default function CalendarioLanzamientosPageWithConvex() {
  return (
    <LazyConvexProvider>
      <CalendarioLanzamientosPage />
    </LazyConvexProvider>
  );
}
