// Utilidades PURAS del recurso de reposición de SANCIONES (policía local, ordenanzas, LO 4/2015):
// limpieza de la salida de la IA y escrito de respaldo determinista (sin IA). Nunca inventa datos.
import { esVacio } from "./extraccionMulta";

export type DefectoSancion = { titulo: string; descripcion: string; gravedad: "alta" | "media" | "baja" };
export type DatosSancionCarta = { municipio: string; expediente: string; importe: string; infraccion: string; fecha: string; ley: string };
export type PersonalSancion = { nombreRecurrente?: string; dniRecurrente?: string; domicilioRecurrente?: string };

// Artículos que el escrito puede citar con seguridad (el resto solo si figura en el documento).
const PERMITIDOS = {
  ley39: [21, 25, 53, 64, 76, 77, 112, 117, 124],
  ley40: [25, 27, 28, 29, 30],
  ce: [20, 21, 24, 25],
};

/** La línea no cita sentencias (la IA se las inventaba) ni artículos fuera de la lista permitida. */
export function citaPermitidaSancion(linea: string): boolean {
  if (/\b(STS|STC|SSTS|SSTC|sentencia|sentencias|jurisprudencia|Tribunal Supremo|Tribunal Constitucional|Audiencia Nacional)\b/i.test(linea)) return false;
  const re = /art(?:ículo|ículos|s?\.)\s*(\d+)[^.;\n]{0,60}?(Ley 39\/2015|Ley 40\/2015|Constituci|CE\b)/gi;
  for (const m of linea.matchAll(re)) {
    const n = Number(m[1]); const ley = m[2].toLowerCase();
    const lista = /39\/2015/.test(ley) ? PERMITIDOS.ley39 : /40\/2015/.test(ley) ? PERMITIDOS.ley40 : PERMITIDOS.ce;
    if (!lista.includes(n)) return false;
  }
  return true;
}

export function limpiarCartaSancion(t: string): string {
  return t
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/\*\*|__/g, "")
    .replace(/^#{1,6}\s*/gm, "")
    .split("\n")
    .filter((l) => !/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l) && citaPermitidaSancion(l))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Cortado (sin tokens) o sin petición final: no sirve. */
export function cartaSancionCompleta(t: string): boolean {
  const s = t.trim();
  if (s.length < 500) return false;
  if (!/(SUPLICA|SOLICITO|SOLICITA)/i.test(s)) return false;
  // Termina en puntuación, o en la zona de firma (p. ej. "Firma:\nNombre Apellidos").
  return /[.:)\]]$/.test(s) || /(Firma|Fdo\.?)[^\n]*(\n[^\n]*){0,2}$/i.test(s.slice(-250));
}

const dato = (v?: string) => (v && !esVacio(v) ? v.trim() : undefined);

export function cartaSancionDeterminista(d: DatosSancionCarta, defectos: DefectoSancion[], p: PersonalSancion, hoy: string): string {
  const muni = dato(d.municipio);
  const exp = dato(d.expediente) ?? "[COMPLETAR: número de expediente]";
  const esOrdenanza = /ordenanza/i.test(d.ley ?? "");
  const destino = esOrdenanza && muni ? `AL AYUNTAMIENTO DE ${muni.toUpperCase()}` : "[COMPLETAR: órgano que dictó el acto]";
  const lugar = muni ?? "[COMPLETAR: localidad]";
  const nombre = p.nombreRecurrente || "[COMPLETAR: Nombre y apellidos]";
  const L: string[] = [];
  L.push("RECURSO DE REPOSICIÓN", "", `En ${lugar}, a ${hoy}`, "", destino, "");
  L.push("IDENTIFICACIÓN DEL INTERESADO",
    `Nombre y apellidos: ${nombre}`,
    `DNI/NIE: ${p.dniRecurrente || "[COMPLETAR: DNI/NIE]"}`,
    `Domicilio a efectos de notificaciones: ${p.domicilioRecurrente || "[COMPLETAR: Domicilio completo]"}`, "");
  L.push("EXPONE", "");
  const hecho = [`Que en el expediente sancionador ${exp} se me imputa ${dato(d.infraccion) ? `la siguiente conducta: ${d.infraccion.trim().replace(/\.$/, "")}` : "una infracción"}${dato(d.fecha) ? `, con fecha ${d.fecha.trim()}` : ""}.`];
  if (dato(d.importe)) hecho.push(`La sanción es de ${d.importe.trim()}.`);
  if (dato(d.ley)) hecho.push(`La norma aplicada que figura en el documento es: ${d.ley.trim()}.`);
  L.push(`1. ${hecho.join(" ")}`, "", "ALEGA", "");
  if (defectos.length) {
    defectos.forEach((x, i) => L.push(`${i === 0 ? "PRIMERA" : ["SEGUNDA", "TERCERA", "CUARTA", "QUINTA"][i - 1] ?? `${i + 1}.ª`}. ${x.titulo}.`, x.descripcion, ""));
  } else {
    L.push("PRIMERA. Derecho de acceso al expediente y a la prueba.",
      "Solicito copia íntegra del expediente sancionador y de la prueba de cargo en la que se basa la sanción (art. 53 Ley 39/2015), así como la identificación del agente denunciante y la descripción precisa de los hechos.", "");
  }
  L.push("Todo ello en aplicación de los principios de legalidad, tipicidad y proporcionalidad de la potestad sancionadora (arts. 25, 27 y 29 Ley 40/2015) y de la presunción de inocencia (art. 24 CE).", "");
  L.push("SUPLICA", "",
    `Que se tenga por presentado este recurso y se ${defectos.length ? "deje sin efecto la sanción y se archive el expediente" : "me dé acceso al expediente completo y a las pruebas indicadas, y se resuelva conforme a derecho"}.`, "",
    "OTROSÍ DIGO", "Que solicito la suspensión de la ejecución de la sanción mientras se resuelve este recurso (art. 117 Ley 39/2015).", "",
    `En ${lugar}, a ${hoy}.`, "", "Firma:", nombre);
  return L.join("\n");
}
