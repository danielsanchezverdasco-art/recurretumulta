// Utilidades PURAS del escrito (recurso/alegaciones): limpieza de la salida de la IA,
// comprobación de que no está cortada y escrito de respaldo determinista (sin IA).
import { esVacio } from "./extraccionMulta";
import type { AnalisisRaw, Defecto } from "./analisisMulta";

const PERMITIDOS: Record<string, number[]> = {
  lsv: [75, 76, 77, 80, 81, 82, 87, 88, 89, 90, 91, 93, 94, 95, 96, 112],
  ley39: [53, 77, 112, 117, 124],
  ce: [24, 25],
  rgc: [48, 50],
};

/** ¿La línea cita solo artículos de la lista permitida y ninguna sentencia? */
export function citaPermitida(linea: string): boolean {
  if (/\b(STS|STC|SSTS|sentencia|jurisprudencia|Tribunal Supremo|Tribunal Constitucional|Audiencia)\b/i.test(linea)) return false;
  const re = /art(?:ículo|ículos|s?\.)\s*(\d+)[^.;\n]{0,60}?(LSV|Seguridad Vial|RDL 6\/2015|Real Decreto Legislativo 6\/2015|Ley 39\/2015|Constituci|CE\b|RGC|Reglamento General de Circulaci)/gi;
  for (const m of linea.matchAll(re)) {
    const n = Number(m[1]); const ley = m[2].toLowerCase();
    const lista = /39\/2015/.test(ley) ? PERMITIDOS.ley39 : /constituci|ce/.test(ley) ? PERMITIDOS.ce : /rgc|reglamento/.test(ley) ? PERMITIDOS.rgc : PERMITIDOS.lsv;
    if (!lista.includes(n)) return false;
  }
  return true;
}

export function limpiarCarta(t: string): string {
  return t
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/\*\*|__/g, "")
    .replace(/^#{1,6}\s*/gm, "")
    .split("\n")
    .filter((l) => !/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l) && citaPermitida(l))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Un escrito cortado (se acabó el presupuesto de tokens) o sin petición final no sirve. */
export function cartaCompleta(t: string): boolean {
  const s = t.trim();
  if (s.length < 500) return false;
  if (!/(SUPLICA|SOLICITO|SOLICITA)/i.test(s)) return false;
  return /[.:)\]]$|(Firma|Fdo\.?)[^\n]*$/i.test(s) && /(Firma|Fdo|En\s+\S+,?\s+a\s+\d)/i.test(s.slice(-400));
}

const dato = (v?: string) => (v && !esVacio(v) ? v.trim() : undefined);

export function bloqueDatos(a: Pick<AnalisisRaw, "expediente" | "matricula" | "fecha" | "hora" | "lugar" | "infraccion" | "importe" | "velocidadDetectada" | "limiteVia" | "organo" | "fechaNotificacion" | "precepto">): string {
  const fila = (k: string, v?: string) => (dato(v) ? `${k}: ${v!.trim()}\n` : "");
  const vel = (v: string) => (/\d/.test(v) ? v : "");
  const b = fila("Expediente", a.expediente) + fila("Matrícula", a.matricula) +
    fila("Fecha de la infracción", [dato(a.fecha), dato(a.hora)].filter(Boolean).join(" ")) + fila("Lugar", a.lugar) +
    fila("Hecho denunciado", a.infraccion) + fila("Precepto indicado", a.precepto) + fila("Importe", a.importe) +
    fila("Velocidad medida", vel(a.velocidadDetectada)) + fila("Límite de la vía", vel(a.limiteVia)) +
    fila("Órgano", a.organo) + fila("Fecha de notificación", a.fechaNotificacion);
  return b ? `DATOS DE LA MULTA\n${b}\n` : "";
}

export type Personal = { nombreRecurrente?: string; dniRecurrente?: string; domicilioRecurrente?: string };

/** Escrito completo SIN IA: datos leídos + defectos/hechos calculados + petición. Nunca inventa nada. */
export function cartaDeterminista(a: AnalisisRaw, defectos: Defecto[], p: Personal, hoy: string): string {
  const esRes = a.tipoDocumento === "resolucion";
  const titulo = esRes ? "RECURSO DE REPOSICIÓN" : "ESCRITO DE ALEGACIONES";
  const art = esRes ? "art. 96 LSV" : "art. 95 LSV";
  const exp = dato(a.expediente) ?? "[COMPLETAR: número de expediente]";
  const destino = dato(a.organo) ?? "[COMPLETAR: órgano que dictó el acto]";
  const prov = dato(a.provincia);
  const L: string[] = [];
  L.push(`${titulo} (${art})`, "", `En ${prov ?? "[COMPLETAR: localidad]"}, a ${hoy}`, "", `${/^(alcald|jefatura|direcci|delegaci|secretar|subdirecci|junta|oficina)/i.test(destino) ? "A LA" : "AL"} ${destino.toUpperCase()}`, "");
  L.push("IDENTIFICACIÓN DEL INTERESADO",
    `Nombre y apellidos: ${p.nombreRecurrente ?? "[COMPLETAR: Nombre y apellidos]"}`,
    `DNI/NIE: ${p.dniRecurrente ?? "[COMPLETAR: DNI/NIE]"}`,
    `Domicilio a efectos de notificaciones: ${p.domicilioRecurrente ?? "[COMPLETAR: Domicilio completo]"}`, "");
  L.push("EXPONE", "");
  let n = 1;
  const hecho = [
    `Que en el expediente ${exp}${dato(a.matricula) ? `, relativo al vehículo con matrícula ${a.matricula}` : ""}, se me imputa ${dato(a.infraccion) ? `la siguiente infracción: ${a.infraccion!.replace(/\.$/, "")}` : "una infracción de tráfico"}${dato(a.fecha) ? `, el ${a.fecha}${dato(a.hora) ? ` a las ${a.hora}` : ""}` : ""}${dato(a.lugar) ? `, en ${a.lugar}` : ""}.`,
  ];
  if (dato(a.importe)) hecho.push(`La sanción propuesta o impuesta es de ${a.importe}${dato(a.puntos) && a.puntos !== "0" ? ` y ${a.puntos} puntos` : ""}.`);
  if (/\d/.test(a.velocidadDetectada) && /\d/.test(a.limiteVia)) hecho.push(`El documento indica una velocidad medida de ${a.velocidadDetectada} en una vía limitada a ${a.limiteVia}.`);
  if (dato(a.fechaNotificacion)) hecho.push(`La notificación consta con fecha ${a.fechaNotificacion}${a.fechaNotificacionEsEmision ? " (fecha de emisión; la de recepción no consta en el documento)" : ""}.`);
  L.push(`${n++}. ${hecho.join(" ")}`);
  for (const f of (a.fundamentos ?? []).filter((f) => !/^(Alegaciones o pago|Recurso de reposición|Prescripción de la infracción:)/.test(f))) L.push(`${n++}. ${f}`);
  L.push("", "ALEGA", "");
  if (defectos.length) {
    defectos.forEach((d, i) => L.push(`${i === 0 ? "PRIMERA" : ["SEGUNDA", "TERCERA", "CUARTA", "QUINTA"][i - 1] ?? `${i + 1}.ª`}. ${d.titulo}.`, d.descripcion, ""));
  } else {
    L.push("PRIMERA. Derecho de acceso al expediente y a la prueba.",
      "No consta en lo que se me ha notificado la prueba de cargo completa. Solicito copia íntegra del expediente y, si la captación fue por radar o cinemómetro, el fotograma completo y el certificado de verificación metrológica vigente del equipo (art. 53 Ley 39/2015; Orden ICT/155/2020).", "");
  }
  L.push("Todo ello sin perjuicio del derecho de defensa y de la presunción de inocencia (art. 24 CE).", "");
  L.push("SUPLICA", "",
    `Que se tenga por presentado este escrito, se admita y, previos los trámites oportunos, se ${defectos.length ? "acuerde el archivo del expediente y, en su caso, la devolución del importe abonado" : "me dé acceso al expediente completo y a las pruebas indicadas, concediéndome nuevo plazo para formular alegaciones"}.`, "");
  if (esRes) L.push("OTROSÍ DIGO", "Que solicito la suspensión de la ejecución de la sanción mientras se resuelve este recurso (art. 117 Ley 39/2015).", "");
  L.push(`En ${prov ?? "[COMPLETAR: localidad]"}, a ${hoy}.`, "", "Firma:", p.nombreRecurrente ?? "[COMPLETAR: Nombre y apellidos]");
  return L.join("\n");
}
