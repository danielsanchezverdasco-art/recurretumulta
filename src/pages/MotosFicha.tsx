import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreditoFoto from "@/components/CreditoFoto.tsx";
import { BLOG_LITE } from "@/lib/blog-lite.generated.ts";
import { ANALISIS_MOTOS } from "@/lib/analisis-slugs.generated";
const BLOG_SLUGS = new Set(BLOG_LITE.map((p) => p.slug));
import {
  ArrowLeftRight,
  Bike,
  BookOpen,
  Check,
  Gauge,
  Minus,
  Play,
  Wrench,
  X,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  DriveInImage,
  FlipCard,
  Lightbox,
  Marker,
  StickyCta,
  useSpotlight,
} from "@/components/motion.tsx";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import { NotaCosa, MarcaAguaCosa } from "@/components/Cosa.tsx";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import BannerJuegoMonos from "@/components/caza-monos/BannerJuegoMonos";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import { garantiaDeMarca } from "@/lib/garantias-marcas.ts";
import { tituloFichaMoto } from "@/lib/seo-titulo-ficha.ts";
import type { MotoComparador } from "@/lib/comparador-motos-data.ts";
import type { ResenaSchemaExtra } from "@/components/ResenasVehiculo.tsx";

import { loadArrayItem, loadRecordEntry } from "@/lib/data-loader-utils.ts";

// 07/10/2026 (fluidez): animados below-the-fold en lazy — se cargan al hacer scroll.
const Donut = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Donut })));
const BatteryFill = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.BatteryFill })));
const NightGallery = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.NightGallery })));
const SpecBar = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.SpecBar })));
const Speedometer = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Speedometer })));

// 07/10/2026 (rendimiento): below-the-fold en lazy para reducir el chunk inicial.
const SeguridadEuroNCAPLayz = lazy(() => import("@/components/SeguridadEuroNCAP.tsx"));
const PlanMantenimientoLazy = lazy(() => import("@/components/PlanMantenimiento.tsx"));
const HistoriaModeloLazy = lazy(() => import("@/components/HistoriaModelo.tsx"));
// 12/10/2026: opiniones de propietarios con fotos (below-the-fold en lazy).
const ResenasVehiculoLazy = lazy(() => import("@/components/ResenasVehiculo.tsx"));

const fmtPrecio = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " €";
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtS = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " s";
const fmtKmh = (v: number | null) => (v == null ? "—" : v + " km/h");
const fmtKwh = (v: number | null) => (v == null ? "—" : v + " kWh");
const fmtKwCv = (m: MotoComparador) => {
  if (m.potenciaKw == null && m.potenciaCv == null) return "—";
  const kw = m.potenciaKw != null ? `${String(m.potenciaKw).replace(".", ",")} kW` : "";
  const cv = m.potenciaCv != null ? `${m.potenciaCv} CV` : "";
  return [kw, cv].filter(Boolean).join(" · ");
};
const fmtKg = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " kg";
const fmtPlazas = (v: number | null) => (v == null ? "—" : String(v));
const fmtAutonomia = (m: MotoComparador) => {
  if (m.autonomiaKm == null) return "—";
  const ciclo = m.autonomiaCiclo ? ` (${m.autonomiaCiclo})` : "";
  return `${m.autonomiaKm} km${ciclo}`;
};

type Fila = { campo: string; label: string; get: (m: MotoComparador) => string };

const FILAS: Fila[] = [
  { campo: "precioDesde", label: "Precio desde", get: (m) => fmtPrecio(m.precioDesde) },
  { campo: "version", label: "Versión", get: (m) => m.version },
  { campo: "potencia", label: "Potencia", get: fmtKwCv },
  { campo: "autonomiaKm", label: "Autonomía", get: fmtAutonomia },
  { campo: "bateriaKwh", label: "Batería", get: (m) => fmtKwh(m.bateriaKwh) },
  { campo: "velocidadMax", label: "Velocidad máxima", get: (m) => fmtKmh(m.velocidadMax) },
  { campo: "ceroCincuenta", label: "0-50 km/h", get: (m) => fmtS(m.ceroCincuenta) },
  { campo: "pesoKg", label: "Peso (orden de marcha)", get: (m) => fmtKg(m.pesoKg) },
  { campo: "plazas", label: "Plazas", get: (m) => fmtPlazas(m.plazas) },
  { campo: "carnet", label: "Carnet necesario", get: (m) => m.carnet },
  { campo: "carga", label: "Carga", get: (m) => m.carga ?? "—" },
  { campo: "etiquetaDgt", label: "Etiqueta DGT", get: (m) => m.etiquetaDgt || "—" },
];

function Ficha({ moto }: { moto: MotoComparador }) {
  const nombre = `${moto.marca} ${moto.modelo}`.replace(/:+$/, "").trim();
  // 13/10/2026: análisis del blog (analisisSlug o post con el mismo id); botón solo si el post existe.
  const analisisMoto = ANALISIS_MOTOS[moto.id] ?? moto.analisisSlug ?? moto.id;
  // 12/10/2026: nodos schema.org de reseñas (se fusionan en cliente cuando
  // Convex responde; en el prerender no hay datos → solo el schema base).
  const [reviewsExtra, setReviewsExtra] = useState<ResenaSchemaExtra | null>(null);

  const [lightbox, setLightbox] = useState(false);
  const spotRef = useSpotlight<HTMLElement>();

  // Dimensiones intrínsecas para width/height exactos de la hero (LCP 05/10/2026):
  // importación diferida para no engordar el chunk de la ficha con el mapa de 548KB.
  const [dims, setDims] = useState<Record<string, [number, number]>>({});
  useEffect(() => {
    let viva = true;
    import("@/lib/media-dimensiones.ts").then((m) => {
      if (viva) setDims(m.MEDIA_DIMENSIONS ?? {});
    });
    return () => { viva = false; };
  }, []);

  // Datos estrella para los Donut (solo valores reales, nunca inventados).
  const donuts: { value: number; max: number; label: string }[] = [];
  if (moto.autonomiaKm != null)
    donuts.push({ value: moto.autonomiaKm, max: 300, label: "km de autonomía" });
  if (moto.potenciaCv != null)
    donuts.push({ value: moto.potenciaCv, max: 120, label: "CV de potencia" });
  else if (moto.potenciaKw != null)
    donuts.push({ value: moto.potenciaKw, max: 50, label: "kW de potencia" });
  if (donuts.length < 3 && moto.velocidadMax != null)
    donuts.push({ value: moto.velocidadMax, max: 160, label: "km/h vel. máxima" });

  // Datos técnicos para las SpecBar (solo valores reales).
  const specbars: { label: string; value: number; max: number; unit: string }[] = [];
  if (moto.potenciaKw != null)
    specbars.push({ label: "Potencia", value: moto.potenciaKw, max: 50, unit: " kW" });
  else if (moto.potenciaCv != null)
    specbars.push({ label: "Potencia", value: moto.potenciaCv, max: 120, unit: " CV" });
  if (moto.autonomiaKm != null)
    specbars.push({ label: "Autonomía", value: moto.autonomiaKm, max: 300, unit: " km" });
  if (moto.velocidadMax != null)
    specbars.push({ label: "Velocidad máxima", value: moto.velocidadMax, max: 160, unit: " km/h" });
  if (specbars.length < 4 && moto.bateriaKwh != null)
    specbars.push({ label: "Batería", value: moto.bateriaKwh, max: 10, unit: " kWh" });

  const FAQS = [
    {
      q: `¿Cuánto cuesta la ${nombre}?`,
      a:
        moto.precioDesde == null
          ? `La ${nombre} aún no tiene precio confirmado para España: lo publicaremos en cuanto la marca lo anuncie.`
          : `La ${nombre} parte de ${fmtPrecio(moto.precioDesde)}. El detalle de versiones está en la comparativa completa.`,
    },
    {
      q: `¿Qué carnet necesito para la ${nombre}?`,
      a: `Necesitas el carnet ${moto.carnet}. ${
        /A1/.test(moto.carnet)
          ? "Recuerda: el carnet B con más de 3 años de antigüedad también habilita para motos de hasta 11 kW (A1)."
          : "Comprueba que tu permiso cubre la potencia de esta moto antes de comprarla."
      }`,
    },
    {
      q: `¿Cuál es la autonomía de la ${nombre}?`,
      a:
        moto.autonomiaKm == null
          ? `No hay una autonomía publicada por ninguna fuente fiable para la ${nombre}, así que preferimos no inventarla: aparece como «—» en la ficha.`
          : `Homologa ${fmtAutonomia(moto)}. La cifra real depende de tu conducción, el peso y la temperatura.`,
    },
    {
      q: `¿Cómo se carga la ${nombre}?`,
      a:
        moto.carga == null
          ? `La marca no ha publicado los detalles de carga de la ${nombre}: los añadiremos en cuanto haya dato oficial.`
          : moto.carga,
    },
    {
      q: `¿La ${nombre} tiene etiqueta Cero?`,
      a: `Sí: al ser 100 % eléctrica, la ${nombre} tiene etiqueta DGT «Cero» y puede circular por todas las ZBE sin restricciones.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Motorcycle",
        name,
        ...(moto.imagen
          ? { image: `https://recurretumulta.online${moto.imagen}` }
          : {}),
        url: `https://recurretumulta.online/motos/${moto.id}`,
        manufacturer: { "@type": "Organization", name: moto.marca },
        vehicleConfiguration: moto.version,
        ...(moto.potenciaKw != null && {
          vehicleEngine: {
            "@type": "EngineSpecification",
            enginePower: {
              "@type": "QuantitativeValue",
              value: moto.potenciaKw,
              unitText: "kW",
            },
          },
        }),
        ...(moto.plazas != null && { numberOfSeats: moto.plazas }),
        ...(moto.pesoKg != null && {
          weight: {
            "@type": "QuantitativeValue",
            value: moto.pesoKg,
            unitText: "kg",
          },
        }),
        ...(moto.velocidadMax != null && {
          speed: {
            "@type": "QuantitativeValue",
            value: moto.velocidadMax,
            unitText: "km/h",
          },
        }),
        ...(moto.precioDesde != null && {
          offers: {
            "@type": "Offer",
            price: moto.precioDesde,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        }),
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Comparador de motos eléctricas",
            item: "https://recurretumulta.online/comparador-motos",
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: `https://recurretumulta.online/motos/${moto.id}`,
          },
        ],
      },
    ],
  };

  useSeo({
    // SEO 07/10/2026 (metodología CTR, Daniel): fórmula ganadora
    // [Keyword] + [número] + [beneficio] + [(año)]. Siempre ≤60 car.
    title: tituloFichaMoto(nombre, moto),
    description: `Ficha técnica de la ${nombre}: precio, autonomía, batería, carnet necesario, pros y contras, vídeo y comparativa. Sin cifras inventadas.`,
    canonical: `/motos/${moto.id}/`,
    ...(moto.imagen ? { image: `https://recurretumulta.online${moto.imagen}` } : {}),
    type: "article",
    keywords: [
      nombre,
      `${nombre} ficha técnica`,
      `${nombre} precio`,
      `${nombre} autonomía`,
      `${nombre} opiniones`,
      `moto eléctrica ${nombre}`,
    ],
    schema: reviewsExtra
      ? {
          ...jsonLd,
          "@graph": [
            ...(jsonLd["@graph"] as Record<string, unknown>[]).map((nodo, i) =>
              i === 0 && reviewsExtra.aggregateRating
                ? { ...nodo, aggregateRating: reviewsExtra.aggregateRating }
                : nodo,
            ),
            ...reviewsExtra.reviews,
          ],
        }
      : jsonLd,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>{" "}
          ·{" "}
          <Link to="/comparador-motos/" className="hover:underline">
            Comparador de motos eléctricas
          </Link>{" "}
          · <span className="text-gray-700">{nombre}</span>
        </nav>

        <header className="mt-4">
          <div className="overflow-hidden rounded-3xl">
            {moto.imagen ? (
              <button
                type="button"
                onClick={() => setLightbox(true)}
                className="block w-full cursor-zoom-in"
                aria-label={`Ver foto grande de la ${nombre}`}
              >
                <DriveInImage
                  src={moto.imagen}
                  alt={`Foto oficial de la ${nombre}`}
                  eager={true}
                  width={dims[moto.imagen.split("/").pop() ?? ""]?.[0]}
                  height={dims[moto.imagen.split("/").pop() ?? ""]?.[1]}
                  className="block w-full bg-white"
                  imgClassName="aspect-video w-full object-contain"
                />
              </button>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-emerald-50 text-gray-500">
                <Bike className="h-12 w-12" />
                <p className="px-4 text-center text-sm font-medium">
                  Foto oficial pendiente de verificación
                </p>
              </div>
            )}
          </div>
          <CreditoFoto src={moto.imagen} />
          {moto.imagen && lightbox && (
            <Lightbox
              src={moto.imagen}
              alt={`Foto oficial de la ${nombre}`}
              onClose={() => setLightbox(false)}
            />
          )}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {moto.marca}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {moto.categoria}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              Carnet {moto.carnet.split(" ")[0]}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">{nombre}</h1>
          <p className="mt-2 text-gray-600">
            Ficha técnica completa: precio, potencia, <Marker>autonomía</Marker>, batería,{" "}
            <Marker>carnet necesario</Marker> y <Marker>etiqueta DGT</Marker>, con puntos
            fuertes y débiles. Si un dato no está publicado por una
            fuente fiable, aparece como «—» en vez de inventarlo. Fuente:{" "}
            {moto.fuenteUrl ? (
              <a
                href={moto.fuenteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {moto.fuenteNombre ?? "web oficial"}
              </a>
            ) : (
              (moto.fuenteNombre ?? "web oficial de la marca")
            )}
            .
          </p>
        </header>

        <div className="mt-4 flex justify-end">
          <CompartirBotones
            titulo={`Ficha técnica: ${nombre}`}
            texto={`Ficha técnica de la ${nombre}: precio, autonomía, potencia y carnet necesario`}
          />
        </div>

        {/* ── La nota de Cosa (fórmula determinista sobre datos reales) ── */}
        <NotaCosa
          nombre={nombre}
          entrada={{
            precioEur: moto.precioDesde,
            potenciaCv: moto.potenciaCv ?? (moto.potenciaKw != null ? moto.potenciaKw * 1.36 : null),
            etiquetaDgt: moto.etiquetaDgt,
            estrellasEuroNCAP: null, // las motos no tienen test EuroNCAP: no penaliza
            garantiaAnos: garantiaDeMarca(moto.marca, "motos")?.anios ?? null,
            autonomiaKm: moto.autonomiaKm,
            pesoKg: moto.pesoKg,
          }}
        />
        <MarcaAguaCosa />

        {/* Caza de monos: mono superpuesto (sin hueco en el flujo) */}
        <div className="relative h-0 z-10">
          <MonoEscondido
            id={fijoId("ficha-moto")}
            pose="mono-apoyado"
            size={36}
            className="absolute -top-8 right-5"
            titulo="¡Un mono en la ficha! Haz clic para cazarlo 🦍"
          />
        </div>
        <BannerJuegoMonos />

        {donuts.length >= 2 && (
          <Suspense fallback={null}>
          <section
            className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label="Datos destacados"
          >
            <h2 className="text-xl font-extrabold text-gray-900">En cifras</h2>
            <div className="mt-4 flex flex-wrap items-start justify-around gap-6">
              {donuts.map((d) => (
                <Donut key={d.label} value={d.value} max={d.max} label={d.label} />
              ))}
            </div>
            {/* ── LOTE 2: velocímetro animado ── */}
            {(moto.velocidadMax != null || moto.potenciaCv != null) && (
              <div className="mt-6 flex flex-wrap items-start justify-around gap-6">
                {moto.velocidadMax != null ? (
                  <Speedometer value={moto.velocidadMax} max={160} label="Velocidad máxima" />
                ) : moto.potenciaCv != null ? (
                  <Speedometer value={moto.potenciaCv} max={120} label="Potencia (escala CV)" unit="CV" />
                ) : null}
              </div>
            )}
            {specbars.length > 0 && (
              <div className="mt-6 space-y-4">
                {specbars.map((s) => (
                  <SpecBar
                    key={s.label}
                    label={s.label}
                    value={s.value}
                    max={s.max}
                    unit={s.unit}
                  />
                ))}
              </div>
            )}
          </section>
          </Suspense>
        )}

        {moto.galeria.length > 0 && (
          <Suspense fallback={null}>
          <section className="mt-8" aria-label="Galería de fotos oficiales">
            <NightGallery label="Galería">
            <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {moto.galeria.map((f) => (
                <figure
                  key={f.src}
                  className="rtm-card w-72 shrink-0 snap-center overflow-hidden rounded-2xl sm:w-auto"
                >
                  <img
                    src={f.src}
                    alt={f.alt}
                    width={f.ancho}
                    height={f.alto}
                    loading="lazy"
                    className="rtm-card-zoom aspect-[3/2] w-full object-contain bg-white"
                    onError={(e) => {
                      const fig = e.currentTarget.closest("figure");
                      if (fig) (fig as HTMLElement).style.display = "none";
                    }}
                  />
                  <CreditoFoto src={f.src} className="px-2 pb-1" />
                </figure>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Fotos oficiales de {moto.marca} (prensa del fabricante).
            </p>
                      </NightGallery>
</section>
          </Suspense>
        )}

        <section
          ref={spotRef}
          className="rtm-spotlight rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
          aria-label="Ficha técnica"
        >
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <Gauge className="h-5 w-5 text-red-600" /> Ficha técnica
          </h2>
          <table className="mt-3 w-full text-sm">
            <tbody>
              {FILAS.map((f) => {
                const esAprox = moto.aprox.includes(f.campo);
                return (
                  <tr key={f.label} className="border-t border-gray-200/70">
                    <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                      {f.label}
                    </th>
                    <td className="py-2.5 text-right font-semibold text-gray-900">
                      <span className="inline-flex items-center gap-1">
                        {esAprox && <span title="Cifra aproximada">≈&nbsp;</span>}
                        {f.get(moto)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-gray-500">
            <strong>≈</strong> = cifra aproximada (estimación cuando no hay dato oficial publicado).
          </p>
        </section>

        <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
          <h2 className="text-xl font-extrabold text-gray-900">Precio y versiones</h2>
          <p className="mt-3 text-gray-700">
            {moto.precioDesde == null ? (
              <>La {nombre} aún no tiene precio confirmado para España.</>
            ) : (
              <>
                La {nombre} ({moto.version}) parte de{" "}
                <strong className="text-gray-900">{fmtPrecio(moto.precioDesde)}</strong>.
              </>
            )}{" "}
            El detalle de versiones y opciones está en nuestra comparativa:
          </p>
          {(() => {
            const g = garantiaDeMarca(moto.marca, "motos");
            return g && g.anios != null ? (
              <p className="mt-3 text-sm text-gray-500">
                🛡️ Garantía oficial {moto.marca}: <strong className="text-gray-800">{g.anios} años{g.km ? ` / ${g.km.toLocaleString("es-ES")} km` : ""}</strong>
                {g.nota ? <span className="text-gray-400"> ({g.nota.split(".")[0]})</span> : null}
              </p>
            ) : null;
          })()}
          {BLOG_SLUGS.has(analisisMoto) ? (
            <Link
              to={`/blog/${analisisMoto}/`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              <BookOpen className="h-4 w-4" /> Ver la comparativa completa
            </Link>
          ) : null}
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-2" aria-label="Puntos fuertes y débiles">
          <FlipCard
            className="rtm-card"
            minHeight="240px"
            front={
              <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <span className="text-4xl" aria-hidden="true">✅</span>
                <p className="text-lg font-extrabold text-emerald-700">Pros</p>
                <p className="text-sm text-gray-600">{moto.pros[0]}</p>
                <p className="text-xs font-semibold text-gray-400">
                  Toca para voltear ⟳
                </p>
              </div>
            }
            back={
              <div className="h-full min-h-[240px] overflow-y-auto rounded-3xl border border-emerald-200 bg-emerald-50 p-4 sm:p-6">
                <h2 className="flex items-center gap-1.5 text-lg font-extrabold text-emerald-700">
                  <Check className="h-5 w-5" /> Puntos fuertes
                </h2>
                <ul className="mt-3 space-y-2">
                  {moto.pros.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <FlipCard
            className="rtm-card"
            minHeight="240px"
            front={
              <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-3xl border border-red-200 bg-red-50 p-6 text-center">
                <span className="text-4xl" aria-hidden="true">❌</span>
                <p className="text-lg font-extrabold text-red-600">Contras</p>
                <p className="text-sm text-gray-600">{moto.contras[0]}</p>
                <p className="text-xs font-semibold text-gray-400">
                  Toca para voltear ⟳
                </p>
              </div>
            }
            back={
              <div className="h-full min-h-[240px] overflow-y-auto rounded-3xl border border-red-200 bg-red-50 p-4 sm:p-6">
                <h2 className="flex items-center gap-1.5 text-lg font-extrabold text-red-600">
                  <X className="h-5 w-5" /> Puntos débiles
                </h2>
                <ul className="mt-3 space-y-2">
                  {moto.contras.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <Minus className="mt-1 h-3.5 w-3.5 shrink-0 text-red-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </section>

        {moto.curiosidades.length > 0 && (
          <section className="rtm-card mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-4 sm:p-6">
            <h2 className="text-xl font-extrabold text-gray-900">¿Sabías que…?</h2>
            <ul className="mt-3 space-y-2">
              {moto.curiosidades.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="font-bold text-amber-600">·</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {moto.videoId && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Play className="h-5 w-5 text-red-600" /> Mírala en vídeo
            </h2>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${moto.videoId}`}
                title={`Vídeo de la ${nombre}`}
                className="aspect-video w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Vídeo:{" "}
              <a
                href={`https://www.youtube.com/watch?v=${moto.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {moto.videoCanal ?? "YouTube"}
              </a>{" "}
              en YouTube
            </p>
          </section>
        )}

        {moto.mantenimientoDIY && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={`Mantenimiento en casa de la ${nombre}`}>
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Wrench className="h-5 w-5 text-red-600" /> Mantenimiento en casa
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Guías paso a paso para el mantenimiento básico de tu {nombre}, sin pasar por el taller.
            </p>
            {moto.mantenimientoDIY.intervaloMantenimiento && (
              <p className="mt-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs font-semibold text-red-800">
                🗓️ Intervalo oficial: {moto.mantenimientoDIY.intervaloMantenimiento}
              </p>
            )}
            {moto.mantenimientoDIY.aceiteTipo && (
              <p className="mt-2 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-xs text-gray-700">
                🛢️ Aceite recomendado: <strong>{moto.mantenimientoDIY.aceiteTipo}</strong>
              </p>
            )}

            <div className="mt-4 space-y-4">
              {moto.mantenimientoDIY.resetServicioTitulo && moto.mantenimientoDIY.resetServicioPasos && moto.mantenimientoDIY.resetServicioPasos.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">{moto.mantenimientoDIY.resetServicioTitulo}</h3>
                  <ol className="mt-2 space-y-1.5">
                    {moto.mantenimientoDIY.resetServicioPasos.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-[11px] font-black text-white">{i + 1}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {moto.mantenimientoDIY.filtroAirePasos && moto.mantenimientoDIY.filtroAirePasos.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">🌬️ Cambiar el filtro de aire</h3>
                  <ol className="mt-2 space-y-1.5">
                    {moto.mantenimientoDIY.filtroAirePasos.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-black text-white">{i + 1}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {moto.mantenimientoDIY.cadenaPasos && moto.mantenimientoDIY.cadenaPasos.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">⛓️ Tensar y engrasar la cadena</h3>
                  <ol className="mt-2 space-y-1.5">
                    {moto.mantenimientoDIY.cadenaPasos.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-black text-white">{i + 1}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {moto.mantenimientoDIY.trucos && moto.mantenimientoDIY.trucos.length > 0 && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">💡 Trucos de cuidado</h3>
                  <ul className="mt-2 space-y-1.5">
                    {moto.mantenimientoDIY.trucos.map((t, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="font-bold text-amber-600">·</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {moto.mantenimientoDIY.videoTutorialUrl && (
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <div className="aspect-video w-full">
                    <iframe
                      src={moto.mantenimientoDIY.videoTutorialUrl.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                      title={moto.mantenimientoDIY.videoTutorialTitulo ?? `Tutorial de mantenimiento de la ${nombre}`}
                      className="h-full w-full"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                  <p className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                    🎥 {moto.mantenimientoDIY.videoTutorialTitulo ?? "Vídeo tutorial"} — YouTube
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        <Suspense fallback={null}>
          <SeguridadEuroNCAPLayz fichaId={moto.id} nombre={nombre} />
        </Suspense>

        {moto.planMantenimiento && (
          <Suspense fallback={null}>
            <PlanMantenimientoLazy plan={moto.planMantenimiento} nombre={nombre} />
          </Suspense>
        )}

        <Suspense fallback={null}>
          <HistoriaModeloLazy fichaId={moto.id} nombre={nombre} />
        </Suspense>

        <section className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            to={`/comparador-motos?a=${moto.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            <ArrowLeftRight className="h-4 w-4" /> Comparar con otra moto
          </Link>
          <Link
            to="/comparador-coches/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
          >
            <Bike className="h-4 w-4" /> Comparador de coches
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold text-gray-900">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <StickyCta href={`/comparador-motos?a=${moto.id}`} label="Comparar este modelo" />

        {/* 12/10/2026: opiniones de propietarios con fotos */}
        <Suspense fallback={null}>
          <ResenasVehiculoLazy
            tipo="motos"
            slug={moto.id}
            nombre={nombre}
            onDatosSchema={setReviewsExtra}
          />
        </Suspense>
      </main>
      <SharedFooter />
    </div>
  );
}

export default function MotosFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // Carga perezosa (05/10/2026): solo el módulo de la marca de este modelo.
  const [moto, setMoto] = useState<MotoComparador | null | undefined>(undefined);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      const m = await loadArrayItem<MotoComparador>("moto", slug, (x) => x.id === slug);
      if (!alive) return;
      setMoto(m ?? null);
      if (m) {
        await Promise.all([
          loadRecordEntry("historia", slug),
          loadRecordEntry("euroncap", slug),
        ]);
      }
      if (alive) document.body.dataset.pageReady = "1";
    })();
    return () => {
      alive = false;
      delete document.body.dataset.pageReady;
    };
  }, [slug]);

  if (moto === undefined) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" aria-label="Cargando ficha" />
      </div>
    );
  }

  if (!moto) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-xl px-4 pb-16 pt-16 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Modelo no encontrado</h1>
          <p className="mt-3 text-gray-600">
            No hay ninguna moto con esa dirección en la ficha técnica. Prueba con el comparador.
          </p>
          <Link
            to="/comparador-motos/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Ir al comparador de motos
          </Link>
        </main>
        <SharedFooter />
      </div>
    );
  }

  return <Ficha moto={moto} />;
}
