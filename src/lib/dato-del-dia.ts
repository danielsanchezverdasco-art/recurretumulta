// "El dato del día" — micro-contenido diario de Novedades Motor.
//
// Los crons automáticos añaden UNA entrada al día con datos REALES verificados
// y fuente oficial (DGT, ANFAC, BOE, IDAE, webs de fabricantes, km77).
// PROHIBIDO publicar un dato sin fuente oficial.
//
// Las entradas marcadas con `ejemplo: true` NO se muestran en la web: solo
// documentan el formato para los crons. Formato completo en docs/contenido-diario.md.

export interface DatoDelDia {
  /** Fecha de publicación, formato YYYY-MM-DD (Europe/Madrid) */
  fecha: string;
  /** Cifra corta que se muestra en grande, ej. "13.400 €", "203 km", "8 años" */
  cifra: string;
  /** Titular del dato */
  titular: string;
  /** 1-2 frases de contexto: qué significa la cifra y por qué importa. Sin relleno. */
  contexto: string;
  /** Fuente oficial: DGT, ANFAC, BOE, IDAE, fabricante... */
  fuenteNombre: string;
  /** URL absoluta de la fuente oficial */
  fuenteUrl: string;
  /** true = ejemplo de formato, NO se publica en la web */
  ejemplo?: boolean;
  /** Enlace interno opcional a un artículo o ficha relacionada */
  enlaceInterno?: { texto: string; url: string };
}

export const DATOS_DEL_DIA: DatoDelDia[] = [
  {
    fecha: "2026-10-12",
    cifra: "88,5 g/km",
    titular: "Los coches nuevos vendidos en septiembre emiten un 9 % menos de CO₂",
    contexto:
      "Las emisiones medias de los turismos nuevos vendidos en septiembre se quedaron en 88,5 gramos de CO₂ por kilómetro, un 9 % menos que un año antes. La causa: la electrificación, con eléctricos e híbridos enchufables copando el 34 % de las ventas del mes.",
    fuenteNombre: "ANFAC",
    fuenteUrl: "https://anfac.com/las-ventas-de-turismos-crecen-un-102-en-septiembre-impulsadas-por-la-electrificacion/",
  },
  {
    fecha: "2026-10-11",
    cifra: "20 km/h",
    titular: "Adelantar a un ciclista obliga a reducir la velocidad 20 km/h",
    contexto:
      "Desde el 1 de octubre, el Real Decreto 518/2026 obliga a reducir la velocidad al menos 20 km/h respecto al límite de la vía al adelantar a un ciclista en carretera, además de dejar 1,5 m de separación lateral y cambiar completamente de carril si la vía tiene varios. Incumplirlo es una infracción grave.",
    fuenteNombre: "DGT (La Moncloa)",
    fuenteUrl: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/2026/300926-reforma-reglamento-circulacion.aspx",
  },
  {
    fecha: "2026-10-09",
    cifra: "30.000 multas",
    titular: "Un solo radar de tramo pone 82 multas al día en la A-8",
    contexto:
      "El radar de tramo entre Ontón y Castro Urdiales (Cantabria), 6,5 km con límite de 100 km/h, acumula 30.000 multas tramitadas en su primer año de vida, según datos de la DGT. El 94 % de los sancionados excedía el límite en menos de 20 km/h, y los accidentes en el tramo han caído un 13 %.",
    fuenteNombre: "DGT (vía autocasion.com)",
    fuenteUrl: "https://www.autocasion.com/actualidad/noticias/radar-tramo-camtabria-bate-records/",
    enlaceInterno: { texto: "Radares de tramo: cómo funcionan y cómo recurrirlos", url: "/guias/radares" },
  },
  {
    fecha: "2026-10-08",
    cifra: "200 €",
    titular: "Los guantes de moto ya son obligatorios en carretera",
    contexto:
      "Desde el 1 de octubre, el Real Decreto 518/2026 obliga a conductor y pasajero de motocicletas y ciclomotores a llevar guantes de protección en vías interurbanas (y calzado cerrado en todas). Saltárselo es infracción grave: 200 € de multa, según la DGT.",
    fuenteNombre: "DGT (La Moncloa)",
    fuenteUrl: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/2026/300926-reforma-reglamento-circulacion.aspx",
    enlaceInterno: { texto: "Guantes moto obligatorios 2026: multas", url: "/blog/descubre-las-nuevas-medidas-de-la-dgt-para-octubre-uso-obligatorio-de-guantes-y-calzado-para-motoristas-fin-de-exenciones-del-cinturon-y-como-recurrir-multas" },
  },
  {
    fecha: "2026-10-06",
    cifra: "32 %",
    titular: "La distracción está detrás de uno de cada tres accidentes mortales",
    contexto:
      "La distracción es el factor concurrente más habitual en los siniestros viales: 15.707 casos en total (21%) y 444 en accidentes con víctimas mortales (32%). La DGT lo recuerda en su campaña nacional de controles, activa hasta el domingo 11 de octubre con cámaras que detectan el uso del móvil.",
    fuenteNombre: "DGT (La Moncloa)",
    fuenteUrl: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/2026/051026-campana-dgt-distracciones.aspx",
    enlaceInterno: { texto: "Campaña DGT contra distracciones: qué vigilan y qué multas ponen", url: "/blog/campana-dgt-distracciones-octubre-2026" },
  },
  {
    fecha: "2026-10-05",
    cifra: "5–11 oct",
    titular: "Arranca hoy la semana europea de controles contra el móvil al volante",
    contexto:
      "La red europea de policías de tráfico ROADPOL coordina del 5 al 11 de octubre la operación 'Focus on the Road': controles simultáneos contra las distracciones, con el uso del móvil como objetivo principal. En España la DGT despliega su campaña nacional contra distracciones dentro de este operativo.",
    fuenteNombre: "ROADPOL",
    fuenteUrl: "https://roadpol.eu/?p=2093",
    enlaceInterno: { texto: "Campaña DGT contra distracciones: qué vigilan y qué multas ponen", url: "/blog/campana-dgt-distracciones-octubre-2026" },
  },
  {
    fecha: "2026-10-04",
    cifra: "15 años",
    titular: "Prohibido circular con patinete eléctrico a los menores de 15 años",
    contexto:
      "El Real Decreto 518/2026, en vigor desde el 1 de octubre, fija por primera vez una edad mínima estatal para conducir vehículos de movilidad personal y hace obligatorio el casco. Saltárselo es una infracción grave: 200 € de multa.",
    fuenteNombre: "BOE",
    fuenteUrl: "https://www.boe.es/buscar/doc.php?id=BOE-A-2026-13889",
    enlaceInterno: { texto: "Guía de patinetes eléctricos: normativa y multas 2026", url: "/guias/patinetes-electricos" },
  },
  {
    fecha: "2026-10-03",
    cifra: "34 %",
    titular: "Uno de cada tres coches vendidos en España ya es eléctrico o híbrido enchufable",
    contexto:
      "Los turismos eléctricos e híbridos enchufables sumaron 31.945 matriculaciones en septiembre, un 56% más que un año antes, y ya copan un tercio del mercado mensual. El eléctrico puro es ya la segunda tecnología más vendida del país.",
    fuenteNombre: "ANFAC",
    fuenteUrl: "https://anfac.com/las-ventas-de-turismos-crecen-un-102-en-septiembre-impulsadas-por-la-electrificacion/",
  },
  {
    fecha: "2026-10-02",
    cifra: "12.345 €",
    titular: "EJEMPLO — Titular del dato del día",
    contexto:
      "EJEMPLO — Una o dos frases que explican qué significa la cifra y por qué le importa al lector. Este texto se sustituye por contenido real verificado.",
    fuenteNombre: "EJEMPLO",
    fuenteUrl: "https://www.ejemplo.es",
    ejemplo: true,
  },
  {
    fecha: "2026-10-01",
    cifra: "203 km",
    titular: "EJEMPLO — Otro titular de ejemplo",
    contexto:
      "EJEMPLO — Segundo ejemplo para mostrar el formato del archivo. Las entradas de ejemplo nunca llegan a la página.",
    fuenteNombre: "EJEMPLO",
    fuenteUrl: "https://www.ejemplo.es",
    ejemplo: true,
  },
  {
    fecha: "2026-09-30",
    cifra: "8 años",
    titular: "EJEMPLO — Tercer ejemplo de formato",
    contexto:
      "EJEMPLO — Tercer ejemplo. Cuando los crons empiecen a añadir entradas reales (sin la marca ejemplo), estas desaparecerán de la vista automáticamente.",
    fuenteNombre: "EJEMPLO",
    fuenteUrl: "https://www.ejemplo.es",
    ejemplo: true,
  },
];

/** Entradas reales (sin ejemplos), ordenadas de más reciente a más antigua */
export const DATOS_REALES: DatoDelDia[] = DATOS_DEL_DIA.filter((d) => !d.ejemplo).sort((a, b) =>
  b.fecha.localeCompare(a.fecha)
);

/** Fecha de hoy en Europe/Madrid, formato YYYY-MM-DD */
export function hoyES(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * El dato a mostrar como "hoy": el de la fecha actual si existe;
 * si no, el más reciente anterior a hoy. null = aún no hay datos reales.
 */
export function datoDeHoy(): DatoDelDia | null {
  const hoy = hoyES();
  return DATOS_REALES.find((d) => d.fecha <= hoy) ?? null;
}

/** Fecha en formato largo español, ej. "3 de octubre de 2026" */
export function fechaLargaES(fechaYYYYMMDD: string): string {
  const [y, m, d] = fechaYYYYMMDD.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
