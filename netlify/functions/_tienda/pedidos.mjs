// Registro de pedidos con idempotencia. Usa Netlify Blobs si está disponible
// (npm i @netlify/blobs en el despliegue con funciones); si no, memoria (solo pruebas locales).
const mem = new Map();
async function store() {
  try { const { getStore } = await import("@netlify/blobs"); return getStore("tienda-pedidos"); } catch { return null; }
}
export async function leer(id) { const s = await store(); if (!s) return mem.get(id) ?? null; return (await s.get(id, { type: "json" })) ?? null; }
export async function guardar(id, pedido) { const s = await store(); pedido.actualizado = new Date().toISOString(); if (!s) { mem.set(id, pedido); return; } await s.setJSON(id, pedido); }
/** Reserva atómica aproximada: devuelve false si el pedido ya se procesó o está en curso. */
export async function reservar(id, base) {
  const prev = await leer(id);
  if (prev && (prev.estado === "enviado_proveedor" || prev.estado === "procesando")) return false;
  await guardar(id, { ...(prev ?? base), estado: "procesando", intentos: (prev?.intentos ?? 0) + 1 });
  return true;
}
