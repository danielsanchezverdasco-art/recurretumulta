// Scrapers de portales para el Buscador de coches (08/10/2026).
// Cada función devuelve { anuncios, estado }: nunca lanza (degradación elegante).
// NOTA: el HTML de los portales cambia con frecuencia; los parsers son
// defensivos (regex con fallbacks) y cualquier excepción → estado "fallo".

import type { Anuncio, BusquedaParams, FuenteEstado } from "./buscadorCoches";

const UA_LIST = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
  "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
];
const ua = () => UA_LIST[Math.floor(Math.random() * UA_LIST.length)];
const TIMEOUT = 12000;

function normalizar(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}

function slugUrl(s: string): string {
  return normalizar(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export type ScrapeResult = { anuncios: Anuncio[]; estado: FuenteEstado };

function filtraAnuncios(list: Anuncio[], p: BusquedaParams): Anuncio[] {
  return list.filter((a) => {
    if (a.precio <= 0 || a.precio > p.presupuestoMax) return false;
    if (a.km !== undefined && a.km > p.kmMax) return false;
    if (p.anoMin !== undefined && a.ano !== undefined && a.ano < p.anoMin) return false;
    if (p.sinGolpes) {
      const t = normalizar(a.titulo);
      if (/(siniestro|accidentado|golpe|para piezas|despiece)/.test(t)) return false;
    }
    if (p.version) {
      const v = normalizar(p.version);
      if (v.length > 2 && !normalizar(a.titulo).includes(v)) return false;
    }
    return true;
  });
}

// ── Wallapop: API pública de búsqueda (JSON) ─────────────────────────────────
async function scrapeWallapop(p: BusquedaParams): Promise<ScrapeResult> {
  try {
    const keywords = `${p.marca} ${p.modelo}`.trim();
    const url =
      "https://api.wallapop.com/api/v3/general/search?keywords=" +
      encodeURIComponent(keywords) +
      "&category_ids=100&order_by=relevance";
    const res = await fetch(url, {
      headers: { "User-Agent": ua(), Accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) return { anuncios: [], estado: "fallo" };
    const json = (await res.json()) as {
      search_objects?: Array<{
        id?: string | number;
        title?: string;
        price?: number;
        location?: { city?: string };
        images?: Array<{ original?: string; small?: string }>;
        professional?: boolean;
      }>;
    };
    const items = json.search_objects ?? [];
    const anuncios: Anuncio[] = [];
    for (const it of items.slice(0, 30)) {
      const precio = Number(it.price);
      if (!Number.isFinite(precio) || precio <= 0) continue;
      const titulo = String(it.title ?? "").trim() || keywords;
      // Extraer km y año del título cuando aparecen (p. ej. "120.000 km · 2020")
      const kmM = /([\d.]+)\s*km/i.exec(titulo);
      const anoM = /(19|20)\d{2}/.exec(titulo);
      anuncios.push({
        id: `wallapop-${it.id ?? anuncios.length}`,
        portal: "wallapop",
        titulo,
        precio: Math.round(precio),
        km: kmM ? parseInt(kmM[1].replace(/\./g, ""), 10) || undefined : undefined,
        ano: anoM ? parseInt(anoM[0], 10) : undefined,
        ubicacion: it.location?.city,
        url: `https://es.wallapop.com/item/${it.id ?? ""}`,
        imagen: it.images?.[0]?.small ?? it.images?.[0]?.original,
        vendedorTipo: it.professional ? "profesional" : "particular",
        verificado: false,
        puntuacion: 0,
      });
    }
    const f = filtraAnuncios(anuncios, p);
    return { anuncios: f, estado: f.length ? "ok" : "vacio" };
  } catch {
    return { anuncios: [], estado: "fallo" };
  }
}

// ── Milanuncios: HTML server-rendered ────────────────────────────────────────
async function scrapeMilanuncios(p: BusquedaParams): Promise<ScrapeResult> {
  try {
    const url =
      `https://www.milanuncios.com/coches-de-segunda-mano/${slugUrl(p.marca)}-${slugUrl(p.modelo)}.htm`;
    const res = await fetch(url, {
      headers: { "User-Agent": ua(), Accept: "text/html" },
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) return { anuncios: [], estado: "fallo" };
    const html = await res.text();
    const anuncios: Anuncio[] = [];
    // Tarjetas de anuncio: data-adid + enlace + precio
    const re =
      /data-adid="(\d+)"[\s\S]{0,2000}?<a[^>]+href="([^"]+)"[^>]*>([\s\S]{0,300}?)<\/a>[\s\S]{0,2000}?([\d.]+)\s*€/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null && anuncios.length < 30) {
      const precio = parseInt(m[4].replace(/\./g, ""), 10);
      if (!Number.isFinite(precio) || precio <= 0) continue;
      const titulo = m[3].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      if (!titulo) continue;
      const kmM = /([\d.]+)\s*km/i.exec(titulo);
      const anoM = /(19|20)\d{2}/.exec(titulo);
      const href = m[2].startsWith("http") ? m[2] : `https://www.milanuncios.com${m[2]}`;
      anuncios.push({
        id: `milanuncios-${m[1]}`,
        portal: "milanuncios",
        titulo,
        precio,
        km: kmM ? parseInt(kmM[1].replace(/\./g, ""), 10) || undefined : undefined,
        ano: anoM ? parseInt(anoM[0], 10) : undefined,
        url: href,
        verificado: false,
        puntuacion: 0,
      });
    }
    const f = filtraAnuncios(anuncios, p);
    return { anuncios: f, estado: f.length ? "ok" : anuncios.length ? "vacio" : "fallo" };
  } catch {
    return { anuncios: [], estado: "fallo" };
  }
}

// ── Coches.net: intento de parseo HTML (JS-heavy → a menudo "fallo") ─────────
async function scrapeCochesNet(p: BusquedaParams): Promise<ScrapeResult> {
  try {
    const url =
      `https://www.coches.net/coches-de-ocasion/${slugUrl(p.marca)}/${slugUrl(p.modelo)}/`;
    const res = await fetch(url, {
      headers: { "User-Agent": ua(), Accept: "text/html" },
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) return { anuncios: [], estado: "fallo" };
    const html = await res.text();
    const anuncios: Anuncio[] = [];
    // JSON-LD de listados o tarjetas SSR
    const re =
      /<a[^>]+href="(\/coche-[^"]+)"[^>]*>[\s\S]{0,500}?<span[^>]*>([^<]{5,120})<\/span>[\s\S]{0,500}?([\d.]+)\s*€/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null && anuncios.length < 30) {
      const precio = parseInt(m[3].replace(/\./g, ""), 10);
      if (!Number.isFinite(precio) || precio <= 0) continue;
      const titulo = m[2].replace(/\s+/g, " ").trim();
      const kmM = /([\d.]+)\s*km/i.exec(titulo + " " + m[0].slice(0, 500));
      const anoM = /(19|20)\d{2}/.exec(titulo);
      anuncios.push({
        id: `cochesnet-${anuncios.length}-${precio}`,
        portal: "coches.net",
        titulo,
        precio,
        km: kmM ? parseInt(kmM[1].replace(/\./g, ""), 10) || undefined : undefined,
        ano: anoM ? parseInt(anoM[0], 10) : undefined,
        url: `https://www.coches.net${m[1]}`,
        verificado: true, // coches.net verifica profesionales
        puntuacion: 0,
      });
    }
    const f = filtraAnuncios(anuncios, p);
    return { anuncios: f, estado: f.length ? "ok" : "fallo" };
  } catch {
    return { anuncios: [], estado: "fallo" };
  }
}

// ── Autoscout24: intento de parseo HTML (JS-heavy → a menudo "fallo") ────────
async function scrapeAutoscout24(p: BusquedaParams): Promise<ScrapeResult> {
  try {
    const url =
      `https://www.autoscout24.es/lst/${slugUrl(p.marca)}/${slugUrl(p.modelo)}?sort=standard&desc=0`;
    const res = await fetch(url, {
      headers: { "User-Agent": ua(), Accept: "text/html" },
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) return { anuncios: [], estado: "fallo" };
    const html = await res.text();
    const anuncios: Anuncio[] = [];
    const re =
      /<a[^>]+href="(\/ofertas\/[^"]+)"[^>]*>[\s\S]{0,800}?€\s*([\d.,]+)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null && anuncios.length < 30) {
      const precio = parseInt(m[2].replace(/[.,]/g, ""), 10);
      if (!Number.isFinite(precio) || precio <= 0 || precio > 500000) continue;
      anuncios.push({
        id: `autoscout-${anuncios.length}-${precio}`,
        portal: "autoscout24",
        titulo: `${p.marca} ${p.modelo}`,
        precio,
        url: `https://www.autoscout24.es${m[1]}`,
        verificado: false,
        puntuacion: 0,
      });
    }
    const f = filtraAnuncios(anuncios, p);
    return { anuncios: f, estado: f.length ? "ok" : "fallo" };
  } catch {
    return { anuncios: [], estado: "fallo" };
  }
}

/** Lanza los 4 scrapers en paralelo; cada uno degrada por su cuenta. */
export async function scrapeAll(
  p: BusquedaParams
): Promise<{ anuncios: Anuncio[]; estados: Record<string, FuenteEstado> }> {
  const [w, mi, c, a] = await Promise.all([
    scrapeWallapop(p),
    scrapeMilanuncios(p),
    scrapeCochesNet(p),
    scrapeAutoscout24(p),
  ]);
  return {
    anuncios: [...w.anuncios, ...mi.anuncios, ...c.anuncios, ...a.anuncios],
    estados: {
      wallapop: w.estado,
      milanuncios: mi.estado,
      cochesNet: c.estado,
      autoscout24: a.estado,
    },
  };
}
