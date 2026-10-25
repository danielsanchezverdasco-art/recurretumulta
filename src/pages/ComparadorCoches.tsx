import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { fmtMiles } from "@/lib/formato.ts";
import { Link, useSearchParams } from "react-router-dom";
import { useSeo, canonicalComparador } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import FlipCard from "@/components/FlipCardSimple.tsx";
import HeroVS from "@/components/HeroVS.tsx";
import BarraComparar from "@/components/BarraComparar.tsx";
import DueloVS, { type FilaDuelo } from "@/components/DueloVS.tsx";
import { elegirCosaIndice, type NotaCosaInput } from "@/lib/cosa.ts";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import {
  COCHES_COMPARADOR,
  type CocheComparador,
} from "@/lib/comparador-coches-data.ts";

const FAQS = [
  {
    q: "¿De dónde salen los datos del comparador?",
    a: "De nuestros propios análisis de Novedades Motor: cada ficha se extrae de la tabla técnica del artículo correspondiente, con fuentes como km77, los configuradores oficiales de las marcas y medios especializados. Si un dato no está publicado por ninguna fuente fiable, aparece como «—» en vez de inventarlo.",
  },
  {
    q: "¿La autonomía es WLTP en todos los casos?",
    a: "En la mayoría sí. En los híbridos enchufables y de autonomía extendida (PHEV/EREV) la cifra mostrada es la autonomía en modo eléctrico. Algunos modelos chinos aún sin homologación europea muestran el ciclo chino CLTC, que es más optimista: lo avisamos en su artículo.",
  },
  {
    q: "¿Cómo se decide qué coche «gana» cada fila?",
    a: "Con criterio de comprador: gana el precio más bajo, la mayor autonomía, el maletero más grande, la mayor potencia, la aceleración más rápida, la carga más potente y la mayor velocidad máxima. Es una ayuda visual, no una sentencia: el mejor coche depende de tu uso.",
  },
  {
    q: "¿Vais a añadir más modelos?",
    a: "Sí. La base arranca con los modelos de Novedades Motor y crece cada semana con los más vendidos en España y Europa desde 2024, con sus versiones. Si echas en falta un modelo, escríbenos por WhatsApp y lo priorizamos.",
  },
  {
    q: "¿El comparador sustituye a leer el análisis completo?",
    a: "No: el duelo te ayuda a decidir en un vistazo, pero cada modelo tiene su artículo con curiosidades, comparativa con rivales, vídeo y preguntas frecuentes. Toca la tarjeta para girarla y pulsa «Ver ficha completa».",
  },
];

const COMPARATIVAS_POPULARES: Array<[string, string, string]> = [
  ["renault-5-e-tech-2026-precio-autonomia", "dacia-spring-2026-nueva-generacion-precio", "Eléctricos baratos: R5 vs Spring"],
  ["skoda-peaq-suv-electrico-7-plazas-precio", "xpeng-g6-2026-restyling-precio-espana", "SUV eléctricos familiares"],
  ["byd-atto-2-precio-ficha-tecnica", "jaecoo-5-precio-ficha-tecnica", "SUV asequibles: BYD vs Jaecoo"],
  ["renault-4-e-tech-precio-autonomia", "renault-5-e-tech-2026-precio-autonomia", "Duelo Renault: R4 vs R5"],
  ["alpine-a390-precio-ficha-tecnica", "smart-5-electrico-ficha-tecnica-precio", "Eléctricos prestacionales"],
  ["leapmotor-b10-electrico-precio-espana", "deepal-s07-precio-espana-ficha-tecnica", "Chinos eléctricos en España"],
];

// ── Formato: null = "—", estimaciones con ≈ ──────────────────────────────────
const fmtPrecio = (v: number | null) =>
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  v == null ? "—" : fmtMiles(v) + " €";
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtL = (v: number | null) => (v == null ? "—" : v + " L");
const fmtS = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " s";
const fmtKmh = (v: number | null) => (v == null ? "—" : v + " km/h");
const fmtKw = (v: number | null) => (v == null ? "—" : v + " kW");
const fmtCv = (v: number | null) => (v == null ? "—" : v + " CV");
const fmtConsumo = (c: CocheComparador) =>
  c.consumo == null
    ? "—"
    : `${String(c.consumo).replace(".", ",")} ${c.consumoUnidad ?? ""}`.trim();

const mesAprox = (p: number | null) =>
  p == null ? "—" : "≈ " + Math.round(p / 60).toLocaleString("es-ES") + " €/mes";
const autonomiaReal = (a: number | null) =>
  a == null ? "—" : "≈ " + Math.round(a * 0.7).toLocaleString("es-ES") + " km";
const carga1080 = (dc: number | null) => {
  if (dc == null) return "—";
  const m = dc >= 100 ? 30 : dc >= 50 ? 35 : 45;
  return "≈ " + m + " min";
};

/** Foto principal: oficial de prensa si existe, si no la del artículo. */
const fotoDe = (c: CocheComparador) => c.imagenOficial || c.imagen || "";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Comparador de coches: elige dos modelos y decide",
      url: "https://recurretumulta.online/comparador-coches/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      description:
        "Compara dos coches lado a lado antes de comprar: ficha técnica, precio, autonomía, maletero, pros y contras, y vídeo con crédito al canal.",
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
        { "@type": "ListItem", position: 3, name: "Comparador de coches", item: "https://recurretumulta.online/comparador-coches/" },
      ],
    },
  ],
};

/** <img> con fallback: si la oficial falla en disco, usa la del artículo. */
function ImgCoche({
  coche,
  className,
  alt,
}: {
  coche: CocheComparador;
  className?: string;
  alt: string;
}) {
  const [src, setSrc] = useState(() => fotoDe(coche));
  const [fallbackHecho, setFallbackHecho] = useState(false);
  // Si ni la foto oficial ni la de respaldo existen, se muestra el degradado
  // con la inicial de la marca en vez de un icono de imagen rota (04/10/2026).
  const [rota, setRota] = useState(false);
  if (rota) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 ${className ?? ""}`}>
        <span className="text-3xl font-black text-gray-300">{coche.marca.charAt(0)}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (!fallbackHecho && coche.imagen && src !== coche.imagen) {
          setFallbackHecho(true);
          setSrc(coche.imagen);
        } else {
          setRota(true);
        }
      }}
    />
  );
}

/** Celda pequeña del reverso (etiqueta + valor). */
function Celda({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="min-w-0 rounded-lg bg-gray-100 px-1.5 py-1">
      <span className="block truncate text-[8px] font-semibold uppercase tracking-wide text-gray-500">
        {k}
      </span>
      <span className="block truncate text-[11px] font-bold text-gray-900">{v}</span>
    </div>
  );
}

/** Tarjeta flip de un coche: anverso con foto/specs, reverso compacto con datos. */
function TarjetaCoche({
  coche,
  seleccionada,
  onToggle,
}: {
  coche: CocheComparador;
  seleccionada: boolean;
  onToggle: (id: string) => void;
}) {
  const [girada, setGirada] = useState(false);

  const spec3 = [
    { v: coche.potenciaCv == null ? "—" : String(coche.potenciaCv), l: "CV" },
    { v: coche.autonomiaKm == null ? "—" : String(coche.autonomiaKm), l: "km" },
    { v: coche.ceroCien == null ? "—" : String(coche.ceroCien).replace(".", ","), l: "0–100 s" },
  ];

  const anverso = (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] flex-none overflow-hidden bg-gray-100">
        {fotoDe(coche) ? (
          <ImgCoche
            coche={coche}
            alt={`${coche.marca} ${coche.modelo}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-3xl font-black text-gray-300">
              {coche.marca.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white">
          {coche.tipo}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:p-3">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            {coche.marca}
          </p>
          <EtiquetaDGT etiqueta={coche.etiquetaDgt} size="sm" />
        </div>
        <h3 className="line-clamp-2 text-sm font-extrabold leading-tight text-gray-900 sm:text-base">
          {coche.modelo}
        </h3>
        <p className="flex flex-wrap items-baseline gap-x-1.5">
          <span className="text-base font-extrabold tracking-tight text-[#cd001d] sm:text-lg">
            {fmtPrecio(coche.precioDesde)}
          </span>
          <span className="text-[11px] font-medium text-gray-500">
            {mesAprox(coche.precioDesde)}
          </span>
        </p>
        <div className="grid grid-cols-3 rounded-lg bg-gray-100 py-1.5 text-center">
          {spec3.map((s, i) => (
            <div
              key={s.l}
              className={i > 0 ? "border-l border-gray-300 px-1" : "px-1"}
            >
              <b className="block truncate text-xs text-gray-900 sm:text-[13px]">{s.v}</b>
              <span className="block text-[8px] font-medium uppercase tracking-wide text-gray-500 sm:text-[9px]">
                {s.l}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(coche.id);
          }}
          aria-pressed={seleccionada}
          className={`mt-auto rounded-lg border-2 px-2 py-2 text-[13px] font-bold transition ${
            seleccionada
              ? "border-[#cd001d] bg-[#cd001d] text-white"
              : "border-[#cd001d] bg-white text-[#cd001d] hover:bg-[#fdecec]"
          }`}
        >
          {seleccionada ? "✓ En el duelo" : "＋ Comparar"}
        </button>
        <p className="text-center text-[10px] text-gray-400">Toca para girar ↻</p>
      </div>
    </div>
  );

  const reverso = (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm sm:p-3">
      <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-500">
        {coche.marca}
      </p>
      <h3 className="line-clamp-1 text-sm font-extrabold text-gray-900">{coche.modelo}</h3>
      <div className="mt-1.5 grid grid-cols-2 gap-1">
        <Celda k="Precio / mes" v={mesAprox(coche.precioDesde)} />
        <Celda k="Autonomía real" v={autonomiaReal(coche.autonomiaKm)} />
        <Celda k="Carga 10–80 %" v={carga1080(coche.cargaRapidaKw)} />
        <Celda k="Maletero" v={fmtL(coche.maleteroL)} />
        <Celda
          k="Etiqueta DGT"
          v={coche.etiquetaDgt ? <EtiquetaDGT etiqueta={coche.etiquetaDgt} size="sm" /> : "—"}
        />
        <Celda k="Consumo" v={fmtConsumo(coche)} />
      </div>
      <p className="mb-0.5 mt-2 text-[9px] font-bold uppercase tracking-wider text-gray-500">
        Lo mejor
      </p>
      <ul className="space-y-0.5 text-[11px] leading-snug text-gray-700">
        {coche.pros.slice(0, 2).map((p, i) => (
          <li key={i} className="line-clamp-2">
            <span className="font-extrabold text-emerald-600">✓ </span>
            {p}
          </li>
        ))}
      </ul>
      <p className="mb-0.5 mt-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-500">
        A mejorar
      </p>
      <ul className="space-y-0.5 text-[11px] leading-snug text-gray-600">
        {coche.contras.slice(0, 1).map((p, i) => (
          <li key={i} className="line-clamp-2">
            <span className="font-extrabold text-[#cd001d]">✕ </span>
            {p}
          </li>
        ))}
      </ul>
      <Link
        to={`/coches/${coche.id}/`}
        onClick={(e) => e.stopPropagation()}
        className="mt-auto block rounded-lg bg-[#cd001d] px-2 py-2 text-center text-xs font-bold text-white transition hover:bg-[#a50018]"
      >
        Ver ficha completa →
      </Link>
    </div>
  );

  /* Sin wrapper de medición: FlipCardSimple solo pinta la cara activa. */
  return (
    <FlipCard
      flipped={girada}
      onFlip={() => setGirada((g) => !g)}
      anverso={anverso}
      reverso={reverso}
      className="h-full w-full"
    />
  );
}

// ── Métricas del duelo cara a cara ───────────────────────────────────────────
type MetricaDuelo = {
  etiqueta: string;
  fmt: (c: CocheComparador) => string;
  num: (c: CocheComparador) => number | null;
  mejor: "mayor" | "menor";
};

const METRICAS: MetricaDuelo[] = [
  { etiqueta: "Precio", fmt: (c) => fmtPrecio(c.precioDesde), num: (c) => c.precioDesde, mejor: "menor" },
  { etiqueta: "Potencia", fmt: (c) => fmtCv(c.potenciaCv), num: (c) => c.potenciaCv, mejor: "mayor" },
  { etiqueta: "Autonomía", fmt: (c) => fmtKm(c.autonomiaKm), num: (c) => c.autonomiaKm, mejor: "mayor" },
  { etiqueta: "0–100 km/h", fmt: (c) => fmtS(c.ceroCien), num: (c) => c.ceroCien, mejor: "menor" },
  { etiqueta: "Maletero", fmt: (c) => fmtL(c.maleteroL), num: (c) => c.maleteroL, mejor: "mayor" },
  { etiqueta: "Carga rápida DC", fmt: (c) => fmtKw(c.cargaRapidaKw), num: (c) => c.cargaRapidaKw, mejor: "mayor" },
  { etiqueta: "Velocidad máx.", fmt: (c) => fmtKmh(c.velocidadMax), num: (c) => c.velocidadMax, mejor: "mayor" },
];

const SELECT_CLASE =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20";

export default function ComparadorCochesPage() {
  useSeo({
    title: "Comparador coches 2026: elige y decide antes de comprar",
    description:
      "Compara dos coches lado a lado: ficha técnica, precio, autonomía, maletero, pros y contras, y vídeo. El comparador para decidir qué coche comprar en 2026.",
    canonical: canonicalComparador("/comparador-coches"),
    schema: jsonLd,
  });

  const [q, setQ] = useState("");
  const [fTipo, setFTipo] = useState("todos");
  const [fPrecioMax, setFPrecioMax] = useState(0);
  const [fPotMin, setFPotMin] = useState(0);
  const [fAutMin, setFAutMin] = useState(0);
  const [orden, setOrden] = useState("precioAsc");
  // Paginación (07/10/2026, velocidad): la página renderizaba las 1.709
  // fichas de golpe (15,6 MB, tirones). Solo 24 visibles; "Cargar más" amplía.
  const [visibleCount, setVisibleCount] = useState(24);
  const PAGE_SIZE = 24;
  const [searchParams] = useSearchParams();
  // Preselección desde la URL: ?a=<id>&b=<id>&c=<id> (la ficha destacada del
  // blog, /coches/<id> y los artículos de duelos ya enlazan así). Ids
  // inexistentes o repetidos se ignoran; sin params, comportamiento normal.
  const idsDesdeUrl = () => {
    const validos = new Set(COCHES_COMPARADOR.map((c) => c.id));
    const ids: string[] = [];
    for (const k of ["a", "b", "c"]) {
      const id = searchParams.get(k);
      if (id && validos.has(id) && !ids.includes(id)) ids.push(id);
    }
    return ids.slice(0, 3);
  };
  const [sel, setSel] = useState<string[]>(idsDesdeUrl);
  // Si se navega a la misma ruta con otros params (p. ej. otro "comparar"
  // desde un blog sin recargar), resincroniza la selección con la URL.
  useEffect(() => {
    setSel(idsDesdeUrl());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  const [dueloAbierto, setDueloAbierto] = useState(false);
  const dueloRef = useRef<HTMLDivElement>(null);

  const porId = useMemo(
    () => new Map(COCHES_COMPARADOR.map((c) => [c.id, c] as const)),
    []
  );
  const tipos = useMemo(
    () => [...new Set(COCHES_COMPARADOR.map((c) => c.tipo))].sort((a, b) => a.localeCompare(b, "es")),
    []
  );

  const filtrados = useMemo(() => {
    const query = q.trim().toLowerCase();
    const lista = COCHES_COMPARADOR.filter(
      (c) =>
        (fTipo === "todos" || c.tipo === fTipo) &&
        (fPrecioMax === 0 || (c.precioDesde != null && c.precioDesde <= fPrecioMax)) &&
        (fPotMin === 0 || (c.potenciaCv != null && c.potenciaCv >= fPotMin)) &&
        (fAutMin === 0 || (c.autonomiaKm != null && c.autonomiaKm >= fAutMin)) &&
        (query === "" || `${c.marca} ${c.modelo}`.toLowerCase().includes(query))
    );
    if (orden === "precioAsc")
      lista.sort((a, b) => (a.precioDesde ?? Infinity) - (b.precioDesde ?? Infinity));
    else if (orden === "precioDesc")
      lista.sort((a, b) => (b.precioDesde ?? -Infinity) - (a.precioDesde ?? -Infinity));
    else if (orden === "potDesc")
      lista.sort((a, b) => (b.potenciaCv ?? -Infinity) - (a.potenciaCv ?? -Infinity));
    else if (orden === "autDesc")
      lista.sort((a, b) => (b.autonomiaKm ?? -Infinity) - (a.autonomiaKm ?? -Infinity));
    return lista;
  }, [q, fTipo, fPrecioMax, fPotMin, fAutMin, orden]);

  const visibles = filtrados.slice(0, visibleCount);

  const toggleSeleccion = (id: string) => {
    setSel((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= 3 ? prev : [...prev, id]
    );
  };

  // Si quedan menos de 2 seleccionados, el duelo se cierra solo.
  useEffect(() => {
    if (sel.length < 2) setDueloAbierto(false);
  }, [sel.length]);

  // Scroll automático al abrir el duelo.
  useEffect(() => {
    if (dueloAbierto) {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      dueloRef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [dueloAbierto]);

  const cochesDuelo = useMemo(
    () =>
      sel
        .map((id) => porId.get(id))
        .filter((c): c is CocheComparador => c != null),
    [sel, porId]
  );

  // ── "La elección de Cosa": mejor nota determinista entre los 2 del duelo ──
  // Criterio honesto y automático (ver lib/cosa.ts): gana la mejor relación
  // calidad-precio según los datos reales de la ficha. EuroNCAP se omite aquí
  // (carga asíncrona por modelo) y su peso se reparte, sin penalizar.
  const entradaCocheCosa = (c: CocheComparador): NotaCosaInput => ({
    precioEur: c.precioDesde,
    potenciaCv: c.potenciaCv,
    consumoL100: c.consumoUnidad === "l/100km" ? c.consumo : null,
    consumoKwh100: c.consumoUnidad === "kWh/100km" ? c.consumo : null,
    etiquetaDgt: c.etiquetaDgt,
    maleteroL: c.maleteroL,
  });
  const eleccionDueloId =
    cochesDuelo.length >= 2
      ? cochesDuelo[elegirCosaIndice(entradaCocheCosa(cochesDuelo[0]), entradaCocheCosa(cochesDuelo[1]))].id
      : undefined;

  const filasDuelo: FilaDuelo[] = useMemo(
    () =>
      METRICAS.map((m) => {
        const nums = cochesDuelo.map(m.num);
        const validos = nums.filter((n): n is number => n != null);
        let ganador: number | null = null;
        if (validos.length >= 2) {
          const best =
            m.mejor === "mayor" ? Math.max(...validos) : Math.min(...validos);
          const idxs = nums.map((n, i) => (n === best ? i : -1)).filter((i) => i >= 0);
          // Empate o dato único: sin ganador.
          if (idxs.length === 1) ganador = idxs[0];
        }
        const max = validos.length > 0 ? Math.max(...validos) : 0;
        const min = validos.length > 0 ? Math.min(...validos) : 0;
        const barras = nums.map((n) => {
          if (n == null) return null;
          if (m.mejor === "mayor") return max > 0 ? Math.round((n / max) * 100) : 0;
          return n > 0 ? Math.round((min / n) * 100) : 0;
        });
        return {
          etiqueta: m.etiqueta,
          valores: cochesDuelo.map(m.fmt),
          ganador,
          barras,
        };
      }),
    [cochesDuelo]
  );

  const veredicto = useMemo(() => {
    if (cochesDuelo.length < 2) return "";
    const puntos = cochesDuelo.map(
      (_, i) => filasDuelo.filter((f) => f.ganador === i).length
    );
    const idx = puntos.indexOf(Math.max(...puntos));
    const c = cochesDuelo[idx];
    return `Gana el duelo: ${c.marca} ${c.modelo} (${puntos[idx]} de ${filasDuelo.length} categorías)`;
  }, [cochesDuelo, filasDuelo]);

  const duelosPopulares = useMemo(
    () =>
      COMPARATIVAS_POPULARES.map(([a, b, label]) => ({
        a: porId.get(a),
        b: porId.get(b),
        label,
      })).filter(
        (d): d is { a: CocheComparador; b: CocheComparador; label: string } =>
          d.a != null && d.b != null
      ),
    [porId]
  );

  const abrirDueloPopular = (a: CocheComparador, b: CocheComparador) => {
    setSel([a.id, b.id]);
    setDueloAbierto(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />

      <HeroVS
        imagen1="/media/byd-dolphin-surf-2027-hero.webp"
        imagen2="/media/dacia-bigster-2025-precio-ficha-tecnica-hero.webp"
        alt1="Coche eléctrico en comparativa"
        alt2="SUV en comparativa"
        titulo="Comparador de coches eléctricos e híbridos"
        subtitulo="Compara precios, autonomía, potencia y ficha técnica de todos los modelos 2024-2026"
        busqueda={q}
        onBusqueda={(v) => {
          setQ(v);
          setVisibleCount(24);
          setDueloAbierto(false);
        }}
        placeholderBusqueda="Busca marca o modelo… (ej. MG, Leapmotor)"
        stats={[
          { valor: COCHES_COMPARADOR.length, etiqueta: "modelos" },
          { valor: "2026", etiqueta: "actualizado" },
          { valor: "100%", etiqueta: "verificado" },
        ]}
        ocultarVS
      />

      <main className="mx-auto max-w-5xl px-3 pb-16 sm:px-4">
        {/* Migas de pan visibles (23/10/2026) */}
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 pt-4 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-gray-900">Comparador de coches</span>
        </nav>
        <div className="mt-4 flex justify-end">
          <CompartirBotones
            titulo="Comparador de coches eléctricos e híbridos"
            texto="Comparador de coches eléctricos e híbridos: precios, autonomía, potencia y ficha técnica"
          />
        </div>
        {/* ── Filtros ── */}
        <section aria-label="Filtros del comparador" className="mt-5">
          <div className="flex flex-wrap items-end gap-2.5 sm:gap-3">
            <label className="flex min-w-0 flex-1 flex-col gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:flex-none sm:basis-40">
              Tipo
              <select
                value={fTipo}
                onChange={(e) => { setFTipo(e.target.value); setVisibleCount(24); }}
                className={SELECT_CLASE}
              >
                <option value="todos">Todos</option>
                {tipos.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex min-w-0 flex-1 flex-col gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:flex-none sm:basis-40">
              Precio máximo
              <select
                value={fPrecioMax}
                onChange={(e) => { setFPrecioMax(Number(e.target.value)); setVisibleCount(24); }}
                className={SELECT_CLASE}
              >
                <option value={0}>Sin límite</option>
                <option value={25000}>Hasta 25.000 €</option>
                <option value={30000}>Hasta 30.000 €</option>
                <option value={35000}>Hasta 35.000 €</option>
                <option value={40000}>Hasta 40.000 €</option>
                <option value={50000}>Hasta 50.000 €</option>
              </select>
            </label>
            <label className="flex min-w-0 flex-1 flex-col gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:flex-none sm:basis-36">
              Potencia mínima
              <select
                value={fPotMin}
                onChange={(e) => { setFPotMin(Number(e.target.value)); setVisibleCount(24); }}
                className={SELECT_CLASE}
              >
                <option value={0}>Sin mínimo</option>
                <option value={100}>100+ CV</option>
                <option value={150}>150+ CV</option>
                <option value={200}>200+ CV</option>
              </select>
            </label>
            <label className="flex min-w-0 flex-1 flex-col gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:flex-none sm:basis-36">
              Autonomía mínima
              <select
                value={fAutMin}
                onChange={(e) => { setFAutMin(Number(e.target.value)); setVisibleCount(24); }}
                className={SELECT_CLASE}
              >
                <option value={0}>Sin mínimo</option>
                <option value={300}>300+ km</option>
                <option value={400}>400+ km</option>
                <option value={500}>500+ km</option>
              </select>
            </label>
            <label className="flex min-w-0 flex-1 flex-col gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:flex-none sm:basis-44">
              Ordenar
              <select
                value={orden}
                onChange={(e) => { setOrden(e.target.value); setVisibleCount(24); }}
                className={SELECT_CLASE}
              >
                <option value="precioAsc">Precio: menor a mayor</option>
                <option value="precioDesc">Precio: mayor a menor</option>
                <option value="potDesc">Potencia: mayor a menor</option>
                <option value="autDesc">Autonomía: mayor a menor</option>
              </select>
            </label>
          </div>
          <p className="mt-3 text-[13px] text-gray-500" aria-live="polite">
            <b className="text-[#cd001d]">{filtrados.length}</b>{" "}
            {filtrados.length === 1 ? "modelo encontrado" : "modelos encontrados"}
          </p>
        </section>

        {/* ── Grid de flip cards (2 columnas también en móvil) ── */}
        <section aria-label="Modelos comparables" className="mt-3">
          {filtrados.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <p className="font-bold text-gray-800">Sin resultados</p>
              <p className="mt-1 text-sm text-gray-500">
                Prueba a relajar algún filtro o busca otra marca o modelo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4">
              {visibles.map((c) => (
                <TarjetaCoche
                  key={c.id}
                  coche={c}
                  seleccionada={sel.includes(c.id)}
                  onToggle={toggleSeleccion}
                />
              ))}
            </div>
          )}
          {filtrados.length > visibleCount && (
            <div className="pt-4 text-center space-y-2">
              <p className="text-xs text-gray-400">
                Mostrando {visibles.length} de {filtrados.length} modelos
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
          <p className="mt-3 text-xs text-gray-500">
            <strong>≈</strong> = cifra aproximada o estimación. <strong>—</strong> = dato no
            publicado por ninguna fuente fiable.
          </p>
        </section>

        {/* ── Duelo cara a cara ── */}
        {dueloAbierto && cochesDuelo.length >= 2 && (
          <div ref={dueloRef} className="scroll-mt-24">
            <DueloVS
              items={cochesDuelo.map((c) => ({
                id: c.id,
                titulo: `${c.marca} ${c.modelo}`,
                subtitulo: c.tipo,
                imagen: fotoDe(c),
              }))}
              filas={filasDuelo}
              veredicto={veredicto}
              eleccionId={eleccionDueloId}
              onCerrar={() => setDueloAbierto(false)}
            />
          </div>
        )}

        {/* ── Duelos populares ── */}
        <section aria-label="Duelos populares" className="mt-10">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Duelos populares
            </h2>
            {/* Caza de monos: boxeador junto a los duelos */}
            <MonoEscondido
              id={fijoId("comparador-coches")}
              pose="mono-lengua"
              size={34}
              titulo="¡Un mono vacilando en los duelos! Haz clic para cazarlo 🦍"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Las comparativas que más se consultan, listas para ver cara a cara.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {duelosPopulares.map((d) => (
              <button
                key={d.label}
                type="button"
                onClick={() => abrirDueloPopular(d.a, d.b)}
                className="rounded-full border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition hover:border-[#cd001d] hover:text-[#cd001d] sm:text-sm"
              >
                ⚔️ {d.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section aria-label="Preguntas frecuentes" className="mt-10 max-w-3xl">
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <BarraComparar
        items={cochesDuelo.map((c) => ({
          id: c.id,
          etiqueta: `${c.marca} ${c.modelo}`,
          imagen: fotoDe(c),
        }))}
        max={3}
        onQuitar={(id) => setSel((prev) => prev.filter((x) => x !== id))}
        onVerDuelo={() => setDueloAbierto(true)}
        onLimpiar={() => setSel([])}
      />

      {/* Espacio para que la barra sticky no tape el pie */}
      {sel.length > 0 && <div className="h-24" aria-hidden="true" />}

      <SharedFooter />
    </div>
  );
}
