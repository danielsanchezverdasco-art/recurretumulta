// Ficha del modelo de un post del blog (18/10/2026).
// Antes la plantilla del blog cogía el PRIMER enlace /coches/<id> del texto y
// pintaba su ficha arriba del todo. En los posts que enlazan rivales antes que
// la ficha propia (o que no tienen ficha propia), salía la ficha de OTRO modelo
// (p. ej. el post del Mercedes-AMG GT SUV mostraba el Porsche Cayenne Electric).
// Ahora una ficha solo se usa si su MARCA y su MODELO (slug) aparecen de forma
// exacta, por tokens, en el slug o en el título del post. Si ninguna casa, no
// hay tarjeta: nunca la de otro modelo.

export type TipoFicha = "coches" | "motos" | "patinetes";

export type FichaRef = { tipo: TipoFicha; id: string };

export type FichaCandidata = FichaRef & { marca: string; modelo: string };

export function slugify(s: string | null | undefined): string {
  return (s ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const tokens = (s: string | null | undefined) => slugify(s).split("-").filter(Boolean);

// Palabras que no identifican un modelo.
const RELLENO = new Set([
  "precio", "ficha", "tecnica", "de", "del", "la", "el", "the", "new", "nuevo", "nueva",
]);
const UNIDADES = new Set(["cv", "kw", "kwh", "hp", "ps", "km"]);
// Primeras palabras que necesitan la siguiente para identificar el modelo
// ("Clase A", "Serie 3", "Model Y", "ID. 3", "AMG GT", "Range Rover"...).
const FAMILIA_CORTA = new Set([
  "clase", "serie", "series", "model", "id", "ex", "amg", "grand", "range", "new", "gran",
  "e", "i", "s", "q", "x", "m", "rs", "type", "mach", "land", "c", "classe",
]);
const ALIAS_MARCA: Record<string, string[]> = {
  "mercedes-benz": ["mercedes", "mercedes-amg", "amg"],
  "mercedes-amg": ["mercedes", "amg"],
  "land-rover": ["range-rover", "defender", "discovery"],
  "volkswagen": ["vw"],
  "harley-davidson": ["harley"],
  "alfa-romeo": ["alfa"],
  "aston-martin": ["aston"],
  "rolls-royce": ["rolls"],
  "lynk-co": ["lynk"],
  "ds-automobiles": ["ds"],
};

/**
 * ¿Hay un n-grama que sea el objetivo, o que empiece por él con frontera letra/cifra?
 * ("mercedesamga45" contiene "mercedesamga" + "45"; "voge300rally" contiene "voge300" + "rally").
 */
function tieneGrupo(ng: Set<string>, objetivo: string): boolean {
  if (ng.has(objetivo)) return true;
  const finCifra = /\d$/.test(objetivo);
  for (const g of ng) {
    if (g.length <= objetivo.length || !g.startsWith(objetivo)) continue;
    const sig = g[objetivo.length];
    if (finCifra ? /[a-z]/.test(sig) : /\d/.test(sig)) return true;
  }
  return false;
}

/** Posición [inicio, fin) de los tokens que forman exactamente el objetivo; null si no está. */
function posGrupo(ts: string[], objetivo: string): [number, number] | null {
  for (let i = 0; i < ts.length; i++) {
    let acc = "";
    for (let j = i; j < ts.length && acc.length < objetivo.length; j++) {
      acc += ts[j];
      if (acc === objetivo) return [i, j + 1];
    }
  }
  return null;
}

/** n-gramas (1..6 tokens) concatenados del texto, para casar "mg4" = "mg"+"4" o "e-308" = "e308". */
function ngramas(ts: string[]): Set<string> {
  const out = new Set<string>();
  for (let i = 0; i < ts.length; i++) {
    let acc = "";
    for (let n = 0; n < 6 && i + n < ts.length; n++) {
      acc += ts[i + n];
      out.add(acc);
    }
  }
  return out;
}

const esAnio = (t: string) => /^(19|20)\d\d$/.test(t);

function nucleoModelo(marca: string, modelo: string): string[] {
  let ts = tokens(modelo).filter((t) => !esAnio(t) && !RELLENO.has(t));
  // Algunas fichas repiten la marca en el modelo ("MG MG4 XPower").
  const mt = tokens(marca);
  if (mt.length && ts.slice(0, mt.length).join("-") === mt.join("-") && ts.length > mt.length)
    ts = ts.slice(mt.length);
  // ... o solo su primera palabra ("DS Automobiles" -> "DS N°7").
  else if (mt.length > 1 && ts[0] === mt[0] && ts.length > 1) ts = ts.slice(1);
  return ts;
}

function familia(nucleo: string[]): string[] {
  if (nucleo.length === 0) return [];
  if (nucleo.length >= 2 && (FAMILIA_CORTA.has(nucleo[0]) || nucleo[0].length === 1))
    return nucleo.slice(0, 2);
  return nucleo.slice(0, 1);
}

/**
 * Puntuación de una ficha para un post (0 = NO casa, no usar).
 * Casa si la marca (o un alias) y la familia del modelo aparecen como tokens
 * exactos en el slug o en el título del post.
 */
export function puntuarFicha(
  post: { slug: string; title?: string | null },
  f: FichaCandidata,
): number {
  if (f.id === post.slug) return 1000;
  // "Dualtron (MiniMotors)" -> marca "Dualtron" (alias "minimotors").
  const entreParentesis = (f.marca.match(/\(([^)]*)\)/) ?? [])[1];
  const marcaLimpia = f.marca.replace(/\([^)]*\)/g, " ").trim() || f.marca;
  const nucleo = nucleoModelo(marcaLimpia, f.modelo);
  const fam = familia(nucleo);
  if (fam.length === 0) return 0;
  const famStr = fam.join("");
  // "R4" de Renault = "Renault 4".
  const famAlt = [famStr];
  if (/^[a-z]\d+$/.test(famStr) && slugify(f.marca).startsWith(famStr[0])) famAlt.push(famStr.slice(1));
  // Código delante del nombre: "CRF1100L Africa Twin" = "Africa Twin".
  if (fam.length === 1 && /[a-z]/.test(famStr) && /\d/.test(famStr) && nucleo.length >= 3)
    famAlt.push(nucleo[1] + nucleo[2]);
  const marcaSlug = slugify(marcaLimpia);
  const primera = marcaSlug.split("-")[0];
  const marcas = [
    marcaSlug,
    ...(ALIAS_MARCA[marcaSlug] ?? []),
    ...(entreParentesis ? [slugify(entreParentesis)] : []),
    // "Zero Motorcycles" -> "zero"
    ...(primera.length >= 2 && primera !== marcaSlug ? [primera] : []),
  ].map((m) => m.replace(/-/g, ""));
  let mejor = 0;
  for (const texto of [post.slug, post.title ?? ""]) {
    const ts = tokens(texto);
    const ng = ngramas(ts);
    // Marca y modelo SEGUIDOS ("mercedes-amg-glc-43", "mg4", "nuevo-ds-n-7"),
    // o el modelo al principio del texto ("GLC 300 e: ..."), o una marca
    // implícita en el modelo ("Range Rover" de Land Rover).
    const marcaYFamilia = famAlt.some((fa) => marcas.some((m) => tieneGrupo(ng, m + fa)));
    const sinArticulo = ts.slice(["el", "la", "nuevo", "nueva", "new"].includes(ts[0]) ? 1 : 0);
    const alPrincipio =
      famStr.length >= 3 && [1, 2, 3, 4].some((k) => sinArticulo.slice(0, k).join("") === famStr);
    const marcaImplicita =
      fam.length >= 2 && (ALIAS_MARCA[marcaSlug] ?? []).some((a) => a.replace(/-/g, "") === famStr) &&
      ng.has(famStr);
    // Marca y modelo en el mismo texto aunque no seguidos, solo si el modelo es
    // un código inequívoco con letras y cifras ("Leapmotor en París: B03 ...").
    const codigo = fam.length === 1 && famStr.length >= 3 && /[a-z]/.test(famStr) && /\d/.test(famStr) &&
      marcas.some((m) => ng.has(m)) && ng.has(famStr);
    // Código del modelo pegado a la marca aunque la familia no salga
    // ("Macbor XR5" para la ficha "Macbor Montana XR5").
    const codigoPegado = nucleo
      .slice(fam.length)
      .some((t) => t.length >= 3 && /[a-z]/.test(t) && /\d/.test(t) && marcas.some((m) => ng.has(m + t)));
    if (!(marcaYFamilia || alPrincipio || marcaImplicita || codigo || codigoPegado)) continue;
    // Desempate: cuántas palabras del modelo (versión) aparecen también.
    const set = new Set(ts);
    // Palabras de versión que el post NO menciona restan ("allstreet" en un post del A3 Sedan).
    const resto = nucleo.slice(fam.length).filter((t) => !UNIDADES.has(t));
    // Las cifras solo cuentan si están en el slug (en el título suelen ser precios o CV).
    const slugTs = new Set(tokens(post.slug));
    const esta = (t: string) => (/^\d+$/.test(t) ? slugTs.has(t) : set.has(t) || ng.has(t));
    const casan = resto.filter(esta).length;
    const noCasan = resto.filter((t) => !esta(t)).length;
    // "Eva Ribelle" no es la "Eva EsseEsse9": si la ficha sigue con una palabra de modelo
    // que el post no tiene y el post sigue con un código distinto, no casa.
    if (resto.length && /^[a-z]{4,}$/.test(resto[0]) && !esta(resto[0])) {
      const g = posGrupo(ts, famStr);
      const sigPost = g ? ts[g[1]] : undefined;
      if (sigPost && /[a-z]/.test(sigPost) && /\d/.test(sigPost) && !esAnio(sigPost)) continue;
    }
    // Motos: "HPS 300" no es la "HPS 125" (la cilindrada tras el modelo identifica la moto).
    if (f.tipo === "motos" && resto.length && /^\d+$/.test(resto[0])) {
      const g = posGrupo(ts, famStr);
      const sig = g ? ts.slice(g[1]).find((t) => /^\d+$/.test(t) && !esAnio(t)) : undefined;
      if (sig && sig !== resto[0] && !ts.includes(resto[0])) continue;
    }
    const extra = casan - noCasan * 0.6;
    // Mismo año en el slug del post y en la id de la ficha: +3.
    const anio = f.id.split("-").find(esAnio);
    const bonusAnio = anio && tokens(post.slug).includes(anio) ? 3 : 0;
    // En los "A vs B", el primer modelo del texto manda (-2 por posición).
    const objetivos = new Set([famStr, ...marcas.map((m) => m + famStr)]);
    let pos = 10;
    for (let i = 0; i < Math.min(ts.length, 10) && pos === 10; i++)
      for (let n = 1, acc = ts[i]; n <= 6 && i + n <= ts.length; n++, acc += ts[i + n - 1] ?? "")
        if (objetivos.has(acc)) { pos = i; break; }
    mejor = Math.max(mejor, 100 + extra * 5 + bonusAnio - pos * 2);
  }
  return mejor;
}

/** Enlaces a fichas que aparecen en el contenido, en orden y sin repetir. */
export function enlacesFicha(content: string): FichaRef[] {
  const re = /href=["']?(?:https:\/\/recurretumulta\.online)?\/(coches|motos|patinetes)\/([a-z0-9-]+)/g;
  const out: FichaRef[] = [];
  const vistos = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    const k = `${m[1]}/${m[2]}`;
    if (vistos.has(k)) continue;
    vistos.add(k);
    out.push({ tipo: m[1] as TipoFicha, id: m[2] });
  }
  return out;
}

/** Filtro barato (sin cargar datos): ¿podría esta id ser del modelo del post? */
export function idPlausible(post: { slug: string; title?: string | null }, id: string): boolean {
  if (id === post.slug) return true;
  const idTs = id.split("-").filter((t) => !esAnio(t) && !RELLENO.has(t));
  const ng = new Set([...ngramas(tokens(post.slug)), ...ngramas(tokens(post.title ?? ""))]);
  return idTs.slice(0, 3).some((t) => t.length > 1 && ng.has(t)) || ng.has(idTs.slice(0, 2).join(""));
}

/** Elige la ficha del post entre candidatas ya cargadas (null si ninguna casa). */
export function elegirFicha<T extends FichaCandidata>(
  post: { slug: string; title?: string | null },
  candidatas: T[],
  preferida?: FichaRef | null,
): T | null {
  let mejor: T | null = null;
  let mejorP = 0;
  for (const c of candidatas) {
    let p = puntuarFicha(post, c);
    const esPreferida = !!preferida && preferida.tipo === c.tipo && preferida.id === c.id;
    // 19/10: la ficha curada a mano en ficha-de-post vale aunque el nombre no case palabra a palabra (Denza Z -> Z Coupé).
    if (p === 0 && esPreferida) p = 1;
    if (p === 0) continue;
    // La tabla post->ficha de 13/10 solo desempata (no impone una ficha que no casa).
    if (preferida && preferida.tipo === c.tipo && preferida.id === c.id) p += 2;
    if (p > mejorP) {
      mejor = c;
      mejorP = p;
    }
  }
  return mejor;
}

/** Sigue el 301 forzado de una ficha ("coches/<id>" -> destino); null si la ficha ya no existe. */
export function seguirRedireccion(r: FichaRef, mapa: Record<string, string>): FichaRef | null {
  const d = mapa[`${r.tipo}/${r.id}`];
  if (d === undefined) return r;
  if (!d) return null;
  const [tipo, id] = d.split("/");
  return { tipo: tipo as TipoFicha, id };
}
