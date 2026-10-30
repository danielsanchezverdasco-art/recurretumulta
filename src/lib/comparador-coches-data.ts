import { sanearCoche } from "./fotos-saneadas.ts";
// Datos estructurados para el comparador de coches (herramienta "Novedades Motor").
// Extraídos el 02/10/2026 de los 6 artículos publicados. Solo datos que aparecen
// en los artículos; si un dato no aparece, el campo es null. No inventar cifras.
import { COCHES_NUEVOS } from "./comparador-coches-nuevos.ts";
import { COCHES_NUEVOS_C2 } from "./comparador-coches-nuevos-c2.ts";
import { COCHES_CHINOS_2026 } from "./comparador-coches-chinos-2026.ts";
import { COCHES_SMART } from "./comparador-coches-smart.ts";
import { COCHES_CUPRA } from "./comparador-coches-cupra.ts";
import { COCHES_LYNK_CO } from "./comparador-coches-lynk-co.ts";
import { COCHES_ALFA_ROMEO } from "./comparador-coches-alfa-romeo.ts";
import { COCHES_POLESTAR } from "./comparador-coches-polestar.ts";
import { COCHES_SEAT } from "./comparador-coches-seat.ts";
import { COCHES_VOLVO } from "./comparador-coches-volvo.ts";
import { COCHES_MERCEDES_BENZ } from "./comparador-coches-mercedes-benz.ts";
import { COCHES_AUDI } from "./comparador-coches-audi.ts";
import { COCHES_LAMBORGHINI } from "./comparador-coches-lamborghini.ts";
import { COCHES_MCLAREN } from "./comparador-coches-mclaren.ts";
import { COCHES_ROLLS_ROYCE } from "./comparador-coches-rolls-royce.ts";
import { COCHES_ALPINE } from "./comparador-coches-alpine.ts";
import { COCHES_MASERATI } from "./comparador-coches-maserati.ts";
import { COCHES_FERRARI } from "./comparador-coches-ferrari.ts";
import { COCHES_ASTON_MARTIN } from "./comparador-coches-aston-martin.ts";
import { COCHES_BENTLEY } from "./comparador-coches-bentley.ts";
import { COCHES_PORSCHE } from "./comparador-coches-porsche.ts";
import { COCHES_SKODA } from "./comparador-coches-skoda.ts";
import { COCHES_RENAULT } from "./comparador-coches-renault.ts";
import { COCHES_BMW } from "./comparador-coches-bmw.ts";
import { COCHES_OPEL } from "./comparador-coches-opel.ts";
import { COCHES_HYUNDAI } from "./comparador-coches-hyundai.ts";
import { COCHES_DACIA } from "./comparador-coches-dacia.ts";
import { COCHES_TOYOTA } from "./comparador-coches-toyota.ts";
import { COCHES_VOLKSWAGEN } from "./comparador-coches-volkswagen.ts";
import { COCHES_KIA } from "./comparador-coches-kia.ts";
import { COCHES_TESLA } from "./comparador-coches-tesla.ts";
import { COCHES_HONDA } from "./comparador-coches-honda.ts";
import { COCHES_SUZUKI } from "./comparador-coches-suzuki.ts";
import { COCHES_NISSAN } from "./comparador-coches-nissan.ts";
import { COCHES_BYD } from "./comparador-coches-byd.ts";
import { COCHES_MG } from "./comparador-coches-mg.ts";
import { COCHES_MAZDA } from "./comparador-coches-mazda.ts";
import { COCHES_PEUGEOT } from "./comparador-coches-peugeot.ts";
import { COCHES_FORD } from "./comparador-coches-ford.ts";
import { COCHES_OMODA } from "./comparador-coches-omoda.ts";
import { COCHES_EBRO } from "./comparador-coches-ebro.ts";
import { COCHES_LEAPMOTOR } from "./comparador-coches-leapmotor.ts";
import { COCHES_JAECOO } from "./comparador-coches-jaecoo.ts";
import { COCHES_MITSUBISHI } from "./comparador-coches-mitsubishi.ts";
import { COCHES_FIAT } from "./comparador-coches-fiat.ts";
import { COCHES_CITROEN } from "./comparador-coches-citroen.ts";
import { COCHES_LEXUS } from "./comparador-coches-lexus.ts";
import { COCHES_JEEP } from "./comparador-coches-jeep.ts";
import { COCHES_CHANGAN } from "./comparador-coches-changan.ts";
import { COCHES_GEELY } from "./comparador-coches-geely.ts";
import { COCHES_DEEPAL } from "./comparador-coches-deepal.ts";
import { COCHES_SUBARU } from "./comparador-coches-subaru.ts";
import { COCHES_DFSK } from "./comparador-coches-dfsk.ts";
import { COCHES_XPENG } from "./comparador-coches-xpeng.ts";
import { COCHES_KGM } from "./comparador-coches-kgm.ts";
import { COCHES_NIO } from "./comparador-coches-nio.ts";
import { COCHES_LIAUTO } from "./comparador-coches-liauto.ts";
import { COCHES_JETOUR } from "./comparador-coches-jetour.ts";
import { COCHES_IM_MOTORS } from "./comparador-coches-im-motors.ts";
import { COCHES_AITO } from "./comparador-coches-aito.ts";
import { COCHES_XIAOMI } from "./comparador-coches-xiaomi.ts";
import { COCHES_YANGWANG } from "./comparador-coches-yangwang.ts";
import { COCHES_HONGQI } from "./comparador-coches-hongqi.ts";
import { COCHES_VOYAH } from "./comparador-coches-voyah.ts";
import { COCHES_DONGFENG } from "./comparador-coches-dongfeng.ts";
import { COCHES_LEPAS } from "./comparador-coches-lepas.ts";
import { COCHES_DENZA } from "./comparador-coches-denza.ts";
import { COCHES_LOTUS } from "./comparador-coches-lotus.ts";
import { COCHES_LUXEED } from "./comparador-coches-luxeed.ts";
import { COCHES_MAEXTRO } from "./comparador-coches-maextro.ts";
import { COCHES_ONVO } from "./comparador-coches-onvo.ts";
import { COCHES_STELATO } from "./comparador-coches-stelato.ts";
import { COCHES_ZEEKR } from "./comparador-coches-zeekr.ts";
import { COCHES_CHERY } from "./comparador-coches-chery.ts";
import { COCHES_EXEED } from "./comparador-coches-exeed.ts";
import { COCHES_HAVAL } from "./comparador-coches-haval.ts";
import { COCHES_WEY } from "./comparador-coches-wey.ts";
import { COCHES_TANK } from "./comparador-coches-tank.ts";
import { COCHES_RIDDARA } from "./comparador-coches-riddara.ts";
import { COCHES_LIVAN } from "./comparador-coches-livan.ts";
import { COCHES_ROEWE } from "./comparador-coches-roewe.ts";
import { COCHES_RISING_AUTO } from "./comparador-coches-rising-auto.ts";
import { COCHES_WULING } from "./comparador-coches-wuling.ts";
import { COCHES_BAOJUN } from "./comparador-coches-baojun.ts";
import { COCHES_NEVO } from "./comparador-coches-nevo.ts";
import { COCHES_FORTHING } from "./comparador-coches-forthing.ts";
import { COCHES_BESTUNE } from "./comparador-coches-bestune.ts";
import { COCHES_AION } from "./comparador-coches-aion.ts";
import { COCHES_HYPTEC } from "./comparador-coches-hyptec.ts";
import { COCHES_JAC } from "./comparador-coches-jac.ts";
import { COCHES_BEIJING_BAIC } from "./comparador-coches-beijing-baic.ts";
import { COCHES_NETA } from "./comparador-coches-neta.ts";
import { COCHES_GEELY_GALAXY } from "./comparador-coches-geely-galaxy.ts";
import { COCHES_RADICAL } from "./comparador-coches-radical.ts";
import { COCHES_TVR } from "./comparador-coches-tvr.ts";
import { COCHES_NOBLE } from "./comparador-coches-noble.ts";
import { COCHES_WIESMANN } from "./comparador-coches-wiesmann.ts";
import { COCHES_DELAGE } from "./comparador-coches-delage.ts";
import { COCHES_LEVC } from "./comparador-coches-levc.ts";
import { COCHES_AIXAM } from "./comparador-coches-aixam.ts";
import { COCHES_LIGIER } from "./comparador-coches-ligier.ts";
import { COCHES_EXP7 } from "./comparador-coches-exp7.ts";
import { COCHES_EXP8 } from "./comparador-coches-exp8.ts";
import { COCHES_EXP9 } from "./comparador-coches-exp9.ts";
import { COCHES_EXP10 } from "./comparador-coches-exp10.ts";
import { COCHES_EXP11 } from "./comparador-coches-exp11.ts";
import { COCHES_EXP12 } from "./comparador-coches-exp12.ts";
import { COCHES_EXP13 } from "./comparador-coches-exp13.ts";
import { COCHES_EXP14 } from "./comparador-coches-exp14.ts";
import { COCHES_EXP15 } from "./comparador-coches-exp15.ts";
import { COCHES_EXP16 } from "./comparador-coches-exp16.ts";
import { COCHES_EXP17 } from "./comparador-coches-exp17.ts";
import { COCHES_EXP18 } from "./comparador-coches-exp18.ts";
import { COCHES_EXP19 } from "./comparador-coches-exp19.ts";
import { COCHES_EXP20 } from "./comparador-coches-exp20.ts";
import { COCHES_EXP21 } from "./comparador-coches-exp21.ts";
import { COCHES_EXP22 } from "./comparador-coches-exp22.ts";
import { COCHES_EXP23 } from "./comparador-coches-exp23.ts";
import { COCHES_EXP24 } from "./comparador-coches-exp24.ts";
import { COCHES_EXP25 } from "./comparador-coches-exp25.ts";
import { COCHES_EXP26 } from "./comparador-coches-exp26.ts";
import { COCHES_NUEVOS_C3 } from "./comparador-coches-nuevos-c3.ts";
import { COCHES_NUEVOS_C1 } from "./comparador-coches-nuevos-c1.ts";
import { COCHES_NUEVOS_C4 } from "./comparador-coches-nuevos-c4.ts";
import { COCHES_NUEVOS_C6 } from "./comparador-coches-nuevos-c6.ts";
// import { COCHES_NUEVOS_C5 } from "./comparador-coches-nuevos-c5.ts"; // EXCLUDED

/** Cita real de un propietario con fuente enlazada.
 *  PROHIBIDO inventar: array vacío = sección pendiente de encontrar opiniones reales. */
export interface OpinionPropietario {
  texto: string;   // cita textual corta (≤200 caracteres)
  usuario: string; // nick del autor
  fuente: string;  // foro/comunidad (forocoches, Reddit r/coches…)
  url: string;     // enlace directo a la fuente
}

/** Estimación orientativa del coste mensual. Todo ≈, con nota de metodología. */
export interface CosteMensual {
  costeEnergia100km: number;   // € por 100 km
  seguroTercerosAnual: number; // €/año estimado
  seguroAmpliadoAnual: number; // €/año estimado
  mantenimientoAnual: number;  // €/año estimado
  costeMensualTotal: number;   // €/mes estimado
  precioKwh: number;           // €/kWh supuesto en el cálculo
  precioGasolinaL: number;     // €/l supuesto en el cálculo
  notas: string;              // metodología y supuestos
  estimado: boolean;          // siempre true: son estimaciones, no tarifas
}

/** Foto oficial de prensa para la galería de la ficha (nunca IA). */
export interface FotoGaleria {
  src: string;   // "/media/<id>-oficial-2.webp"
  alt: string;
  ancho: number;
  alto: number;
}

import type { TextosPropios } from "@/lib/textos-propios.ts";

export interface CocheComparador {
  /** Textos propios opcionales de esta ficha (ver textos-propios.ts). */
  textosPropios?: TextosPropios;
  id: string;            // slug del artículo
  marca: string;         // ej. "Skoda"
  modelo: string;        // ej. "Peaq"
  tipo: string;          // "Eléctrico" | "Híbrido enchufable" | etc.
  categoria: string;     // "SUV" | "Urbano" | "Berlina" | "Deportivo"...
  precioDesde: number | null;   // euros, número
  potenciaCv: number | null;
  autonomiaKm: number | null;   // WLTP (en PHEV: autonomía eléctrica)
  maleteroL: number | null;
  ceroCien: number | null;       // segundos
  velocidadMax: number | null;  // km/h
  bateriaKwh: number | null;
  cargaRapidaKw: number | null; // DC
  etiquetaDgt: string | null;   // "Cero" | "ECO" | ...
  // Garantía de la batería de tracción (verificada en web oficial / km77).
  // null = no publicado por la marca o sin batería de tracción (gasolina).
  garantiaBateriaAnos: number | null;
  garantiaBateriaKm: number | null;          // km totales (ej. 160000)
  garantiaBateriaDegradacionPct: number | null; // % de capacidad mínima garantizada (ej. 70)
  // Datos técnicos ampliados (fuente principal: km77)
  largoMm: number | null;
  anchoMm: number | null;
  altoMm: number | null;
  pesoKg: number | null;
  mmaKg?: number | null;               // masa máxima autorizada (19/10/2026 campers: obligatoria si hay fuente)
  carnetNecesario?: "B" | "B96" | "BE" | "C1" | "C" | null; // carnet requerido según MMA (19/10/2026; "C" añadido 19/10/2026: hay fichas con MMA>7.500 que lo requieren)
  cargaUtilKg?: number | null;         // carga útil: SOLO con fuente, nunca calculada (19/10/2026)
  consumo: number | null;            // WLTP
  consumoUnidad: string | null;      // "kWh/100 km" | "l/100 km"
  plazas: number | null;
  parNm: number | null;              // par máximo
  traccion: string | null;           // "Delantera" | "Trasera" | "Total"
  emisionesCo2: number | null;       // g/km WLTP
  aprox: string[];                   // campos con cifra aproximada (se muestran con ≈)
  pros: string[];               // de la tabla de pros del artículo (textos cortos)
  contras: string[];            // de la tabla de contras (textos cortos)
  imagen: string;               // "/media/<slug>-hero.webp" (IA, artículo)
  imagenOficial: string;        // "/media/<slug>-oficial.webp" (prensa, comparador)
  imagenInteriorOficial: string; // "/media/<id>-interior-oficial.webp" (prensa, interior); "" si no hay foto oficial
  analisisSlug?: string | null; // slug del artículo de análisis del blog (opcional en coches)
  videoId: string | null;       // ID de YouTube del vídeo del artículo
  videoCanal: string | null;    // canal con crédito en el artículo
  // ── Estándar ficha-modelo (2026-10-03): opiniones reales, costes ≈, galería oficial ──
  opiniones?: OpinionPropietario[];
  costeMensual?: CosteMensual | null;
  galeria?: FotoGaleria[];
  // ── Mantenimiento DIY en casa (estándar 2026-10-04): guías paso a paso ──
  mantenimientoDIY?: {
    resetAceiteTitulo: string;      // ej. "Resetear aviso de aceite"
    resetAceitePasos: string[];     // pasos numerados específicos del modelo
    resetAceiteNota?: string;       // ej. "En algunas versiones requiere diagnosis OBD"
    intervaloMantenimiento?: string; // ej. "15.000 km o 12 meses (lo que ocurra antes)" según marca oficial
    filtroPolenUbicacion: string;   // ej. "Detrás de la guantera"
    filtroPolenPasos: string[];     // pasos para cambiarlo
    filtroAirePasos?: string[];     // pasos para el filtro de aire del motor
    videoTutorialUrl?: string;      // YouTube (embed)
    videoTutorialTitulo?: string;
  } | null;
  // ── EuroNCAP verificado (estándar 2026-10-07): nunca inventar; si no hay prueba, estrellas=null ──
  euroncap?: {
    estrellas: number | null;   // 0-5; null = sin prueba publicada
    ano: number | null;         // año de la prueba
    url: string | null;         // enlace oficial euroncap.com
    nota?: string | null;       // ej. "Sin datos EuroNCAP: modelo no probado"
  } | null;
  // ── Plan de mantenimiento oficial (OBLIGATORIO desde 2026-10-07, orden de Daniel) ──
  planMantenimiento?: {
    intervalo: string;          // ej. "15.000 km o 12 meses (lo que ocurra antes)"
    revisiones: {               // qué se cambia en cada revisión
      nombre: string;           // ej. "Revisión anual / 15.000 km"
      queSeCambia: string;      // ej. "Aceite + filtro aceite + filtro polen + inspección"
      costeAproxEur: number | null;
    }[];
    costeAnualAproxEur?: number | null;
    fuente?: string | null;     // ej. "Manual oficial Toyota España"
  } | null;
  esIA?: boolean;
  confianza?: "alta" | "media" | "baja";
  fuenteNombre?: string | null;
  fuenteUrl?: string | null;
  /** 19/10/2026: curiosidad verificable del modelo (orden Grok). */
  curiosidad?: {
    texto: string;
    fuenteNombre?: string | null;
    fuenteUrl: string;
  } | null;
  deCache?: boolean;
  /** 18/10/2026: versiones reales con precio (tabla en la ficha). Sin dato = no se muestra. Nunca inventar. */
  /** 18/10/2026: ciclo de homologación de autonomiaKm si no es WLTP (p. ej. modelos solo vendidos en China). */
  cicloAutonomia?: string | null;
  /** 18/10/2026: si la foto de interior no es de prensa, crédito real (autor y licencia). Sin esto se rotula como oficial. */
  creditoInteriorFoto?: string;
  versiones?: { nombre: string; precio: number | null; potenciaCv?: number | null; autonomiaKm?: number | null; aprox?: boolean }[] | null;
}

/** Normaliza texto para comparar marcas/modelos: minúsculas, sin tildes. */
export function normalizarModelo(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}


import { COCHES_LOTE1 } from "./comparador-coches-lote1.ts";
import { COCHES_LOTE2 } from "./comparador-coches-lote2.ts";
import { COCHES_LOTE3 } from "./comparador-coches-lote3.ts";
import { COCHES_LOTE4 } from "./comparador-coches-lote4.ts";
import { COCHES_LOTE5 } from "./comparador-coches-lote5.ts";
import { COCHES_LOTE6 } from "./comparador-coches-lote6.ts";
import { COCHES_LOTE11 } from "./comparador-coches-lote11.ts";
import { COCHES_LOTE12 } from "./comparador-coches-lote12.ts";
import { COCHES_LOTE13 } from "./comparador-coches-lote13.ts";
import { COCHES_LOTE16 } from "./comparador-coches-lote16.ts";
import { COCHES_LOTE17 } from "./comparador-coches-lote17.ts";
import { COCHES_PRIORIDAD_20261014 } from "./comparador-coches-prioridad-20261014.ts";
import { COCHES_BASE } from "./comparador-coches-base.ts";
import { CAMPERS_ADRIA } from "./comparador-campers-adria.ts";
import { CAMPERS_BUERSTNER } from "./comparador-campers-buerstner.ts";
import { CAMPERS_CAMPEREVE } from "./comparador-campers-campereve.ts";
import { CAMPERS_CHAUSSON } from "./comparador-campers-chausson.ts";
import { CAMPERS_DREAMER } from "./comparador-campers-dreamer.ts";
import { CAMPERS_FONT_VENDOME } from "./comparador-campers-font-vendome.ts";
import { CAMPERS_FORD } from "./comparador-campers-ford.ts";
import { CAMPERS_GRUPO4} from "./comparador-campers-grupo4.ts";
import { CAMPERS_HYMER } from "./comparador-campers-hymer.ts";
import { CAMPERS_JAPONESAS } from "./comparador-campers-japonesas.ts";
import { CAMPERS_LAIKA_SUNLIGHT } from "./comparador-campers-laika-sunlight.ts";
import { CAMPERS_MAN_FORD } from "./comparador-campers-man-ford.ts";
import { CAMPERS_NIKY_ESPANOLAS } from "./comparador-campers-niky.ts";
import { CAMPERS_PILOTE } from "./comparador-campers-pilote.ts";
import { CAMPERS_POSSL } from "./comparador-campers-possl.ts";
import { CAMPERS_RAPIDO } from "./comparador-campers-rapido.ts";
import { CAMPERS_ROLLER_OTROS } from "./comparador-campers-roller-otros.ts";
import { CAMPERS_SPRINTER } from "./comparador-campers-sprinter.ts";
import { CAMPERS_VOLKSWAGEN } from "./comparador-campers-volkswagen.ts";
import { CAMPERS_VW } from "./comparador-campers-vw.ts";
import { CAMPERS_WESTFALIA } from "./comparador-campers-westfalia.ts";
// BLOQUE 3 (03/10/2026): 18 modelos nuevos verificados (12 chinos + 6 europeos).
export const COCHES_COMPARADOR: CocheComparador[] = [...COCHES_BASE, ...COCHES_NUEVOS, ...COCHES_NUEVOS_C2, ...COCHES_CHINOS_2026, ...COCHES_SMART, ...COCHES_CUPRA, ...COCHES_LYNK_CO, ...COCHES_ALFA_ROMEO, ...COCHES_POLESTAR, ...COCHES_SEAT, ...COCHES_VOLVO, ...COCHES_MERCEDES_BENZ, ...COCHES_AUDI, ...COCHES_LAMBORGHINI, ...COCHES_MCLAREN, ...COCHES_ROLLS_ROYCE, ...COCHES_ALPINE, ...COCHES_MASERATI, ...COCHES_FERRARI, ...COCHES_ASTON_MARTIN, ...COCHES_BENTLEY, ...COCHES_PORSCHE, ...COCHES_SKODA, ...COCHES_RENAULT, ...COCHES_BMW, ...COCHES_OPEL, ...COCHES_HYUNDAI, ...COCHES_DACIA, ...COCHES_TOYOTA, ...COCHES_VOLKSWAGEN, ...COCHES_KIA, ...COCHES_TESLA, ...COCHES_HONDA, ...COCHES_SUZUKI, ...COCHES_NISSAN, ...COCHES_BYD, ...COCHES_MG, ...COCHES_MAZDA, ...COCHES_PEUGEOT, ...COCHES_FORD, ...COCHES_OMODA, ...COCHES_EBRO, ...COCHES_LEAPMOTOR, ...COCHES_JAECOO, ...COCHES_MITSUBISHI, ...COCHES_FIAT, ...COCHES_CITROEN, ...COCHES_LEXUS, ...COCHES_JEEP, ...COCHES_CHANGAN, ...COCHES_GEELY, ...COCHES_DEEPAL, ...COCHES_SUBARU, ...COCHES_DFSK, ...COCHES_XPENG, ...COCHES_KGM, ...COCHES_NIO, ...COCHES_LIAUTO, ...COCHES_JETOUR, ...COCHES_IM_MOTORS, ...COCHES_AITO, ...COCHES_XIAOMI, ...COCHES_YANGWANG, ...COCHES_HONGQI, ...COCHES_VOYAH, ...COCHES_DONGFENG, ...COCHES_LEPAS, ...COCHES_DENZA, ...COCHES_LOTUS, ...COCHES_LUXEED, ...COCHES_MAEXTRO, ...COCHES_ONVO, ...COCHES_STELATO, ...COCHES_ZEEKR, ...COCHES_CHERY, ...COCHES_EXEED, ...COCHES_HAVAL, ...COCHES_WEY, ...COCHES_TANK, ...COCHES_RIDDARA, ...COCHES_LIVAN, ...COCHES_ROEWE, ...COCHES_RISING_AUTO, ...COCHES_WULING, ...COCHES_BAOJUN, ...COCHES_NEVO, ...COCHES_FORTHING, ...COCHES_BESTUNE, ...COCHES_AION, ...COCHES_HYPTEC, ...COCHES_JAC, ...COCHES_BEIJING_BAIC, ...COCHES_NETA, ...COCHES_GEELY_GALAXY, ...COCHES_RADICAL, ...COCHES_TVR, ...COCHES_NOBLE, ...COCHES_WIESMANN, ...COCHES_DELAGE, ...COCHES_LEVC, ...COCHES_AIXAM, ...COCHES_LIGIER, ...COCHES_EXP7, ...COCHES_EXP8, ...COCHES_EXP9, ...COCHES_EXP10, ...COCHES_EXP11, ...COCHES_EXP12, ...COCHES_EXP13, ...COCHES_EXP14, ...COCHES_EXP15, ...COCHES_EXP16, ...COCHES_EXP17, ...COCHES_EXP18, ...COCHES_EXP19, ...COCHES_EXP20, ...COCHES_EXP21, ...COCHES_EXP22, ...COCHES_EXP23, ...COCHES_EXP24, ...COCHES_EXP25, ...COCHES_EXP26, ...COCHES_NUEVOS_C3, ...COCHES_NUEVOS_C4, ...COCHES_NUEVOS_C1, ...COCHES_NUEVOS_C6, ...COCHES_LOTE1, ...COCHES_LOTE2, ...COCHES_LOTE3, ...COCHES_LOTE4, ...COCHES_LOTE5, ...COCHES_LOTE6, ...COCHES_LOTE11, ...COCHES_LOTE12, ...COCHES_LOTE13, ...COCHES_LOTE16, ...COCHES_LOTE17, ...CAMPERS_ADRIA, ...CAMPERS_BUERSTNER, ...CAMPERS_CAMPEREVE, ...CAMPERS_CHAUSSON, ...CAMPERS_DREAMER, ...CAMPERS_FONT_VENDOME, ...CAMPERS_FORD, ...CAMPERS_GRUPO4, ...CAMPERS_HYMER, ...CAMPERS_JAPONESAS, ...CAMPERS_LAIKA_SUNLIGHT, ...CAMPERS_MAN_FORD, ...CAMPERS_NIKY_ESPANOLAS, ...CAMPERS_PILOTE, ...CAMPERS_POSSL, ...CAMPERS_RAPIDO, ...CAMPERS_ROLLER_OTROS, ...CAMPERS_SPRINTER, ...CAMPERS_VOLKSWAGEN, ...CAMPERS_VW, ...CAMPERS_WESTFALIA, ...COCHES_PRIORIDAD_20261014].map(sanearCoche);
