import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreditoFoto from "@/components/CreditoFoto.tsx";
import {
  ArrowLeftRight,
  BookOpen,
  Check,
  Filter,
  Gauge,
  Minus,
  Play,
  RotateCcw,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { BLOG_LITE } from "@/lib/blog-lite.generated.ts";
// 12/10/2026: los enlaces ficha->blog solo se renderizan si el blog existe.
// Evita 298 enlaces rotos en el lote de 500 fichas sin blog publicado aún.
import { ANALISIS_COCHES } from "@/lib/analisis-slugs.generated";
const BLOG_SLUGS = new Set(BLOG_LITE.map((p) => p.slug));
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
// 07/10/2026 (fluidez): animados below-the-fold en lazy — se cargan al hacer scroll.
const Donut = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Donut })));
const BatteryFill = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.BatteryFill })));
const NightGallery = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.NightGallery })));
const SpecBar = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.SpecBar })));
const Speedometer = lazy(() => import("@/components/motion.tsx").then((m) => ({ default: m.Speedometer })));
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import DescargarFichaPDF from "@/components/DescargarFichaPDF.tsx";
import BotonCazachollos from "@/components/BotonCazachollos.tsx";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import { NotaCosa, MarcaAguaCosa } from "@/components/Cosa.tsx";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import BannerJuegoMonos from "@/components/caza-monos/BannerJuegoMonos";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import { garantiaDeMarca } from "@/lib/garantias-marcas.ts";
import { tituloFichaCoche } from "@/lib/seo-titulo-ficha.ts";
import type { CocheComparador } from "@/lib/comparador-coches-data.ts";
import type { ResenaSchemaExtra } from "@/components/ResenasVehiculo.tsx";

import { loadArrayItem, loadRecordEntry } from "@/lib/data-loader-utils.ts";

// 07/10/2026 (rendimiento): componentes below-the-fold en lazy para reducir
// el chunk inicial de la ficha (era 1,6MB). Se cargan al hacer scroll.
const HistorialPreciosLazy = lazy(() => import("@/components/HistorialPrecios.tsx"));
const SeguridadEuroNCAPLayz = lazy(() => import("@/components/SeguridadEuroNCAP.tsx"));
const HistoriaModeloLazy = lazy(() => import("@/components/HistoriaModelo.tsx"));
const PlanMantenimientoLazy = lazy(() => import("@/components/PlanMantenimiento.tsx"));
// 12/10/2026: opiniones de propietarios con fotos (below-the-fold en lazy).
const ResenasVehiculoLazy = lazy(() => import("@/components/ResenasVehiculo.tsx"));

const fmtPrecio = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " €";
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtL = (v: number | null) => (v == null ? "—" : v + " L");
const fmtS = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " s";
const fmtKmh = (v: number | null) => (v == null ? "—" : v + " km/h");
const fmtKwh = (v: number | null) => (v == null ? "—" : v + " kWh");
const fmtKw = (v: number | null) => (v == null ? "—" : v + " kW");
const fmtCv = (v: number | null) => (v == null ? "—" : v + " CV");
const fmtKg = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " kg";
const fmtNm = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " Nm";
const fmtCo2 = (v: number | null) => (v == null ? "—" : v + " g/km");
const fmtPlazas = (v: number | null) => (v == null ? "—" : String(v));
const fmtDimensiones = (c: CocheComparador) =>
  c.largoMm == null || c.anchoMm == null || c.altoMm == null
    ? "—"
    : `${c.largoMm.toLocaleString("es-ES")} × ${c.anchoMm.toLocaleString("es-ES")} × ${c.altoMm.toLocaleString("es-ES")} mm`;
const fmtConsumo = (c: CocheComparador) =>
  c.consumo == null
    ? "—"
    : `${String(c.consumo).replace(".", ",")} ${c.consumoUnidad ?? ""}`.trim();
const fmtEur2 = (v: number) =>
  v.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

// ── Mejora 3: ¿puede entrar en la ZBE de Madrid? (derivado de la etiqueta DGT) ──
function textoZbe(c: CocheComparador): string {
  const nombre = `${c.marca} ${c.modelo}`;
  switch (c.etiquetaDgt) {
    case "Cero":
      return `Sí, sin restricciones: el ${nombre} lleva etiqueta CERO, así que puede circular por toda la ZBE de Madrid —incluido el interior de la M-30 y la zona de especial protección de Distrito Centro— todos los días y a cualquier hora.`;
    case "ECO":
      return `Sí: el ${nombre} lleva etiqueta ECO y puede entrar en la ZBE de Madrid sin problema en condiciones normales. Solo en episodios de alta contaminación o en zonas de especial protección podrían aplicarse restricciones puntuales a los ECO.`;
    case "C":
      return `Con matices: el ${nombre} lleva etiqueta C. Puede circular por la ZBE de Madrid, pero NO puede entrar en la zona de especial protección de Distrito Centro (salvo excepciones como residentes o acceso a parkings), y en los escenarios anticontaminación los etiqueta C son los primeros en quedarse fuera.`;
    default:
      return `El ${nombre} tiene etiqueta DGT «${c.etiquetaDgt || "no publicada"}»: revisa las restricciones de tu ZBE local antes de entrar, porque cada ciudad aplica sus propias reglas por etiqueta.`;
  }
}

// Duelos publicados en Novedades Motor donde aparece cada modelo (id de ficha → duelos).
const DUELOS: Record<string, { slug: string; titulo: string }[]> = {
  "skoda-peaq-suv-electrico-7-plazas-precio": [
    { slug: "alpine-a390-vs-skoda-peaq-cual-comprar", titulo: "Alpine A390 vs Skoda Peaq: cuál comprar en 2026" },
    { slug: "peugeot-e-5008-vs-skoda-peaq-cual-comprar", titulo: "Peugeot E-5008 vs Skoda Peaq: cuál comprar en 2026" },
  ],
  "renault-5-e-tech-2026-precio-autonomia": [
    { slug: "renault-5-e-tech-2026-vs-dacia-spring-2026-cual-comprar", titulo: "Renault 5 E-Tech vs Dacia Spring 2026: cuál comprar en 2026" },
    { slug: "renault-4-e-tech-vs-renault-5-e-tech-cual-comprar", titulo: "Renault 4 E-Tech vs Renault 5 E-Tech: cuál comprar en 2026" },
  ],
  "renault-4-e-tech-precio-autonomia": [
    { slug: "renault-4-e-tech-vs-renault-5-e-tech-cual-comprar", titulo: "Renault 4 E-Tech vs Renault 5 E-Tech: cuál comprar en 2026" },
  ],
  "dacia-spring-2026-nueva-generacion-precio": [
    { slug: "renault-5-e-tech-2026-vs-dacia-spring-2026-cual-comprar", titulo: "Renault 5 E-Tech vs Dacia Spring 2026: cuál comprar en 2026" },
  ],
  "byd-atto-2-precio-ficha-tecnica": [
    { slug: "byd-atto-2-vs-jaecoo-5-cual-comprar", titulo: "BYD Atto 2 vs Jaecoo 5: cuál comprar en 2026" },
    { slug: "leapmotor-b10-vs-byd-atto-2-cual-comprar", titulo: "Leapmotor B10 vs BYD Atto 2: cuál comprar en 2026" },
  ],
  "jaecoo-5-precio-ficha-tecnica": [
    { slug: "byd-atto-2-vs-jaecoo-5-cual-comprar", titulo: "BYD Atto 2 vs Jaecoo 5: cuál comprar en 2026" },
    { slug: "dacia-bigster-hybrid-vs-jaecoo-5-cual-comprar", titulo: "Dacia Bigster Hybrid vs Jaecoo 5: cuál comprar en 2026" },
  ],
  "leapmotor-b10-electrico-precio-espana": [
    { slug: "leapmotor-b10-vs-byd-atto-2-cual-comprar", titulo: "Leapmotor B10 vs BYD Atto 2: cuál comprar en 2026" },
  ],
  "xpeng-g6-2026-restyling-precio-espana": [
    { slug: "xpeng-g6-vs-tesla-model-y-cual-comprar", titulo: "XPeng G6 2026 vs Tesla Model Y: cuál comprar en 2026" },
  ],
  "alpine-a390-precio-ficha-tecnica": [
    { slug: "alpine-a390-vs-skoda-peaq-cual-comprar", titulo: "Alpine A390 vs Skoda Peaq: cuál comprar en 2026" },
  ],
  "peugeot-e-5008-electrico-7-plazas-precio": [
    { slug: "peugeot-e-5008-vs-skoda-peaq-cual-comprar", titulo: "Peugeot E-5008 vs Skoda Peaq: cuál comprar en 2026" },
  ],
  "dacia-bigster-hybrid-precio-espana": [
    { slug: "dacia-bigster-hybrid-vs-jaecoo-5-cual-comprar", titulo: "Dacia Bigster Hybrid vs Jaecoo 5: cuál comprar en 2026" },
  ],
};

type Fila = { campo: string; label: string; get: (c: CocheComparador) => string };

const FILAS: Fila[] = [
  { campo: "precioDesde", label: "Precio desde", get: (c) => fmtPrecio(c.precioDesde) },
  { campo: "potenciaCv", label: "Potencia", get: (c) => fmtCv(c.potenciaCv) },
  { campo: "parNm", label: "Par máximo", get: (c) => fmtNm(c.parNm) },
  { campo: "autonomiaKm", label: "Autonomía eléctrica (WLTP)", get: (c) => fmtKm(c.autonomiaKm) },
  { campo: "consumo", label: "Consumo (WLTP)", get: fmtConsumo },
  { campo: "bateriaKwh", label: "Batería", get: (c) => fmtKwh(c.bateriaKwh) },
  { campo: "cargaRapidaKw", label: "Carga rápida (DC)", get: (c) => fmtKw(c.cargaRapidaKw) },
  { campo: "maleteroL", label: "Maletero", get: (c) => fmtL(c.maleteroL) },
  { campo: "plazas", label: "Plazas", get: (c) => fmtPlazas(c.plazas) },
  { campo: "dimensiones", label: "Dimensiones (L×An×Al)", get: fmtDimensiones },
  { campo: "pesoKg", label: "Peso", get: (c) => fmtKg(c.pesoKg) },
  { campo: "ceroCien", label: "0-100 km/h", get: (c) => fmtS(c.ceroCien) },
  { campo: "velocidadMax", label: "Velocidad máxima", get: (c) => fmtKmh(c.velocidadMax) },
  { campo: "traccion", label: "Tracción", get: (c) => c.traccion ?? "—" },
  { campo: "emisionesCo2", label: "Emisiones CO₂", get: (c) => fmtCo2(c.emisionesCo2) },
  { campo: "etiquetaDgt", label: "Etiqueta DGT", get: (c) => c.etiquetaDgt || "—" },
  {
    campo: "garantiaBateria",
    label: "Garantía de batería",
    get: (c) =>
      c.garantiaBateriaAnos == null
        ? "No publicada"
        : `${c.garantiaBateriaAnos} años / ${
            c.garantiaBateriaKm != null ? c.garantiaBateriaKm.toLocaleString("es-ES") + " km" : "km no publicados"
          }${c.garantiaBateriaDegradacionPct != null ? ` (mín. ${c.garantiaBateriaDegradacionPct} %)` : ""}`,
  },
];

function Ficha({ coche }: { coche: CocheComparador }) {
  const nombre = `${coche.marca} ${coche.modelo}`;
  // 12/10/2026: nodos schema.org de reseñas (se fusionan en cliente cuando
  // Convex responde; en el prerender no hay datos → solo el schema base).
  const [reviewsExtra, setReviewsExtra] = useState<ResenaSchemaExtra | null>(null);
  const duelos = DUELOS[coche.id] ?? [];
  // 12/10/2026: solo enlazar al blog si existe (evita 404 en fichas sin blog aún).
  // 13/10/2026: slug del análisis (puede no coincidir con el id); botón solo si el post existe.
  const analisisSlug = ANALISIS_COCHES[coche.id] ?? coche.id;
  const tieneBlog = BLOG_SLUGS.has(analisisSlug);

  const [lightbox, setLightbox] = useState(false);
  const [heroSrc, setHeroSrc] = useState(coche.imagenOficial);
  // heroOk=false cuando ni la foto oficial ni la de respaldo existen en disco:
  // se oculta el hero y se muestra el aviso "foto pendiente" (auditoría 04/10/2026).
  const [heroOk, setHeroOk] = useState(true);
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

  // Si la foto oficial (-oficial.webp) no existe en disco, se usa la imagen
  // de respaldo (-hero.webp); si tampoco existe, se oculta el hero.
  useEffect(() => {
    let viva = true;
    setHeroOk(true);
    const oficial = coche.imagenOficial || "";
    const respaldo = coche.imagen && coche.imagen !== oficial ? coche.imagen : "";
    const probar = (src: string, ok: () => void, fallo: () => void) => {
      if (!src) { fallo(); return; }
      const p = new Image();
      p.onload = () => { if (viva) ok(); };
      p.onerror = () => { if (viva) fallo(); };
      p.src = src;
    };
    const usarRespaldo = () =>
      probar(respaldo, () => setHeroSrc(respaldo), () => setHeroOk(false));
    if (oficial) {
      setHeroSrc(oficial);
      probar(oficial, () => {}, usarRespaldo);
    } else {
      usarRespaldo();
    }
    return () => { viva = false; };
  }, [coche.imagenOficial, coche.imagen]);

  // Imagen para OG/Twitter/schema: la del hero si existe; si no, undefined y el
  // hook useSeo usa el logo por defecto (nunca una URL rota).
  const seoImage = heroOk && heroSrc ? `https://recurretumulta.online${heroSrc}` : undefined;

  // Datos estrella para los Donut (solo valores reales, nunca inventados).
  const donuts: { value: number; max: number; label: string }[] = [];
  if (coche.autonomiaKm != null)
    donuts.push({ value: coche.autonomiaKm, max: 800, label: "km de autonomía" });
  if (coche.potenciaCv != null)
    donuts.push({ value: coche.potenciaCv, max: 500, label: "CV de potencia" });
  if (coche.maleteroL != null)
    donuts.push({ value: coche.maleteroL, max: 700, label: "L de maletero" });
  if (donuts.length < 3 && coche.cargaRapidaKw != null)
    donuts.push({ value: coche.cargaRapidaKw, max: 350, label: "kW de carga DC" });

  // Datos técnicos para las SpecBar (solo valores reales).
  const specbars: { label: string; value: number; max: number; unit: string }[] = [];
  if (coche.potenciaCv != null)
    specbars.push({ label: "Potencia", value: coche.potenciaCv, max: 500, unit: " CV" });
  if (coche.autonomiaKm != null)
    specbars.push({ label: "Autonomía (WLTP)", value: coche.autonomiaKm, max: 800, unit: " km" });
  if (coche.maleteroL != null)
    specbars.push({ label: "Maletero", value: coche.maleteroL, max: 700, unit: " L" });
  if (specbars.length < 4 && coche.velocidadMax != null)
    specbars.push({ label: "Velocidad máxima", value: coche.velocidadMax, max: 260, unit: " km/h" });
  if (specbars.length < 4 && coche.consumo != null)
    specbars.push({
      label: "Consumo",
      value: coche.consumo,
      max: 30,
      unit: coche.consumoUnidad ? ` ${coche.consumoUnidad}` : "",
    });

  const FAQS = [
    {
      q: `¿Cuánto cuesta el ${nombre}?`,
      a:
        coche.precioDesde == null
          ? `El ${nombre} aún no tiene precio confirmado para España: lo publicaremos en cuanto la marca lo anuncie. Tienes el detalle de las versiones disponibles en el análisis completo.`
          : `El ${nombre} parte de ${fmtPrecio(coche.precioDesde)}. El desglose por versiones y acabados, con y sin ayudas, está en el análisis completo del modelo.`,
    },
    {
      q: `¿Cuál es la autonomía del ${nombre}?`,
      a:
        coche.autonomiaKm == null
          ? `No hay una autonomía publicada por ninguna fuente fiable para el ${nombre}, así que preferimos no inventarla: no la mostramos en la ficha.`
          : `Homologa ${fmtKm(coche.autonomiaKm)}${/híbrido|enchufable|autonomía extendida/i.test(coche.tipo) ? " en modo eléctrico" : " (WLTP)"}. Ten en cuenta que la cifra real depende de tu conducción y de la temperatura.`,
    },
    {
      q: `¿Cuánto maletero tiene el ${nombre}?`,
      a:
        coche.maleteroL == null
          ? `El volumen de maletero del ${nombre} no está publicado por una fuente fiable: lo añadiremos en cuanto haya dato oficial.`
          : `El ${nombre} ofrece ${fmtL(coche.maleteroL)} de maletero.`,
    },
    {
      q: `¿Qué etiqueta DGT lleva el ${nombre}?`,
      a: `El ${nombre} tiene etiqueta DGT «${coche.etiquetaDgt}». ${
        coche.etiquetaDgt === "Cero"
          ? "Puede circular por todas las ZBE sin restricciones."
          : coche.etiquetaDgt === "ECO"
            ? "Puede circular por las ZBE, pero algunas ciudades con ZBE estrictas aplican restricciones a los ECO."
            : "Revisa las restricciones de tu ZBE local, ya que con etiqueta C algunas ciudades restringen el acceso."
      }`,
    },
    {
      q: `¿Dónde puedo leer el análisis completo del ${nombre}?`,
      a: `En nuestro análisis de Novedades Motor, con ficha técnica, curiosidades, comparativa con rivales y vídeo. Pulsa «Leer el análisis completo» para abrirlo.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Car",
        name: nombre,
        ...(seoImage ? { image: seoImage } : {}),
        url: `https://recurretumulta.online/coches/${coche.id}/`,
        manufacturer: { "@type": "Organization", name: coche.marca },
        bodyType: coche.categoria,
        fuelType: coche.tipo,
        vehicleEngine: {
          "@type": "EngineSpecification",
          ...(coche.potenciaCv != null && {
            enginePower: {
              "@type": "QuantitativeValue",
              value: coche.potenciaCv,
              unitText: "CV",
            },
          }),
          ...(coche.parNm != null && {
            torque: {
              "@type": "QuantitativeValue",
              value: coche.parNm,
              unitText: "Nm",
            },
          }),
        },
        ...(coche.plazas != null && { numberOfSeats: coche.plazas }),
        ...(coche.pesoKg != null && {
          weight: {
            "@type": "QuantitativeValue",
            value: coche.pesoKg,
            unitText: "kg",
          },
        }),
        ...(coche.maleteroL != null && {
          cargoVolume: {
            "@type": "QuantitativeValue",
            value: coche.maleteroL,
            unitText: "L",
          },
        }),
        ...(coche.velocidadMax != null && {
          speed: {
            "@type": "QuantitativeValue",
            value: coche.velocidadMax,
            unitText: "km/h",
          },
        }),
        // 17/10/2026: Offer solo con precio real y con imagen (Google exige name+image); sin availability: no vendemos.
        ...(coche.precioDesde != null && !!seoImage && {
          offers: {
            "@type": "Offer",
            // Precio real en origen cuando solo hay conversión (p. ej. Stelato G9, China)
            ...(PRECIO_ORIGEN[coche.id] ?? { price: coche.precioDesde, priceCurrency: "EUR" }),
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
            name: "Comparador de coches",
            item: "https://recurretumulta.online/comparador-coches",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: nombre,
            item: `https://recurretumulta.online/coches/${coche.id}/`,
          },
        ],
      },
    ],
  };

  // SEO 07/10/2026 (metodología CTR, Daniel): fórmula ganadora
  // [Keyword] + [número] + [beneficio] + [(año)]. Siempre ≤60 car.
  // useSeo omite el sufijo de marca en /coches/*.
  const tituloSeo = tituloFichaCoche(nombre, coche);

  useSeo({
    title: tituloSeo,
    description: `Ficha técnica del ${nombre}: precio, potencia, autonomía, batería, maletero, etiqueta DGT, pros y contras, vídeo y análisis.`,
    canonical: `/coches/${coche.id}/`,
    image: seoImage,
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
      <main id="ficha-pdf" className="mx-auto max-w-4xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>{" "}
          ·{" "}
          <Link to="/comparador-coches/" className="hover:underline">
            Comparador de coches
          </Link>{" "}
          · <span className="text-gray-700">{nombre}</span>
        </nav>

        <header className="mt-4">
          {heroOk && heroSrc ? (
          <div className="overflow-hidden rounded-3xl">
            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="block w-full cursor-zoom-in"
              aria-label={`Ver foto grande del ${nombre}`}
            >
              <DriveInImage
                src={heroSrc}
                alt={`Foto del ${nombre}`}
                eager={true}
                width={dims[heroSrc.split("/").pop() ?? ""]?.[0]}
                height={dims[heroSrc.split("/").pop() ?? ""]?.[1]}
                className="block w-full"
                imgClassName="aspect-video w-full object-cover"
              />
            </button>
          </div>
          ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-5xl font-black text-gray-300">{coche.marca.charAt(0)}</span>
            <p className="text-sm font-semibold text-gray-500">Foto pendiente de verificación</p>
          </div>
          )}
          {heroOk && <CreditoFoto src={heroSrc} />}
          {lightbox && heroOk && (
            <Lightbox
              src={heroSrc}
              alt={`Foto del ${nombre}`}
              onClose={() => setLightbox(false)}
            />
          )}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <EtiquetaDGT etiqueta={coche.etiquetaDgt} size="md" />
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {coche.marca}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {coche.tipo}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {coche.categoria}
            </span>
            {coche.aprox.includes("precioDesde") && (
              <span
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800"
                title={`${coche.marca} aún no ha publicado el precio oficial para España: es nuestra estimación`}
              >
                Precio estimado (no oficial)
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">{nombre}</h1>
          <p className="mt-2 text-gray-600">
            Ficha técnica completa: precio, potencia, <Marker>autonomía</Marker>,{" "}
            <Marker>batería</Marker>, maletero y <Marker>etiqueta DGT</Marker>, con puntos
            fuertes y débiles extraídos de nuestro análisis. Si un dato no
            está publicado por una fuente fiable, no lo mostramos en vez de inventarlo.
            Fuente:{" "}
            {coche.fuenteUrl ? (
              <a
                href={coche.fuenteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {coche.fuenteNombre ?? "web oficial"}
              </a>
            ) : (
              (coche.fuenteNombre ?? "web oficial de la marca")
            )}
            .
          </p>
        </header>

        <div className="mt-4 flex justify-end">
          <CompartirBotones
            titulo={`Ficha técnica: ${nombre}`}
            texto={`Ficha técnica del ${nombre}: precio, autonomía, potencia y más`}
          />
        </div>

        {/* ── La nota de Cosa (fórmula determinista sobre datos reales) ── */}
        <NotaCosa
          nombre={nombre}
          fichaId={coche.id}
          entrada={{
            precioEur: coche.precioDesde,
            potenciaCv: coche.potenciaCv,
            consumoL100: coche.consumoUnidad === "l/100km" ? coche.consumo : null,
            consumoKwh100: coche.consumoUnidad === "kWh/100km" ? coche.consumo : null,
            etiquetaDgt: coche.etiquetaDgt,
            garantiaAnos: garantiaDeMarca(coche.marca, "coches")?.anios ?? null,
            maleteroL: coche.maleteroL,
          }}
        />
        <MarcaAguaCosa />

        {/* Caza de monos: mono mecánico superpuesto (sin hueco en el flujo) */}
        <div className="relative h-0 z-10">
          <MonoEscondido
            id={fijoId("ficha-coche")}
            pose="mono-mecanico"
            size={36}
            className="absolute -top-8 right-5"
            titulo="¡Un mono mecánico en la ficha! Haz clic para cazarlo 🦍"
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
            {/* ── LOTE 2: velocímetro + batería que se carga ── */}
            {(coche.velocidadMax != null || coche.potenciaCv != null || (coche.cargaRapidaKw != null && /^eléctrico$/i.test(coche.tipo))) && (
              <div className="mt-6 flex flex-wrap items-start justify-around gap-6">
                {coche.velocidadMax != null ? (
                  <Speedometer value={coche.velocidadMax} max={260} label="Velocidad máxima" />
                ) : coche.potenciaCv != null ? (
                  <Speedometer value={coche.potenciaCv} max={500} label="Potencia (escala CV)" unit="CV" />
                ) : null}
                {coche.cargaRapidaKw != null && /^eléctrico$/i.test(coche.tipo) && (
                  <BatteryFill kw={coche.cargaRapidaKw} />
                )}
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
              {FILAS.filter((f) => { const _v = f.campo === "etiquetaDgt" ? ((coche as any).etiquetaDgt || "—") : f.get(coche); return _v !== "—" && _v !== "Sin datos" && _v !== "No publicada" && !/^—/.test(String(_v)); }).map((f) => {
                const esAprox = coche.aprox.includes(f.campo);
                return (
                  <tr key={f.label} className="border-t border-gray-200/70">
                    <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                      {f.label}
                    </th>
                    <td className="py-2.5 text-right font-semibold text-gray-900">
                      <span className="inline-flex items-center gap-1">
                        {esAprox && <span title="Dato no oficial, en revisión">≈&nbsp;</span>}
                        {f.campo === "etiquetaDgt" ? (
                          coche.etiquetaDgt ? (
                            <EtiquetaDGT etiqueta={coche.etiquetaDgt} size="sm" />
                          ) : (
                            "—"
                          )
                        ) : (
                          f.get(coche)
                        )}
                      {esAprox && <span className="ml-1 text-[10px] font-medium text-amber-700 whitespace-nowrap">dato no oficial · en revisión</span>}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-gray-500">
            <strong>≈</strong> / «dato no oficial · en revisión» = cifra aproximada (estimación cuando no hay dato oficial publicado; se actualizará con el dato oficial).
          </p>
        </section>

        <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="ZBE de Madrid">
          <h2 className="text-xl font-extrabold text-gray-900">
            ¿Puede entrar en la ZBE de Madrid?
          </h2>
          <p className="mt-3 text-gray-700">{textoZbe(coche)}</p>
          <p className="mt-3 text-xs text-gray-500">
            En 2026 todos los municipios españoles de más de 50.000 habitantes tienen su
            propia Zona de Bajas Emisiones, y cada una aplica sus restricciones según la
            etiqueta DGT: las Cero entran en todas, las ECO casi siempre, y las C y B
            dependen del escenario anticontaminación y de la zona.
          </p>
        </section>

        <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-extrabold text-gray-900">Precio y versiones</h2>
            <div className="flex flex-wrap items-center gap-2">
              <BotonCazachollos cocheId={coche.id} nombre={nombre} precioActual={coche.precioDesde ?? null} />
              <DescargarFichaPDF nombre={nombre} />
            </div>
          </div>
          <p className="mt-3 text-gray-700">
            {coche.precioDesde == null ? (
              <>El {nombre} aún no tiene precio confirmado para España.</>
            ) : (
              <>
                El {nombre} parte de{" "}
                <strong className="text-gray-900">
                  {coche.aprox.includes("precioDesde") && "≈"}
                  {fmtPrecio(coche.precioDesde)}
                </strong>
                {coche.aprox.includes("precioDesde") && (
                  <>
                    {" "}
                    (estimación: {coche.marca} aún no ha publicado la tarifa oficial
                    para España; precio orientativo calculado desde el mercado de origen).
                  </>
                )}
                .
              </>
            )}{" "}
            El detalle de versiones, acabados y opciones está en nuestro análisis:
          </p>
          {tieneBlog && (
            <Link
              to={`/blog/${analisisSlug}/`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              <BookOpen className="h-4 w-4" /> Ver versiones en el análisis
            </Link>
          )}
          <p className="mt-3 text-sm text-gray-500">
            ITV en tu comunidad:{" "}
            <Link to="/herramientas/precio-itv/" className="font-semibold text-red-600 hover:underline">
              consúltala aquí
            </Link>
          </p>
          {(() => {
            const g = garantiaDeMarca(coche.marca, "coches");
            return g && g.anios != null ? (
              <p className="mt-2 text-sm text-gray-500">
                🛡️ Garantía oficial {coche.marca}: <strong className="text-gray-800">{g.anios} años{g.km ? ` / ${g.km.toLocaleString("es-ES")} km` : ""}</strong>
                {g.nota ? <span className="text-gray-400"> ({g.nota.split(".")[0]})</span> : null}
              </p>
            ) : null;
          })()}
          <Suspense fallback={null}>
            <HistorialPreciosLazy slug={coche.id} nombre={nombre} />
          </Suspense>
        </section>

        {coche.imagenInteriorOficial && (
          <figure className="rtm-card mt-8">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={coche.imagenInteriorOficial}
                alt={`Interior oficial del ${nombre}`}
                className="rtm-card-zoom aspect-video w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const fig = e.currentTarget.closest("figure");
                  if (fig) (fig as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-500">
              Foto de {coche.marca} · Interior del {nombre}
            </figcaption>
          </figure>
        )}

        {(coche.galeria?.length ?? 0) > 0 && (
          <Suspense fallback={null}>
          <section className="mt-8" aria-label="Galería de fotos">
            <NightGallery label="Galería">
            <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {coche.galeria!.map((f) => (
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
                    className="rtm-card-zoom aspect-[3/2] w-full object-cover"
                  />
                  <CreditoFoto src={f.src} className="px-2 pb-1" />
                </figure>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Fotos oficiales de {coche.marca} (prensa del fabricante).
            </p>
                      </NightGallery>
</section>
          </Suspense>
        )}

        {(coche.opiniones?.length ?? 0) > 0 && (
          <section
            className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label="Opiniones de propietarios"
          >
            <h2 className="text-xl font-extrabold text-gray-900">Lo que dicen los dueños</h2>
            <p className="mt-2 text-sm text-gray-600">
              Opiniones reales de propietarios en foros y comunidades. No las filtramos ni
              las inventamos: hay de todo, lo bueno y lo malo.
            </p>
            <div className="mt-4 space-y-4">
              {coche.opiniones!.map((o, i) => (
                <blockquote key={i} className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-800">“{o.texto}”</p>
                  <footer className="mt-2 text-xs text-gray-500">
                    — {o.usuario}, {o.fuente} ·{" "}
                    <a
                      href={o.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-red-600 underline"
                    >
                      Ver fuente
                    </a>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        {coche.costeMensual && (
          <section
            className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label="Cuánto cuesta al mes"
          >
            <h2 className="text-xl font-extrabold text-gray-900">Cuánto cuesta al mes</h2>
            <table className="mt-3 w-full text-sm">
              <tbody>
                <tr className="border-t border-gray-200/70">
                  <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                    Energía (cada 100 km)
                  </th>
                  <td className="py-2.5 text-right font-semibold text-gray-900">
                    ≈ {fmtEur2(coche.costeMensual.costeEnergia100km)}
                  </td>
                </tr>
                <tr className="border-t border-gray-200/70">
                  <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                    Seguro a terceros (año)
                  </th>
                  <td className="py-2.5 text-right font-semibold text-gray-900">
                    ≈ {fmtPrecio(coche.costeMensual.seguroTercerosAnual)}
                  </td>
                </tr>
                <tr className="border-t border-gray-200/70">
                  <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                    Seguro ampliado (año)
                  </th>
                  <td className="py-2.5 text-right font-semibold text-gray-900">
                    ≈ {fmtPrecio(coche.costeMensual.seguroAmpliadoAnual)}
                  </td>
                </tr>
                <tr className="border-t border-gray-200/70">
                  <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                    Mantenimiento (año)
                  </th>
                  <td className="py-2.5 text-right font-semibold text-gray-900">
                    ≈ {fmtPrecio(coche.costeMensual.mantenimientoAnual)}
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-300">
                  <th className="py-2.5 pr-2 text-left font-bold text-gray-900">
                    Total al mes
                  </th>
                  <td className="py-2.5 text-right text-lg font-extrabold text-red-600">
                    ≈ {fmtPrecio(coche.costeMensual.costeMensualTotal)}/mes
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-gray-500">
              Estimación orientativa (octubre 2026): supone 15.000 km al año, luz a{" "}
              {String(coche.costeMensual.precioKwh).replace(".", ",")} €/kWh y gasolina 95 a{" "}
              {String(coche.costeMensual.precioGasolinaL).replace(".", ",")} €/l.{" "}
              {coche.costeMensual.notas} El coste real depende de tu uso, tu tarifa y tu
              aseguradora.
            </p>
          </section>
        )}

        <section className="mt-8 grid gap-6 sm:grid-cols-2" aria-label="Puntos fuertes y débiles">
          <FlipCard
            className="rtm-card"
            minHeight="240px"
            front={
              <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <span className="text-4xl" aria-hidden="true">✅</span>
                <p className="text-lg font-extrabold text-emerald-700">Pros</p>
                <p className="text-sm text-gray-600">{coche.pros[0]}</p>
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
                  {coche.pros.map((p, i) => (
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
                <p className="text-sm text-gray-600">{coche.contras[0]}</p>
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
                  {coche.contras.map((p, i) => (
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

        {coche.videoId && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Vídeo del modelo">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Play className="h-5 w-5 text-red-600" /> Míralo en vídeo
            </h2>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${coche.videoId}`}
                title={`Vídeo del ${nombre}`}
                className="aspect-video w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Vídeo:{" "}
              <a
                href={`https://www.youtube.com/watch?v=${coche.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {coche.videoCanal ?? "YouTube"}
              </a>{" "}
              en YouTube
            </p>
          </section>
        )}

        <Suspense fallback={null}>
          <SeguridadEuroNCAPLayz fichaId={coche.id} nombre={nombre} inline={coche.euroncap} />
        </Suspense>

        {coche.planMantenimiento && (
          <Suspense fallback={null}>
            <PlanMantenimientoLazy plan={coche.planMantenimiento} nombre={nombre} />
          </Suspense>
        )}

        <Suspense fallback={null}>
          <HistoriaModeloLazy fichaId={coche.id} nombre={nombre} />
        </Suspense>

        {coche.mantenimientoDIY && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={`Mantenimiento en casa del ${nombre}`}>
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Wrench className="h-5 w-5 text-red-600" /> Mantenimiento en casa
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Guías paso a paso para el mantenimiento básico de tu {nombre}, sin pasar por el taller.
            </p>
            {coche.mantenimientoDIY.intervaloMantenimiento && (
              <p className="mt-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs font-semibold text-red-800">
                🗓️ Intervalo oficial: {coche.mantenimientoDIY.intervaloMantenimiento}
              </p>
            )}

            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-gray-900">
                  <RotateCcw className="h-4 w-4 text-red-600" /> {coche.mantenimientoDIY.resetAceiteTitulo}
                </h3>
                <ol className="mt-2 space-y-1.5">
                  {coche.mantenimientoDIY.resetAceitePasos.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-[11px] font-black text-white">{i + 1}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
                {coche.mantenimientoDIY.resetAceiteNota && (
                  <p className="mt-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800">
                    ⚠️ {coche.mantenimientoDIY.resetAceiteNota}
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-gray-900">
                  <Wind className="h-4 w-4 text-red-600" /> Cambiar el filtro de polen
                </h3>
                <p className="mt-1 text-xs font-semibold text-gray-500">
                  📍 Ubicación: {coche.mantenimientoDIY.filtroPolenUbicacion}
                </p>
                <ol className="mt-2 space-y-1.5">
                  {coche.mantenimientoDIY.filtroPolenPasos.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-black text-white">{i + 1}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {coche.mantenimientoDIY.filtroAirePasos && coche.mantenimientoDIY.filtroAirePasos.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="flex items-center gap-2 text-base font-extrabold text-gray-900">
                    <Filter className="h-4 w-4 text-red-600" /> Cambiar el filtro de aire
                  </h3>
                  <ol className="mt-2 space-y-1.5">
                    {coche.mantenimientoDIY.filtroAirePasos.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-black text-white">{i + 1}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {coche.mantenimientoDIY.videoTutorialUrl && (
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <div className="aspect-video w-full">
                    <iframe
                      src={coche.mantenimientoDIY.videoTutorialUrl.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                      title={coche.mantenimientoDIY.videoTutorialTitulo ?? `Tutorial de mantenimiento del ${nombre}`}
                      className="h-full w-full"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                  <p className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                    🎥 {coche.mantenimientoDIY.videoTutorialTitulo ?? "Vídeo tutorial"} — YouTube
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {duelos.length > 0 && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Duelos y comparativas">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <ArrowLeftRight className="h-5 w-5 text-red-600" /> Duelos y comparativas
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Lo enfrentamos cara a cara con sus rivales directos en Novedades Motor:
            </p>
            <ul className="mt-3 space-y-2">
              {duelos.map((d) => (
                <li key={d.slug}>
                  <Link to={`/blog/${d.slug}/`} className="font-semibold text-red-600 hover:underline">
                    {d.titulo} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Comparar modelo">
          <Link
            to={`/comparador-coches/?a=${coche.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            <ArrowLeftRight className="h-4 w-4" /> Comparar con otro modelo
          </Link>
          {tieneBlog && (
            <Link
              to={`/blog/${analisisSlug}/`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <BookOpen className="h-4 w-4" /> Leer nuestro análisis
            </Link>
          )}
        </section>

        <p className="mt-4 text-center text-sm text-gray-500">
          ¿Cuántos años de batería dan las marcas?{" "}
          <Link to="/comparador-garantia-bateria/" className="font-semibold text-red-600 hover:underline">
            Ver el ranking de garantías de batería →
          </Link>
        </p>

        <p className="mt-2 text-center text-sm text-gray-500">
          ¿Entra en tu presupuesto?{" "}
          <Link to="/mejor-coche-por-presupuesto/" className="font-semibold text-red-600 hover:underline">
            Qué coche me compro con mi presupuesto →
          </Link>
        </p>

        <p className="mt-2 text-center text-sm text-gray-500">
          ¿Cuánto consume de verdad?{" "}
          <Link to="/calculadora-autonomia-real/" className="font-semibold text-red-600 hover:underline">
            Calculadora de autonomía real →
          </Link>
        </p>

        <p className="mt-2 text-center text-sm text-gray-500">
          ¿Puede entrar en las ZBE?{" "}
          <Link to="/calculadora-etiqueta-dgt/" className="font-semibold text-red-600 hover:underline">
            Calculadora de etiqueta DGT →
          </Link>
        </p>

        <section className="mt-10" aria-label="Preguntas frecuentes">
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

        <StickyCta href={`/comparador-coches/?a=${coche.id}`} label="Comparar este modelo" />

        {/* 12/10/2026: opiniones de propietarios con fotos */}
        <Suspense fallback={null}>
          <ResenasVehiculoLazy
            tipo="coches"
            slug={coche.id}
            nombre={nombre}
            onDatosSchema={setReviewsExtra}
          />
        </Suspense>
      </main>
      <SharedFooter />
    </div>
  );
}

const PRECIO_ORIGEN: Record<string, { price: number; priceCurrency: string }> = {
  "stelato-g9-2026-precio-ficha-tecnica": { price: 479800, priceCurrency: "CNY" },
};

export default function CochesFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // Carga perezosa (05/10/2026): solo el módulo de la marca de este modelo,
  // no los 3.7MB del comparador completo. La historia y EuroNCAP se precargan
  // en paralelo para que el prerender las capture (los componentes hijos las
  // leen de la caché del dynamic import).
  const [coche, setCoche] = useState<CocheComparador | null | undefined>(undefined);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      const c = await loadArrayItem<CocheComparador>("coche", slug, (x) => x.id === slug);
      if (!alive) return;
      setCoche(c ?? null);
      if (c) {
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

  if (coche === undefined) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" aria-label="Cargando ficha" />
      </div>
    );
  }

  if (!coche) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-xl px-4 pb-16 pt-16 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Modelo no encontrado</h1>
          <p className="mt-3 text-gray-600">
            No hay ningún modelo con esa dirección en la ficha técnica. Prueba con el comparador.
          </p>
          <Link
            to="/comparador-coches/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Ir al comparador de coches
          </Link>
        </main>
        <SharedFooter />
      </div>
    );
  }

  return <Ficha coche={coche} />;
}
