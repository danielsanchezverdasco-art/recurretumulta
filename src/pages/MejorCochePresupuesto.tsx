import { Link } from "react-router-dom";
import { fmtMiles } from "@/lib/formato.ts";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Car,
  Check,
  Fuel,
  Gauge,
  Luggage,
  Scale,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  COCHES_PRESUPUESTO,
  ETIQUETA_NOMBRE,
  TIPOS_MOTOR,
  filtrarPorPresupuesto,
  recomendarPorPresupuesto,
  sugerenciaPresupuestoInsuficiente,
  type CochePresupuesto,
  type Recomendacion,
  type TipoMotor,
} from "@/lib/mejor-coche-presupuesto-data.ts";

const PRESUPUESTO_MIN = 5000;
const PRESUPUESTO_MAX = 80000;
const PRESUPUESTO_DEFECTO = 25000;

const FAQS = [
  {
    q: "¿Qué coche me compro con 20.000 €?",
    a: "Con 20.000 € tienes opciones en casi todos los tipos de motor: el Dacia Sandero TCe 100 (14.490 €, etiqueta ECO) si buscas lo más barato, eléctricos urbanos como el Dacia Spring (18.000 €) o el Renault Twingo E-Tech (19.500 €) si haces ciudad y tienes dónde cargarlo, y gasolina como el Seat Ibiza o el Renault Clio. Usa el selector de esta página con tu presupuesto exacto para ver la recomendación.",
  },
  {
    q: "¿Qué diferencia hay entre etiqueta Cero, ECO y C?",
    a: "La etiqueta Cero (azul) es para eléctricos puros e híbridos enchufables con más de 40 km de autonomía eléctrica: entra en todas las ZBE sin restricciones. La ECO (verde y azul) es para microhíbridos e híbridos: también con ventajas en ZBE. La C (verde) es para gasolina y diésel modernos: puede tener restricciones en episodios de alta contaminación. Puedes comprobar la etiqueta de cualquier coche en nuestra calculadora de etiqueta DGT.",
  },
  {
    q: "¿Merece la pena comprar un diésel nuevo en 2026?",
    a: "Solo si haces muchos kilómetros al año por carretera (más de 20.000-25.000 km). Los diésel nuevos son cada vez menos (quedan pocos modelos a la venta), llevan etiqueta C y pierden valor de reventa. Para uso mixto o urbano, un gasolina, un microhíbrido ECO o un eléctrico suelen salir mejor parados.",
  },
  {
    q: "¿Los precios que muestra la herramienta son reales?",
    a: "Sí: cada precio es un PVP verificado en la web oficial de la marca, km77, carwow u otra fuente indicada en la ficha del modelo. Cuando el precio depende de una promoción o es orientativo, lo decimos en la propia tarjeta. Los precios se revisan de forma periódica; el PVP final siempre lo confirma el concesionario.",
  },
  {
    q: "¿Por qué el recomendado no es el coche más caro?",
    a: "La recomendación puntúa etiqueta ambiental, consumo, margen de precio respecto a tu presupuesto y maletero. El objetivo es el mejor valor por tu dinero, no el más caro: muchas veces el recomendado es el más barato con etiqueta ECO o el que menos consume.",
  },
];

const ETIQUETA_STYLE: Record<CochePresupuesto["etiquetaDgt"], string> = {
  Cero: "bg-sky-600 text-white",
  ECO: "bg-emerald-600 text-white",
  C: "bg-lime-500 text-lime-950",
  B: "bg-yellow-400 text-yellow-950",
};

function formatoEur(n: number): string {
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  return `${fmtMiles(n)} €`;
}

function TarjetaCoche({ rec }: { rec: Recomendacion }) {
  const c = rec.coche;
  return (
    <article
      className={`relative border rounded-2xl bg-white overflow-hidden flex flex-col ${
        rec.recomendado ? "border-red-500 ring-2 ring-red-500/30 shadow-lg" : "border-gray-200"
      }`}
    >
      {rec.recomendado && (
        <div className="bg-red-600 text-white text-xs font-bold px-4 py-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Recomendado
        </div>
      )}
      {c.imagen ? (
        <img src={c.imagen} alt={`${c.marca} ${c.modelo}`} className="w-full h-44 object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-44 bg-gray-100 flex flex-col items-center justify-center text-gray-400 gap-2">
          <Car className="w-10 h-10" />
          <span className="text-xs font-medium">Foto oficial pendiente</span>
        </div>
      )}
      <div className="p-5 flex flex-col gap-3 grow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg leading-tight">
            {c.marca} {c.modelo}
          </h3>
          <span className={`shrink-0 text-xs font-bold px-2 py-1 rounded-full ${ETIQUETA_STYLE[c.etiquetaDgt]}`}>
            {c.etiquetaDgt}
          </span>
        </div>
        {rec.motivo && (
          <p className="text-sm bg-red-50 border border-red-100 text-red-900 rounded-xl px-3 py-2 font-medium">
            {rec.motivo}
          </p>
        )}
        <p className="text-2xl font-black text-gray-900">
          {formatoEur(c.precioDesde)}
          <span className="text-xs font-normal text-gray-500 ml-1">desde</span>
        </p>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-gray-50 rounded-xl p-2">
            <Gauge className="w-4 h-4 mx-auto mb-1 text-gray-500" />
            <div className="font-bold">{c.potenciaCv ?? "—"}</div>
            <div className="text-gray-500">CV</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2">
            <Fuel className="w-4 h-4 mx-auto mb-1 text-gray-500" />
            <div className="font-bold">{c.consumo ?? "—"}</div>
            <div className="text-gray-500">{c.consumoUnidad}</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2">
            <Luggage className="w-4 h-4 mx-auto mb-1 text-gray-500" />
            <div className="font-bold">{c.maleteroL ?? "—"}</div>
            <div className="text-gray-500">L maletero</div>
          </div>
        </div>
        <div className="text-sm space-y-1.5">
          {c.pros.map((p) => (
            <p key={p} className="flex gap-2 text-gray-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              {p}
            </p>
          ))}
          {c.contras.map((n) => (
            <p key={n} className="flex gap-2 text-gray-500">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              {n}
            </p>
          ))}
        </div>
        {(c.notaPrecio || c.fuentePrecio) && (
          <p className="text-xs text-gray-400">
            Precio: {c.notaPrecio ?? "PVP"}. Fuente: {c.fuentePrecio}.
          </p>
        )}
        <div className="flex gap-2 mt-auto pt-2">
          {c.comparadorSlug && (
            <Link
              to={`/comparador-coches/?a=${c.comparadorSlug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              <Scale className="w-4 h-4" />
              Comparar
            </Link>
          )}
          {c.fichaUrl ? (
            <Link
              to={c.fichaUrl}
              className="flex-1 inline-flex items-center justify-center gap-1.5 border border-gray-300 hover:border-red-500 hover:text-red-700 text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              Ver ficha
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/comparador-coches/"
              className="flex-1 inline-flex items-center justify-center gap-1.5 border border-gray-300 hover:border-red-500 hover:text-red-700 text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              Ver comparador
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function MejorCochePresupuesto() {
  const [presupuesto, setPresupuesto] = useState(PRESUPUESTO_DEFECTO);
  const [tipoMotor, setTipoMotor] = useState<TipoMotor | "Todos">("Todos");

  const recomendaciones = useMemo(
    () => recomendarPorPresupuesto(presupuesto, tipoMotor),
    [presupuesto, tipoMotor],
  );
  const sugerencia = useMemo(
    () =>
      recomendaciones.length === 0
        ? sugerenciaPresupuestoInsuficiente(presupuesto, tipoMotor)
        : null,
    [recomendaciones, presupuesto, tipoMotor],
  );

  const nombreTipo = tipoMotor === "Todos" ? "todos los motores" : ETIQUETA_NOMBRE[tipoMotor];

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          name: "Mejor coche por menos de X €",
          url: "https://recurretumulta.online/mejor-coche-por-presupuesto",
          applicationCategory: "UtilityApplication",
          operatingSystem: "All",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
          description:
            "Mete tu presupuesto y elige tipo de motor: te recomendamos los coches nuevos que entran en tu presupuesto, ordenados por valor, con precios PVP verificados.",
        },
        {
          "@type": "ItemList",
          name: `Coches recomendados por menos de ${formatoEur(presupuesto)}`,
          itemListElement: recomendaciones.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            // 17/10/2026: página de listado, no de producto: sin Car/Offer (GSC).
            name: `${r.coche.marca} ${r.coche.modelo}`,
            url: `https://recurretumulta.online/coches/${r.coche.id}/`,
          })),
        },
        {
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
            { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://recurretumulta.online/herramientas" },
            { "@type": "ListItem", position: 3, name: "Mejor coche por menos de X €", item: "https://recurretumulta.online/mejor-coche-por-presupuesto" },
          ],
        },
      ],
    }),
    [recomendaciones, presupuesto],
  );

  useSeo({
    title: "¿Qué coche me compro? Recomendador 2026",
    description:
      "Mete tu presupuesto y elige motor: te mostramos los coches nuevos que entran en tu presupuesto, ordenados por valor, con precios PVP verificados y etiqueta DGT.",
    canonical: "/mejor-coche-por-presupuesto",
    keywords: ["qué coche comprar", "mejor coche por precio", "coche barato 2026", "recomendador coches", "coche con etiqueta ECO barato"],
    schema: jsonLd,
  });

  const cambiarPresupuesto = (v: number) => {
    if (Number.isNaN(v)) return;
    setPresupuesto(Math.min(PRESUPUESTO_MAX, Math.max(PRESUPUESTO_MIN, Math.round(v))));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <nav className="text-xs text-gray-500 mb-4" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/herramientas/" className="hover:underline">Herramientas</Link> ·{" "}
          <span className="text-gray-700">Mejor coche por presupuesto</span>
        </nav>

        <div className="mb-8">
          <PageHero
            image="/media/hero-mejor-presupuesto.webp"
            imageAlt="Concesionario con varios SUV nuevos expuestos para elegir según presupuesto"
            badge="💶 Herramienta gratuita"
            title="¿Qué coche me compro con mi presupuesto?"
            subtitle="Dinos cuánto quieres gastar y qué motor prefieres. Te mostramos los coches nuevos que entran en tu presupuesto, ordenados por valor —con precios PVP verificados, etiqueta DGT y el porqué honesto de cada recomendación."
          />
        </div>

        {/* Controles */}
        <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 mb-8 space-y-6">
          <div>
            <label htmlFor="presupuesto" className="flex items-center justify-between mb-2">
              <span className="font-bold text-gray-900">Tu presupuesto</span>
              <span className="text-2xl font-black text-red-600">{formatoEur(presupuesto)}</span>
            </label>
            <input
              id="presupuesto"
              type="range"
              min={PRESUPUESTO_MIN}
              max={PRESUPUESTO_MAX}
              step={500}
              value={presupuesto}
              onChange={(e) => cambiarPresupuesto(Number(e.target.value))}
              className="w-full accent-red-600 h-2"
              aria-label="Presupuesto máximo en euros"
            />
            <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
              <span>{formatoEur(PRESUPUESTO_MIN)}</span>
              <input
                type="number"
                min={PRESUPUESTO_MIN}
                max={PRESUPUESTO_MAX}
                step={500}
                value={presupuesto}
                onChange={(e) => cambiarPresupuesto(Number(e.target.value))}
                className="w-28 border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-right"
                aria-label="Escribir presupuesto exacto"
              />
              <span>{formatoEur(PRESUPUESTO_MAX)}</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-2">Tipo de motor</p>
            <div className="flex flex-wrap gap-2">
              {TIPOS_MOTOR.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTipoMotor(t.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                    tipoMotor === t.id
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-red-400"
                  }`}
                  aria-pressed={tipoMotor === t.id}
                >
                  {t.nombre}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section aria-live="polite">
          <h2 className="text-xl font-black text-gray-900 mb-4">
            {recomendaciones.length > 0
              ? `${recomendaciones.length} modelo${recomendaciones.length > 1 ? "s" : ""} por menos de ${formatoEur(presupuesto)} (${nombreTipo})`
              : "Sin resultados"}
          </h2>
          {sugerencia ? (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center max-w-xl mx-auto">
              <Search className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <p className="text-gray-800 font-medium mb-4">{sugerencia.texto}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {sugerencia.presupuestoMinimo && (
                  <button
                    type="button"
                    onClick={() => cambiarPresupuesto(sugerencia.presupuestoMinimo!)}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    Subir a {formatoEur(sugerencia.presupuestoMinimo)}
                  </button>
                )}
                {sugerencia.tipoAlternativo && (
                  <button
                    type="button"
                    onClick={() => setTipoMotor(sugerencia.tipoAlternativo!.id)}
                    className="border border-gray-300 hover:border-red-500 text-sm font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    Ver {sugerencia.tipoAlternativo.nombre.toLowerCase()}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recomendaciones.map((rec) => (
                <TarjetaCoche key={rec.coche.id} rec={rec} />
              ))}
            </div>
          )}
        </section>

        {/* Nota de metodología */}
        <section className="mt-10 bg-white border border-gray-200 rounded-2xl p-5 md:p-6">
          <h2 className="font-black text-gray-900 mb-2">Cómo elegimos la recomendación</h2>
          <p className="text-sm text-gray-600">
            Puntuamos cada modelo por su etiqueta ambiental (Cero y ECO puntúan más), su consumo,
            el margen que deja en tu presupuesto y su maletero. No siempre gana el más caro: gana
            el que más valor da por tu dinero. Los precios son PVP verificados el 02/10/2026; la
            fuente aparece en cada tarjeta y los precios orientativos o con promoción se indican
            expresamente. La lista se revisa periódicamente.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-sm">
            <Link to="/comparador-coches/" className="text-red-600 font-bold hover:underline">
              Comparador de coches
            </Link>
            <span className="text-gray-300">·</span>
            <Link to="/calculadora-etiqueta-dgt/" className="text-red-600 font-bold hover:underline">
              Calculadora de etiqueta DGT
            </Link>
            <span className="text-gray-300">·</span>
            <Link to="/herramientas/" className="text-red-600 font-bold hover:underline">
              Todas las herramientas
            </Link>
          </div>
        </section>

        <figure className="mt-10 max-w-3xl">
          <video src="/media/mejor-presupuesto.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: entrega de un coche nuevo en un concesionario luminoso" />
          <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: el momento de estrenar coche en el concesionario.</figcaption>
        </figure>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-2xl p-5 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-2">
                  {f.q}
                  <span className="text-red-600 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA discreta al analizador */}
        <section className="mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="grow">
            <h2 className="font-black text-lg mb-1">¿Te ha llegado una multa con tu coche nuevo?</h2>
            <p className="text-gray-300 text-sm">
              Antes de pagar o recurrir, analízala gratis con IA: te decimos si es recurrible y por qué.
            </p>
          </div>
          <Link
            to="/#analizador"
            className="shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl transition-colors"
          >
            Analizar mi multa gratis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}

// Re-export para tests / depuración
export { COCHES_PRESUPUESTO, filtrarPorPresupuesto };
