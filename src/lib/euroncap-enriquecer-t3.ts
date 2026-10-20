// EURONCAP ENRIQUECER T3 (20/10/2026) — detalle EuroNCAP de la tanda 3 (Dacia + SEAT).
// Solo entran fichas que NO tenían ya entrada en SEGURIDAD_EURONCAP y cuyo test
// está verificado en la web oficial de Euro NCAP (o comunicado oficial de la marca
// con las cifras de Euro NCAP). El resto de fichas de la tanda (22) ya tenían su
// detalle verificado en seguridad-euroncap.ts y no se duplica aquí.
// - SEAT Ibiza 2026: misma generación que el Ibiza restyling probado en 2022
//   (5 estrellas; adulto 83 %, infantil 82 %, peatones 66 %, asistencias 70 %).
//   Fuente: comunicado oficial SEAT (seat-cupra-mediacenter.com / seat-press.be,
//   12-14/10/2022) con las cifras del test Euro NCAP 2022.
// - SEAT Ateca (2024 y 1.5 TSI 2026): única prueba Euro NCAP del modelo, 2016
//   (5 estrellas; adulto 93 %, infantil 84 %, peatones 71 %, asistencias 60 %).
//   Fuente: página oficial de resultados de Euro NCAP del Ateca (euroncap.com).
// Vídeos: null (sin ID verificado de canal oficial Euro NCAP/km77 para estos tests).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T3: Record<string, SeguridadEuroNCAP> = {
  "seat-ibiza-2026": {
    fichaId: "seat-ibiza-2026",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 82,
    peatones: 66,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ateca-2024-precio-ficha-tecnica": {
    fichaId: "seat-ateca-2024-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2016,
    adulto: 93,
    infantil: 84,
    peatones: 71,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
  "seat-ateca-15-tsi-2026-precio-ficha-tecnica": {
    fichaId: "seat-ateca-15-tsi-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2016,
    adulto: 93,
    infantil: 84,
    peatones: 71,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
};
