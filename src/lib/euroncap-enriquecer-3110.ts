// Detalle Euro NCAP verificado, tanda de enriquecimiento del 31/10/2026.
// - MG 3 (septiembre de 2025, 4 estrellas, 74/73/81/69; el 74 % de adultos es el de la entrada hermana mg3-gasolina), Peugeot 5008 (mayo de 2025, 4 estrellas, 80/85/79/62, base 3008) y
//   Honda Jazz Crosstar (noviembre de 2020, 5 estrellas, 87/83/80/76): datos de euroncap.com ya citados en los lotes 15, 22 y 23 de enriquecimiento-3110.
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
  "mg-3-2025-precio-ficha-tecnica": {
    fichaId: "mg-3-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 74,
    infantil: 73,
    peatones: 81,
    asistencias: 69,
    videoCrashId: null,
    videoAlceId: null,
  },
  "peugeot-5008-phev-195-2026-precio-ficha-tecnica": {
    fichaId: "peugeot-5008-phev-195-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 80,
    infantil: 85,
    peatones: 79,
    asistencias: 62,
    videoCrashId: null,
    videoAlceId: null,
  },
  "honda-jazz-crosstar-2026-precio-ficha-tecnica": {
    fichaId: "honda-jazz-crosstar-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2020,
    adulto: 87,
    infantil: 83,
    peatones: 80,
    asistencias: 76,
    videoCrashId: null,
    videoAlceId: null,
  },
};
