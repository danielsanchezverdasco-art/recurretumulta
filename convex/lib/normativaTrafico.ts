// Reglas DETERMINISTAS de normativa de tráfico española (12/10/2026).
// La IA solo extrae datos y redacta; los cálculos legales se hacen aquí, con cita.
//  - Márgenes de cinemómetros: Orden ICT/155/2020, anexo III (errores máximos permitidos en servicio).
//  - Cuadro de sanciones por velocidad: RDL 6/2015 (LSV), anexo IV.
//  - Plazos: LSV arts. 93-96 (procedimiento) y 112 (prescripción).

export type TipoRadar = "fijo" | "movil" | "desconocido";

/** Margen ICT/155/2020 en servicio: fijo 5 km/h (≤100) o 5 %; móvil 7 km/h (≤100) o 7 %. */
export function velocidadCorregida(medida: number, tipo: TipoRadar): { corregida: number; margen: string; supuesto: boolean } {
  const movil = tipo === "movil" || tipo === "desconocido"; // si no consta, se aplica el margen más favorable
  const [abs, pct] = movil ? [7, 0.07] : [5, 0.05];
  const resta = medida <= 100 ? abs : Math.ceil(medida * pct);
  return {
    corregida: medida - resta,
    margen: medida <= 100 ? `${abs} km/h` : `${pct * 100} %`,
    supuesto: tipo === "desconocido",
  };
}

// LSV anexo IV: límites inferiores de cada tramo por límite de la vía.
const TRAMOS: Record<number, number[]> = {
  20: [21, 41, 51, 61, 71], 30: [31, 51, 61, 71, 81], 40: [41, 61, 71, 81, 91], 50: [51, 71, 81, 91, 101],
  60: [61, 91, 111, 121, 131], 70: [71, 101, 121, 131, 141], 80: [81, 111, 131, 141, 151],
  90: [91, 121, 141, 151, 161], 100: [101, 131, 151, 161, 171], 110: [111, 141, 161, 171, 181],
  120: [121, 151, 171, 181, 191],
};
const SANCION = [
  { multa: 100, puntos: 0 }, { multa: 300, puntos: 2 }, { multa: 400, puntos: 4 },
  { multa: 500, puntos: 6 }, { multa: 600, puntos: 6 },
];

export function tramoVelocidad(limite: number, corregida: number): { multa: number; puntos: number } | null | "sin_infraccion" {
  const t = TRAMOS[limite];
  if (!t) return null;
  if (corregida < t[0]) return "sin_infraccion";
  let i = 0;
  while (i + 1 < t.length && corregida >= t[i + 1]) i++;
  return SANCION[i];
}

const num = (s?: string) => {
  const m = (s ?? "").replace(",", ".").match(/\d+(\.\d+)?/);
  return m ? Number(m[0]) : null;
};

export type HechosLegales = {
  lineas: string[]; // hechos calculados, con su cita, para el prompt y la carta
  motivosFuertes: string[]; // motivos de recurso objetivos
  datosFaltantes: string[];
};

/** Calcula los hechos legales objetivos a partir de los datos extraídos. */
export function evaluarVelocidad(d: {
  velocidadDetectada?: string; limiteVia?: string; importe?: string; puntos?: string; tipoRadar?: TipoRadar;
}): HechosLegales {
  const lineas: string[] = [], motivosFuertes: string[] = [], datosFaltantes: string[] = [];
  const v = num(d.velocidadDetectada), lim = num(d.limiteVia), imp = num(d.importe);
  if (v == null || lim == null) {
    if (v == null) datosFaltantes.push("velocidad medida por el cinemómetro");
    if (lim == null) datosFaltantes.push("límite de velocidad de la vía");
    return { lineas, motivosFuertes, datosFaltantes };
  }
  const tipo = d.tipoRadar ?? "desconocido";
  if (tipo === "desconocido") datosFaltantes.push("tipo de cinemómetro (fijo o móvil)");
  const { corregida, margen, supuesto } = velocidadCorregida(v, tipo);
  lineas.push(
    `Velocidad medida ${v} km/h; margen de error aplicable ${margen} (Orden ICT/155/2020, anexo III${supuesto ? ", se aplica el de cinemómetro móvil porque no consta el tipo" : ""}): velocidad corregida ${corregida} km/h; límite ${lim} km/h.`
  );
  const tramo = tramoVelocidad(lim, corregida);
  if (tramo === "sin_infraccion" && supuesto) {
    lineas.push(`Con el margen de cinemómetro móvil la velocidad corregida (${corregida} km/h) no superaría el límite: hay que comprobar en el expediente qué tipo de cinemómetro se usó.`);
  } else if (tramo === "sin_infraccion") {
    motivosFuertes.push(`Aplicado el margen legal, la velocidad corregida (${corregida} km/h) no supera el límite de ${lim} km/h: no hay exceso sancionable (Orden ICT/155/2020; art. 48 RGC).`);
  } else if (tramo) {
    lineas.push(`Según el anexo IV de la LSV, ese exceso corresponde a ${tramo.multa} € y ${tramo.puntos} puntos.`);
    if (supuesto) {
      lineas.push("El tramo depende del tipo de cinemómetro, que no consta: no se puede afirmar que el importe sea incorrecto.");
    } else {
      if (imp != null && imp !== tramo.multa && imp !== tramo.multa / 2) {
        motivosFuertes.push(`El importe impuesto (${imp} €) no corresponde al tramo del anexo IV de la LSV para la velocidad corregida (${tramo.multa} €): posible error en la aplicación del margen o del cuadro de sanciones.`);
      }
      const pt = d.puntos != null && /\d/.test(d.puntos) ? Number(/\d+/.exec(d.puntos)![0]) : null;
      if (pt != null && pt !== tramo.puntos) {
        motivosFuertes.push(`Los puntos que figuran (${pt}) no corresponden al anexo IV de la LSV para la velocidad corregida (${tramo.puntos} puntos): posible error en la sanción.`);
      }
    }
  } else {
    lineas.push(`Límite de ${lim} km/h no previsto en el cuadro del anexo IV de la LSV: revisar a mano.`);
  }
  return { lineas, motivosFuertes, datosFaltantes };
}

export const PLAZOS = [
  "Alegaciones o pago con reducción del 50 %: 20 días naturales desde la notificación de la denuncia (arts. 93, 94 y 95 LSV).",
  "Recurso de reposición contra la resolución sancionadora: 1 mes desde su notificación (art. 96 LSV).",
  "Prescripción de la infracción: 3 meses (leves) o 6 meses (graves y muy graves) desde la comisión (art. 112 LSV).",
];

/** Artículos que la IA puede citar. Cualquier otra cita se elimina. */
export const CITAS_PERMITIDAS = [
  "art. 48 RGC", "art. 50 RGC", "art. 76 LSV", "art. 77 LSV", "art. 80 LSV", "art. 81 LSV", "art. 87 LSV", "art. 89 LSV",
  "art. 90 LSV", "art. 91 LSV", "art. 93 LSV", "art. 94 LSV", "art. 95 LSV", "art. 96 LSV", "art. 112 LSV", "anexo IV LSV",
  "Orden ICT/155/2020", "art. 53 Ley 39/2015", "art. 77 Ley 39/2015", "art. 24 CE",
];

/** dd/mm/aaaa (o d-m-aa) → Date UTC; null si no se puede leer. */
export function leerFecha(s?: string): Date | null {
  const m = (s ?? "").match(/(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})/);
  if (!m) return null;
  const a = Number(m[3].length === 2 ? "20" + m[3] : m[3]);
  const d = new Date(Date.UTC(a, Number(m[2]) - 1, Number(m[1])));
  return d.getUTCDate() === Number(m[1]) ? d : null;
}

/** Prescripción (art. 112 LSV): 3 meses leves, 6 meses graves/muy graves, hasta la notificación de la denuncia. */
export function evaluarPrescripcion(d: { fecha?: string; fechaNotificacion?: string; calificacion?: string; esEmision?: boolean }): { linea?: string; motivo?: string; falta?: string } {
  const ini = leerFecha(d.fecha), fin = leerFecha(d.fechaNotificacion);
  const cal = (d.calificacion ?? "").toLowerCase();
  const meses = /muy grave|grave/.test(cal) ? 6 : /leve/.test(cal) ? 3 : null;
  if (!ini || !fin) return { falta: !fin ? "fecha de notificación de la denuncia" : "fecha de la infracción" };
  if (meses == null) return { falta: "calificación de la infracción (leve, grave o muy grave)" };
  const limite = new Date(ini); limite.setUTCMonth(limite.getUTCMonth() + meses);
  const f = (x: Date) => x.toISOString().slice(0, 10).split("-").reverse().join("/");
  if (fin > limite) {
    return { motivo: `La infracción (${f(ini)}) se notificó el ${f(fin)}, después de los ${meses} meses de prescripción de una infracción ${cal} (vencía el ${f(limite)}), salvo que conste en el expediente un acto interruptivo notificado antes (art. 112 LSV).` };
  }
  if (d.esEmision) {
    return { linea: `La notificación se emitió el ${f(fin)}, dentro del plazo de prescripción de ${meses} meses (vence el ${f(limite)}; art. 112 LSV). La fecha real de recepción no consta en el documento: si la recibiste más tarde, comprueba que no pasara ese límite.` };
  }
  return { linea: `Notificación (${f(fin)}) dentro del plazo de prescripción de ${meses} meses (vence el ${f(limite)}; art. 112 LSV).` };
}
