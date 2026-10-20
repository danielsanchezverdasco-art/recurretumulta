// EURONCAP ENRIQUECER T11 (20/10/2026) — detalle EuroNCAP de la tanda 11 (Dacia + SEAT).
// Solo entran fichas con ED=1 en la cola y test verificado en Euro NCAP (página
// oficial del test, datasheet oficial o comunicado oficial con sus cifras):
// - Dacia Bigster (3 fichas de la tanda): valoración oficial propia publicada por
//   Euro NCAP en mayo de 2025 (datasheet oficial «euroncap-2024-dacia-bigster»,
//   protocolo 2024): 3 estrellas (69/85/60/57). CORRIGE el detalle preexistente
//   de euroncap-exp19.ts y de seguridad-euroncap.ts, que la fechaba en 2024
//   (año de la prueba del Duster, de la que derivan las cifras).
// - Dacia Sandero 2025: prueba del Sandero Stepway 2021, 2 estrellas (70/72/41/42),
//   que Euro NCAP extiende al Sandero berlina y al Logan de la misma generación.
// - SEAT Arona (generación actual, restyling): prueba 2022, 5 estrellas (83/83/65/70),
//   confirmada en la nota de prensa oficial de SEAT sobre el test de 2022.
// - SEAT Ibiza (generación actual, restyling): prueba 2022, 5 estrellas (83/82/66/70),
//   misma nota de prensa oficial de SEAT de 2022. Sustituye como referencia vigente
//   a la prueba de 2017 de la misma generación (pre-restyling).
// - SEAT Ateca: única prueba Euro NCAP del modelo (2016, misma generación aún a la
//   venta): 5 estrellas (93/84/71/60).
// - SEAT León (4.ª generación): prueba 2020, 5 estrellas (92/88/71/80), confirmada
//   en la nota de prensa oficial de SEAT de diciembre de 2020.
// Sin entrada (sin test de turismos aplicable): Dacia Hipster 2027 (concepto/
//   prototipo, no probado), Dacia Tribrid (motorización/concepto, no probado como
//   modelo) y Dacia Lodgy (su única prueba es de 2012, con los protocolos de
//   entonces y la valoración caducada; el modelo está descatalogado y la ficha es
//   de una versión sin prueba publicada: se mantiene «sin datos» con su nota).
// Auditoría de detalles preexistentes (ED=0) de la tanda, todos correctos contra
// Euro NCAP y sin cambios: Duster 3.ª gen. 2024 (70/84/60/57), Bigster salvo el
// año (69/85/60/57), Jogger 2021 (70/69/41/39), Logan/Sandero 2021 (70/72/41/42),
// Spring 2021 (49/56/39/32) y Arona 2022 en seguridad-euroncap.ts (83/83/65/70).
// Vídeos: null (sin ID verificado de canal oficial para estos tests).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T11: Record<string, SeguridadEuroNCAP> = {
  "dacia-bigster-2026-hybrid-155-precio-ficha-tecnica": {
    fichaId: "dacia-bigster-2026-hybrid-155-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2025,
    adulto: 69,
    infantil: 85,
    peatones: 60,
    asistencias: 57,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-bigster-2026-tce-140-precio-ficha-tecnica": {
    fichaId: "dacia-bigster-2026-tce-140-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2025,
    adulto: 69,
    infantil: 85,
    peatones: 60,
    asistencias: 57,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-bigster-hybrid-g-150-4x4-2026-precio-ficha-tecnica": {
    fichaId: "dacia-bigster-hybrid-g-150-4x4-2026-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2025,
    adulto: 69,
    infantil: 85,
    peatones: 60,
    asistencias: 57,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-sandero-2025-precio-ficha-tecnica": {
    fichaId: "dacia-sandero-2025-precio-ficha-tecnica",
    estrellas: 2,
    anioTest: 2021,
    adulto: 70,
    infantil: 72,
    peatones: 41,
    asistencias: 42,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica": {
    fichaId: "seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 83,
    peatones: 65,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-arona-fr-15-tsi-2026-precio-ficha-tecnica": {
    fichaId: "seat-arona-fr-15-tsi-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 83,
    peatones: 65,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ateca-20-tdi-115-2026-precio-ficha-tecnica": {
    fichaId: "seat-ateca-20-tdi-115-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2016,
    adulto: 93,
    infantil: 84,
    peatones: 71,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ateca-fr-20-tdi-2026-precio-ficha-tecnica": {
    fichaId: "seat-ateca-fr-20-tdi-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2016,
    adulto: 93,
    infantil: 84,
    peatones: 71,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ibiza-2025-precio-ficha-tecnica": {
    fichaId: "seat-ibiza-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 82,
    peatones: 66,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ibiza-fr-10-tsi-115-2026-precio-ficha-tecnica": {
    fichaId: "seat-ibiza-fr-10-tsi-115-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 82,
    peatones: 66,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ibiza-fr-15-tsi-2026-precio-ficha-tecnica": {
    fichaId: "seat-ibiza-fr-15-tsi-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 82,
    peatones: 66,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-leon-15-etsi-150-2026-precio-ficha-tecnica": {
    fichaId: "seat-leon-15-etsi-150-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2020,
    adulto: 92,
    infantil: 88,
    peatones: 71,
    asistencias: 80,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-leon-2025-precio-ficha-tecnica": {
    fichaId: "seat-leon-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2020,
    adulto: 92,
    infantil: 88,
    peatones: 71,
    asistencias: 80,
    videoCrashId: null,
    videoAlceId: null,
  },
};
