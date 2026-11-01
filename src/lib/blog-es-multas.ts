// 01/11/2026: el bloque «Analizador de multas» del blog (CTA superior y caja inferior)
// solo se muestra en los artículos que tratan de multas/recursos/normas de tráfico.
// En fichas de vehículos, accesorios o noticias de coches no tiene sentido (y la caja
// prometía un «% de viabilidad», riesgo YMYL): ahí no se renderiza.
const CATEGORIAS_MULTAS = new Set([
  "Vicios de Forma",
  "Radares y Velocidad",
  "Procedimiento",
  "Provincias",
  "Tipos de Multa",
  "Extranjeros en España",
  "Normativa Vial",
]);

const CATEGORIAS_PRODUCTO = new Set(["Novedades Motor", "Motor", "Modelos desconocidos"]);

const RX_MULTAS =
  /multa|sanci[oó]n|recurr|radar|velol[aá]ser|velolaser|puntos?\b|carnet|prescrip|\bdgt\b|\bzbe\b|infracci|alcohol|alcolock|\bv16\b|carril-de-emergencia|carril de emergencia|adelant|casco|cinturon|cintur[oó]n|tr[aá]fico|trafico|itv|grua|gr[uú]a|semaforo|sem[aá]foro/i;

export function esPostDeMultas(p: { slug: string; title: string; category: string; textosPropios?: unknown }): boolean {
  // Los posts con textos propios para la caja ya fueron escritos a mano con enfoque de multas.
  if (p.textosPropios) return true;
  if (/precio-ficha-tecnica|ficha-tecnica/.test(p.slug)) return false;
  if (CATEGORIAS_MULTAS.has(p.category)) return true;
  // Novedades de producto (coches, motos, patinetes, portátiles...): nunca son artículos de multas.
  if (CATEGORIAS_PRODUCTO.has(p.category)) return false;
  return RX_MULTAS.test(`${p.slug} ${p.title}`);
}

const VIABILIDAD = /%\s*de\s+viabilidad/i;

/** Sustituye cualquier viñeta con «% de viabilidad» por una descripción sin porcentajes ni promesa de resultado. */
export function puntosCajaSinPorcentaje(puntos: string[]): string[] {
  return puntos.map((b) =>
    VIABILIDAD.test(b) ? "Valoración orientativa de los posibles defectos de tu multa, sin garantía de resultado" : b,
  );
}
