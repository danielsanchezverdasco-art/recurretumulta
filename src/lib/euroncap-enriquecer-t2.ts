// EURONCAP ENRIQUECER T2 — Hyundai + Kia (20/10/2026, tanda 2 para Niki).
// Solo entran fichas de la tanda 2 que NO tenían ya entrada en SEGURIDAD_EURONCAP
// y cuyo test Euro NCAP está verificado. Sin test verificado -> SIN entrada.
// Fuentes: páginas oficiales de resultados Euro NCAP vía registros ya verificados
// del repo (exp18: IONIQ 6, i10, Bayon, EV4), nota de prensa oficial de Kia
// (EV5, nov-2025: 83/85/74/80) y prensa especializada que reproduce el test
// europeo del Sorento (dic-2020: 82/85/63/89; el rating europeo cubre todas
// las variantes europeas, HEV incluida).
// Ratings duales: EV4 = 4 estrellas de serie (5 con DriveWise Safety Pack);
// Stonic = 3 estrellas de serie en 2017 (5 con el pack opcional: 93/84/71/59);
// para el Stonic no se publican porcentajes de la versión de serie por no
// estar verificados en esta tanda -> null.
// Vídeos: solo IDs ya verificados en el repo para el mismo test (Sportage y
// Bayon, canales oficiales Euro NCAP / km77.com); el resto, null.
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T2: Record<string, SeguridadEuroNCAP> = {
  "hyundai-ioniq-6-electrico-precio-ficha-tecnica": {
    fichaId: "hyundai-ioniq-6-electrico-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 97,
    infantil: 87,
    peatones: 66,
    asistencias: 90,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-i10-2026": {
    fichaId: "hyundai-i10-2026",
    estrellas: 3,
    anioTest: 2020,
    adulto: 69,
    infantil: 75,
    peatones: 52,
    asistencias: 59,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-bayon-2024-precio-ficha-tecnica": {
    fichaId: "hyundai-bayon-2024-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2021,
    adulto: 76,
    infantil: 82,
    peatones: 76,
    asistencias: 67,
    videoCrashId: null,
    videoAlceId: "6leH1d3DFt4",
  },
  "kia-ev4-2025-precio-ficha-tecnica": {
    fichaId: "kia-ev4-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 84,
    infantil: 85,
    peatones: 77,
    asistencias: 67,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-ev5-2025-precio-ficha-tecnica": {
    fichaId: "kia-ev5-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2025,
    adulto: 83,
    infantil: 85,
    peatones: 74,
    asistencias: 80,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-sportage-phev-2025-precio-ficha-tecnica": {
    fichaId: "kia-sportage-phev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 87,
    infantil: 86,
    peatones: 66,
    asistencias: 72,
    videoCrashId: "pr645YPP1SU",
    videoAlceId: "6ibmxzkdZeI",
  },
  "kia-sorento-hev-2025-precio-ficha-tecnica": {
    fichaId: "kia-sorento-hev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2020,
    adulto: 82,
    infantil: 85,
    peatones: 63,
    asistencias: 89,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-stonic-2026": {
    fichaId: "kia-stonic-2026",
    estrellas: 3,
    anioTest: 2017,
    adulto: null,
    infantil: null,
    peatones: null,
    asistencias: null,
    videoCrashId: null,
    videoAlceId: null,
  },
};
