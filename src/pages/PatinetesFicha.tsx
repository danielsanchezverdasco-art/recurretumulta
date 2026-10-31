import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreditoFoto from "@/components/CreditoFoto.tsx";
import AnalisisEditorial from "@/components/AnalisisEditorial.tsx";
import { ANALISIS_PATINETES } from "@/lib/analisis-slugs.generated";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import {
  ArrowLeftRight,
  BatteryCharging,
  BookOpen,
  Gauge,
  Play,
  ShieldCheck,
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
import DatosContrastados from "@/components/ficha/DatosContrastados.tsx";
import RivalesCarrusel from "@/components/ficha/RivalesCarrusel.tsx";
import FraseRivales from "@/components/ficha/FraseRivales.tsx";
import DescargarFichaPDF from "@/components/DescargarFichaPDF.tsx";
import BotonCazachollos from "@/components/BotonCazachollos.tsx";
import { fmtEur, fmtMiles } from "@/lib/formato.ts";
import OtrasFichasMarca from "@/components/OtrasFichasMarca.tsx";
// 07/10/2026 (fluidez): animados below-the-fold en lazy — se cargan al hacer scroll.
const Donut = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Donut })));
const BatteryFill = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.BatteryFill })));
const NightGallery = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.NightGallery })));
const SpecBar = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.SpecBar })));
const Speedometer = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Speedometer })));
import CompartirBotones from "@/components/CompartirBotones.tsx";
import { NotaCosa, MarcaAguaCosa } from "@/components/Cosa.tsx";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import BannerJuegoMonos from "@/components/caza-monos/BannerJuegoMonos";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import { garantiaDeMarca } from "@/lib/garantias-marcas.ts";
import { tituloFichaPatinete } from "@/lib/seo-titulo-ficha.ts";
import type { PatineteComparador } from "@/lib/comparador-patinetes-data.ts";
import type { ResenaSchemaExtra } from "@/components/ResenasVehiculo.tsx";

import { loadArrayItem, loadModuleArray, loadRecordEntry } from "@/lib/data-loader-utils.ts";
import { cargarFichaExtra, type FichaExtra } from "@/lib/ficha-extra.ts";
import RespuestaRapida from "@/components/geo/RespuestaRapida.tsx";
import { datosGeoPatinete, frasesGeo, metaGeo } from "@/lib/geo-ficha.ts";
import { useHistorialPrecios } from "@/lib/historial-precios-cargar.ts";
import { anioModelo, productoFicha } from "@/lib/schema-ficha.ts";

// 07/10/2026 (rendimiento): below-the-fold en lazy para reducir el chunk inicial.
// 17/10/2026: historial de precios (below-the-fold, lazy).
const HistorialPreciosLazy = lazy(() => import("@/components/HistorialPrecios.tsx"));
// 20/10/2026 (informe Niky p.18): EuroNCAP no ensaya patinetes; la sección
// «Seguridad EuroNCAP» no se pinta en fichas de patinete (el componente se
// queda solo para coches, donde sí hay tests oficiales).
// 12/10/2026: opiniones de propietarios con fotos (below-the-fold en lazy).
const ResenasVehiculoLazy = lazy(() => import("@/components/ResenasVehiculo.tsx"));
// 18/10/2026: audiencia (puntúa, ¿lo comprarías?, duelo, visitas). Solo cliente, tras la carga.
const AudienciaFichaLazy = lazy(() => import("@/components/audiencia/AudienciaFicha.tsx"));
import { Diferido, useVisitaFicha } from "@/components/audiencia/Diferido.tsx";

const fmtPrecio = (v: number | null) => fmtEur(v, "No publicado");
const fmtW = (v: number | null) => (v == null ? "No publicado" : v + " W");
const fmtKm = (v: number | null) => (v == null ? "No publicado" : v + " km");
const fmtKmh = (v: number | null) => (v == null ? "No publicado" : v + " km/h");
const fmtWh = (v: number | null) => (v == null ? "No publicado" : v + " Wh");
const fmtKg = (v: number | null) =>
  v == null ? "No publicado" : fmtMiles(v) + " kg";
const fmtH = (v: number | null) =>
  v == null
    ? "No publicado"
    : String(v).replace(".", ",") + (v === 1 ? " hora" : " horas");

const fmtCertificado = (v: boolean | null) =>
  v === true ? "Sí, verificado" : v === false ? "No" : "No verificado";

type Fila = { campo: string; label: string; get: (p: PatineteComparador) => string };

const FILAS: Fila[] = [
  { campo: "precioEur", label: "Precio oficial", get: (p) => fmtPrecio(p.precioEur) },
  { campo: "potenciaNominalW", label: "Potencia nominal", get: (p) => fmtW(p.potenciaNominalW) },
  { campo: "potenciaPicoW", label: "Potencia pico", get: (p) => fmtW(p.potenciaPicoW) },
  { campo: "autonomiaKm", label: "Autonomía declarada", get: (p) => fmtKm(p.autonomiaKm) },
  { campo: "autonomiaRealKm", label: "Autonomía real estimada", get: (p) => fmtKm(p.autonomiaRealKm) },
  { campo: "velocidadMaxKmh", label: "Velocidad máxima", get: (p) => fmtKmh(p.velocidadMaxKmh) },
  { campo: "pesoKg", label: "Peso", get: (p) => fmtKg(p.pesoKg) },
  { campo: "cargaMaxKg", label: "Carga máxima", get: (p) => fmtKg(p.cargaMaxKg) },
  { campo: "tiempoCargaH", label: "Tiempo de carga", get: (p) => fmtH(p.tiempoCargaH) },
  { campo: "bateriaWh", label: "Batería", get: (p) => fmtWh(p.bateriaWh) },
  { campo: "frenos", label: "Frenos", get: (p) => p.frenos ?? "No publicado" },
  { campo: "neumaticos", label: "Neumáticos", get: (p) => p.neumaticos ?? "No publicado" },
  { campo: "certificadoDgt", label: "Certificado DGT", get: (p) => fmtCertificado(p.certificadoDgt) },
];

function Ficha({ patinete, extra, hermanas = [] }: { patinete: PatineteComparador; extra: FichaExtra; hermanas?: PatineteComparador[] }) {
  const nombre = `${patinete.marca} ${patinete.modelo}`;
  // GEO 17/10/2026: respuesta rápida (ficha + historial de precios, nada inventado).
  const historial = useHistorialPrecios(patinete.id);
  useVisitaFicha("patinetes", patinete.id);
  const geo = frasesGeo(datosGeoPatinete(patinete, nombre, historial));
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
  const autonomia = patinete.autonomiaRealKm ?? patinete.autonomiaKm;
  if (autonomia != null)
    donuts.push({ value: autonomia, max: 80, label: "km de autonomía" });
  if (patinete.potenciaPicoW != null)
    donuts.push({ value: patinete.potenciaPicoW, max: 2000, label: "W de potencia pico" });
  if (donuts.length < 3 && patinete.bateriaWh != null)
    donuts.push({ value: patinete.bateriaWh, max: 1500, label: "Wh de batería" });

  // Datos técnicos para las SpecBar (solo valores reales).
  const specbars: { label: string; value: number; max: number; unit: string }[] = [];
  if (patinete.potenciaPicoW != null)
    specbars.push({ label: "Potencia pico", value: patinete.potenciaPicoW, max: 2000, unit: " W" });
  if (autonomia != null)
    specbars.push({ label: "Autonomía real estimada", value: autonomia, max: 80, unit: " km" });
  if (patinete.bateriaWh != null)
    specbars.push({ label: "Batería", value: patinete.bateriaWh, max: 1500, unit: " Wh" });
  if (specbars.length < 4 && patinete.tiempoCargaH != null)
    specbars.push({ label: "Tiempo de carga", value: patinete.tiempoCargaH, max: 12, unit: " h" });

  // 18/10/2026 (rediseño): galería superior, datos clave y precio.
  const dimDe = (src: string) => dims[src.split("/").pop() ?? ""];
  const fotosTop: FotoFicha[] = [
    ...(!patinete.fotoPendiente && patinete.foto ? [{ src: patinete.foto, alt: `Foto oficial del ${nombre}`, ancho: dimDe(patinete.foto)?.[0], alto: dimDe(patinete.foto)?.[1] }] : []),
    ...(patinete.galeria ?? []).map((f) => ({ src: f.src, alt: f.alt, ancho: f.ancho, alto: f.alto })),
  ].filter((f, i, a) => a.findIndex((g) => g.src === f.src) === i);
  const datosClave: DatoClave[] = [
    patinete.autonomiaKm != null && { icono: <BatteryCharging className="h-5 w-5" />, valor: `${patinete.autonomiaKm} km`, label: "Autonomía declarada" },
    patinete.potenciaNominalW != null && { icono: <Zap className="h-5 w-5" />, valor: `${fmtMiles(patinete.potenciaNominalW)} W`, label: "Potencia nominal" },
    patinete.pesoKg != null && { icono: <Weight className="h-5 w-5" />, valor: fmtKg(patinete.pesoKg), label: "Peso" },
    patinete.velocidadMaxKmh != null && { icono: <Gauge className="h-5 w-5" />, valor: `${patinete.velocidadMaxKmh} km/h`, label: "Velocidad máx." },
    patinete.certificadoDgt === true && { icono: <ShieldCheck className="h-5 w-5" />, valor: "Certificado", label: "DGT verificado" },
  ].filter(Boolean) as DatoClave[];
  const cambio = cambioDesdeHistorial(historial);
  const precioAprox = patinete.aprox.includes("precioEur");
  const compararHref = `/comparador-patinetes/?a=${patinete.id}`;

  // 26/10 (unicidad): respuestas cortas con el dato de la ficha; la norma completa está en
  // /guias/seguro-vmp/ y /guias/certificado-dgt/ (sin párrafos legales repetidos en 695 fichas).
  function respuestaCertificadoDgt(nombre: string, verificado: boolean): string {
    return verificado
      ? `Sí: el ${nombre} tiene certificado de circulación verificado.`
      : `Del ${nombre} no consta certificado verificado: pídelo al vendedor.`;
  }

  const FAQS = [
    ...(patinete.precioEur == null
      ? []
      : [{ q: `¿Cuánto cuesta el ${nombre}?`, a: geo.faqPrecio ?? `El ${nombre} cuesta ${fmtPrecio(patinete.precioEur)}.` }]),
    ...(patinete.autonomiaRealKm == null
      ? []
      : [
          {
            q: `¿Cuál es la autonomía real del ${nombre}?`,
            a: `Declarada: ${fmtKm(patinete.autonomiaKm)}. Estimada en ciudad: ≈${patinete.autonomiaRealKm} km.`,
          },
        ]),
    {
      q: `¿El ${nombre} tiene certificado de la DGT?`,
      a: respuestaCertificadoDgt(nombre, patinete.certificadoDgt === true),
    },
    {
      q: `¿Necesito seguro para el ${nombre}?`,
      a: `Sí, obligatorio desde 2026 (Ley 5/2025).`,
    },
    ...(patinete.faqExtra ?? []),
  ];

  // ORD-20261027-1035: sin Offer (sin precio real o sin imagen) no se emite el
  // nodo Product: un Product sin offers/review/aggregateRating es el error que
  // marca Search Console. Con Offer, el nodo va completo como antes.
  const producto = productoFicha({
    nombre,
    marca: patinete.marca,
    modelo: patinete.modelo,
    slug: patinete.id,
    image: patinete.fotoPendiente
      ? undefined
      : [
          `https://recurretumulta.online${patinete.foto}`,
          ...(patinete.galeria ?? []).map((g) => `https://recurretumulta.online${g.src}`),
        ],
    url: `https://recurretumulta.online/patinetes/${patinete.id}/`,
    precio: patinete.precioEur,
    precioAprox: patinete.aprox.includes("precioEur"),
    historial,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...(producto.offers
        ? [
            {
              "@type": "Product",
              ...producto,
              category: patinete.avisoCategoria ?? "Patinete eléctrico (VMP)",
              description: [geo.frases.join(" "), patinete.veredicto].filter(Boolean).join(" "),
              ...(patinete.pesoKg != null && {
                weight: {
                  "@type": "QuantitativeValue",
                  value: patinete.pesoKg,
                  unitText: "kg",
                },
              }),
              ...(patinete.velocidadMaxKmh != null && {
                speed: {
                  "@type": "QuantitativeValue",
                  value: patinete.velocidadMaxKmh,
                  unitText: "km/h",
                },
              }),
            },
          ]
        : []),
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
            item: `https://recurretumulta.online/patinetes/${patinete.id}/`,
          },
        ],
      },
    ],
  };

  // E-E-A-T 17/10/2026: fechas reales de la ficha (JSON-LD + bloque de autoría).
  const fechas = useFichaFechas(patinete.id);
  useSeo({
    datePublished: fechas.publicado,
    dateModified: fechas.actualizado,
    // SEO 07/10/2026 (metodología CTR, Daniel): fórmula ganadora
    // [Keyword] + [número] + [beneficio] + [(año)]. Siempre ≤60 car.
    title: tituloFichaPatinete(nombre, patinete),
    // 17/10/2026: meta con datos reales (solo se ve si titulos.csv no trae meta para la URL).
    description: metaGeo(datosGeoPatinete(patinete, nombre, null), "Ficha técnica, certificado DGT, pros y contras.", anioModelo(patinete.id)),
    canonical: `/patinetes/${patinete.id}/`,
    ...(patinete.fotoPendiente
      ? {}
      : { image: `https://recurretumulta.online${patinete.foto}` }),
    type: "article",
    keywords: [
      nombre,
      `${nombre} ficha técnica`,
      `${nombre} precio`,
      `${nombre} autonomía`,
      `${nombre} opiniones`,
    ],
    schema: reviewsExtra
      ? {
          ...jsonLd,
          "@graph": [
            ...(jsonLd["@graph"] as Record<string, unknown>[]).map((nodo) =>
              // 17/10/2026: reseñas reales aprobadas DENTRO del producto
              // (antes iban sueltas en @graph, sin itemReviewed).
              // ORD-20261027-1035: se busca el nodo Product por tipo, no por
              // posición, porque sin Offer el nodo Product ya no está en @graph
              // y el primero pasaría a ser FAQPage.
              nodo["@type"] === "Product" && (reviewsExtra.aggregateRating || reviewsExtra.reviews.length)
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

  const analisisSlug = ANALISIS_PATINETES[patinete.id] ?? patinete.id;
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
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-3xl bg-gray-100 p-6 text-center">
                <ShieldCheck className="h-10 w-10 text-gray-300" />
                <p className="text-sm font-semibold text-gray-500">Foto oficial pendiente</p>
                <p className="text-xs text-gray-400">
                  Estamos consiguiendo la imagen oficial del {nombre} en la web de {patinete.marca}.
                </p>
              </div>
            }
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {patinete.marca}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {patinete.avisoCategoria ?? "Patinete eléctrico (VMP)"}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                patinete.certificadoDgt === true
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              Certificado DGT: {fmtCertificado(patinete.certificadoDgt)}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">{nombre}</h1>
          {/* 24/10/2026 (Grok decisión 2): aviso de categoría bien visible arriba de la ficha. */}
          {patinete.avisoCategoria && (
            <div className="mt-3 rounded-xl border-2 border-amber-500 bg-amber-50 p-4" role="note">
              <p className="text-sm font-bold text-amber-900">
                ⚠️ Aviso: {patinete.avisoCategoria}. Los datos de esta ficha son los del
                fabricante para ese tipo de vehículo.
              </p>
            </div>
          )}
          <RespuestaRapida frases={geo.frases} />
          <FranjaPrecio
            precio={patinete.precioEur}
            aprox={precioAprox}
            cambio={cambio}
            datos={datosClave}
          />
          <p className="mt-3 text-sm text-gray-600">
            Fuente:{" "}
            <a
              href={patinete.fuenteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-600 underline"
            >
              {patinete.fuenteNombre}
            </a>
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
            texto={`Ficha técnica del ${nombre}: precio, autonomía real, potencia y certificado DGT`}
          />
        </div>

        {/* ── La nota de Cosa (fórmula determinista sobre datos reales) ── */}
        <NotaCosa
          nombre={nombre}
          entrada={{
            precioEur: patinete.precioEur,
            potenciaCv: patinete.potenciaNominalW != null ? patinete.potenciaNominalW / 735.5 : null,
            etiquetaDgt: null, // sin etiqueta ambiental aplicable: el peso se reparte
            estrellasEuroNCAP: null,
            noAplicaEuroNCAP: true, // Euro NCAP no prueba patinetes
            precioNoOficialEspana: patinete.aprox.includes("precioEur"),
            garantiaAnos: garantiaDeMarca(patinete.marca, "patinetes")?.anios ?? null,
            autonomiaKm: patinete.autonomiaRealKm ?? patinete.autonomiaKm,
            pesoKg: patinete.pesoKg,
          }}
        />
        <MarcaAguaCosa />

        {/* Caza de monos: mono superpuesto (sin hueco en el flujo) */}
        <div className="relative h-0 z-10">
          <MonoEscondido
            id={fijoId("ficha-patinete")}
            pose="mono-risa"
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
            {patinete.velocidadMaxKmh != null && (
              <div className="mt-6 flex flex-wrap items-start justify-around gap-6">
                <Speedometer value={patinete.velocidadMaxKmh} max={40} label="Velocidad máxima" />
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
        <AnalisisEditorial slug={patinete.id} />

        {(patinete.galeria?.length ?? 0) > 0 && (
          <Suspense fallback={null}>
          <section id="fotos" className="mt-8 scroll-mt-32" aria-label="Galería de fotos oficiales">
            <NightGallery label="Galería">
            <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {patinete.galeria!.map((f) => (
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
                  />
                </figure>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Fotos oficiales de {patinete.marca} (prensa del fabricante).
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
              {FILAS.filter((f) => { const _v = f.campo === "etiquetaDgt" ? ((patinete as any).etiquetaDgt || "—") : f.get(patinete); return _v !== "—" && _v !== "Sin datos" && _v !== "No publicada" && !/^—/.test(String(_v)); }).map((f) => {
                const esAprox = patinete.aprox.includes(f.campo);
                return (
                  <tr key={f.label} className="border-t border-gray-200/70">
                    <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                      {f.label}
                    </th>
                    <td className="py-2.5 text-right font-semibold text-gray-900">
                      <span className="inline-flex items-center gap-1">
                        {esAprox && <span title="Dato no oficial, en revisión">≈&nbsp;</span>}
                        {f.get(patinete)}
                      {esAprox && <span className="ml-1 text-[10px] font-medium text-amber-700 whitespace-nowrap">dato no oficial · en revisión</span>}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <section id="precio" className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-extrabold text-gray-900">Nuestro veredicto</h2>
            <div className="flex flex-wrap items-center gap-2">
              <BotonCazachollos cocheId={patinete.id} nombre={nombre} precioActual={patinete.precioEur ?? null} />
              <DescargarFichaPDF nombre={nombre} />
            </div>
          </div>
          <p className="mt-3 text-gray-700">{patinete.veredicto}</p>
          <TablaVersiones versiones={patinete.versiones} nombre={nombre} />
          {(() => {
            const g = garantiaDeMarca(patinete.marca, "patinetes");
            return g && g.anios != null ? (
              <p className="mt-3 text-sm text-gray-500">
                {`🛡️ Garantía oficial ${patinete.marca}: `}<strong className="text-gray-800">{`${g.anios} años${g.km ? ` / ${fmtMiles(g.km)} km` : ""}`}</strong>
                {g.nota ? <span className="text-gray-400"> ({g.nota.split(".")[0]})</span> : null}
              </p>
            ) : null;
          })()}
          <Suspense fallback={null}>
            <HistorialPreciosLazy slug={patinete.id} nombre={nombre} />
          </Suspense>
        </section>

        <Diferido>
        <Suspense fallback={null}>
          <AudienciaFichaLazy tipo="patinetes" slug={patinete.id} nombre={nombre} img={patinete.fotoPendiente ? null : patinete.foto} />
        </Suspense>
        </Diferido>

        <ProsContras pros={patinete.pros} contras={patinete.contras} />

        {patinete.videoId && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Play className="h-5 w-5 text-red-600" /> Míralo en vídeo
            </h2>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <VideoYoutube id={patinete.videoId} titulo={`Vídeo del ${nombre}`} />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Vídeo:{" "}
              <a
                href={`https://www.youtube.com/watch?v=${patinete.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {patinete.videoCanal ?? "YouTube"}
              </a>{" "}
              en YouTube
            </p>
          </section>
        )}

        {patinete.mantenimientoDIY && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={`Mantenimiento en casa del ${nombre}`}>
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Wrench className="h-5 w-5 text-red-600" /> Mantenimiento en casa
            </h2>
            {patinete.mantenimientoDIY.intervaloRevision && (
              <p className="mt-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs font-semibold text-red-800">
                🗓️ Intervalo de revisión: {patinete.mantenimientoDIY.intervaloRevision}
              </p>
            )}

            <div className="mt-4 space-y-4">
              {patinete.mantenimientoDIY.presionNeumaticos && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">🛞 Presión de neumáticos</h3>
                  <p className="mt-1 text-sm text-gray-700">{patinete.mantenimientoDIY.presionNeumaticos}</p>
                </div>
              )}

              {patinete.mantenimientoDIY.aprieteTornilleria && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">🔩 Apriete de tornillería</h3>
                  <p className="mt-1 text-sm text-gray-700">{patinete.mantenimientoDIY.aprieteTornilleria}</p>
                </div>
              )}

              {patinete.mantenimientoDIY.actualizacionFirmware && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">📲 Actualización de firmware</h3>
                  <p className="mt-1 text-sm text-gray-700">{patinete.mantenimientoDIY.actualizacionFirmware}</p>
                </div>
              )}

              {patinete.mantenimientoDIY.ajusteFrenosPasos && patinete.mantenimientoDIY.ajusteFrenosPasos.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">🛑 Ajuste de frenos</h3>
                  <ol className="mt-2 space-y-1.5">
                    {patinete.mantenimientoDIY.ajusteFrenosPasos.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-[11px] font-black text-white">{i + 1}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {patinete.mantenimientoDIY.trucos && patinete.mantenimientoDIY.trucos.length > 0 && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <h3 className="text-base font-extrabold text-gray-900">💡 Trucos de cuidado</h3>
                  <ul className="mt-2 space-y-1.5">
                    {patinete.mantenimientoDIY.trucos.map((t, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="font-bold text-amber-600">·</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {patinete.mantenimientoDIY.videoTutorialUrl && (
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <VideoYoutube id={patinete.mantenimientoDIY.videoTutorialUrl} titulo={patinete.mantenimientoDIY.videoTutorialTitulo ?? `Tutorial de mantenimiento del ${nombre}`} />
                  <p className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                    🎥 {patinete.mantenimientoDIY.videoTutorialTitulo ?? "Vídeo tutorial"} — YouTube
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 20/10/2026 (fix plantilla): sin sección «Seguridad EuroNCAP» en patinetes — Euro NCAP no prueba patinetes. */}

        <DatosContrastados nombre={nombre} fuentes={patinete.fuentesExtra} rivales={patinete.rivalesTabla} verificadoEl={patinete.datosVerificadosEl} />
        <RivalesCarrusel tipo="patinetes" id={patinete.id} nombre={nombre} rivales={extra.r} />
        <FraseRivales id={patinete.id} nombre={nombre} precio={patinete.precioEur} rivales={extra.r} />

        <section className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Comparar modelo">
          <Link
            to={compararHref}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            <ArrowLeftRight className="h-4 w-4" /> Comparar con otro patinete
          </Link>          <Link
            to="/guias/patinetes-electricos/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            <BookOpen className="h-4 w-4" /> Guía: normativa y multas 2026
          </Link>
          {/* 13/10/2026: análisis del blog del mismo modelo, solo si el post existe */}
          {extra.b === 1 && (
            <Link
              to={hrefDesdeBlog(analisisSlug)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
            >
              <BookOpen className="h-4 w-4" /> Ver análisis
            </Link>
          )}
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
        <p className="mt-4 text-sm text-gray-600">
          Certificado DGT y seguro:{" "}
          <Link to="/guias/certificado-dgt/" className="font-semibold text-red-600 hover:underline">
            Guía del certificado DGT del patinete →
          </Link>{" "}
          ·{" "}
          <Link to="/guias/seguro-vmp/" className="font-semibold text-red-600 hover:underline">
            Guía del seguro obligatorio →
          </Link>
        </p>

        {/* 12/10/2026: opiniones de propietarios con fotos */}
        <div id="opiniones" className="scroll-mt-32">
        <Suspense fallback={null}>
          <ResenasVehiculoLazy
            tipo="patinetes"
            slug={patinete.id}
            nombre={nombre}
            onDatosSchema={setReviewsExtra}
          />
        </Suspense>
        </div>
        {/* 18/10/2026: enlazado interno a las otras versiones y fichas de la marca */}
        <OtrasFichasMarca tipo="patinetes" actual={patinete} todas={hermanas} />
        </article>
        <PanelLateral
          nombre={nombre}
          precio={patinete.precioEur}
          aprox={precioAprox}
          cambio={cambio}
          compararHref={compararHref}
          alerta={<BotonCazachollos cocheId={patinete.id} nombre={nombre} precioActual={patinete.precioEur ?? null} />}
          pdf={<DescargarFichaPDF nombre={nombre} />}
        />
        </div>
        <BarraInferiorFicha compararHref={compararHref} precio={patinete.precioEur} aprox={precioAprox} />
      </main>
      <nav aria-label="Herramientas" className="mx-auto max-w-6xl px-4 pb-6 text-center text-sm"><Link to="/comparador-coches/" className="font-semibold text-red-600 hover:underline">Comparador de coches</Link></nav>
      <SharedFooter
        editorial={{
          ambito: "patinetes",
          tipo: "ficha",
          modelo: nombre,
          publicado: fechas.publicado,
          actualizado: fechas.actualizado,
          fuentePrincipal: patinete.fuenteUrl ? { nombre: patinete.fuenteNombre || "Fuente de los datos", url: patinete.fuenteUrl } : null,
        }}
      />
    </div>
  );
}

export default function PatinetesFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // Carga perezosa (05/10/2026): solo el módulo de la marca de este modelo.
  const [extra, setExtra] = useState<FichaExtra>({});
  const [patinete, setPatinete] = useState<PatineteComparador | null | undefined>(undefined);
  const [hermanas, setHermanas] = useState<PatineteComparador[]>([]);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      // 18/10/2026: rivales + ¿existe el análisis? (trozo pequeño) en paralelo con la ficha.
      const [p, ex] = await Promise.all([loadArrayItem<PatineteComparador>("patinete", slug, (x) => x.id === slug), cargarFichaExtra("patinetes", slug)]);
      // Mismo módulo (fichero de la marca), ya en caché: sin coste extra.
      const herm = await loadModuleArray<PatineteComparador>("patinete", slug);
      if (alive) setHermanas(herm);
      if (!alive) return;
      setExtra(ex);
      setPatinete(p ?? null);
      if (p) {
        // Sin precarga EuroNCAP: no aplica a patinetes (20/10/2026).
        await loadRecordEntry("historia", slug);
      }
      if (alive) document.body.dataset.pageReady = "1";
    })();
    return () => {
      alive = false;
      delete document.body.dataset.pageReady;
    };
  }, [slug]);

  if (patinete === undefined) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" aria-label="Cargando ficha" />
      </div>
    );
  }

  if (!patinete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-xl px-4 pb-16 pt-16 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Patinete no encontrado</h1>
          <p className="mt-3 text-gray-600">
            No hay ningún patinete con esa dirección en la ficha técnica. Prueba con el comparador.
          </p>
          <Link
            to="/comparador-patinetes/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Ir al comparador de patinetes
          </Link>
        </main>
        <SharedFooter />
      </div>
    );
  }

  return <Ficha patinete={patinete} extra={extra} hermanas={hermanas} />;
}
