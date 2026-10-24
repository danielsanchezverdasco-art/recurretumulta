import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreditoFoto from "@/components/CreditoFoto.tsx";
import AnalisisEditorial from "@/components/AnalisisEditorial.tsx";
import { ANALISIS_MOTOS } from "@/lib/analisis-slugs.generated";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import {
  ArrowLeftRight,
  BatteryCharging,
  Bike,
  BookOpen,
  Gauge,
  IdCard,
  Play,
  Weight,
  Wrench,
  Zap,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { useFichaFechas } from "@/hooks/use-ficha-fechas.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { Marker, useSpotlight } from "@/components/motion.tsx";
// 18/10/2026 (rediseño fichas): misma cabecera, pestañas, barra y rivales que coches.
import GaleriaFicha, { type FotoFicha } from "@/components/ficha/GaleriaFicha.tsx";
import { FranjaPrecio, PanelLateral, cambioDesdeHistorial, type DatoClave } from "@/components/ficha/CabeceraPrecio.tsx";
import PestanasFicha from "@/components/ficha/PestanasFicha.tsx";
import BarraInferiorFicha from "@/components/ficha/BarraInferiorFicha.tsx";
import ProsContras from "@/components/ficha/ProsContras.tsx";
import VideoYoutube from "@/components/ficha/VideoYoutube.tsx";
import TablaVersiones from "@/components/ficha/TablaVersiones.tsx";
import RivalesCarrusel from "@/components/ficha/RivalesCarrusel.tsx";
import FraseRivales from "@/components/ficha/FraseRivales.tsx";
import DescargarFichaPDF from "@/components/DescargarFichaPDF.tsx";
import BotonCazachollos from "@/components/BotonCazachollos.tsx";
import { fmtEur, fmtMiles } from "@/lib/formato.ts";
import OtrasFichasMarca from "@/components/OtrasFichasMarca.tsx";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import { NotaCosa, MarcaAguaCosa } from "@/components/Cosa.tsx";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import BannerJuegoMonos from "@/components/caza-monos/BannerJuegoMonos";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import { garantiaDeMarca } from "@/lib/garantias-marcas.ts";
import { tituloFichaMoto } from "@/lib/seo-titulo-ficha.ts";
import type { MotoComparador } from "@/lib/comparador-motos-data.ts";
import { propio } from "@/lib/textos-propios.ts";
import type { ResenaSchemaExtra } from "@/components/ResenasVehiculo.tsx";

import { loadArrayItem, loadModuleArray, loadRecordEntry } from "@/lib/data-loader-utils.ts";
import { cargarFichaExtra, type FichaExtra } from "@/lib/ficha-extra.ts";
import RespuestaRapida from "@/components/geo/RespuestaRapida.tsx";
import { datosGeoMoto, frasesGeo, metaGeo } from "@/lib/geo-ficha.ts";
import { useHistorialPrecios } from "@/lib/historial-precios-cargar.ts";
import { anioModelo, productoFicha } from "@/lib/schema-ficha.ts";

// 07/10/2026 (fluidez): animados below-the-fold en lazy — se cargan al hacer scroll.
// 17/10/2026: historial de precios (below-the-fold, lazy).
const HistorialPreciosLazy = lazy(() => import("@/components/HistorialPrecios.tsx"));
const Donut = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Donut })));
const BatteryFill = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.BatteryFill })));
const NightGallery = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.NightGallery })));
const SpecBar = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.SpecBar })));
const Speedometer = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Speedometer })));

// 07/10/2026 (rendimiento): below-the-fold en lazy para reducir el chunk inicial.
const PlanMantenimientoLazy = lazy(() => import("@/components/PlanMantenimiento.tsx"));
const HistoriaModeloLazy = lazy(() => import("@/components/HistoriaModelo.tsx"));
// 12/10/2026: opiniones de propietarios con fotos (below-the-fold en lazy).
const ResenasVehiculoLazy = lazy(() => import("@/components/ResenasVehiculo.tsx"));
// 18/10/2026: audiencia (puntúa, ¿lo comprarías?, duelo, visitas). Solo cliente, tras la carga.
const AudienciaFichaLazy = lazy(() => import("@/components/audiencia/AudienciaFicha.tsx"));
import { Diferido, useVisitaFicha } from "@/components/audiencia/Diferido.tsx";

const fmtPrecio = (v: number | null) => fmtEur(v);
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtS = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " s";
const fmtKmh = (v: number | null) => (v == null ? "—" : v + " km/h");
const fmtKwh = (v: number | null) => (v == null ? "—" : v + " kWh");
const fmtKwCv = (m: MotoComparador) => {
  if (m.potenciaKw == null && m.potenciaCv == null) return "—";
  const kw = m.potenciaKw != null ? `${String(m.potenciaKw).replace(".", ",")} kW` : "";
  const cv = m.potenciaCv != null ? `${String(m.potenciaCv).replace(".", ",")} CV` : "";
  return [kw, cv].filter(Boolean).join(" · ");
};
const fmtKg = (v: number | null) =>
  v == null ? "—" : fmtMiles(v) + " kg";
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
  { campo: "cilindradaCc", label: "Cilindrada", get: (m) => (m.cilindradaCc == null || esMotoElectrica(m) ? "—" : m.cilindradaCc + " cc") },
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

function Ficha({ moto, extra, hermanas = [] }: { moto: MotoComparador; extra: FichaExtra; hermanas?: MotoComparador[] }) {
  const nombre = `${moto.marca} ${moto.modelo}`.replace(/:+$/, "").trim();
  const tp = moto.textosPropios;
  // GEO 17/10/2026: respuesta rápida (ficha + historial de precios, nada inventado).
  const historial = useHistorialPrecios(moto.id);
  useVisitaFicha("motos", moto.id);
  const geo = frasesGeo(datosGeoMoto({ ...moto, electrica: esMotoElectrica(moto) }, nombre, historial));
  // 13/10/2026: análisis del blog (analisisSlug o post con el mismo id); botón solo si el post existe.
  const analisisMoto = ANALISIS_MOTOS[moto.id] ?? moto.analisisSlug ?? moto.id;
  // 12/10/2026: nodos schema.org de reseñas (se fusionan en cliente cuando
  // Convex responde; en el prerender no hay datos → solo el schema base).
  const [reviewsExtra, setReviewsExtra] = useState<ResenaSchemaExtra | null>(null);

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

  // 17/10/2026: moto eléctrica (etiqueta Cero, batería o autonomía). Las de combustión no
  // muestran migas ni entradilla de «motos eléctricas» (autonomía/batería).
  const esElectrica = esMotoElectrica(moto);
  const conCilindrada = !esElectrica && moto.cilindradaCc != null;
  const esElectricaFaq =
    etiquetaBaseMoto(moto.etiquetaDgt) === "Cero" || moto.autonomiaKm != null || moto.carga != null;
  // 18/10/2026 (rediseño): galería superior, datos clave y precio.
  const dimDe = (src: string) => dims[src.split("/").pop() ?? ""];
  const fotosTop: FotoFicha[] = [
    ...(moto.imagen ? [{ src: moto.imagen, alt: `Foto oficial de la ${nombre}`, ancho: dimDe(moto.imagen)?.[0], alto: dimDe(moto.imagen)?.[1] }] : []),
    ...moto.galeria.map((f) => ({ src: f.src, alt: f.alt, ancho: f.ancho, alto: f.alto })),
  ].filter((f, i, a) => a.findIndex((g) => g.src === f.src) === i);
  const datosClave: DatoClave[] = [
    (moto.potenciaCv != null || moto.potenciaKw != null) && { icono: <Zap className="h-5 w-5" />, valor: moto.potenciaCv != null ? `${String(moto.potenciaCv).replace(".", ",")} CV` : `${String(moto.potenciaKw).replace(".", ",")} kW`, label: "Potencia" },
    esMotoElectrica(moto)
      ? moto.autonomiaKm != null && { icono: <BatteryCharging className="h-5 w-5" />, valor: `${moto.autonomiaKm} km`, label: moto.autonomiaCiclo ? `Autonomía ${moto.autonomiaCiclo}` : "Autonomía" }
      : moto.cilindradaCc != null && { icono: <Gauge className="h-5 w-5" />, valor: `${fmtMiles(moto.cilindradaCc)} cc`, label: "Cilindrada" },
    moto.pesoKg != null && { icono: <Weight className="h-5 w-5" />, valor: fmtKg(moto.pesoKg), label: "Peso" },
    moto.carnet && { icono: <IdCard className="h-5 w-5" />, valor: `Carnet ${moto.carnet.split(" ")[0]}`, label: "Permiso" },
    moto.velocidadMax != null && { icono: <Gauge className="h-5 w-5" />, valor: `${moto.velocidadMax} km/h`, label: "Velocidad máx." },
  ].filter(Boolean) as DatoClave[];
  const cambio = cambioDesdeHistorial(historial);
  const precioAprox = moto.aprox.includes("precioDesde");
  const compararHref = `/comparador-motos/?a=${moto.id}`;

  const FAQS = [
    {
      q: `¿Cuánto cuesta la ${nombre}?`,
      a: tp?.faqPrecio ??
        (moto.precioDesde == null
          ? `La ${nombre} aún no tiene precio confirmado para España.`
          : geo.faqPrecio ?? `La ${nombre} parte de ${fmtPrecio(moto.precioDesde)}.`),
    },
    {
      q: `¿Qué carnet necesito para la ${nombre}?`,
      a: tp?.faqCarnet ?? `Carnet ${moto.carnet}${/A1/.test(moto.carnet) ? " (o B con más de 3 años)" : ""}.`,
    },
    // 17/10/2026: autonomía/carga solo si es eléctrica o hay dato; la etiqueta según etiquetaDgt
    // (antes decía «100 % eléctrica, etiqueta Cero» también en motos de combustión).
    ...(esElectricaFaq
      ? [
          // (24/10 unicidad) sin dato publicado no hay FAQ de autonomía
          ...(moto.autonomiaKm == null
            ? []
            : [
                {
              q: `¿Cuál es la autonomía de la ${nombre}?`,
                  a: `Homologa ${fmtAutonomia(moto)}.`,
                },
              ]),
          ...(moto.carga == null ? [] : [{ q: `¿Cómo se carga la ${nombre}?`, a: moto.carga }]),
        ]
      : []),
    {
      q: `¿La ${nombre} tiene etiqueta Cero?`,
      a: propio(tp, "faqZbe", respuestaEtiquetaMoto(nombre, moto.etiquetaDgt)),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Motorcycle",
        ...productoFicha({
          nombre,
          marca: moto.marca,
          modelo: moto.modelo,
          slug: moto.id,
          image: moto.imagen ? `https://recurretumulta.online${moto.imagen}` : undefined,
          url: `https://recurretumulta.online/motos/${moto.id}/`,
          descripcion: geo.frases.join(" "),
          precio: moto.precioDesde,
          precioAprox: moto.aprox.includes("precioDesde"),
          historial,
        }),
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
            // 20/10/2026 (fix plantilla): la miga de las fichas es el hub de Fichas Técnicas, no el comparador.
            "@type": "ListItem",
            position: 2,
            name: "Fichas técnicas",
            item: "https://recurretumulta.online/fichas-tecnicas/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: nombre,
            item: `https://recurretumulta.online/motos/${moto.id}/`,
          },
        ],
      },
    ],
  };

  // E-E-A-T 17/10/2026: fechas reales de la ficha (JSON-LD + bloque de autoría).
  const fechas = useFichaFechas(moto.id);
  useSeo({
    datePublished: fechas.publicado,
    dateModified: fechas.actualizado,
    // SEO 07/10/2026 (metodología CTR, Daniel): fórmula ganadora
    // [Keyword] + [número] + [beneficio] + [(año)]. Siempre ≤60 car.
    title: tituloFichaMoto(nombre, moto),
    // 17/10/2026: meta con datos reales (solo se ve si titulos.csv no trae meta para la URL).
    description: metaGeo(datosGeoMoto({ ...moto, electrica: esMotoElectrica(moto) }, nombre, null), "Ficha técnica, carnet, pros y contras.", anioModelo(moto.id)),
    canonical: `/motos/${moto.id}/`,
    ...(moto.imagen ? { image: `https://recurretumulta.online${moto.imagen}` } : {}),
    type: "article",
    keywords: [
      nombre,
      `${nombre} ficha técnica`,
      `${nombre} precio`,
      esElectrica ? `${nombre} autonomía` : `${nombre} carnet`,
      `${nombre} opiniones`,
      esElectrica ? `moto eléctrica ${nombre}` : `moto ${nombre}`,
    ],
    schema: reviewsExtra
      ? {
          ...jsonLd,
          "@graph": [
            ...(jsonLd["@graph"] as Record<string, unknown>[]).map((nodo, i) =>
              // 17/10/2026: reseñas reales aprobadas DENTRO del producto
              // (antes iban sueltas en @graph, sin itemReviewed).
              i === 0 && (reviewsExtra.aggregateRating || reviewsExtra.reviews.length)
                ? {
                    ...nodo,
                    ...(reviewsExtra.aggregateRating ? { aggregateRating: reviewsExtra.aggregateRating } : {}),
                    ...(reviewsExtra.reviews.length ? { review: reviewsExtra.reviews } : {}),
                  }
                : nodo,
            ),
          ],
        }
      : jsonLd,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main id="ficha-pdf" className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>{" "}
          ·{" "}
          <Link to="/fichas-tecnicas/" className="hover:underline">
            Fichas técnicas
          </Link>{" "}
          · <span className="text-gray-700">{nombre}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-8">
        <article className="min-w-0">
        <header id="ficha-cabecera" className="mt-4">
          <GaleriaFicha
            fotos={fotosTop}
            nombre={nombre}
            ajuste="contain"
            vacio={
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br from-gray-100 to-emerald-50 text-gray-500">
                <Bike className="h-12 w-12" />
                <p className="px-4 text-center text-sm font-medium">
                  Foto oficial pendiente de verificación
                </p>
              </div>
            }
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
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
          <RespuestaRapida frases={geo.frases} />
          <FranjaPrecio
            precio={moto.precioDesde}
            aprox={precioAprox}
            cambio={cambio}
            etiqueta={moto.etiquetaDgt}
            datos={datosClave}
          />
          <p className="mt-3 text-sm text-gray-600">
            Fuente:{" "}
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

        <PestanasFicha
          secciones={[
            { id: "resumen", label: "Resumen" },
            { id: "ficha", label: "Ficha" },
            { id: "precio", label: "Precio" },
            { id: "fotos", label: "Fotos" },
            { id: "pros-contras", label: "Pros y contras" },
            { id: "opiniones", label: "Opiniones" },
            { id: "rivales", label: "Rivales" },
            { id: "faq", label: "FAQ" },
          ]}
        />

        <div className="mt-4 flex justify-end">
          <CompartirBotones
            titulo={`Ficha técnica: ${nombre}`}
            texto={`Ficha técnica de la ${nombre}: precio, autonomía, potencia y carnet necesario`}
          />
        </div>

        {/* ── La nota de Cosa (fórmula determinista sobre datos reales) ── */}
        <NotaCosa
          nombre={nombre}
          justificacion={tp?.notaCosa}
          entrada={{
            precioEur: moto.precioDesde,
            potenciaCv: moto.potenciaCv ?? (moto.potenciaKw != null ? moto.potenciaKw * 1.36 : null),
            etiquetaDgt: moto.etiquetaDgt,
            estrellasEuroNCAP: null,
            noAplicaEuroNCAP: true, // Euro NCAP no prueba motos
            precioNoOficialEspana: moto.aprox?.includes("precioDesde") ?? false,
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
            id="resumen"
            className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label="Datos destacados"
          >
            <h2 className="text-xl font-extrabold text-gray-900">En cifras</h2>
            <div className="mt-4 flex flex-wrap items-start justify-around gap-6">
              {donuts.filter((d) => d.value > 0).map((d) => (
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
            {specbars.some((sb) => sb.value > 0) && (
              <div className="mt-6 space-y-4">
                {specbars.filter((sb) => sb.value > 0).map((s) => (
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

        {/* ── Análisis editorial único por ficha (estándar AdSense 2026-10-19) ── */}
        <AnalisisEditorial slug={moto.id} />

        {moto.galeria.length > 0 && (
          <Suspense fallback={null}>
          <section id="fotos" className="mt-8 scroll-mt-32" aria-label="Galería de fotos oficiales">
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
              {tp?.fotos ?? <>Fotos oficiales de {moto.marca} (prensa del fabricante).</>}
            </p>
                      </NightGallery>
</section>
          </Suspense>
        )}

        <section
          ref={spotRef}
          id="ficha"
          className="rtm-spotlight rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
          aria-label="Ficha técnica"
        >
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <Gauge className="h-5 w-5 text-red-600" /> Ficha técnica
          </h2>
          <table className="mt-3 w-full text-sm">
            <tbody>
              {FILAS.filter((f) => { const _v = f.campo === "etiquetaDgt" ? ((moto as any).etiquetaDgt || "—") : f.get(moto); return _v !== "—" && _v !== "Sin datos" && _v !== "No publicada" && !/^—/.test(String(_v)); }).map((f) => {
                const esAprox = moto.aprox.includes(f.campo);
                return (
                  <tr key={f.label} className="border-t border-gray-200/70">
                    <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                      {f.label}
                    </th>
                    <td className="py-2.5 text-right font-semibold text-gray-900">
                      <span className="inline-flex items-center gap-1">
                        {esAprox && <span title="Dato no oficial, en revisión">≈&nbsp;</span>}
                        {f.get(moto)}
                      {esAprox && <span className="ml-1 text-[10px] font-medium text-amber-700 whitespace-nowrap">dato no oficial · en revisión</span>}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-gray-500">
            <strong>≈</strong> estimación
          </p>
        </section>

        <section id="precio" className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-extrabold text-gray-900">Precio y versiones</h2>
            {/* 18/10/2026: alerta de precio y PDF, como en las fichas de coches */}
            <div className="flex flex-wrap items-center gap-2">
              <BotonCazachollos cocheId={moto.id} nombre={nombre} precioActual={moto.precioDesde ?? null} />
              <DescargarFichaPDF nombre={nombre} />
            </div>
          </div>
          {tp?.precio ? (
            <p className="mt-3 text-gray-700">{tp.precio}</p>
          ) : (
          <p className="mt-3 text-gray-700">
            {moto.precioDesde == null ? (
              <>{`La ${nombre} aún no tiene precio confirmado para España.`}</>
            ) : (
              <>
                {`La ${nombre} (${moto.version}) parte de `}
                <strong className="text-gray-900">{fmtPrecio(moto.precioDesde)}</strong>.
              </>
            )}{" "}
          </p>
          )}
          <TablaVersiones versiones={moto.versiones} nombre={nombre} />
          {(() => {
            const g = garantiaDeMarca(moto.marca, "motos");
            return g && g.anios != null ? (
              <p className="mt-3 text-sm text-gray-500">
                {`🛡️ Garantía oficial ${moto.marca}: `}<strong className="text-gray-800">{`${g.anios} años${g.km ? ` / ${fmtMiles(g.km)} km` : ""}`}</strong>
                {tp?.garantiaNota ? <span className="text-gray-400"> ({tp.garantiaNota})</span> : g.nota ? <span className="text-gray-400"> ({g.nota.split(".")[0]})</span> : null}
              </p>
            ) : null;
          })()}
          <Suspense fallback={null}>
            <HistorialPreciosLazy slug={moto.id} nombre={nombre} />
          </Suspense>
          {extra.b === 1 ? (
            <Link
              to={hrefDesdeBlog(analisisMoto)}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              <BookOpen className="h-4 w-4" /> Ver la comparativa completa
            </Link>
          ) : null}
        </section>

        <Diferido>
        <Suspense fallback={null}>
          <AudienciaFichaLazy tipo="motos" slug={moto.id} nombre={nombre} img={moto.imagen} />
        </Suspense>
        </Diferido>

        <ProsContras pros={moto.pros} contras={moto.contras} />

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
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Vídeo del modelo">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Play className="h-5 w-5 text-red-600" /> Mírala en vídeo
            </h2>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <VideoYoutube id={moto.videoId} titulo={`Vídeo de la ${nombre}`} />
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
            {tp?.mantenimientoIntro && <p className="mt-1 text-sm text-gray-600">{tp.mantenimientoIntro}</p>}
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
                  <VideoYoutube id={moto.mantenimientoDIY.videoTutorialUrl} titulo={moto.mantenimientoDIY.videoTutorialTitulo ?? `Tutorial de mantenimiento de la ${nombre}`} />
                  <p className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                    🎥 {moto.mantenimientoDIY.videoTutorialTitulo ?? "Vídeo tutorial"} — YouTube
                  </p>
                </div>
              )}
            </div>
          </section>
        )}


        {moto.planMantenimiento && (
          <Suspense fallback={null}>
            <PlanMantenimientoLazy plan={moto.planMantenimiento} nombre={nombre} />
          </Suspense>
        )}

        <Suspense fallback={null}>
          <HistoriaModeloLazy fichaId={moto.id} nombre={nombre} />
        </Suspense>

        <RivalesCarrusel tipo="motos" id={moto.id} nombre={nombre} rivales={extra.r} intro={tp?.rivalesIntro} />
        <FraseRivales id={moto.id} nombre={nombre} precio={moto.precioDesde} rivales={extra.r} texto={tp?.fraseRivales} />

        <section className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Comparar modelo">
          <Link
            to={compararHref}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            <ArrowLeftRight className="h-4 w-4" /> Comparar
          </Link>
          {/* 18/10/2026: antes enlazaba al comparador de COCHES desde una ficha de moto. */}
          <Link
            to="/comparador-motos/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
          >
            <Bike className="h-4 w-4" /> {esElectrica ? "Comparador de motos eléctricas" : "Comparador de motos"}
          </Link>
        </section>

        
        <section id="faq" className="mt-10 scroll-mt-32" aria-label="Preguntas frecuentes">
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
        {moto.etiquetaDgt ? (
          <p className="mt-4 text-sm text-gray-600">
            ZBE y etiquetas:{" "}
            <Link to="/guias/zbe-etiquetas/" className="font-semibold text-red-600 hover:underline">
              Guía ZBE y etiquetas DGT →
            </Link>
          </p>
        ) : null}

        {/* 12/10/2026: opiniones de propietarios con fotos */}
        <div id="opiniones" className="scroll-mt-32">
        <Suspense fallback={null}>
          <ResenasVehiculoLazy
            tipo="motos"
            slug={moto.id}
            nombre={nombre}
            onDatosSchema={setReviewsExtra}
          />
        </Suspense>
        </div>
        {/* 18/10/2026: enlazado interno a las otras versiones y fichas de la marca */}
        <OtrasFichasMarca tipo="motos" actual={moto} todas={hermanas} introVersiones={tp?.otrasVersiones} />
        </article>
        <PanelLateral
          nombre={nombre}
          precio={moto.precioDesde}
          aprox={precioAprox}
          cambio={cambio}
          compararHref={compararHref}
          alerta={<BotonCazachollos cocheId={moto.id} nombre={nombre} precioActual={moto.precioDesde ?? null} />}
          pdf={<DescargarFichaPDF nombre={nombre} />}
        />
        </div>
        <BarraInferiorFicha compararHref={compararHref} precio={moto.precioDesde} aprox={precioAprox} />
      </main>
      <SharedFooter
        editorial={{
          ambito: "motos",
          tipo: "ficha",
          modelo: nombre,
          publicado: fechas.publicado,
          actualizado: fechas.actualizado,
          fuentePrincipal: moto.fuenteUrl ? { nombre: moto.fuenteNombre || "Fuente de los datos", url: moto.fuenteUrl } : null,
        }}
      />
    </div>
  );
}

// 17/10/2026: respuesta de la FAQ de etiqueta según la etiqueta DGT real de la ficha.
function etiquetaBaseMoto(e: string | null | undefined): string {
  return String(e || "").trim().split(/\s+/)[0] || "";
}
function esMotoElectrica(m: MotoComparador): boolean {
  return etiquetaBaseMoto(m.etiquetaDgt) === "Cero" || m.bateriaKwh != null || m.autonomiaKm != null;
}
function respuestaEtiquetaMoto(nombre: string, e: string | null | undefined): string {
  // 24/10 (unicidad): solo el dato; sin dato, "consulta con la matrícula" (sin coletilla ZBE)
  const et = etiquetaBaseMoto(e);
  if (et) return `La ${nombre} tiene etiqueta DGT «${et}».`;
  return `Etiqueta DGT de la ${nombre}: sin confirmar.`;
}

export default function MotosFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // Carga perezosa (05/10/2026): solo el módulo de la marca de este modelo.
  const [extra, setExtra] = useState<FichaExtra>({});
  const [moto, setMoto] = useState<MotoComparador | null | undefined>(undefined);
  const [hermanas, setHermanas] = useState<MotoComparador[]>([]);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      // 18/10/2026: rivales + ¿existe el análisis? (trozo pequeño) en paralelo con la ficha.
      const [m, ex] = await Promise.all([loadArrayItem<MotoComparador>("moto", slug, (x) => x.id === slug), cargarFichaExtra("motos", slug)]);
      // Mismo módulo (fichero de la marca), ya en caché: sin coste extra.
      const herm = await loadModuleArray<MotoComparador>("moto", slug);
      if (alive) setHermanas(herm);
      if (!alive) return;
      setExtra(ex);
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

  return <Ficha moto={moto} extra={extra} hermanas={hermanas} />;
}
