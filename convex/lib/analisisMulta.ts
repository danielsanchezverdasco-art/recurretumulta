// Lógica PURA del análisis de una multa (sin llamadas a la IA ni a Convex): concilia lo que
// dice la IA con lo que se lee de forma determinista, comprueba cada valor contra el texto del
// documento (anti-invención), aplica la normativa y da una valoración CUALITATIVA con motivos.
// No hay porcentajes: un % de "viabilidad" sería una precisión inventada.
import { evaluarPrescripcion, evaluarVelocidad, PLAZOS, type TipoRadar } from "./normativaTrafico";
import {
  esVacio, extraerDeterminista, fechaNotificacionCoherente, normalizarFecha, verificarContraTexto,
  type DatosExtraidos,
} from "./extraccionMulta";

export type Gravedad = "alta" | "media" | "baja";
export type Defecto = { titulo: string; descripcion: string; gravedad: Gravedad };
export type Nivel = "alta" | "media" | "baja" | "no_valorable";

export type AnalisisRaw = {
  tipoRadar?: TipoRadar;
  tipoDocumento?: "denuncia" | "resolucion" | "desconocido";
  fechaNotificacion?: string;
  fechaNotificacionEsEmision?: boolean;
  fechaApertura?: string;
  calificacion?: string;
  organo?: string;
  precepto?: string;
  puntos?: string;
  hora?: string;
  lugar?: string;
  importeReducido?: string;
  datosFaltantes?: string[];
  fundamentos?: string[];
  advertencias?: string[];
  nivel: Nivel;
  motivosNivel: string[];
  resumen: string;
  defectos: Defecto[];
  provincia: string;
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  plazoRecurso: string;
  matricula: string;
  velocidadDetectada: string;
  limiteVia: string;
};

const NO = {
  provincia: "No detectada", expediente: "No encontrado", importe: "No especificado", infraccion: "No especificada",
  fecha: "No especificada", matricula: "No encontrada", velocidadDetectada: "No aplica", limiteVia: "No aplica",
} as const;

const str = (x: unknown): string | undefined => (typeof x === "string" && x.trim() ? x.trim() : undefined);

/** Mensaje único cuando no hay nada útil que valorar. */
export const MENSAJE_ILEGIBLE = "No hemos podido leer el documento, prueba con una foto más nítida (o sube el PDF original).";

export type Contexto = { texto: string; esImagen?: boolean; hoy?: Date };

/** Convierte lo que devolvió la IA (JSON sin fiar) en un AnalisisRaw verificado. */
export function conciliar(ia: Record<string, unknown>, ctx: Contexto): AnalisisRaw {
  const texto = ctx.texto ?? "";
  const hoy = ctx.hoy ?? new Date();
  const det: DatosExtraidos = extraerDeterminista(texto);
  const advertencias: string[] = [];
  const descartados: string[] = [];

  /** Determinista manda; si no hay, el valor de la IA solo vale si figura en el documento. */
  const elegir = (campo: keyof DatosExtraidos & string, dato?: string): string | undefined => {
    const ai = str(ia[campo]);
    const aiOk = ai && !esVacio(ai) ? verificarContraTexto(campo, ai, texto) : undefined;
    if (dato) {
      // Expediente: si la IA lo dio más completo (mismo comienzo) y consta en el texto, vale.
      if (campo === "expediente" && ai && aiOk?.ok) {
        const d = (x: string) => x.replace(/\D/g, "");
        if (d(ai).length > d(dato).length && d(ai).startsWith(d(dato))) return ai;
      }
      if (ai && !esVacio(ai) && aiOk && !aiOk.ok) descartados.push(campo);
      return dato;
    }
    if (ai && !esVacio(ai)) {
      if (aiOk?.ok) return ai;
      descartados.push(campo);
    }
    return undefined;
  };

  const fecha = (() => {
    const f = elegir("fecha", det.fecha);
    const n = normalizarFecha(f);
    // La IA a veces toma la fecha de notificación/apertura por la de la infracción.
    if (!det.fecha && n && [det.fechaNotificacion, det.fechaApertura].includes(n)) return undefined;
    return n;
  })();

  // Fecha de notificación: etiqueta del documento; la de la IA solo si consta y es coherente.
  let fechaNotificacion = det.fechaNotificacion;
  let esEmision = det.fechaNotificacionEsEmision === true;
  if (fechaNotificacion && !fechaNotificacionCoherente(fecha, fechaNotificacion, hoy)) { fechaNotificacion = undefined; esEmision = false; descartados.push("fechaNotificacion"); }
  if (!fechaNotificacion) {
    const ai = normalizarFecha(str(ia.fechaNotificacion));
    if (ai && verificarContraTexto("fechaNotificacion", ai, texto).ok && fechaNotificacionCoherente(fecha, ai, hoy) && ai !== fecha) { fechaNotificacion = ai; esEmision = false; }
  }

  const expediente = elegir("expediente", det.expediente);
  const matricula = elegir("matricula", det.matricula)?.toUpperCase().replace(/^(\d{4})\s*([A-Z]{3})$/, "$1 $2");
  const importe = elegir("importe", det.importe);
  const velocidadDetectada = elegir("velocidadDetectada", det.velocidadDetectada);
  const limiteVia = elegir("limiteVia", det.limiteVia);
  const puntos = elegir("puntos", det.puntos);
  const lugar = elegir("lugar", det.lugar);
  const precepto = elegir("precepto", det.precepto);
  const organo = elegir("organo", det.organo);
  const provincia = elegir("provincia", det.provincia);
  const calIA = str(ia.calificacion)?.toLowerCase();
  const calificacion = det.calificacion ?? (calIA && /^(leve|grave|muy grave)$/.test(calIA) && new RegExp(calIA.replace(" ", "\\s+"), "i").test(texto) ? calIA : undefined);
  const tipoRadar: TipoRadar = det.tipoRadar ?? (ia.tipoRadar === "fijo" || ia.tipoRadar === "movil" ? (new RegExp(`\\b${ia.tipoRadar === "fijo" ? "fij[oa]" : "m[oó]vil"}`, "i").test(texto) ? (ia.tipoRadar as TipoRadar) : "desconocido") : "desconocido");
  const tipoDocumento = det.tipoDocumento ?? (ia.tipoDocumento === "denuncia" || ia.tipoDocumento === "resolucion" ? ia.tipoDocumento : "desconocido");

  // Hecho denunciado: texto de la IA solo si sus cifras figuran en el documento.
  const infIA = str(ia.infraccion);
  const cifrasOk = (s: string) => [...s.matchAll(/\d{2,}/g)].every((m) => new RegExp(`(?<!\\d)${m[0]}(?!\\d)`).test(texto));
  const infDet = velocidadDetectada && limiteVia ? `Exceso de velocidad: circular a ${velocidadDetectada} en una vía limitada a ${limiteVia}` : undefined;
  let infraccion = infIA && !esVacio(infIA) && cifrasOk(infIA) && verificarContraTexto("infraccion", infIA, texto).ok ? infIA : infDet;
  if (infIA && infraccion !== infIA && !esVacio(infIA)) descartados.push("infraccion");
  if (!infraccion && precepto) infraccion = undefined;

  const a: AnalisisRaw = {
    tipoRadar, tipoDocumento, fechaNotificacion, fechaNotificacionEsEmision: esEmision || undefined, fechaApertura: det.fechaApertura,
    calificacion, organo, precepto, puntos, hora: det.hora, lugar, importeReducido: det.importeReducido,
    nivel: "no_valorable", motivosNivel: [], resumen: "",
    defectos: Array.isArray(ia.defectos) ? (ia.defectos as unknown[]).flatMap((d): Defecto[] => {
      const o = d as Record<string, unknown>;
      const titulo = str(o?.titulo), descripcion = str(o?.descripcion);
      const g = o?.gravedad === "alta" || o?.gravedad === "media" || o?.gravedad === "baja" ? o.gravedad : "baja";
      return titulo ? [{ titulo: titulo.slice(0, 160), descripcion: (descripcion ?? "").slice(0, 400), gravedad: g }] : [];
    }) : [],
    provincia: provincia ?? NO.provincia, expediente: expediente ?? NO.expediente, importe: importe ?? NO.importe,
    infraccion: infraccion ?? NO.infraccion, fecha: fecha ?? NO.fecha, plazoRecurso: "", matricula: matricula ?? NO.matricula,
    velocidadDetectada: velocidadDetectada ?? NO.velocidadDetectada, limiteVia: limiteVia ?? NO.limiteVia,
    datosFaltantes: Array.isArray(ia.datosFaltantes) ? (ia.datosFaltantes as unknown[]).filter((x): x is string => typeof x === "string") : [],
    advertencias,
  };
  if (descartados.length) advertencias.push("Algún dato que la IA dio no figuraba en el documento y se ha descartado en lugar de mostrarlo.");
  if (ctx.esImagen) advertencias.push("Los datos se han leído de una imagen: revisa matrícula, expediente, fechas e importe antes de presentar nada.");
  if (det.esFotograma) a.tipoDocumento = "desconocido";
  return aplicarNormativa(a, { esFotograma: det.esFotograma === true });
}

/** ¿Hay datos mínimos para devolver algo? (si no, se pide otra foto en vez de inventar). */
export function sinDatosBasicos(a: AnalisisRaw): boolean {
  const n = (v?: string) => esVacio(v);
  const hayVel = !n(a.velocidadDetectada) && !n(a.limiteVia);
  return [n(a.expediente), n(a.importe), n(a.fecha), n(a.matricula), !hayVel, n(a.precepto)].every(Boolean);
}

const FALTA = /\b(falta|ausencia|no consta|no se (indica|especifica|identifica)|no (aparece|figura|indica|especifica)|sin identificar|omisi)/i;
const CITA = /\b(art(?:ículo|\.)?\s*\d+|anexo\s+[IVX]+|Orden\s+ICT\/155\/2020|ordenanza)/i;
const METROLOGIA = /certificad|verificaci|metrol/i;

type Campo = { clave: string; etiqueta: string; present: boolean; re: RegExp };

export function aplicarNormativa(a: AnalisisRaw, opt: { esFotograma?: boolean } = {}): AnalisisRaw {
  const ok = (v?: string) => !esVacio(v);
  const esVelocidad = ok(a.velocidadDetectada) || /velocidad|km\/h/i.test(a.infraccion);
  const hechos = evaluarVelocidad({ velocidadDetectada: a.velocidadDetectada, limiteVia: a.limiteVia, importe: a.importe, puntos: a.puntos, tipoRadar: a.tipoRadar ?? "desconocido" });
  const presc = evaluarPrescripcion({ fecha: ok(a.fecha) ? a.fecha : undefined, fechaNotificacion: a.fechaNotificacion, calificacion: a.calificacion, esEmision: a.fechaNotificacionEsEmision });

  const campos: Campo[] = [
    { clave: "expediente", etiqueta: "número de expediente", present: ok(a.expediente), re: /expediente/i },
    { clave: "matricula", etiqueta: "matrícula", present: ok(a.matricula), re: /matr[ií]cula|veh[ií]culo no identificado/i },
    { clave: "fecha", etiqueta: "fecha de la infracción", present: ok(a.fecha), re: /fecha( y hora)? de (la )?(infracci|denuncia|los hechos)/i },
    { clave: "importe", etiqueta: "importe de la sanción", present: ok(a.importe), re: /importe|cuant[ií]a/i },
    { clave: "organo", etiqueta: "órgano que sanciona", present: ok(a.organo), re: /[óo]rgano|autoridad/i },
    { clave: "precepto", etiqueta: "precepto infringido", present: ok(a.precepto), re: /precepto|art[ií]culo infringido|norma infringida/i },
    { clave: "calificacion", etiqueta: "calificación (leve, grave o muy grave)", present: ok(a.calificacion), re: /calificaci/i },
    { clave: "fechaNotificacion", etiqueta: "fecha de notificación de la denuncia", present: ok(a.fechaNotificacion), re: /notificaci[oó]n/i },
    { clave: "lugar", etiqueta: "lugar de la infracción", present: ok(a.lugar), re: /lugar|ubicaci/i },
    { clave: "puntos", etiqueta: "puntos que se detraen", present: ok(a.puntos), re: /puntos/i },
  ];

  // ── Defectos que propone la IA: solo con cita, sin contradecir los datos leídos ──
  const sobreCifra = (d: Defecto) => esVelocidad && /velocidad|km\/h|margen|exceso|contradic|tramo/i.test(`${d.titulo} ${d.descripcion}`) && !METROLOGIA.test(`${d.titulo} ${d.descripcion}`);
  let defectos = (a.defectos ?? []).filter((d) => CITA.test(`${d.titulo} ${d.descripcion}`) && !sobreCifra(d)).slice(0, 4).map((d): Defecto =>
    METROLOGIA.test(`${d.titulo} ${d.descripcion}`) && d.gravedad === "alta" ? { ...d, gravedad: "media" } : d);
  const faltasMovidas: string[] = [];
  const noEsNotificacion = opt.esFotograma || (a.tipoDocumento === "desconocido" && !ok(a.expediente));
  defectos = defectos.filter((d) => {
    const t = `${d.titulo} ${d.descripcion}`;
    if (!FALTA.test(t)) return true;
    if (noEsNotificacion) { faltasMovidas.push(d.titulo.toLowerCase()); return false; }
    // PROHIBIDO decir que falta un dato que sí se ha leído.
    return !campos.some((c) => c.present && c.re.test(t));
  });
  // Si el documento solo trae la fecha de emisión, "notificación tardía" sería especular.
  if (a.fechaNotificacionEsEmision) defectos = defectos.filter((d) => !(/notificaci/i.test(d.titulo) && /plazo|tard|fuera/i.test(`${d.titulo} ${d.descripcion}`)));
  if (presc.motivo || presc.linea) defectos = defectos.filter((d) => !/prescrip/i.test(d.titulo)); // el cálculo manda

  const objetivos: string[] = [];
  if (presc.motivo) { defectos.unshift({ titulo: "Prescripción de la infracción", descripcion: presc.motivo, gravedad: "alta" }); objetivos.push(presc.motivo); }
  if (hechos.motivosFuertes.length) {
    // Un solo defecto con todos los motivos (antes salían dos con el mismo título).
    defectos.unshift({ titulo: "Error en el cálculo de la sanción por velocidad", descripcion: hechos.motivosFuertes.join(" Además: "), gravedad: "alta" });
    objetivos.push(...hechos.motivosFuertes);
  }

  // ── Datos que faltan: lista propia (sin duplicados ni contradicciones) ──
  const faltan: string[] = [];
  for (const c of campos) {
    if (c.present) continue;
    if (c.clave === "puntos" && esVelocidad && hechos.lineas[1]) continue; // los pone el anexo IV
    if (c.clave === "fechaNotificacion" && presc.falta === c.etiqueta) continue; // se añade más abajo
    faltan.push(c.etiqueta);
  }
  if (esVelocidad) faltan.push(...hechos.datosFaltantes);
  if (presc.falta) faltan.push(presc.falta);
  for (const x of [...(a.datosFaltantes ?? []), ...faltasMovidas]) {
    const t = x.trim();
    if (!t || t.length > 90 || /^[a-z]+[A-Z]/.test(t)) continue;
    if (campos.some((c) => c.present && c.re.test(t))) continue;
    if (FALTA.test(t) && campos.some((c) => c.re.test(t))) continue; // ya está en la lista propia
    faltan.push(t.charAt(0).toLowerCase() + t.slice(1));
  }
  const vistos = new Set<string>();
  const datosFaltantes = faltan.filter((t) => { const k = t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "").slice(0, 28); if (vistos.has(k)) return false; vistos.add(k); return true; });

  // ── Valoración cualitativa ──
  const { nivel, motivos } = valorarViabilidad({ defectos, objetivos, esFotograma: !!opt.esFotograma, tieneBase: !sinDatosBasicos(a), falta: { fecha: !ok(a.fecha), importe: !ok(a.importe) && !esVelocidad, expediente: !ok(a.expediente) } });

  const tipoDoc = a.tipoDocumento ?? "desconocido";
  const plazo = tipoDoc === "resolucion" ? PLAZOS[1] : tipoDoc === "denuncia" ? PLAZOS[0] : `${PLAZOS[0]} ${PLAZOS[1]}`;
  const fundamentos = [...(esVelocidad ? hechos.lineas : []), ...(presc.linea ? [presc.linea] : []), ...(presc.motivo ? [presc.motivo] : []), plazo, PLAZOS[2]];

  return {
    ...a, defectos, nivel, motivosNivel: motivos, plazoRecurso: plazo, datosFaltantes, fundamentos,
    resumen: resumenDeterminista(nivel, defectos, objetivos, motivos, esVelocidad ? hechos.lineas[1] : undefined, datosFaltantes),
  };
}

export function valorarViabilidad(i: {
  defectos: Defecto[]; objetivos: string[]; esFotograma: boolean; tieneBase: boolean; falta: { fecha: boolean; importe: boolean; expediente: boolean };
}): { nivel: Nivel; motivos: string[] } {
  if (i.objetivos.length) {
    return { nivel: "alta", motivos: [...i.objetivos, "Es un motivo calculado con la norma, no una opinión; aun así la Administración puede acreditar un acto interruptivo o corregir el error, así que no hay garantía de éxito."] };
  }
  if (i.esFotograma) return { nivel: "no_valorable", motivos: ["Solo tenemos el fotograma del radar, no la notificación oficial. Sin ella no se puede saber si hay defectos en el expediente: sube la denuncia completa."] };
  if (!i.tieneBase) return { nivel: "no_valorable", motivos: ["No se han podido leer datos suficientes del documento para valorarlo."] };
  const altos = i.defectos.filter((d) => d.gravedad === "alta"), medios = i.defectos.filter((d) => d.gravedad === "media");
  if (altos.length) return { nivel: "media", motivos: altos.map((d) => `${d.titulo}: ${d.descripcion}`.trim()) };
  if (medios.length >= 2) return { nivel: "media", motivos: medios.map((d) => `${d.titulo}: ${d.descripcion}`.trim()) };
  if (i.defectos.length) return { nivel: "baja", motivos: i.defectos.map((d) => `${d.titulo}: ${d.descripcion}`.trim()) };
  const faltas = [i.falta.fecha && "la fecha de la infracción", i.falta.expediente && "el número de expediente", i.falta.importe && "el importe"].filter(Boolean);
  if (faltas.length) return { nivel: "no_valorable", motivos: [`No se ha podido leer ${faltas.join(" ni ")}: no se puede comprobar si la multa es correcta.`] };
  return { nivel: "baja", motivos: ["Con los datos del documento no se aprecian defectos formales, ni errores en la sanción ni plazos vencidos."] };
}

function resumenDeterminista(nivel: Nivel, defectos: Defecto[], objetivos: string[], motivos: string[], lineaImporte: string | undefined, faltan: string[]): string {
  const partes: string[] = [];
  if (nivel === "no_valorable") partes.push(`No se puede valorar el recurso: ${motivos[0]?.replace(/\.$/, "") ?? "faltan datos"}.`);
  else if (objetivos.length) partes.push(`Hay un motivo objetivo para recurrir: ${defectos[0].titulo.toLowerCase()}.`);
  else if (defectos.length) partes.push(`Hay ${defectos.length === 1 ? "un posible defecto" : `${defectos.length} posibles defectos`}: ${defectos.map((d) => d.titulo.toLowerCase()).join("; ")}.`);
  else partes.push("No vemos defectos formales en lo que muestra el documento: la multa parece correcta y recurrir tiene pocas posibilidades.");
  if (lineaImporte) partes.push(lineaImporte);
  if (faltan.length) partes.push(`Faltan datos para valorarlo del todo: ${faltan.join(", ")}.`);
  return partes.join(" ");
}
