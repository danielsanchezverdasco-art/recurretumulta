import { useMemo, useRef, useState } from "react";
import { fmtMiles } from "@/lib/formato.ts";
import { Link } from "react-router-dom";
import { Bike, Info } from "lucide-react";
import { useSeo, canonicalComparador } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import FlipCard from "@/components/FlipCardSimple.tsx";
import HeroVS from "@/components/HeroVS.tsx";
import BarraComparar, { type ItemComparar } from "@/components/BarraComparar.tsx";
import DueloVS, { type FilaDuelo, type ItemDuelo } from "@/components/DueloVS.tsx";
import { elegirCosaIndice, type NotaCosaInput } from "@/lib/cosa.ts";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import {
  MOTOS_COMPARADOR,
  MOTOS_PUBLICADAS,
  type MotoComparador,
} from "@/lib/comparador-motos-data.ts";

const FAQS = [
  {
    q: "¿De dónde salen los datos del comparador de motos?",
    a: "De las fichas técnicas oficiales de cada marca (webs españolas) y de medios especializados. Si un dato no está publicado por ninguna fuente fiable, aparece como «—» en vez de inventarlo.",
  },
  {
    q: "¿La autonomía es comparable entre modelos?",
    a: "La mayoría de marcas publican autonomía según el ciclo WMTC; algunas dan una cifra «declarada» propia, más optimista. En la ficha de cada moto indicamos el ciclo usado para que compares con criterio.",
  },
  {
    q: "¿Qué carnet necesito para una moto eléctrica?",
    a: "Depende de la potencia: hasta 4 kW (50 cc equivalentes) vale el AM; hasta 11 kW, el A1 (o el B con 3 años de antigüedad); hasta 35 kW, el A2; por encima, el A. Cada ficha indica el carnet necesario.",
  },
  {
    q: "¿Todas las motos eléctricas llevan etiqueta Cero?",
    a: "Sí: al no emitir CO₂ por el escape, todas las motos 100 % eléctricas tienen etiqueta Cero de la DGT y entran en todas las ZBE sin restricciones.",
  },
  {
    q: "¿Cómo se decide qué moto «gana» cada fila?",
    a: "Con criterio de comprador: gana el precio más bajo, la mayor autonomía, la mayor potencia, la aceleración más rápida y el menor peso. Es una ayuda visual, no una sentencia.",
  },
  {
    q: "¿Vais a añadir más motos?",
    a: "Sí. La base arranca con las eléctricas más vendidas y buscadas en España y crece con cada novedad. Si echas en falta un modelo, escríbenos por WhatsApp y lo priorizamos.",
  },
];

/* ── Formato de cifras: null = "—", estimación = "≈" ── */
const fmtPrecio = (v: number | null) =>
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  v == null ? "—" : fmtMiles(v) + " €";
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtS = (v: number | null) =>
  v == null ? "—" : String(v).replace(".", ",") + " s";
const fmtKmh = (v: number | null) => (v == null ? "—" : v + " km/h");
const fmtKwh = (v: number | null) => (v == null ? "—" : String(v).replace(".", ",") + " kWh");
const fmtKg = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " kg";
const fmtAutonomia = (m: MotoComparador) => {
  if (m.autonomiaKm == null) return "—";
  const ciclo = m.autonomiaCiclo ? ` (${m.autonomiaCiclo})` : "";
  return `${m.autonomiaKm} km${ciclo}`;
};
const fmtPotencia = (m: MotoComparador) => {
  if (m.potenciaKw == null && m.potenciaCv == null) return "—";
  const kw = m.potenciaKw != null ? `${String(m.potenciaKw).replace(".", ",")} kW` : "";
  const cv = m.potenciaCv != null ? `${String(m.potenciaCv).replace(".", ",")} CV` : "";
  return [kw, cv].filter(Boolean).join(" · ");
};
/** "≈" si el campo está marcado como estimación en el array `aprox`. */
const fmtAprox = (m: MotoComparador, campo: string, texto: string) =>
  m.aprox.includes(campo) && texto !== "—" ? "≈ " + texto : texto;

/** Código de carnet base (AM|A1|A2|A|B|COMP) ignorando notas entre paréntesis. */
const carnetBase = (m: MotoComparador): string => {
  const s = m.carnet.trim().toUpperCase().replace(/-/g, "");
  if (s.startsWith("AM")) return "AM";
  if (s.startsWith("A1")) return "A1";
  if (s.startsWith("A2")) return "A2";
  if (s === "B") return "B"; // ej. scooter eléctrico homologado para B
  if (s.startsWith("COMP")) return "COMP"; // competición: solo circuito
  return "A";
};

/** Extrae el código de carnet (AM|A1|A2|A) ignorando las notas entre paréntesis. */
const codigoCarnet = (m: MotoComparador): string => carnetBase(m);

/** 1 kW = 1,3596 CV (conversión pura de unidades, mismo factor que usa la tarjeta). */
const CV_POR_KW = 1.3596;
type UnidadPotencia = "kW" | "CV";

/** Opciones del filtro "Potencia mínima", según la unidad elegida. */
const POT_OPCIONES: Record<UnidadPotencia, { v: number; etiqueta: string }[]> = {
  kW: [
    { v: 4, etiqueta: "4+ kW" },
    { v: 11, etiqueta: "11+ kW" },
    { v: 35, etiqueta: "35+ kW" },
  ],
  CV: [
    { v: 15, etiqueta: "15+ CV" },
    { v: 50, etiqueta: "50+ CV" },
    { v: 100, etiqueta: "100+ CV" },
  ],
};

/**
 * Potencia de una moto en la unidad elegida. Usa el campo verificado de esa
 * unidad; si falta, convierte el otro campo (conversión matemática, no dato
 * inventado). null si no hay dato de potencia.
 */
const potenciaEnUnidad = (m: MotoComparador, unidad: UnidadPotencia): number | null =>
  unidad === "kW"
    ? m.potenciaKw ?? (m.potenciaCv != null ? m.potenciaCv / CV_POR_KW : null)
    : m.potenciaCv ?? (m.potenciaKw != null ? m.potenciaKw * CV_POR_KW : null);

/* ── Rangos de cilindrada (solo combustión; las eléctricas tienen cilindradaCc null) ── */
const RANGOS_CC: { id: string; etiqueta: string; min: number; max: number }[] = [
  { id: "50", etiqueta: "Hasta 50 cc", min: 0, max: 50 },
  { id: "125", etiqueta: "51–125 cc", min: 51, max: 125 },
  { id: "300", etiqueta: "126–300 cc", min: 126, max: 300 },
  { id: "600", etiqueta: "301–600 cc", min: 301, max: 600 },
  { id: "1000", etiqueta: "601–1.000 cc", min: 601, max: 1000 },
  { id: "mas", etiqueta: "Más de 1.000 cc", min: 1001, max: Infinity },
];

/**
 * ¿Se puede llevar esta moto con ese permiso? (normativa española)
 * AM: ciclomotores hasta 50 cc · A1: hasta 125 cc y 11 kW · A2: hasta 35 kW · A: todas.
 * Se usa el carnet verificado de cada ficha (ya refleja la normativa); "B"
 * equivale a nivel A1 (eléctrica ≤11 kW conducible con B).
 */
const permisoSuficiente = (m: MotoComparador, permiso: string): boolean => {
  const b = carnetBase(m);
  if (permiso === "AM") return b === "AM";
  if (permiso === "A1") return b === "AM" || b === "A1" || b === "B";
  if (permiso === "A2") return b === "AM" || b === "A1" || b === "A2" || b === "B";
  return true; // A: todas, incluida competición
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Comparador de motos eléctricas: elige dos modelos y decide",
      url: "https://recurretumulta.online/comparador-motos/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      description:
        "Compara dos motos eléctricas lado a lado antes de comprar: ficha técnica, precio, autonomía, potencia, carnet necesario, pros y contras, y vídeo con crédito al canal.",
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
        { "@type": "ListItem", position: 2, name: "Fichas Técnicas", item: "https://recurretumulta.online/fichas-tecnicas/" },
        { "@type": "ListItem", position: 3, name: "Comparador de motos eléctricas", item: "https://recurretumulta.online/comparador-motos/" },
      ],
    },
  ],
};

/* ── Métricas del duelo cara a cara ── */
type MetricaDuelo = {
  etiqueta: string;
  fmt: (m: MotoComparador) => string;
  num: (m: MotoComparador) => number | null;
  mejor: "mayor" | "menor";
};

const METRICAS_DUELO: MetricaDuelo[] = [
  { etiqueta: "Precio", fmt: (m) => fmtAprox(m, "precioDesde", fmtPrecio(m.precioDesde)), num: (m) => m.precioDesde, mejor: "menor" },
  { etiqueta: "Potencia", fmt: fmtPotencia, num: (m) => m.potenciaKw, mejor: "mayor" },
  { etiqueta: "Autonomía", fmt: fmtAutonomia, num: (m) => m.autonomiaKm, mejor: "mayor" },
  { etiqueta: "0–50 km/h", fmt: (m) => fmtAprox(m, "ceroCincuenta", fmtS(m.ceroCincuenta)), num: (m) => m.ceroCincuenta, mejor: "menor" },
  { etiqueta: "Peso", fmt: (m) => fmtAprox(m, "pesoKg", fmtKg(m.pesoKg)), num: (m) => m.pesoKg, mejor: "menor" },
  { etiqueta: "Batería", fmt: (m) => fmtAprox(m, "bateriaKwh", fmtKwh(m.bateriaKwh)), num: (m) => m.bateriaKwh, mejor: "mayor" },
];

type Orden = "precioAsc" | "precioDesc" | "potDesc" | "autDesc";

export default function ComparadorMotosPage() {
  useSeo({
    title: "Comparador motos eléctricas 2026: elige la mejor",
    description:
      "Compara dos motos eléctricas lado a lado: ficha técnica, precio, autonomía, carnet necesario y vídeo. Decide qué moto eléctrica comprar en 2026.",
    canonical: canonicalComparador("/comparador-motos"),
    schema: jsonLd,
  });

  const [q, setQ] = useState("");
  const [categoria, setCategoria] = useState("todos");
  const [carnet, setCarnet] = useState("todos");
  const [rangoCc, setRangoCc] = useState("todos");
  const [permiso, setPermiso] = useState("todos");
  const [precioMax, setPrecioMax] = useState(0);
  const [potMin, setPotMin] = useState(0);
  // Conmutador kW/CV del filtro de potencia (11/10/2026): los datos traen ambas
  // unidades (potenciaKw y potenciaCv), así que el usuario elige en cuál filtrar.
  const [potUnidad, setPotUnidad] = useState<UnidadPotencia>("kW");
  const [autMin, setAutMin] = useState(0);
  const [orden, setOrden] = useState<Orden>("precioAsc");
  // Paginación (07/10/2026, velocidad): no renderizar las 674 fichas de golpe.
  const [visibleCount, setVisibleCount] = useState(24);
  const PAGE_SIZE = 24;
  const [sel, setSel] = useState<string[]>([]);
  const [giradas, setGiradas] = useState<Record<string, boolean>>({});
  const [dueloVisible, setDueloVisible] = useState(false);
  const dueloRef = useRef<HTMLDivElement>(null);

  const porId = useMemo(() => new Map(MOTOS_COMPARADOR.map((m) => [m.id, m])), []);
  const categorias = useMemo(
    () => [...new Set(MOTOS_PUBLICADAS.map((m) => m.categoria))],
    []
  );

  const filtradas = useMemo(() => {
    const texto = q.trim().toLowerCase();
    const rango = RANGOS_CC.find((r) => r.id === rangoCc);
    const lista = MOTOS_PUBLICADAS.filter(
      (m) =>
        (categoria === "todos" || m.categoria === categoria) &&
        (carnet === "todos" || codigoCarnet(m) === carnet) &&
        (rangoCc === "todos" ||
          (m.cilindradaCc != null && m.cilindradaCc >= rango!.min && m.cilindradaCc <= rango!.max)) &&
        (permiso === "todos" || permisoSuficiente(m, permiso)) &&
        (precioMax === 0 || (m.precioDesde != null && m.precioDesde <= precioMax)) &&
        (potMin === 0 || (potenciaEnUnidad(m, potUnidad) ?? -1) >= potMin) &&
        (autMin === 0 || (m.autonomiaKm != null && m.autonomiaKm >= autMin)) &&
        (texto === "" ||
          `${m.marca} ${m.modelo} ${m.version}`.toLowerCase().includes(texto))
    );
    const ultimos = (v: number | null) => (v == null ? -1 : v);
    if (orden === "precioAsc") lista.sort((a, b) => (a.precioDesde ?? Infinity) - (b.precioDesde ?? Infinity));
    else if (orden === "precioDesc") lista.sort((a, b) => (b.precioDesde ?? -1) - (a.precioDesde ?? -1));
    else if (orden === "potDesc") lista.sort((a, b) => ultimos(potenciaEnUnidad(b, potUnidad)) - ultimos(potenciaEnUnidad(a, potUnidad)));
    else if (orden === "autDesc") lista.sort((a, b) => ultimos(b.autonomiaKm) - ultimos(a.autonomiaKm));
    return lista;
  }, [q, categoria, carnet, rangoCc, permiso, precioMax, potMin, potUnidad, autMin, orden]);

  const visibles = filtradas.slice(0, visibleCount);

  const toggleCompare = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (sel.includes(id)) {
      const next = sel.filter((x) => x !== id);
      setSel(next);
      if (next.length < 2) setDueloVisible(false);
    } else {
      if (sel.length >= 3) return;
      setSel([...sel, id]);
    }
  };

  const quitar = (id: string) => {
    const next = sel.filter((x) => x !== id);
    setSel(next);
    if (next.length < 2) setDueloVisible(false);
  };

  const verDuelo = () => {
    if (sel.length < 2) return;
    setDueloVisible(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        const reduce =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        dueloRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }, 60);
    });
  };

  /* ── Datos para la barra sticky ── */
  const itemsBarra: ItemComparar[] = sel
    .map((id) => porId.get(id))
    .filter((m): m is MotoComparador => m != null)
    .map((m) => ({
      id: m.id,
      etiqueta: `${m.marca} ${m.modelo}`,
      imagen: m.imagen ?? undefined,
    }));

  /* ── Datos para el duelo cara a cara ── */
  const motosDuelo = sel
    .map((id) => porId.get(id))
    .filter((m): m is MotoComparador => m != null);
  // ── "La elección de Cosa": mejor nota determinista entre los 2 del duelo ──
  // (criterio honesto y automático, ver lib/cosa.ts; las motos no tienen test
  // EuroNCAP y su peso se reparte sin penalizar)
  const entradaMotoCosa = (m: MotoComparador): NotaCosaInput => ({
    precioEur: m.precioDesde,
    potenciaCv: m.potenciaCv ?? (m.potenciaKw != null ? m.potenciaKw * 1.36 : null),
    etiquetaDgt: m.etiquetaDgt,
    estrellasEuroNCAP: null,
    autonomiaKm: m.autonomiaKm,
    pesoKg: m.pesoKg,
  });
  const eleccionDueloId =
    motosDuelo.length >= 2
      ? motosDuelo[elegirCosaIndice(entradaMotoCosa(motosDuelo[0]), entradaMotoCosa(motosDuelo[1]))].id
      : undefined;
  const itemsDuelo: ItemDuelo[] = motosDuelo.map((m) => ({
    id: m.id,
    titulo: `${m.marca} ${m.modelo}`,
    subtitulo: m.version,
    imagen: m.imagen ?? undefined,
  }));
  const filasDuelo: FilaDuelo[] = METRICAS_DUELO.map((met) => {
    const valores = motosDuelo.map((m) => met.fmt(m));
    const nums = motosDuelo.map((m) => met.num(m));
    let ganador: number | null = null;
    const validos = nums.filter((v): v is number => v != null);
    if (validos.length > 0) {
      const mejorValor =
        met.mejor === "mayor" ? Math.max(...validos) : Math.min(...validos);
      ganador = nums.findIndex((v) => v === mejorValor);
      if (ganador < 0) ganador = null;
    }
    const barras = nums.map((v) => {
      if (v == null || validos.length === 0) return null;
      if (met.mejor === "mayor") {
        const mx = Math.max(...validos);
        return mx > 0 ? Math.round((v / mx) * 100) : 0;
      }
      return Math.round((Math.min(...validos) / v) * 100);
    });
    return { etiqueta: met.etiqueta, valores, ganador, barras };
  });
  const puntosDuelo = motosDuelo.map((_, i) =>
    filasDuelo.filter((f) => f.ganador === i).length
  );
  const veredictoDuelo = (() => {
    if (motosDuelo.length < 2) return undefined;
    const maxPuntos = Math.max(...puntosDuelo);
    const ganadores = puntosDuelo.filter((p) => p === maxPuntos).length;
    if (ganadores > 1) {
      return `Empate técnico: ${motosDuelo.map((m) => `${m.marca} ${m.modelo}`).join(" vs ")}. Mira los puntos fuertes y débiles de cada ficha para decidir según tu uso.`;
    }
    const top = motosDuelo[puntosDuelo.indexOf(maxPuntos)];
    return `Gana el duelo: ${top.marca} ${top.modelo}`;
  })();

  const resetFiltros = () => {
    setQ("");
    setCategoria("todos");
    setCarnet("todos");
    setRangoCc("todos");
    setPermiso("todos");
    setPrecioMax(0);
    setPotMin(0);
    setPotUnidad("kW");
    setAutMin(0);
    setOrden("precioAsc");
    setVisibleCount(24);
  };

  const selectClase =
    "rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#cd001d] focus:ring-2 focus:ring-[#cd001d]/20";
  const labelClase =
    "flex flex-col gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-500";

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />

      <HeroVS
        imagen1="/media/silence-s01-ficha-tecnica-precio-1.webp"
        imagen2="/media/velca-bora-2025-ficha-tecnica-precio-2.webp"
        alt1="Silence S01, moto eléctrica"
        alt2="Velca Bora, moto eléctrica"
        titulo="Comparador de motos eléctricas"
        subtitulo="Compara precios, autonomía, potencia y carnet necesario de todas las motos eléctricas 2024-2026. Toca una tarjeta para girarla y ver todos los datos."
        busqueda={q}
        onBusqueda={(v) => { setQ(v); setVisibleCount(24); }}
        placeholderBusqueda="Busca marca o modelo… (ej. Silence, NIU)"
        stats={[
          { valor: MOTOS_PUBLICADAS.length, etiqueta: "modelos" },
          { valor: "2026", etiqueta: "actualizado" },
          { valor: "Cero", etiqueta: "etiqueta DGT" },
        ]}
        ocultarVS
      />

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 sm:px-6">
        {/* Migas de pan visibles (23/10/2026) */}
        <nav aria-label="Migas de pan" className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-gray-900">Comparador de motos</span>
        </nav>
        <div className="mb-4 flex justify-end">
          <CompartirBotones
            titulo="Comparador de motos eléctricas"
            texto="Comparador de motos eléctricas: precios, autonomía, potencia y carnet necesario"
          />
        </div>
        {/* ── Filtros ── */}
        <section aria-label="Filtros" className="flex flex-wrap items-end gap-x-3 gap-y-3">
          <label className={labelClase}>
            Categoría
            <select value={categoria} onChange={(e) => { setCategoria(e.target.value); setVisibleCount(24); }} className={selectClase}>
              <option value="todos">Todas</option>
              {categorias.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className={labelClase}>
            Carnet
            <select value={carnet} onChange={(e) => { setCarnet(e.target.value); setVisibleCount(24); }} className={selectClase}>
              <option value="todos">Todos</option>
              <option value="AM">AM</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A">A</option>
            </select>
          </label>
          <label className={labelClase}>
            Cilindrada
            <select value={rangoCc} onChange={(e) => { setRangoCc(e.target.value); setVisibleCount(24); }} className={selectClase}>
              <option value="todos">Todas</option>
              {RANGOS_CC.map((r) => (
                <option key={r.id} value={r.id}>{r.etiqueta}</option>
              ))}
            </select>
          </label>
          <label className={labelClase}>
            Mi permiso
            <select value={permiso} onChange={(e) => { setPermiso(e.target.value); setVisibleCount(24); }} className={selectClase}>
              <option value="todos">Todos</option>
              <option value="AM">AM</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A">A</option>
            </select>
          </label>
          <label className={labelClase}>
            Precio máximo
            <select value={precioMax} onChange={(e) => { setPrecioMax(Number(e.target.value)); setVisibleCount(24); }} className={selectClase}>
              <option value={0}>Sin límite</option>
              <option value={5000}>Hasta 5.000 €</option>
              <option value={8000}>Hasta 8.000 €</option>
              <option value={12000}>Hasta 12.000 €</option>
              <option value={18000}>Hasta 18.000 €</option>
            </select>
          </label>
          <label className={labelClase}>
            <span className="flex items-center justify-between gap-2">
              Potencia mínima
              <span
                role="group"
                aria-label="Unidad de potencia"
                className="inline-flex rounded-md bg-gray-100 p-0.5 normal-case tracking-normal"
              >
                {(["kW", "CV"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => { setPotUnidad(u); setPotMin(0); setVisibleCount(24); }}
                    aria-pressed={potUnidad === u}
                    className={`rounded px-2 py-0.5 text-[10px] font-bold transition ${
                      potUnidad === u
                        ? "bg-white text-[#cd001d] shadow-sm"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </span>
            </span>
            <select value={potMin} onChange={(e) => { setPotMin(Number(e.target.value)); setVisibleCount(24); }} className={selectClase}>
              <option value={0}>Sin mínimo</option>
              {POT_OPCIONES[potUnidad].map((o) => (
                <option key={o.v} value={o.v}>{o.etiqueta}</option>
              ))}
            </select>
          </label>
          <label className={labelClase}>
            Autonomía mínima
            <select value={autMin} onChange={(e) => { setAutMin(Number(e.target.value)); setVisibleCount(24); }} className={selectClase}>
              <option value={0}>Sin mínimo</option>
              <option value={80}>80+ km</option>
              <option value={100}>100+ km</option>
              <option value={150}>150+ km</option>
            </select>
          </label>
          <label className={labelClase}>
            Ordenar por
            <select value={orden} onChange={(e) => { setOrden(e.target.value as Orden); setVisibleCount(24); }} className={selectClase}>
              <option value="precioAsc">Precio: menor a mayor</option>
              <option value="precioDesc">Precio: mayor a menor</option>
              <option value="potDesc">Potencia: mayor a menor</option>
              <option value="autDesc">Autonomía: mayor a menor</option>
            </select>
          </label>
        </section>

        <p className="mt-2 flex max-w-3xl items-start gap-1.5 text-[11px] leading-snug text-gray-400">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gray-500">Mi permiso</strong> muestra solo las motos que puedes
            llevar con ese carnet: <strong className="font-semibold text-gray-500">AM</strong> hasta 50 cc ·{" "}
            <strong className="font-semibold text-gray-500">A1</strong> hasta 125 cc y 11 kW ·{" "}
            <strong className="font-semibold text-gray-500">A2</strong> hasta 35 kW ·{" "}
            <strong className="font-semibold text-gray-500">A</strong> sin límite. El filtro de cilindrada solo
            incluye motos de combustión (las eléctricas no tienen cilindrada).
          </span>
        </p>

        <p className="mb-4 mt-4 text-sm text-gray-500" aria-live="polite">
          <strong className="text-[#cd001d]">{filtradas.length}</strong>{" "}
          {filtradas.length === 1 ? "modelo encontrado" : "modelos encontrados"}
        </p>

        {/* ── Grid 2 columnas (también en móvil) ── */}
        {filtradas.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center">
            <Bike className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-3 font-bold text-gray-900">Sin resultados con estos filtros</p>
            <p className="mt-1 text-sm text-gray-500">Prueba a ampliar el precio o quitar algún filtro.</p>
            <button
              type="button"
              onClick={resetFiltros}
              className="mt-4 rounded-xl bg-[#cd001d] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#a50018]"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <section aria-label="Modelos" className="grid grid-cols-2 gap-3 sm:gap-4">
            {visibles.map((m) => (
              <CartaMoto
                key={m.id}
                moto={m}
                flipped={!!giradas[m.id]}
                onFlip={() => setGiradas((g) => ({ ...g, [m.id]: !g[m.id] }))}
                enDuelo={sel.includes(m.id)}
                onToggleCompare={(e) => toggleCompare(e, m.id)}
              />
            ))}
          </section>
        )}
        {filtradas.length > visibleCount && (
          <div className="pt-4 text-center space-y-2">
            <p className="text-xs text-gray-400">
              Mostrando {visibles.length} de {filtradas.length} modelos
            </p>
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full px-8 h-11"
            >
              Cargar más modelos
            </button>
          </div>
        )}

        {/* ── Duelo cara a cara ── */}
        {dueloVisible && motosDuelo.length >= 2 && (
          <div ref={dueloRef} className="mt-6 scroll-mt-24">
            <DueloVS
              items={itemsDuelo}
              filas={filasDuelo}
              veredicto={veredictoDuelo}
              eleccionId={eleccionDueloId}
              onCerrar={() => setDueloVisible(false)}
            />
          </div>
        )}

        <p className="mx-auto mt-8 max-w-3xl text-xs text-gray-500">
          La autonomía puede estar homologada según el ciclo WMTC o ser una cifra declarada por
          la marca (más optimista): lo indicamos en cada ficha. <strong>≈</strong> = cifra
          aproximada (estimación cuando no hay dato oficial publicado).
        </p>

        {/* ── FAQs ── */}
        <section className="mx-auto mt-12 max-w-3xl">
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
      </main>

      <BarraComparar
        items={itemsBarra}
        max={3}
        onQuitar={quitar}
        onVerDuelo={verDuelo}
        onLimpiar={() => {
          setSel([]);
          setDueloVisible(false);
        }}
      />

      <SharedFooter />
    </div>
  );
}

/* ── Tarjeta de una moto (flip 3D) ── */
function CartaMoto({
  moto,
  flipped,
  onFlip,
  enDuelo,
  onToggleCompare,
}: {
  moto: MotoComparador;
  flipped: boolean;
  onFlip: () => void;
  enDuelo: boolean;
  onToggleCompare: (e: React.MouseEvent) => void;
}) {
  const anverso = (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-24 shrink-0 overflow-hidden bg-white sm:h-40">
        {moto.imagen ? (
          <img
            src={moto.imagen}
            alt={`Foto oficial de la ${moto.marca} ${moto.modelo}`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-black text-gray-300 sm:text-6xl">
              {(moto.marca || "?").charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-bold text-white sm:text-xs">
          Carnet {codigoCarnet(moto)}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1 px-2.5 py-2 sm:gap-1.5 sm:px-3 sm:py-2.5">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 sm:text-[10px]">
          {moto.marca}
        </p>
        <h3 className="truncate text-[13px] font-extrabold leading-tight text-gray-900 sm:text-base">
          {moto.modelo} <span className="font-semibold text-gray-500">· {moto.version}</span>
        </h3>
        <p className="text-[15px] font-extrabold text-[#cd001d] sm:text-xl">
          {fmtAprox(moto, "precioDesde", fmtPrecio(moto.precioDesde))}
        </p>
        <div className="grid grid-cols-3 rounded-lg bg-gray-100 py-1.5 text-center sm:py-2">
          <div className="px-1">
            <p className="text-sm leading-none sm:text-xl">⚡</p>
            <p className="mt-0.5 truncate text-[11px] font-bold text-gray-900 sm:text-sm">
              {moto.potenciaKw != null ? String(moto.potenciaKw).replace(".", ",") : "—"}
            </p>
            <p className="text-[8px] text-gray-500 sm:text-[10px]">kW</p>
          </div>
          <div className="border-l border-gray-200 px-1">
            <p className="text-sm leading-none sm:text-xl">🔋</p>
            <p className="mt-0.5 truncate text-[11px] font-bold text-gray-900 sm:text-sm">
              {moto.autonomiaKm ?? "—"}
            </p>
            <p className="text-[8px] text-gray-500 sm:text-[10px]">km</p>
          </div>
          <div className="border-l border-gray-200 px-1">
            <p className="text-sm leading-none sm:text-xl">⏱</p>
            <p className="mt-0.5 truncate text-[11px] font-bold text-gray-900 sm:text-sm">
              {moto.ceroCincuenta != null ? String(moto.ceroCincuenta).replace(".", ",") : "—"}
            </p>
            <p className="text-[8px] text-gray-500 sm:text-[10px]">0–50 s</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-gray-500 sm:text-xs">Etiqueta</span>
          <EtiquetaDGT etiqueta={moto.etiquetaDgt} size="sm" />
        </div>
        <button
          type="button"
          onClick={onToggleCompare}
          aria-pressed={enDuelo}
          className={`mt-auto w-full rounded-lg border-2 py-1.5 text-[12px] font-bold transition sm:py-2 sm:text-sm ${
            enDuelo
              ? "border-[#cd001d] bg-[#cd001d] text-white"
              : "border-[#cd001d] bg-white text-[#cd001d] hover:bg-[#fdecec]"
          }`}
        >
          {enDuelo ? "✓ En el duelo" : "＋ Comparar"}
        </button>
        <p className="text-center text-[9px] text-gray-400 sm:text-[10px]">Toca para girar ↻</p>
      </div>
    </div>
  );

  const specsReverso: Array<[string, string]> = [
    ["Precio", fmtAprox(moto, "precioDesde", fmtPrecio(moto.precioDesde))],
    ["Autonomía", fmtAprox(moto, "autonomiaKm", fmtAutonomia(moto))],
    ["Batería", fmtAprox(moto, "bateriaKwh", fmtKwh(moto.bateriaKwh))],
    ["Peso", fmtAprox(moto, "pesoKg", fmtKg(moto.pesoKg))],
    ["Vel. máxima", fmtAprox(moto, "velocidadMax", fmtKmh(moto.velocidadMax))],
    ["Carnet", codigoCarnet(moto)],
  ];

  const reverso = (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="px-2.5 pt-2.5 sm:px-3 sm:pt-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 sm:text-[10px]">
          {moto.marca}
        </p>
        <h3 className="truncate text-[13px] font-extrabold leading-tight text-gray-900 sm:text-base">
          {moto.modelo} <span className="font-semibold text-gray-500">· {moto.version}</span>
        </h3>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1.5 px-2.5 py-2 sm:gap-2 sm:px-3 sm:py-2.5">
        <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
          {specsReverso.map(([k, v]) => (
            <div key={k} className="min-w-0 rounded-lg bg-gray-100 px-2 py-1 sm:py-1.5">
              <p className="text-[8px] font-bold uppercase tracking-wide text-gray-500 sm:text-[9px]">
                {k}
              </p>
              <p className="truncate text-[11px] font-bold text-gray-900 sm:text-[13px]" title={v}>
                {v}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wide text-gray-500 sm:text-[9px]">
            Lo mejor
          </p>
          <ul className="mt-0.5 space-y-0.5">
            {moto.pros.slice(0, 2).map((p, i) => (
              <li key={i} className="line-clamp-2 text-[10px] leading-tight text-gray-700 sm:text-[11px]">
                <span className="font-bold text-emerald-600">✓ </span>{p}
              </li>
            ))}
          </ul>
          <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-gray-500 sm:text-[9px]">
            A mejorar
          </p>
          <ul className="mt-0.5 space-y-0.5">
            {moto.contras.slice(0, 1).map((p, i) => (
              <li key={i} className="line-clamp-2 text-[10px] leading-tight text-gray-500 sm:text-[11px]">
                <span className="font-bold text-[#cd001d]">✕ </span>{p}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={`/motos/${moto.id}/`}
          onClick={(e) => e.stopPropagation()}
          className="mt-auto block rounded-lg bg-[#cd001d] py-1.5 text-center text-[12px] font-bold text-white transition hover:bg-[#a50018] sm:py-2 sm:text-sm"
        >
          Ver ficha completa →
        </Link>
      </div>
    </div>
  );

  return (
    <FlipCard
      anverso={anverso}
      reverso={reverso}
      flipped={flipped}
      onFlip={onFlip}
      className="h-[380px] sm:h-[470px]"
    />
  );
}
