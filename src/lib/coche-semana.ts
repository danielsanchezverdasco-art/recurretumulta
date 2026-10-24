// "El coche de la semana" — destacado editorial rotativo de la sección Motor.
//
// Funcionamiento:
// - Si COCHE_SEMANA_OVERRIDE tiene contenido válido, manda sobre todo lo demás
//   (pick editorial manual: id + titular/gancho opcionales).
// - Si es null, la elección es AUTOMÁTICA: número de semana ISO del año sobre la
//   lista de COCHES_LITE. No requiere mantenimiento manual; rota sola en
//   cada build/prerender (la web se reconstruye de forma periódica).
// Cómo fijar un pick manual: ver docs/coche-de-la-semana.md

import {
  COCHES_LITE,
  type CocheLite,
} from "./comparador-lite.generated.ts";

export type CocheSemanaOverride = {
  /** id del modelo (slug del artículo, el mismo que en comparador-coches-data.ts) */
  id: string;
  /** Titular opcional; si se omite se genera "El coche de la semana: {marca} {modelo}" */
  titular?: string;
  /** Gancho opcional de una línea; si se omite se genera a partir de los datos */
  gancho?: string;
};

/**
 * OVERRIDE EDITORIAL: pon aquí el pick manual o deja sin dato para rotación automática.
 * Ejemplo:
 *   { id: "renault-5-e-tech-2026-precio-autonomia",
 *     titular: "El coche de la semana: el urbano que sí convence",
 *     gancho: "20.170 €, 300 km WLTP y etiqueta CERO: el Renault 5 E-Tech es nuestra apuesta de la semana." }
 */
export const COCHE_SEMANA_OVERRIDE: CocheSemanaOverride | null = null;

/** Número de semana ISO (1-53) para una fecha. */
export function semanaISO(fecha: Date): number {
  const d = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
  const dia = (d.getUTCDay() + 6) % 7; // lunes = 0
  d.setUTCDate(d.getUTCDate() - dia + 3); // jueves de esa semana
  const ref = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const diaRef = (ref.getUTCDay() + 6) % 7;
  ref.setUTCDate(ref.getUTCDate() - diaRef + 3);
  return 1 + Math.round((d.getTime() - ref.getTime()) / (7 * 24 * 3600 * 1000));
}

function formatearPrecio(euros: number | null): string {
  if (euros == null) return "precio por confirmar";
  return euros.toLocaleString("es-ES") + " €";
}

/** Gancho de una línea generado a partir de los datos reales del modelo. */
function ganchoAutomatico(c: CocheLite): string {
  const partes: string[] = [];
  if (c.precioDesde != null) partes.push(`desde ${formatearPrecio(c.precioDesde)}`);
  if (c.autonomiaKm != null) partes.push(`${c.autonomiaKm} km de autonomía`);
  if (c.potenciaCv != null) partes.push(`${c.potenciaCv} CV`);
  const datos = partes.length > 0 ? partes.join(", ") : "datos por confirmar";
  return `El ${c.marca} ${c.modelo} (${datos}): nuestro destacado de la semana en Novedades Motor.`;
}

export type CocheSemana = {
  coche: CocheLite;
  titular: string;
  gancho: string;
  /** true si viene del override editorial, false si es rotación automática */
  esEditorial: boolean;
  semana: number;
  ano: number;
};

export function getCocheSemana(ahora: Date = new Date()): CocheSemana {
  const semana = semanaISO(ahora);
  const ano = ahora.getFullYear();

  if (COCHE_SEMANA_OVERRIDE) {
    const pick = COCHES_LITE.find((c) => c.id === COCHE_SEMANA_OVERRIDE!.id);
    if (pick) {
      return {
        coche: pick,
        titular:
          COCHE_SEMANA_OVERRIDE.titular ?? `El coche de la semana: ${pick.marca} ${pick.modelo}`,
        gancho: COCHE_SEMANA_OVERRIDE.gancho ?? ganchoAutomatico(pick),
        esEditorial: true,
        semana,
        ano,
      };
    }
    // id inválido en el override: se ignora y se usa la rotación automática
  }

  const indice = (ano * 100 + semana) % COCHES_LITE.length;
  const coche = COCHES_LITE[indice];
  return {
    coche,
    titular: `El coche de la semana: ${coche.marca} ${coche.modelo}`,
    gancho: ganchoAutomatico(coche),
    esEditorial: false,
    semana,
    ano,
  };
}
