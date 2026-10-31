// Extracción DETERMINISTA de los datos de una multa (31/10/2026, rama analizador-3110).
// Sin IA: solo reglas sobre el texto del PDF o la transcripción de la imagen.
//   1) `extraerDeterminista` lee los campos por etiqueta (formularios de Madrid, boletines
//      de DGT, denuncias municipales, fotogramas de radar).
//   2) `verificarContraTexto` comprueba que un valor que dio la IA aparece de verdad en el
//      documento. Si no aparece, es inventado y se descarta ("No consta").
// Todo son funciones puras: se prueban con vitest sin llamar a ningún servicio.

export const VACIO = /^(no (consta|encontrad[oa]|especificad[oa]|aplica|detectad[oa]|disponible)|desconocid[oa]|n\/?a|-+|)$/i;
export const esVacio = (v: unknown): boolean => typeof v !== "string" || VACIO.test(v.trim());

export type DatosExtraidos = {
  expediente?: string;
  matricula?: string;
  fecha?: string; // dd/mm/aaaa
  hora?: string; // hh:mm
  lugar?: string;
  importe?: string; // "100,00 €"
  importeReducido?: string;
  puntos?: string; // "0", "2"... (solo si el documento lo dice)
  calificacion?: "leve" | "grave" | "muy grave";
  precepto?: string;
  velocidadDetectada?: string; // "68 km/h"
  limiteVia?: string;
  tipoRadar?: "fijo" | "movil";
  fechaApertura?: string;
  fechaNotificacion?: string; // fecha de notificación o, si solo consta, la de emisión
  fechaNotificacionEsEmision?: boolean;
  organo?: string;
  provincia?: string;
  tipoDocumento?: "denuncia" | "resolucion";
  esFotograma?: boolean;
};

const MES = "(?:0?[1-9]|1[0-2])";
const FECHA_RE = new RegExp(`\\b(0?[1-9]|[12]\\d|3[01])\\s*[/.\\-]\\s*(${MES})\\s*[/.\\-]\\s*((?:20)?\\d{2})\\b`);
const FECHA_G = new RegExp(FECHA_RE.source, "g");

/** Normaliza cualquier fecha encontrada a dd/mm/aaaa (o undefined si no es válida). */
export function normalizarFecha(s?: string): string | undefined {
  const m = FECHA_RE.exec(s ?? "");
  if (!m) return undefined;
  const d = Number(m[1]), mo = Number(m[2]);
  const y = Number(m[3].length === 2 ? `20${m[3]}` : m[3]);
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (dt.getUTCDate() !== d || dt.getUTCMonth() !== mo - 1) return undefined;
  return `${String(d).padStart(2, "0")}/${String(mo).padStart(2, "0")}/${y}`;
}
const aDate = (f?: string): Date | null => {
  const n = normalizarFecha(f);
  if (!n) return null;
  const [d, m, y] = n.split("/").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};

const compactar = (t: string) => t.replace(/\s+/g, " ");
const soloAlfanum = (s: string) => s.toUpperCase().replace(/[^0-9A-Z]/g, "");

// ── Expediente ──────────────────────────────────────────────────────────────
// Madrid "911/123456789.4", DGT "28-045-123.456-7" o 12 cifras, municipios "2026/VLC/558812",
// "SEV-2026-0091123", "EXP-2026-1234"...
export function extraerExpediente(t: string): string | undefined {
  const ETQ = /(REFERENCIA DEL EXPEDIENTE|N[ºo°.]*\s*(?:DE\s+)?EXPEDIENTE|EXPEDIENTE\s*(?:NÚM(?:ERO)?\.?|N[ºo°.]*|SANCIONADOR)?|EXPTE\.?\s*(?:N[ºo°.]*)?|N[ºo°.]*\s*(?:DE\s+)?(?:BOLET[IÍ]N|DENUNCIA))\s*[:.\-]?\s*/gi;
  const VAL = /^((?:[A-Z]{1,5}[-\s]?)?\d[\dA-Z]*(?:[\/.\-][\dA-Z]+){0,6})/i;
  for (const m of t.matchAll(ETQ)) {
    const v = VAL.exec(t.slice(m.index! + m[0].length, m.index! + m[0].length + 60))?.[1]?.trim().replace(/[.\-\/\s]+$/, "");
    if (v && v.replace(/\D/g, "").length >= 5 && !/^\d{2}[\/-]\d{2}[\/-]\d{4}$/.test(v)) return v.replace(/\s+/g, " ");
  }
  return /\b(\d{3}\/\d{6,12}\.\d)\b/.exec(t)?.[1];
}

// ── Matrícula ───────────────────────────────────────────────────────────────
const MATRICULA_NUEVA = /\b(\d{4})\s?([BCDFGHJKLMNPRSTVWXYZ]{3})\b/;
export function extraerMatricula(t: string): string | undefined {
  const etq = /(MATR[IÍ]CULA|VEH[IÍ]CULO)\s*[:|]?\s*/gi;
  for (const m of t.matchAll(etq)) {
    const ventana = t.slice(m.index!, m.index! + 120);
    const n = MATRICULA_NUEVA.exec(ventana);
    if (n) return `${n[1]} ${n[2]}`;
    const v = /\b([A-Z]{1,2})[-\s]?(\d{4})[-\s]?([A-Z]{1,3})\b/.exec(ventana.replace(/^\S+\s*[:|]?\s*/, ""));
    if (v && !/^(KM|PK|DNI|NIF|CP)$/.test(v[1] + v[3])) return `${v[1]}-${v[2]}-${v[3]}`;
  }
  const n = MATRICULA_NUEVA.exec(t);
  return n ? `${n[1]} ${n[2]}` : undefined;
}

// ── Velocidad / límite ──────────────────────────────────────────────────────
export function extraerVelocidad(t: string): { v?: string; lim?: string } {
  const c = compactar(t);
  const v = /(?:CIRCULA(?:R|BA|NDO)?\s+A|VELOCIDAD\s+(?:DETECTADA|MEDIDA|REGISTRADA|CINEM[OÓ]METRO|CORREGIDA)?\s*[:=]?|\bV\s*=)\s*(\d{2,3})\s*km\s*\/?\s*h/i.exec(c)
    ?? /\b(\d{2,3})\s*km\s*\/?\s*h\b/i.exec(c);
  if (!v) return {};
  const antes = c.slice(0, v.index + v[0].length);
  const despues = c.slice(v.index + v[0].length, v.index + v[0].length + 140);
  const lim = /(?:L[IÍ]MITE(?:\s+DE)?(?:\s+VELOCIDAD)?|LIMITAD[AO](?:\s+LA\s+VELOCIDAD)?(?:\s+A)?|M[AÁ]XIMA(?:\s+PERMITIDA)?|PERMITIDA)\s*(?:EN\s+LA\s+V[IÍ]A)?\s*[:=]?\s*(?:A\s+)?(\d{2,3})\b/i.exec(despues)
    ?? /(?:L[IÍ]MITE|LIMITAD[AO])[^\d]{0,40}(\d{2,3})\b/i.exec(antes.slice(-120));
  const vn = Number(v[1]);
  const ln = lim ? Number(lim[1]) : undefined;
  if (vn < 20 || vn > 300) return {};
  return { v: `${vn} km/h`, lim: ln && ln >= 10 && ln <= 130 && ln < vn ? `${ln} km/h` : undefined };
}

export function extraerTipoRadar(t: string): "fijo" | "movil" | undefined {
  const c = compactar(t);
  const m = /(?:cinem[oó]metro|radar|medio\s+de\s+captaci[oó]n|equipo|c[aá]mara)[^.|\n]{0,50}?\b(fij[oa]|m[oó]vil|port[aá]til|tr[ií]pode|embarcad[oa])\b/i.exec(c);
  if (m) return /fij/i.test(m[1]) ? "fijo" : "movil";
  if (/VELOCIDAD MEDIA|TRAMO CONTROLADO|CONTROL DE TRAMO/i.test(c)) return "fijo"; // control de tramo: equipo fijo
  return undefined;
}

// ── Importes ────────────────────────────────────────────────────────────────
const NUM_EUR = /(\d{1,4}(?:[.,]\d{1,2})?)\s*(?:€|EUR\b|euros?\b)/gi;
const aNum = (s: string) => Number(s.replace(/\./g, (m, i, all) => (/\.\d{3}\b/.test(all.slice(i)) ? "" : m)).replace(",", "."));
const fmtEuros = (n: number) => `${n.toFixed(2).replace(".", ",")} €`;
export function extraerImportes(texto: string): { importe?: string; reducido?: string } {
  const c = compactar(texto);
  // 1) Formularios: "IMPORTE DE LA MULTA  IMPORTE REDUCIDO ... | 100,00 | 50,00"
  const f = /IMPORTE\s+DE\s+LA\s+(?:MULTA|SANCI[OÓ]N)\s+IMPORTE\s+REDUCIDO/i.exec(c);
  if (f) {
    const d = [...c.slice(f.index + f[0].length, f.index + f[0].length + 260).matchAll(/(?<![\d,.\/])(\d{1,4}[.,]\d{2})(?![\d\/])/g)].map((m) => aNum(m[1]));
    if (d.length >= 1) return { importe: fmtEuros(d[0]), reducido: d[1] && Math.abs(d[1] - d[0] / 2) < 0.51 ? fmtEuros(d[1]) : undefined };
  }
  // 2) Línea a línea: importe en líneas de "sanción/importe/multa" y reducido en las de "reducción/pronto pago".
  let importe: number | undefined, reducido: number | undefined;
  for (const linea of texto.split("\n")) {
    const euros = [...linea.matchAll(NUM_EUR)].map((m) => aNum(m[1]));
    if (!euros.length) continue;
    if (/reducci[oó]n|reducid[oa]|pronto pago/i.test(linea)) reducido ??= euros[euros.length - 1];
    else if (/sanci[oó]n|importe|multa|cuant[ií]a|euros? de multa/i.test(linea)) importe ??= euros[0];
  }
  if (importe == null) {
    const i = /(?:IMPORTE|SANCI[OÓ]N|MULTA|CUANT[IÍ]A)[^\d\n]{0,40}?(\d{1,4}(?:[.,]\d{2})?)(?!\s*%)/i.exec(c);
    if (i) importe = aNum(i[1]);
  }
  return { importe: importe != null ? fmtEuros(importe) : undefined, reducido: reducido != null ? fmtEuros(reducido) : undefined };
}

// ── Fechas por etiqueta ─────────────────────────────────────────────────────
function primeraFechaTras(c: string, etq: RegExp, ventana = 140): string | undefined {
  const m = etq.exec(c);
  if (!m) return undefined;
  const resto = c.slice(m.index + m[0].length, m.index + m[0].length + ventana);
  const f = FECHA_G.exec(resto); FECHA_G.lastIndex = 0;
  return f ? normalizarFecha(f[0]) : undefined;
}

export function extraerFechaInfraccion(texto: string): { fecha?: string; hora?: string } {
  const c = compactar(texto);
  const NO_ES = "(?!\\s+(?:de\\s+)?(?:la\\s+|esta\\s+)?(?:apertura|emisi|notific|resoluci|incoaci|firma|pago|vencim|control|expedici|consulta|impresi|nacimiento|caducidad|validez|verific|registro|recep))";
  const etq = new RegExp(`FECHA(?:\\s*(?:Y|/)\\s*HORA)?(?:\\s+DE)?(?:\\s+LA|\\s+LOS)?\\s*(?:INFRACCI[OÓ]N|DENUNCIA|HECHOS?|COMISI[OÓ]N)${NO_ES}\\s*[:|]?\\s*`, "i");
  const etq2 = new RegExp(`FECHA\\s*(?:Y|/)\\s*HORA${NO_ES}\\s*[:|]?\\s*`, "i");
  for (const e of [etq, etq2]) {
    const m = e.exec(c);
    if (!m) continue;
    const resto = c.slice(m.index + m[0].length, m.index + m[0].length + 90);
    const fm = FECHA_RE.exec(resto);
    if (fm) {
      const fecha = normalizarFecha(fm[0]);
      const tras = resto.slice(fm.index + fm[0].length, fm.index + fm[0].length + 24);
      const h = /^\s*[,.]?\s*(?:a las\s+)?(\d{1,2})[:.](\d{2})/.exec(tras);
      return { fecha, hora: h ? `${h[1].padStart(2, "0")}:${h[2]}` : horaCerca(c) };
    }
  }
  // Fotograma / formularios sin etiqueta: primera "fecha + hora".
  const fh = new RegExp(`${FECHA_RE.source}[ ,]+(?:a las\\s+)?(\\d{1,2})[:.](\\d{2})`).exec(c);
  if (fh) return { fecha: normalizarFecha(fh[0]), hora: `${fh[4].padStart(2, "0")}:${fh[5]}` };
  return { fecha: undefined, hora: horaCerca(c) };
}
function horaCerca(c: string): string | undefined {
  const h = /\bHORA\s*[:|]?\s*(\d{1,2})[:.](\d{2})/i.exec(c);
  return h ? `${h[1].padStart(2, "0")}:${h[2]}` : undefined;
}

export function extraerFechasNotificacion(texto: string): { notificacion?: string; emision?: string; apertura?: string } {
  const c = compactar(texto);
  return {
    // "FECHA DE NOTIFICACIÓN" sola; la de la boleta de pago ("fecha control", "vencimiento") no se usa nunca.
    notificacion: primeraFechaTras(c, /FECHA\s+DE\s+(?:LA\s+)?NOTIFICACI[OÓ]N(?:\s+DE\s+LA\s+DENUNCIA)?\s*[:|]?\s*/i, 40),
    emision: primeraFechaTras(c, /FECHA\s+DE\s+EMISI[OÓ]N\s+DE\s+LA\s+NOTIFICACI[OÓ]N\s*/i, 200),
    apertura: primeraFechaTras(c, /FECHA\s+DE\s+APERTURA\s+DEL\s+EXPEDIENTE\s*/i, 200),
  };
}

// ── Calificación, precepto, puntos ──────────────────────────────────────────
export function extraerCalificacion(texto: string): "leve" | "grave" | "muy grave" | undefined {
  const c = compactar(texto);
  const m = /CALIFICACI[OÓ]N[^\n]{0,100}?\b(MUY\s+GRAVE|GRAVE|LEVE)\b/i.exec(c);
  const r = m?.[1]?.toLowerCase().replace(/\s+/g, " ");
  return r === "muy grave" || r === "grave" || r === "leve" ? r : undefined;
}

export function extraerPrecepto(texto: string): string | undefined {
  const c = compactar(texto);
  const etq = /PRECEPTOS?\s+(?:INFRINGIDOS?|APLICABLES?)\s*\*?\s*[:|]?\s*/i.exec(c);
  const ventana = etq ? c.slice(etq.index + etq[0].length, etq.index + etq[0].length + 200) : c;
  const re = /(?:art(?:[ií]culos?|s?\.)?\s*)?(\d{1,3}(?:\.\d{1,2})?(?:\.?[A-Za-z]\)?)?)\s+(LSV|RGC|LTSV|RDL\s*6\/2015)\b/gi;
  const hallados: string[] = [];
  for (const m of ventana.matchAll(re)) {
    const f = `art. ${m[1].replace(/\)$/, "").replace(/\.?([A-Za-z])$/, (_, l: string) => `.${l.toLowerCase()}`)} ${m[2].toUpperCase().replace(/\s+/g, " ")}`;
    if (!hallados.includes(f)) hallados.push(f);
    if (etq && hallados.length >= 3) break;
  }
  if (hallados.length) return hallados.join(", ");
  const o = /(Ordenanza[^.\n]{0,80}?art(?:[ií]culo|\.)?\s*\d+(?:\.\d+)?)/i.exec(c);
  return o?.[1]?.trim();
}

export function extraerPuntos(texto: string): string | undefined {
  const c = compactar(texto);
  const f = /P[ÉE]RDIDA\s+DE\s+PUNTOS\s*[:|]?\s*(?:\d{1,2}[/.\-]\d{1,2}[/.\-]\d{2,4}\s+\d{1,2}[:.]\d{2}\s*)?(NO|S[IÍ]|\d{1,2})\b(?!\s*[/.\-]\d)/i.exec(c);
  if (f) return /^no$/i.test(f[1]) ? "0" : /^s[ií]$/i.test(f[1]) ? undefined : f[1];
  const a = /PUNTOS\s+A\s+DETRAER\s*[:\-]?\s*(\d{1,2})\b/i.exec(c) ?? /(?:detracci[oó]n|p[eé]rdida)\s+de\s+(\d{1,2})\s+puntos/i.exec(c) ?? /\by\s+(\d{1,2})\s+puntos\b/i.exec(c) ?? /\bPUNTOS?\s*[:=]\s*(\d{1,2})\b/i.exec(c);
  return a?.[1];
}

// ── Órgano, provincia, lugar ────────────────────────────────────────────────
const NOMBRE = "[A-ZÁÉÍÓÚÑ][\\wáéíóúñü'.-]+(?:\\s+(?:de|del|la|las|los|el|y)?\\s*[A-ZÁÉÍÓÚÑ][\\wáéíóúñü'.-]+){0,2}";
/** "AYUNTAMIENTO DE VALENCIA" → "Ayuntamiento de Valencia" (para poder buscar nombres propios). */
function aTitulo(c: string): string {
  const CON = new Set(["de", "del", "la", "las", "los", "el", "y", "en"]);
  return c.split(" ").map((w) => {
    const m = /^([^A-Za-zÁÉÍÓÚÑáéíóúñ]*)([A-ZÁÉÍÓÚÑ]{2,})(.*)$/.exec(w);
    if (!m) return w;
    const low = m[2].toLowerCase();
    return m[1] + (CON.has(low) ? low : low[0].toUpperCase() + low.slice(1)) + m[3];
  }).join(" ");
}

export function extraerOrganoProvincia(texto: string): { organo?: string; provincia?: string } {
  const c = aTitulo(compactar(texto));
  const lim = (s: string) => s.replace(/\s+(?:ha|que|con|y|para|por)$/i, "").trim();
  const etiq = /[ÓO]RGANO\s+(?:COMPETENTE|SANCIONADOR|INSTRUCTOR)?\s*[:]\s*([^.|\n]{4,90})/i.exec(texto)?.[1];
  const jefat = new RegExp(`(Jefatura\\s+Provincial\\s+de\\s+(?:Tr[aá]fico\\s+de\\s+)?${NOMBRE})`).exec(c)?.[1];
  const ayto = new RegExp(`(Ayuntamiento\\s+de\\s+${NOMBRE})`).exec(c)?.[1];
  const alc = new RegExp(`(Alcald[ií]a\\s+de\\s+${NOMBRE})`).exec(c)?.[1];
  const policia = new RegExp(`(Polic[ií]a\\s+Local\\s+de\\s+${NOMBRE})`).exec(c)?.[1];
  const instr = /(?:dirigido\s+al?|dirigirse\s+al?|Jefe\s+del)\s+((?:Servicio|Departamento|Negociado|Unidad)\s+[^.,|]{3,70})/i.exec(c)?.[1];
  const central = /(Jefatura\s+Central\s+de\s+Tr[aá]fico)/.exec(c)?.[1];
  const dgt = /(Direcci[oó]n\s+General\s+de\s+Tr[aá]fico)/.exec(c)?.[1];
  let organo = etiq ? lim(etiq) : jefat ? lim(jefat) : alc ?? policia ?? ayto ?? dgt ?? central;
  if (!etiq && instr && ayto && !jefat) organo = `${lim(instr)} (${lim(ayto)})`;
  const PROV = new RegExp(`(?:Ayuntamiento|Alcald[ií]a|Jefatura\\s+Provincial(?:\\s+de\\s+Tr[aá]fico)?|Jefe\\s+Provincial\\s+de\\s+Tr[aá]fico|Polic[ií]a\\s+Local)\\s+de\\s+(${NOMBRE})`);
  const prov = PROV.exec(aTitulo(organo ?? ""))?.[1] ?? PROV.exec(c)?.[1];
  const limpia = (p: string) => lim(p).replace(/\s+(?:Direcci[oó]n|Delegaci[oó]n|Concejal[ií]a|Polic[ií]a|Servicio|Departamento)\b.*$/, "");
  return { organo, provincia: prov ? limpia(prov) : undefined };
}

export function extraerLugar(texto: string): string | undefined {
  const lineas = texto.split("\n");
  const FIN = /\s+(?:Veh[ií]culo|Matr[ií]cula|Fecha|Hecho|Precepto|Titular|Hora|Importe|Medio|Sanci[oó]n)\b.*$/i;
  for (let i = 0; i < lineas.length; i++) {
    const l = lineas[i];
    const m = /\bLUGAR(?:\s+DE\s+LA\s+INFRACCI[OÓ]N|\s+DE\s+LOS\s+HECHOS)?\s*[:]\s*(.{4,160})$/i.exec(l);
    if (m) return m[1].replace(FIN, "").replace(/\s+\|.*$/, "").trim().replace(/[.,;]+$/, "") || undefined;
    // Formularios (Madrid): la etiqueta va con fechas/otros campos y el valor es la 1ª celda de la línea siguiente.
    if (/^\s*LUGAR\s+DE\s+LA\s+INFRACCI[OÓ]N\b/i.test(l) && lineas[i + 1]) {
      const celda = lineas[i + 1].split("|")[0].trim();
      if (celda.length >= 4 && !/\b(IMPORTE|REFERENCIA|FECHA|DESTINATARIO|NOTIFICACI|PRECEPTO|CALIFICACI)\b/i.test(celda)) return celda;
    }
  }
  return undefined;
}

export function extraerTipoDocumento(texto: string): "denuncia" | "resolucion" | undefined {
  const ini = compactar(texto).slice(0, 700);
  if (/RESOLUCI[OÓ]N\s+(?:SANCIONADORA|DEL\s+PROCEDIMIENTO|DE\s+LA\s+ALCALD)/i.test(ini)) return "resolucion";
  if (/DENUNCIA|BOLET[IÍ]N|PROPUESTA\s+DE\s+RESOLUCI|INICIO\s+(?:DEL\s+)?(?:PROCEDIMIENTO|EXPEDIENTE)|NOTIFICACI[OÓ]N/i.test(ini)) return "denuncia";
  return undefined;
}

export function esFotogramaRadar(texto: string): boolean {
  const c = compactar(texto);
  return /TIPO_IMAGEN:\s*fotograma/i.test(c) || (/V\s*=\s*\d{2,3}\s*km\/?h/i.test(c) && !/expediente|importe|sanci[oó]n|denuncia/i.test(c));
}

// ── Orquestador ─────────────────────────────────────────────────────────────
export function extraerDeterminista(texto: string): DatosExtraidos {
  const t = texto ?? "";
  const c = compactar(t);
  const out: DatosExtraidos = {};
  const set = <K extends keyof DatosExtraidos>(k: K, v: DatosExtraidos[K] | undefined) => { if (v != null && v !== "") out[k] = v; };
  const exp = extraerExpediente(c);
  set("expediente", exp);
  set("matricula", extraerMatricula(t));
  const { fecha, hora } = extraerFechaInfraccion(t);
  set("fecha", fecha); set("hora", hora);
  set("lugar", extraerLugar(t));
  const imp = extraerImportes(t);
  set("importe", imp.importe); set("importeReducido", imp.reducido);
  set("puntos", extraerPuntos(t));
  set("calificacion", extraerCalificacion(t));
  set("precepto", extraerPrecepto(t));
  const vel = extraerVelocidad(t);
  set("velocidadDetectada", vel.v); set("limiteVia", vel.lim);
  set("tipoRadar", extraerTipoRadar(t));
  const f = extraerFechasNotificacion(t);
  set("fechaApertura", f.apertura);
  if (f.notificacion) set("fechaNotificacion", f.notificacion);
  else if (f.emision) { set("fechaNotificacion", f.emision); out.fechaNotificacionEsEmision = true; }
  const op = extraerOrganoProvincia(t);
  set("organo", op.organo); set("provincia", op.provincia);
  set("tipoDocumento", extraerTipoDocumento(t));
  if (esFotogramaRadar(t)) out.esFotograma = true;
  return out;
}

// ── Comprobar valores de la IA contra el texto ──────────────────────────────
export type Verificacion = { ok: boolean; motivo?: string };

/** ¿Aparece este valor (del campo indicado) literalmente en el documento? */
export function verificarContraTexto(campo: string, valor: string, texto: string): Verificacion {
  const v = (valor ?? "").trim();
  if (VACIO.test(v)) return { ok: true };
  const c = compactar(texto);
  const A = soloAlfanum(c);
  switch (campo) {
    case "expediente": case "matricula": return { ok: A.includes(soloAlfanum(v)) || v.length < 4, motivo: "no aparece en el documento" };
    case "fecha": case "fechaNotificacion": case "fechaApertura": {
      const n = normalizarFecha(v); if (!n) return { ok: false, motivo: "fecha no válida" };
      const [d, m, y] = n.split("/");
      const re = new RegExp(`(?<!\\d)0?${Number(d)}\\s*[/.\\-]\\s*0?${Number(m)}\\s*[/.\\-]\\s*(?:20)?${y.slice(2)}(?!\\d)`);
      return { ok: re.test(c), motivo: "esa fecha no figura en el documento" };
    }
    case "importe": case "importeReducido": {
      const nums = [...v.matchAll(/\d+(?:[.,]\d+)?/g)].map((m) => m[0]);
      if (!nums.length) return { ok: false, motivo: "sin cifra" };
      const n = aNum(nums[0]);
      const ok = [...c.matchAll(/(?<![\d,.\/])(\d{1,4}(?:[.,]\d{1,2})?)(?![\d\/])/g)].some((m) => Math.abs(aNum(m[1]) - n) < 0.005);
      return { ok, motivo: "ese importe no figura en el documento" };
    }
    case "velocidadDetectada": case "limiteVia": {
      const n = /\d{2,3}/.exec(v)?.[0]; if (!n) return { ok: false };
      return { ok: new RegExp(`(?<!\\d)${n}(?!\\d)`).test(c), motivo: "esa cifra no figura en el documento" };
    }
    case "puntos": {
      const n = /\d+/.exec(v)?.[0]; if (n == null) return { ok: false };
      return { ok: n === "0" ? /(?:P[ÉE]RDIDA DE PUNTOS|PUNTOS A DETRAER|sin pérdida)/i.test(c) : new RegExp(`(?<!\\d)${n}\\s*puntos`, "i").test(c) || new RegExp(`PUNTOS[^\\d]{0,30}(?<!\\d)${n}(?!\\d)`, "i").test(c), motivo: "ese nº de puntos no figura" };
    }
    default: {
      // Texto libre (lugar, órgano, infracción, precepto): al menos el 60 % de sus palabras significativas están en el texto.
      const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const hay = norm(c);
      const pal = norm(v).split(/[^a-z0-9]+/).filter((w) => w.length >= 4);
      if (!pal.length) return { ok: true };
      const hallo = pal.filter((w) => hay.includes(w)).length;
      return { ok: hallo / pal.length >= 0.6, motivo: "no coincide con el documento" };
    }
  }
}

/** Sanidad de la fecha de notificación: no puede ser anterior a la infracción ni futura. */
export function fechaNotificacionCoherente(fechaInfraccion?: string, fechaNotif?: string, hoy = new Date()): boolean {
  const a = aDate(fechaInfraccion), b = aDate(fechaNotif);
  if (!b) return false;
  if (b.getTime() > hoy.getTime() + 86_400_000) return false;
  return !a || b.getTime() >= a.getTime();
}
