// EURONCAP ENRIQUECER T4 — tanda 4 de enriquecimiento (20/10/2026, orden de Daniel).
// Solo fichas de la tanda sin entrada previa en SEGURIDAD_EURONCAP y con test
// EuroNCAP verificado del modelo/generación exacta. Los porcentajes y vídeos
// son los del test ya verificado en este repo para la versión hermana del
// mismo modelo (MG ZS Hybrid+ 2024 y MG HS 2024), contrastados en euroncap.com.
// Sin test verificado -> sin entrada (BYD Atto 2 y BYD Han no tienen test
// EuroNCAP publicado a fecha de verificación: no se crea detalle).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T4: Record<string, SeguridadEuroNCAP> = {
  "mg-zs-gasolina-2025-precio-ficha-tecnica": {
    fichaId: "mg-zs-gasolina-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2024,
    adulto: 75,
    infantil: 82,
    peatones: 73,
    asistencias: 76,
    videoCrashId: null,
    videoAlceId: "n7QOJ5evl1w",
  },
  "mg-hs-gasolina-2025-precio-ficha-tecnica": {
    fichaId: "mg-hs-gasolina-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2024,
    adulto: 90,
    infantil: 85,
    peatones: 83,
    asistencias: 74,
    videoCrashId: "4_ukHjr1SzI",
    videoAlceId: "VSWsacBGSQg",
  },
};
