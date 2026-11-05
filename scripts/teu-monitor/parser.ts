// Parser del Suplemento de Notificaciones (TEU) del BOE: anuncios de Tráfico.
// Regla de oro: NUNCA inventar. Si un campo no se extrae, va como FALTA.

export const FALTA = "FALTA" as const;
export type Campo = string | typeof FALTA;

export interface AnuncioIndice {
  id: string;          // BOE-N-AAAA-NNNNNN
  titulo: string;
  urlPdf: string;
}

export interface MultaTEU {
  anuncioId: string;
  expediente: Campo;
  matricula: Campo;
  dni: Campo;          // tal y como sale (a menudo enmascarado por el BOE)
  organismo: Campo;
  fechaPublicacion: Campo; // AAAA-MM-DD
  plazoHasta: Campo;   // AAAA-MM-DD (20 días naturales desde el día siguiente)
  importe: Campo;
  faltan: string[];
}

const MATRICULA = /\b(\d{4}\s?[BCDFGHJKLMNPRSTVWXYZ]{3}|[A-Z]{1,2}\s?\d{4}\s?[A-Z]{1,2})\b/;
const DNI = /(?<![0-9A-Z*])([0-9*]{8}[A-Z*]|[XYZ][0-9*]{7}[A-Z*])(?![0-9A-Z*])/;

export function urlIndiceTEU(fecha: string): string {
  const [y, m, d] = [fecha.slice(0, 4), fecha.slice(4, 6), fecha.slice(6, 8)];
  return `https://www.boe.es/boe_n/dias/${y}/${m}/${d}/index.php?l=N`;
}

const limpiar = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

/** Anuncios de tráfico (sancionadores) del índice HTML diario del TEU. */
export function anunciosTraficoDelIndice(html: string): AnuncioIndice[] {
  const out: AnuncioIndice[] = [];
  const re = /<li class="notif">\s*<p>([\s\S]*?)<\/p>[\s\S]*?href="([^"]*not\.php\?id=(BOE-N-\d{4}-\d+))"/g;
  for (const m of html.matchAll(re)) {
    const titulo = limpiar(m[1]);
    if (!/tr[aá]fico/i.test(titulo) || !/sancionador|sanci[oó]n/i.test(titulo)) continue;
    out.push({ id: m[3], titulo, urlPdf: new URL(m[2], "https://www.boe.es").toString() });
  }
  return out;
}

export function sumarDiasNaturales(iso: string, dias: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
}

const MESES: Record<string, string> = { enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06", julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12" };

function fechaPublicacion(texto: string): Campo {
  const m = texto.match(/(?:Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo)\s+(\d{1,2})\s+de\s+([a-záéíóú]+)\s+de\s+(\d{4})/i);
  if (!m || !MESES[m[2].toLowerCase()]) return FALTA;
  return `${m[3]}-${MESES[m[2].toLowerCase()]}-${m[1].padStart(2, "0")}`;
}

function organismo(texto: string): Campo {
  const m = texto.match(/procedimientos?\s+sancionador(?:es)?\s+de\s+la\s+([\s\S]{5,120}?)\./i);
  if (m) return limpiar(m[1]);
  const j = texto.match(/(JEFATURA (?:PROVINCIAL|CENTRAL) DE TR[ÁA]FICO[A-ZÁÉÍÓÚÑ ]*)/);
  return j ? limpiar(j[1]) : FALTA;
}

/** Texto de pdftotext -layout de un anuncio → una MultaTEU por fila de la tabla. */
export function parsearAnuncio(anuncioId: string, texto: string): MultaTEU[] {
  const pub = fechaPublicacion(texto);
  const org = organismo(texto);
  // Plazo: 20 días naturales contados desde el día siguiente a la publicación (art. 91 LTSV).
  const plazo: Campo = pub === FALTA || !/veinte d[ií]as naturales/i.test(texto) ? FALTA : sumarDiasNaturales(pub, 20);
  const filas = texto.split("\n").filter((l) => /^\s*\d{9,14}\s/.test(l));
  return filas.map((l) => {
    const expediente = l.trim().split(/\s+/)[0];
    const mat = l.match(MATRICULA)?.[1]?.replace(/\s/g, "");
    const dni = l.replace(expediente, "").match(DNI)?.[1];
    const imp = l.match(/\s(\d{2,5})\s{2,}(?:RDL|RD|LEY|ORD)/i)?.[1];
    const r: MultaTEU = {
      anuncioId, expediente,
      matricula: mat ?? FALTA, dni: dni ?? FALTA, organismo: org,
      fechaPublicacion: pub, plazoHasta: plazo, importe: imp ? `${imp} €` : FALTA, faltan: [],
    };
    r.faltan = (["matricula", "dni", "organismo", "fechaPublicacion", "plazoHasta", "importe"] as const).filter((k) => r[k] === FALTA);
    return r;
  });
}

export interface Suscriptor { id: string; matriculas: string[]; dni?: string; whatsapp: string }
export interface Coincidencia { suscriptorId: string; multa: MultaTEU; por: "matricula" | "dni" }

const norm = (s: string) => s.toUpperCase().replace(/[\s-]/g, "");

/** DNI enmascarado del BOE (***1234**) coincide si los dígitos visibles cuadran. */
export function dniCompatible(publicado: string, real: string): boolean {
  const p = norm(publicado), r = norm(real);
  if (p.length !== r.length || !/[0-9A-Z]/.test(p.replace(/\*/g, ""))) return false;
  const visibles = [...p].filter((c) => c !== "*").length;
  if (visibles < 4) return false; // demasiado enmascarado: no afirmamos nada
  return [...p].every((c, i) => c === "*" || c === r[i]);
}

export function cruzar(multas: MultaTEU[], subs: Suscriptor[]): Coincidencia[] {
  const out: Coincidencia[] = [];
  for (const m of multas) for (const s of subs) {
    if (m.matricula !== FALTA && s.matriculas.some((x) => norm(x) === norm(m.matricula))) out.push({ suscriptorId: s.id, multa: m, por: "matricula" });
    else if (m.dni !== FALTA && s.dni && dniCompatible(m.dni, s.dni)) out.push({ suscriptorId: s.id, multa: m, por: "dni" });
  }
  return out;
}
