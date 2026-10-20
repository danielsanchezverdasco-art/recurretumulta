// EURONCAP ENRIQUECER T12 — tanda 12 de enriquecimiento (20/10/2026, orden de Daniel).
// SEAT + BYD. Solo entran fichas de la tanda sin entrada previa en
// SEGURIDAD_EURONCAP y con test Euro NCAP verificado del modelo/generación
// exacta en euroncap.com (datasheet oficial):
// - SEAT Ateca 2.0 TDI 2026: única prueba Euro NCAP del modelo, 2016
//   (5 estrellas; adulto 93 %, infantil 84 %, peatones 71 %, asistencias 60 %).
//   Misma generación aún a la venta; mismos datos ya verificados en la tanda 3
//   para las fichas hermanas del Ateca.
// Sin entrada (sin test Euro NCAP propio verificado):
// - BYD Dolphin G DM-i Boost: el Dolphin G DM-i (modelo distinto del Dolphin
//   eléctrico de 2023) no ha sido probado por Euro NCAP -> sin detalle.
// - BYD Great Tang: es el Tang L presentado en China en 2026, modelo distinto
//   del BYD Tang probado en 2023 -> NO se aplica aquel test.
// - BYD Shark 6: solo tiene test de ANCAP (5 estrellas), NO de Euro NCAP.
//   Prohibido publicar datos ANCAP como si fueran Euro NCAP -> sin entrada.
// - BYD Song Pro DM-i, BYD e7, BYD Qin L DM-i, BYD Seal 06 GT, BYD Song L EV y
//   BYD Yuan Up (en Europa, Atto 2, tampoco probado por Euro NCAP): modelos
//   sin prueba Euro NCAP publicada -> sin entrada.
// CORRECCIÓN (detalle preexistente mal): la ficha
// "byd-dolphin-g-dmi-active-2026-precio-ficha-tecnica" tenía detalle en
// seguridad-euroncap.ts con los porcentajes del BYD Dolphin eléctrico (2023),
// que es otro modelo: el Dolphin G DM-i no tiene test Euro NCAP. Se corrige
// repuntando su loader en data-loaders/b.ts a este fichero (sin entrada = la
// ficha muestra «sin datos EuroNCAP») y con el bloque inline «sin datos» de
// su propia ficha.
// Vídeos: null (sin ID verificado de canal oficial Euro NCAP/km77 para este test).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T12: Record<string, SeguridadEuroNCAP> = {
  "seat-ateca-20-tdi-2026-precio-ficha-tecnica": {
    fichaId: "seat-ateca-20-tdi-2026-precio-ficha-tecnica",
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
