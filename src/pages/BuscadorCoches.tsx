// Buscador de coches (/buscador-coches/) — 08/10/2026, idea de Daniel.
// Wizard: modelo → presupuesto → km → zona → filtros → resultados.
// Rastrea Coches.net, Wallapop, Milanuncios y Autoscout24 vía Convex action,
// con "Averías típicas reportadas" (agregación automática de foros, nunca
// inventadas) y "Mi recomendación personal" (TOP 3 con motivos honestos).
import { Link } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { fmtMiles } from "@/lib/formato.ts";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Euro,
  ExternalLink,
  Gauge,
  Info,
  Loader2,
  Mail,
  MapPin,
  Medal,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero, Skeleton } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { MODELOS_BUSCADOR, TOTAL_MARCAS_BUSCADOR, type ModeloBuscador } from "@/lib/buscador-coches-modelos.generated.ts";
import {
  CAMBIOS,
  COMBUSTIBLES,
  KM_DEFECTO,
  KM_MAX,
  KM_MIN,
  KM_PASO,
  PORTAL_NOMBRE,
  PRESUPUESTO_DEFECTO,
  PRESUPUESTO_MAX,
  PRESUPUESTO_MIN,
  PRESUPUESTO_PASO,
  PROVINCIAS,
  formatoEur,
  formatoKm,
  normalizar,
  type Anuncio,
  type AveriasInfo,
  type BusquedaParams,
  type FuentesBusqueda,
  type HistorialPrecios,
  type Recomendacion,
  type ValoracionAnuncio,
  type ZonaTipo,
} from "@/lib/buscador-coches-data.ts";

const PASOS = ["Modelo", "Presupuesto", "Kilómetros", "Zona", "Filtros", "Resultados"];

const FAQS = [
  {
    q: "¿De dónde salen los anuncios del buscador?",
    a: "Rastreamos en tiempo real Coches.net, Wallapop, Milanuncios y Autoscout24 con los filtros que nos indicas (modelo, presupuesto máximo, km máximos y zona). Si un portal falla temporalmente, los demás siguen funcionando y te lo indicamos.",
  },
  {
    q: "¿Qué significa 'averías típicas reportadas'?",
    a: "Agregamos automáticamente lo que dicen usuarios reales en foros (forocoches, foros de cada modelo) y opiniones sobre fallos recurrentes del modelo, con enlaces a las fuentes. Si no encontramos información fiable, lo decimos claramente en vez de inventar datos.",
  },
  {
    q: "¿Cómo elegís la 'recomendación personal'?",
    a: "Ponderamos kilómetros, precio frente a la media de mercado, año, tipo de vendedor y las averías típicas del modelo. El TOP 3 lleva un motivo honesto por cada puesto; si hay empate técnico entre dos, lo decimos.",
  },
  {
    q: "¿Los precios están actualizados?",
    a: "Los resultados se cachean 1 hora para no saturar los portales. Los precios y la disponibilidad cambian rápido en segunda mano: abre siempre el anuncio original antes de desplazarte.",
  },
  {
    q: "¿Compartís mis datos con los portales?",
    a: "No. La búsqueda se hace desde nuestros servidores; los portales solo ven una visita anónima más. Tu email solo se usa para enviarte los resultados si nos lo pides.",
  },
  {
    q: "¿Puedo fiarme de un anuncio 'verificado'?",
    a: "La insignia 'verificado' la pone el propio portal (normalmente a vendedores profesionales). Aun así, revisa siempre el coche en persona, pide el informe de la DGT y desconfía de precios demasiado buenos para ser verdad.",
  },
  {
    q: "¿Qué es el informe de historial gratis?",
    a: "Somos el único buscador que incluye gratis los datos de historial disponibles: etiqueta ambiental de la DGT por matrícula (oficial), decodificación del VIN y señales del anuncio (km certificados, libro de revisiones). El historial completo de ITV y titulares solo lo vende la DGT; te dejamos el enlace directo para pedirlo.",
  },
  {
    q: "¿Cómo funcionan las alertas de precio?",
    a: "Guarda tu búsqueda con tu email y te avisamos gratis cuando baje el precio de un anuncio que sigue publicado o cuando aparezca uno nuevo más barato que cumpla tus filtros. Sin spam: solo avisos de tu búsqueda.",
  },
];

const FRECUENCIA_STYLE: Record<string, string> = {
  alta: "bg-red-100 text-red-800",
  media: "bg-amber-100 text-amber-800",
  baja: "bg-gray-100 text-gray-700",
};

function PasoAnimado({ children, pasoKey }: { children: React.ReactNode; pasoKey: number }) {
  return (
    <div key={pasoKey} className="bc-paso-enter">
      {children}
    </div>
  );
}

// ── Paso 1: autocompletado de modelo (+ modo manual) ─────────────────────────
function SelectorModelo({
  value,
  onSelect,
}: {
  value: ModeloBuscador | null;
  onSelect: (m: ModeloBuscador | null) => void;
}) {
  const [texto, setTexto] = useState(value && value.tieneFicha ? `${value.marca} ${value.modelo}` : "");
  const [abierto, setAbierto] = useState(false);
  const [resaltado, setResaltado] = useState(0);
  const [manual, setManual] = useState(false);
  const [marcaManual, setMarcaManual] = useState("");
  const [modeloManual, setModeloManual] = useState("");

  const resultados = useMemo(() => {
    const q = normalizar(texto);
    if (q.length < 2) return [];
    const starts: typeof MODELOS_BUSCADOR = [];
    const contains: typeof MODELOS_BUSCADOR = [];
    for (const m of MODELOS_BUSCADOR) {
      const nombre = normalizar(`${m.marca} ${m.modelo}`);
      if (nombre.startsWith(q)) starts.push(m);
      else if (nombre.includes(q)) contains.push(m);
      if (starts.length >= 8) break;
    }
    return [...starts, ...contains].slice(0, 8);
  }, [texto]);

  const elegir = (m: ModeloBuscador) => {
    onSelect(m);
    setTexto(`${m.marca} ${m.modelo}`);
    setAbierto(false);
  };

  const confirmarManual = () => {
    const marca = marcaManual.trim().slice(0, 40);
    const modelo = modeloManual.trim().slice(0, 60);
    if (marca.length < 2 || modelo.length < 2) return;
    onSelect({ id: "", marca, modelo, precioDesde: null, tieneFicha: false });
  };

  if (manual) {
    return (
      <div>
        <label className="block text-sm font-bold text-gray-800 mb-2">
          Escribe tu modelo a mano
        </label>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            value={marcaManual}
            onChange={(e) => setMarcaManual(e.target.value)}
            placeholder="Marca (ej: Seat)"
            className="px-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none"
            aria-label="Marca"
          />
          <input
            type="text"
            value={modeloManual}
            onChange={(e) => setModeloManual(e.target.value)}
            placeholder="Modelo (ej: León)"
            className="px-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none"
            aria-label="Modelo"
          />
        </div>
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={confirmarManual}
            disabled={marcaManual.trim().length < 2 || modeloManual.trim().length < 2}
            className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-red-700 disabled:opacity-40 transition"
          >
            Usar este modelo
          </button>
          <button
            onClick={() => setManual(false)}
            className="font-bold text-gray-500 hover:text-gray-800 transition"
          >
            Volver al buscador
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Sin ficha en nuestra web: la búsqueda y el análisis funcionan igual, pero sin enlace a ficha.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <label htmlFor="bc-modelo" className="block text-sm font-bold text-gray-800 mb-2">
        ¿Qué modelo buscas?
      </label>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          id="bc-modelo"
          type="text"
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            setAbierto(true);
            setResaltado(0);
            if (value) onSelect(null);
          }}
          onFocus={() => setAbierto(true)}
          onBlur={() => setTimeout(() => setAbierto(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" && resultados.length) {
              e.preventDefault();
              setResaltado((r) => (r + 1) % resultados.length);
            } else if (e.key === "ArrowUp" && resultados.length) {
              e.preventDefault();
              setResaltado((r) => (r - 1 + resultados.length) % resultados.length);
            } else if (e.key === "Enter" && resultados[resaltado]) {
              e.preventDefault();
              elegir(resultados[resaltado]);
            } else if (e.key === "Escape") {
              setAbierto(false);
            }
          }}
          placeholder="Ej: Volkswagen Golf, Toyota RAV4, BYD Atto 3…"
          className="w-full pl-12 pr-10 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
          autoComplete="off"
        />
        {texto && (
          <button
            onClick={() => {
              setTexto("");
              onSelect(null);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
            aria-label="Limpiar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {abierto && resultados.length > 0 && (
        <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {resultados.map((m, i) => (
            <li key={m.id}>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  elegir(m);
                }}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition ${
                  i === resaltado ? "bg-red-50" : "hover:bg-gray-50"
                }`}
              >
                <Car className="w-4 h-4 text-gray-400 shrink-0" />
                <span>
                  <strong className="text-gray-900">{m.marca}</strong>{" "}
                  <span className="text-gray-600">{m.modelo}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {value && (
        <p className="mt-3 flex items-center gap-2 text-sm text-emerald-700 font-semibold">
          <CheckCircle2 className="w-4 h-4" /> Modelo seleccionado: {value.marca} {value.modelo}
          {!value.tieneFicha && <span className="text-gray-500 font-normal">(sin ficha en la web)</span>}
        </p>
      )}
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          {MODELOS_BUSCADOR.length.toLocaleString("es-ES")} modelos · {TOTAL_MARCAS_BUSCADOR} marcas · escribe al menos 2 letras
        </p>
        <button
          onClick={() => {
            setManual(true);
            onSelect(null);
          }}
          className="text-xs font-bold text-red-700 hover:text-red-800 hover:underline"
        >
          ¿No está tu modelo? Escríbelo a mano
        </button>
      </div>
    </div>
  );
}

// ── Slider genérico ──────────────────────────────────────────────────────────
function SliderPaso({
  icon,
  titulo,
  descripcion,
  valor,
  min,
  max,
  paso,
  formato,
  onChange,
}: {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
  valor: number;
  min: number;
  max: number;
  paso: number;
  formato: (n: number) => string;
  onChange: (n: number) => void;
}) {
  const pct = ((valor - min) / (max - min)) * 100;
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-1">
        <span className="text-red-600">{icon}</span> {titulo}
      </label>
      <p className="text-sm text-gray-500 mb-4">{descripcion}</p>
      <div className="text-center mb-4">
        <span className="text-4xl font-black text-gray-900">{formato(valor)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={paso}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bc-slider w-full"
        style={{ background: `linear-gradient(to right, #dc2626 ${pct}%, #e5e7eb ${pct}%)` }}
        aria-label={titulo}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>{formato(min)}</span>
        <span>{formato(max)}</span>
      </div>
    </div>
  );
}

// ── Paso 4: zona ─────────────────────────────────────────────────────────────
function SelectorZona({
  zona,
  provincia,
  radioKm,
  onZona,
  onProvincia,
  onRadio,
}: {
  zona: ZonaTipo;
  provincia: string;
  radioKm: number;
  onZona: (z: ZonaTipo) => void;
  onProvincia: (p: string) => void;
  onRadio: (km: number) => void;
}) {
  const opciones: { id: ZonaTipo; titulo: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: "toda",
      titulo: "Toda España",
      desc: "Rastreo nacional: más ofertas donde elegir",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: "ciudad",
      titulo: "Mi provincia",
      desc: "Solo anuncios cerca de ti",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: "radio",
      titulo: "Por radio",
      desc: "Tú eliges los km a la redonda",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];
  return (
    <div>
      <p className="text-sm font-bold text-gray-800 mb-3">¿Dónde buscamos?</p>
      <div className="grid gap-3">
        {opciones.map((o) => (
          <button
            key={o.id}
            onClick={() => onZona(o.id)}
            className={`text-left border-2 rounded-2xl p-4 flex items-center gap-4 transition ${
              zona === o.id
                ? "border-red-500 bg-red-50 ring-2 ring-red-200"
                : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <span className={zona === o.id ? "text-red-600" : "text-gray-400"}>{o.icon}</span>
            <span>
              <span className="block font-bold text-gray-900">{o.titulo}</span>
              <span className="block text-sm text-gray-500">{o.desc}</span>
            </span>
            {zona === o.id && <CheckCircle2 className="w-5 h-5 text-red-600 ml-auto shrink-0" />}
          </button>
        ))}
      </div>
      {(zona === "ciudad" || zona === "radio") && (
        <div className="mt-4">
          <label htmlFor="bc-provincia" className="block text-sm font-bold text-gray-800 mb-2">
            Tu provincia
          </label>
          <select
            id="bc-provincia"
            value={provincia}
            onChange={(e) => onProvincia(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none bg-white"
          >
            <option value="">Elige provincia…</option>
            {PROVINCIAS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      )}
      {zona === "radio" && (
        <div className="mt-4">
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Radio: <span className="text-red-600">{radioKm} km</span>
          </label>
          <input
            type="range"
            min={25}
            max={500}
            step={25}
            value={radioKm}
            onChange={(e) => onRadio(Number(e.target.value))}
            className="bc-slider w-full"
            style={{
              background: `linear-gradient(to right, #dc2626 ${(radioKm / 500) * 100}%, #e5e7eb ${(radioKm / 500) * 100}%)`,
            }}
            aria-label="Radio en kilómetros"
          />
        </div>
      )}
    </div>
  );
}

// ── Paso 5: filtros extra ────────────────────────────────────────────────────
function FiltrosExtra({
  sinGolpes,
  version,
  combustible,
  cambio,
  anoMin,
  onSinGolpes,
  onVersion,
  onCombustible,
  onCambio,
  onAnoMin,
}: {
  sinGolpes: boolean;
  version: string;
  combustible: string;
  cambio: string;
  anoMin: string;
  onSinGolpes: (v: boolean) => void;
  onVersion: (v: string) => void;
  onCombustible: (v: string) => void;
  onCambio: (v: string) => void;
  onAnoMin: (v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <p className="text-sm font-bold text-gray-800 flex items-center gap-2">
        <SlidersHorizontal className="w-4 h-4 text-red-600" /> Afina tu búsqueda (opcional)
      </p>
      <button
        onClick={() => onSinGolpes(!sinGolpes)}
        className={`w-full text-left border-2 rounded-2xl p-4 flex items-center gap-4 transition ${
          sinGolpes ? "border-red-500 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <span
          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 ${
            sinGolpes ? "bg-red-600 border-red-600" : "border-gray-300"
          }`}
        >
          {sinGolpes && <CheckCircle2 className="w-4 h-4 text-white" />}
        </span>
        <span>
          <span className="block font-bold text-gray-900">Sin golpes ni siniestros</span>
          <span className="block text-sm text-gray-500">Descarta anuncios que mencionen golpes, siniestros o despiece</span>
        </span>
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bc-version" className="block text-sm font-bold text-gray-800 mb-2">
            Versión / acabado
          </label>
          <input
            id="bc-version"
            type="text"
            value={version}
            onChange={(e) => onVersion(e.target.value)}
            placeholder="Ej: GTI, Style, Long Range…"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="bc-ano" className="block text-sm font-bold text-gray-800 mb-2">
            Año mínimo
          </label>
          <select
            id="bc-ano"
            value={anoMin}
            onChange={(e) => onAnoMin(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none bg-white"
          >
            <option value="">Sin mínimo</option>
            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map((a) => (
              <option key={a} value={a}>
                {a} o posterior
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bc-comb" className="block text-sm font-bold text-gray-800 mb-2">
            Combustible
          </label>
          <select
            id="bc-comb"
            value={combustible}
            onChange={(e) => onCombustible(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none bg-white"
          >
            <option value="">Indiferente</option>
            {COMBUSTIBLES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bc-cambio" className="block text-sm font-bold text-gray-800 mb-2">
            Cambio
          </label>
          <select
            id="bc-cambio"
            value={cambio}
            onChange={(e) => onCambio(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none bg-white"
          >
            <option value="">Indiferente</option>
            {CAMBIOS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

// ── Tarjeta de anuncio ───────────────────────────────────────────────────────
function TarjetaAnuncio({ a, fichaId }: { a: Anuncio; fichaId?: string }) {
  return (
    <article className="bc-card bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col">
      <div className="relative aspect-[16/10] bg-gray-100">
        {a.imagen ? (
          <img
            src={a.imagen}
            alt={a.titulo}
            loading="lazy"
            width={640}
            height={400}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <Car className="w-16 h-16" />
          </div>
        )}
        <span className="absolute top-2 left-2 bg-black/70 text-white text-[11px] font-bold px-2 py-1 rounded-lg">
          {PORTAL_NOMBRE[a.portal]}
        </span>
        {a.verificado && (
          <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
            <BadgeCheck className="w-3 h-3" /> Verificado
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 grow">
        <h3 className="font-bold text-gray-900 leading-snug line-clamp-2">{a.titulo}</h3>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-2xl font-black text-gray-900">{formatoEur(a.precio)}</span>
          {a.difMercadoPct !== undefined && a.difMercadoPct <= -5 && (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
              {Math.abs(a.difMercadoPct)}% bajo mercado
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">
          {[a.ano ? String(a.ano) : null, formatoKm(a.km), a.ubicacion].filter(Boolean).join(" · ")}
          {a.vendedorTipo && ` · ${a.vendedorTipo === "profesional" ? "Profesional" : "Particular"}`}
        </p>
        <HistorialAnuncio a={a} />
        <div className="flex gap-2 mt-auto pt-2">
          {fichaId && (
            <Link
              to={`/coches/${fichaId}/`}
              className="flex-1 text-center text-sm font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-xl px-3 py-2.5 transition"
            >
              Ver ficha
            </Link>
          )}
          <a
            href={a.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 text-center text-sm font-bold text-white bg-gray-900 hover:bg-gray-700 rounded-xl px-3 py-2.5 transition flex items-center justify-center gap-1"
          >
            Ver anuncio <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

// ── "Te recomiendo": TOP 3 con motivos honestos ──────────────────────────────
function SeccionRecomendacion({
  recs,
  anuncios,
  fichaId,
}: {
  recs: Recomendacion[];
  anuncios: Anuncio[];
  fichaId?: string;
}) {
  if (!recs.length) return null;
  const porId = new Map(anuncios.map((a) => [a.id, a]));
  const etiquetas = ["Mi primera opción sería este", "Segunda opción", "Tercera opción"];
  const medallas = ["bg-amber-400 text-amber-950", "bg-gray-300 text-gray-800", "bg-orange-300 text-orange-950"];
  return (
    <section aria-label="Mi recomendación personal" className="mb-8">
      <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-5 md:p-7 text-white shadow-xl">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-black mb-1">
          <Sparkles className="w-6 h-6" /> Te recomiendo
        </h2>
        <p className="text-red-100 text-sm mb-5">
          Mi TOP 3 honesto según km, precio, año, vendedor y averías típicas del modelo.
        </p>
        <div className="grid gap-4">
          {recs.map((r) => {
            const a = porId.get(r.anuncioId);
            if (!a) return null;
            const idx = r.posicion - 1;
            return (
              <div key={r.anuncioId} className="bg-white rounded-2xl p-4 text-gray-900">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-black ${medallas[idx] ?? "bg-gray-200"}`}
                  >
                    {r.posicion}
                  </span>
                  <p className="font-bold">{etiquetas[idx]}</p>
                  {r.empateCon && (
                    <span className="ml-auto text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-lg">
                      Empate técnico
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-3">“{r.motivo}”</p>
                <div className="flex items-center gap-3 flex-wrap text-sm">
                  <span className="font-black text-lg">{formatoEur(a.precio)}</span>
                  <span className="text-gray-500">
                    {[a.ano ? String(a.ano) : null, formatoKm(a.km), a.ubicacion].filter(Boolean).join(" · ")}
                  </span>
                  <span className="ml-auto flex gap-2">
                    {fichaId && (
                      <Link
                        to={`/coches/${fichaId}/`}
                        className="text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg px-3 py-2 transition"
                      >
                        Ver ficha
                      </Link>
                    )}
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs font-bold text-white bg-gray-900 hover:bg-gray-700 rounded-lg px-3 py-2 transition flex items-center gap-1"
                    >
                      Ver anuncio <ExternalLink className="w-3 h-3" />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Averías típicas reportadas (agregación automática, nunca inventadas) ─────
function SeccionAverias({ info, marca, modelo }: { info: AveriasInfo; marca: string; modelo: string }) {
  return (
    <section aria-label="Averías típicas reportadas" className="mb-8">
      <div className="border-2 border-amber-200 bg-amber-50 rounded-3xl p-5 md:p-6">
        <h2 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-1">
          <Wrench className="w-5 h-5 text-amber-600" /> Averías típicas reportadas del {marca} {modelo}
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          Agregado automáticamente de foros y opiniones de usuarios. No lo escribimos nosotros.
        </p>
        {info.estado === "sin_datos" ? (
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
            Sin datos de averías reportadas para este modelo. Si lo compras, revisa igualmente el
            historial de mantenimiento con un mecánico de confianza.
          </p>
        ) : (
          <>
            <ul className="space-y-3 mb-4">
              {info.averias.map((av, i) => (
                <li key={i} className="bg-white rounded-2xl p-4 border border-amber-100">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <strong className="text-gray-900">{av.titulo}</strong>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${FRECUENCIA_STYLE[av.frecuencia] ?? ""}`}>
                      {av.frecuencia === "alta" ? "Muy reportada" : av.frecuencia === "media" ? "Reportada" : "Aislada"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{av.detalle}</p>
                </li>
              ))}
            </ul>
            {info.fuentes.length > 0 && (
              <div>
                <p className="text-xs font-bold text-gray-500 mb-2">Fuentes:</p>
                <ul className="flex flex-wrap gap-2">
                  {info.fuentes.map((f, i) => (
                    <li key={i}>
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-xs text-amber-800 bg-white border border-amber-200 rounded-full px-3 py-1.5 hover:bg-amber-100 transition inline-block"
                      >
                        {f.dominio}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function SkeletonResultados() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <Skeleton className="aspect-[16/10] w-full" />
          <div className="p-4 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-7 w-1/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
function BuscadorCochesContenido() {
  const [paso, setPaso] = useState(0);
  const [modo, setModo] = useState<"buscar" | "valorar">("buscar");
  const [modeloSel, setModeloSel] = useState<ModeloBuscador | null>(null);
  const [presupuesto, setPresupuesto] = useState(PRESUPUESTO_DEFECTO);
  const [km, setKm] = useState(KM_DEFECTO);
  const [zona, setZona] = useState<ZonaTipo>("toda");
  const [provincia, setProvincia] = useState("");
  const [radioKm, setRadioKm] = useState(100);
  const [sinGolpes, setSinGolpes] = useState(true);
  const [version, setVersion] = useState("");
  const [combustible, setCombustible] = useState("");
  const [cambio, setCambio] = useState("");
  const [anoMin, setAnoMin] = useState("");

  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [anuncios, setAnuncios] = useState<Anuncio[] | null>(null);
  const [fuentes, setFuentes] = useState<FuentesBusqueda | null>(null);
  const [cached, setCached] = useState(false);
  const [averias, setAverias] = useState<AveriasInfo | null>(null);
  const [cargandoAverias, setCargandoAverias] = useState(false);
  const [recs, setRecs] = useState<Recomendacion[] | null>(null);

  const [email, setEmail] = useState("");
  const [enviandoEmail, setEnviandoEmail] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const buscarAnuncios = useAction(api.buscadorCoches.buscarAnuncios);
  const obtenerAverias = useAction(api.buscadorCoches.obtenerAverias);
  const obtenerRecomendacion = useAction(api.buscadorCoches.obtenerRecomendacion);
  const enviarResultados = useAction(api.buscadorCoches.enviarResultados);
  const obtenerHistorialPrecios = useAction(api.buscadorCoches.historialPrecios);
  const [datosGrafica, setDatosGrafica] = useState<HistorialPrecios | null>(null);
  const [ultimaBusqueda, setUltimaBusqueda] = useState<BusquedaParams | null>(null);
  const resultadosRef = useRef<HTMLDivElement>(null);

  const puedeAvanzar = useMemo(() => {
    if (paso === 0) return modeloSel !== null;
    if (paso === 3) return zona === "toda" || provincia !== "";
    return true;
  }, [paso, modeloSel, zona, provincia]);

  const lanzarBusqueda = async () => {
    if (!modeloSel) return;
    setBuscando(true);
    setError(null);
    setAnuncios(null);
    setAverias(null);
    setRecs(null);
    setFuentes(null);
    const params: BusquedaParams = {
      marca: modeloSel.marca,
      modelo: modeloSel.modelo,
      modeloId: modeloSel.id,
      presupuestoMax: presupuesto,
      kmMax: km,
      anoMin: anoMin ? Number(anoMin) : undefined,
      zona,
      provincia: provincia || undefined,
      radioKm: zona === "radio" ? radioKm : undefined,
      sinGolpes,
      version: version.trim() || undefined,
      combustible: combustible || undefined,
      cambio: cambio || undefined,
    };
    try {
      const res = await buscarAnuncios({ params });
      setAnuncios(res.anuncios);
      setFuentes(res.fuentes);
      setCached(res.cached);
      setUltimaBusqueda(params);
      setDatosGrafica(null);
      setPaso(5);
      // Gráfica de precios (no bloquea)
      obtenerHistorialPrecios({
        marca: modeloSel.marca,
        modelo: modeloSel.modelo,
        precioNuevo: modeloSel.precioDesde ?? undefined,
      })
        .then((h) => setDatosGrafica(h as HistorialPrecios))
        .catch(() => setDatosGrafica({ ok: false, puntos: [] }));
      // Averías + recomendación en paralelo (no bloquean los resultados)
      setCargandoAverias(true);
      try {
        const av = await obtenerAverias({
          modeloId: modeloSel.id,
          marca: modeloSel.marca,
          modelo: modeloSel.modelo,
        });
        setAverias(av);
        try {
          const r = await obtenerRecomendacion({
            marca: modeloSel.marca,
            modelo: modeloSel.modelo,
            anuncios: res.anuncios,
            averias: av.estado === "ok" ? { estado: "ok" as const, averias: av.averias } : { estado: "sin_datos" as const, averias: [] },
          });
          setRecs(r.recomendaciones);
        } catch {
          setRecs([]);
        }
      } catch {
        setAverias({ estado: "sin_datos", averias: [], fuentes: [] });
      } finally {
        setCargandoAverias(false);
      }
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "No hemos podido completar la búsqueda. Inténtalo de nuevo."
      );
    } finally {
      setBuscando(false);
      setTimeout(() => resultadosRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  const enviarEmail = async () => {
    if (!modeloSel || !anuncios) return;
    const em = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) {
      setEmailError("Escribe un email válido.");
      return;
    }
    setEnviandoEmail(true);
    setEmailError(null);
    try {
      await enviarResultados({
        email: em,
        marca: modeloSel.marca,
        modelo: modeloSel.modelo,
        presupuestoMax: presupuesto,
        anuncios: anuncios.slice(0, 10),
      });
      setEmailOk(true);
    } catch {
      setEmailError("No se pudo enviar. Inténtalo de nuevo.");
    } finally {
      setEnviandoEmail(false);
    }
  };

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          name: "Buscador de coches de ocasión",
          url: "https://recurretumulta.online/buscador-coches/",
          applicationCategory: "ShoppingApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
          description:
            "Encuentra tu coche ideal: rastreamos Coches.net, Wallapop, Milanuncios y Autoscout24 con tu presupuesto, km y zona. Con averías típicas reportadas y recomendación personal.",
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
            { "@type": "ListItem", position: 3, name: "Buscador de coches", item: "https://recurretumulta.online/buscador-coches/" },
          ],
        },
      ],
    }),
    []
  );

  useSeo({
    title: "Buscador de coches de ocasión",
    description:
      "Rastreamos Coches.net, Wallapop, Milanuncios y Autoscout24 por ti. Averías típicas, recomendación honesta, historial gratis y alertas de precio.",
    canonical: "/buscador-coches",
    image: "https://recurretumulta.online/media/og-recurretumulta-online.png",
    keywords: ["buscador coches ocasión", "encontrar coche segunda mano", "comparar ofertas coches", "qué coche comprar"],
    schema: jsonLd,
  });

  const PORTAL_NOMBRE_FUENTE: Record<keyof FuentesBusqueda, string> = {
    wallapop: "Wallapop",
    milanuncios: "Milanuncios",
    cochesNet: "Coches.net",
    autoscout24: "Autoscout24",
  };
  const fichaId = modeloSel && modeloSel.tieneFicha && modeloSel.id ? modeloSel.id : undefined;
  const fuentesFallo = (Object.keys(fuentes ?? {}) as (keyof FuentesBusqueda)[]).filter(
    (k) => fuentes?.[k] === "fallo"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .bc-paso-enter { animation: bc-paso-in 0.35s ease-out; }
        @keyframes bc-paso-in { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: none; } }
        .bc-slider { -webkit-appearance: none; appearance: none; height: 10px; border-radius: 9999px; outline: none; }
        .bc-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; border-radius: 9999px; background: #fff; border: 3px solid #dc2626; box-shadow: 0 2px 8px rgba(0,0,0,.2); cursor: pointer; }
        .bc-slider::-moz-range-thumb { width: 28px; height: 28px; border-radius: 9999px; background: #fff; border: 3px solid #dc2626; box-shadow: 0 2px 8px rgba(0,0,0,.2); cursor: pointer; }
        .bc-card { transition: transform .2s ease, box-shadow .2s ease; }
        .bc-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,.1); }
        @media (prefers-reduced-motion: reduce) { .bc-paso-enter, .bc-card { animation: none; transition: none; } }
      `}</style>
      <SharedNavbar />
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <nav className="text-xs text-gray-500 mb-4" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/herramientas/" className="hover:underline">Herramientas</Link> ·{" "}
          <span className="text-gray-700">Buscador de coches</span>
        </nav>

        <div className="mb-8">
          <PageHero
            image="/media/volkswagen-golf-2025-precio-ficha-tecnica-hero.webp"
            imageAlt="Volkswagen Golf, ejemplo de búsqueda de coche de ocasión"
            badge="Nueva herramienta"
            title="Buscador de coches de ocasión"
            subtitle="Dinos qué buscas y rastreamos Coches.net, Wallapop, Milanuncios y Autoscout24 por ti. Con averías típicas reportadas, recomendación personal honesta, informe de historial gratis y alertas de precio."
          />
        </div>

        {/* Pestañas Buscar / Valorar */}
        <div className="flex gap-2 mb-6" role="tablist" aria-label="Modo de la herramienta">
          <button
            role="tab"
            aria-selected={modo === "buscar"}
            onClick={() => setModo("buscar")}
            className={`flex-1 md:flex-none px-5 py-3 rounded-2xl font-black text-sm transition ${
              modo === "buscar" ? "bg-red-600 text-white shadow" : "bg-white border border-gray-200 text-gray-600 hover:border-red-300"
            }`}
          >
            🔍 Buscar coche
          </button>
          <button
            role="tab"
            aria-selected={modo === "valorar"}
            onClick={() => setModo("valorar")}
            className={`flex-1 md:flex-none px-5 py-3 rounded-2xl font-black text-sm transition ${
              modo === "valorar" ? "bg-red-600 text-white shadow" : "bg-white border border-gray-200 text-gray-600 hover:border-red-300"
            }`}
          >
            🧐 ¿Ya tienes un coche visto?
          </button>
        </div>

        {modo === "valorar" && <PanelValorador />}

        {modo === "buscar" && (
        <>
        {/* Wizard */}
        <section aria-label="Asistente de búsqueda" className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 md:p-8 mb-10">
          {/* Indicador de pasos */}
          <ol className="flex items-center gap-1 md:gap-2 mb-8 overflow-x-auto" aria-label="Progreso">
            {PASOS.map((p, i) => (
              <li key={p} className="flex items-center gap-1 md:gap-2 shrink-0">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                    i < paso
                      ? "bg-emerald-600 text-white"
                      : i === paso
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {i < paso ? "✓" : i + 1}
                </span>
                <span className={`text-xs font-bold hidden sm:block ${i === paso ? "text-gray-900" : "text-gray-400"}`}>
                  {p}
                </span>
                {i < PASOS.length - 1 && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </li>
            ))}
          </ol>

          <PasoAnimado pasoKey={paso}>
            {paso === 0 && <SelectorModelo value={modeloSel} onSelect={setModeloSel} />}
            {paso === 1 && (
              <SliderPaso
                icon={<Euro className="w-4 h-4" />}
                titulo="Presupuesto máximo"
                descripcion="No te mostraremos nada por encima de esta cifra."
                valor={presupuesto}
                min={PRESUPUESTO_MIN}
                max={PRESUPUESTO_MAX}
                paso={PRESUPUESTO_PASO}
                formato={formatoEur}
                onChange={setPresupuesto}
              />
            )}
            {paso === 2 && (
              <SliderPaso
                icon={<Gauge className="w-4 h-4" />}
                titulo="Kilómetros máximos"
                descripcion="Descartamos anuncios con más km de los que marques."
                valor={km}
                min={KM_MIN}
                max={KM_MAX}
                paso={KM_PASO}
                formato={formatoKm}
                onChange={setKm}
              />
            )}
            {paso === 3 && (
              <SelectorZona
                zona={zona}
                provincia={provincia}
                radioKm={radioKm}
                onZona={setZona}
                onProvincia={setProvincia}
                onRadio={setRadioKm}
              />
            )}
            {paso === 4 && (
              <FiltrosExtra
                sinGolpes={sinGolpes}
                version={version}
                combustible={combustible}
                cambio={cambio}
                anoMin={anoMin}
                onSinGolpes={setSinGolpes}
                onVersion={setVersion}
                onCombustible={setCombustible}
                onCambio={setCambio}
                onAnoMin={setAnoMin}
              />
            )}
            {paso === 5 && (
              <div ref={resultadosRef}>
                {buscando && (
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
                      <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                      Rastreando portales… esto tarda unos segundos
                    </p>
                    <SkeletonResultados />
                  </div>
                )}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-center">
                    <p className="text-red-800 font-bold mb-3">{error}</p>
                    <button
                      onClick={lanzarBusqueda}
                      className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-red-700 transition"
                    >
                      Reintentar
                    </button>
                  </div>
                )}
                {!buscando && !error && anuncios && (
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h2 className="text-xl font-black text-gray-900">
                        {anuncios.length} {anuncios.length === 1 ? "oferta encontrada" : "ofertas encontradas"}
                      </h2>
                      {cached && (
                        <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                          Resultados cacheados (1h)
                        </span>
                      )}
                      <InsigniaHistorial />
                    </div>
                    <p className="text-sm text-gray-500 mb-5">
                      {modeloSel?.marca} {modeloSel?.modelo} · máx. {formatoEur(presupuesto)} · máx. {formatoKm(km)}
                      {fuentesFallo.length > 0 && (
                        <span className="block mt-1 text-amber-700">
                          <Info className="w-3.5 h-3.5 inline mr-1" />
                          {fuentesFallo.map((f) => PORTAL_NOMBRE_FUENTE[f]).join(", ")} no{" "}
                          {fuentesFallo.length === 1 ? "respondió" : "respondieron"} esta vez; el resto sí.
                        </span>
                      )}
                    </p>

                    {cargandoAverias ? (
                      <div className="border-2 border-amber-200 bg-amber-50 rounded-3xl p-5 mb-8">
                        <p className="flex items-center gap-2 text-sm font-bold text-gray-700">
                          <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                          Investigando averías típicas en foros…
                        </p>
                      </div>
                    ) : (
                      averias &&
                      modeloSel && (
                        <SeccionAverias info={averias} marca={modeloSel.marca} modelo={modeloSel.modelo} />
                      )
                    )}

                    {recs && recs.length > 0 && (
                      <SeccionRecomendacion recs={recs} anuncios={anuncios} fichaId={fichaId} />
                    )}

                    {/* Gráfica de precios + alerta */}
                    <div className="grid gap-6 lg:grid-cols-[1fr_320px] items-start mb-8">
                      <div className="min-w-0">
                        {datosGrafica ? (
                          <GraficaPrecios datos={datosGrafica} marca={modeloSel?.marca ?? ""} modelo={modeloSel?.modelo ?? ""} />
                        ) : (
                          <div className="bg-white border border-gray-200 rounded-3xl p-5 mb-8 text-sm text-gray-500 flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" /> Calculando evolución del precio…
                          </div>
                        )}
                      </div>
                      <div className="lg:pt-1">
                        <FormularioAlerta params={ultimaBusqueda} />
                      </div>
                    </div>

                    {anuncios.length === 0 ? (
                      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                        <Car className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="font-bold text-gray-900 mb-1">Sin resultados con esos filtros</p>
                        <p className="text-sm text-gray-500 mb-4">
                          Prueba a subir el presupuesto, ampliar los km o buscar en toda España.
                        </p>
                        <button
                          onClick={() => setPaso(1)}
                          className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-red-700 transition"
                        >
                          Ajustar búsqueda
                        </button>
                      </div>
                    ) : (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {anuncios.map((a) => (
                          <TarjetaAnuncio key={a.id} a={a} fichaId={fichaId} />
                        ))}
                      </div>
                    )}

                    {/* Email */}
                    {anuncios.length > 0 && (
                      <div className="mt-8 bg-gray-900 rounded-3xl p-5 md:p-6 text-white">
                        <h3 className="flex items-center gap-2 font-black text-lg mb-1">
                          <Mail className="w-5 h-5" /> Envíame los resultados
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                          Te mandamos el TOP 10 a tu email para que lo mires con calma.
                        </p>
                        {emailOk ? (
                          <p className="flex items-center gap-2 text-emerald-400 font-bold">
                            <CheckCircle2 className="w-5 h-5" /> Enviado. Revisa tu bandeja (y el spam).
                          </p>
                        ) : (
                          <div>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                className="flex-1 px-4 py-3 rounded-xl text-gray-900 outline-none focus:ring-2 focus:ring-red-500"
                                aria-label="Tu email"
                              />
                              <button
                                onClick={enviarEmail}
                                disabled={enviandoEmail}
                                className="bg-red-600 hover:bg-red-500 disabled:opacity-50 font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2"
                              >
                                {enviandoEmail ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <ArrowRight className="w-4 h-4" />
                                )}
                                Enviar
                              </button>
                            </div>
                            {emailError && <p className="text-red-400 text-sm mt-2">{emailError}</p>}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </PasoAnimado>

          {/* Navegación del wizard */}
          {paso < 5 && (
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setPaso((p) => Math.max(0, p - 1))}
                disabled={paso === 0}
                className="flex items-center gap-1 font-bold text-gray-500 hover:text-gray-800 disabled:opacity-30 transition px-4 py-2.5"
              >
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              {paso < 4 ? (
                <button
                  onClick={() => puedeAvanzar && setPaso((p) => p + 1)}
                  disabled={!puedeAvanzar}
                  className="flex items-center gap-1 bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 disabled:opacity-40 transition"
                >
                  Siguiente <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={lanzarBusqueda}
                  disabled={buscando}
                  className="flex items-center gap-2 bg-red-600 text-white font-black px-8 py-3.5 rounded-xl hover:bg-red-700 disabled:opacity-50 transition text-lg"
                >
                  {buscando ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                  Buscar mi coche
                </button>
              )}
            </div>
          )}
          {paso === 5 && !buscando && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setPaso(0)}
                className="font-bold text-red-700 hover:text-red-800 transition"
              >
                ← Hacer otra búsqueda
              </button>
            </div>
          )}
        </section>
        </>
        )}

        {/* ¿Cómo funciona? */}
        <section aria-label="Cómo funciona" className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">¿Cómo funciona?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: <Search className="w-6 h-6" />, t: "1. Dinos qué buscas", d: "Modelo, presupuesto máximo, km y zona. Tardas 30 segundos." },
              { icon: <Car className="w-6 h-6" />, t: "2. Rastreamos por ti", d: "Buscamos en Coches.net, Wallapop, Milanuncios y Autoscout24 a la vez." },
              { icon: <Wrench className="w-6 h-6" />, t: "3. Veredicto mecánico", d: "Agregamos averías típicas reportadas en foros, con fuentes. Sin inventar." },
              { icon: <Medal className="w-6 h-6" />, t: "4. Te recomendamos", d: "TOP 3 honesto con motivos: precio vs mercado, km, vendedor y fiabilidad." },
              { icon: <ShieldCheck className="w-6 h-6" />, t: "5. Historial gratis", d: "Etiqueta DGT, VIN y señales del anuncio en cada resultado. El único buscador que lo incluye." },
              { icon: <Mail className="w-6 h-6" />, t: "6. Alertas y valorador", d: "Activa alertas de precio o pega un enlace y te decimos si es chollo o caro." },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-red-50 text-red-600 items-center justify-center mb-3">
                  {s.icon}
                </span>
                <p className="font-bold text-gray-900 mb-1">{s.t}</p>
                <p className="text-sm text-gray-500">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Preguntas frecuentes" className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-2xl p-5 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Nota honesta */}
        <section className="bg-blue-50 border border-blue-200 rounded-3xl p-5 md:p-6 mb-4">
          <p className="text-sm text-blue-900 leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-blue-700" />
            <span>
              <strong>Transparencia:</strong> no vendemos coches ni cobramos comisión por los anuncios.
              Los resultados son los que publican los portales; nuestro trabajo es filtrarlos, ordenarlos
              y añadir el contexto mecánico que nadie te da. Verifica siempre el anuncio original y el
              estado real del coche antes de pagar nada.
            </span>
          </p>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}

export default function BuscadorCoches() {
  return (
    <LazyConvexProvider>
      <BuscadorCochesContenido />
    </LazyConvexProvider>
  );
}

// ── Insignia propia "Historial verificado GRATIS" ────────────────────────────
// Diseño propio (escudo verde + check). NO usa logos ni marcas de terceros.
function InsigniaHistorial({ compacto = false }: { compacto?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-emerald-600 text-white font-black rounded-full shadow-md ${
        compacto ? "text-[11px] px-2.5 py-1" : "text-xs px-3.5 py-1.5"
      }`}
      title="Incluimos gratis los datos de historial disponibles: DGT por matrícula, VIN y señales del anuncio"
    >
      <ShieldCheck className={compacto ? "w-3.5 h-3.5" : "w-4 h-4"} />
      Historial verificado GRATIS
    </span>
  );
}

// ── Gráfica de precios SVG (ligera, sin librerías) ──────────────────────────
function GraficaPrecios({ datos, marca, modelo }: { datos: HistorialPrecios; marca: string; modelo: string }) {
  if (!datos.ok || !datos.puntos.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-5 text-sm text-gray-500">
        Sin datos suficientes para la gráfica de precios de este modelo.
      </div>
    );
  }
  const W = 620, H = 280, PL = 56, PR = 16, PT = 20, PB = 40;
  const vals = datos.puntos.map((p) => p.valor);
  const min = Math.min(...vals) * 0.92;
  const max = Math.max(...vals) * 1.05;
  const maxEdad = Math.max(...datos.puntos.map((p) => p.edad), 1);
  const x = (e: number) => PL + (e / maxEdad) * (W - PL - PR);
  const y = (v: number) => PT + (1 - (v - min) / (max - min)) * (H - PT - PB);
  const d = datos.puntos.map((p, i) => `${i === 0 ? "M" : "L"}${x(p.edad).toFixed(1)},${y(p.valor).toFixed(1)}`).join(" ");
  const senalColor = datos.senal === "buen_momento" ? "#16a34a" : datos.senal === "espera" ? "#dc2626" : "#6b7280";
  const senalIcono = datos.senal === "buen_momento" ? "🎯" : datos.senal === "espera" ? "⏳" : "➖";
  const fmtK = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k` : `${Math.round(v)}`);

  return (
    <section aria-label="Evolución del precio" className="mb-8">
      <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6">
        <h2 className="text-lg font-black text-gray-900 mb-1">
          Evolución del precio: {marca} {modelo}
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          Puntos <span className="font-bold text-gray-700">● sólidos</span> = datos reales ·
          línea <span className="font-bold text-gray-700">- - -</span> = depreciación estimada
        </p>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Gráfica de precios del ${marca} ${modelo}`}>
          {[0.25, 0.5, 0.75].map((f) => {
            const v = min + (max - min) * f;
            return (
              <g key={f}>
                <line x1={PL} y1={y(v)} x2={W - PR} y2={y(v)} stroke="#f3f4f6" strokeWidth="1" />
                <text x={PL - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{fmtK(v)}€</text>
              </g>
            );
          })}
          <path d={d} fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="7 5" />
          {datos.puntos.map((p, i) =>
            p.real ? (
              <g key={i}>
                <circle cx={x(p.edad)} cy={y(p.valor)} r="6" fill="#dc2626" stroke="#fff" strokeWidth="2.5" />
                <text x={x(p.edad)} y={y(p.valor) - 12} textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">
                  {fmtK(p.valor)}€
                </text>
                <text x={x(p.edad)} y={H - 12} textAnchor="middle" fontSize="11" fill="#6b7280">{p.etiqueta}</text>
              </g>
            ) : (
              <text key={i} x={x(p.edad)} y={H - 12} textAnchor="middle" fontSize="10" fill="#cbd5e1">{p.etiqueta}</text>
            )
          )}
        </svg>
        <div
          className="mt-4 rounded-2xl p-4 flex items-start gap-3"
          style={{ backgroundColor: `${senalColor}12`, border: `1.5px solid ${senalColor}40` }}
        >
          <span className="text-2xl">{senalIcono}</span>
          <div>
            <p className="font-black" style={{ color: senalColor }}>
              {datos.senal === "buen_momento" ? "Buen momento para comprar" : datos.senal === "espera" ? "Mejor esperar" : "Precio en línea"}
            </p>
            <p className="text-sm text-gray-600 mt-1">{datos.mensaje}</p>
            <p className="text-[11px] text-gray-400 mt-2">
              Basado en precio de nuevo ({datos.precioNuevo != null ? fmtMiles(datos.precioNuevo) : ""} €) y media actual de
              segunda mano ({datos.mediana != null ? fmtMiles(datos.mediana) : ""} €, {datos.n} anuncios, edad media {datos.edadMedia} años).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Valorador: resultado del análisis ────────────────────────────────────────
const VEREDICTO_STYLE: Record<string, { bg: string; texto: string; etiqueta: string }> = {
  chollo: { bg: "bg-emerald-600", texto: "text-emerald-700", etiqueta: "Es un chollo 🎯" },
  justo: { bg: "bg-blue-600", texto: "text-blue-700", etiqueta: "Precio justo, adelante 👍" },
  caro: { bg: "bg-red-600", texto: "text-red-700", etiqueta: "Caro: negocia o espera ⏳" },
  dudoso: { bg: "bg-gray-500", texto: "text-gray-700", etiqueta: "Dudoso: revisa con calma 🔍" },
};

function ResultadoValorador({ v }: { v: ValoracionAnuncio }) {
  const est = VEREDICTO_STYLE[v.veredicto ?? "dudoso"];
  return (
    <div className="space-y-5">
      <div className={`${est.bg} text-white rounded-3xl p-5 md:p-6 shadow-lg`}>
        <p className="text-sm font-bold text-white/80 mb-1">Mi veredicto</p>
        <h3 className="text-2xl font-black mb-2">{est.etiqueta}</h3>
        {v.titular && <p className="text-white/95 leading-relaxed">“{v.titular}”</p>}
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-5">
        <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
          <Car className="w-5 h-5 text-gray-400" /> {v.titulo}
        </h4>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
          <span className="text-2xl font-black text-gray-900">{v.precio !== undefined && formatoEur(v.precio)}</span>
          {v.ano && <span>{v.ano}</span>}
          {v.km !== undefined && <span>{formatoKm(v.km)}</span>}
          {v.ubicacion && <span>{v.ubicacion}</span>}
          {v.portal && <span className="bg-gray-100 rounded-lg px-2 py-0.5 text-xs font-bold">{PORTAL_NOMBRE[v.portal as Anuncio["portal"]]}</span>}
        </div>
        {v.difMercadoPct !== undefined && v.mercado && (
          <p className={`text-sm font-bold ${v.difMercadoPct <= 0 ? "text-emerald-700" : "text-red-700"}`}>
            {v.difMercadoPct <= 0 ? `${Math.abs(v.difMercadoPct)}% por debajo` : `${v.difMercadoPct}% por encima`} de
            la media ({fmtMiles(v.mercado.mediana)} €, {v.mercado.n} anuncios)
          </p>
        )}
      </div>

      {/* Historial del vehículo — CARACTERÍSTICA DESTACADA */}
      <div className="border-2 border-emerald-200 bg-emerald-50/60 rounded-3xl p-5">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <h4 className="font-black text-gray-900">Historial del vehículo</h4>
          <InsigniaHistorial compacto />
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="font-bold text-gray-700 shrink-0 w-28">Matrícula:</span>
            {v.matricula ? (
              <span className="font-mono font-bold bg-white border border-gray-200 rounded-lg px-2">{v.matricula}</span>
            ) : (
              <span className="text-gray-500">el anuncio no la muestra — <strong>pídesela al vendedor antes de quedar</strong></span>
            )}
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-gray-700 shrink-0 w-28">DGT:</span>
            {v.dgt?.encontrada ? (
              <span>
                Etiqueta <strong className={v.dgt.etiqueta ? "text-emerald-700" : "text-gray-500"}>
                  {v.dgt.etiqueta ?? "sin distintivo"}
                </strong>
                <span className="text-gray-500"> (datos oficiales DGT)</span>
              </span>
            ) : v.matricula ? (
              <span className="text-gray-500">datos ausentes en la DGT para esta matrícula</span>
            ) : (
              <span className="text-gray-500">datos ausentes (sin matrícula no se puede consultar)</span>
            )}
          </li>
          {v.vin && (
            <li className="flex items-start gap-2">
              <span className="font-bold text-gray-700 shrink-0 w-28">VIN:</span>
              {v.vinInfo?.encontrada ? (
                <span className="text-gray-600">
                  {[v.vinInfo.marca, v.vinInfo.modelo, v.vinInfo.ano ? String(v.vinInfo.ano) : null, v.vinInfo.combustible, v.vinInfo.pais].filter(Boolean).join(" · ")}
                </span>
              ) : (
                <span className="text-gray-500">datos ausentes (VIN no decodificado)</span>
              )}
            </li>
          )}
          {v.lineaHistorial && (
            <li className="bg-white border border-emerald-100 rounded-2xl p-3 text-gray-700 leading-relaxed">
              📋 {v.lineaHistorial}
            </li>
          )}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href="https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-xs font-bold text-emerald-800 bg-white border border-emerald-200 rounded-full px-3 py-1.5 hover:bg-emerald-100 transition"
          >
            Pedir informe DGT →
          </a>
          <span className="text-[11px] text-gray-400 self-center">
            El informe completo de la DGT (historial ITV, km, titulares) es de pago; el distintivo es gratis.
          </span>
        </div>
      </div>

      {(v.puntosFuertes?.length || v.puntosDebiles?.length) ? (
        <div className="grid md:grid-cols-2 gap-4">
          {(v.puntosFuertes?.length ?? 0) > 0 && (
            <div className="bg-white border border-gray-200 rounded-3xl p-5">
              <h4 className="font-black text-emerald-700 mb-3">✅ Puntos fuertes</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {v.puntosFuertes!.map((p, i) => <li key={i}>· {p}</li>)}
              </ul>
            </div>
          )}
          {(v.puntosDebiles?.length ?? 0) > 0 && (
            <div className="bg-white border border-gray-200 rounded-3xl p-5">
              <h4 className="font-black text-red-700 mb-3">⚠️ Puntos débiles</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {v.puntosDebiles!.map((p, i) => <li key={i}>· {p}</li>)}
              </ul>
            </div>
          )}
        </div>
      ) : null}

      {v.averias && v.averias.length > 0 && (
        <div className="border-2 border-amber-200 bg-amber-50 rounded-3xl p-5">
          <h4 className="font-black text-gray-900 mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-600" /> Averías típicas reportadas
          </h4>
          <ul className="space-y-2">
            {v.averias.slice(0, 4).map((a, i) => (
              <li key={i} className="text-sm text-gray-700">
                <strong>{a.titulo}</strong> <span className="text-gray-500">— {a.detalle}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {v.consejo && (
        <div className="bg-gray-900 text-white rounded-3xl p-5">
          <p className="leading-relaxed">💡 <strong>Consejo:</strong> {v.consejo}</p>
        </div>
      )}

      {v.url && (
        <div className="text-center">
          <a
            href={v.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
          >
            Abrir el anuncio original <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}

// ── Panel del valorador (pestaña "¿Ya tienes un coche visto?") ───────────────
function PanelValorador() {
  const valorar = useAction(api.buscadorCoches.valorarAnuncio);
  const [url, setUrl] = useState("");
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState<ValoracionAnuncio | null>(null);

  const analizar = async () => {
    const u = url.trim();
    if (!u || cargando) return;
    setCargando(true);
    setResultado(null);
    try {
      const r = await valorar({ url: u });
      setResultado(r as ValoracionAnuncio);
    } catch (e) {
      setResultado({ ok: false, error: "No he podido analizar este enlace. Comprueba que sea un anuncio de Coches.net, Wallapop, Milanuncios o Autoscout24." });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section aria-label="Valorador de anuncios" className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 md:p-8 mb-10">
      <h2 className="text-xl font-black text-gray-900 mb-2">🧐 ¿Ya tienes un coche visto?</h2>
      <p className="text-sm text-gray-600 mb-5">
        Pega la URL del anuncio y te digo si el precio es bueno, justo o caro, qué tal está el coche
        y qué dice la gente de sus averías típicas. <strong>Gratis, y con los datos oficiales que encuentre (DGT, VIN).</strong>
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && analizar()}
          placeholder="https://www.coches.net/…  ·  wallapop.com/…  ·  milanuncios.com/…  ·  autoscout24.com/…"
          className="flex-1 px-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-red-500 outline-none text-sm"
          aria-label="URL del anuncio"
          inputMode="url"
        />
        <button
          onClick={analizar}
          disabled={!url.trim() || cargando}
          className="bg-red-600 text-white font-black px-8 py-3.5 rounded-2xl hover:bg-red-700 disabled:opacity-40 transition flex items-center justify-center gap-2"
        >
          {cargando ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          {cargando ? "Analizando…" : "Analizar"}
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Solo analizamos anuncios públicos de los 4 portales. No guardamos tus enlaces.
      </p>

      {cargando && (
        <div className="mt-6">
          <SkeletonResultados />
        </div>
      )}

      {resultado && !cargando && (
        <div className="mt-6">
          {!resultado.ok ? (
            <div className="border-2 border-amber-200 bg-amber-50 rounded-3xl p-5 text-sm text-gray-700">
              <p className="font-black mb-1">No he podido analizarlo</p>
              <p>{resultado.error}</p>
            </div>
          ) : (
            <ResultadoValorador v={resultado} />
          )}
        </div>
      )}
    </section>
  );
}

// ── Formulario "Crear alerta" en resultados ──────────────────────────────────
function FormularioAlerta({ params }: { params: BusquedaParams | null }) {
  const guardar = useAction(api.buscadorCoches.guardarAlerta);
  const [abierto, setAbierto] = useState(false);
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle");

  if (!params) return null;

  const crear = async () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setEstado("error");
      return;
    }
    try {
      await guardar({ email: email.trim(), canal: "email", params });
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  };

  if (!abierto) {
    return (
      <button
        onClick={() => setAbierto(true)}
        className="inline-flex items-center gap-2 bg-amber-500 text-white font-black px-5 py-2.5 rounded-xl hover:bg-amber-600 transition text-sm"
      >
        🔔 Crear alerta de precio
      </button>
    );
  }

  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 max-w-xl">
      <p className="font-black text-gray-900 mb-1">🔔 Alerta de precio</p>
      <p className="text-sm text-gray-600 mb-3">
        Te avisamos por email cuando <strong>baje el precio</strong> de uno de estos anuncios o aparezca
        uno <strong>nuevo más barato</strong> que cumpla tus filtros. Gratis.
      </p>
      {estado === "ok" ? (
        <p className="text-sm font-bold text-emerald-700">✅ Alerta activada. Te avisaremos a {email}.</p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-amber-500 outline-none text-sm"
            aria-label="Email para la alerta"
            inputMode="email"
          />
          <button
            onClick={crear}
            className="bg-amber-500 text-white font-black px-6 py-2.5 rounded-xl hover:bg-amber-600 transition text-sm"
          >
            Activar alerta
          </button>
        </div>
      )}
      {estado === "error" && <p className="text-xs text-red-600 mt-2">Revisa el email e inténtalo de nuevo.</p>}
    </div>
  );
}

// ── Sección "Historial del vehículo" por anuncio (modo buscar) ───────────────
function HistorialAnuncio({ a }: { a: Anuncio }) {
  const [expandido, setExpandido] = useState(false);
  return (
    <div className="mt-3 border-t border-gray-100 pt-3">
      <button
        onClick={() => setExpandido(!expandido)}
        className="flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-900 transition"
        aria-expanded={expandido}
      >
        <ShieldCheck className="w-4 h-4" />
        Historial del vehículo
        <span className="text-gray-400">{expandido ? "▴" : "▾"}</span>
      </button>
      {expandido && (
        <div className="mt-2 text-sm space-y-1.5 bg-emerald-50/50 rounded-2xl p-3">
          <p className="text-gray-600">
            <strong>Matrícula:</strong>{" "}
            {a.matricula ? (
              <span className="font-mono font-bold text-gray-900">{a.matricula}</span>
            ) : (
              <span className="text-gray-500">el anuncio no la muestra — pídesela al vendedor</span>
            )}
          </p>
          <p className="text-gray-600">
            <strong>DGT:</strong>{" "}
            {a.dgtEtiqueta ? (
              <span>Etiqueta <strong className="text-emerald-700">{a.dgtEtiqueta}</strong> <span className="text-gray-400">(oficial)</span></span>
            ) : (
              <span className="text-gray-500">datos ausentes{a.matricula ? " en la DGT" : " (sin matrícula)"}</span>
            )}
          </p>
          <p className="text-[11px] text-gray-400">
            El historial completo (ITV, km reales, titulares) solo lo da el informe DGT de pago.{" "}
            <a
              href="https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-emerald-700 font-bold hover:underline"
            >
              Pedirlo aquí →
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
