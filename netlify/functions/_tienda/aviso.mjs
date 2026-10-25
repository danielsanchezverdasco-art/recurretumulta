// Aviso por email cuando un pedido falla. Resend por API (RESEND_API_KEY, TIENDA_AVISO_EMAIL, TIENDA_AVISO_FROM).
export async function avisarFallo(pedidoId, error) {
  console.error(`[tienda] pedido ${pedidoId} FALLÓ: ${error}`);
  if (!process.env.RESEND_API_KEY || !process.env.TIENDA_AVISO_EMAIL) return false;
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: process.env.TIENDA_AVISO_FROM || "tienda@recurretumulta.online", to: [process.env.TIENDA_AVISO_EMAIL], subject: `Pedido ${pedidoId} fallido`, text: `El pedido ${pedidoId} no se pudo enviar al proveedor tras los reintentos.\n\nError: ${error}\n\nRevisa el registro en Netlify Blobs (tienda-pedidos).` }) });
  return r.ok;
}
