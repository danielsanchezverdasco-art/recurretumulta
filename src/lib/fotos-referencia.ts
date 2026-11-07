// 31/10/2026: fotos de una variante/generación distinta de la ficha. Solo se admiten con la leyenda visible
// «Imagen de referencia: <variante real>» (CreditoFoto la pinta junto al crédito). Clave = prefijo del fichero en /media.
export const FOTOS_REFERENCIA: Record<string, string> = {
  "jaecoo-5-shs-hibrido-2026-": "Jaecoo 5 1.6 de gasolina",
  "forthing-s7-ev-2025-": "Forthing Xinghai S7",
  "jac-qx-2025-": "Sehol QX",
  "forthing-t5-2025-": "Forthing T5 (generación original)",
  "volkswagen-golf-8-2026-": "Volkswagen Golf VIII 1.5 TSI",
  "leapmotor-b10-reev-2026-": "Leapmotor B10 eléctrico (Design Pro Max)",
  "kaabo-wolf-king-gt-pro-oficial": "Kaabo Wolf King GT",
  "polestar-2-facelift-commons-": "Polestar 2 restyling",
  "polestar-5-commons-": "Polestar 5 en el salón de Zúrich 2025, no el prototipo de 2023",
  "haval-h6-ii-facelift-commons-": "Haval H6 II restyling; no se distingue el PHEV",
  "seres-3-iaa2023-commons-": "Seres 3 de la generación europea (IAA 2023)",
  "yangwang-u8-commons-": "Yangwang U8; no es el U9",
  "peugeot-3008-c-commons-": "Peugeot 3008 de tercera generación; no se lee el motor",
  "peugeot-5008-c-commons-": "Peugeot 5008 III",
  "nissan-qashqai-epower-commons-": "Qashqai e-Power de la generación actual",
  "citroen-c4-2025-commons-": "Citroën C4 restyling 2025",
  "ford-capri-2024-commons-": "Ford Capri eléctrico de 2024",
  "honda-civic-hybrid-commons-": "Civic híbrido europeo; no es el Type R",
  "honda-hrv-hybrid-commons-": "Honda HR-V híbrido",
  "mini-cooper-e-j01-commons-": "MINI Cooper E (J01)",
  "bmw-x5-g05-2026-commons-": "BMW X5 G05 restyling 2026; no es el M60i",
  "fiat-600-2023-commons-": "Fiat 600 de esta generación",
  "fiat-grande-panda-e-commons-": "Fiat Grande Panda eléctrica; la híbrida comparte carrocería",
  "opel-grandland-b-commons-": "Opel Grandland de la generación actual; no se lee el motor",
  "nissan-ariya-commons-": "Nissan Ariya",
  "porsche-taycan-gts-commons-": "Porsche Taycan GTS; no es el Turbo S",
  "vw-id7-commons-": "Volkswagen ID.7; no es el GTX",
  "toyota-bz4x-commons-": "Toyota bZ4X",
  "baic-bj30-commons-": "BAIC BJ30",
  "tesla-cybertruck-foundation-commons-": "Tesla Cybertruck Foundation Series; misma generación",
  "defender-110-l663-commons-": "Defender 110 L663; no es el P525",
  "vw-id-buzz-commons-": "Volkswagen ID. Buzz de pasajeros, no es el Cargo",
  "skoda-octavia-combi-commons-": "Octavia Combi IV restyling; no es el RS",
  "dfsk-fengon-600-commons-": "DFSK Fengon 600",
  "mini-aceman-commons-": "MINI Aceman acabado JCW, no el SE",
};

export function referenciaDe(src?: string | null): string | null {
  if (!src) return null;
  const f = src.split("?")[0].split("/").pop() ?? "";
  for (const k of Object.keys(FOTOS_REFERENCIA)) if (f.startsWith(k)) return FOTOS_REFERENCIA[k];
  return null;
}
