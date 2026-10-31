// ── Agregador de análisis editoriales por ficha (estándar AdSense 2026-10-19) ──
// Fusiona los 51 lotes de src/lib/analisis-editorial/ en un único mapa
// slug → { parrafos, veredicto }, normalizando los dos formatos de lote:
//   · canónico: { parrafos: string[], veredicto: string }
//   · texto plano (coche-07, coche-08, coche-25, patinete-00): string con párrafos
//     separados por líneas en blanco (sin veredicto separado).
// Generado por el coordinador de enriquecimiento — NO EDITAR A MANO:
// para añadir un lote, importa su mapa y añádelo a la lista de fusionar().

import type { AnalisisEditorial } from "../analisis-editorial-tipos";

import { ANALISIS_CAMPER_00 } from "./camper-00";
import { ANALISIS_COCHE_00 } from "./coche-00";
import { ANALISIS_COCHE_01 } from "./coche-01";
import { ANALISIS_COCHE_02 } from "./coche-02";
import { ANALISIS_COCHE_03 } from "./coche-03";
import { ANALISIS_COCHE_04 } from "./coche-04";
import { ANALISIS_COCHE_05 } from "./coche-05";
import { ANALISIS_COCHE_06 } from "./coche-06";
import { ANALISIS_COCHE_07 } from "./coche-07";
import { ANALISIS_COCHE_08 } from "./coche-08";
import { ANALISIS_COCHE_09 } from "./coche-09";
import { ANALISIS_COCHE_10 } from "./coche-10";
import { ANALISIS_COCHE_11 } from "./coche-11";
import { ANALISIS_COCHE_12 } from "./coche-12";
import { ANALISIS_COCHE_13 } from "./coche-13";
import { ANALISIS_COCHE_14 } from "./coche-14";
import { ANALISIS_COCHE_15 } from "./coche-15";
import { ANALISIS_COCHE_16 } from "./coche-16";
import { ANALISIS_COCHE_17 } from "./coche-17";
import { ANALISIS_COCHE_18 } from "./coche-18";
import { ANALISIS_COCHE_19 } from "./coche-19";
import { ANALISIS_COCHE_20 } from "./coche-20";
import { ANALISIS_COCHE_21 } from "./coche-21";
import { ANALISIS_COCHE_22 } from "./coche-22";
import { ANALISIS_COCHE_23 } from "./coche-23";
import { ANALISIS_COCHE_24 } from "./coche-24";
import { ANALISIS_COCHE_25 } from "./coche-25";
import { ANALISIS_COCHE_26 } from "./coche-26";
import { ANALISIS_COCHE_27 } from "./coche-27";
import { ANALISIS_MOTO_16 } from "./moto-16";
import { ANALISIS_MOTO_00 } from "./moto-00";
import { ANALISIS_MOTO_01 } from "./moto-01";
import { ANALISIS_MOTO_02 } from "./moto-02";
import { ANALISIS_MOTO_03 } from "./moto-03";
import { ANALISIS_MOTO_04 } from "./moto-04";
import { ANALISIS_MOTO_05 } from "./moto-05";
import { ANALISIS_MOTO_06 } from "./moto-06";
import { ANALISIS_MOTO_07 } from "./moto-07";
import { ANALISIS_MOTO_08 } from "./moto-08";
import { ANALISIS_MOTO_09 } from "./moto-09";
import { ANALISIS_MOTO_10 } from "./moto-10";
import { ANALISIS_MOTO_11 } from "./moto-11";
import { ANALISIS_MOTO_12 } from "./moto-12";
import { ANALISIS_MOTO_13 } from "./moto-13";
import { ANALISIS_MOTO_14 } from "./moto-14";
import { ANALISIS_MOTO_15 } from "./moto-15";
import { ANALISIS_PATINETE_00 } from "./patinete-00";
import { ANALISIS_PATINETE_01 } from "./patinete-01";
import { ANALISIS_PATINETE_02 } from "./patinete-02";
import { ANALISIS_PATINETE_03 } from "./patinete-03";
import { ANALISIS_PATINETE_04 } from "./patinete-04";
import { ANALISIS_PATINETE_05 } from "./patinete-05";
import { ANALISIS_PATINETE_06 } from "./patinete-06";

type EntradaLote = AnalisisEditorial | string;
type MapaLote = Record<string, EntradaLote>;

function normalizar(valor: EntradaLote): AnalisisEditorial {
  if (typeof valor === "string") {
    const parrafos = valor
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    return { parrafos, veredicto: "" };
  }
  return valor;
}

function fusionar(...mapas: MapaLote[]): Record<string, AnalisisEditorial> {
  const out: Record<string, AnalisisEditorial> = {};
  for (const mapa of mapas) {
    for (const slug of Object.keys(mapa)) {
      out[slug] = normalizar(mapa[slug]);
    }
  }
  return out;
}

/** Mapa completo slug → análisis editorial (51 lotes). */
export const ANALISIS_EDITORIAL: Record<string, AnalisisEditorial> = fusionar(
  ANALISIS_CAMPER_00,
  ANALISIS_COCHE_00,
  ANALISIS_COCHE_01,
  ANALISIS_COCHE_02,
  ANALISIS_COCHE_03,
  ANALISIS_COCHE_04,
  ANALISIS_COCHE_05,
  ANALISIS_COCHE_06,
  ANALISIS_COCHE_07,
  ANALISIS_COCHE_08,
  ANALISIS_COCHE_09,
  ANALISIS_COCHE_10,
  ANALISIS_COCHE_11,
  ANALISIS_COCHE_12,
  ANALISIS_COCHE_13,
  ANALISIS_COCHE_14,
  ANALISIS_COCHE_15,
  ANALISIS_COCHE_16,
  ANALISIS_COCHE_17,
  ANALISIS_COCHE_18,
  ANALISIS_COCHE_19,
  ANALISIS_COCHE_20,
  ANALISIS_COCHE_21,
  ANALISIS_COCHE_22,
  ANALISIS_COCHE_23,
  ANALISIS_COCHE_24,
  ANALISIS_COCHE_25,
  ANALISIS_COCHE_26,
  ANALISIS_MOTO_00,
  ANALISIS_MOTO_01,
  ANALISIS_MOTO_02,
  ANALISIS_MOTO_03,
  ANALISIS_MOTO_04,
  ANALISIS_MOTO_05,
  ANALISIS_MOTO_06,
  ANALISIS_MOTO_07,
  ANALISIS_MOTO_08,
  ANALISIS_MOTO_09,
  ANALISIS_MOTO_10,
  ANALISIS_MOTO_11,
  ANALISIS_MOTO_12,
  ANALISIS_MOTO_13,
  ANALISIS_MOTO_14,
  ANALISIS_MOTO_15,
  ANALISIS_PATINETE_00,
  ANALISIS_PATINETE_01,
  ANALISIS_PATINETE_02,
  ANALISIS_PATINETE_03,
  ANALISIS_PATINETE_04,
  ANALISIS_PATINETE_05,
  ANALISIS_PATINETE_06,
  ANALISIS_MOTO_16,
  ANALISIS_COCHE_27, // 31/10/2026: reescrituras con datos de fuente; va el último para sustituir al análisis anterior
);

/** Devuelve el análisis editorial de una ficha por su slug, si existe. */
export function getAnalisisEditorial(slug: string): AnalisisEditorial | undefined {
  return ANALISIS_EDITORIAL[slug];
}

/** Nº total de fichas con análisis editorial. */
export const NUM_ANALISIS_EDITORIAL = Object.keys(ANALISIS_EDITORIAL).length;
