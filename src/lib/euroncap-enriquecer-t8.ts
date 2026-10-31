// EURONCAP ENRIQUECER T8 — Hyundai (20/10/2026, tanda 8 para Niki).
// Solo entran fichas de la tanda 8 que NO tenían ya entrada en
// SEGURIDAD_EURONCAP (falta_detalle_euroncap=1 en la cola) y cuyo test
// Euro NCAP está verificado en las fichas oficiales de resultados
// (datasheets) de euroncap.com:
// - Hyundai Kona (2ª generación), 2023: 4 estrellas, 80/83/64/60.
//   El rating cubre toda la gama Kona de la generación (gasolina,
//   híbrida y eléctrica, acabado N Line incluido).
// - Hyundai i30 (3ª generación), 2017: 5 estrellas, 88/84/64/68.
// - Hyundai INSTER, 2025: 4 estrellas, 70/81/70/67. El datasheet
//   oficial indica que el rating aplica a todos los INSTER (VIN:
//   "all INSTERs"), Cross incluido.
// - Hyundai IONIQ 5, 2021: 5 estrellas, 88/86/63/88.
// - Hyundai Santa Fe (5ª generación), 2024: rating DUAL. De serie:
//   4 estrellas, 84/88/70/69 (es el que se publica, convención del
//   repo). Con el pack opcional SmartSense: 5 estrellas, 84/88/77/79.
// Vídeos: null en todas las entradas (sin ID verificado en esta tanda).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T8: Record<string, SeguridadEuroNCAP> = {
  "hyundai-kona-electrico-135-2025-precio-ficha-tecnica": {
    fichaId: "hyundai-kona-electrico-135-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2023,
    adulto: 80,
    infantil: 83,
    peatones: 64,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-i30-n-line-2026-precio-ficha-tecnica": {
    fichaId: "hyundai-i30-n-line-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2017,
    adulto: 88,
    infantil: 84,
    peatones: 64,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-inster-cross-2026-precio-ficha-tecnica": {
    fichaId: "hyundai-inster-cross-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 70,
    infantil: 81,
    peatones: 70,
    asistencias: 67,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-ioniq-5-2026-precio-ficha-tecnica": {
    fichaId: "hyundai-ioniq-5-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2021,
    adulto: 88,
    infantil: 86,
    peatones: 63,
    asistencias: 88,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica": {
    fichaId: "hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2024,
    adulto: 84,
    infantil: 88,
    peatones: 70,
    asistencias: 69,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-kona-n-line-2026-precio-ficha-tecnica": {
    fichaId: "hyundai-kona-n-line-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2023,
    adulto: 80,
    infantil: 83,
    peatones: 64,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
};
