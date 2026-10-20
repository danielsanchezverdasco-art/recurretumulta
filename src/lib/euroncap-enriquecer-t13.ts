// EURONCAP ENRIQUECER T13 — tanda 13 de enriquecimiento (20/10/2026, orden de Daniel).
// BYD + Tesla. Solo entran fichas de la tanda sin entrada previa en
// SEGURIDAD_EURONCAP y con test Euro NCAP verificado del modelo/generación
// exacta en euroncap.com (datasheet oficial):
// - Tesla Model S Plaid 2026: test Euro NCAP del Model S de 2022
//   (5 estrellas; adulto 94 %, infantil 91 %, peatones 85 %, asistencias 98 %).
//   Euro NCAP probó el Model S renovado (Palladium) y el resultado cubre las
//   versiones Dual Motor y Tri-Motor (Plaid) de esa generación.
// Sin entrada (sin test Euro NCAP propio verificado):
// - BYD Dolphin Surf 2027: es la SEGUNDA generación del Seagull/Dolphin Surf;
//   el test Euro NCAP de 2025 (5 estrellas) corresponde a la primera
//   generación vendida en Europa, NO a esta -> sin detalle (no aplicar el
//   test de otra generación).
// - Tesla Cybercab y Tesla Cybertruck: sin test Euro NCAP (el Cybertruck no
//   está homologado en Europa; sus datos NHTSA no son Euro NCAP) -> sin entrada.
// - Tesla Model Y L: Euro NCAP no lista la variante L de batalla larga ni
//   extiende explícitamente a ella el resultado 2025 del Model Y -> sin entrada.
// - Tesla Model X Plaid: el único test Euro NCAP del Model X es el de 2019,
//   anterior a la renovación Palladium/Plaid (2021); la generación Plaid no
//   ha sido probada por Euro NCAP -> sin entrada.
// - Tesla Roadster 2026: modelo aún no producido ni probado -> sin entrada.
// Auditoría de detalles preexistentes (ED=0), todos CORRECTOS, sin corrección:
// - BYD Atto 3 (2022): 5 estrellas, 91/89/69/74 — coincide con Euro NCAP.
// - Tesla Model 3 Gran Autonomía AWD (2025): 5 estrellas, 90/93/89/87 — coincide.
// - Tesla Model Y 2026 (4 fichas): test 2025 del Model Y renovado,
//   5 estrellas, 91/93/86/92 — coincide con Euro NCAP.
// Vídeos: null (sin ID verificado de canal oficial Euro NCAP/km77 para este test).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T13: Record<string, SeguridadEuroNCAP> = {
  "tesla-model-s-plaid-2026-precio-ficha-tecnica": {
    fichaId: "tesla-model-s-plaid-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 94,
    infantil: 91,
    peatones: 85,
    asistencias: 98,
    videoCrashId: null,
    videoAlceId: null,
  },
};
