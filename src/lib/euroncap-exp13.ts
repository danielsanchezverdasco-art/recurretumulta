// EURONCAP EXP13 — datos EuroNCAP verificados para las fichas del lote 13.
// Solo entran modelos con test verificado: o test propio en euroncap.com o el
// mismo test del modelo ya verificado en seguridad-euroncap.ts (el test cubre
// al modelo; las variantes/acabados comparten el resultado).
// Sin test verificado -> SIN entrada (la ficha muestra "sin datos EuroNCAP").
// Sin entrada: peugeot-e-5008-2026 (sin test publicado), 
// peugeot-e-5008-long-range-2026 (sin test publicado),
// citroen-ami-buggy-2025 (los cuadriciclos L6e no los testea EuroNCAP),
// opel-frontera-electric-44kwh-2025 (sin test publicado).
// Fecha de verificación: 05/10/2026.
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_EXP13: Record<string, SeguridadEuroNCAP> = {
  "dacia-spring-extreme-2025-precio-ficha-tecnica": {
    fichaId: "dacia-spring-extreme-2025-precio-ficha-tecnica",
    estrellas: 1,
    anioTest: 2021,
    adulto: 49,
    infantil: 56,
    peatones: 39,
    asistencias: 32,
    videoCrashId: "2indFTVpQ_Y",
    videoAlceId: "kBH3tHWbg4s",
  },
  "opel-corsa-12-100-2025-precio-ficha-tecnica": {
    fichaId: "opel-corsa-12-100-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 84,
    infantil: 86,
    peatones: 66,
    asistencias: 69,
    videoCrashId: null,
    videoAlceId: "LxIeP0Q9m1E",
  },
  "fiat-500e-giorgio-armani-2025-precio-ficha-tecnica": {
    fichaId: "fiat-500e-giorgio-armani-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2021,
    adulto: 76,
    infantil: 80,
    peatones: 67,
    asistencias: 67,
    videoCrashId: "bOav454apLM",
    videoAlceId: "hnL9uuejUl8",
  },
};
