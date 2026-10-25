// Adaptadores de proveedor. CJ Dropshipping (API v2) y uno genérico por webhook HTTP.
// Credenciales SOLO por entorno: CJ_API_KEY (y CJ_API_BASE opcional); PROVEEDOR_GENERICO_URL / _TOKEN.
async function cjToken() {
  const base = process.env.CJ_API_BASE || "https://developers.cjdropshipping.com/api2.0/v1";
  if (!process.env.CJ_API_KEY) throw new Error("CJ_API_KEY no configurada");
  const r = await fetch(`${base}/authentication/getAccessToken`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ apiKey: process.env.CJ_API_KEY }) });
  const j = await r.json();
  if (!j?.data?.accessToken) throw new Error(`CJ auth: ${j?.message || r.status}`);
  return { base, token: j.data.accessToken };
}
export const cj = {
  async crearPedido(p) {
    const { base, token } = await cjToken();
    const body = {
      orderNumber: p.id, shippingCountryCode: p.cliente.pais, shippingCountry: p.cliente.pais,
      shippingProvince: p.cliente.provincia || "", shippingCity: p.cliente.ciudad, shippingAddress: p.cliente.direccion,
      shippingAddress2: p.cliente.direccion2 || "", shippingZip: p.cliente.cp, shippingCustomerName: p.cliente.nombre,
      shippingPhone: p.cliente.telefono || "", email: p.cliente.email || "", logisticName: process.env.CJ_LOGISTICA || "CJPacket Ordinary",
      fromCountryCode: "CN", products: p.lineas.map((l) => ({ vid: l.proveedorSku, quantity: l.cantidad })),
    };
    const r = await fetch(`${base}/shopping/order/createOrderV2`, { method: "POST", headers: { "content-type": "application/json", "CJ-Access-Token": token }, body: JSON.stringify(body) });
    const j = await r.json();
    if (!r.ok || j.result === false || (j.code && j.code !== 200)) throw new Error(`CJ pedido: ${j?.message || r.status}`);
    return { proveedorPedidoId: j?.data?.orderId ?? null };
  },
};
export const generico = {
  async crearPedido(p) {
    const url = process.env.PROVEEDOR_GENERICO_URL; if (!url) throw new Error("PROVEEDOR_GENERICO_URL no configurada");
    const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${process.env.PROVEEDOR_GENERICO_TOKEN || ""}`, "idempotency-key": p.id }, body: JSON.stringify({ pedido: p.id, cliente: p.cliente, lineas: p.lineas.map((l) => ({ sku: l.proveedorSku, cantidad: l.cantidad })) }) });
    if (!r.ok) throw new Error(`Proveedor genérico: HTTP ${r.status}`);
    const j = await r.json().catch(() => ({})); return { proveedorPedidoId: j.id ?? null };
  },
};
/** CJ primero; si falla y hay genérico configurado, respaldo. */
export async function enviarAProveedor(p) {
  try { return { via: "cj", ...(await cj.crearPedido(p)) }; }
  catch (e) { if (!process.env.PROVEEDOR_GENERICO_URL) throw e; return { via: "generico", errorCj: String(e.message), ...(await generico.crearPedido(p)) }; }
}
