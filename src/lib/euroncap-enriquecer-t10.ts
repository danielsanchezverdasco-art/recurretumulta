// EURONCAP ENRIQUECER T10 (20/10/2026) — detalle EuroNCAP de la tanda 10 (Toyota + Dacia).
// Solo entran fichas con ED=1 en la cola y test verificado en Euro NCAP (página
// oficial del test, datasheet oficial o comunicado oficial con sus cifras):
// - Toyota Hilux (generación actual, prueba 2016 con doble valoración): se publica
//   la valoración DE SERIE, 3 estrellas (85/82/73/25); con el pack de seguridad
//   opcional obtuvo 5 estrellas (93/82/83/63).
// - Toyota Proace Verso: prueba conjunta Euro NCAP 2015 del Toyota Proace y sus
//   gemelos Citroën Spacetourer y Peugeot Traveller: 5 estrellas (87/91/64/78),
//   confirmada por Toyota Newsroom Europe para la versión de pasajeros Proace Verso.
// - Dacia Bigster: valoración (2024) derivada de la prueba del Duster 2024 con
//   ensayos adicionales del Bigster: 3 estrellas (69/85/60/57). Es la misma
//   valoración ya registrada en seguridad-euroncap.ts para el resto de Bigster.
// - Dacia Duster ECO-G 100 (3.ª gen.): prueba 2024, 3 estrellas (70/84/60/57).
// - Dacia Duster Blue dCi 115 (2.ª gen.): prueba 2017, 3 estrellas (71/66/56/37).
// - Dacia Jogger ECO-G 120 (5 y 7 plazas): valoración 2021, 1 estrella (70/69/41/39),
//   la misma ya registrada para el resto de versiones Jogger.
// - Dacia Logan / Sandero / Sandero Stepway ECO-G 100: prueba del Sandero Stepway
//   2021, 2 estrellas (70/72/41/42), que Euro NCAP extiende al Sandero y al Logan.
// Sin entrada (sin test de turismos verificado): GR Supra (no probado), Proace City
// Verso y Proace City Verso Electric (solo existe el programa Commercial Van Safety,
// que no es la valoración de turismos), Proace Max (idem; su ficha ya documenta el
// programa de furgonetas en el bloque inline) y Dacia Striker (modelo nuevo, no probado).
// Auditoría de detalles preexistentes (ED=0) de la tanda: bZ4X Touring (2025,
// 88/85/80/79, valoración renovada del bZ4X publicada por Euro NCAP en nov-2025),
// C-HR+ (2025, 88/85/80/79: valoración propia del C-HR+ eléctrico extendida por
// Euro NCAP desde el bZ4X, su modelo socio — NO es el test del C-HR híbrido 2024
// de 85/86/86/79, que corresponde a otro modelo), Corolla Berlina (2019, 95/84/86/77,
// datasheet oficial), Corolla Cross 200H (2022, 85/83/87/82), Mirai (2021,
// 88/85/80/82, datasheet oficial), Bigster TCe 130 4x4 (69/85/60/57, coherente con
// el resto de Bigster del repo), Jogger Hybrid 140 y TCe 110 (2021, 70/69/41/39),
// Spring Electric 45 y Spring Extreme (2021, 49/56/39/32): todos correctos, sin cambios.
// Vídeos: null (sin ID verificado de canal oficial para estos tests).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T10: Record<string, SeguridadEuroNCAP> = {
  "toyota-hilux-mhev-2025-precio-ficha-tecnica": {
    fichaId: "toyota-hilux-mhev-2025-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2016,
    adulto: 85,
    infantil: 82,
    peatones: 73,
    asistencias: 25,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-proace-verso-2025-precio-ficha-tecnica": {
    fichaId: "toyota-proace-verso-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2015,
    adulto: 87,
    infantil: 91,
    peatones: 64,
    asistencias: 78,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-bigster-eco-g-140-2025-precio-ficha-tecnica": {
    fichaId: "dacia-bigster-eco-g-140-2025-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2024,
    adulto: 69,
    infantil: 85,
    peatones: 60,
    asistencias: 57,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-duster-blue-dci-115-2024-precio-ficha-tecnica": {
    fichaId: "dacia-duster-blue-dci-115-2024-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2017,
    adulto: 71,
    infantil: 66,
    peatones: 56,
    asistencias: 37,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-duster-eco-g-100-2025-precio-ficha-tecnica": {
    fichaId: "dacia-duster-eco-g-100-2025-precio-ficha-tecnica",
    estrellas: 3,
    anioTest: 2024,
    adulto: 70,
    infantil: 84,
    peatones: 60,
    asistencias: 57,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-jogger-eco-g-120-2026-precio-ficha-tecnica": {
    fichaId: "dacia-jogger-eco-g-120-2026-precio-ficha-tecnica",
    estrellas: 1,
    anioTest: 2021,
    adulto: 70,
    infantil: 69,
    peatones: 41,
    asistencias: 39,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-jogger-eco-g-120-7-plazas-2026-precio-ficha-tecnica": {
    fichaId: "dacia-jogger-eco-g-120-7-plazas-2026-precio-ficha-tecnica",
    estrellas: 1,
    anioTest: 2021,
    adulto: 70,
    infantil: 69,
    peatones: 41,
    asistencias: 39,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-logan-eco-g-100-2025-precio-ficha-tecnica": {
    fichaId: "dacia-logan-eco-g-100-2025-precio-ficha-tecnica",
    estrellas: 2,
    anioTest: 2021,
    adulto: 70,
    infantil: 72,
    peatones: 41,
    asistencias: 42,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-sandero-eco-g-100-2026-precio-ficha-tecnica": {
    fichaId: "dacia-sandero-eco-g-100-2026-precio-ficha-tecnica",
    estrellas: 2,
    anioTest: 2021,
    adulto: 70,
    infantil: 72,
    peatones: 41,
    asistencias: 42,
    videoCrashId: null,
    videoAlceId: null,
  },
  "dacia-sandero-stepway-eco-g-100-2026-precio-ficha-tecnica": {
    fichaId: "dacia-sandero-stepway-eco-g-100-2026-precio-ficha-tecnica",
    estrellas: 2,
    anioTest: 2021,
    adulto: 70,
    infantil: 72,
    peatones: 41,
    asistencias: 42,
    videoCrashId: null,
    videoAlceId: null,
  },
};
