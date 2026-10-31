// Detalle Euro NCAP verificado, tanda de enriquecimiento del 31/10/2026.
// - Zeekr 7GT: valoración publicada el 8 de julio de 2026, cinco estrellas con el protocolo 2026
//   (conducción segura 79 %, evitación de la colisión 89 %, protección 93 %, seguridad posterior 95 %).
//   Ensayado el Privilege AWD de 2.405 kg; cubre también Core RWD y Long Range RWD.
//   Fuente: https://www.euroncap.com/assessments/zeekr/7gt/1229/
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_3110: Record<string, SeguridadEuroNCAP> = {
  "zeekr-7-gt-2026-precio-ficha-tecnica": {
    fichaId: "zeekr-7-gt-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2026,
    adulto: null,
    infantil: null,
    peatones: null,
    asistencias: null,
    conduccion: 79,
    anticolision: 89,
    proteccion: 93,
    postcolision: 95,
    videoCrashId: null,
    videoAlceId: null,
  },
};
