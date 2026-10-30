import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ChevronDown, FileText } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import { fmtMiles } from "@/lib/formato.ts";
import type { CocheComparador } from "@/lib/comparador-coches-data.ts";
// Categorías reales por pestaña (orden Grok 23/10/2026): cada pestaña posee
// EXACTAMENTE un dataset y los contadores salen de los datos, no de literales.
// Ver src/lib/fichas-categorias.ts (causa raíz: COCHES_COMPARADOR mezcla
// campers y autocaravanas entre los coches; allí viven también las
// correcciones de v455 de 20-21/10/2026 sobre qué ficha va a qué pestaña).
import {
  COCHES_FICHAS,
  MOTOS_FICHAS,
  PATINETES_FICHAS,
  CAMPERS_FICHAS,
  AUTOCARAVANAS_FICHAS,
  CARAVANAS_FICHAS,
  CONTEOS_FICHAS,
  type FichaRv,
  type TabFichas,
} from "@/lib/fichas-categorias.ts";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
// Fecha real de publicación de cada ficha (scripts/gen-fichas-fechas.mjs)
import FICHAS_FECHAS from "@/lib/fichas-fechas.generated.json";
const FECHAS = FICHAS_FECHAS as Record<string, string>;
const tsFicha = (id: string) => (FECHAS[id] ? Date.parse(FECHAS[id]) : 0);
import type { MotoComparador } from "@/lib/comparador-motos-data.ts";
import type { PatineteComparador } from "@/lib/comparador-patinetes-data.ts";
import type { Caravana } from "@/lib/caravanas/tipos.ts";
import type { Autocaravana } from "@/lib/autocaravanas-tipos.ts";
import { normalizarEtiquetaDgt } from "@/components/EtiquetaDGT.tsx";

// ── Normalización de marcas y etiquetas (20/10/2026, arreglos borrador 2) ──
// Los datos traen la misma marca con varias capitalizaciones (cupra/Cupra/
// CUPRA, Nio/NIO, Smart/smart, CFMoto/CFMOTO, Smartgyro/SmartGyro,
// Zwheel/ZWheel…) y el filtro las mostraba como marcas distintas. Se
// canonicaliza a la forma mayoritaria en los datos. Clave: marca en minúsculas.
const MARCA_CANONICA: Record<string, string> = {
  cupra: "Cupra",
  seat: "SEAT",
  smart: "smart",
  nio: "Nio",
  xpeng: "XPeng",
  cfmoto: "CFMoto",
  vmoto: "Vmoto",
  mitt: "Mitt",
  niu: "NIU",
  navee: "Navee",
  smartgyro: "Smartgyro",
  "e-twow": "E-Twow",
  turboant: "TurboAnt",
  gotrax: "Gotrax",
  aovopro: "Aovopro",
  zwheel: "Zwheel",
  kukirin: "KuKirin",
  bogist: "Bogist",
  icaur: "iCaur",
  mini: "Mini",
  emove: "Emove",
};
// Alias de la misma marca escritos de otra forma en patinetes.
const MARCA_ALIAS: Record<string, string> = {
  "Apollo Scooters": "Apollo",
  "Dualtron (MiniMotors)": "Dualtron",
  Minimotors: "Dualtron",
  "Egret (Walberg)": "Egret",
  "Walberg Urban Electrics": "Egret",
  "Emove (VoroMotors)": "Emove",
  "Segway-Ninebot": "Segway",
  "Kugoo Kirin": "KuKirin",
};
function marcaCanon(marca: string): string {
  const alias = MARCA_ALIAS[marca];
  if (alias) return alias;
  return MARCA_CANONICA[marca.toLowerCase()] ?? marca;
}
// La etiqueta DGT llega como "0", "0 emisiones", "CERO", "Cero", "ECO", "Eco"…:
// se unifica al valor canónico para que el filtro no duplique opciones y el
// distintivo de la tarjeta pinte siempre lo mismo.
function etiquetaCanon(v: string | null | undefined): string | null {
  const n = normalizarEtiquetaDgt(v);
  if (n === "Cero") return "CERO";
  return n; // "ECO" | "C" | "B" | null
}

// ── Normalización: los cinco catálogos a una tarjeta común ────────────────────
type FichaCard = {
  kind: "coche" | "moto" | "patinete" | "autocaravana" | "camper" | "caravana";
  id: string;
  marca: string;
  modelo: string;
  nombreBusqueda: string;
  ruta: string;
  foto: string | null;
  fotoAlt: string;
  precio: number | null;
  precioAprox: boolean;
  badge: string;
  etiquetaDgt: string | null;
  specs: Array<{ v: string; l: string }>;
  detalles: Array<{ l: string; v: string }>;
  autonomiaKm: number | null;
  certificadoDgt: boolean | null;
};

const ES_ELECTRICO_COCHE = /eléctrico|enchufable|autonomía extendida/i;

// fmtMiles y no toLocaleString("es-ES"): este último no agrupa las cifras de
// 4 dígitos (5800 → «5800 €») y las motos salían sin separador de miles.
const fmtPrecio = (v: number | null) =>
  v == null ? "Precio no disponible" : fmtMiles(v) + " €";
// Precio de tarjeta: con ≈ cuando el dato es aproximado (orden Grok).
const fmtPrecioCard = (f: FichaCard) =>
  f.precioAprox && f.precio != null ? `≈ ${fmtPrecio(f.precio)}` : fmtPrecio(f.precio);
const esPrecioAprox = (r: unknown) => {
  const aprox = (r as { aprox?: unknown }).aprox;
  return Array.isArray(aprox) && aprox.includes("precioDesde");
};
const fmtNum = (v: number | null, suf: string) =>
  v == null ? "—" : `${String(v).replace(".", ",")} ${suf}`;

type KindCoche = "coche" | "camper" | "autocaravana";
const BADGE_RV: Record<KindCoche, string | null> = { coche: null, camper: "Camper", autocaravana: "Autocaravana" };
// kind = pestaña dueña del dataset de origen (ver TODAS): las filas camper/
// autocaravana del catálogo de coches mantienen su ruta /coches/<id>/.
function cocheACard(c: CocheComparador, kind: KindCoche = "coche"): FichaCard {
  return {
    kind,
    id: c.id,
    marca: marcaCanon(c.marca),
    modelo: c.modelo,
    nombreBusqueda: `${marcaCanon(c.marca)} ${c.modelo}`,
    ruta: `/coches/${c.id}/`,
    foto: c.imagenOficial || c.imagen || null,
    fotoAlt: `${c.marca} ${c.modelo}`,
    precio: c.precioDesde,
    precioAprox: false,
    badge: BADGE_RV[kind] ?? c.tipo,
    etiquetaDgt: etiquetaCanon(c.etiquetaDgt),
    specs: [
      { v: fmtNum(c.potenciaCv, "CV"), l: "potencia" },
      { v: fmtNum(c.autonomiaKm, "km"), l: "autonomía" },
      { v: fmtNum(c.ceroCien, "s"), l: "0–100" },
    ],
    detalles: [
      { l: "Maletero", v: fmtNum(c.maleteroL, "L") },
      { l: "Vel. máx.", v: fmtNum(c.velocidadMax, "km/h") },
      { l: "Batería", v: fmtNum(c.bateriaKwh, "kWh") },
      { l: "Carga rápida", v: fmtNum(c.cargaRapidaKw, "kW") },
      { l: "Consumo", v: c.consumo != null ? `${String(c.consumo).replace(".", ",")} ${c.consumoUnidad ?? ""}`.trim() : "—" },
      { l: "Plazas", v: c.plazas != null ? String(c.plazas) : "—" },
      { l: "Tracción", v: c.traccion ?? "—" },
      { l: "Emisiones", v: fmtNum(c.emisionesCo2, "g/km") },
    ],
    autonomiaKm: ES_ELECTRICO_COCHE.test(c.tipo) ? c.autonomiaKm : null,
    certificadoDgt: null,
  };
}

function motoACard(m: MotoComparador): FichaCard {
  return {
    kind: "moto",
    id: m.id,
    marca: marcaCanon(m.marca),
    modelo: m.modelo,
    nombreBusqueda: `${marcaCanon(m.marca)} ${m.modelo} ${m.version}`,
    ruta: `/motos/${m.id}/`,
    foto: m.imagen ?? null,
    fotoAlt: `Foto oficial de la ${m.marca} ${m.modelo}`,
    precio: m.precioDesde,
    precioAprox: false,
    badge: m.categoria,
    etiquetaDgt: etiquetaCanon(m.etiquetaDgt),
    specs: [
      { v: fmtNum(m.potenciaKw, "kW"), l: "potencia" },
      { v: fmtNum(m.autonomiaKm, "km"), l: "autonomía" },
      { v: m.carnet, l: "carnet" },
    ],
    detalles: [
      { l: "Vel. máx.", v: fmtNum(m.velocidadMax, "km/h") },
      { l: "Batería", v: fmtNum(m.bateriaKwh, "kWh") },
      { l: "Peso", v: fmtNum(m.pesoKg, "kg") },
      { l: "0–50 km/h", v: fmtNum(m.ceroCincuenta, "s") },
      { l: "Plazas", v: m.plazas != null ? String(m.plazas) : "—" },
      { l: "Carga", v: m.carga ?? "—" },
    ],
    autonomiaKm: m.bateriaKwh != null || m.etiquetaDgt === "Cero" ? m.autonomiaKm : null,
    certificadoDgt: null,
  };
}

function patineteACard(p: PatineteComparador): FichaCard {
  return {
    kind: "patinete",
    id: p.id,
    marca: marcaCanon(p.marca),
    modelo: p.modelo,
    nombreBusqueda: `${marcaCanon(p.marca)} ${p.modelo}`,
    ruta: `/patinetes/${p.id}/`,
    foto: p.foto || null,
    fotoAlt: `Patinete eléctrico ${p.marca} ${p.modelo}`,
    precio: p.precioEur,
    precioAprox: false,
    badge: p.certificadoDgt === true ? "Certificado DGT" : "Patinete",
    etiquetaDgt: null,
    specs: [
      { v: fmtNum(p.autonomiaKm, "km"), l: "autonomía" },
      { v: fmtNum(p.potenciaNominalW, "W"), l: "potencia" },
      { v: fmtNum(p.pesoKg, "kg"), l: "peso" },
    ],
    detalles: [
      { l: "Autonomía real", v: fmtNum(p.autonomiaRealKm, "km") },
      { l: "Potencia pico", v: fmtNum(p.potenciaPicoW, "W") },
      { l: "Vel. máx.", v: fmtNum(p.velocidadMaxKmh, "km/h") },
      { l: "Batería", v: fmtNum(p.bateriaWh, "Wh") },
      { l: "Carga", v: fmtNum(p.tiempoCargaH, "h") },
      { l: "Carga máx.", v: fmtNum(p.cargaMaxKg, "kg") },
      { l: "Frenos", v: p.frenos ?? "—" },
    ],
    autonomiaKm: p.autonomiaKm,
    certificadoDgt: p.certificadoDgt,
  };
}

// Etiquetas de carrocería para autocaravanas/campers (mismo criterio que
// el hub /autocaravanas/: pestaña "Campers" <=> tipo === "camper").
const ETIQUETA_TIPO_AUTO: Record<string, string> = {
  camper: "Camper",
  perfilada: "Perfilada",
  integral: "Integral",
  capuchina: "Capuchina",
};

const fmtLargo = (mm: number | null) =>
  mm == null ? "—" : `${(mm / 1000).toFixed(2).replace(".", ",")} m`;

function autocaravanaACard(a: Autocaravana): FichaCard {
  const esCamper = a.tipo === "camper";
  return {
    kind: esCamper ? "camper" : "autocaravana",
    id: a.id,
    marca: marcaCanon(a.marca),
    modelo: a.modelo,
    nombreBusqueda: `${marcaCanon(a.marca)} ${a.modelo}`,
    ruta: esCamper ? `/campers/${a.id}/` : `/autocaravanas/${a.id}/`,
    foto: a.imagenOficial || a.imagen || null,
    fotoAlt: `${a.marca} ${a.modelo}`,
    precio: a.precioDesde,
    precioAprox: esPrecioAprox(a),
    badge: ETIQUETA_TIPO_AUTO[a.tipo] ?? a.tipo,
    etiquetaDgt: etiquetaCanon(a.etiquetaDgt),
    specs: [
      { v: fmtLargo(a.largoMm), l: "largo" },
      { v: a.plazasDormir != null ? String(a.plazasDormir) : "—", l: "plazas dormir" },
      { v: a.carnetNecesario ?? "—", l: "carnet" },
    ],
    detalles: [
      { l: "Potencia", v: fmtNum(a.potenciaCv, "CV") },
      { l: "MMA", v: fmtNum(a.mmaKg, "kg") },
      { l: "Carga útil", v: fmtNum(a.cargaUtilKg ?? null, "kg") },
      { l: "Plazas", v: a.plazas != null ? String(a.plazas) : "—" },
      { l: "Vel. máx.", v: fmtNum(a.velocidadMax, "km/h") },
      { l: "Consumo", v: a.consumo != null ? `${String(a.consumo).replace(".", ",")} ${a.consumoUnidad ?? ""}`.trim() : "—" },
      { l: "Tracción", v: a.traccion ?? "—" },
      { l: "Emisiones", v: fmtNum(a.emisionesCo2, "g/km") },
      { l: "Ancho", v: fmtLargo(a.anchoMm) },
      { l: "Alto", v: fmtLargo(a.altoMm) },
      { l: "Peso", v: fmtNum(a.pesoKg, "kg") },
    ],
    autonomiaKm: null,
    certificadoDgt: null,
  };
}

// (El dedupe de ids repetidos —p. ej. buerstner-campeo-c-600, que viene en
// dos arrays CAMPERS_*— se hace ahora en src/lib/fichas-categorias.ts, para
// que contador = tarjetas reales.)
function caravanaACard(a: Caravana): FichaCard {
  return {
    kind: "caravana",
    id: a.id,
    marca: marcaCanon(a.marca),
    modelo: a.modelo,
    nombreBusqueda: `${marcaCanon(a.marca)} ${a.modelo}`,
    ruta: `/caravanas/${a.id}/`,
    foto: a.imagenOficial || a.imagen || null,
    fotoAlt: `${a.marca} ${a.modelo}`,
    precio: a.precioDesde,
    precioAprox: esPrecioAprox(a),
    badge: "Caravana",
    etiquetaDgt: null, // las caravanas no llevan etiqueta DGT (remolque sin motor)
    specs: [
      { v: fmtLargo(a.largoMm), l: "largo" },
      { v: a.plazas != null ? String(a.plazas) : "—", l: "plazas dormir" },
      { v: a.carnetNecesario ?? "—", l: "carnet" },
    ],
    detalles: [
      { l: "MMA", v: fmtNum(a.mmaKg, "kg") },
      { l: "Carga útil", v: fmtNum(a.cargaUtilKg ?? null, "kg") },
      { l: "Peso", v: fmtNum(a.pesoKg, "kg") },
      { l: "Ancho", v: fmtLargo(a.anchoMm) },
      { l: "Alto", v: fmtLargo(a.altoMm) },
    ],
    autonomiaKm: null,
    certificadoDgt: null,
  };
}

const rvACard = (r: FichaRv, kind: "camper" | "autocaravana"): FichaCard =>
  r.origen === "coches"
    ? cocheACard(r.ficha, kind)
    : { ...autocaravanaACard(r.ficha), kind };

// Cada tarjeta recibe el `kind` de la pestaña dueña de su dataset:
// imposible que una ficha salga en una pestaña que no es la suya.
const TODAS: FichaCard[] = [
  ...COCHES_FICHAS.map((c) => cocheACard(c)),
  ...MOTOS_FICHAS.map(motoACard),
  ...PATINETES_FICHAS.map(patineteACard),
  ...AUTOCARAVANAS_FICHAS.map((r) => rvACard(r, "autocaravana")),
  ...CAMPERS_FICHAS.map((r) => rvACard(r, "camper")),
  ...CARAVANAS_FICHAS.map(caravanaACard),
];

type Tab = TabFichas;
const TABS: Array<{ id: Tab; label: string; plural: string }> = [
  { id: "coche", label: "Coches", plural: "coches" },
  { id: "moto", label: "Motos", plural: "motos" },
  { id: "patinete", label: "Patinetes", plural: "patinetes" },
  { id: "autocaravana", label: "Autocaravanas", plural: "autocaravanas" },
  { id: "camper", label: "Campers", plural: "campers" },
  { id: "caravana", label: "Caravanas", plural: "caravanas" },
];
// Solo se muestran las pestañas cuyo dataset real tiene fichas: el contador
// sale de CONTEOS_FICHAS (calculado de los arrays de datos, nunca literales).
const TABS_VISIBLES = TABS.filter((t) => (CONTEOS_FICHAS[t.id] ?? 0) > 0);

const SELECT_CLASE =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20";

// ── Tarjeta con volteo 3D: delante resumen, detrás más datos ──────────────────
function TarjetaFicha({ ficha, compacta = false }: { ficha: FichaCard; compacta?: boolean }) {
  const [volteada, setVolteada] = useState(false);
  const [fotoRota, setFotoRota] = useState(false);
  const mostrarFoto = ficha.foto && !fotoRota;
  // 31/10/2026 (auditoría AdSense A3): en el HTML prerenderizado la lista completa (miles de fichas) se mantiene para que
  // los enlaces sean rastreables, pero pasadas las 24 primeras la tarjeta es solo texto + enlace (sin imagen ni cara trasera):
  // el HTML de /fichas-tecnicas/ pasa de ~13 MB y 2.400 imágenes a una fracción.
  if (compacta) {
    return (
      <article className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-500">{ficha.marca}</p>
        <h3 className="line-clamp-2 text-sm font-extrabold leading-tight text-gray-900">
          <Link to={ficha.ruta}>{ficha.modelo}</Link>
        </h3>
        <p className="text-sm font-extrabold text-[#cd001d]">{fmtPrecioCard(ficha)}</p>
      </article>
    );
  }
  return (
    <div className="[perspective:900px]">
      <article
        className={`relative h-full min-h-[380px] transition-transform duration-500 [transform-style:preserve-3d] ${volteada ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* ── CARA DELANTERA ── */}
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm [backface-visibility:hidden]">
          <div className="relative aspect-[16/9] flex-none overflow-hidden bg-gray-100">
            {mostrarFoto ? (
              <img
                src={ficha.foto!}
                alt={ficha.fotoAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setFotoRota(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-3xl font-black text-gray-300">
                  {(ficha.marca || "?").charAt(0)}
                </span>
              </div>
            )}
            <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white">
              {ficha.badge}
            </span>
            <button
              onClick={() => setVolteada(true)}
              aria-label="Ver más datos"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md transition hover:bg-white hover:text-[#cd001d]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:p-3">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                {ficha.marca}
              </p>
              {ficha.etiquetaDgt && (
                <EtiquetaDGT etiqueta={ficha.etiquetaDgt} size="sm" />
              )}
            </div>
            <h3 className="line-clamp-2 text-sm font-extrabold leading-tight text-gray-900 sm:text-base">
              {ficha.modelo}
            </h3>
            <p className="text-base font-extrabold tracking-tight text-[#cd001d] sm:text-lg">
              {fmtPrecioCard(ficha)}
            </p>
            <div className="grid grid-cols-3 rounded-lg bg-gray-100 py-1.5 text-center">
              {ficha.specs.map((s, i) => (
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
            <div className="mt-auto flex gap-2">
              <button
                onClick={() => setVolteada(true)}
                className="flex-1 rounded-lg border border-gray-300 px-2 py-2 text-center text-xs font-bold text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
              >
                + Datos
              </button>
              <Link
                to={ficha.ruta}
                className="flex-[2] rounded-lg bg-[#cd001d] px-2 py-2 text-center text-xs font-bold text-white transition hover:bg-[#a50018]"
              >
                Ver ficha completa →
              </Link>
            </div>
          </div>
        </div>
        {/* ── CARA TRASERA ── */}
        <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-900 text-white shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
            <p className="truncate text-xs font-extrabold">
              {ficha.marca} {ficha.modelo}
            </p>
            <button
              onClick={() => setVolteada(false)}
              aria-label="Volver"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 2.64-6.36"/><path d="M3 3v6h6"/></svg>
            </button>
          </div>
          <dl className="flex-1 space-y-0 overflow-y-auto px-3 py-2">
            {ficha.detalles.filter(d => d.v !== "—").map((d) => (
              <div key={d.l} className="flex items-center justify-between border-b border-white/5 py-1.5">
                <dt className="text-[11px] text-white/60">{d.l}</dt>
                <dd className="text-[11px] font-bold text-white">{d.v}</dd>
              </div>
            ))}
          </dl>
          <div className="p-3 pt-1">
            <Link
              to={ficha.ruta}
              className="block rounded-lg bg-[#cd001d] px-2 py-2 text-center text-xs font-bold text-white transition hover:bg-[#a50018]"
            >
              Ver ficha completa →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

const FAQS = [
  {
    q: "¿De dónde salen los datos de las fichas técnicas?",
    a: "De nuestros propios análisis: cada ficha nace de la tabla técnica del artículo correspondiente, con fuentes como km77, los configuradores oficiales de las marcas y medios especializados españoles. Si un dato no está publicado por ninguna fuente fiable, no lo mostramos: preferimos un hueco a una cifra inventada.",
  },
  {
    q: "¿La autonomía que mostráis es real?",
    a: "Mostramos la autonomía homologada (WLTP en coches, WMTC o declarada por la marca en motos y patinetes). En la práctica, con conducción normal en ciudad, la autonomía real suele rondar el 70 % de la cifra oficial. Lo detallamos en cada ficha completa.",
  },
  {
    q: "¿Esta página es contenido duplicado de las fichas?",
    a: "No. Esta página es un índice de navegación: te ayuda a encontrar la ficha que buscas entre cientos de modelos. El contenido detallado (tablas, pros y contras, vídeos, opiniones reales) vive en cada ficha individual, con su propia URL.",
  },
  {
    q: "¿Cada cuánto se actualizan las fichas?",
    a: "La base crece cada semana con los modelos más vendidos en España y Europa desde 2024. Precios y datos técnicos se revisan con cada novedad relevante del mercado.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://recurretumulta.online/fichas-tecnicas#pagina",
      name: "Fichas técnicas de coches, motos, patinetes, autocaravanas, campers y caravanas 2026",
      description:
        "Índice de fichas técnicas con buscador y filtros: precio, potencia, autonomía y etiqueta DGT de cientos de modelos 2024-2026, entre coches, motos, patinetes, autocaravanas, campers y caravanas.",
      url: "https://recurretumulta.online/fichas-tecnicas",
      inLanguage: "es-ES",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Fichas técnicas", item: "https://recurretumulta.online/fichas-tecnicas" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/fichas-tecnicas#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function FichasTecnicasPage() {
  useSeo({
    title: "Fichas técnicas: coches, motos, patinetes, autocaravanas, campers y caravanas",
    description:
      "Todas las fichas técnicas en un solo lugar: coches, motos, patinetes, autocaravanas, campers y caravanas. Busca por marca y modelo, filtra por precio, autonomía y etiqueta DGT, y abre la ficha completa con datos verificados.",
    canonical: "/fichas-tecnicas",
    schema: jsonLd,
  });

  const [tab, setTab] = useState<Tab>("coche");
  const [q, setQ] = useState("");
  const [fMarca, setFMarca] = useState("todas");
  const [fPrecioMax, setFPrecioMax] = useState(0);
  const [fAutMin, setFAutMin] = useState(0);
  const [fEtiqueta, setFEtiqueta] = useState("todas");
  const [fCertificado, setFCertificado] = useState("todos");
  const [orden, setOrden] = useState("recientes");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const PAGE_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const base = useMemo(() => TODAS.filter((f) => f.kind === tab), [tab]);

  const marcas = useMemo(
    () => [...new Set(base.map((f) => f.marca))].sort((a, b) => a.localeCompare(b, "es")),
    [base]
  );

  const etiquetas = useMemo(
    () => [...new Set(base.map((f) => f.etiquetaDgt).filter((e): e is string => e != null))].sort(),
    [base]
  );

  // Al cambiar de pestaña, resetea los filtros que no aplican
  const cambiarTab = (t: Tab) => {
    setTab(t);
    setFMarca("todas");
    setFPrecioMax(0);
    setFAutMin(0);
    setFEtiqueta("todas");
    setFCertificado("todos");
    setVisibleCount(PAGE_SIZE);
  };

  const filtradas = useMemo(() => {
    const query = q.trim().toLowerCase();
    const lista = base.filter(
      (f) =>
        (fMarca === "todas" || f.marca === fMarca) &&
        (fPrecioMax === 0 || (f.precio != null && f.precio <= fPrecioMax)) &&
        (fAutMin === 0 || (f.autonomiaKm != null && f.autonomiaKm >= fAutMin)) &&
        (fEtiqueta === "todas" || f.etiquetaDgt === fEtiqueta) &&
        (fCertificado === "todos" ||
          (fCertificado === "si" ? f.certificadoDgt === true : f.certificadoDgt !== true)) &&
        (query === "" || f.nombreBusqueda.toLowerCase().includes(query))
    );
    if (orden === "recientes") lista.sort((a, b) => tsFicha(b.id) - tsFicha(a.id));
    else if (orden === "precioAsc") lista.sort((a, b) => (a.precio ?? Infinity) - (b.precio ?? Infinity));
    else if (orden === "precioDesc") lista.sort((a, b) => (b.precio ?? -Infinity) - (a.precio ?? -Infinity));
    else if (orden === "autDesc") lista.sort((a, b) => (b.autonomiaKm ?? -Infinity) - (a.autonomiaKm ?? -Infinity));
    else if (orden === "nombre") lista.sort((a, b) => a.nombreBusqueda.localeCompare(b.nombreBusqueda, "es"));
    return lista;
  }, [base, q, fMarca, fPrecioMax, fAutMin, fEtiqueta, fCertificado, orden]);

  const visibles = filtradas.slice(0, visibleCount);

  const hayFiltros =
    q !== "" || fMarca !== "todas" || fPrecioMax !== 0 || fAutMin !== 0 ||
    fEtiqueta !== "todas" || fCertificado !== "todos";

  const limpiar = () => {
    setQ("");
    setFMarca("todas");
    setFPrecioMax(0);
    setFAutMin(0);
    setFEtiqueta("todas");
    setFCertificado("todos");
    setVisibleCount(PAGE_SIZE);
  };

  const tabActual = TABS.find((t) => t.id === tab)!;

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />

      {/* Hero animado estilo guías: foto HD + degradado + entrada progresiva */}
      <div className="relative overflow-hidden">
        <DriveInImage
          src="/media/aion-v-vs-deepal-s05-cual-comprar-hero.webp"
          alt="Dos SUV modernos enfrentados, comparativa de fichas técnicas"
          eager={true}
          className="absolute inset-0"
          imgClassName="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-20 pb-12 sm:pt-24 space-y-4">
          <nav
            aria-label="Migas de pan"
            className="flex items-center gap-1.5 text-xs text-white/60"
          >
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Fichas técnicas</span>
          </nav>
          <div
          >
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">
              Base de datos 2026 · {TODAS.length} modelos
            </Badge>
          </div>
          <h1
            className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg"
          >
            Fichas técnicas 2026
          </h1>
          <p
            className="text-white/80 text-sm md:text-base leading-relaxed"
          >
            {TODAS.length} fichas técnicas con datos verificados: precio, potencia, autonomía,
            etiqueta DGT y opiniones reales de propietarios. Busca por marca y modelo, filtra
            por lo que te importa y abre la ficha completa. Sin humo: si un dato no está
            publicado por una fuente fiable, lo verás como «—» en vez de inventado.
          </p>
          <p
            className="text-xs text-white/60 pt-1"
          >
            Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Actualizada en octubre de 2026
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        {/* ── Pestañas Coches / Motos / Patinetes / Autocaravanas / Campers: en móvil no desbordan, se desplazan en horizontal (mismo patrón que PestanasFicha) ── */}
        <div
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Tipo de vehículo"
        >
          {TABS_VISIBLES.map((t) => {
            const n = CONTEOS_FICHAS[t.id];
            const activa = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={activa}
                onClick={() => cambiarTab(t.id)}
                className={`flex-1 min-w-max whitespace-nowrap rounded-xl px-2 sm:px-3 py-2.5 text-sm font-extrabold transition cursor-pointer ${
                  activa
                    ? "bg-[#cd001d] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#cd001d] hover:text-[#cd001d]"
                }`}
              >
                {t.label}
                <span className={`ml-1.5 text-xs font-bold ${activa ? "text-white/80" : "text-gray-400"}`}>
                  {n}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Buscador ── */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={q}
            onChange={(e) => { setQ(e.target.value); setVisibleCount(PAGE_SIZE); }}
            placeholder={`Busca marca o modelo… (ej. ${tab === "coche" ? "BYD, Tucson" : tab === "moto" ? "Silence, NIU" : tab === "patinete" ? "Xiaomi, Segway" : tab === "autocaravana" ? "Adria, Hymer" : tab === "caravana" ? "Adria, Hobby" : "California, Nugget"})`}
            aria-label="Buscar por marca o modelo"
            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20"
          />
        </div>

        {/* ── Filtros (colapsables en móvil) ── */}
        <button
          type="button"
          onClick={() => setFiltrosAbiertos((v) => !v)}
          aria-expanded={filtrosAbiertos}
          className="mt-3 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 sm:hidden cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filtros
            {hayFiltros && <span className="rounded-full bg-[#cd001d] px-2 py-0.5 text-[10px] font-bold text-white">•</span>}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${filtrosAbiertos ? "rotate-180" : ""}`} />
        </button>

        <section
          aria-label="Filtros"
          className={`mt-3 gap-x-3 gap-y-3 rounded-xl border border-gray-200 bg-white p-4 ${
            filtrosAbiertos ? "grid grid-cols-2" : "hidden"
          } sm:grid sm:grid-cols-3 lg:grid-cols-6`}
        >
          <label className="block text-xs font-bold text-gray-700">
            Marca
            <select value={fMarca} onChange={(e) => { setFMarca(e.target.value); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value="todas">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Precio máximo
            <select value={fPrecioMax} onChange={(e) => { setFPrecioMax(Number(e.target.value)); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value={0}>Sin límite</option>
              <option value={10000}>10.000 €</option>
              <option value={20000}>20.000 €</option>
              <option value={30000}>30.000 €</option>
              <option value={50000}>50.000 €</option>
              <option value={100000}>100.000 €</option>
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Autonomía mínima
            <select value={fAutMin} onChange={(e) => { setFAutMin(Number(e.target.value)); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value={0}>Indiferente</option>
              <option value={100}>100 km</option>
              <option value={200}>200 km</option>
              <option value={300}>300 km</option>
              <option value={400}>400 km</option>
              <option value={500}>500 km</option>
            </select>
          </label>
          {tab === "patinete" ? (
            <label className="block text-xs font-bold text-gray-700">
              Certificado DGT
              <select value={fCertificado} onChange={(e) => { setFCertificado(e.target.value); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
                <option value="todos">Todos</option>
                <option value="si">Certificado</option>
                <option value="no">Sin verificar</option>
              </select>
            </label>
          ) : (
            <label className="block text-xs font-bold text-gray-700">
              Etiqueta DGT
              <select value={fEtiqueta} onChange={(e) => { setFEtiqueta(e.target.value); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
                <option value="todas">Todas</option>
                {etiquetas.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </label>
          )}
          <label className="block text-xs font-bold text-gray-700">
            Ordenar
            <select value={orden} onChange={(e) => { setOrden(e.target.value); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value="recientes">Más recientes</option>
              <option value="precioAsc">Precio: menor a mayor</option>
              <option value="precioDesc">Precio: mayor a menor</option>
              <option value="autDesc">Autonomía: mayor a menor</option>
              <option value="nombre">Nombre A–Z</option>
            </select>
          </label>
          <div className="flex items-end">
            <button
              type="button"
              onClick={limpiar}
              disabled={!hayFiltros}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold text-gray-600 transition hover:border-[#cd001d] hover:text-[#cd001d] disabled:opacity-40 cursor-pointer"
            >
              Limpiar
            </button>
          </div>
        </section>

        {/* ── Contador + resultados ── */}
        <p className="mt-5 text-sm text-gray-600" role="status" aria-live="polite">
          <strong className="font-extrabold text-gray-900">{filtradas.length}</strong>{" "}
          {filtradas.length === 1 ? "ficha" : "fichas"} de {tabActual.plural}
          {hayFiltros && " con los filtros aplicados"}
        </p>

        {filtradas.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <FileText className="mx-auto h-8 w-8 text-gray-300" />
            <p className="mt-3 font-extrabold text-gray-900">Sin resultados</p>
            <p className="mt-1 text-sm text-gray-500">
              Prueba a quitar algún filtro o a buscar con menos palabras.
            </p>
            <button
              type="button"
              onClick={limpiar}
              className="mt-4 rounded-lg bg-[#cd001d] px-4 py-2 text-sm font-bold text-white hover:bg-[#a50018] cursor-pointer"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <>
          <section aria-label={`Fichas de ${tabActual.plural}`} className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {visibles.map((f, i) => (
              <TarjetaFicha
                key={`${f.kind}-${f.id}`}
                ficha={f}
                compacta={i >= PAGE_SIZE && typeof window !== "undefined" && !!(window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__}
              />
            ))}
          </section>
          {filtradas.length > visibleCount && (
            <div className="mt-8 text-center">
              <p className="mb-3 text-sm text-gray-600">
                Mostrando {visibles.length} de {filtradas.length} fichas
              </p>
              <button
                type="button"
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                className="rounded-xl bg-[#cd001d] px-8 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-900/20 hover:bg-[#a50018] cursor-pointer"
              >
                Cargar más fichas
              </button>
            </div>
          )}
          </>
        )}

        {/* ── Verticales de vivienda: autocaravanas, campers y caravanas ── */}
        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="text-lg font-extrabold text-gray-900 text-center">Autocaravanas, campers y caravanas</h2>
          <p className="mt-1 text-sm text-gray-600 text-center">
            La vivienda sobre ruedas tiene su propia sección: fichas con precios, medidas, plazas y fotos de cada modelo.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {([
              ["autocaravana", "/autocaravanas/", "Autocaravanas"],
              ["camper", "/campers/", "Campers"],
              ["caravana", "/caravanas/", "Caravanas"],
            ] as const).map(([kind, href, nombre]) => (
              <Link
                key={kind}
                to={href}
                className="rounded-xl border border-gray-200 px-4 py-3 text-center transition hover:border-[#cd001d] hover:shadow-sm"
              >
                <span className="block text-sm font-extrabold text-gray-900">{nombre}</span>
                <span className="mt-0.5 block text-xs text-gray-500">
                  {CONTEOS_FICHAS[kind]} fichas →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Enlaces a los comparadores ── */}
        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <h2 className="text-lg font-extrabold text-gray-900">¿Dudas entre dos modelos?</h2>
          <p className="mt-1 text-sm text-gray-600">
            Los comparadores te ponen dos fichas cara a cara, con duelo de datos y veredicto.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Link to="/comparador-coches/" className="rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white hover:bg-gray-700">Comparador de coches</Link>
            <Link to="/comparador-motos/" className="rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white hover:bg-gray-700">Comparador de motos</Link>
            <Link to="/comparador-patinetes/" className="rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white hover:bg-gray-700">Comparador de patinetes</Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto mt-12 max-w-3xl" aria-label="Preguntas frecuentes">
          <h2 className="text-xl font-extrabold text-gray-900">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-bold text-gray-900">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  );
}
