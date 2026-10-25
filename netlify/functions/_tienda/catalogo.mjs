// Catálogo del SERVIDOR: precio de venta, coste del proveedor y envío.
// Ningún producto físico está activo: faltan proveedor, coste y PVP reales (no se inventan).
// Para activar uno: rellenar los campos con datos verificados y poner activo: true.
export const CATALOGO = {
  // ejemplo de estructura (inactivo, sin datos):
  "aspiradora-agua-seco-bateria": { activo: false, nombre: "Aspiradora de agua y seco a batería", precioVenta: null, costeProveedor: null, envio: null, proveedor: "cj", proveedorSku: null },
  "inflador-neumaticos-bateria": { activo: false, nombre: "Inflador de neumáticos a batería", precioVenta: null, costeProveedor: null, envio: null, proveedor: "cj", proveedorSku: null },
  "arrancador-bateria-portatil": { activo: false, nombre: "Arrancador de batería portátil", precioVenta: null, costeProveedor: null, envio: null, proveedor: "cj", proveedorSku: null },
  "luz-led-recargable-moto": { activo: false, nombre: "Luz LED recargable para moto", precioVenta: null, costeProveedor: null, envio: null, proveedor: "cj", proveedorSku: null },
  "hidrolimpiadora-portatil-bateria": { activo: false, nombre: "Hidrolimpiadora portátil a batería", precioVenta: null, costeProveedor: null, envio: null, proveedor: "cj", proveedorSku: null },
  "bomba-aire-patinete": { activo: false, nombre: "Bomba de aire para patinete", precioVenta: null, costeProveedor: null, envio: null, proveedor: "cj", proveedorSku: null },
};
export function producto(slug) {
  const p = CATALOGO[slug];
  if (!p || !p.activo || p.precioVenta == null || p.costeProveedor == null || p.envio == null || !p.proveedorSku) return null;
  return { slug, ...p };
}
// Comisión de Stripe (tarjetas EEE estándar): % + fijo, configurable por entorno.
export function comisionPasarela(total) {
  const pct = Number(process.env.TIENDA_PASARELA_PCT ?? "1.5"), fijo = Number(process.env.TIENDA_PASARELA_FIJO ?? "0.25");
  return Math.round((total * pct / 100 + fijo) * 100) / 100;
}
export function margen(lineas, total) {
  const coste = lineas.reduce((a, l) => a + (l.costeProveedor + l.envio) * l.cantidad, 0);
  const pasarela = comisionPasarela(total);
  return { total, coste: Math.round(coste * 100) / 100, pasarela, margen: Math.round((total - coste - pasarela) * 100) / 100 };
}
