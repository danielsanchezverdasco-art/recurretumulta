// EURONCAP ENRIQUECER T5 — Kia (20/10/2026, tanda 5 para Niki).
// Solo entran fichas de la tanda 5 que NO tenían ya entrada en
// SEGURIDAD_EURONCAP y cuyo test Euro NCAP está verificado en euroncap.com
// (datasheet oficial). Sin test verificado -> SIN entrada.
// Notas de verificación (datasheets oficiales Euro NCAP):
// - Familia Ceed (Ceed, Ceed SW, ProCeed y XCeed): test del Kia Ceed 2019,
//   rating de serie 4 estrellas (88/85/52/68); 5 estrellas con el pack de
//   seguridad opcional (88/85/68/73). La nota de prensa oficial de Kia
//   confirma que el rating cubre las cuatro carrocerías de la familia.
// - Kia EV3: test 2025, rating de serie 4 estrellas (83/84/77/67);
//   5 estrellas con el DriveWise Safety Pack (83/84/78/78).
// - Kia Sorento: test 2020, 5 estrellas (82/85/63/89), válido para las
//   variantes europeas (diésel y PHEV incluidas).
// - Kia Sportage: test 2022, 5 estrellas (87/86/66/72), válido para las
//   variantes europeas (HEV y MHEV incluidas).
// - Kia Stonic: test 2017, rating de serie 3 estrellas (85/84/62/25);
//   5 estrellas con el pack de seguridad opcional (93/84/71/59).
// - Kia EV2: test 2026 con los protocolos nuevos, 5 estrellas
//   (conducción segura 74%, prevención de colisiones 66%, protección en
//   colisión 86%, seguridad post-colisión 89%); los campos clásicos
//   (adulto/infantil/peatones/asistencias) no aplican en el protocolo 2026.
// Vídeos: sin IDs verificados en esta tanda -> null.
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T5: Record<string, SeguridadEuroNCAP> = {
  "kia-ev2-2026-precio-ficha-tecnica": {
    fichaId: "kia-ev2-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2026,
    adulto: null,
    infantil: null,
    peatones: null,
    asistencias: null,
    conduccion: 74,
    anticolision: 66,
    proteccion: 86,
    postcolision: 89,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-sportage-hev-2025-precio-ficha-tecnica": {
    fichaId: "kia-sportage-hev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 87,
    infantil: 86,
    peatones: 66,
    asistencias: 72,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-ceed-10-tgdi-2025-precio-ficha-tecnica": {
    fichaId: "kia-ceed-10-tgdi-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 88,
    infantil: 85,
    peatones: 52,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-ceed-15-tgdi-2025-precio-ficha-tecnica": {
    fichaId: "kia-ceed-15-tgdi-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 88,
    infantil: 85,
    peatones: 52,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-ceed-sw-2025-precio-ficha-tecnica": {
    fichaId: "kia-ceed-sw-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 88,
    infantil: 85,
    peatones: 52,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-ceed-sw-phev-2025-precio-ficha-tecnica": {
    fichaId: "kia-ceed-sw-phev-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 88,
    infantil: 85,
    peatones: 52,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-ev3-air-2025-precio-ficha-tecnica": {
    fichaId: "kia-ev3-air-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 83,
    infantil: 84,
    peatones: 77,
    asistencias: 67,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-proceed-2025-precio-ficha-tecnica": {
    fichaId: "kia-proceed-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 88,
    infantil: 85,
    peatones: 52,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-sorento-diesel-2025-precio-ficha-tecnica": {
    fichaId: "kia-sorento-diesel-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2020,
    adulto: 82,
    infantil: 85,
    peatones: 63,
    asistencias: 89,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-sorento-phev-2025-precio-ficha-tecnica": {
    fichaId: "kia-sorento-phev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2020,
    adulto: 82,
    infantil: 85,
    peatones: 63,
    asistencias: 89,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-sportage-mhev-2025-precio-ficha-tecnica": {
    fichaId: "kia-sportage-mhev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 87,
    infantil: 86,
    peatones: 66,
    asistencias: 72,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-stonic-10-tgdi-2026-precio-ficha-tecnica": {
    fichaId: "kia-stonic-10-tgdi-2026-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2017,
    adulto: 85,
    infantil: 84,
    peatones: 62,
    asistencias: 25,
    videoCrashId: null,
    videoAlceId: null,
  },
  "kia-xceed-15-mhev-2025-precio-ficha-tecnica": {
    fichaId: "kia-xceed-15-mhev-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 88,
    infantil: 85,
    peatones: 52,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
};
