// Detalle EuroNCAP verificado — tanda de enriquecimiento T1 (Toyota, 20/10/2026).
// Solo tests verificados en euroncap.com (página oficial del test y/o datasheet oficial):
// - Toyota RAV4 (5.ª gen., test 2019): 5 estrellas, 93/87/85/77 (Toyota Newsroom Europe + datasheet Euro NCAP).
// - Toyota Corolla Cross (test 2022): 5 estrellas, 85/83/87/82.
// - Toyota Yaris Cross (nueva evaluación Euro NCAP nov-2025): 4 estrellas, 79/85/83/76 (datasheet oficial Euro NCAP nov-2025).
// - Toyota C-HR (2.ª gen., rating 2024; variantes Hybrid 140, Hybrid 200 y PHEV): 5 estrellas, 85/86/86/79
//   (datasheet oficial Euro NCAP 2024). Estas entradas CORRIGEN las que había en seguridad-euroncap.ts
//   con los porcentajes del bZ4X 2025 duplicados por error (88/85/80/79, año 2025).
// Vídeos: solo el crash test ya enlazado en el repo para el Corolla Cross; el resto, null (sin ID verificado).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T1: Record<string, SeguridadEuroNCAP> = {
  "toyota-rav4-hev-2025-precio-ficha-tecnica": {
    fichaId: "toyota-rav4-hev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2019,
    adulto: 93,
    infantil: 87,
    peatones: 85,
    asistencias: 77,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-corolla-cross-2026": {
    fichaId: "toyota-corolla-cross-2026",
    estrellas: 5,
    anioTest: 2022,
    adulto: 85,
    infantil: 83,
    peatones: 87,
    asistencias: 82,
    videoCrashId: "1FHzZiF3fMc",
    videoAlceId: null,
  },
  "toyota-yaris-cross-2026-precio-ficha-tecnica": {
    fichaId: "toyota-yaris-cross-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 79,
    infantil: 85,
    peatones: 83,
    asistencias: 76,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-c-hr-140h": {
    fichaId: "toyota-c-hr-140h",
    estrellas: 5,
    anioTest: 2024,
    adulto: 85,
    infantil: 86,
    peatones: 86,
    asistencias: 79,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-c-hr-200h-2025-precio-ficha-tecnica": {
    fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2024,
    adulto: 85,
    infantil: 86,
    peatones: 86,
    asistencias: 79,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-c-hr-phev-2025-precio-ficha-tecnica": {
    fichaId: "toyota-c-hr-phev-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2024,
    adulto: 85,
    infantil: 86,
    peatones: 86,
    asistencias: 79,
    videoCrashId: null,
    videoAlceId: null,
  },
};
