"use node";

// Genera el PDF del recurso comprado y lo envía por email adjunto tras el pago.
import escapeHtml from "escape-html";
import { jsPDF } from "jspdf";
import { Resend } from "resend";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { ActionCtx } from "./_generated/server";

const MAX_EMAIL_ATTEMPTS = 3;
const RETRY_DELAY_MS = 60 * 1000; // 1 minuto

// NOTA: en Resend hay que verificar el dominio recurretumulta.online
// (un registro TXT en el DNS) para poder enviar desde FROM.
// Cliente Resend creado de forma perezosa: instanciarlo a nivel de módulo
// rompería el análisis del bundle cuando la variable de entorno aún no existe.
function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

const FROM = "RecurreTuMulta.online <recurso@recurretumulta.online>";
// Logo servido desde el propio dominio (build de Cloudflare Pages).
const LOGO_URL = "https://www.recurretumulta.online/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png";

// Descarga el logo y lo convierte a base64 puro para incrustarlo en el PDF.
async function fetchLogoBase64(): Promise<string | null> {
  try {
    const res = await fetch(LOGO_URL);
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer).toString("base64");
  } catch {
    return null;
  }
}

type DatosRecurso = {
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  plazoRecurso: string;
};

// ── Genera el PDF del recurso con el mismo diseño que la descarga desde la web ──
function generarPdfBase64(carta: string, datos: DatosRecurso, logoBase64: string | null): string {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 20;
  const pageW = 210;
  const usableW = pageW - margin * 2;
  let y = margin;

  const addText = (text: string, size: number, bold = false, color: [number, number, number] = [0, 0, 0]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, usableW) as string[];
    lines.forEach((line) => {
      if (y > 275) { doc.addPage(); y = margin; }
      doc.text(line, margin, y);
      y += size * 0.45;
    });
    y += 2;
  };

  doc.setFillColor(220, 38, 38);
  doc.rect(0, 0, 210, 12, "F");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text(/^\s*\S*\s*ESCRITO DE ALEGACIONES|ALEGACIONES/i.test(carta.slice(0, 600)) ? "ESCRITO DE ALEGACIONES" : "RECURSO DE REPOSICIÓN", 105, 8, { align: "center" });
  y = 20;

  // Logo de RecurreTuMulta.online junto al título
  if (logoBase64) {
    try { doc.addImage(`data:image/png;base64,${logoBase64}`, "PNG", margin, y - 4, 14, 14); } catch { /* ignorar si falla la carga */ }
  }
  const titleX = logoBase64 ? margin + 18 : margin;
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(220, 38, 38);
  doc.text(/ALEGACIONES/i.test(carta.slice(0, 600)) ? "ESCRITO DE ALEGACIONES" : "RECURSO DE REPOSICIÓN", titleX, y + 6);
  y += 12;
  addText(`Expediente: ${datos.expediente}`, 10, false, [100, 100, 100]);
  y += 4;
  doc.setDrawColor(220, 38, 38);
  doc.setLineWidth(0.5);
  doc.line(margin, y, 210 - margin, y);
  y += 6;

  doc.setFillColor(252, 245, 245);
  doc.roundedRect(margin, y, usableW, 28, 3, 3, "F");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  const cols = [
    ["Infracción", datos.infraccion],
    ["Importe", datos.importe],
    ["Fecha", datos.fecha],
    ["Plazo recurso", datos.plazoRecurso],
  ];
  cols.forEach(([label, val], i) => {
    const x = margin + (i % 2) * (usableW / 2) + 4;
    const boxY = y + 6 + Math.floor(i / 2) * 12;
    doc.setFont("helvetica", "bold");
    doc.text(label + ":", x, boxY);
    doc.setFont("helvetica", "normal");
    doc.text(String(val).slice(0, 40), x + 28, boxY);
  });
  y += 34;

  addText(carta, 10, false, [20, 20, 20]);

  if (y > 250) { doc.addPage(); y = margin; }
  y += 8;
  doc.setDrawColor(220, 38, 38);
  doc.line(margin, y, 210 - margin, y);
  y += 6;
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text("Documento generado por RecurreTuMulta.online — Sólo orientativo, no sustituye asesoramiento jurídico profesional.", 105, y, { align: "center" });

  // dataurlstring devuelve "data:application/pdf;filename=...;base64,XXXX" — extraemos solo el base64
  const dataUrl = doc.output("dataurlstring");
  return dataUrl.split("base64,")[1] ?? "";
}

export const sendRecursoPdfEmail = internalAction({
  args: {
    to: v.string(),
    nombre: v.optional(v.string()),
    carta: v.string(),
    expediente: v.string(),
    importe: v.string(),
    infraccion: v.string(),
    fecha: v.string(),
    plazoRecurso: v.string(),
    attempt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const attempt = args.attempt ?? 1;
    const nombre = escapeHtml(args.nombre ?? "");
    const saludo = nombre ? `Hola, ${nombre}` : "Hola";
    const expediente = escapeHtml(args.expediente);

    let pdfBase64: string;
    try {
      const logoBase64 = await fetchLogoBase64();
      pdfBase64 = generarPdfBase64(args.carta, {
        expediente: args.expediente,
        importe: args.importe,
        infraccion: args.infraccion,
        fecha: args.fecha,
        plazoRecurso: args.plazoRecurso,
      }, logoBase64);
    } catch (err) {
      console.error("[pdfEmail] error generando PDF (intento", attempt, "):", err);
      await scheduleRetryOrGiveUp(ctx, args, attempt);
      return;
    }

    const text = `
${saludo}

Gracias por tu compra. Adjunto encontrarás el PDF de tu recurso de reposición, listo para firmar y presentar en la DGT o tu Ayuntamiento.

Expediente: ${args.expediente}

RecurreTuMulta.online
`.trim();

    const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tu recurso PDF está listo</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#dc2626;padding:24px 32px;text-align:center;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">RecurreTuMulta.online</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;line-height:1.2;">¡Pago confirmado!</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">Tu recurso PDF va adjunto en este correo</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0;font-size:15px;color:#111827;font-weight:700;">${saludo},</p>
            <p style="margin:10px 0 0;font-size:14px;color:#374151;line-height:1.7;">Gracias por tu compra. Hemos adjuntado el PDF de tu recurso de reposición, ya redactado y listo para firmar y presentar en la DGT o tu Ayuntamiento.</p>
            <div style="margin-top:16px;background:#fafafa;border:1px solid #f3f4f6;border-radius:12px;padding:12px 16px;">
              <p style="margin:0;font-size:12px;color:#6b7280;font-weight:600;">Expediente</p>
              <p style="margin:2px 0 0;font-size:14px;color:#111827;font-weight:700;">${expediente}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f3f4f6;text-align:center;">
            <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.5;">RecurreTuMulta.online · Este correo es informativo y no sustituye asesoramiento jurídico profesional.</p>
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
        subject: `Tu recurso PDF está listo — RecurreTuMulta.online`,
        html,
        text,
        attachments: [
          {
            content: pdfBase64,
            filename: `recurso-dgt-${args.expediente.replace(/\s+/g, "-")}.pdf`,
            contentType: "application/pdf",
          },
        ],
        tags: [{ name: "tipo", value: "recurso-pdf-comprado" }],
      });
    } catch (err) {
      console.error("[pdfEmail] sendRecursoPdfEmail error (intento", attempt, "):", err);
      await scheduleRetryOrGiveUp(ctx, args, attempt);
    }
  },
});

type PdfEmailArgs = {
  to: string;
  nombre?: string;
  carta: string;
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  plazoRecurso: string;
  attempt?: number;
};

// Reintenta el envío hasta MAX_EMAIL_ATTEMPTS veces. Si se agotan los intentos,
// deja un registro claro para que el equipo pueda reenviar el PDF manualmente.
async function scheduleRetryOrGiveUp(
  ctx: ActionCtx,
  args: PdfEmailArgs,
  attempt: number,
): Promise<void> {
  if (attempt < MAX_EMAIL_ATTEMPTS) {
    await ctx.scheduler.runAfter(RETRY_DELAY_MS, internal.pdfEmail.sendRecursoPdfEmail, {
      ...args,
      attempt: attempt + 1,
    });
  } else {
    console.error(
      "[pdfEmail] ENVÍO FALLIDO tras",
      MAX_EMAIL_ATTEMPTS,
      "intentos. Requiere reenvío manual del PDF a:",
      args.to,
      "expediente:",
      args.expediente,
    );
  }
}
