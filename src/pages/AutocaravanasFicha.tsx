// 19/10/2026 (merlin-rutas-cableadas): ficha de autocaravana.
// Sigue fielmente el patrón de src/pages/CochesFicha.tsx (cabecera con título,
// galería de fotos, pestañas, tabla de especificaciones, sección de
// mantenimiento/seguridad), adaptado a autocaravanas:
//   - MMA, carnet necesario, carga útil (solo si la publica la marca),
//     plazas para dormir y de viaje, dimensiones.
//   - La sección de seguridad dice honestamente que Euro NCAP no evalúa
//     autocaravanas (nunca se inventan estrellas).
// Datos: AUTOCARAVANAS (src/lib/autocaravanas/index.ts, export
// `AUTOCARAVANAS: Autocaravana[]`), generados por el agente de datos.
// Búsqueda por slug del useParams. Sin noindex: son páginas para publicar.
import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftRight,
  BedDouble,
  BookOpen,
  Fuel,
  Gauge,
  IdCard,
  Play,
  ShieldCheck,
  Users,
  Weight,
  Wrench,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { useFichaFechas } from "@/hooks/use-ficha-fechas.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { useSpotlight } from "@/components/motion.tsx";
import GaleriaFicha, { type FotoFicha } from "@/components/ficha/GaleriaFicha.tsx";
import { FranjaPrecio, PanelLateral, type DatoClave } from "@/components/ficha/CabeceraPrecio.tsx";
import PestanasFicha from "@/components/ficha/PestanasFicha.tsx";
import BarraInferiorFicha from "@/components/ficha/BarraInferiorFicha.tsx";
import ProsContras from "@/components/ficha/ProsContras.tsx";
import VideoYoutube from "@/components/ficha/VideoYoutube.tsx";
import TablaVersiones from "@/components/ficha/TablaVersiones.tsx";
import { fmtEur, fmtMiles } from "@/lib/formato.ts";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import DescargarFichaPDF from "@/components/DescargarFichaPDF.tsx";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import { tituloFichaCoche } from "@/lib/seo-titulo-ficha.ts";
import { BLOG_DE_FICHA } from "@/lib/autocaravanas-blogs.ts";
import { BLOG_POST_SLUGS } from "@/lib/blog-post-slugs.ts";
import type { Autocaravana } from "@/lib/autocaravanas-tipos.ts";
// 19/10/2026: el índice lo genera el agente de datos en
// src/lib/autocaravanas/index.ts (export AUTOCARAVANAS: Autocaravana[]).
import { AUTOCARAVANAS } from "@/lib/autocaravanas";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";

// 19/10/2026: plan de mantenimiento oficial (lazy, solo si la ficha trae el dato).
const PlanMantenimientoLazy = lazy(() => import("@/components/PlanMantenimiento.tsx"));

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
const fmtDimensiones = (a: Autocaravana) =>
  a.largoMm == null || a.anchoMm == null || a.altoMm == null
    ? "—"
    : `${fmtMiles(a.largoMm)} × ${fmtMiles(a.anchoMm)} × ${fmtMiles(a.altoMm)} mm`;
const fmtConsumo = (a: Autocaravana) =>
  a.consumo == null
    ? "—"
    : `${String(a.consumo).replace(".", ",")} ${a.consumoUnidad ?? ""}`.trim();

// Carnets DGT según MMA (criterios oficiales DGT).
const CARNETS: Record<string, string> = {
  B: "B · turismos y furgonetas hasta 3.500 kg de MMA",
  B96: "B96 · conjunto vehículo + remolque de 3.500 a 4.250 kg",
  BE: "BE · conjunto con remolque pesado (vehículo tractor hasta 3.500 kg)",
  C1: "C1 · vehículos de 3.500 a 7.500 kg de MMA",
  C: "C · vehículos de más de 3.500 kg de MMA",
};
const textoCarnet = (a: Autocaravana): string | null =>
  a.carnetNecesario == null ? null : (CARNETS[a.carnetNecesario] ?? a.carnetNecesario);
const fmtCarnet = (a: Autocaravana) => textoCarnet(a) ?? "—";

type Fila = { campo: string; label: string; get: (a: Autocaravana) => string };

const FILAS: Fila[] = [
  { campo: "precioDesde", label: "Precio desde", get: (a) => fmtPrecio(a.precioDesde) },
  { campo: "mmaKg", label: "MMA (masa máxima autorizada)", get: (a) => fmtKg(a.mmaKg) },
  { campo: "carnetNecesario", label: "Carnet necesario", get: fmtCarnet },
  // 19/10/2026: la carga útil solo se muestra si la publica la marca (nunca calculada).
  { campo: "cargaUtilKg", label: "Carga útil", get: (a) => fmtKg(a.cargaUtilKg ?? null) },
  { campo: "plazas", label: "Plazas de viaje", get: (a) => fmtPlazas(a.plazas) },
  { campo: "plazasDormir", label: "Plazas para dormir", get: (a) => fmtPlazas(a.plazasDormir ?? null) },
  { campo: "dimensiones", label: "Dimensiones (L×An×Al)", get: fmtDimensiones },
  { campo: "pesoKg", label: "Peso (en orden de marcha)", get: (a) => fmtKg(a.pesoKg) },
  { campo: "potenciaCv", label: "Potencia", get: (a) => fmtCv(a.potenciaCv) },
  { campo: "parNm", label: "Par máximo", get: (a) => fmtNm(a.parNm) },
  { campo: "consumo", label: "Consumo (WLTP)", get: fmtConsumo },
  { campo: "autonomiaKm", label: "Autonomía", get: (a) => fmtKm(a.autonomiaKm) },
  { campo: "bateriaKwh", label: "Batería", get: (a) => fmtKwh(a.bateriaKwh) },
  { campo: "cargaRapidaKw", label: "Carga rápida (DC)", get: (a) => fmtKw(a.cargaRapidaKw) },
  { campo: "maleteroL", label: "Maletero / garaje", get: (a) => fmtL(a.maleteroL) },
  { campo: "ceroCien", label: "0-100 km/h", get: (a) => fmtS(a.ceroCien) },
  { campo: "velocidadMax", label: "Velocidad máxima", get: (a) => fmtKmh(a.velocidadMax) },
  { campo: "traccion", label: "Tracción", get: (a) => a.traccion ?? "—" },
  { campo: "emisionesCo2", label: "Emisiones CO₂", get: (a) => fmtCo2(a.emisionesCo2) },
  { campo: "etiquetaDgt", label: "Etiqueta DGT", get: (a) => a.etiquetaDgt || "—" },
  {
    campo: "garantiaBateria",
    label: "Garantía de batería",
    get: (a) =>
      a.garantiaBateriaAnos == null
        ? "No publicada"
        : `${a.garantiaBateriaAnos} años / ${
            a.garantiaBateriaKm != null ? fmtMiles(a.garantiaBateriaKm) + " km" : "km no publicados"
          }${a.garantiaBateriaDegradacionPct != null ? ` (mín. ${a.garantiaBateriaDegradacionPct} %)` : ""}`,
  },
];

function Ficha({ auto }: { auto: Autocaravana }) {
  const nombre = `${auto.marca} ${auto.modelo}`;
  const slug = auto.id;
  const urlFicha = `https://recurretumulta.online/autocaravanas/${slug}/`;
  const spotRef = useSpotlight<HTMLElement>();

  const [heroSrc, setHeroSrc] = useState(auto.imagenOficial);
  // heroOk=false cuando ni la foto oficial ni la de respaldo existen en disco:
  // se oculta el hero y se muestra el aviso "foto pendiente".
  const [heroOk, setHeroOk] = useState(true);

  // Si la foto oficial (-oficial.webp) no existe en disco, se usa la imagen
  // de respaldo (-hero.webp); si tampoco existe, se oculta el hero.
  useEffect(() => {
    let viva = true;
    setHeroOk(true);
    const oficial = auto.imagenOficial || "";
    const respaldo = auto.imagen && auto.imagen !== oficial ? auto.imagen : "";
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
  }, [auto.imagenOficial, auto.imagen]);

  // Imagen para OG/Twitter/schema: la del hero si existe; si no, undefined y el
  // hook useSeo usa el logo por defecto (nunca una URL rota).
  const seoImage = heroOk && heroSrc ? `https://recurretumulta.online${heroSrc}` : undefined;

  // Galería superior: hero válida + interior oficial + galería oficial.
  const fotosTop: FotoFicha[] = [
    ...(heroOk && heroSrc ? [{ src: heroSrc, alt: `Foto de la ${nombre}` }] : []),
    ...(auto.imagenInteriorOficial ? [{ src: auto.imagenInteriorOficial, alt: `Interior oficial de la ${nombre}` }] : []),
    ...(auto.galeria ?? []).map((f) => ({ src: f.src, alt: f.alt, ancho: f.ancho, alto: f.alto })),
  ].filter((f, i, a) => a.findIndex((g) => g.src === f.src) === i);

  const datosClave: DatoClave[] = [
    auto.mmaKg != null && { icono: <Weight className="h-5 w-5" />, valor: fmtKg(auto.mmaKg), label: "MMA" },
    auto.plazasDormir != null && { icono: <BedDouble className="h-5 w-5" />, valor: fmtPlazas(auto.plazasDormir), label: "Para dormir" },
    auto.plazas != null && { icono: <Users className="h-5 w-5" />, valor: `${auto.plazas} plazas`, label: "De viaje" },
    auto.consumo != null && { icono: <Fuel className="h-5 w-5" />, valor: fmtConsumo(auto), label: "Consumo WLTP" },
  ].filter(Boolean) as DatoClave[];

  const precioAprox = auto.aprox.includes("precioDesde");
  // 22/10/2026 (v4.5.5): no existe comparador de autocaravanas: la ruta
  // /comparador-autocaravanas/ daba 404 (auditoría del vivo v4.5.4, frente B).
  // Misma solución que CaravanasFicha (20/10): el botón lleva al índice de la
  // sección, donde están el resto de modelos con precio y datos a la vista.
  const compararHref = `/autocaravanas/`;
  // 22/10/2026 (v4.5.5, frente D): botón visible al análisis del blog en el
  // HTML servido. La auditoría del vivo v4.5.4 contó 240 fichas RV con
  // artículo y sin enlace visible: estas plantillas no renderizaban el botón.
  // Candidatos por orden: analisisSlug de la ficha, mapa BLOG_DE_FICHA o el
  // propio id; solo se enlaza si el post existe en el registro del blog.
  const analisisSlug = [auto.analisisSlug, BLOG_DE_FICHA[auto.id], auto.id]
    .find((s): s is string => !!s && BLOG_POST_SLUGS.has(s));
  const tieneBlog = analisisSlug != null;
  const hermanas = AUTOCARAVANAS.filter((a) => a.marca === auto.marca && a.id !== slug).slice(0, 6);

  const carnet = textoCarnet(auto);
  const FAQS = [
    {
      q: `¿Cuánto cuesta la ${nombre}?`,
      a:
        auto.precioDesde == null
          ? `La ${nombre} aún no tiene precio confirmado para España: lo publicaremos en cuanto la marca lo anuncie.`
          : `La ${nombre} parte de ${fmtPrecio(auto.precioDesde)}${precioAprox ? " (estimación: la marca aún no ha publicado la tarifa oficial para España)" : ""}. El detalle de versiones está en la tabla de precio y versiones.`,
    },
    {
      q: `¿Qué carnet necesito para conducir la ${nombre}?`,
      a:
        carnet == null
          ? `Todavía no tenemos un dato fiable del carnet necesario para la ${nombre}: depende de la MMA de la versión concreta que compres. Como referencia, con el carnet B puedes llevar autocaravanas de hasta 3.500 kg de MMA.`
          : `Necesitas el carnet ${carnet}. Ojo: verifica siempre la MMA de la versión concreta que compres, porque el carnet exigible depende de ella.`,
    },
    {
      q: `¿Cuántas personas pueden dormir y viajar en la ${nombre}?`,
      a:
        auto.plazas == null && auto.plazasDormir == null
          ? `Las plazas homologadas de la ${nombre} no están publicadas por una fuente fiable: las añadiremos en cuanto haya dato oficial.`
          : `Homologa ${auto.plazas ?? "—"} plazas de viaje${auto.plazasDormir != null ? ` y ${auto.plazasDormir} plazas para dormir` : ", aunque el número de plazas para dormir no está publicado por una fuente fiable"}. Recuerda: durante la marcha solo se puede viajar en las plazas con cinturón homologadas.`,
    },
    {
      q: `¿Cuánto mide la ${nombre}?`,
      a:
        auto.largoMm == null || auto.anchoMm == null || auto.altoMm == null
          ? `Las dimensiones de la ${nombre} no están publicadas por una fuente fiable: las añadiremos en cuanto haya dato oficial.`
          : `Mide ${fmtDimensiones(auto)}. Ten en cuenta la altura si vas a entrar en parkings cubiertos o pasar bajo puentes.`,
    },
    ...(auto.etiquetaDgt
      ? [
          {
            q: `¿Qué etiqueta DGT lleva la ${nombre}?`,
            a:
              auto.etiquetaDgt === "Cero"
                ? `La ${nombre} tiene etiqueta DGT «Cero» y puede circular por todas las ZBE sin restricciones, incluida la zona de especial protección de Distrito Centro.`
                : auto.etiquetaDgt === "ECO"
                  ? `La ${nombre} tiene etiqueta DGT «ECO»: puede circular por la ZBE de Madrid en condiciones normales, aunque en episodios de alta contaminación algunas ciudades restringen a los ECO.`
                  : `La ${nombre} tiene etiqueta DGT «${auto.etiquetaDgt}»: puede circular por la ZBE de Madrid, pero para entrar en la zona de especial protección de Distrito Centro necesita aparcar en un parking autorizado o encajar en uno de los supuestos de la ordenanza.`,
          },
        ]
      : []),
    {
      q: `¿Es segura la ${nombre}? ¿Tiene estrellas Euro NCAP?`,
      a: `Euro NCAP no evalúa autocaravanas: el programa europeo de seguridad solo somete a pruebas de choque a turismos y algunos comerciales ligeros, así que no existen valoraciones oficiales de estrellas para este modelo ni para ninguna autocaravana.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Vehicle",
        name: nombre,
        manufacturer: { "@type": "Organization", name: auto.marca },
        model: auto.modelo,
        url: urlFicha,
        ...(seoImage ? { image: seoImage } : {}),
        description: auto.descripcion
          ? auto.descripcion.replace(/\s+/g, " ").slice(0, 300)
          : `Ficha técnica de la ${nombre}: MMA, carnet necesario, plazas para dormir y de viaje, dimensiones y precio.`,
        ...(auto.precioDesde != null && {
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: auto.precioDesde,
          },
        }),
        ...(auto.mmaKg != null && {
          weight: {
            "@type": "QuantitativeValue",
            value: auto.mmaKg,
            unitText: "kg",
          },
        }),
        ...(auto.plazas != null && { numberOfSeats: auto.plazas }),
        ...(auto.potenciaCv != null && {
          vehicleEngine: {
            "@type": "EngineSpecification",
            enginePower: {
              "@type": "QuantitativeValue",
              value: auto.potenciaCv,
              unitText: "CV",
            },
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
            name: "Autocaravanas",
            item: "https://recurretumulta.online/autocaravanas/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: nombre,
            item: urlFicha,
          },
        ],
      },
    ],
  };

  // SEO 19/10/2026: misma fórmula ganadora que las fichas de coches
  // ([Keyword] + [número] + [beneficio] + [(año)], ≤60 car.). SIN noindex:
  // son páginas para publicar e indexar.
  const tituloSeo = tituloFichaCoche(nombre, {
    tipo: auto.tipo,
    potenciaCv: auto.potenciaCv,
    autonomiaKm: auto.autonomiaKm,
    precioDesde: auto.precioDesde,
  });
  const descripcionMeta = auto.descripcion
    ? auto.descripcion.replace(/\s+/g, " ").slice(0, 152)
    : `Ficha técnica de la ${nombre}: MMA, carnet necesario, plazas para dormir y de viaje, dimensiones y precio.`;

  // E-E-A-T 17/10/2026: fechas reales de la ficha (JSON-LD + bloque de autoría).
  const fechas = useFichaFechas(slug);
  useSeo({
    datePublished: fechas.publicado,
    dateModified: fechas.actualizado,
    title: tituloSeo,
    description: descripcionMeta,
    canonical: `/autocaravanas/${slug}/`,
    image: seoImage,
    type: "article",
    keywords: [
      nombre,
      `${nombre} ficha técnica`,
      `${nombre} precio`,
      `${nombre} carnet necesario`,
      `${nombre} medidas`,
      `${nombre} plazas`,
    ],
    schema: jsonLd,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main id="ficha-pdf" className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        {/* 19/10/2026: migas visuales con el componente breadcrumb de la UI. */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/autocaravanas/">Autocaravanas</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{nombre}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-8">
        <article className="min-w-0">
        <header id="ficha-cabecera" className="mt-4">
          <GaleriaFicha
            fotos={fotosTop}
            nombre={nombre}
            ajuste="cover"
            vacio={
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-5xl font-black text-gray-300">{auto.marca.charAt(0)}</span>
                <p className="text-sm font-semibold text-gray-500">Foto pendiente de verificación</p>
              </div>
            }
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {auto.marca}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {auto.tipo}
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
              {auto.categoria}
            </span>
            {auto.carnetNecesario && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-800">
                <IdCard className="h-3.5 w-3.5" /> Carnet {auto.carnetNecesario}
              </span>
            )}
            {precioAprox && (
              <span
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800"
                title={`${auto.marca} aún no ha publicado el precio oficial para España: es nuestra estimación`}
              >
                Precio estimado (no oficial)
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">{nombre}</h1>
          <FranjaPrecio
            precio={auto.precioDesde}
            aprox={precioAprox}
            cambio={null}
            etiqueta={auto.etiquetaDgt}
            datos={datosClave}
          />
          <p className="mt-3 text-sm text-gray-600">
            Fuente:{" "}
            {auto.fuenteUrl ? (
              <a
                href={auto.fuenteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {auto.fuenteNombre ?? "web oficial"}
              </a>
            ) : (
              (auto.fuenteNombre ?? "web oficial de la marca")
            )}
            .
          </p>
        </header>

        <PestanasFicha
          secciones={[
            { id: "ficha", label: "Ficha técnica" },
            { id: "descripcion", label: "Descripción" },
            { id: "curiosidades", label: "Curiosidades" },
            { id: "faq", label: "FAQ" },
          ]}
        />

        <div className="mt-4 flex justify-end">
          <CompartirBotones
            titulo={`Ficha técnica: ${nombre}`}
            texto={`Ficha técnica de la ${nombre}: MMA, carnet, plazas y precio`}
          />
        </div>

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
              {FILAS.filter((f) => { const v = f.get(auto); return v !== "—" && v !== "Sin datos" && v !== "No publicada" && !/^—/.test(v); }).map((f) => {
                const esAprox = auto.aprox.includes(f.campo);
                return (
                  <tr key={f.label} className="border-t border-gray-200/70">
                    <th className="py-2.5 pr-2 text-left font-medium text-gray-500">
                      {f.label}
                    </th>
                    <td className="py-2.5 text-right font-semibold text-gray-900">
                      <span className="inline-flex items-center gap-1">
                        {esAprox && <span title="Dato no oficial, en revisión">≈&nbsp;</span>}
                        {f.campo === "etiquetaDgt" ? (
                          auto.etiquetaDgt ? (
                            <EtiquetaDGT etiqueta={auto.etiquetaDgt} size="sm" />
                          ) : (
                            "—"
                          )
                        ) : (
                          f.get(auto)
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

        {auto.descripcion && (
          <section
            id="descripcion"
            className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label={`Descripción de la ${nombre}`}
          >
            <h2 className="text-xl font-extrabold text-gray-900">Descripción</h2>
            <div className="mt-3 space-y-3 text-gray-700">
              {auto.descripcion.split(/\n\n+/).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {auto.notas && (
              <p className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500">
                <strong className="text-gray-700">Notas:</strong> {auto.notas}
              </p>
            )}
          </section>
        )}

        {(auto.opiniones?.length ?? 0) > 0 && (
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
              {auto.opiniones!.map((o, i) => (
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

        <ProsContras pros={auto.pros} contras={auto.contras} />

        {auto.videoId && (
          <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Vídeo del modelo">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
              <Play className="h-5 w-5 text-red-600" /> Mírala en vídeo
            </h2>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <VideoYoutube id={auto.videoId} titulo={`Vídeo de la ${nombre}`} />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Vídeo:{" "}
              <a
                href={`https://www.youtube.com/watch?v=${auto.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline"
              >
                {auto.videoCanal ?? "YouTube"}
              </a>{" "}
              en YouTube
            </p>
          </section>
        )}

        {(auto.curiosidades || auto.curiosidad) && (
          <section
            id="curiosidades"
            className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label={`Curiosidades de la ${nombre}`}
          >
            <h2 className="text-xl font-extrabold text-gray-900">Curiosidades</h2>
            {auto.curiosidad && (
              <blockquote className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm text-gray-800">«{auto.curiosidad.texto}»</p>
                <footer className="mt-2 text-xs text-gray-500">
                  Fuente:{" "}
                  <a
                    href={auto.curiosidad.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-red-600 underline"
                  >
                    {auto.curiosidad.fuenteNombre ?? "ver fuente"}
                  </a>
                </footer>
              </blockquote>
            )}
            {auto.curiosidades && (
              <div className="mt-3 space-y-3 text-gray-700">
                {auto.curiosidades.split(/\n\n+/).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </section>
        )}

        <section
          id="mantenimiento"
          className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
          aria-label={`Mantenimiento de la ${nombre}`}
        >
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <Wrench className="h-5 w-5 text-red-600" /> Mantenimiento
          </h2>
          <div className="mt-3 space-y-3 text-gray-700">
            <p>
              La mecánica sigue los intervalos del fabricante del chasis (la base sobre
              la que está construida la autocaravana): respeta sus plazos de aceite,
              filtros y distribución según el manual oficial.
            </p>
            <p>
              La célula habitable necesita su propio mantenimiento anual: revisión de la
              estanqueidad de juntas, claraboyas y ventanas; estado y edad de los
              neumáticos (se recomienda sustituirlos a partir de los 6 años aunque
              conserven dibujo); revisión de la instalación de gas por personal
              cualificado; y cuidado de la batería auxiliar y del circuito de agua.
            </p>
          </div>
          {auto.planMantenimiento && (
            <Suspense fallback={null}>
              <PlanMantenimientoLazy plan={auto.planMantenimiento} nombre={nombre} />
            </Suspense>
          )}
        </section>

        <section
          id="seguridad"
          className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
          aria-label={`Seguridad de la ${nombre}`}
        >
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <ShieldCheck className="h-5 w-5 text-red-600" /> Seguridad
          </h2>
          <div className="mt-3 space-y-3 text-gray-700">
            <p>
              <strong className="text-gray-900">Euro NCAP no evalúa autocaravanas.</strong>{" "}
              El programa europeo de seguridad solo somete a pruebas de choque a turismos
              y algunos comerciales ligeros: no existen valoraciones oficiales de
              estrellas para este modelo ni para ninguna autocaravana. Cualquier
              «puntuación de seguridad» que veas publicada para una autocaravana no es
              oficial.
            </p>
            <p>
              Lo que sí puedes valorar: el equipamiento de seguridad del chasis de origen
              (airbags, control de estabilidad y asistentes a la conducción que incorpore
              la base), los cinturones de seguridad en todas las plazas de viaje
              homologadas y una distribución de la carga que respete la MMA sin
              sobrecargar el eje trasero.
            </p>
            <p>
              Durante la marcha solo pueden viajar ocupantes en las plazas con cinturón
              homologadas: las camas y el resto de la zona habitable no son plazas de
              viaje. Los niños, siempre en su sistema de retención infantil.
            </p>
          </div>
        </section>

        {(auto.precioDesde != null || (auto.versiones?.length ?? 0) > 0) && (
          <section id="precio" className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Precio y versiones">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-extrabold text-gray-900">Precio y versiones</h2>
              <DescargarFichaPDF nombre={nombre} />
            </div>
            <p className="mt-3 text-gray-700">
              {auto.precioDesde == null ? (
                <>{`La ${nombre} aún no tiene precio confirmado para España.`}</>
              ) : (
                <>
                  {`La ${nombre} parte de `}
                  <strong className="text-gray-900">
                    {auto.aprox.includes("precioDesde") && "≈"}
                    {fmtPrecio(auto.precioDesde)}
                  </strong>
                  {auto.aprox.includes("precioDesde") && (
                    <> (estimación: la marca aún no ha publicado la tarifa oficial para España)</>
                  )}
                  .
                </>
              )}
            </p>
            <TablaVersiones versiones={auto.versiones} nombre={nombre} />
          </section>
        )}

        
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

        {auto.etiquetaDgt ? (
          <p className="mt-4 text-sm text-gray-600">
            ZBE y etiquetas:{" "}
            <Link to="/guias/zbe-etiquetas/" className="font-semibold text-red-600 hover:underline">
              Guía ZBE y etiquetas DGT →
            </Link>
          </p>
        ) : null}

        {hermanas.length > 0 && (
          <section
            className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
            aria-label={`Más autocaravanas de ${auto.marca}`}
          >
            <h2 className="text-xl font-extrabold text-gray-900">Más autocaravanas de {auto.marca}</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {hermanas.map((h) => (
                <li key={h.id}>
                  <Link
                    to={`/autocaravanas/${h.id}/`}
                    className="block rounded-2xl border border-gray-200 px-4 py-3 transition hover:border-red-300 hover:bg-red-50"
                  >
                    <span className="font-bold text-gray-900">{h.marca} {h.modelo}</span>
                    {h.precioDesde != null && (
                      <span className="mt-1 block text-sm text-gray-500">desde {fmtPrecio(h.precioDesde)}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Comparar modelo">
          <Link
            to={compararHref}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            <ArrowLeftRight className="h-4 w-4" /> Comparar con otro modelo
          </Link>
          <Link
            to="/autocaravanas/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            <BookOpen className="h-4 w-4" /> Ver todas las autocaravanas
          </Link>
          {tieneBlog && (
            <Link
              to={`/blog/${analisisSlug}/`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-700 sm:col-span-2"
            >
              <BookOpen className="h-4 w-4" /> Leer nuestro análisis
            </Link>
          )}
        </section>

        </article>
        <PanelLateral
          nombre={nombre}
          precio={auto.precioDesde}
          aprox={precioAprox}
          cambio={null}
          compararHref={compararHref}
          alerta={null}
          pdf={<DescargarFichaPDF nombre={nombre} />}
        />
        </div>
        <BarraInferiorFicha compararHref={compararHref} precio={auto.precioDesde} aprox={precioAprox} />
      </main>
      <SharedFooter
        editorial={{
          ambito: "general",
          tipo: "ficha",
          modelo: nombre,
          publicado: fechas.publicado,
          actualizado: fechas.actualizado,
          fuentePrincipal: auto.fuenteUrl ? { nombre: auto.fuenteNombre || "Fuente de los datos", url: auto.fuenteUrl } : null,
        }}
      />
    </div>
  );
}

export default function AutocaravanasFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // 19/10/2026: datos estáticos (el índice lo genera el agente de datos);
  // la búsqueda es síncrona por id (slug del artículo).
  const auto = AUTOCARAVANAS.find((a) => a.id === slug) ?? null;

  useEffect(() => {
    delete document.body.dataset.pageReady;
    document.body.dataset.pageReady = "1";
    return () => {
      delete document.body.dataset.pageReady;
    };
  }, [slug]);

  if (!auto) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-xl px-4 pb-16 pt-16 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Modelo no encontrado</h1>
          <p className="mt-3 text-gray-600">
            No hay ninguna autocaravana con esa dirección en la ficha técnica. Prueba con el listado.
          </p>
          <Link
            to="/autocaravanas/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Ver todas las autocaravanas
          </Link>
        </main>
        <SharedFooter />
      </div>
    );
  }

  return <Ficha auto={auto} />;
}
