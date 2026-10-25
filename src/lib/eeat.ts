// E-E-A-T (17/10/2026): datos comunes de autoría, fuentes oficiales y enlaces a
// herramientas que usan FirmaEditorial (bloque visible) y useSeo (JSON-LD).
// Nada inventado: el autor y responsable de contenidos es Daniel (ver /sobre-nosotros/),
// la redacción la hace Cosa (IA) bajo sus reglas, tal y como explica /politica-editorial/.

export const DOMAIN = "https://recurretumulta.online";

export const AUTOR_DANIEL = {
  "@type": "Person",
  "@id": `${DOMAIN}/sobre-nosotros/#daniel`,
  name: "Daniel",
  url: `${DOMAIN}/sobre-nosotros/`,
  jobTitle: "Fundador y responsable de contenidos de RecurreTuMulta.online",
} as const;

export const PUBLISHER = {
  "@type": "Organization",
  "@id": `${DOMAIN}/#organization`,
  name: "RecurreTuMulta.online",
  url: `${DOMAIN}/`,
  logo: { "@type": "ImageObject", url: `${DOMAIN}/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png` },
} as const;

export interface Fuente {
  nombre: string;
  url: string;
}

/** Fuentes oficiales verificadas (200 el 17/10/2026). Solo las pertinentes a cada plantilla. */
export const FUENTES = {
  dgtDistintivo: { nombre: "DGT · Distintivo ambiental", url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/" },
  euroNcap: { nombre: "Euro NCAP · resultados de seguridad", url: "https://www.euroncap.com/es" },
  rgConductores: { nombre: "BOE · Reglamento General de Conductores (permisos A1, A2 y A)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2009-9481" },
  rgCirculacion: { nombre: "BOE · Reglamento General de Circulación (VMP)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514" },
  dgtVmp: { nombre: "DGT · Inscripción de vehículos de movilidad personal", url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/matricular-un-vehiculo/inscripcion-vmp/" },
  leyTrafico: { nombre: "BOE · Ley de Tráfico (RDL 6/2015)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" },
  dgt: { nombre: "Dirección General de Tráfico (DGT)", url: "https://www.dgt.es" },
  sedeDgt: { nombre: "Sede electrónica de la DGT", url: "https://sede.dgt.gob.es" },
} satisfies Record<string, Fuente>;

export type Ambito = "coches" | "motos" | "patinetes" | "multas" | "general";

export const FUENTES_POR_AMBITO: Record<Ambito, Fuente[]> = {
  coches: [FUENTES.dgtDistintivo, FUENTES.euroNcap],
  motos: [FUENTES.rgConductores, FUENTES.dgtDistintivo],
  patinetes: [FUENTES.dgtVmp, FUENTES.rgCirculacion],
  multas: [FUENTES.leyTrafico, FUENTES.sedeDgt],
  general: [FUENTES.dgt, FUENTES.leyTrafico],
};

/** Enlaces internos a herramientas y guías (rutas en el sitemap el 17/10/2026). */
export const HERRAMIENTAS_POR_AMBITO: Record<Ambito, { to: string; texto: string }[]> = {
  coches: [
    { to: "/calculadora-etiqueta-dgt/", texto: "Calculadora de etiqueta DGT" },
    { to: "/comparador-coches/", texto: "Comparador de coches" },
    { to: "/guias/zbe-etiquetas/", texto: "ZBE y etiquetas DGT: qué puede circular" },
    { to: "/guias/zbe/", texto: "Guía de zonas de bajas emisiones (ZBE)" },
    { to: "/#analizador", texto: "Analizador de multas con IA (gratis)" },
  ],
  motos: [
    { to: "/comparador-motos/", texto: "Comparador de motos" },
    { to: "/calculadora-kw-a-cv/", texto: "Calculadora kW a CV" },
    { to: "/guias/zbe-etiquetas/", texto: "ZBE y etiquetas DGT: qué puede circular" },
    { to: "/guias/zbe/", texto: "Guía de zonas de bajas emisiones (ZBE)" },
    { to: "/#analizador", texto: "Analizador de multas con IA (gratis)" },
  ],
  patinetes: [
    { to: "/comparador-patinetes/", texto: "Comparador de patinetes" },
    { to: "/guias/patinetes-electricos/", texto: "Normativa de patinetes eléctricos" },
    { to: "/guias/seguro-vmp/", texto: "Seguro obligatorio del patinete" },
    { to: "/guias/certificado-dgt/", texto: "Certificado DGT del patinete" },
    { to: "/#analizador", texto: "Analizador de multas con IA (gratis)" },
  ],
  multas: [
    { to: "/#analizador", texto: "Analizador de multas con IA (gratis)" },
    { to: "/buscador-codigo-multa/", texto: "Buscador de códigos de multa" },
    { to: "/guias/prescripcion/", texto: "Guía: prescripción de multas" },
    { to: "/multas/", texto: "Cómo recurrir en tu provincia" },
  ],
  general: [
    { to: "/#analizador", texto: "Analizador de multas con IA (gratis)" },
    { to: "/herramientas/", texto: "Todas las herramientas" },
    { to: "/guias/radares/", texto: "Guía de radares y multas de velocidad" },
  ],
};

/** "2026-10-12T13:39:30+02:00" | "2026-10-12" → "2026-10-12" (null si no es fecha). */
export function isoDia(f?: string | null): string | null {
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(f ?? "");
  return m ? m[1] : null;
}
export function fechaLarga(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return `${d} de ${meses[m - 1]} de ${y}`;
}
