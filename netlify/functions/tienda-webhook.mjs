// POST /.netlify/functions/tienda-webhook  ← Stripe (checkout.session.completed).
// Verifica la firma (STRIPE_WEBHOOK_SECRET), registra el pedido (idempotente por session.id),
// calcula la comisión y lo envía al proveedor con reintentos; si falla, avisa por email.
import crypto from "node:crypto";
import { producto, margen } from "./_tienda/catalogo.mjs";
import { reservar, guardar, leer } from "./_tienda/pedidos.mjs";
import { enviarAProveedor } from "./_tienda/proveedores.mjs";
import { avisarFallo } from "./_tienda/aviso.mjs";

function firmaValida(raw, header, secret) {
  if (!header || !secret) return false;
  const parts = Object.fromEntries(header.split(",").map((kv) => kv.split("=")));
  const t = parts.t, v1 = parts.v1; if (!t || !v1) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  const esperado = crypto.createHmac("sha256", secret).update(`${t}.${raw}`).digest("hex");
  return v1.length === esperado.length && crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(esperado));
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function procesarSesion(s) {
  const id = s.id;
  const lineas = JSON.parse(s.metadata?.lineas || "[]").map(([slug, cantidad]) => ({ ...producto(slug), cantidad }));
  if (!lineas.length || lineas.some((l) => !l.slug)) throw new Error("Pedido con producto inactivo o desconocido");
  const ship = s.shipping_details || s.collected_information?.shipping_details || {};
  const a = ship.address || {};
  const cliente = { nombre: ship.name || s.customer_details?.name, email: s.customer_details?.email, telefono: s.customer_details?.phone, direccion: a.line1, direccion2: a.line2, ciudad: a.city, cp: a.postal_code, provincia: a.state, pais: a.country };
  const total = (s.amount_total ?? 0) / 100;
  const pedido = { id, creado: new Date().toISOString(), cliente, lineas: lineas.map((l) => ({ slug: l.slug, cantidad: l.cantidad, proveedorSku: l.proveedorSku, costeProveedor: l.costeProveedor, envio: l.envio })), cuentas: margen(lineas, total), estado: "pagado", modoTest: !s.livemode };
  if (!(await reservar(id, pedido))) return { duplicado: true };
  let ultimoError = "";
  for (let i = 0; i < 3; i++) {
    try {
      const res = await enviarAProveedor(pedido);
      await guardar(id, { ...(await leer(id)), ...pedido, estado: "enviado_proveedor", proveedor: res });
      return { ok: true };
    } catch (e) { ultimoError = String(e.message); await sleep(1000 * 2 ** i); }
  }
  await guardar(id, { ...(await leer(id)), ...pedido, estado: "error", error: ultimoError });
  await avisarFallo(id, ultimoError);
  return { ok: false, error: ultimoError };
}

export default async (req) => {
  if (req.method !== "POST") return new Response("Método no permitido", { status: 405 });
  const raw = await req.text();
  if (!firmaValida(raw, req.headers.get("stripe-signature"), process.env.STRIPE_WEBHOOK_SECRET)) return new Response("Firma inválida", { status: 400 });
  const ev = JSON.parse(raw);
  if (ev.type !== "checkout.session.completed" || ev.data?.object?.payment_status !== "paid") return new Response("ignorado", { status: 200 });
  try { const r = await procesarSesion(ev.data.object); return new Response(JSON.stringify(r), { status: 200 }); }
  catch (e) { await avisarFallo(ev.data.object.id, e.message); return new Response("error registrado", { status: 200 }); }
};
