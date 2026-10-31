"use node";

import escapeHtml from "escape-html";
import { Resend } from "resend";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

// NOTA: en Resend hay que verificar el dominio recurretumulta.online
// (un registro TXT en el DNS) para poder enviar desde FROM.
// Cliente Resend creado de forma perezosa: instanciarlo a nivel de módulo
// rompería el análisis del bundle cuando la variable de entorno aún no existe.
function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

const FROM = "RecurreTuMulta.online <multasapp2@outlook.es>";
const APP_URL = "https://recurretumulta.online";

// ── Helpers de diseño ─────────────────────────────────────────────────────────

function productoLabel(producto: string): string {
  if (producto === "pdf_unico") return "PDF de recurso (1 multa) — 4,99€";
  if (producto === "pdf_pack_10") return "Pack 10 recursos PDF — 9,99€";
  if (producto === "vip_vitalicio") return "Acceso VIP vitalicio — 14,99€";
  return producto;
}

// (Eliminado 31/10/2026: el email «Resultados del análisis» con «% de probabilidad de éxito». Nadie lo llamaba y el porcentaje era inventado.)

// ── EMAIL 2: Carrito abandonado (15 min después) ──────────────────────────────

export const sendAbandonoCarrito = internalAction({
  args: {
    stripeSessionId: v.string(),
    to: v.string(),
    nombre: v.optional(v.string()),
    producto: v.union(v.literal("pdf_unico"), v.literal("pdf_pack_10"), v.literal("vip_vitalicio")),
    importe: v.number(),
  },
  handler: async (ctx, args) => {
    // Verificar si el pago ya se completó (no enviar si ya pagó)
    const payment = await ctx.runQuery(internal.paymentsDb.getPaymentBySession, {
      stripeSessionId: args.stripeSessionId,
    });

    if (!payment || payment.status === "completed" || payment.abandonmentEmailSent) {
      // Ya pagó o ya se envió el email — no enviar
      return;
    }

    // Marcar como enviado para no repetir
    await ctx.runMutation(internal.paymentsDb.markAbandonmentEmailSent, {
      stripeSessionId: args.stripeSessionId,
    });

    const nombre = escapeHtml(args.nombre ?? "");
    const saludo = nombre ? `Hola, ${nombre}` : "Hola";
    const productoStr = escapeHtml(productoLabel(args.producto));
    const importeStr = (args.importe / 100).toFixed(2).replace(".", ",");

    // ── Plain text ────────────────────────────────────────────────────────────
    const text = `
${saludo}

Has dejado tu recurso a medias. Tu documento está listo pero falta completar el pago.

Producto: ${productoLabel(args.producto)}
Precio: ${importeStr}€

Recuerda que los recursos de multa tienen plazos legales. Si no presentas el recurso a tiempo, pierdes el derecho.

Completa tu pago aquí:
${APP_URL}/?utm_source=email&utm_medium=abandono&utm_campaign=carrito

RecurreTuMulta.online
`.trim();

    // ── HTML ──────────────────────────────────────────────────────────────────
    const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tu recurso está esperando</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#dc2626,#b91c1c);padding:28px 32px;text-align:center;">
            <div style="font-size:32px;margin-bottom:8px;">📄</div>
            <h1 style="margin:0;font-size:22px;font-weight:900;color:#ffffff;line-height:1.2;">Tu recurso está esperando</h1>
            <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">Solo falta un paso para protegerte de la multa</p>
          </td>
        </tr>

        <!-- Mensaje principal -->
        <tr>
          <td style="padding:28px 32px 0;">
            <p style="margin:0;font-size:15px;color:#111827;font-weight:700;line-height:1.4;">${saludo},</p>
            <p style="margin:10px 0 0;font-size:14px;color:#374151;line-height:1.7;">Has analizado tu multa y la IA ha generado el recurso completo. Solo faltó completar el pago para desbloquear el PDF listo para presentar.</p>
          </td>
        </tr>

        <!-- Producto -->
        <tr>
          <td style="padding:20px 32px 0;">
            <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:16px;">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="vertical-align:middle;">
                    <p style="margin:0;font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Producto pendiente</p>
                    <p style="margin:4px 0 0;font-size:14px;font-weight:900;color:#111827;">${productoStr}</p>
                  </td>
                  <td style="text-align:right;vertical-align:middle;">
                    <span style="font-size:24px;font-weight:900;color:#dc2626;">${importeStr}€</span>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- Lo que incluye -->
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;">Tu PDF incluye</p>
            <table cellpadding="0" cellspacing="0">
              ${[
                "Recurso redactado con tus datos personales",
                "Argumentos jurídicos específicos a tu multa",
                "Referencias exactas a la LTSV y Ley 39/2015",
                "Listo para presentar en DGT o Ayuntamiento",
              ].map((b) => `
              <tr>
                <td style="padding:4px 0;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="color:#dc2626;font-size:14px;padding-right:8px;vertical-align:top;">✓</td>
                      <td style="font-size:13px;color:#374151;">${escapeHtml(b)}</td>
                    </tr>
                  </table>
                </td>
              </tr>`).join("")}
            </table>
          </td>
        </tr>

        <!-- Urgencia -->
        <tr>
          <td style="padding:20px 32px 0;">
            <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:12px;padding:14px 16px;">
              <p style="margin:0;font-size:13px;font-weight:800;color:#9a3412;">⏰ Recuerda: los plazos legales no esperan</p>
              <p style="margin:5px 0 0;font-size:12px;color:#7c2d12;line-height:1.5;">Los recursos de multas tienen plazos estrictos (generalmente 20 días). Si no presentas a tiempo, la multa gana firmeza.</p>
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:24px 32px 28px;">
            <a href="${APP_URL}/?utm_source=email&utm_medium=abandono&utm_campaign=carrito" style="display:block;text-align:center;background:#dc2626;color:#ffffff;font-size:15px;font-weight:900;padding:15px 32px;border-radius:12px;text-decoration:none;">
              Completar pago y descargar PDF →
            </a>
            <p style="margin:12px 0 0;text-align:center;font-size:11px;color:#9ca3af;">Pago seguro con Stripe · 4,99€ · Sin suscripción</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.5;">RecurreTuMulta.online · Si ya completaste el pago, ignora este mensaje.<br/>No sustituye asesoramiento jurídico profesional.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`.trim();

    try {
      await getResend().emails.send({
        from: FROM,
        to: args.to,
        subject: `Tu recurso está a medias — solo falta el PDF | RecurreTuMulta.online`,
        html,
        text,
        tags: [
          { name: "tipo", value: "abandono-carrito" },
          { name: "producto", value: args.producto },
        ],
      });
      console.log("[emails] sendAbandonoCarrito sent to", args.to, "session", args.stripeSessionId);
    } catch (err) {
      console.error("[emails] sendAbandonoCarrito error:", err);
    }
  },
});


// ── EMAIL: Resultados del Buscador de coches (08/10/2026) ────────────────────

export const sendBuscadorResultados = internalAction({
  args: {
    to: v.string(),
    marca: v.string(),
    modelo: v.string(),
    presupuestoMax: v.number(),
    anuncios: v.array(
      v.object({
        titulo: v.string(),
        precio: v.number(),
        km: v.optional(v.number()),
        ano: v.optional(v.number()),
        ubicacion: v.optional(v.string()),
        portal: v.string(),
        url: v.string(),
        difMercadoPct: v.optional(v.number()),
      })
    ),
  },
  handler: async (_ctx, args) => {
    const eur = (n: number) => `${n.toLocaleString("es-ES")} €`;
    const filas = args.anuncios
      .map(
        (a) => `
              <tr>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;font-size:12px;color:#111827;">
                  <strong>${escapeHtml(a.titulo)}</strong><br/>
                  <span style="color:#6b7280;">${a.ano ?? "—"} · ${a.km !== undefined ? `${a.km.toLocaleString("es-ES")} km` : "km n/d"} · ${escapeHtml(a.ubicacion ?? "España")} · ${escapeHtml(a.portal)}</span>
                  ${a.difMercadoPct !== undefined && a.difMercadoPct <= -5 ? `<br/><span style="color:#16a34a;font-weight:700;">${Math.abs(a.difMercadoPct)}% bajo mercado</span>` : ""}
                </td>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;font-size:13px;font-weight:800;color:#111827;white-space:nowrap;">${eur(a.precio)}</td>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;"><a href="${escapeHtml(a.url)}" style="font-size:12px;color:#dc2626;font-weight:700;">Ver →</a></td>
              </tr>`
      )
      .join("");

    const text =
      `Buscador de coches — RecurreTuMulta.online\n\n` +
      `Tu búsqueda: ${args.marca} ${args.modelo} (máx. ${eur(args.presupuestoMax)})\n\n` +
      args.anuncios
        .map(
          (a, i) =>
            `${i + 1}. ${a.titulo} — ${eur(a.precio)} (${a.ano ?? "—"}, ${a.km !== undefined ? `${a.km.toLocaleString("es-ES")} km` : "km n/d"}, ${a.ubicacion ?? "España"}, ${a.portal})\n   ${a.url}`
        )
        .join("\n") +
      `\n\nLos precios y la disponibilidad cambian rápido: revisa el anuncio antes de desplazarte.\nRecurreTuMulta.online`;

    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;max-width:600px;">
        <tr>
          <td style="background:#dc2626;padding:20px 32px;">
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:900;">🔍 Buscador de coches</p>
            <p style="margin:4px 0 0;color:#fecaca;font-size:12px;">${escapeHtml(args.marca)} ${escapeHtml(args.modelo)} · máx. ${eur(args.presupuestoMax)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;">Estas son las mejores ofertas que hemos encontrado para tu búsqueda. Los precios vuelan: si una te cuadra, mírala hoy.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${filas}</table>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 4px;">
            <div style="background:#fef3cd;border:1.5px solid #f59e0b;border-radius:12px;padding:12px 14px;">
              <p style="margin:0;font-size:12px;color:#78350f;line-height:1.5;">💡 <strong>Consejo de mecánico:</strong> antes de comprar, revisa la ficha del modelo en nuestra web: averías típicas, coste de mantenimiento y qué mirar en la prueba.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px 28px;text-align:center;">
            <a href="${APP_URL}/buscador-coches/?utm_source=email&utm_medium=buscador" style="display:inline-block;background:#dc2626;color:#ffffff;font-size:14px;font-weight:900;padding:13px 28px;border-radius:12px;text-decoration:none;">Hacer otra búsqueda →</a>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:14px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.5;">RecurreTuMulta.online · Has recibido este correo porque pediste los resultados de tu búsqueda.<br/>Precios orientativos de portales externos; verifícalos en el anuncio original.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    try {
      await getResend().emails.send({
        from: FROM,
        to: args.to,
        subject: `${args.anuncios.length} ofertas de ${args.marca} ${args.modelo} — Buscador de coches`,
        html,
        text,
        tags: [{ name: "tipo", value: "buscador-coches" }],
      });
    } catch (err) {
      console.error("[emails] sendBuscadorResultados error:", err);
    }
  },
});

// ── EMAIL: Alerta del Buscador de coches (08/10/2026) ────────────────────────

export const sendAlertaBuscador = internalAction({
  args: {
    to: v.string(),
    marca: v.string(),
    modelo: v.string(),
    bajadas: v.array(
      v.object({
        titulo: v.string(),
        antes: v.number(),
        ahora: v.number(),
        url: v.string(),
      })
    ),
    nuevos: v.array(
      v.object({
        titulo: v.string(),
        precio: v.number(),
        km: v.optional(v.number()),
        portal: v.string(),
        url: v.string(),
      })
    ),
  },
  handler: async (_ctx, args) => {
    const eur = (n: number) => `${n.toLocaleString("es-ES")} €`;
    const filasBajadas = args.bajadas
      .map(
        (b) => `
              <tr>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;font-size:12px;color:#111827;">
                  <strong>${escapeHtml(b.titulo)}</strong><br/>
                  <span style="color:#16a34a;font-weight:700;">Baja de ${eur(b.antes)} a ${eur(b.ahora)}</span>
                </td>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;"><a href="${escapeHtml(b.url)}" style="font-size:12px;color:#dc2626;font-weight:700;">Ver →</a></td>
              </tr>`
      )
      .join("");
    const filasNuevos = args.nuevos
      .map(
        (a) => `
              <tr>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;font-size:12px;color:#111827;">
                  <strong>${escapeHtml(a.titulo)}</strong><br/>
                  <span style="color:#6b7280;">${a.km !== undefined ? `${a.km.toLocaleString("es-ES")} km · ` : ""}${escapeHtml(a.portal)}</span>
                </td>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;font-size:13px;font-weight:800;color:#111827;white-space:nowrap;">${eur(a.precio)}</td>
                <td style="padding:10px 8px;border-bottom:1px solid #f3f4f6;"><a href="${escapeHtml(a.url)}" style="font-size:12px;color:#dc2626;font-weight:700;">Ver →</a></td>
              </tr>`
      )
      .join("");

    const text =
      `🔔 Alerta del Buscador de coches — RecurreTuMulta.online\n\n` +
      `${args.marca} ${args.modelo}\n\n` +
      (args.bajadas.length
        ? `BAJADAS DE PRECIO:\n${args.bajadas.map((b) => `· ${b.titulo}: ${eur(b.antes)} → ${eur(b.ahora)}\n  ${b.url}`).join("\n")}\n\n`
        : "") +
      (args.nuevos.length
        ? `NUEVOS ANUNCIOS BARATOS:\n${args.nuevos.map((a) => `· ${a.titulo} — ${eur(a.precio)} (${a.portal})\n  ${a.url}`).join("\n")}\n`
        : "") +
      `\nDate prisa: los chollos vuelan.\nRecurreTuMulta.online`;

    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;max-width:600px;">
        <tr>
          <td style="background:#16a34a;padding:20px 32px;">
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:900;">🔔 ¡Alerta de precio!</p>
            <p style="margin:4px 0 0;color:#bbf7d0;font-size:12px;">${escapeHtml(args.marca)} ${escapeHtml(args.modelo)}</p>
          </td>
        </tr>
        ${args.bajadas.length ? `
        <tr><td style="padding:20px 32px 0;"><p style="margin:0;font-size:14px;font-weight:800;color:#111827;">📉 Han bajado de precio</p></td></tr>
        <tr><td style="padding:8px 24px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${filasBajadas}</table></td></tr>` : ""}
        ${args.nuevos.length ? `
        <tr><td style="padding:20px 32px 0;"><p style="margin:0;font-size:14px;font-weight:800;color:#111827;">✨ Nuevos anuncios baratos</p></td></tr>
        <tr><td style="padding:8px 24px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${filasNuevos}</table></td></tr>` : ""}
        <tr>
          <td style="padding:20px 32px 28px;text-align:center;">
            <a href="${APP_URL}/buscador-coches/?utm_source=email&utm_medium=alerta" style="display:inline-block;background:#16a34a;color:#ffffff;font-size:14px;font-weight:900;padding:13px 28px;border-radius:12px;text-decoration:none;">Ver en el buscador →</a>
            <p style="margin:12px 0 0;font-size:11px;color:#9ca3af;">Los chollos vuelan: si te cuadra, míralo hoy.</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:14px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.5;">RecurreTuMulta.online · Recibes esto porque activaste una alerta de precio.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    try {
      await getResend().emails.send({
        from: FROM,
        to: args.to,
        subject: `🔔 Alerta: ${args.marca} ${args.modelo} — hay novedades en el precio`,
        html,
        text,
        tags: [{ name: "tipo", value: "alerta-buscador" }],
      });
    } catch (err) {
      console.error("[emails] sendAlertaBuscador error:", err);
    }
  },
});
