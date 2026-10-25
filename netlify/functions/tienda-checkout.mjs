// POST /.netlify/functions/tienda-checkout  → crea una sesión de Stripe Checkout (SOLO modo test).
// Variables: STRIPE_SECRET_KEY (sk_test_…), TIENDA_URL (https://recurretumulta.online). Sin claves en el código.
import { producto } from "./_tienda/catalogo.mjs";
const json = (s, b) => new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json" } });
export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "Método no permitido" });
  const key = process.env.STRIPE_SECRET_KEY || "";
  if (!key) return json(503, { error: "La tienda aún no acepta pagos (próximamente)." });
  if (!key.startsWith("sk_test_") && process.env.TIENDA_PERMITIR_LIVE !== "1") return json(503, { error: "Solo se permite modo test." });
  let body; try { body = await req.json(); } catch { return json(400, { error: "JSON inválido" }); }
  const lineas = (body?.lineas ?? []).slice(0, 20).map((l) => ({ p: producto(String(l.slug)), cantidad: Math.min(10, Math.max(1, parseInt(l.cantidad) || 1)) }));
  if (!lineas.length || lineas.some((l) => !l.p)) return json(400, { error: "Producto no disponible" });
  const base = process.env.TIENDA_URL || "https://recurretumulta.online";
  const f = new URLSearchParams({ mode: "payment", success_url: `${base}/tienda/carrito/?ok=1`, cancel_url: `${base}/tienda/carrito/`, "shipping_address_collection[allowed_countries][0]": "ES", "phone_number_collection[enabled]": "true", locale: "es" });
  lineas.forEach((l, i) => {
    f.set(`line_items[${i}][quantity]`, String(l.cantidad));
    f.set(`line_items[${i}][price_data][currency]`, "eur");
    f.set(`line_items[${i}][price_data][unit_amount]`, String(Math.round((l.p.precioVenta + l.p.envio) * 100)));
    f.set(`line_items[${i}][price_data][product_data][name]`, l.p.nombre);
    f.set(`line_items[${i}][price_data][product_data][metadata][slug]`, l.p.slug);
  });
  f.set("metadata[lineas]", JSON.stringify(lineas.map((l) => [l.p.slug, l.cantidad])));
  const r = await fetch("https://api.stripe.com/v1/checkout/sessions", { method: "POST", headers: { authorization: `Bearer ${key}`, "content-type": "application/x-www-form-urlencoded" }, body: f });
  const s = await r.json();
  if (!r.ok) return json(502, { error: "No se pudo crear el pago" });
  return json(200, { url: s.url });
};
