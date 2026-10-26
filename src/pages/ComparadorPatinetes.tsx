import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Battery,
  Check,
  Gauge,
  Minus,
  ShieldCheck,
  Sparkles,
  Weight,
  Zap,
} from "lucide-react";
import { useSeo, canonicalComparador } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import { fmtMiles } from "@/lib/formato.ts";
import SharedFooter from "@/components/shared-footer.tsx";
import FlipCard from "@/components/FlipCardSimple.tsx";
import HeroVS from "@/components/HeroVS.tsx";
import BarraComparar from "@/components/BarraComparar.tsx";
import DueloVS, { type FilaDuelo, type ItemDuelo } from "@/components/DueloVS.tsx";
import { elegirCosaIndice, type NotaCosaInput } from "@/lib/cosa.ts";
import CompartirBotones from "@/components/CompartirBotones.tsx";
import { loadConvex, getConvexClient } from "@/components/providers/convex-lazy.tsx";
import { api } from "@/convex/_generated/api.js";
import { getAnonymousFingerprint } from "@/lib/analisis-libre.ts";
import {
  PATINETES_COMPARADOR,
  PATINETES_PUBLICADOS,
  buscarEnBasePatinetes,
  fichaPatineteIAToPatinete,
  normalizarModelo,
  type PatineteComparador,
} from "@/lib/comparador-patinetes-data.ts";

const FAQS = [
  {
    q: "¿Qué patinete eléctrico me compro?",
    a: "Depende de tu uso diario. Para trayectos cortos (menos de 5 km) y combinarlo con el transporte público, elige uno ligero y barato como el Cecotec Bongo Serie A (13,5 kg). Para un uso diario largo, prioriza la autonomía: el Xiaomi Electric Scooter 5 o el Segway Max G2 E son los reyes de la distancia. Y si tu ciudad tiene cuestas fuertes, busca potencia nominal alta (Navee S65 o Bongo Serie Z Power Mountain).",
  },
  {
    q: "¿Por qué la autonomía real es menor que la declarada?",
    a: "Los fabricantes miden en condiciones ideales: conductor ligero, llano, modo eco y sin viento. En uso urbano real (baches, semáforos, tu peso real), la autonomía suele quedarse en el 65-70 % de la declarada. Por eso el comparador muestra una «autonomía real estimada» conservadora, marcada con ≈ para que no te lleves sorpresas.",
  },
  {
    q: "¿Necesito el certificado de circulación de la DGT?",
    a: "Sí, si tu patinete es nuevo. Los VMP vendidos desde el 22 de enero de 2024 deben llevar el certificado de circulación VMP que acredita que cumplen los requisitos técnicos. Además, a partir del 22 de enero de 2027 solo podrán circular los patinetes certificados: los modelos anteriores que no lo tengan dejarán de ser legales.",
  },
  {
    q: "¿El seguro es obligatorio para el patinete eléctrico?",
    a: "Sí. Desde el 2 de enero de 2026 el seguro de responsabilidad civil es obligatorio para los VMP en España (Ley 5/2025), y desde el 30 de enero de 2026 hay que inscribirlos en el Registro de Vehículos Personales Ligeros de la DGT (RD 52/2026). Circular sin seguro se sanciona con multas de hasta 1.000 euros; sin inscripción, 100 euros.",
  },
  {
    q: "¿De dónde salen los datos del comparador?",
    a: "De las webs oficiales de las marcas (mi.com, segway.com, cecotec.es, niu.com, navee.tech) y manuales oficiales, verificados el 02/10/2026. Si un dato no está publicado por ninguna fuente fiable, aparece como «no publicado» en vez de inventarlo.",
  },
  {
    q: "¿Cómo se decide qué patinete «gana» cada fila?",
    a: "Con criterio de comprador: gana el precio más bajo, la mayor autonomía, la batería más grande, la mayor potencia, el menor peso, la mayor carga máxima y el menor tiempo de carga. Es una ayuda visual, no una sentencia: el mejor patinete depende de tus trayectos.",
  },
];

const CONFIANZA_TXT: Record<string, string> = {
  alta: "Confianza alta",
  media: "Confianza media",
  baja: "Confianza baja",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Comparador de patinetes eléctricos 2026: elige el mejor VMP",
      url: "https://recurretumulta.online/comparador-patinetes/",
      description:
        `Compara ${PATINETES_PUBLICADOS.length.toLocaleString("es-ES")} patinetes eléctricos lado a lado: precio, potencia, autonomía real estimada, peso, certificado DGT, pros y contras. El comparador para elegir el mejor VMP en 2026.`,
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
        { "@type": "ListItem", position: 3, name: "Comparador de patinetes", item: "https://recurretumulta.online/comparador-patinetes/" },
      ],
    },
  ],
};

/* ── Formato: null = "—", ≈ para estimaciones ─────────────────────────────── */
const fmtEur = (v: number | null) =>
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  v == null ? "—" : fmtMiles(v) + " €";
const fmtNum = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES");
const fmtW = (v: number | null) => (v == null ? "—" : v.toLocaleString("es-ES") + " W");
const fmtKm = (v: number | null) => (v == null ? "—" : v + " km");
const fmtKg = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " kg";
const fmtHoras = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " h";
const fmtWh = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " Wh";
const fmtPotencia = (p: PatineteComparador) => {
  const nom = p.potenciaNominalW != null ? p.potenciaNominalW.toLocaleString("es-ES") + " W" : null;
  const pico = p.potenciaPicoW != null ? p.potenciaPicoW.toLocaleString("es-ES") + " W" : null;
  if (nom && pico) return `${nom} / ${pico}`;
  if (nom) return `${nom} (nominal)`;
  if (pico) return `${pico} (pico)`;
  return "—";
};

/* ── Foto con placeholder de inicial si falta ─────────────────────────────── */
function FotoPatinete({ p }: { p: PatineteComparador }) {
  const [fallo, setFallo] = useState(false);
  if (p.fotoPendiente || !p.foto || fallo) {
    const inicial = (p.marca || "?").charAt(0).toUpperCase();
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-red-50 via-gray-100 to-gray-200 p-2 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cd001d]/10 text-2xl font-black text-[#cd001d]">
          {inicial}
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
          Foto pendiente
        </span>
      </div>
    );
  }
  return (
    <img
      src={p.foto}
      alt={`Foto del ${p.marca} ${p.modelo}`}
      loading="lazy"
      onError={() => setFallo(true)}
      className="h-full w-full object-contain bg-white"
    />
  );
}

function SpecMini({
  icono,
  valor,
  unidad,
}: {
  icono: React.ReactNode;
  valor: string;
  unidad: string;
}) {
  return (
    <div className="min-w-0 px-1">
      <div className="flex items-center justify-center gap-1 text-[#636363]">
        {icono}
      </div>
      <b className="mt-0.5 block truncate text-[12px] text-gray-900">{valor}</b>
      <span className="block text-[8px] leading-tight text-[#636363]">{unidad}</span>
    </div>
  );
}

/* ── Anverso de la tarjeta ────────────────────────────────────────────────── */
function Anverso({
  p,
  enDuelo,
  onToggle,
}: {
  p: PatineteComparador;
  enDuelo: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[10px] border border-[#dedede] bg-[#fcfcfc] shadow-[0_3px_14px_rgba(0,0,0,0.07)]">
      <div className="relative aspect-[16/7.2] w-full flex-none overflow-hidden bg-white">
        <FotoPatinete p={p} />
        {p.certificadoDgt === true && (
          <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/85 px-2.5 py-1 text-[10px] font-bold text-white">
            <ShieldCheck className="h-3 w-3" aria-hidden="true" />
            DGT ✓
          </span>
        )}
        {p.esIA && (
          <span className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-violet-600/95 px-2.5 py-1 text-[10px] font-bold text-white">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            IA
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:p-3">
        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.09em] text-[#636363]">
            {p.marca}
          </p>
          <h3
            className="truncate text-[15px] font-extrabold leading-snug text-gray-900"
            title={`${p.marca} ${p.modelo}`}
          >
            {p.modelo}
          </h3>
        </div>
        <p className="text-[17px] font-extrabold tracking-tight text-[#cd001d]">
          {fmtEur(p.precioEur)}
        </p>
        <div className="grid grid-cols-3 divide-x divide-[#dedede] rounded-lg bg-[#f2f2f2] py-1.5 text-center">
          <SpecMini
            icono={<Zap className="h-3.5 w-3.5" aria-hidden="true" />}
            valor={fmtNum(p.potenciaNominalW)}
            unidad="potencia (W)"
          />
          <SpecMini
            icono={<Gauge className="h-3.5 w-3.5" aria-hidden="true" />}
            valor={fmtNum(p.autonomiaKm)}
            unidad="autonomía (km)"
          />
          <SpecMini
            icono={<Weight className="h-3.5 w-3.5" aria-hidden="true" />}
            valor={fmtNum(p.pesoKg)}
            unidad="peso (kg)"
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-pressed={enDuelo}
          className={`mt-auto rounded-[10px] border-2 px-2 py-2 text-[13px] font-bold transition ${
            enDuelo
              ? "border-[#cd001d] bg-[#cd001d] text-white"
              : "border-[#cd001d] bg-white text-[#cd001d] hover:bg-[#fdecec]"
          }`}
        >
          {enDuelo ? "✓ En el duelo" : "＋ Comparar"}
        </button>
        <p className="text-center text-[10px] text-[#636363]">Toca para girar ↻</p>
      </div>
    </div>
  );
}

/* ── Reverso compacto (sin scroll) ────────────────────────────────────────── */
function Reverso({ p }: { p: PatineteComparador }) {
  const datos: Array<[string, string]> = [
    ["Precio", fmtEur(p.precioEur)],
    ["Autonomía real", p.autonomiaRealKm == null ? "—" : `≈ ${p.autonomiaRealKm} km`],
    ["Batería", fmtWh(p.bateriaWh)],
    ["Carga", fmtHoras(p.tiempoCargaH)],
    ["Peso", fmtKg(p.pesoKg)],
    ["Certificado DGT", p.certificadoDgt === true ? "✓ Sí" : "—"],
  ];
  return (
    <div className="flex h-full flex-col gap-1.5 overflow-hidden rounded-[10px] border border-[#dedede] bg-[#fcfcfc] p-2.5 shadow-[0_3px_14px_rgba(0,0,0,0.07)] sm:p-3">
      <div className="min-w-0">
        <p className="truncate text-[10px] font-semibold uppercase tracking-[0.09em] text-[#636363]">
          {p.marca}
        </p>
        <h3
          className="truncate text-[14px] font-extrabold leading-snug text-gray-900"
          title={`${p.marca} ${p.modelo}`}
        >
          {p.modelo}
        </h3>
      </div>
      <dl className="grid grid-cols-2 gap-1">
        {datos.map(([k, v]) => (
          <div key={k} className="min-w-0 rounded-lg bg-[#f2f2f2] px-1.5 py-1">
            <dt className="truncate text-[8px] font-semibold uppercase tracking-wide text-[#636363]">
              {k}
            </dt>
            <dd className="truncate text-[11px] font-bold text-gray-900">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-wider text-[#636363]">Lo mejor</p>
        <ul className="mt-0.5 space-y-0.5">
          {p.pros.slice(0, 2).map((pro, i) => (
            <li key={i} className="line-clamp-2 text-[10.5px] leading-snug text-gray-700">
              <span className="font-extrabold text-emerald-600">✓ </span>
              {pro}
            </li>
          ))}
        </ul>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-[#636363]">
          A mejorar
        </p>
        <ul className="mt-0.5">
          {p.contras.slice(0, 1).map((c, i) => (
            <li key={i} className="line-clamp-2 text-[10.5px] leading-snug text-gray-600">
              <span className="font-extrabold text-[#cd001d]">✕ </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-1">
        {p.esIA ? (
          <span
            title="Estamos preparando la ficha completa de este modelo"
            className="block cursor-not-allowed rounded-[10px] bg-gray-200 px-2 py-2 text-center text-[12px] font-bold text-gray-500"
          >
            Ficha en preparación
          </span>
        ) : (
          <Link
            to={`/patinetes/${p.id}/`}
            onClick={(e) => e.stopPropagation()}
            className="block rounded-[10px] bg-[#cd001d] px-2 py-2 text-center text-[12px] font-bold text-white transition hover:bg-[#a50018]"
          >
            Ver ficha completa →
          </Link>
        )}
      </div>
    </div>
  );
}

/* ── Filas del duelo cara a cara ──────────────────────────────────────────── */
type FilaCfg = {
  etiqueta: string;
  texto: (p: PatineteComparador) => string;
  num: (p: PatineteComparador) => number | null;
  mejor: "mayor" | "menor";
};

const FILAS_DUELO: FilaCfg[] = [
  { etiqueta: "Precio", texto: (p) => fmtEur(p.precioEur), num: (p) => p.precioEur, mejor: "menor" },
  {
    etiqueta: "Potencia",
    texto: fmtPotencia,
    num: (p) => p.potenciaPicoW ?? p.potenciaNominalW,
    mejor: "mayor",
  },
  {
    etiqueta: "Autonomía real",
    texto: (p) => (p.autonomiaRealKm == null ? "—" : `≈ ${p.autonomiaRealKm} km`),
    num: (p) => p.autonomiaRealKm,
    mejor: "mayor",
  },
  { etiqueta: "Peso", texto: (p) => fmtKg(p.pesoKg), num: (p) => p.pesoKg, mejor: "menor" },
  { etiqueta: "Batería", texto: (p) => fmtWh(p.bateriaWh), num: (p) => p.bateriaWh, mejor: "mayor" },
  {
    etiqueta: "Tiempo de carga",
    texto: (p) => fmtHoras(p.tiempoCargaH),
    num: (p) => p.tiempoCargaH,
    mejor: "menor",
  },
];

function indiceGanador(vals: (number | null)[], mejor: "mayor" | "menor"): number | null {
  let best: number | null = null;
  for (const v of vals) {
    if (v == null) continue;
    if (best == null || (mejor === "mayor" ? v > best : v < best)) best = v;
  }
  if (best == null) return null;
  const idxs = vals.reduce<number[]>(
    (acc, v, i) => (v === best ? [...acc, i] : acc),
    []
  );
  return idxs.length === 1 ? idxs[0] : null;
}

function barraProporcional(
  vals: (number | null)[],
  i: number,
  mejor: "mayor" | "menor"
): number | null {
  const v = vals[i];
  if (v == null) return null;
  const nums = vals.filter((x): x is number => x != null);
  if (nums.length === 0) return null;
  if (mejor === "mayor") {
    const mx = Math.max(...nums);
    return mx > 0 ? Math.round((v / mx) * 100) : 0;
  }
  const mn = Math.min(...nums);
  return v > 0 ? Math.round((mn / v) * 100) : 0;
}

type OrdenKey = "precioAsc" | "precioDesc" | "potDesc" | "autDesc";

const CLASE_SELECT =
  "w-full rounded-[10px] border border-[#dedede] bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20";
const CLASE_LABEL =
  "flex min-w-[140px] flex-1 flex-col gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500";

export default function ComparadorPatinetesPage() {
  useSeo({
    title: "Comparador de patinetes eléctricos 2026: elige el mejor VMP",
    description:
      `Compara ${PATINETES_PUBLICADOS.length.toLocaleString("es-ES")} patinetes eléctricos lado a lado: precio, potencia, autonomía real estimada, peso, certificado DGT, pros y contras. Encuentra el mejor VMP para tu ciudad en 2026.`,
    canonical: canonicalComparador("/comparador-patinetes"),
    schema: jsonLd,
  });

  const porId = useMemo(
    () => new Map(PATINETES_COMPARADOR.map((p) => [p.id, p])),
    []
  );

  /* ── Búsqueda + filtros ── */
  const [busqueda, setBusqueda] = useState("");
  const [precioMax, setPrecioMax] = useState(0);
  const [potMin, setPotMin] = useState(0);
  const [autMin, setAutMin] = useState(0);
  const [soloDgt, setSoloDgt] = useState(false);
  const [orden, setOrden] = useState<OrdenKey>("precioAsc");
  // Paginación (07/10/2026, velocidad): no renderizar las 478 fichas de golpe.
  const [visibleCount, setVisibleCount] = useState(24);
  const PAGE_SIZE = 24;

  const filtrados = useMemo(() => {
    const q = normalizarModelo(busqueda);
    const lista = PATINETES_PUBLICADOS.filter((p) => {
      if (precioMax > 0 && (p.precioEur == null || p.precioEur > precioMax)) return false;
      if (potMin > 0 && (p.potenciaNominalW == null || p.potenciaNominalW < potMin)) return false;
      if (autMin > 0) {
        const a = p.autonomiaKm ?? p.autonomiaRealKm;
        if (a == null || a < autMin) return false;
      }
      if (soloDgt && p.certificadoDgt !== true) return false;
      if (q && !normalizarModelo(`${p.marca} ${p.modelo}`).includes(q)) return false;
      return true;
    });
    const pot = (p: PatineteComparador) =>
      p.potenciaPicoW ?? p.potenciaNominalW ?? -1;
    const aut = (p: PatineteComparador) =>
      p.autonomiaKm ?? p.autonomiaRealKm ?? -1;
    switch (orden) {
      case "precioAsc":
        lista.sort((a, b) => (a.precioEur ?? Infinity) - (b.precioEur ?? Infinity));
        break;
      case "precioDesc":
        lista.sort((a, b) => (b.precioEur ?? -Infinity) - (a.precioEur ?? -Infinity));
        break;
      case "potDesc":
        lista.sort((a, b) => pot(b) - pot(a));
        break;
      case "autDesc":
        lista.sort((a, b) => aut(b) - aut(a));
        break;
    }
    return lista;
  }, [busqueda, precioMax, potMin, autMin, soloDgt, orden]);

  const visibles = filtrados.slice(0, visibleCount);

  /* ── Flip ── */
  const [giradas, setGiradas] = useState<Set<string>>(new Set());
  const toggleGiro = (id: string) =>
    setGiradas((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  /* ── Selección para el duelo (máx 3) ── */
  const [sel, setSel] = useState<string[]>([]);
  const [dueloAbierto, setDueloAbierto] = useState(false);
  const [registroIA, setRegistroIA] = useState<Record<string, PatineteComparador>>({});
  const patineteDe = (id: string): PatineteComparador | undefined =>
    porId.get(id) ?? registroIA[id];

  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);
  const mostrarToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  };

  const toggleDuelo = (id: string) => {
    setSel((prev) => {
      if (prev.includes(id)) {
        const next = prev.filter((x) => x !== id);
        if (next.length < 2) setDueloAbierto(false);
        return next;
      }
      if (prev.length >= 3) {
        mostrarToast("Máximo 3 patinetes en el duelo");
        return prev;
      }
      return [...prev, id];
    });
  };
  const quitarDeDuelo = (id: string) => {
    setSel((prev) => {
      const next = prev.filter((x) => x !== id);
      if (next.length < 2) setDueloAbierto(false);
      return next;
    });
  };
  const limpiarDuelo = () => {
    setSel([]);
    setDueloAbierto(false);
  };
  const verDuelo = () => {
    if (sel.length < 2) {
      mostrarToast("Añade al menos 2 patinetes al duelo");
      return;
    }
    setDueloAbierto(true);
  };

  /* ── Datos del duelo ── */
  const patinetesDuelo: PatineteComparador[] = useMemo(
    () =>
      sel
        .map((id) => patineteDe(id))
        .filter((p): p is PatineteComparador => p != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sel, registroIA]
  );

  // ── "La elección de Cosa": mejor nota determinista entre los 2 del duelo ──
  // (criterio honesto y automático, ver lib/cosa.ts; los patinetes no tienen
  // test EuroNCAP y su peso se reparte sin penalizar)
  const entradaPatineteCosa = (p: PatineteComparador): NotaCosaInput => ({
    precioEur: p.precioEur,
    potenciaCv: p.potenciaNominalW != null ? p.potenciaNominalW / 735.5 : null,
    estrellasEuroNCAP: null,
    autonomiaKm: p.autonomiaRealKm ?? p.autonomiaKm,
    pesoKg: p.pesoKg,
  });
  const eleccionDueloId =
    patinetesDuelo.length >= 2
      ? patinetesDuelo[
          elegirCosaIndice(
            entradaPatineteCosa(patinetesDuelo[0]),
            entradaPatineteCosa(patinetesDuelo[1])
          )
        ].id
      : undefined;

  const dueloItems: ItemDuelo[] = useMemo(
    () =>
      patinetesDuelo.map((p) => ({
        id: p.id,
        titulo: `${p.marca} ${p.modelo}`,
        subtitulo: p.precioEur != null ? `${fmtMiles(p.precioEur)} €` : undefined,
        imagen: p.foto && !p.fotoPendiente ? p.foto : undefined,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [patinetesDuelo]
  );

  const { dueloFilas, veredicto } = useMemo(() => {
    const items = sel
      .map((id) => patineteDe(id))
      .filter((p): p is PatineteComparador => p != null);
    const puntos = new Array(items.length).fill(0);
    const filas: FilaDuelo[] = FILAS_DUELO.map((f) => {
      const nums = items.map((p) => f.num(p));
      const ganador = indiceGanador(nums, f.mejor);
      if (ganador != null) puntos[ganador] += 1;
      return {
        etiqueta: f.etiqueta,
        valores: items.map((p) => f.texto(p)),
        ganador,
        barras: items.map((_, i) => barraProporcional(nums, i, f.mejor)),
      };
    });
    let texto = "";
    if (items.length >= 2) {
      const maxPts = Math.max(...puntos);
      const top = puntos.reduce<number[]>(
        (acc, pts, i) => (pts === maxPts ? [...acc, i] : acc),
        []
      );
      if (top.length === 1 && maxPts > 0) {
        const p = items[top[0]];
        texto = `Gana el duelo: ${p.marca} ${p.modelo} (${maxPts} de ${FILAS_DUELO.length} categorías).`;
      } else if (top.length > 1) {
        const nombres = top.map((i) => `${items[i].marca} ${items[i].modelo}`).join(" y ");
        texto = `Empate técnico entre ${nombres}: cada uno gana en ${maxPts} categorías. El mejor depende de tus trayectos.`;
      } else {
        texto = "Sin datos suficientes para declarar un ganador: revisa los puntos fuertes y débiles de cada ficha.";
      }
    }
    return { dueloFilas: filas, veredicto: texto };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sel, registroIA]);

  const dueloRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!dueloAbierto) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => {
      dueloRef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }, 90);
    return () => window.clearTimeout(t);
  }, [dueloAbierto]);

  /* ── Sincronizar altura de las tarjetas (anverso/reverso) ── */
  const gridRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const root = gridRef.current;
    if (!root) return;
    const sync = () => {
      const cards = Array.from(root.querySelectorAll<HTMLElement>(".flip-card"));
      cards.forEach((c) => {
        c.style.height = "";
      });
      let max = 300;
      cards.forEach((c) => {
        const front = c.querySelector<HTMLElement>(".flip-card-front > *");
        const back = c.querySelector<HTMLElement>(".flip-card-back > *");
        const h = Math.max(front?.scrollHeight ?? 0, back?.scrollHeight ?? 0);
        if (h > max) max = h;
      });
      cards.forEach((c) => {
        c.style.height = `${max}px`;
      });
    };
    sync();
    const t = window.setTimeout(sync, 1500);
    window.addEventListener("resize", sync, { passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", sync);
    };
  }, [filtrados]);

  /* ── Búsqueda libre con IA (se conserva la funcionalidad actual) ── */
  // 26/10/2026: sin useAction (no hay ConvexProvider ancestro en esta ruta); se
  // llama al cliente singleton bajo demanda para no crashear ni vaciar el prerender.
  const investigarPatinete = async (
    args: Parameters<NonNullable<ReturnType<typeof getConvexClient>>["action"]>[1],
  ) => {
    await loadConvex();
    const c = getConvexClient();
    if (!c) throw new Error("Convex no disponible");
    return c.action(api.comparadorPatinetes.investigarPatinete, args as never);
  };
  const [iaMarca, setIaMarca] = useState("");
  const [iaModelo, setIaModelo] = useState("");
  const [iaCargando, setIaCargando] = useState(false);
  const [iaError, setIaError] = useState<string | null>(null);
  const [resultadoIA, setResultadoIA] = useState<PatineteComparador | null>(null);
  const resultadoIARef = useRef<HTMLDivElement>(null);

  const buscarConIA = async () => {
    const marca = iaMarca.trim();
    const modelo = iaModelo.trim();
    setIaError(null);
    if (!marca || !modelo) {
      setIaError("Escribe la marca y el modelo para investigar.");
      return;
    }
    // Caso 1: ya está en la base → resultado directo, sin IA
    const enBase = buscarEnBasePatinetes(marca, modelo);
    if (enBase) {
      const p = porId.get(enBase);
      if (p) {
        setRegistroIA((prev) => ({ ...prev, [p.id]: p }));
        setResultadoIA(p);
      }
      return;
    }
    // Caso 2: la IA investiga en la web
    setIaCargando(true);
    try {
      const res = await investigarPatinete({
        marca,
        modelo,
        fingerprint: getAnonymousFingerprint(),
      });
      if ("encontradoEnBase" in res) {
        const p = porId.get(res.encontradoEnBase);
        if (p) {
          setRegistroIA((prev) => ({ ...prev, [p.id]: p }));
          setResultadoIA(p);
        }
        return;
      }
      const ficha = fichaPatineteIAToPatinete(res.ficha, { deCache: res.deCache });
      setRegistroIA((prev) => ({ ...prev, [ficha.id]: ficha }));
      setResultadoIA(ficha);
    } catch (err) {
      setIaError(
        err instanceof Error
          ? err.message
          : "No se pudo investigar el modelo. Inténtalo de nuevo."
      );
    } finally {
      setIaCargando(false);
    }
  };

  useLayoutEffect(() => {
    if (!resultadoIA) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => {
      resultadoIARef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "center",
      });
    }, 90);
    return () => window.clearTimeout(t);
  }, [resultadoIA]);

  const sinResultados = busqueda.trim() !== "" && filtrados.length === 0;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />

      <main>
        <nav
          className="mx-auto max-w-5xl px-4 pt-4 text-xs text-gray-500"
          aria-label="Migas de pan"
        >
          <Link to="/" className="hover:underline">
            Inicio
          </Link>{" "}
          ·{" "}
          <Link to="/fichas-tecnicas/" className="hover:underline">
            Fichas Técnicas
          </Link>{" "}
          · <span className="text-gray-700">Comparador de patinetes</span>
        </nav>

        <div className="mt-3">
          <HeroVS
            imagen1="/media/patinetes/apollo-air.webp"
            imagen2="/media/patinetes/aovopro-ap07.webp"
            alt1="Patinete eléctrico en la ciudad"
            alt2="Detalle de un patinete eléctrico"
            titulo="Comparador de patinetes eléctricos"
            subtitulo="Compara precios, autonomía real, potencia y certificado DGT de todos los patinetes 2024-2026"
            busqueda={busqueda}
            onBusqueda={(v) => { setBusqueda(v); setVisibleCount(24); }}
            placeholderBusqueda="Busca marca o modelo… (ej. Xiaomi, Bongo)"
            stats={[
              { valor: PATINETES_PUBLICADOS.length, etiqueta: "modelos" },
              { valor: "2026", etiqueta: "actualizado" },
              { valor: "≈70%", etiqueta: "autonomía real" },
            ]}
            ocultarVS
          />
        </div>

        <div className="mx-auto max-w-5xl px-4">
          <div className="mt-4 flex justify-end">
            <CompartirBotones
              titulo="Comparador de patinetes eléctricos 2026"
              texto="Comparador de patinetes eléctricos: precios, autonomía real, potencia y certificado DGT"
            />
          </div>
          {/* ── Filtros ── */}
          <section aria-label="Filtros del comparador" className="mt-6">
            <div className="flex flex-wrap items-end gap-2.5">
              <label className={CLASE_LABEL}>
                Precio máximo
                <select
                  className={CLASE_SELECT}
                  value={precioMax}
                  onChange={(e) => { setPrecioMax(Number(e.target.value)); setVisibleCount(24); }}
                >
                  <option value={0}>Sin límite</option>
                  <option value={300}>Hasta 300 €</option>
                  <option value={400}>Hasta 400 €</option>
                  <option value={500}>Hasta 500 €</option>
                  <option value={700}>Hasta 700 €</option>
                  <option value={1000}>Hasta 1.000 €</option>
                </select>
              </label>
              <label className={CLASE_LABEL}>
                Potencia mínima
                <select
                  className={CLASE_SELECT}
                  value={potMin}
                  onChange={(e) => { setPotMin(Number(e.target.value)); setVisibleCount(24); }}
                >
                  <option value={0}>Sin mínimo</option>
                  <option value={250}>250+ W</option>
                  <option value={350}>350+ W</option>
                  <option value={500}>500+ W</option>
                </select>
              </label>
              <label className={CLASE_LABEL}>
                Autonomía mínima
                <select
                  className={CLASE_SELECT}
                  value={autMin}
                  onChange={(e) => { setAutMin(Number(e.target.value)); setVisibleCount(24); }}
                >
                  <option value={0}>Sin mínimo</option>
                  <option value={25}>25+ km</option>
                  <option value={40}>40+ km</option>
                  <option value={60}>60+ km</option>
                </select>
              </label>
              <label className={CLASE_LABEL}>
                Ordenar por
                <select
                  className={CLASE_SELECT}
                  value={orden}
                  onChange={(e) => { setOrden(e.target.value as OrdenKey); setVisibleCount(24); }}
                >
                  <option value="precioAsc">Precio: menor a mayor</option>
                  <option value="precioDesc">Precio: mayor a menor</option>
                  <option value="potDesc">Potencia: mayor a menor</option>
                  <option value="autDesc">Autonomía: mayor a menor</option>
                </select>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-[#dedede] bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-[#cd001d]">
                <input
                  type="checkbox"
                  checked={soloDgt}
                  onChange={(e) => { setSoloDgt(e.target.checked); setVisibleCount(24); }}
                  className="h-4 w-4 accent-[#cd001d]"
                />
                Solo certificado DGT
              </label>
            </div>
            <p className="mt-3 text-[13px] text-gray-500">
              <b className="text-[#cd001d]">{filtrados.length}</b>{" "}
              {filtrados.length === 1 ? "modelo encontrado" : "modelos encontrados"}
            </p>
          </section>

          {/* ── Grid 2 columnas de flip cards ── */}
          {filtrados.length > 0 ? (
            <section aria-label="Modelos" className="mt-2">
              <div ref={gridRef} className="grid grid-cols-2 items-start gap-3 sm:gap-4">
                {visibles.map((p) => (
                  <FlipCard
                    key={p.id}
                    className="w-full"
                    flipped={giradas.has(p.id)}
                    onFlip={() => toggleGiro(p.id)}
                    anverso={
                      <Anverso
                        p={p}
                        enDuelo={sel.includes(p.id)}
                        onToggle={() => toggleDuelo(p.id)}
                      />
                    }
                    reverso={<Reverso p={p} />}
                  />
                ))}
              </div>
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
                <strong>—</strong> = dato no publicado por el fabricante. <strong>≈</strong> =
                estimación (la autonomía real es una estimación conservadora, ≈65-70 % de la
                declarada, para uso urbano real).
              </p>
            </section>
          ) : (
            <section aria-label="Sin resultados" className="mt-2">
              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
                <Battery className="mx-auto h-8 w-8 text-gray-400" aria-hidden="true" />
                <p className="mt-2 font-bold text-gray-900">Sin resultados en la base</p>
                <p className="mt-1 text-sm text-gray-600">
                  Ningún modelo coincide con tu búsqueda
                  {busqueda.trim() !== "" && (
                    <>
                      {" "}
                      de <strong>«{busqueda.trim()}»</strong>
                    </>
                  )}{" "}
                  y los filtros activos.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setBusqueda("");
                    setPrecioMax(0);
                    setPotMin(0);
                    setAutMin(0);
                    setSoloDgt(false);
                    setVisibleCount(24);
                  }}
                  className="mt-3 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#cd001d] hover:text-[#cd001d]"
                >
                  Limpiar búsqueda y filtros
                </button>
              </div>
            </section>
          )}

          {/* ── Duelo cara a cara ── */}
          {dueloAbierto && dueloItems.length >= 2 && (
            <div ref={dueloRef} className="scroll-mt-24">
              <DueloVS
                id="duelo-patinetes"
                items={dueloItems}
                filas={dueloFilas}
                veredicto={veredicto}
                eleccionId={eleccionDueloId}
                onCerrar={() => setDueloAbierto(false)}
              />
            </div>
          )}

          {/* ── Búsqueda libre con IA ── */}
          <section
            aria-label="Búsqueda con inteligencia artificial"
            className="mt-10 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-4 sm:p-6"
          >
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-gray-900">
              <Sparkles className="h-5 w-5 text-violet-600" aria-hidden="true" />
              ¿No encuentras tu patinete?
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Si el modelo que buscas no está en la base, nuestra IA lo investiga en la web y
              genera su ficha al momento, marcada como generada por IA.
            </p>
            {sinResultados && (
              <p className="mt-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                Sin resultados para «{busqueda.trim()}» en la base.{" "}
                <button
                  type="button"
                  onClick={() => setIaMarca(busqueda.trim())}
                  className="font-bold underline hover:text-amber-700"
                >
                  Usar mi búsqueda en la investigación con IA
                </button>
              </p>
            )}
            <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Marca
                <input
                  type="text"
                  value={iaMarca}
                  onChange={(e) => setIaMarca(e.target.value)}
                  placeholder="Ej. Xiaomi"
                  className={CLASE_SELECT}
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Modelo
                <input
                  type="text"
                  value={iaModelo}
                  onChange={(e) => setIaModelo(e.target.value)}
                  placeholder="Ej. Electric Scooter 5"
                  className={CLASE_SELECT}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") buscarConIA();
                  }}
                />
              </label>
              <button
                type="button"
                onClick={buscarConIA}
                disabled={iaCargando}
                className="inline-flex items-center justify-center gap-2 self-end rounded-[10px] bg-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-700 disabled:cursor-wait disabled:opacity-60"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {iaCargando ? "Investigando…" : "Investigar con IA"}
              </button>
            </div>
            {iaError && (
              <p role="alert" className="mt-2 text-sm font-medium text-red-600">
                {iaError}
              </p>
            )}

            {resultadoIA && (
              <div ref={resultadoIARef} className="mt-4 scroll-mt-24">
                <div className="rounded-2xl border-2 border-violet-200 bg-white p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      {resultadoIA.esIA ? "Ficha generada por IA" : "Modelo de la base"}
                    </span>
                    {resultadoIA.confianza && (
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          resultadoIA.confianza === "alta"
                            ? "bg-emerald-100 text-emerald-700"
                            : resultadoIA.confianza === "media"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {CONFIANZA_TXT[resultadoIA.confianza]}
                      </span>
                    )}
                    {resultadoIA.deCache && (
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        Resultado instantáneo
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-xl font-extrabold text-gray-900">
                    {resultadoIA.marca} {resultadoIA.modelo}
                  </h3>
                  <p className="text-lg font-extrabold text-[#cd001d]">
                    {fmtEur(resultadoIA.precioEur)}
                  </p>

                  {resultadoIA.esIA && (
                    <p className="mt-2 rounded-xl bg-violet-50 p-3 text-xs text-violet-900">
                      Ficha investigada automáticamente en la web. Los datos con{" "}
                      <strong>≈</strong> son estimaciones y la ficha está pendiente de revisión
                      humana.
                      {resultadoIA.fuenteNombre && (
                        <>
                          {" "}
                          Fuente principal:{" "}
                          {resultadoIA.fuenteUrl ? (
                            <a
                              href={resultadoIA.fuenteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium underline"
                            >
                              {resultadoIA.fuenteNombre}
                            </a>
                          ) : (
                            resultadoIA.fuenteNombre
                          )}
                          .
                        </>
                      )}
                    </p>
                  )}

                  <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      ["Precio", fmtEur(resultadoIA.precioEur)],
                      ["Potencia", fmtPotencia(resultadoIA)],
                      [
                        "Autonomía real",
                        resultadoIA.autonomiaRealKm == null
                          ? "—"
                          : `≈ ${resultadoIA.autonomiaRealKm} km`,
                      ],
                      ["Batería", fmtWh(resultadoIA.bateriaWh)],
                      ["Peso", fmtKg(resultadoIA.pesoKg)],
                      [
                        "Certificado DGT",
                        resultadoIA.certificadoDgt === true ? "✓ Sí" : "—",
                      ],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl bg-gray-50 px-3 py-2">
                        <dt className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                          {k}
                        </dt>
                        <dd className="text-sm font-bold text-gray-900">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <h4 className="flex items-center gap-1.5 text-sm font-bold text-emerald-700">
                        <Check className="h-4 w-4" aria-hidden="true" /> Puntos fuertes
                      </h4>
                      <ul className="mt-1.5 space-y-1.5">
                        {resultadoIA.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-1.5 text-sm font-bold text-red-600">
                        <Minus className="h-4 w-4" aria-hidden="true" /> Puntos débiles
                      </h4>
                      <ul className="mt-1.5 space-y-1.5">
                        {resultadoIA.contras.slice(0, 3).map((c, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-700">
                            <Minus className="mt-1 h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleDuelo(resultadoIA.id)}
                      className={`rounded-xl border-2 px-4 py-2 text-sm font-bold transition ${
                        sel.includes(resultadoIA.id)
                          ? "border-[#cd001d] bg-[#cd001d] text-white"
                          : "border-[#cd001d] bg-white text-[#cd001d] hover:bg-[#fdecec]"
                      }`}
                    >
                      {sel.includes(resultadoIA.id) ? "✓ En el duelo" : "＋ Añadir al duelo"}
                    </button>
                    {!resultadoIA.esIA && (
                      <Link
                        to={`/patinetes/${resultadoIA.id}/`}
                        className="rounded-xl bg-[#cd001d] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#a50018]"
                      >
                        Ver ficha completa →
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => setResultadoIA(null)}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-500 transition hover:text-gray-800"
                    >
                      Limpiar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* ── FAQs ── */}
          <section className="mt-12 max-w-3xl pb-16">
            <h2 className="text-2xl font-extrabold text-gray-900">Preguntas frecuentes</h2>
            <div className="mt-4 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="rounded-2xl border border-gray-200 bg-white p-4"
                >
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <BarraComparar
        items={dueloItems.map((it) => ({
          id: it.id,
          etiqueta: it.titulo,
          imagen: it.imagen,
        }))}
        max={3}
        onQuitar={quitarDeDuelo}
        onVerDuelo={verDuelo}
        onLimpiar={limpiarDuelo}
      />

      {toast && (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-50 max-w-[90vw] -translate-x-1/2 rounded-[10px] bg-gray-900 px-4 py-2.5 text-center text-[13px] font-medium text-white shadow-xl"
        >
          {toast}
        </div>
      )}

      <SharedFooter />
    </div>
  );
}
