// EURONCAP EXP10 — tests verificados para los 22 modelos del lote exp10.
// Fuente: euroncap.com (tests oficiales). Cero datos inventados: solo entran
// fichas con test EuroNCAP verificado del modelo o generación equivalente.
// Sin test -> SIN entrada (la ficha muestra honestamente "sin datos EuroNCAP").
// Verificación: 05/10/2026.
//
// Modelos con test verificado (4):
// - ORA 03: 5* (2022), probado como ORA Funky Cat (mismo modelo/generación).
// - DS N°8: 4* (2025).
// - DS 4 / DS N°4: 4* (2022, serie); el N°4 mantiene la estructura del DS 4.
// - DS 3: 4* (2019, probado como DS 3 Crossback, mismo modelo).
// Sin test: Ineos (3), Morgan (3), Caterham (4), Donkervoort (2), ORA 07,
// Lancia Ypsilon (nueva generación 2024), Abarth 500e, Abarth 600e, DS N°7.
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_EXP10: Record<string, SeguridadEuroNCAP> = {
  "gwm-ora-03-2025-precio-ficha-tecnica": {
    fichaId: "gwm-ora-03-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 92,
    infantil: 83,
    peatones: 74,
    asistencias: 93,
    videoCrashId: null,
    videoAlceId: null,
  },
  "ds-n8-2025-precio-ficha-tecnica": {
    fichaId: "ds-n8-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 76,
    infantil: 85,
    peatones: 80,
    asistencias: 65,
    videoCrashId: null,
    videoAlceId: null,
  },
  "ds-4-2025-precio-ficha-tecnica": {
    fichaId: "ds-4-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2022,
    adulto: 85,
    infantil: 86,
    peatones: 74,
    asistencias: 65,
    videoCrashId: null,
    videoAlceId: null,
  },
  "ds-3-2025-precio-ficha-tecnica": {
    fichaId: "ds-3-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2019,
    adulto: null,
    infantil: null,
    peatones: null,
    asistencias: null,
    videoCrashId: null,
    videoAlceId: null,
  },
};
