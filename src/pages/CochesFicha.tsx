import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreditoFoto from "@/components/CreditoFoto.tsx";
import AnalisisEditorial from "@/components/AnalisisEditorial.tsx";
import {
  ArrowLeftRight,
  BatteryCharging,
  BookOpen,
  Filter,
  Fuel,
  Gauge,
  Package,
  Play,
  RotateCcw,
  Timer,
  Users,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { useFichaFechas } from "@/hooks/use-ficha-fechas.ts";
// 12/10/2026: los enlaces ficha->blog solo se renderizan si el blog existe.
// Evita 298 enlaces rotos en el lote de 500 fichas sin blog publicado aún.
import { ANALISIS_COCHES } from "@/lib/analisis-slugs.generated";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { Marker, useSpotlight } from "@/components/motion.tsx";
// 18/10/2026 (rediseño fichas): cabecera tipo tienda, pestañas, barra inferior, rivales.
import GaleriaFicha, { type FotoFicha } from "@/components/ficha/GaleriaFicha.tsx";
import { FranjaPrecio, PanelLateral, cambioDesdeHistorial, type DatoClave } from "@/components/ficha/CabeceraPrecio.tsx";
import PestanasFicha from "@/components/ficha/PestanasFicha.tsx";
import BarraInferiorFicha from "@/components/ficha/BarraInferiorFicha.tsx";
import ProsContras from "@/components/ficha/ProsContras.tsx";
import VideoYoutube from "@/components/ficha/VideoYoutube.tsx";
import TablaVersiones from "@/components/ficha/TablaVersiones.tsx";
import RivalesCarrusel from "@/components/ficha/RivalesCarrusel.tsx";
import FraseRivales from "@/components/ficha/FraseRivales.tsx";
import { fmtEur, fmtMiles } from "@/lib/formato.ts";
import OtrasFichasMarca from "@/components/OtrasFichasMarca.tsx";
import { propio } from "@/lib/textos-propios.ts";
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

import { loadArrayItem, loadModuleArray, loadRecordEntry } from "@/lib/data-loader-utils.ts";
import { cargarFichaExtra, type FichaExtra } from "@/lib/ficha-extra.ts";
import RespuestaRapida from "@/components/geo/RespuestaRapida.tsx";
import { datosGeoCoche, frasesGeo, metaGeo } from "@/lib/geo-ficha.ts";
import { useHistorialPrecios } from "@/lib/historial-precios-cargar.ts";
import { PRECIO_ORIGEN, anioModelo, productoFicha } from "@/lib/schema-ficha.ts";

// 07/10/2026 (rendimiento): componentes below-the-fold en lazy para reducir
// el chunk inicial de la ficha (era 1,6MB). Se cargan al hacer scroll.
const HistorialPreciosLazy = lazy(() => import("@/components/HistorialPrecios.tsx"));
const SeguridadEuroNCAPLayz = lazy(() => import("@/components/SeguridadEuroNCAP.tsx"));
const HistoriaModeloLazy = lazy(() => import("@/components/HistoriaModelo.tsx"));
const PlanMantenimientoLazy = lazy(() => import("@/components/PlanMantenimiento.tsx"));
// 12/10/2026: opiniones de propietarios con fotos (below-the-fold en lazy).
const ResenasVehiculoLazy = lazy(() => import("@/components/ResenasVehiculo.tsx"));
// 18/10/2026: audiencia (puntúa, ¿lo comprarías?, duelo, visitas). Solo cliente, tras la carga.
const AudienciaFichaLazy = lazy(() => import("@/components/audiencia/AudienciaFicha.tsx"));
import { Diferido, useVisitaFicha } from "@/components/audiencia/Diferido.tsx";

const fmtPrecio = (v: number | null) => fmtEur(v);
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtL = (v: number | null) => (v == null ? "—" : v + " L");
const fmtS = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " s";
const fmtKmh = (v: number | null) => (v == null ? "—" : v + " km/h");
const fmtKwh = (v: number | null) => (v == null ? "—" : v + " kWh");
const fmtKw = (v: number | null) => (v == null ? "—" : v + " kW");
const fmtCv = (v: number | null) => (v == null ? "—" : v + " CV");
const fmtKg = (v: number | null) =>
  v == null ? "—" : fmtMiles(v) + " kg";
const fmtNm = (v: number | null) =>
  v == null ? "—" : fmtMiles(v) + " Nm";
const fmtCo2 = (v: number | null) => (v == null ? "—" : v + " g/km");
const fmtPlazas = (v: number | null) => (v == null ? "—" : String(v));
const fmtDimensiones = (c: CocheComparador) =>
  c.largoMm == null || c.anchoMm == null || c.altoMm == null
    ? "—"
    : `${fmtMiles(c.largoMm)} × ${fmtMiles(c.anchoMm)} × ${fmtMiles(c.altoMm)} mm`;
const fmtConsumo = (c: CocheComparador) =>
  c.consumo == null
    ? "—"
    : `${String(c.consumo).replace(".", ",")} ${c.consumoUnidad ?? ""}`.trim();
const fmtEur2 = (v: number) =>
  v.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

// ── Mejora 3: ¿puede entrar en la ZBE de Madrid? (derivado de la etiqueta DGT) ──
const sinTarifaEspana = (c: CocheComparador): boolean =>
  PRECIO_ORIGEN[c.id] != null || c.precioDesde == null || c.aprox.includes("precioDesde");
// 26/10 (unicidad): versión corta (dato, sin frase de plantilla) para fichas sin texto propio de ZBE.
function zbeMadridCorto(c: CocheComparador): string {
  if (c.etiquetaDgt && sinTarifaEspana(c)) return "Según etiqueta, cuando se matricule en España";
  switch (c.etiquetaDgt) {
    case "Cero": return "Libre, también Distrito Centro";
    case "ECO": return "Sí; posibles limitaciones en episodios de contaminación";
    case "C": return "Sí, salvo Distrito Centro (con excepciones)";
    case "B": return "No, salvo excepciones (residentes, históricos)";
    default: return "Consulta las reglas de cada ciudad";
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
  { campo: "autonomiaKm", label: "Autonomía eléctrica (WLTP)", get: (c) => fmtKm(c.autonomiaKm) + (c.cicloAutonomia === "CLTC" ? " (ciclo chino CLTC, no WLTP)" : "") },
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
            c.garantiaBateriaKm != null ? fmtMiles(c.garantiaBateriaKm) + " km" : "km no publicados"
          }${c.garantiaBateriaDegradacionPct != null ? ` (mín. ${c.garantiaBateriaDegradacionPct} %)` : ""}`,
  },
];

function Ficha({ coche, extra, hermanas = [] }: { coche: CocheComparador; extra: FichaExtra; hermanas?: CocheComparador[] }) {
  const nombre = `${coche.marca} ${coche.modelo}`;
  const tp = coche.textosPropios;
  // GEO 17/10/2026: respuesta rápida (ficha + historial de precios, nada inventado).
  const historial = useHistorialPrecios(coche.id);
  useVisitaFicha("coches", coche.id);
  const geo = frasesGeo(datosGeoCoche(coche, nombre, historial, PRECIO_ORIGEN[coche.id] ?? null));
  // 12/10/2026: nodos schema.org de reseñas (se fusionan en cliente cuando
  // Convex responde; en el prerender no hay datos → solo el schema base).
  const [reviewsExtra, setReviewsExtra] = useState<ResenaSchemaExtra | null>(null);
  const duelos = DUELOS[coche.id] ?? [];
  // 12/10/2026: solo enlazar al blog si existe (evita 404 en fichas sin blog aún).
  // 13/10/2026: slug del análisis (puede no coincidir con el id); botón solo si el post existe.
  // 20/10/2026 (informe Niky): como en MotosFicha, se respeta el analisisSlug de
  // la propia ficha (p. ej. Adria Matrix Supreme -> su artículo de autocaravana);
  // antes se ignoraba y esas fichas nunca enlazaban a su blog.
  const analisisSlug = ANALISIS_COCHES[coche.id] ?? coche.analisisSlug ?? coche.id;
  const tieneBlog = extra.b === 1;
  // 20/10/2026: fichas de vivienda alojadas en /coches/ (Adria Matrix Supreme y
  // similares): la miga de pan las presenta como autocaravana/camper, no como coche.
  const esCamper = /^camper$/i.test(coche.categoria ?? "");
  const esVivienda = esCamper || /^autocaravana$/i.test(coche.categoria ?? "");
  const migaSeccion = esVivienda
    ? { nombre: esCamper ? "Campers" : "Autocaravanas", url: esCamper ? "/campers/" : "/autocaravanas/" }
    : { nombre: "Fichas técnicas", url: "/fichas-tecnicas/" };

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
    specbars.push({ label: coche.cicloAutonomia === "CLTC" ? "Autonomía (CLTC)" : "Autonomía (WLTP)", value: coche.autonomiaKm, max: 800, unit: " km" });
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

  // 18/10/2026 (rediseño): fotos de la galería superior (hero válida + interior + galería oficial).
  const dimDe = (src: string) => dims[src.split("/").pop() ?? ""];
  const fotosTop: FotoFicha[] = [
    ...(heroOk && heroSrc ? [{ src: heroSrc, alt: `Foto del ${nombre}`, ancho: dimDe(heroSrc)?.[0], alto: dimDe(heroSrc)?.[1] }] : []),
    ...(coche.imagenInteriorOficial ? [{ src: coche.imagenInteriorOficial, alt: `Interior oficial del ${nombre}` }] : []),
    ...(coche.galeria ?? []).map((f) => ({ src: f.src, alt: f.alt, ancho: f.ancho, alto: f.alto })),
  ].filter((f, i, a) => a.findIndex((g) => g.src === f.src) === i);
  const esPhevOEv = /eléctrico|enchufable|autonomía extendida/i.test(coche.tipo);
  // 20/10/2026 (fix plantilla): supuestos del coste mensual según la energía del coche —
  // la luz solo se cita si el coche se carga (eléctrico/enchufable/EREV) y la gasolina
  // solo si quema combustible (un diésel o gasolina puro no paga luz a €/kWh).
  const costeUsaLuz = esPhevOEv;
  const costeUsaCombustible =
    !/eléctrico/i.test(coche.tipo) || /enchufable|autonomía extendida|híbrido/i.test(coche.tipo);
  const datosClave: DatoClave[] = [
    coche.potenciaCv != null && { icono: <Zap className="h-5 w-5" />, valor: fmtCv(coche.potenciaCv), label: "Potencia" },
    coche.autonomiaKm != null && esPhevOEv
      ? { icono: <BatteryCharging className="h-5 w-5" />, valor: fmtKm(coche.autonomiaKm), label: /enchufable/i.test(coche.tipo) ? "Autonomía eléctrica" : "Autonomía WLTP" }
      : coche.consumo != null && { icono: <Fuel className="h-5 w-5" />, valor: fmtConsumo(coche), label: "Consumo WLTP" },
    coche.ceroCien != null && { icono: <Timer className="h-5 w-5" />, valor: fmtS(coche.ceroCien), label: "0-100 km/h" },
    coche.maleteroL != null && { icono: <Package className="h-5 w-5" />, valor: fmtL(coche.maleteroL), label: "Maletero" },
    coche.plazas != null && { icono: <Users className="h-5 w-5" />, valor: `${coche.plazas} plazas`, label: "Plazas" },
    coche.velocidadMax != null && { icono: <Gauge className="h-5 w-5" />, valor: fmtKmh(coche.velocidadMax), label: "Velocidad máx." },
  ].filter(Boolean) as DatoClave[];
  const cambio = cambioDesdeHistorial(historial);
  const precioAprox = coche.aprox.includes("precioDesde");
  const compararHref = `/comparador-coches/?a=${coche.id}`;
  const versiones = coche.versiones;

  const FAQS = [
    {
      q: `¿Cuánto cuesta el ${nombre}?`,
      a: tp?.faqPrecio ??
        (coche.precioDesde == null
          ? `El ${nombre} aún no tiene precio confirmado para España.`
          : geo.faqPrecio ?? `El ${nombre} parte de ${fmtPrecio(coche.precioDesde)}.`),
    },
    // (24/10 unicidad) sin dato publicado no hay FAQ de autonomía
    ...(coche.autonomiaKm == null && !tp?.faqAutonomia
      ? []
      : [
          {
            q: tp?.faqPreguntaAutonomia ?? `¿Cuál es la autonomía del ${nombre}?`,
            a: tp?.faqAutonomia ??
              `Homologa ${fmtKm(coche.autonomiaKm)}${/híbrido|enchufable|autonomía extendida/i.test(coche.tipo) ? " en modo eléctrico" : ""}${coche.cicloAutonomia === "CLTC" ? " (ciclo chino CLTC)" : /híbrido|enchufable|autonomía extendida/i.test(coche.tipo) ? "" : " (WLTP)"}.`,
          },
        ]),
    {
      q: `¿Cuánto maletero tiene el ${nombre}?`,
      a: tp?.faqMaletero ??
        (coche.maleteroL == null
          ? `El volumen de maletero del ${nombre} no está publicado por una fuente fiable: lo añadiremos en cuanto haya dato oficial.`
          : `El ${nombre} ofrece ${fmtL(coche.maleteroL)} de maletero.`),
    },
    ...(coche.etiquetaDgt
      ? [
          {
            q: tp?.faqPreguntaEtiqueta ?? `¿Qué etiqueta DGT lleva el ${nombre}?`,
            a: tp?.faqEtiqueta ?? (sinTarifaEspana(coche)
              ? `Al ${nombre} le correspondería la etiqueta ${coche.etiquetaDgt === "Cero" ? "CERO" : coche.etiquetaDgt} por su motorización (criterios DGT); aún no tiene tarifa oficial en España.`
              : `El ${nombre} tiene etiqueta DGT «${coche.etiquetaDgt}».`),
          },
        ]
      : []),
    // 20/10/2026 (informe Niky): esta FAQ solo se muestra si el botón existe de
    // verdad (tieneBlog). Antes prometía «Leer el análisis completo» también en
    // fichas sin artículo (Tesla Model 3 base, Adria Matrix Supreme…).
    ...(tieneBlog
      ? [
          {
            q: tp?.faqPreguntaAnalisis ?? `¿Dónde puedo leer el análisis completo del ${nombre}?`,
            a: propio(tp, "faqAnalisis", `Pulsa «Leer nuestro análisis».`),
          },
        ]
      : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Car",
        ...productoFicha({
          nombre,
          marca: coche.marca,
          modelo: coche.modelo,
          slug: coche.id,
          image: seoImage,
          url: `https://recurretumulta.online/coches/${coche.id}/`,
          descripcion: geo.frases.join(" "),
          precio: coche.precioDesde,
          precioAprox: coche.aprox.includes("precioDesde"),
          precioOrigen: PRECIO_ORIGEN[coche.id] ?? null,
          historial,
        }),
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
            name: migaSeccion.nombre,
            item: `https://recurretumulta.online${migaSeccion.url}`,
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

  // E-E-A-T 17/10/2026: fechas reales de la ficha (JSON-LD + bloque de autoría).
  const fechas = useFichaFechas(coche.id);
  useSeo({
    datePublished: fechas.publicado,
    dateModified: fechas.actualizado,
    title: tituloSeo,
    // 17/10/2026: meta con datos reales (solo se ve si titulos.csv no trae meta para la URL).
    description: metaGeo(datosGeoCoche(coche, nombre, null, PRECIO_ORIGEN[coche.id] ?? null), "Ficha técnica, etiqueta DGT, pros y contras.", anioModelo(coche.id)),
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
      <main id="ficha-pdf" className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>{" "}
          ·{" "}
          <Link to={migaSeccion.url} className="hover:underline">
            {migaSeccion.nombre}
          </Link>{" "}
          · <span className="text-gray-700">{nombre}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-8">
        <article className="min-w-0">
        <header id="ficha-cabecera" className="mt-4">
          <GaleriaFicha
            fotos={fotosTop}
            nombre={nombre}
            ajuste="cover"
            vacio={
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-5xl font-black text-gray-300">{coche.marca.charAt(0)}</span>
                <p className="text-sm font-semibold text-gray-500">Foto pendiente de verificación</p>
              </div>
            }
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {coche.marca}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {coche.tipo}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {coche.categoria}
            </span>
            {precioAprox && (
              <span
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800"
                title={`${coche.marca} aún no ha publicado el precio oficial para España: es nuestra estimación`}
              >
                Precio estimado (no oficial)
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">{nombre}</h1>
          <RespuestaRapida frases={geo.frases} />
          <FranjaPrecio
            precio={coche.precioDesde}
            aprox={precioAprox}
            cambio={cambio}
            etiqueta={coche.etiquetaDgt}
            datos={datosClave}
          />
          <p className="mt-3 text-sm text-gray-600">
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
            texto={`Ficha técnica del ${nombre}: precio, autonomía, potencia y más`}
          />
        </div>

        {/* ── La nota de Cosa (fórmula determinista sobre datos reales) ── */}
        <NotaCosa
          nombre={nombre}
          fichaId={coche.id}
          justificacion={tp?.notaCosa}
          entrada={{
            precioEur: coche.precioDesde,
            precioNoOficialEspana: sinTarifaEspana(coche),
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
        <AnalisisEditorial slug={coche.id} />

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
            <strong>≈</strong> estimación
          </p>
        </section>

        {(coche.textosPropios?.zbe || coche.etiquetaDgt) && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="ZBE de Madrid">
            <h2 className="text-xl font-extrabold text-gray-900">
              ¿Puede entrar en la ZBE de Madrid?
            </h2>
            {coche.textosPropios?.zbe ? (
              <p className="mt-3 text-gray-700">{coche.textosPropios.zbe}</p>
            ) : (
              // 26/10 (unicidad): sin texto propio, solo el dato derivado de la etiqueta DGT
              <dl className="mt-3 grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-gray-700">
                <dt className="font-semibold">Etiqueta DGT</dt>
                <dd>{coche.etiquetaDgt === "Cero" ? "CERO" : coche.etiquetaDgt}</dd>
                <dt className="font-semibold">ZBE de Madrid</dt>
                <dd>{zbeMadridCorto(coche)}</dd>
              </dl>
            )}
            <p className="mt-3 text-sm">
              <Link to="/guias/zbe-etiquetas/" className="font-semibold text-red-600 hover:underline">
                Guía ZBE y etiquetas DGT →
              </Link>
            </p>
          </section>
        )}

        <section id="precio" className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-extrabold text-gray-900">Precio y versiones</h2>
            <div className="flex flex-wrap items-center gap-2">
              <BotonCazachollos cocheId={coche.id} nombre={nombre} precioActual={coche.precioDesde ?? null} />
              <DescargarFichaPDF nombre={nombre} />
            </div>
          </div>
          {tp?.precio ? (
            <p className="mt-3 text-gray-700">{tp.precio}</p>
          ) : (
          <p className="mt-3 text-gray-700">
            {coche.precioDesde == null ? (
              <>{`El ${nombre} aún no tiene precio confirmado para España.`}</>
            ) : (
              <>
                {`El ${nombre} parte de `}
                <strong className="text-gray-900">
                  {coche.aprox.includes("precioDesde") && "≈"}
                  {fmtPrecio(coche.precioDesde)}
                </strong>
                {!coche.aprox.includes("precioDesde") && PRECIO_ORIGEN[coche.id]?.pais && PRECIO_ORIGEN[coche.id]?.priceCurrency === "EUR" && (
                  <>
                    {" "}
                    (precio oficial en {PRECIO_ORIGEN[coche.id]?.pais}
                    {PRECIO_ORIGEN[coche.id]?.pais === "Alemania" ? ", IVA alemán 19 %" : ""}; sin tarifa en España)
                  </>
                )}
                {coche.aprox.includes("precioDesde") && (
                  <>
                    {" "}
                    (estimación: {coche.marca} aún no ha publicado la tarifa oficial
                    para España; precio orientativo calculado desde el mercado de origen)
                  </>
                )}
                .
              </>
            )}{" "}
          </p>
          )}
          <TablaVersiones versiones={versiones} nombre={nombre} />
          {tieneBlog && (
            <Link
              to={hrefDesdeBlog(analisisSlug)}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              <BookOpen className="h-4 w-4" /> Versiones
            </Link>
          )}
          <p className="mt-3 text-sm text-gray-500">
            ITV:{" "}
            <Link to="/herramientas/precio-itv/" className="font-semibold text-red-600 hover:underline">
              consúltala aquí
            </Link>
          </p>
          {(() => {
            const g = garantiaDeMarca(coche.marca, "coches");
            return g && g.anios != null ? (
              <p className="mt-2 text-sm text-gray-500">
                {`🛡️ Garantía oficial ${coche.marca}: `}<strong className="text-gray-800">{`${g.anios} años${g.km ? ` / ${fmtMiles(g.km)} km` : ""}`}</strong>
                {/* 20/10/2026: cortar solo en fin de frase (". "), no en cualquier
                    punto: el split(".") truncaba «100.000 km» a «100» (Toyota). */}
                {g.nota ? <span className="text-gray-400"> ({g.nota.split(". ")[0]})</span> : null}
              </p>
            ) : null;
          })()}
          <Suspense fallback={null}>
            <HistorialPreciosLazy slug={coche.id} nombre={nombre} />
          </Suspense>
        </section>

        <Diferido>
        <Suspense fallback={null}>
          <AudienciaFichaLazy tipo="coches" slug={coche.id} nombre={nombre} img={heroOk ? heroSrc : null} />
        </Suspense>
        </Diferido>

        {coche.imagenInteriorOficial && (
          <figure className="rtm-card mt-8">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={coche.imagenInteriorOficial}
                alt={coche.creditoInteriorFoto ? `Interior del ${nombre}` : `Interior oficial del ${nombre}`}
                className="rtm-card-zoom aspect-video w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const fig = e.currentTarget.closest("figure");
                  if (fig) (fig as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-500">
              {coche.creditoInteriorFoto ? `Foto: ${coche.creditoInteriorFoto}` : `Foto de ${coche.marca}`} · Interior del {nombre}
            </figcaption>
          </figure>
        )}

        {(coche.galeria?.length ?? 0) > 0 && (
          <Suspense fallback={null}>
          <section id="fotos" className="mt-8 scroll-mt-32" aria-label="Galería de fotos">
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
              {coche.id?.startsWith("polestar-7-2028") ? <>Imagen oficial de avance de Polestar (modelo aún cubierto; previsto para 2028). Crédito: Polestar.</> : (tp?.fotos ?? <>Fotos oficiales de {coche.marca} (prensa del fabricante).</>)}
            </p>
                      </NightGallery>
</section>
          </Suspense>
        )}

        {(coche.opiniones?.length ?? 0) > 0 && (
          <section
            className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            id="opiniones"
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
            {tp?.costeNota ? (
              <p className="mt-3 text-xs text-gray-500">{tp.costeNota}</p>
            ) : (
            <p className="mt-3 text-xs text-gray-500">
              Supuestos (10/2026): 15.000 km/año
              {costeUsaLuz && (
                <>, luz a {String(coche.costeMensual.precioKwh).replace(".", ",")} €/kWh</>
              )}
              {costeUsaCombustible && (
                <>
                  {costeUsaLuz ? " y" : ","} gasolina 95 a{" "}
                  {String(coche.costeMensual.precioGasolinaL).replace(".", ",")} €/l
                </>
              )}
              . {coche.costeMensual.notas}
            </p>
            )}
          </section>
        )}

        <ProsContras pros={coche.pros} contras={coche.contras} />

        {coche.videoId && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Vídeo del modelo">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Play className="h-5 w-5 text-red-600" /> Míralo en vídeo
            </h2>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <VideoYoutube id={coche.videoId} titulo={`Vídeo del ${nombre}`} />
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
          <SeguridadEuroNCAPLayz fichaId={coche.id} nombre={nombre} inline={coche.euroncap} nota={tp?.seguridadNota} />
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
              {propio(tp, "mantenimientoIntro", `Guías paso a paso para el mantenimiento básico de tu ${nombre}, sin pasar por el taller.`)}
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
                  <VideoYoutube id={coche.mantenimientoDIY.videoTutorialUrl} titulo={coche.mantenimientoDIY.videoTutorialTitulo ?? `Tutorial de mantenimiento del ${nombre}`} />
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
                  <Link to={hrefDesdeBlog(d.slug)} className="font-semibold text-red-600 hover:underline">
                    {d.titulo} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <RivalesCarrusel tipo="coches" id={coche.id} nombre={nombre} rivales={extra.r} intro={tp?.rivalesIntro} />
        <FraseRivales id={coche.id} nombre={nombre} precio={coche.precioDesde} rivales={extra.r} texto={tp?.fraseRivales} />

        <section className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Comparar modelo">
          <Link
            to={`/comparador-coches/?a=${coche.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            <ArrowLeftRight className="h-4 w-4" /> Comparar
          </Link>
          {tieneBlog && (
            <Link
              to={hrefDesdeBlog(analisisSlug)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <BookOpen className="h-4 w-4" /> Leer nuestro análisis
            </Link>
          )}
        </section>

        {/* 26/10 (unicidad): enlaces a herramientas como navegación; la pregunta solo si la ficha tiene texto propio */}
        <nav aria-label="Herramientas relacionadas" className="mt-4 space-y-2 text-center text-sm text-gray-500">
          <p>
            {tp?.preguntaBateria ? <>{tp.preguntaBateria}{" "}</> : null}
            <Link to="/comparador-garantia-bateria/" className="font-semibold text-red-600 hover:underline">
              Ranking de garantías de batería →
            </Link>
          </p>
          <p>
            <Link to="/mejor-coche-por-presupuesto/" className="font-semibold text-red-600 hover:underline">
              Coche por presupuesto →
            </Link>
          </p>
          <p>
            {tp?.preguntaConsumo ? <>{tp.preguntaConsumo}{" "}</> : null}
            <Link to="/calculadora-autonomia-real/" className="font-semibold text-red-600 hover:underline">
              Calculadora de autonomía real →
            </Link>
          </p>
          <p>
            {tp?.preguntaZbe ? <>{tp.preguntaZbe}{" "}</> : null}
            <Link to="/calculadora-etiqueta-dgt/" className="font-semibold text-red-600 hover:underline">
              Calculadora de etiqueta DGT →
            </Link>
          </p>
        </nav>

        
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

        {/* 12/10/2026: opiniones de propietarios con fotos */}
        <div id={(coche.opiniones?.length ?? 0) > 0 ? undefined : "opiniones"} className="scroll-mt-32">
        <Suspense fallback={null}>
          <ResenasVehiculoLazy
            tipo="coches"
            slug={coche.id}
            nombre={nombre}
            onDatosSchema={setReviewsExtra}
          />
        </Suspense>
        </div>
        {/* 18/10/2026: enlazado interno a las otras versiones y fichas de la marca */}
        <OtrasFichasMarca tipo="coches" actual={coche} todas={hermanas} introVersiones={tp?.otrasVersiones} />
        </article>
        <PanelLateral
          nombre={nombre}
          precio={coche.precioDesde}
          aprox={precioAprox}
          cambio={cambio}
          compararHref={compararHref}
          alerta={<BotonCazachollos cocheId={coche.id} nombre={nombre} precioActual={coche.precioDesde ?? null} />}
          pdf={<DescargarFichaPDF nombre={nombre} />}
        />
        </div>
        {/* 18/10/2026: una sola barra inferior (comparar + WhatsApp) en lugar de CTA fijo + burbuja */}
        <BarraInferiorFicha compararHref={compararHref} precio={coche.precioDesde} aprox={precioAprox} />
      </main>
      {/* (24/10 unicidad) herramientas como enlaces cortos, fuera de main/article */}
      <nav aria-label="Herramientas" className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-4 gap-y-1 px-4 pb-6 text-sm">
        <Link to="/comparador-garantia-bateria/" className="font-semibold text-red-600 hover:underline">Garantías de batería</Link>
        <Link to="/mejor-coche-por-presupuesto/" className="font-semibold text-red-600 hover:underline">Coche por presupuesto</Link>
        <Link to="/calculadora-autonomia-real/" className="font-semibold text-red-600 hover:underline">Autonomía real</Link>
        <Link to="/calculadora-etiqueta-dgt/" className="font-semibold text-red-600 hover:underline">Etiqueta DGT</Link>
      </nav>
      <SharedFooter
        editorial={{
          ambito: "coches",
          tipo: "ficha",
          modelo: nombre,
          publicado: fechas.publicado,
          actualizado: fechas.actualizado,
          fuentePrincipal: coche.fuenteUrl ? { nombre: coche.fuenteNombre || "Fuente de los datos", url: coche.fuenteUrl } : null,
        }}
      />
    </div>
  );
}


export default function CochesFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // Carga perezosa (05/10/2026): solo el módulo de la marca de este modelo,
  // no los 3.7MB del comparador completo. La historia y EuroNCAP se precargan
  // en paralelo para que el prerender las capture (los componentes hijos las
  // leen de la caché del dynamic import).
  const [extra, setExtra] = useState<FichaExtra>({});
  const [coche, setCoche] = useState<CocheComparador | null | undefined>(undefined);
  const [hermanas, setHermanas] = useState<CocheComparador[]>([]);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      // 18/10/2026: rivales + ¿existe el análisis? (trozo pequeño) en paralelo con la ficha.
      const [c, ex] = await Promise.all([loadArrayItem<CocheComparador>("coche", slug, (x) => x.id === slug), cargarFichaExtra("coches", slug)]);
      // Mismo módulo (fichero de la marca), ya en caché: sin coste extra.
      const herm = await loadModuleArray<CocheComparador>("coche", slug);
      if (alive) setHermanas(herm);
      if (!alive) return;
      setExtra(ex);
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

  return <Ficha coche={coche} extra={extra} hermanas={hermanas} />;
}
