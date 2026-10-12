/// <reference types="node" />

// Actions del Buscador de coches — se importan desde buscadorCoches.ts
// (separadas para legibilidad; Convex las expone vía el módulo principal).
import OpenAI from "openai";
import { ConvexError } from "convex/values";
import type { Anuncio, BusquedaParams, Fuentes } from "./buscadorCoches";

const FETCH_TIMEOUT_MS = 12000;
const CACHE_TTL_MS = 3600_000;
const AVERIAS_TTL_MS = 30 * 24 * 3600_000;

function groq(): OpenAI {
  const apiKey = process.env.GROQ_API_KEY ?? "";
  if (!apiKey) throw new ConvexError({ code: "GROQ_NO_KEY", message: "Falta GROQ_API_KEY." });
  return new OpenAI({ baseURL: "https://api.groq.com/openai/v1", apiKey });
}

function hashParams(p: BusquedaParams): string {
  const stable = JSON.stringify(p, Object.keys(p).sort());
  // FNV-1a (puro JS, sin node:crypto — funciona en el isolate de Convex)
  let h1 = 0x811c9dc5, h2 = 0x811c9dc5;
  for (let i = 0; i < stable.length; i++) {
    const c = stable.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619);
    h2 = Math.imul(h2 ^ (c + 31), 16777619);
  }
  return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
}

/** Puntuación 0-100: precio vs mediana del resultado + foto + vendedor + km. */
export function puntuar(anuncios: Anuncio[], kmMax: number): Anuncio[] {
  const precios = anuncios.map((a) => a.precio).sort((x, y) => x - y);
  const mediana =
    precios.length >= 4 ? precios[Math.floor(precios.length / 2)] : null;
  return anuncios
    .map((a) => {
      let pts = 40;
      let dif: number | undefined;
      if (mediana && mediana > 0) {
        dif = Math.round(((a.precio - mediana) / mediana) * 100);
        if (dif <= -20) pts += 30;
        else if (dif <= -10) pts += 20;
        else if (dif <= 0) pts += 10;
        else if (dif > 20) pts -= 10;
      }
      if (a.imagen) pts += 10;
      if (a.vendedorTipo === "profesional" || a.verificado) pts += 10;
      if (a.km !== undefined && a.km <= kmMax * 0.5) pts += 10;
      return { ...a, puntuacion: Math.max(0, Math.min(100, pts)), difMercadoPct: dif };
    })
    .sort((x, y) => y.puntuacion - x.puntuacion);
}

// ── Búsqueda web para averías (DuckDuckGo HTML, sin API key) ────────────────
async function ddgLinks(query: string): Promise<{ url: string; title: string }[]> {
  const res = await fetch("https://html.duckduckgo.com/html/?q=" + encodeURIComponent(query), {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) return [];
  const html = await res.text();
  const out: { url: string; title: string }[] = [];
  const re = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null && out.length < 12) {
    const uddg = /[?&]uddg=([^&]+)/.exec(m[1]);
    let url = uddg ? decodeURIComponent(uddg[1]) : m[1];
    if (url.startsWith("//")) url = "https:" + url;
    const title = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (/^https?:\/\//.test(url)) out.push({ url, title });
  }
  return out;
}

function limpiar(html: string, max: number): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function hostDe(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export type AveriaInfo = {
  estado: "ok" | "sin_datos";
  averias: { titulo: string; detalle: string; frecuencia: "alta" | "media" | "baja" }[];
  fuentes: { titulo: string; url: string; dominio: string }[];
};

/**
 * Investiga averías típicas del modelo en foros y opiniones.
 * Agregación automática (Daniel no las escribe a mano). NUNCA inventa:
 * si no hay información fiable → { estado: "sin_datos" }.
 */
export async function investigarAveriasWeb(
  marca: string,
  modelo: string
): Promise<AveriaInfo> {
  const queries = [
    `averías típicas ${marca} ${modelo}`,
    `${marca} ${modelo} problemas comunes forocoches`,
    `${marca} ${modelo} fallos habituales opiniones`,
  ];
  const vistos = new Set<string>();
  const fuentes: { titulo: string; url: string; dominio: string }[] = [];
  let texto = "";
  try {
    for (const q of queries) {
      if (texto.length > 24000) break;
      const res = await ddgLinks(q);
      // Prioriza foros
      const ordenados = [...res].sort((a, b) => {
        const fa = /forocoches|foroclub|foro|opinion/.test(a.url) ? 0 : 1;
        const fb = /forocoches|foroclub|foro|opinion/.test(b.url) ? 0 : 1;
        return fa - fb;
      });
      for (const r of ordenados) {
        if (texto.length > 30000) break;
        if (vistos.has(r.url) || fuentes.length >= 8) continue;
        vistos.add(r.url);
        try {
          const page = await fetch(r.url, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
            signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
          });
          if (!page.ok) continue;
          const ct = page.headers.get("content-type") ?? "";
          if (!/text\/html/.test(ct)) continue;
          const t = limpiar(await page.text(), 6000);
          if (t.length < 400) continue;
          fuentes.push({ titulo: r.title, url: r.url, dominio: hostDe(r.url) });
          texto += `\n\n[Fuente: ${r.url}]\n${t}`;
        } catch {
          /* siguiente */
        }
      }
    }
  } catch {
    /* sin fuentes */
  }

  if (!texto.trim() || fuentes.length === 0) {
    return { estado: "sin_datos", averias: [], fuentes: [] };
  }

  // Agregación con Groq: extracción estricta, prohibido inventar.
  try {
    const client = groq();
    const prompt =
      `Eres un extractor de información. Analiza el siguiente texto recopilado de foros y webs sobre el ${marca} ${modelo}.\n\n` +
      `Devuelve SOLO un JSON válido con este formato:\n` +
      `{"averias": [{"titulo": "...", "detalle": "...", "frecuencia": "alta|media|baja"}], "fuentes": [{"titulo": "...", "url": "..."}]}\n\n` +
      `Reglas estrictas:\n` +
      `- Incluye ÚNICAMENTE averías o fallos mencionados explícitamente en el texto.\n` +
      `- "frecuencia": "alta" si muchos usuarios lo reportan, "media" si varios, "baja" si menciones aisladas.\n` +
      `- El "detalle" debe citar km o contexto si el texto lo menciona.\n` +
      `- Si el texto NO contiene averías específicas y verificables de este modelo, devuelve exactamente: {"sin_datos": true}\n` +
      `- PROHIBIDO inventar averías, cifras o detalles que no aparezcan en el texto.\n\n` +
      `TEXTO:\n${texto.slice(0, 28000)}`;
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500,
      temperature: 0.1,
    });
    const raw = completion.choices[0]?.message?.content ?? "";
    const jsonM = /```json\s*([\s\S]*?)```/.exec(raw) ?? /(\{[\s\S]*\})/.exec(raw);
    if (!jsonM) return { estado: "sin_datos", averias: [], fuentes: [] };
    const parsed = JSON.parse(jsonM[1]) as {
      sin_datos?: boolean;
      averias?: { titulo: string; detalle: string; frecuencia: string }[];
    };
    if (parsed.sin_datos || !parsed.averias || parsed.averias.length === 0) {
      return { estado: "sin_datos", averias: [], fuentes: [] };
    }
    const freqOk = (f: string): "alta" | "media" | "baja" =>
      f === "alta" || f === "media" || f === "baja" ? f : "baja";
    return {
      estado: "ok",
      averias: parsed.averias.slice(0, 6).map((a) => ({
        titulo: String(a.titulo).slice(0, 120),
        detalle: String(a.detalle).slice(0, 300),
        frecuencia: freqOk(String(a.frecuencia)),
      })),
      fuentes: fuentes.slice(0, 6),
    };
  } catch {
    return { estado: "sin_datos", averias: [], fuentes: [] };
  }
}

export { hashParams, CACHE_TTL_MS, AVERIAS_TTL_MS };
export type { Fuentes };

// ── Datos oficiales del vehículo por matrícula/VIN (fuentes GRATUITAS) ──────
// DGT distintivo ambiental: https://sede.dgt.gob.es/.../distintivo-ambiental/index.html?matricula=XXXX
// El HTML trae el resultado: distintivo_{0,ECO,B,C}_sin_fondo.svg
// VIN: NHTSA vPIC API (gratuita, sin key).
// Si no se obtienen tras intentarlo → "datos ausentes" (nunca inventar).

export type DatosDGT = {
  matricula: string;
  etiqueta: "Cero" | "ECO" | "B" | "C" | null; // null = sin distintivo o no encontrado
  encontrada: boolean;
};

export type DatosVIN = {
  vin: string;
  marca?: string;
  modelo?: string;
  ano?: number;
  combustible?: string;
  pais?: string;
  encontrada: boolean;
};

const MATRICULA_NUEVA = /\b(\d{4})\s?([BCDFGHJKLMNPRSTVWXYZ]{3})\b/;
const MATRICULA_VIEJA = /\b([A-Z]{1,2})\s?(\d{4})\s?([A-Z]{1,2})\b/;
const VIN_RE = /\b([A-HJ-NPR-Z0-9]{17})\b/;

export function extraerMatricula(texto: string): string | null {
  const t = texto.toUpperCase();
  let m = MATRICULA_NUEVA.exec(t);
  if (m) return `${m[1]}${m[2]}`;
  m = MATRICULA_VIEJA.exec(t);
  if (m) return `${m[1]}${m[2]}${m[3]}`;
  return null;
}

export function extraerVIN(texto: string): string | null {
  const m = VIN_RE.exec(texto.toUpperCase());
  return m ? m[1] : null;
}

/** Consulta el distintivo ambiental DGT por matrícula (gratis, sin login). */
export async function consultarDGT(matricula: string): Promise<DatosDGT> {
  const limpia = matricula.toUpperCase().replace(/[^A-Z0-9]/g, "");
  try {
    const url =
      "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/distintivo-ambiental/index.html?matricula=" +
      encodeURIComponent(limpia);
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return { matricula: limpia, etiqueta: null, encontrada: false };
    const html = await res.text();
    // El resultado viene como distintivo_{X}_sin_fondo.svg o enlace etiqueta-{x}/
    const mImg = /distintivo_(0|ECO|B|C)_sin_fondo\.svg/i.exec(html);
    const mLink = /etiqueta-(0|eco|b|c)\//i.exec(html);
    const raw = (mImg?.[1] ?? mLink?.[1] ?? "").toUpperCase();
    const mapa: Record<string, DatosDGT["etiqueta"]> = {
      "0": "Cero",
      ECO: "ECO",
      B: "B",
      C: "C",
    };
    const etiqueta = mapa[raw] ?? null;
    // "encontrada" = la DGT devolvió un resultado para esta matrícula
    const encontrada = /\$\("#matricula"\)\.val\("/.test(html) || /distintivo_.*_sin_fondo\.svg/i.test(html);
    return { matricula: limpia, etiqueta, encontrada };
  } catch {
    return { matricula: limpia, etiqueta: null, encontrada: false };
  }
}

/** Decodifica el VIN con la API gratuita de NHTSA (sin key). */
export async function decodificarVIN(vin: string): Promise<DatosVIN> {
  try {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${encodeURIComponent(vin)}?format=json`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return { vin, encontrada: false };
    const json = (await res.json()) as {
      Results?: { Variable: string; Value: string | null }[];
    };
    const get = (name: string) =>
      json.Results?.find((r) => r.Variable === name)?.Value?.trim() || undefined;
    const marca = get("Make");
    if (!marca) return { vin, encontrada: false };
    const anoN = parseInt(get("Model Year") ?? "", 10);
    return {
      vin,
      marca,
      modelo: get("Model"),
      ano: Number.isFinite(anoN) ? anoN : undefined,
      combustible: get("Fuel Type - Primary"),
      pais: get("Plant Country"),
      encontrada: true,
    };
  } catch {
    return { vin, encontrada: false };
  }
}

// ── Historial gratuito en modo "buscar" (08/10/2026) ───────────────────────
// Enriquece cada anuncio con la matrícula detectada en su texto y la etiqueta
// DGT oficial (gratis). Concurrencia limitada, timeout por consulta y
// degradación silenciosa: si la DGT falla o no hay matrícula, el anuncio
// queda sin esos campos y el frontend muestra "datos ausentes".
export async function enriquecerHistorial(anuncios: Anuncio[]): Promise<void> {
  const CONCURRENCIA = 4;
  for (let i = 0; i < anuncios.length; i += CONCURRENCIA) {
    const lote = anuncios.slice(i, i + CONCURRENCIA);
    await Promise.all(
      lote.map(async (a) => {
        try {
          const texto = `${a.titulo ?? ""} ${a.ubicacion ?? ""}`;
          const matricula = extraerMatricula(texto);
          if (!matricula) return;
          const dgt = await consultarDGT(matricula);
          if (dgt.encontrada) {
            a.matricula = matricula;
            if (dgt.etiqueta) a.dgtEtiqueta = dgt.etiqueta;
          }
        } catch {
          // degradación silenciosa: el anuncio se muestra sin historial
        }
      })
    );
  }
}

// ── "Mi recomendación personal": TOP 3 con motivos honestos ─────────────────
// Tono: como un amigo que sabe de coches, directo y honesto. Si hay empates
// o dudas, se dice. Nada de relleno. Groq redacta con grounding estricto;
// si falla, fallback determinista con plantillas (sin inventar).

export type Recomendacion = {
  anuncioId: string;
  posicion: 1 | 2 | 3;
  motivo: string;
  empateCon?: string; // ej. "2" si está empatado con la 2ª posición
};

function motivoPlantilla(
  a: Anuncio,
  averias: { titulo: string; detalle: string; frecuencia: string }[]
): string {
  const partes: string[] = [];
  if (a.difMercadoPct !== undefined && a.difMercadoPct <= -5) {
    const eur = Math.round((a.precio / (1 + a.difMercadoPct / 100)) - a.precio);
    partes.push(
      `${eur.toLocaleString("es-ES")} € por debajo de mercado`
    );
  }
  if (a.km !== undefined) partes.push(`${a.km.toLocaleString("es-ES")} km`);
  if (a.ano !== undefined) partes.push(`del ${a.ano}`);
  if (a.vendedorTipo === "profesional") partes.push("vendedor profesional");
  const rel = averias.find((x) => x.frecuencia !== "baja") ?? averias[0];
  let motivo = partes.length
    ? `${a.titulo.split("·")[0].trim()}: ${partes.join(", ")}.`
    : `${a.titulo.split("·")[0].trim()}.`;
  if (rel) motivo += ` Ojo: ${rel.titulo} (${rel.detalle.slice(0, 90)}).`;
  return motivo;
}

/**
 * Elige el TOP 3 por puntuación y genera el motivo de cada uno.
 * Devuelve también si hay empate técnico (diferencia <= 3 puntos).
 */
export async function generarRecomendacionTop3(
  anuncios: Anuncio[],
  marca: string,
  modelo: string,
  averias: { titulo: string; detalle: string; frecuencia: string }[]
): Promise<{ recomendaciones: Recomendacion[] }> {
  const top = [...anuncios].sort((x, y) => y.puntuacion - x.puntuacion).slice(0, 3);
  if (top.length === 0) return { recomendaciones: [] };

  const empates: Record<string, string> = {};
  for (let i = 1; i < top.length; i++) {
    if (Math.abs(top[0].puntuacion - top[i].puntuacion) <= 3) {
      empates[top[i].id] = "1";
    }
  }

  // Intento con Groq para el tono de "colega que sabe de coches"
  try {
    const client = groq();
    const datos = top.map((a, i) => ({
      posicion: i + 1,
      titulo: a.titulo,
      precio: a.precio,
      difMercadoPct: a.difMercadoPct,
      km: a.km,
      ano: a.ano,
      ubicacion: a.ubicacion,
      portal: a.portal,
      vendedorTipo: a.vendedorTipo,
      verificado: a.verificado,
      puntuacion: a.puntuacion,
    }));
    const prompt =
      `Eres un amigo que sabe mucho de coches y ayudas a otro amigo a elegir. Te paso ${top.length} anuncios ya ordenados de mejor a peor para un ${marca} ${modelo}, con sus datos reales, y las averías típicas reportadas del modelo.\n\n` +
      `ANUNCIOS:\n${JSON.stringify(datos)}\n\n` +
      `AVERÍAS TÍPICAS REPORTADAS:\n${averias.length ? JSON.stringify(averias) : "sin datos de averías reportadas"}\n\n` +
      `${Object.keys(empates).length ? "HAY EMPATE TÉCNICO entre el 1º y otro (diferencia mínima de puntos): menciónalo con honestidad.\n" : ""}` +
      `Escribe para cada posición UN motivo corto (1-2 frases), directo y honesto, explicando por qué está ahí. ` +
      `Menciona datos concretos (precio vs mercado, km, año, vendedor, versión) y, si aplica, la avería típica relevante ("la versión de 2020 no da el problema de X del 2018" SOLO si los datos lo respaldan). ` +
      `Si dudas entre dos, dilo. PROHIBIDO inventar datos que no estén arriba. Nada de relleno ni frases genéricas.\n\n` +
      `Devuelve SOLO JSON: {"recomendaciones": [{"posicion": 1, "motivo": "..."}${top.length > 1 ? ', {"posicion": 2, "motivo": "..."}' : ""}${top.length > 2 ? ', {"posicion": 3, "motivo": "..."}' : ""}]}`;
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 800,
      temperature: 0.4,
    });
    const raw = completion.choices[0]?.message?.content ?? "";
    const jsonM = /```json\s*([\s\S]*?)```/.exec(raw) ?? /(\{[\s\S]*\})/.exec(raw);
    if (jsonM) {
      const parsed = JSON.parse(jsonM[1]) as {
        recomendaciones?: { posicion: number; motivo: string }[];
      };
      if (parsed.recomendaciones && parsed.recomendaciones.length > 0) {
        return {
          recomendaciones: parsed.recomendaciones.slice(0, top.length).map((r) => {
            const idx = Math.min(Math.max(r.posicion - 1, 0), top.length - 1);
            return {
              anuncioId: top[idx].id,
              posicion: (idx + 1) as 1 | 2 | 3,
              motivo: String(r.motivo).slice(0, 400),
              ...(empates[top[idx].id] ? { empateCon: empates[top[idx].id] } : {}),
            };
          }),
        };
      }
    }
  } catch {
    /* fallback a plantillas */
  }

  // Fallback determinista: honesto, sin inventar, sin relleno
  return {
    recomendaciones: top.map((a, i) => ({
      anuncioId: a.id,
      posicion: (i + 1) as 1 | 2 | 3,
      motivo: motivoPlantilla(a, averias),
      ...(empates[a.id] ? { empateCon: empates[a.id] } : {}),
    })),
  };
}
