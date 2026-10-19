// EURONCAP EXP20 — datos EuroNCAP verificados para el lote 6 Stellantis (07/10/2026).
// Solo entran modelos con test EuroNCAP verificado. Sin test -> SIN entrada.
// Notas: el 4★/2019 del 2008 y el 4★/2022 del 308 (válido también para el 5p y
// variantes PHEV según EuroNCAP) aplican a las versiones 2026 (misma carrocería);
// el 4★/2019 del DS 3 Crossback (equipamiento estándar) aplica al DS 3 E-TENSE;
// el 4★/2022 del DS 4 aplica al DS N°4 (restyling, misma estructura).
// Sin entrada: Boxer, Partner, Expert, Rifter Long, Jumper, Berlingo XL y Zafira
// (EuroNCAP no evalúa furgonetas), ë-C5 Aircross Long Range (nueva generación sin
// test publicado) y DS N°8 (sin test publicado a 07/10/2026).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_EXP20: Record<string, SeguridadEuroNCAP> = {
  "peugeot-2008-12-puretech-100-2026-precio-ficha-tecnica": {
    fichaId: "peugeot-2008-12-puretech-100-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 91,
    infantil: 84,
    peatones: 62,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "peugeot-308-hibrido-145-2026-precio-ficha-tecnica": {
    fichaId: "peugeot-308-hibrido-145-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2022,
    adulto: 76,
    infantil: 84,
    peatones: 68,
    asistencias: 65,
    videoCrashId: null,
    videoAlceId: null,
  },
  "ds-3-e-tense-2026-precio-ficha-tecnica": {
    fichaId: "ds-3-e-tense-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: 87,
    infantil: 86,
    peatones: 54,
    asistencias: 63,
    videoCrashId: null,
    videoAlceId: null,
  },
  "ds-n4-e-tense-213-2026-precio-ficha-tecnica": {
    fichaId: "ds-n4-e-tense-213-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2022,
    adulto: 85,
    infantil: 86,
    peatones: 74,
    asistencias: 65,
    videoCrashId: null,
    videoAlceId: null,
  },
  "ds-n4-hibrido-145-2026-precio-ficha-tecnica": {
    fichaId: "ds-n4-hibrido-145-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2022,
    adulto: 85,
    infantil: 86,
    peatones: 74,
    asistencias: 65,
    videoCrashId: null,
    videoAlceId: null,
  },
};
