// GEO 17/10/2026: «respuesta rápida» de cada ficha (3-4 frases citables por buscadores e IA).
// Solo con datos de la propia ficha + src/data/historial-precios.json. Si falta un dato, la
// parte se omite: nunca se rellena ni se estima. Lo aproximado se marca «aprox.».
// Lo usan las fichas (bloque visible bajo el H1 y la FAQ «¿Cuánto cuesta…?») y
// scripts/validar-geo.mjs (comprobación de las 4.624 fichas).

export interface PuntoHist {
  f: string; // AAAA-MM-DD
  p: number;
  m?: string;
  a?: 1;
}

export interface DatosGeo {
  /** "El" / "La" */
  articulo: "El" | "La";
  nombre: string;
  /** Primera frase sin el sujeto, p. ej. "un coche eléctrico de tipo SUV". */
  queEs: string | null;
  /** Cifras clave ya formateadas, p. ej. ["280 CV", "334 km de autonomía WLTP"]. */
  claves: string[];
  /** Frase extra opcional y verificable (carnet, certificado DGT…). */
  extra?: string | null;
  precio: number | null;
  precioAprox: boolean;
  /** Precio en moneda de origen cuando el modelo no se vende en España (p. ej. CNY).
   *  Con «pais»: tarifa oficial de otro país en euros (p. ej. Alemania), sin precio en España. */
  precioOrigen?: { price: number; priceCurrency: string; pais?: string } | null;
  historial?: PuntoHist[] | null;
}

const NUM = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 2, useGrouping: "always" } as unknown as Intl.NumberFormatOptions);
export const num = (v: number) => NUM.format(v);
export const eur = (v: number) => `${num(v)} €`;
const MON: Record<string, string> = { CNY: "yuanes", USD: "dólares", GBP: "libras", JPY: "yenes", CHF: "francos suizos" };
export const fecha = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
const ok = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v) && v > 0;

/** Frases de la respuesta rápida + la respuesta de la FAQ de precio. */
export function frasesGeo(d: DatosGeo): { frases: string[]; faqPrecio: string | null; conPrecio: boolean } {
  const frases: string[] = [];
  const sujeto = `${d.articulo} ${d.nombre}`;
  if (d.queEs) {
    const claves = d.claves.filter(Boolean);
    const con = claves.length ? ` con ${claves.length > 1 ? claves.slice(0, -1).join(", ") + " y " + claves[claves.length - 1] : claves[0]}` : "";
    frases.push(`${sujeto} es ${d.queEs}${con}.`);
  }
  if (d.extra) frases.push(d.extra);

  let precioTxt: string | null = null;
  let faq: string | null = null;
  const pts = (d.historial ?? []).filter((p) => ok(p.p) && /^\d{4}-\d{2}-\d{2}$/.test(p.f));
  const ult = pts[pts.length - 1];
  // El historial solo se cita si su último punto coincide con el precio de la ficha.
  const histOk = !!ult && ok(d.precio) && ult.p === d.precio && (ult.m ?? "EUR") === "EUR";
  if (ok(d.precio)) {
    const verif = histOk ? ` (${d.precioAprox ? "dato registrado" : "precio registrado"} el ${fecha(ult.f)})` : "";
    const del = `${d.articulo === "El" ? "del" : "de la"} ${d.nombre}`;
    if (d.precioOrigen && ok(d.precioOrigen.price) && d.precioOrigen.priceCurrency !== "EUR") {
      const mon = MON[d.precioOrigen.priceCurrency] ?? d.precioOrigen.priceCurrency;
      const resto = `desde ${num(d.precioOrigen.price)} ${mon} en su mercado de origen, aprox. ${eur(d.precio)} al cambio; no tiene precio oficial en España${verif}.`;
      precioTxt = `Cuesta ${resto}`;
      faq = `${sujeto} cuesta ${resto}`;
    } else if (d.precioOrigen?.pais && ok(d.precioOrigen.price)) {
      // 18/10/2026: tarifa oficial publicada solo para otro país (p. ej. Alemania): se cita tal cual.
      const resto = `desde ${eur(d.precioOrigen.price)} en ${d.precioOrigen.pais} (tarifa oficial de la marca); aún no tiene precio oficial en España.`;
      precioTxt = `Cuesta ${resto}`;
      faq = `${sujeto} cuesta ${resto}`;
    } else if (d.precioAprox) {
      const resto = `en España es de aprox. ${eur(d.precio)}, una estimación porque la marca aún no lo ha publicado${verif}.`;
      precioTxt = `Su precio de partida ${resto}`;
      faq = `El precio de partida ${del} ${resto}`;
    } else {
      precioTxt = `Cuesta desde ${eur(d.precio)} en España${verif}.`;
      faq = `${sujeto} cuesta desde ${eur(d.precio)} en España${verif}.`;
    }
    frases.push(precioTxt);
    if (histOk) {
      const mismas = pts.filter((p) => (p.m ?? "EUR") === "EUR");
      const primero = mismas[0];
      const delta = ult.p - primero.p;
      const cambio =
        mismas.length < 2 || delta === 0
          ? `Su precio no ha cambiado desde que lo seguimos (${fecha(primero.f)}).`
          : `Su precio ha ${delta < 0 ? "bajado" : "subido"} ${eur(Math.abs(delta))} desde el ${fecha(primero.f)}.`;
      frases.push(cambio);
      faq += " " + cambio;
    }
  }
  return {
    frases,
    faqPrecio: faq,
    conPrecio: !!precioTxt,
  };
}

// ── Constructores por sección ──────────────────────────────────────────────

const minus = (s: string) => s.replace(/\s*\([^)]*\)\s*/g, " ").trim().toLowerCase();
const CAT_MAYUS = new Set(["SUV", "SUV compacto", "SUV urbano"]);
const catTxt = (c: string | null | undefined) => (!c ? null : CAT_MAYUS.has(c) ? c : c.toLowerCase());
const aproxS = (txt: string, aprox: boolean) => (aprox ? `${txt} (aprox.)` : txt);

function propulsionCoche(tipo: string | null | undefined): string | null {
  if (!tipo) return null;
  const t = minus(tipo);
  if (/^gasolina\s*\/\s*glp|bifuel|^glp/.test(t)) return "de gasolina y GLP";
  if (/^gasolina mhev/.test(t)) return "de gasolina con microhibridación";
  if (/^gasolina/.test(t)) return "de gasolina";
  if (/^diésel mild/.test(t)) return "diésel con microhibridación";
  if (/^diésel/.test(t)) return "diésel";
  if (/^hidrógeno/.test(t)) return "de hidrógeno";
  if (/^mild hybrid/.test(t)) return "híbrido ligero";
  if (/eléctrico.*(autonomía extendida|erev)|autonomía extendida/.test(t)) return "eléctrico de autonomía extendida";
  if (/^híbrido \(?mhev|^híbrido ligero/.test(t)) return "híbrido ligero";
  return t.split(/[\s/]+/).length <= 3 ? t : null;
}

export interface CocheGeo {
  marca: string; modelo: string; tipo: string; categoria: string;
  precioDesde: number | null; potenciaCv: number | null; autonomiaKm: number | null; aprox: string[];
}
export function datosGeoCoche(c: CocheGeo, nombre: string, historial?: PuntoHist[] | null, precioOrigen?: { price: number; priceCurrency: string; pais?: string } | null): DatosGeo {
  const prop = propulsionCoche(c.tipo);
  const cat = catTxt(c.categoria);
  // 20/10/2026 (informe Niky, borrador 2): las fichas alojadas en /coches/ con
  // categoría Autocaravana o Camper no son «un coche … de tipo autocaravana»:
  // se presentan como lo que son («una autocaravana diésel», «una camper diésel»).
  const esVivienda = /^(autocaravana|camper)$/i.test(c.categoria ?? "");
  const queEs = esVivienda
    ? `una ${cat ?? "autocaravana"}${prop ? " " + prop : ""}`
    : prop || cat ? `un coche${prop ? " " + prop : ""}${cat ? ` de tipo ${cat}` : ""}` : null;
  const claves: string[] = [];
  if (ok(c.potenciaCv)) claves.push(aproxS(`${num(c.potenciaCv)} CV`, c.aprox.includes("potenciaCv")));
  const t = minus(c.tipo || "");
  if (ok(c.autonomiaKm) && /eléctric|enchufable|autonomía extendida|erev|hidrógeno/.test(t)) {
    const etiqueta = /enchufable/.test(t) ? "km de autonomía eléctrica" : "km de autonomía";
    claves.push(aproxS(`${num(c.autonomiaKm)} ${etiqueta}`, c.aprox.includes("autonomiaKm")));
  }
  return { articulo: esVivienda ? "La" : "El", nombre, queEs, claves, precio: c.precioDesde, precioAprox: c.aprox.includes("precioDesde"), precioOrigen, historial };
}

export interface MotoGeo {
  categoria: string; precioDesde: number | null; potenciaCv: number | null; cilindradaCc?: number | null;
  autonomiaKm: number | null; carnet: string; aprox: string[]; electrica: boolean;
}
export function datosGeoMoto(m: MotoGeo, nombre: string, historial?: PuntoHist[] | null): DatosGeo {
  const cat = m.categoria && !/^eléctrica$/i.test(m.categoria) ? m.categoria.toLowerCase() : null;
  const queEs = `una moto${cat ? " " + cat : ""}${m.electrica ? " eléctrica" : ok(m.cilindradaCc) ? ` de ${num(m.cilindradaCc)} cc` : ""}`;
  const claves: string[] = [];
  if (ok(m.potenciaCv)) claves.push(aproxS(`${num(m.potenciaCv)} CV`, m.aprox.includes("potenciaCv")));
  if (m.electrica && ok(m.autonomiaKm)) claves.push(aproxS(`${num(m.autonomiaKm)} km de autonomía`, m.aprox.includes("autonomiaKm")));
  const carnet = (m.carnet || "").trim();
  const extra = carnet && !/^(null|undefined|—|-)$/i.test(carnet) ? `Se conduce con el carnet ${carnet}.` : null;
  return { articulo: "La", nombre, queEs, claves, extra, precio: m.precioDesde, precioAprox: m.aprox.includes("precioDesde"), historial };
}

export interface PatineteGeo {
  precioEur: number | null; autonomiaKm: number | null; velocidadMaxKmh: number | null; pesoKg: number | null;
  certificadoDgt: boolean | null; aprox: string[];
}
export function datosGeoPatinete(p: PatineteGeo, nombre: string, historial?: PuntoHist[] | null): DatosGeo {
  const claves: string[] = [];
  if (ok(p.autonomiaKm)) claves.push(aproxS(`${num(p.autonomiaKm)} km de autonomía declarada`, p.aprox.includes("autonomiaKm")));
  if (ok(p.velocidadMaxKmh)) claves.push(aproxS(`velocidad máxima de ${num(p.velocidadMaxKmh)} km/h`, p.aprox.includes("velocidadMaxKmh")));
  if (ok(p.pesoKg)) claves.push(aproxS(`${num(p.pesoKg)} kg de peso`, p.aprox.includes("pesoKg")));
  const extra = p.certificadoDgt === true ? "Tiene el certificado de la DGT para circular como VMP." : null;
  return { articulo: "El", nombre, queEs: "un patinete eléctrico", claves, extra, precio: p.precioEur, precioAprox: p.aprox.includes("precioEur"), historial };
}

/**
 * Meta description de respaldo con datos reales (la usan las fichas sin meta propia
 * en src/content/seo/titulos.csv; si el CSV trae meta, apply-seo.mjs la impone).
 * Sin historial para que sea estable entre prerender y cliente. ≤160 caracteres.
 */
export function metaGeo(d: DatosGeo, cola: string, anio?: string | null): string {
  // El año de modelo del slug distingue fichas de la misma gama (2025/2026).
  const nombre = anio && !d.nombre.includes(anio) ? `${d.nombre} ${anio}` : d.nombre;
  const g = frasesGeo({ ...d, nombre, historial: null });
  const partes = g.frases.filter((f) => !/^(Se conduce|Tiene el certificado)/.test(f));
  let txt = partes.join(" ");
  if (txt.length > 160) txt = partes[0] ?? "";
  if (txt.length > 160) txt = txt.slice(0, 157).replace(/\s+\S*$/, "") + "…";
  const conCola = `${txt} ${cola}`.trim();
  return conCola.length <= 160 ? conCola : txt;
}
