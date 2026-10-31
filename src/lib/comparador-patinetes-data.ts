import { sanearPatinete } from "./fotos-saneadas.ts";
// Datos estructurados para el comparador de patinetes eléctricos (herramienta "Novedades Motor").
// Verificados el 02/10/2026 en webs oficiales de las marcas (mi.com, segway.com,
// cecotec.es, niu.com, navee.tech) y manuales oficiales. Solo datos que aparecen
// en fuentes oficiales o retailers verificados; si un dato no se verifica, el
// campo es null (se muestra como "no publicado"). No inventar cifras.
// autonomiaRealKm es estimación propia conservadora: en la UI se muestra con ≈.
import type { FichaPatineteIA } from "@/convex/comparadorPatinetesDatos.js";
import { PATINETES_EXP_P1 } from "./comparador-patinetes-exp-p1.ts";
import { PATINETES_EXP_P2 } from "./comparador-patinetes-exp-p2.ts";
import { PATINETES_EXP_P3 } from "./comparador-patinetes-exp-p3.ts";
import { PATINETES_EXP_P4 } from "./comparador-patinetes-exp-p4.ts";
import { PATINETES_EXP_P5 } from "./comparador-patinetes-exp-p5.ts";
import { PATINETES_EXP_P6 } from "./comparador-patinetes-exp-p6.ts";
import { PATINETES_EXP_P7 } from "./comparador-patinetes-exp-p7.ts";
import { PATINETES_EXP_P8 } from "./comparador-patinetes-exp-p8.ts";
import { PATINETES_EXP_P9 } from "./comparador-patinetes-exp-p9.ts";
import { PATINETES_EXP_P10 } from "./comparador-patinetes-exp-p10.ts";
import { PATINETES_EXP_P11 } from "./comparador-patinetes-exp-p11.ts";
import { PATINETES_EXP_P12 } from "./comparador-patinetes-exp-p12.ts";
import { PATINETES_BASE } from "./comparador-patinetes-base.ts";
import FICHAS_REDIRIGIDAS_PAT from "./fichas-redirigidas.generated.json";
import { PATINETES_PRIORIDAD_20261014 } from "./comparador-patinetes-prioridad-20261014.ts";

/** Foto oficial de prensa para la galería de la ficha del patinete (nunca IA). */
export interface FotoGaleriaPatinete {
  src: string;   // "/media/patinetes/<id>-2.webp"
  alt: string;
  ancho: number;
  alto: number;
}

export interface PatineteComparador {
  id: string;              // slug corto del modelo
  marca: string;           // ej. "Xiaomi"
  modelo: string;          // ej. "Electric Scooter 5"
  precioEur: number | null;       // PVP oficial en España (€); null = no publicado
  potenciaNominalW: number | null;
  potenciaPicoW: number | null;
  autonomiaKm: number | null;     // declarada por el fabricante
  autonomiaRealKm: number | null; // estimada (≈): ~65-70 % de la declarada en ciudad
  velocidadMaxKmh: number | null; // 25 en todos los VMP legales
  pesoKg: number | null;
  cargaMaxKg: number | null;
  tiempoCargaH: number | null;
  bateriaWh: number | null;
  frenos: string | null;
  neumaticos: string | null;
  certificadoDgt: boolean | null; // true = certificado verificado; null = no verificado
  foto: string;                   // "/media/patinetes/<id>.webp"
  fotoPendiente?: boolean;        // true = foto oficial aún no conseguida
  galeria?: FotoGaleriaPatinete[]; // fotos oficiales extra (prensa del fabricante)
  videoId: string | null;         // ID real de YouTube (verificado)
  videoCanal: string | null;      // canal con crédito
  aprox: string[];                // campos con cifra aproximada (se muestran con ≈)
  pros: string[];
  contras: string[];
  veredicto: string;
  fuenteNombre: string;
  fuenteUrl: string;
  // ── Comparador v2: ficha generada por IA (búsqueda libre) ──
  esIA?: boolean;
  confianza?: "alta" | "media" | "baja";
  deCache?: boolean;
  // ── Mantenimiento DIY en casa (estándar 2026-10-04): solo datos verificados ──
  mantenimientoDIY?: {
    intervaloRevision?: string;      // ej. "cada 6 meses o 1.000 km"
    presionNeumaticos?: string;      // ej. "3,5 bar (50 PSI)"
    ajusteFrenosPasos?: string[];    // ajuste de frenos específico del modelo
    aprieteTornilleria?: string;     // puntos críticos a revisar
    actualizacionFirmware?: string;  // cómo actualizar (app oficial)
    trucos?: string[];               // trucos de cuidado verificados
    videoTutorialUrl?: string;       // YouTube (embed) real y verificado
    videoTutorialTitulo?: string;
  } | null;
  /** 18/10/2026: versiones reales con precio (tabla en la ficha). Sin dato = no se muestra. Nunca inventar. */
  versiones?: { nombre: string; precio: number | null; potenciaCv?: number | null; autonomiaKm?: number | null; aprox?: boolean }[];
  /** 24/10/2026 (Grok decisión 2): la ficha NO es un patinete VMP (p. ej. e-bike fat).
   *  Texto del aviso que se muestra arriba de la ficha y sustituye la etiqueta de categoría. */
  avisoCategoria?: string;
  /** 24/10/2026 (Grok decisión 2): fuera del comparador y de los listados de patinetes. La ficha sigue existiendo en su URL. */
  fueraDeComparador?: boolean;
  /** 31/10/2026 (enriquecimiento): FAQs propias del modelo (se suman a las generadas y al JSON-LD). */
  faqExtra?: { q: string; a: string }[];
  /** 31/10/2026: rivales con cifras reales (tabla «frente a sus rivales»). Solo ids que existan como ficha. */
  rivalesTabla?: { id: string; nombre: string; precioEur: number | null; autonomiaKm?: number | null; potenciaW?: number | null; pesoKg?: number | null; nota?: string }[];
  /** 31/10/2026: fuentes consultadas con fecha (AAAA-MM-DD). */
  fuentesExtra?: { nombre: string; url: string; fecha?: string }[];
  /** 31/10/2026: fecha (AAAA-MM-DD) en que se contrastaron los datos de la ficha. */
  datosVerificadosEl?: string;
}

/** Normaliza texto para comparar marcas/modelos: minúsculas, sin tildes. */
export function normalizarModelo(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}

export const PATINETES_COMPARADOR: PatineteComparador[] = [
  ...PATINETES_BASE,
  ...PATINETES_EXP_P1,
  ...PATINETES_EXP_P2,
  ...PATINETES_EXP_P3,
  ...PATINETES_EXP_P4,
  ...PATINETES_EXP_P5,
  ...PATINETES_EXP_P6,
  ...PATINETES_EXP_P7,
  ...PATINETES_EXP_P8,
  ...PATINETES_EXP_P9,
  ...PATINETES_EXP_P10,
  ...PATINETES_EXP_P11,
  ...PATINETES_EXP_P12,
  ...PATINETES_PRIORIDAD_20261014,
].map(sanearPatinete);

/** 18/10/2026: solo patinetes con ficha propia publicada. Fuera los duplicados con 301 a otra
 *  ficha que sí existe (p. ej. xiaomi-electric-scooter-4 -> su ficha vigente). Mismo recuento que el hub /patinetes/. */
const REDIR_PAT = FICHAS_REDIRIGIDAS_PAT as Record<string, string>;
export const PATINETES_PUBLICADOS: PatineteComparador[] = PATINETES_COMPARADOR.filter((p) => {
  // Cualquier 301 forzado (a otra ficha o, si "", al hub de marca) = sin ficha propia publicada.
  if (REDIR_PAT[`patinetes/${p.id}`] !== undefined) return false;
  // 24/10/2026 (Grok decisión 2): no es un VMP (p. ej. TurboAnt Thunder T1, e-bike fat):
  // fuera del comparador y de los listados de patinetes. La ficha sigue en su URL.
  if (p.fueraDeComparador) return false;
  return true;
});

/** ¿Está el modelo en la base local? Devuelve su id o null. */
export function buscarEnBasePatinetes(marca: string, modelo: string): string | null {
  const m = normalizarModelo(marca);
  const mo = normalizarModelo(modelo);
  const combo = `${m} ${mo}`;
  for (const c of PATINETES_COMPARADOR) {
    if (normalizarModelo(c.marca) === m && normalizarModelo(c.modelo) === mo) return c.id;
  }
  for (const c of PATINETES_COMPARADOR) {
    const base = `${normalizarModelo(c.marca)} ${normalizarModelo(c.modelo)}`;
    if (combo === base || combo.includes(base) || base.includes(combo)) return c.id;
  }
  return null;
}

/**
 * Convierte una ficha IA (convex/comparadorPatinetesDatos.ts) en un
 * PatineteComparador renderizable por la tabla del comparador.
 */
export function fichaPatineteIAToPatinete(
  f: FichaPatineteIA,
  opts: { deCache: boolean }
): PatineteComparador {
  const slugBase = `${normalizarModelo(f.marca)}-${normalizarModelo(f.modelo)}`
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const enBase = buscarEnBasePatinetes(f.marca, f.modelo);
  const aprox = [...(f.camposEstimados ?? [])];
  if (!aprox.includes("autonomiaRealKm") && f.autonomiaRealKm != null) aprox.push("autonomiaRealKm");
  return {
    id: enBase ?? `ia-${slugBase}`,
    marca: f.marca,
    modelo: f.modelo,
    precioEur: f.precioEur ?? null,
    potenciaNominalW: f.potenciaNominalW ?? null,
    potenciaPicoW: f.potenciaPicoW ?? null,
    autonomiaKm: f.autonomiaKm ?? null,
    autonomiaRealKm: f.autonomiaRealKm ?? null,
    velocidadMaxKmh: f.velocidadMaxKmh ?? 25,
    pesoKg: f.pesoKg ?? null,
    cargaMaxKg: f.cargaMaxKg ?? null,
    tiempoCargaH: f.tiempoCargaH ?? null,
    bateriaWh: f.bateriaWh ?? null,
    frenos: f.frenos ?? null,
    neumaticos: f.neumaticos ?? null,
    certificadoDgt: f.certificadoDgt ?? null,
    foto: enBase
      ? (PATINETES_COMPARADOR.find((p) => p.id === enBase)?.foto ?? "")
      : "",
    fotoPendiente: !enBase,
    videoId: null,
    videoCanal: null,
    aprox,
    pros: f.pros ?? [],
    contras: f.contras ?? [],
    veredicto: f.pros?.[0]
      ? `Según la investigación web: ${f.pros[0].charAt(0).toLowerCase()}${f.pros[0].slice(1)}`
      : "Ficha generada por IA a partir de información pública en la web.",
    fuenteNombre: f.fuenteNombre ?? "Investigación web por IA",
    fuenteUrl: f.fuenteUrl ?? "",
    esIA: true,
    confianza: f.confianza ?? "media",
    deCache: opts.deCache,
  };
}
