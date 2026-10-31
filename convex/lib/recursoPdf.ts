// Constructor ÚNICO del PDF del recurso (lo usan la descarga de la web y el correo tras el pago).
// Recibe el constructor de jsPDF para no cargar la librería donde no hace falta.
// Es síncrono, no hace red y limpia los caracteres que las fuentes estándar de PDF no pueden pintar
// (antes un carácter raro daba un PDF con símbolos rotos o un error al generar).
import type { jsPDF as JsPDFClass } from "jspdf";

export type DatosPdf = { expediente?: string; importe?: string; infraccion?: string; fecha?: string; plazoRecurso?: string };
export type OpcionesPdf = { logoBase64?: string | null; tipo?: "alegaciones" | "recurso" };

const CP1252_EXTRA = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ";

/** Deja solo caracteres representables en WinAnsi (las fuentes helvetica de PDF). */
export function sanearParaPdf(t: string): string {
  return (t ?? "")
    .normalize("NFC")
    .replace(/[\u00A0\u2007\u202F]/g, " ")
    .replace(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, "")
    .replace(/[“”«»„]/g, '"').replace(/[‘’‚`´]/g, "'")
    .replace(/[‐‑‒]/g, "-").replace(/…/g, "...")
    .replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/→/g, "->").replace(/←/g, "<-").replace(/[✓✔]/g, "").replace(/\t/g, "    ")
    .replace(/\r/g, "")
    .replace(/[^\n\u0020-\u007E\u00A1-\u00FF]/gu, (c) => (CP1252_EXTRA.includes(c) ? c : ""));
}

export function tipoDeEscrito(carta: string, tipo?: OpcionesPdf["tipo"]): "alegaciones" | "recurso" {
  if (tipo) return tipo;
  return /ALEGACIONES/i.test(carta.slice(0, 400)) ? "alegaciones" : "recurso";
}

const MAX_CARTA = 60_000; // caracteres: más allá algo va mal y el PDF tardaría

export function construirPdfRecurso(JsPDF: typeof JsPDFClass, cartaOriginal: string, datos: DatosPdf = {}, opt: OpcionesPdf = {}) {
  const carta = sanearParaPdf(cartaOriginal).slice(0, MAX_CARTA);
  const doc = new JsPDF({ unit: "mm", format: "a4" });
  const margin = 20, pageW = 210, pageH = 297, usableW = pageW - margin * 2, bottom = pageH - 22;
  const titulo = tipoDeEscrito(carta, opt.tipo) === "alegaciones" ? "ESCRITO DE ALEGACIONES" : "RECURSO DE REPOSICIÓN";
  let y = margin;

  const nuevaPagina = () => { doc.addPage(); y = margin; };
  const escribe = (texto: string, size: number, bold = false, color: [number, number, number] = [20, 20, 20], paso = size * 0.45) => {
    doc.setFontSize(size); doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setTextColor(color[0], color[1], color[2]);
    const lineas = doc.splitTextToSize(texto, usableW) as string[];
    for (const l of lineas) { if (y > bottom) nuevaPagina(); doc.text(l, margin, y); y += paso; }
  };

  // Cabecera
  doc.setFillColor(220, 38, 38); doc.rect(0, 0, pageW, 12, "F");
  doc.setFontSize(9); doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold");
  doc.text(sanearParaPdf(titulo), pageW / 2, 8, { align: "center" });
  y = 22;
  let conLogo = false;
  if (opt.logoBase64) { try { doc.addImage(`data:image/png;base64,${opt.logoBase64}`, "PNG", margin, y - 4, 14, 14); conLogo = true; } catch { /* sin logo */ } }
  doc.setFontSize(16); doc.setFont("helvetica", "bold"); doc.setTextColor(220, 38, 38);
  doc.text(sanearParaPdf(titulo), conLogo ? margin + 18 : margin, y + 6);
  y += 14;
  if (datos.expediente) { escribe(`Expediente: ${sanearParaPdf(datos.expediente)}`, 10, false, [100, 100, 100]); }
  y += 2; doc.setDrawColor(220, 38, 38); doc.setLineWidth(0.5); doc.line(margin, y, pageW - margin, y); y += 6;

  // Cuadro de datos (cada valor puede ocupar varias líneas; antes se cortaba a 40 caracteres)
  const filas: [string, string | undefined][] = [["Infracción", datos.infraccion], ["Importe", datos.importe], ["Fecha", datos.fecha], ["Plazo", datos.plazoRecurso]];
  const visibles = filas.filter(([, v]) => v && v.trim() && !/^no (consta|encontrad|especificad|aplica)/i.test(v.trim()));
  if (visibles.length) {
    doc.setFontSize(8.5);
    const bloques = visibles.map(([k, v]) => ({ k, l: (doc.splitTextToSize(sanearParaPdf(v!), usableW - 34) as string[]).slice(0, 4) }));
    const alto = bloques.reduce((n, b) => n + b.l.length * 4 + 1.5, 0) + 6;
    if (y + alto > bottom) nuevaPagina();
    doc.setFillColor(252, 245, 245); doc.roundedRect(margin, y, usableW, alto, 3, 3, "F");
    let by = y + 6;
    for (const b of bloques) {
      doc.setFont("helvetica", "bold"); doc.setTextColor(80, 80, 80); doc.text(`${b.k}:`, margin + 4, by);
      doc.setFont("helvetica", "normal");
      b.l.forEach((l, i) => doc.text(l, margin + 30, by + i * 4));
      by += b.l.length * 4 + 1.5;
    }
    y += alto + 6;
  }

  // Cuerpo: títulos en MAYÚSCULAS en negrita, resto normal
  for (const parrafo of carta.split("\n")) {
    const p = parrafo.trimEnd();
    if (!p.trim()) { y += 2.5; continue; }
    const esTitulo = p.length < 60 && p === p.toUpperCase() && /[A-ZÁÉÍÓÚÑ]{4}/.test(p);
    escribe(p, 10.5, esTitulo, [20, 20, 20], 5.2);
  }

  // Pie en todas las páginas
  const n = doc.getNumberOfPages();
  for (let i = 1; i <= n; i++) {
    doc.setPage(i); doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(120, 120, 120);
    doc.text("Documento generado por RecurreTuMulta.online. Solo orientativo; no sustituye al asesoramiento jurídico profesional.", pageW / 2, pageH - 12, { align: "center" });
    doc.text(`Página ${i} de ${n}`, pageW / 2, pageH - 8, { align: "center" });
  }
  return doc;
}
