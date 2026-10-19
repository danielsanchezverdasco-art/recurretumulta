// Envío por email del resumen de una comparativa (coches / motos / patinetes).
// Action pública con "use node": la llama el frontend tras pulsar "Ver resultado".
// Patrón copiado de convex/newsletter.ts (Resend + RESEND_API_KEY + FROM recurso@).
// Anti-abuso: máximo 5 envíos al día por fingerprint (contador propio "email:<fp>"
// en la tabla anonymousLimits, separado del límite de investigaciones IA).
"use node";

import escapeHtml from "escape-html";
import { Resend } from "resend";
import { ConvexError, v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";

const DOMINIO = "https://recurretumulta.online";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FROM = "RecurreTuMulta.online <recurso@recurretumulta.online>";
const MAX_ENVIOS_DIA = 5;
const MAX_FILAS = 40;

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

const filaSchema = v.object({
  label: v.string(),
  valorA: v.string(),
  valorB: v.string(),
  ganador: v.union(v.literal("a"), v.literal("b"), v.literal("empate")),
});

function cortar(s: string, n: number): string {
  return s.length > n ? s.slice(0, n) : s;
}

function tituloTipo(tipo: string): string {
  if (tipo === "motos") return "motos eléctricas";
  if (tipo === "patinetes") return "patinetes eléctricos";
  return "coches";
}

function componerHtml(args: {
  tipo: string;
  nombreA: string;
  nombreB: string;
  url: string;
  filas: { label: string; valorA: string; valorB: string; ganador: "a" | "b" | "empate" }[];
  veredicto: string;
}): string {
  const tipoTxt = tituloTipo(args.tipo);
  const filasHtml = args.filas
    .map((f) => {
      const estilo = (lado: "a" | "b") =>
        f.ganador === lado
          ? "background:#ecfdf5;font-weight:800;color:#047857;"
          : "color:#111827;";
      const trofeo = (lado: "a" | "b") => (f.ganador === lado ? "🏆 " : "");
      return `<tr>
        <td style="padding:8px 10px;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;">${escapeHtml(f.label)}</td>
        <td style="padding:8px 10px;border-bottom:1px solid #f3f4f6;font-size:13px;text-align:right;${estilo("a")}">${trofeo("a")}${escapeHtml(f.valorA)}</td>
        <td style="padding:8px 10px;border-bottom:1px solid #f3f4f6;font-size:13px;text-align:right;${estilo("b")}">${trofeo("b")}${escapeHtml(f.valorB)}</td>
      </tr>`;
    })
    .join("");
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Tu comparativa: ${escapeHtml(args.nombreA)} vs ${escapeHtml(args.nombreB)}</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:#dc2626;padding:24px 32px;text-align:center;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">RecurreTuMulta.online</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;">${escapeHtml(args.nombreA)} vs ${escapeHtml(args.nombreB)}</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">Comparativa de ${tipoTxt} · 🏆 = gana el apartado</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <th style="text-align:left;font-size:12px;color:#9ca3af;padding:8px 10px;"></th>
                <th style="text-align:right;font-size:12px;color:#9ca3af;padding:8px 10px;">${escapeHtml(args.nombreA)}</th>
                <th style="text-align:right;font-size:12px;color:#9ca3af;padding:8px 10px;">${escapeHtml(args.nombreB)}</th>
              </tr>
              ${filasHtml}
            </table>
            <div style="margin-top:20px;background:#f9fafb;border:1px solid #f3f4f6;border-radius:12px;padding:16px 18px;">
              <p style="margin:0;font-size:13px;font-weight:800;color:#111827;">Nuestro veredicto</p>
              <p style="margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6;">${escapeHtml(args.veredicto)}</p>
            </div>
            <p style="margin:20px 0 0;text-align:center;"><a href="${escapeHtml(args.url)}" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 24px;border-radius:12px;">Ver la comparativa completa</a></p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.6;">RecurreTuMulta.online · Has pedido este resumen desde el comparador. Los datos con ≈ son estimaciones.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

function componerTexto(args: {
  tipo: string;
  nombreA: string;
  nombreB: string;
  url: string;
  filas: { label: string; valorA: string; valorB: string; ganador: "a" | "b" | "empate" }[];
  veredicto: string;
}): string {
  const lineas = args.filas
    .map(
      (f) =>
        `${f.label}: ${f.valorA}  vs  ${f.valorB}${f.ganador === "a" ? "  (gana " + args.nombreA + ")" : f.ganador === "b" ? "  (gana " + args.nombreB + ")" : ""}`
    )
    .join("\n");
  return `TU COMPARATIVA — RecurreTuMulta.online\n${args.nombreA} vs ${args.nombreB} (${tituloTipo(args.tipo)})\n\n${lineas}\n\nVEREDICTO: ${args.veredicto}\n\nVer la comparativa completa: ${args.url}\n\n--\nHas pedido este resumen desde el comparador de RecurreTuMulta.online.`;
}

// Límite anti-abuso: 5 envíos/día por dispositivo (contador propio "email:<fp>"
// en anonymousLimits, separado del límite de investigaciones IA).
// NOTA: la mutación vive en convex/comparadorEmailInterno.ts porque los
// ficheros "use node" solo pueden definir actions (03/10/2026).

export const enviarComparativa = action({
  args: {
    email: v.string(),
    fingerprint: v.string(),
    tipo: v.union(v.literal("coches"), v.literal("motos"), v.literal("patinetes")),
    nombreA: v.string(),
    nombreB: v.string(),
    url: v.string(),
    filas: v.array(filaSchema),
    veredicto: v.string(),
  },
  handler: async (
    ctx,
    args
  ): Promise<{ ok: boolean; motivo?: string }> => {
    const email = args.email.trim().toLowerCase();
    if (!EMAIL_RE.test(email)) {
      throw new ConvexError("Email no válido.");
    }
    const fingerprint = cortar(args.fingerprint.trim(), 128);
    if (!fingerprint) {
      throw new ConvexError("Falta el identificador de dispositivo.");
    }

    // Límite anti-abuso: 5 envíos/día por dispositivo (contador propio).
    const clave = `email:${fingerprint}`;
    await ctx.runMutation(internal.comparadorEmailInterno.checkAndIncrementEmailLimit, {
      fingerprint: clave,
    });

    const nombreA = cortar(args.nombreA.trim(), 120);
    const nombreB = cortar(args.nombreB.trim(), 120);
    const url = cortar(args.url.trim(), 500);
    const veredicto = cortar(args.veredicto.trim(), 600);
    const filas = args.filas.slice(0, MAX_FILAS).map((f) => ({
      label: cortar(f.label, 80),
      valorA: cortar(f.valorA, 80),
      valorB: cortar(f.valorB, 80),
      ganador: f.ganador,
    }));
    if (!nombreA || !nombreB || filas.length === 0) {
      throw new ConvexError("Faltan datos de la comparativa.");
    }

    const subject = `Tu comparativa: ${nombreA} vs ${nombreB} — RecurreTuMulta.online`;
    const datos = { tipo: args.tipo, nombreA, nombreB, url, filas, veredicto };
    try {
      await getResend().emails.send({
        from: FROM,
        to: email,
        subject,
        html: componerHtml(datos),
        text: componerTexto(datos),
        tags: [
          { name: "tipo", value: "comparador-resumen" },
          { name: "comparador", value: args.tipo },
        ],
      });
    } catch (err) {
      console.error("[comparadorEmail] fallo enviando a", email, err);
      throw new ConvexError("No se pudo enviar el email. Inténtalo de nuevo en unos segundos.");
    }
    return { ok: true };
  },
});
