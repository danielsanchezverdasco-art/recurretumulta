// 18/10/2026 (rediseño fichas): separador de miles SIEMPRE.
// toLocaleString("es-ES") no agrupa los números de 4 cifras (8299 → "8299"):
// la norma de la RAE/ICU exige mínimo 2 dígitos de agrupación. En precios
// queremos «8.299 €», así que agrupamos a mano.
export function fmtMiles(v: number, decimales = 0): string {
  const neg = v < 0;
  const abs = Math.abs(v);
  const fijo = decimales > 0 ? abs.toFixed(decimales) : String(Math.round(abs));
  const [ent, dec] = fijo.split(".");
  const conPuntos = ent.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (neg ? "-" : "") + conPuntos + (dec ? "," + dec : "");
}

export function fmtEur(v: number | null | undefined, vacio = "—"): string {
  if (v == null) return vacio;
  // 20/10/2026: si el precio trae céntimos (p. ej. PVP oficial 399,99 €) se
  // muestran; redondear a 400 € contradecía el propio dato (informe Niky p.18).
  // Los precios enteros se siguen mostrando sin decimales, como hasta ahora.
  return fmtMiles(v, Number.isInteger(v) ? 0 : 2) + " €";
}
