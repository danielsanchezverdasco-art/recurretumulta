// Newsletter "La semana del motor en 5 minutos".
// - suscribir / darDeBaja: mutaciones públicas (las usa el frontend).
// - enviarEdicionSemanal: action pública con "use node", protegida por token
//   de admin (la llama el cron `recurretumulta-newsletter-motor` con
//   `npx convex run newsletter:enviarEdicionSemanal '{...}'`).
//   Lee los suscriptores activos con una internalQuery (los emails no se
//   exponen en ninguna query pública) y envía vía Resend con la
//   configuración ya existente (RESEND_API_KEY, FROM recurso@recurretumulta.online).
"use node";

import escapeHtml from "escape-html";
import { Resend } from "resend";
import { ConvexError, v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";

const DOMINIO = "https://recurretumulta.online";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FROM = "RecurreTuMulta.online <recurso@recurretumulta.online>";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function requireAdminToken(token: string) {
  const expected = process.env.NEWSLETTER_ADMIN_TOKEN;
  if (!expected || token !== expected) {
    throw new ConvexError("FORBIDDEN");
  }
}


function bajaUrl(tokenBaja: string): string {
  return `${DOMINIO}/newsletter/baja?token=${encodeURIComponent(tokenBaja)}`;
}

// ── Suscripción (frontend) ───────────────────────────────────────────────────


// ── Baja en 1 clic (frontend, /newsletter/baja?token=...) ─────────────────────


// ── Email de bienvenida (frontend lo llama tras suscribir; no bloquea el OK) ──

export const enviarBienvenida = action({
  args: { email: v.string() },
  handler: async (_ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!EMAIL_RE.test(email)) return { ok: false };

    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Bienvenido/a a La semana del motor</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:#dc2626;padding:24px 32px;text-align:center;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">RecurreTuMulta.online</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;">¡Dentro! Ya estás suscrito/a</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0;font-size:15px;color:#111827;">Cada domingo a las 18:00 recibirás <strong>La semana del motor en 5 minutos</strong>: las noticias destacadas, los duelos y los modelos nuevos, con enlaces a los análisis completos.</p>
            <p style="margin:12px 0 0;font-size:14px;color:#374151;">Sin spam, solo motor. Y puedes darte de baja en 1 clic cuando quieras.</p>
            <p style="margin:16px 0 0;"><a href="${DOMINIO}/blog" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 24px;border-radius:12px;">Ver Novedades Motor</a></p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.6;">RecurreTuMulta.online · Te has suscrito con ${escapeHtml(email)}. Responde a este correo si quieres darte de baja.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    try {
      // resend-node v6 NO lanza excepción en errores de API (429, 4xx): devuelve {error}.
      const result = await getResend().emails.send({
        from: FROM,
        to: email,
        subject: "¡Dentro! Ya recibes La semana del motor — RecurreTuMulta.online",
        html,
        text: `¡Dentro! Ya estás suscrito/a a "La semana del motor en 5 minutos". Cada domingo a las 18:00 recibirás las noticias destacadas del motor. — RecurreTuMulta.online`,
        tags: [{ name: "tipo", value: "newsletter-bienvenida" }],
      });
      if (result.error) {
        console.error("[newsletter] enviarBienvenida error:", result.error);
        return { ok: false };
      }
      return { ok: true };
    } catch (err) {
      console.error("[newsletter] enviarBienvenida error:", err);
      return { ok: false };
    }
  },
});

// ── Lectura interna de suscriptores (solo la usa el cron vía la action) ───────


// ── Envío de la edición semanal (la llama el cron) ────────────────────────────

const articuloSchema = v.object({
  titulo: v.string(),
  resumen: v.string(),
  url: v.string(),
});

function componerHtml(articulos: { titulo: string; resumen: string; url: string }[], baja: string): string {
  const items = articulos
    .map(
      (a) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #f3f4f6;">
            <a href="${escapeHtml(a.url)}" style="font-size:16px;font-weight:800;color:#111827;text-decoration:none;">${escapeHtml(a.titulo)}</a>
            <p style="margin:6px 0 0;font-size:13px;color:#6b7280;line-height:1.6;">${escapeHtml(a.resumen)}</p>
            <p style="margin:8px 0 0;"><a href="${escapeHtml(a.url)}" style="font-size:13px;font-weight:700;color:#dc2626;text-decoration:none;">Leer el análisis completo →</a></p>
          </td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>La semana del motor en 5 minutos</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:#dc2626;padding:24px 32px;text-align:center;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">RecurreTuMulta.online</p>
            <h1 style="margin:8px 0 0;font-size:24px;font-weight:900;color:#ffffff;line-height:1.2;">La semana del motor en 5 minutos</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">Noticias, duelos y modelos nuevos</p>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">${items}</table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 28px;text-align:center;">
            <a href="${DOMINIO}/comparador-coches" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:800;padding:14px 28px;border-radius:12px;font-size:15px;">Comparar dos coches cara a cara</a>
            <p style="margin:12px 0 0;"><a href="${DOMINIO}/blog" style="font-size:13px;color:#dc2626;font-weight:600;">Ver todas las novedades →</a></p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.7;">Recibes este correo porque te suscribiste a la newsletter de RecurreTuMulta.online.<br>RecurreTuMulta.online · Madrid, España · <a href="${DOMINIO}/privacidad" style="color:#9ca3af;">Privacidad</a> · <a href="${baja}" style="color:#9ca3af;font-weight:700;">Darme de baja</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

function componerTexto(articulos: { titulo: string; resumen: string; url: string }[], baja: string): string {
  const items = articulos.map((a) => `· ${a.titulo}\n  ${a.resumen}\n  ${a.url}`).join("\n\n");
  return `LA SEMANA DEL MOTOR EN 5 MINUTOS — RecurreTuMulta.online\n\n${items}\n\nComparar dos coches: ${DOMINIO}/comparador-coches\n\n--\nRecibes este correo porque te suscribiste a la newsletter de RecurreTuMulta.online.\nDarme de baja: ${baja}`;
}

export const enviarEdicionSemanal = action({
  args: {
    token: v.string(),
    semana: v.string(), // ej: "2026-W40" (solo informativo, va en el log)
    articulos: v.array(articuloSchema), // 5-7 artículos ya elegidos por el cron
  },
  handler: async (
    ctx,
    args
  ): Promise<{ ok: boolean; enviados: number; motivo?: string; fallos?: string[]; total?: number; semana?: string }> => {
    requireAdminToken(args.token);

    if (args.articulos.length === 0) {
      return { ok: true, enviados: 0, motivo: "sin-articulos" };
    }

    const subs = await ctx.runQuery(internal.newsletterSubs.listarActivosInterno);
    if (subs.length === 0) {
      return { ok: true, enviados: 0, motivo: "sin-suscriptores" };
    }

    const subject = `La semana del motor en 5 minutos — RecurreTuMulta.online`;
    let enviados = 0;
    const fallos: string[] = [];

    for (const sub of subs) {
      const baja = bajaUrl(sub.tokenBaja);
      const html = componerHtml(args.articulos, baja);
      const text = componerTexto(args.articulos, baja);
      try {
        // resend-node v6 NO lanza excepción en errores de API (429, 4xx): devuelve {error}.
        // Sin este check, un rechazo de Resend contaba como "enviado" (bug 04/10/2026).
        const result = await getResend().emails.send({
          from: FROM,
          to: sub.email,
          subject,
          html,
          text,
          tags: [
            { name: "tipo", value: "newsletter-motor-semanal" },
            { name: "semana", value: args.semana },
          ],
        });
        if (result.error) {
          console.error(`[newsletter] fallo enviando a ${sub.email}:`, result.error);
          fallos.push(sub.email);
        } else {
          enviados++;
        }
      } catch (err) {
        console.error(`[newsletter] fallo enviando a ${sub.email}:`, err);
        fallos.push(sub.email);
      }
      // Cortesía con la API de Resend: pequeña pausa entre envíos
      await new Promise((r) => setTimeout(r, 400));
    }

    return { ok: true, enviados, fallos, total: subs.length, semana: args.semana };
  },
});
