// Detalle EuroNCAP verificado — tanda de enriquecimiento T9 (Hyundai + Toyota, 20/10/2026).
// Solo tests verificados en euroncap.com (página oficial del test y/o datasheet oficial):
// - Hyundai Bayon (test 2021): 4 estrellas, 76/82/76/67 (mismos porcentajes ya verificados en la tanda T2
//   para la ficha del Bayon 2024; misma generación).
// - Hyundai i20 (3.ª gen., test 2021): 4 estrellas, 76/82/76/67. Aplica al i20 N (misma carrocería).
// - Hyundai i30 (test 2017): 5 estrellas, 88/84/64/68. Aplica al i30 Fastback N (misma carrocería).
// - Hyundai Kona (1.ª gen., test 2017): 5 estrellas, 87/85/62/60. Aplica al Kona N (misma generación).
// - Toyota C-HR+ (rating 2025): 5 estrellas, 88/85/80/79. Euro NCAP lista el C-HR+ con rating propio de
//   2025 extendido desde el Toyota bZ4X (modelo en el que se basa, con comprobaciones adicionales).
//   NO es el test del C-HR híbrido (2024: 85/86/86/79), que es otro modelo.
// - Toyota Urban Cruiser (datasheet oficial Euro NCAP, sept-2025): 4 estrellas, 77/85/79/72. El modelo
//   probado fue su gemelo, el Suzuki e Vitara, y el datasheet indica que el rating aplica a todos los
//   Toyota Urban Cruiser.
// - Toyota bZ4X (nuevo test 2025 del modelo actualizado): 5 estrellas, 88/85/80/79 (nota de prensa oficial
//   de Euro NCAP de nov-2025). Aplica a la ficha del bZ4X 2026 (modelo actualizado).
// - Toyota Aygo X Hybrid (rating 2025): 4 estrellas, 73/72/83/68 (nueva evaluación de la versión híbrida;
//   la de 2022, 78/78/74/81, corresponde al Aygo X de gasolina).
// Sin entrada (sin test Euro NCAP de turismo para esa generación): Hyundai Elantra N, Toyota GR Supra,
// GR86, Hilux EV, Proace Max Electric, Proace Verso Electric, bZ5 y Land Cruiser.
// Vídeos: null en toda la tanda (sin ID verificado para estos tests).
import type { SeguridadEuroNCAP } from "./seguridad-euroncap.ts";

export const EURONCAP_ENRIQUECER_T9: Record<string, SeguridadEuroNCAP> = {
  "hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica": {
    fichaId: "hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2021,
    adulto: 76,
    infantil: 82,
    peatones: 76,
    asistencias: 67,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-i20-n-2024": {
    fichaId: "hyundai-i20-n-2024",
    estrellas: 4,
    anioTest: 2021,
    adulto: 76,
    infantil: 82,
    peatones: 76,
    asistencias: 67,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-i30-fastback-n-2024": {
    fichaId: "hyundai-i30-fastback-n-2024",
    estrellas: 5,
    anioTest: 2017,
    adulto: 88,
    infantil: 84,
    peatones: 64,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
  "hyundai-kona-n-2023": {
    fichaId: "hyundai-kona-n-2023",
    estrellas: 5,
    anioTest: 2017,
    adulto: 87,
    infantil: 85,
    peatones: 62,
    asistencias: 60,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-c-hr-plus-230-2025-precio-ficha-tecnica": {
    fichaId: "toyota-c-hr-plus-230-2025-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2025,
    adulto: 88,
    infantil: 85,
    peatones: 80,
    asistencias: 79,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-urban-cruiser-2026-precio-ficha-tecnica": {
    fichaId: "toyota-urban-cruiser-2026-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 77,
    infantil: 85,
    peatones: 79,
    asistencias: 72,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-bz4x-2026-precio-ficha-tecnica": {
    fichaId: "toyota-bz4x-2026-precio-ficha-tecnica",
    estrellas: 5,
    anioTest: 2025,
    adulto: 88,
    infantil: 85,
    peatones: 80,
    asistencias: 79,
    videoCrashId: null,
    videoAlceId: null,
  },
  "toyota-aygo-x-hybrid-2025-precio-ficha-tecnica": {
    fichaId: "toyota-aygo-x-hybrid-2025-precio-ficha-tecnica",
    estrellas: 4,
    anioTest: 2025,
    adulto: 73,
    infantil: 72,
    peatones: 83,
    asistencias: 68,
    videoCrashId: null,
    videoAlceId: null,
  },
};
