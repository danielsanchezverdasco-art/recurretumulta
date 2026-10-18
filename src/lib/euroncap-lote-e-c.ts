// EURONCAP LOTE-E-C — datos EuroNCAP verificados para el lote E grupo C (coches, 18/10/2026).
// Solo entran modelos con test EuroNCAP verificado. Sin test -> SIN entrada.
// MG3: test oficial Euro NCAP de septiembre de 2025 (MG 3 Hybrid, 1.5 HEV, LHD),
// 4 estrellas: adulto 74 %, infantil 73 %, usuarios vulnerables 81 %,
// asistencias 69 %. Fuente: datasheet oficial Euro NCAP
// (euroncap.blob.core.windows.net/media/89835/euroncap-2025-mg-3-datasheet.pdf).
// El test aplica a todas las versiones del MG3 de 2ª generación, incluido el MY 26,5.
// Sin entrada: Mitsubishi Colt 2026 (sin test propio del Colt actual; NO se heredan
// las estrellas del Renault Clio), Denza Bao 8 (sin test EuroNCAP publicado).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_LOTE_E_C: Record<string, SeguridadEuroNCAP> = {
  "mg3-hybrid-2026-precio-ficha-tecnica": {
    fichaId: "mg3-hybrid-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 74,
    infantil: 73,
    peatones: 81,
    asistencias: 69,
    videoCrashId: null,
    videoAlceId: null,
  },
};
