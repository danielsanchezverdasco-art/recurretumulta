// Datos estructurados para el comparador de motos eléctricas.
// Fuente principal: webs oficiales de las marcas (fichas técnicas España).
// Solo datos publicados por fuentes fiables; si un dato no aparece, null.
// Las estimaciones van al array `aprox` (se muestran con ≈). No inventar cifras.
import { MOTOS_EXP_M2 } from "./comparador-motos-exp-m2.ts";
import { MOTOS_EXP_M1 } from "./comparador-motos-exp-m1.ts";
import { MOTOS_EXP_M3 } from "./comparador-motos-exp-m3.ts";
import { MOTOS_EXP_M4 } from "./comparador-motos-exp-m4.ts";
import { MOTOS_EXP_M5 } from "./comparador-motos-exp-m5.ts";
import { MOTOS_EXP_M6 } from "./comparador-motos-exp-m6.ts";
import { MOTOS_EXP_M7 } from "./comparador-motos-exp-m7.ts";
import { MOTOS_EXP_M8 } from "./comparador-motos-exp-m8.ts";
import { MOTOS_EXP_M9 } from "./comparador-motos-exp-m9.ts";
import { MOTOS_EXP_M10 } from "./comparador-motos-exp-m10.ts";
import { MOTOS_EXP_M11 } from "./comparador-motos-exp-m11.ts";
import { MOTOS_EXP_M12 } from "./comparador-motos-exp-m12.ts";
import { MOTOS_EXP_M13 } from "./comparador-motos-exp-m13.ts";
import { MOTOS_EXP_M14 } from "./comparador-motos-exp-m14.ts";
import { MOTOS_EXP_M15 } from "./comparador-motos-exp-m15.ts";
import { MOTOS_EXP_M16 } from "./comparador-motos-exp-m16.ts";
import { MOTOS_EXP_M17 } from "./comparador-motos-exp-m17.ts";
import { MOTOS_EXP_M18 } from "./comparador-motos-exp-m18.ts";
import { MOTOS_EXP_M19 } from "./comparador-motos-exp-m19.ts";
import { MOTOS_EXP_M20 } from "./comparador-motos-exp-m20.ts";
import { MOTOS_EXP_M21 } from "./comparador-motos-exp-m21.ts";
import { MOTOS_EXP_M22 } from "./comparador-motos-exp-m22.ts";
import { MOTOS_EXP_M23 } from "./comparador-motos-exp-m23.ts";
import { MOTOS_EXP_M24 } from "./comparador-motos-exp-m24.ts";
import { MOTOS_EXP_M25 } from "./comparador-motos-exp-m25.ts";
import { MOTOS_EXP_M26 } from "./comparador-motos-exp-m26.ts";
import { MOTOS_EXP_M27 } from "./comparador-motos-exp-m27.ts";
import { MOTOS_EXP_M28 } from "./comparador-motos-exp-m28.ts";
import { MOTOS_LOTE10 } from "./comparador-motos-lote10.ts";
import { MOTOS_EXP_M29 } from "./comparador-motos-exp-m29.ts";
import { MOTOS_EXP_M30 } from "./comparador-motos-exp-m30.ts";
import { MOTOS_LOTE8 } from "./comparador-motos-lote8.ts";
import { MOTOS_LOTE7 } from "./comparador-motos-lote7.ts";
import { MOTOS_LOTE9 } from "./comparador-motos-lote9.ts";
import { MOTOS_LOTE14 } from "./comparador-motos-lote14.ts";
import { MOTOS_LOTE15 } from "./comparador-motos-lote15.ts";
import { MOTOS_LOTE16 } from "./comparador-motos-lote16.ts";
import { MOTOS_NUEVOS_M4 } from "./comparador-motos-nuevos-m4.ts";
import { MOTOS_NUEVOS_M5 } from "./comparador-motos-nuevos-m5.ts";
import { MOTOS_NUEVOS_M7 } from "./comparador-motos-nuevos-m7.ts";
import { MOTOS_NUEVOS_M6 } from "./comparador-motos-nuevos-m6.ts"; // 18/10/2026: reincluido (26 fichas publicadas sin datos en el comparador)
import FICHAS_REDIRIGIDAS from "./fichas-redirigidas.generated.json";
import { MOTOS_NUEVOS_M3 } from "./comparador-motos-nuevos-m3.ts";
import { MOTOS_NUEVOS_M1 } from "./comparador-motos-nuevos-m1.ts";
import { MOTOS_NUEVOS_M2 } from "./comparador-motos-nuevos-m2.ts";
import { MOTOS_BASE } from "./comparador-motos-base.ts";
import { MOTOS_PRIORIDAD_20261014 } from "./comparador-motos-prioridad-20261014.ts";

/** Foto oficial de prensa para la galería de la ficha (nunca IA). */
export interface FotoGaleriaMoto {
  src: string;   // "/media/<slug>-oficial-2.webp"
  alt: string;   // en español, ej. "Silence S01, vista lateral"
  ancho: number; // máx. 1200
  alto: number;
}

export interface MotoComparador {
  id: string;            // slug único, ej. "silence-s01-ficha-tecnica-precio"
  marca: string;         // ej. "Silence"
  modelo: string;        // ej. "S01"
  version: string;       // versión comercial, ej. "S01 Connected"
  categoria: string;     // "Scooter" | "Urbana" | "Naked" | "Trail"
  precioDesde: number | null;   // euros, PVP España
  potenciaKw: number | null;
  potenciaCv: number | null;
  /** Cilindrada real en cm³ (solo combustión). null en eléctricas o si no hay dato verificado. No inventar. */
  cilindradaCc?: number | null;
  autonomiaKm: number | null;   // WMTC o declarada por la marca
  autonomiaCiclo: string | null; // "WMTC" | "Declarada" | null
  bateriaKwh: number | null;
  velocidadMax: number | null; // km/h
  ceroCincuenta: number | null; // 0-50 km/h en segundos
  pesoKg: number | null;        // en orden de marcha
  plazas: number | null;
  carnet: string;              // "AM" | "A1" | "A2" | "A" (+ nota B si aplica)
  carga: string | null;        // texto corto de carga
  etiquetaDgt: string | null;  // "Cero" | "C" | null
  aprox: string[];             // campos con cifra aproximada (se muestran con ≈)
  pros: string[];              // 5+, de reviews reales
  contras: string[];           // 5+, de reviews reales
  curiosidades: string[];      // 3+, datos reales
  imagen: string | null;     // "/media/<slug>-oficial.webp" (foto oficial) o null si está pendiente
  galeria: FotoGaleriaMoto[]; // fotos oficiales adicionales (mín. 2): "/media/<slug>-oficial-2.webp", "-oficial-3.webp"
  videoId: string | null;      // ID real de YouTube (verificado)
  videoCanal: string | null;   // canal con crédito
  fuenteNombre: string | null; // ej. "Silence España"
  fuenteUrl: string | null;    // URL de la ficha oficial
  analisisSlug: string | null;  // slug del duelo/artículo donde se analiza
  // ── Mantenimiento DIY en casa (estándar 2026-10-04): solo datos verificados ──
  mantenimientoDIY?: {
    intervaloMantenimiento?: string; // ej. "6.000 km o 12 meses" según manual oficial
    aceiteTipo?: string;             // ej. "10W-40 JASO MA2" (motos combustión)
    resetServicioTitulo?: string;    // ej. "Resetear aviso de revisión"
    resetServicioPasos?: string[];   // pasos específicos del modelo (botones del cuadro)
    filtroAirePasos?: string[];      // acceso y cambio del filtro de aire
    cadenaPasos?: string[];          // tensado y engrase de cadena (si aplica)
    trucos?: string[];               // trucos de cuidado verificados
    videoTutorialUrl?: string;       // YouTube (embed) real y verificado
    videoTutorialTitulo?: string;
  } | null;
  // ── Plan de mantenimiento oficial (OBLIGATORIO desde 2026-10-07, orden de Daniel) ──
  planMantenimiento?: {
    intervalo: string;          // ej. "6.000 km o 12 meses (lo que ocurra antes)"
    revisiones: {               // qué se cambia en cada revisión
      nombre: string;           // ej. "Revisión anual / 6.000 km"
      queSeCambia: string;      // ej. "Aceite 10W-40 + filtro aceite + inspección general"
      costeAproxEur: number | null;
    }[];
    costeAnualAproxEur?: number | null;
    fuente?: string | null;     // ej. "Manual oficial Honda España"
  } | null;
  /** 18/10/2026: versiones reales con precio (tabla en la ficha). Sin dato = no se muestra. Nunca inventar. */
  versiones?: { nombre: string; precio: number | null; potenciaCv?: number | null; autonomiaKm?: number | null; aprox?: boolean }[];
}

/** Normaliza texto para comparar marcas/modelos: minúsculas, sin tildes. */
export function normalizarMoto(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}

export const MOTOS_COMPARADOR: MotoComparador[] = [
  ...MOTOS_BASE,
  ...MOTOS_EXP_M2,
  ...MOTOS_EXP_M1,
  ...MOTOS_EXP_M3,
  ...MOTOS_EXP_M4,
  ...MOTOS_EXP_M5,
  ...MOTOS_EXP_M6,
  ...MOTOS_EXP_M7,
  ...MOTOS_EXP_M8,
  ...MOTOS_EXP_M9,
  ...MOTOS_EXP_M10,
  ...MOTOS_EXP_M11,
  ...MOTOS_EXP_M12,
  ...MOTOS_EXP_M13,
  ...MOTOS_EXP_M14,
  ...MOTOS_EXP_M15, ...MOTOS_EXP_M16, ...MOTOS_EXP_M17, ...MOTOS_EXP_M18,
  ...MOTOS_EXP_M19, ...MOTOS_EXP_M20, ...MOTOS_EXP_M21, ...MOTOS_EXP_M22, ...MOTOS_EXP_M23,
  ...MOTOS_EXP_M24, ...MOTOS_EXP_M25, ...MOTOS_EXP_M26, ...MOTOS_EXP_M27, ...MOTOS_EXP_M28, ...MOTOS_EXP_M29,
  ...MOTOS_EXP_M30,
  ...MOTOS_LOTE7,
  ...MOTOS_LOTE8,
  ...MOTOS_LOTE9,
  ...MOTOS_NUEVOS_M4,
  ...MOTOS_NUEVOS_M5,
  ...MOTOS_NUEVOS_M3,
  ...MOTOS_NUEVOS_M1,
  ...MOTOS_NUEVOS_M2,
  ...MOTOS_NUEVOS_M7,
  ...MOTOS_LOTE10,
  ...MOTOS_LOTE14,
  ...MOTOS_LOTE15,
  ...MOTOS_LOTE16,
  ...MOTOS_PRIORIDAD_20261014,
  ...MOTOS_NUEVOS_M6,
];
/** 18/10/2026: ids de datos sin ficha propia publicada. No se cuentan ni se enlazan.
 *  (18/10 tarde: cyclone-battlo, keeway-k-light-250v, zontes-368e, zontes-e125 y ktm-1390-super-adventure-s-2026
 *  ya tienen ficha 200 indexable en vivo, así que vuelven a contar: hub y comparador = mismo recuento.) */
const MOTOS_SIN_FICHA = new Set([
  "yamaha-xsr700-2026-ficha-tecnica-precio", // 301 a la XSR700 2025
]);
/** Solo motos con ficha publicada propia: fuera las que no tienen página y las duplicadas con 301
 *  a otra ficha que sí existe (p. ej. 2025 -> 2026). Mismo recuento que el hub /motos/. */
const REDIR = FICHAS_REDIRIGIDAS as Record<string, string>;
const CON_PAGINA = new Set(MOTOS_COMPARADOR.filter((m) => !MOTOS_SIN_FICHA.has(m.id)).map((m) => m.id));
export const MOTOS_PUBLICADAS: MotoComparador[] = MOTOS_COMPARADOR.filter((m) => {
  if (!CON_PAGINA.has(m.id)) return false;
  // 18/10/2026: cualquier 301 forzado (a otra ficha o, si "", a un hub) = sin ficha propia publicada.
  return REDIR[`motos/${m.id}`] === undefined;
});

