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
};

export function referenciaDe(src?: string | null): string | null {
  if (!src) return null;
  const f = src.split("?")[0].split("/").pop() ?? "";
  for (const k of Object.keys(FOTOS_REFERENCIA)) if (f.startsWith(k)) return FOTOS_REFERENCIA[k];
  return null;
}
