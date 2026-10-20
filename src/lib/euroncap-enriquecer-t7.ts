// EURONCAP ENRIQUECER T7 — MG + Hyundai (20/10/2026, tanda 7 para Niki).
// Solo fichas de la tanda sin entrada previa en SEGURIDAD_EURONCAP y con test
// Euro NCAP verificado del modelo/generación exacta. Porcentajes contrastados
// en euroncap.com y en los registros ya verificados de este repo para las
// versiones hermanas del mismo modelo (MG ZS EV 2019, MG4 2022, MG3 2025,
// MG S5 EV 2025 y MG ZS Hybrid+ 2024).
// Sin test verificado -> sin entrada: MG Cyberster (incl. Trophy), MG5
// Electric familiar y MG7 no tienen test Euro NCAP publicado.
// Correcciones: mg-s5-ev-2026, mg-s6-ev-2026 (5 estrellas 2025, 92/85/84/78)
// y mg-zs-hybrid-plus-2026 figuraban como «no probados» en su ficha de
// comparador-coches-nuevos-c1.ts pese a tener test Euro NCAP verificado.
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T7: Record<string, SeguridadEuroNCAP> = {
  "mg-zs-ev-2024-precio-ficha-tecnica": {
    fichaId: "mg-zs-ev-2024-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2019,
    adulto: 90,
    infantil: 85,
    peatones: 64,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg-zs-ev-standard-2024-precio-ficha-tecnica": {
    fichaId: "mg-zs-ev-standard-2024-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2019,
    adulto: 90,
    infantil: 85,
    peatones: 64,
    asistencias: 70,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg4-electric-comfort-2025-precio-ficha-tecnica": {
    fichaId: "mg4-electric-comfort-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 80,
    peatones: 75,
    asistencias: 78,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg4-electric-extended-range-2025-precio-ficha-tecnica": {
    fichaId: "mg4-electric-extended-range-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 80,
    peatones: 75,
    asistencias: 78,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg4-electric-xpower-2025-precio-ficha-tecnica": {
    fichaId: "mg4-electric-xpower-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2022,
    adulto: 83,
    infantil: 80,
    peatones: 75,
    asistencias: 78,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg3-hybrid-2024-precio-ficha-tecnica": {
    fichaId: "mg3-hybrid-2024-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 74,
    infantil: 73,
    peatones: 81,
    asistencias: 69,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg-s5-ev-2026-precio-ficha-tecnica": {
    fichaId: "mg-s5-ev-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2025,
    adulto: 90,
    infantil: 82,
    peatones: 82,
    asistencias: 78,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg-s6-ev-2026-precio-ficha-tecnica": {
    fichaId: "mg-s6-ev-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2025,
    adulto: 92,
    infantil: 85,
    peatones: 84,
    asistencias: 78,
    videoCrashId: null,
    videoAlceId: null,
  },
  "mg-zs-hybrid-plus-2026-precio-ficha-tecnica": {
    fichaId: "mg-zs-hybrid-plus-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2024,
    adulto: 75,
    infantil: 82,
    peatones: 73,
    asistencias: 76,
    videoCrashId: null,
    videoAlceId: null,
  },
};
