// EURONCAP EXP15 — datos EuroNCAP verificados para el lote 15 (07/10/2026).
// Solo entran modelos con test EuroNCAP verificado. Sin test -> SIN entrada.
// Notas: los acabados GR Sport / Overtrail / Morizo RR comparten el test del
// modelo base (misma carrocería y equipamiento de seguridad; EuroNCAP aplica el
// rating "a todos los <modelo>"); el RZ 2023 aplica a los nuevos 350e/500e/550e.
// Sin entrada: Hilux BEV (sin test), GR Supra Final Edition (Supra sin test
// EuroNCAP), RAV4 GR Sport PHEV (6ª gen sin test), Proace Verso/Max Electric
// (sin test de turismo), LC 500 Cabrio (sin test).
// Fuentes: euroncap.com (datasheets oficiales), newsroom.toyota.eu, lexus.eu.
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_EXP15: Record<string, SeguridadEuroNCAP> = {
  "toyota-yaris-cross-gr-sport-2025-precio-ficha-tecnica": {
    fichaId: "toyota-yaris-cross-gr-sport-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2021,
    adulto: 86,
    infantil: 84,
    peatones: 78,
    asistencias: 81,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-c-hr-gr-sport-2025-precio-ficha-tecnica": {
    fichaId: "toyota-c-hr-gr-sport-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2024,
    adulto: 85,
    infantil: 86,
    peatones: 86,
    asistencias: 79,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-corolla-gr-sport-2025-precio-ficha-tecnica": {
    fichaId: "toyota-corolla-gr-sport-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2019,
    adulto: 95,
    infantil: 84,
    peatones: 86,
    asistencias: 77,
    videoCrashId: null,
    videoAlceId: null,
  },
  "lexus-lbx-morizo-rr-2025-precio-ficha-tecnica": {
    fichaId: "lexus-lbx-morizo-rr-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2024,
    adulto: 82,
    infantil: 83,
    peatones: 79,
    asistencias: 76,
    videoCrashId: null,
    videoAlceId: null,
  },
  "lexus-rz-550e-2025-precio-ficha-tecnica": {
    fichaId: "lexus-rz-550e-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2023,
    adulto: 87,
    infantil: 87,
    peatones: 84,
    asistencias: 81,
    videoCrashId: null,
    videoAlceId: null,
  },
  "lexus-rz-500e-2026-precio-ficha-tecnica": {
    fichaId: "lexus-rz-500e-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2023,
    adulto: 87,
    infantil: 87,
    peatones: 84,
    asistencias: 81,
    videoCrashId: null,
    videoAlceId: null,
  },
  "lexus-rz-350e-2026-precio-ficha-tecnica": {
    fichaId: "lexus-rz-350e-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2023,
    adulto: 87,
    infantil: 87,
    peatones: 84,
    asistencias: 81,
    videoCrashId: null,
    videoAlceId: null,
  },
  "lexus-nx-overtrail-2025-precio-ficha-tecnica": {
    fichaId: "lexus-nx-overtrail-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 87,
    peatones: 83,
    asistencias: 91,
    videoCrashId: null,
    videoAlceId: null,
  },
  "lexus-es-300h-2025-precio-ficha-tecnica": {
    fichaId: "lexus-es-300h-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2018,
    adulto: 91,
    infantil: 87,
    peatones: 90,
    asistencias: 77,
    videoCrashId: null,
    videoAlceId: null,
  },
};
