"use node";
/// <reference types="node" />

// ── Comparador v2: búsqueda libre con IA ─────────────────────────────────────
// Action `investigarModelo`: investiga un modelo que no está en la base local,
// lo busca en la web (km77 primero; si km77 no aporta datos, SIGUE buscando en
// otras fuentes web ANTES de llamar a Groq), lo estructura con Groq, lo guarda
// en caché y crea un BORRADOR de artículo (published:false). Nunca publica directamente.

import { v } from "convex/values";
import { ConvexError } from "convex/values";
import OpenAI from "openai";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";

const MODEL_TEXT = "openai/gpt-oss-120b";
const MAX_OUTPUT_TOKENS_FICHA = 6000;
const REASONING_EFFORT = "low" as const;
const MAX_RETRY_ATTEMPTS = 2;
const RETRY_DELAY_MS = 2000;
const RATE_LIMIT_RETRY_DELAY_MS = 21000;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

function groq(): OpenAI {
  const apiKey = process.env.GROQ_API_KEY ?? "";
  if (!apiKey) {
    throw new ConvexError({
      code: "GROQ_NO_KEY",
      message: "El servicio de investigación no está configurado (falta GROQ_API_KEY).",
    });
  }
  return new OpenAI({ baseURL: "https://api.groq.com/openai/v1", apiKey });
}

function isRateLimitError(err: unknown): boolean {
  return err instanceof OpenAI.APIError && err.status === 429;
}
function isFatalError(err: unknown): boolean {
  return err instanceof OpenAI.APIError && (err.status === 401 || err.status === 403 || err.status === 404);
}

async function withRetry<T>(fn: () => Promise<T>, attempts = MAX_RETRY_ATTEMPTS): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (isFatalError(err)) throw err;
      if (i < attempts) {
        await new Promise((res) =>
          setTimeout(res, isRateLimitError(err) ? RATE_LIMIT_RETRY_DELAY_MS : RETRY_DELAY_MS)
        );
      }
    }
  }
  throw lastError;
}

import { BASE_INDEX, normalizar } from "./comparadorDatos";
import type { Confianza, FichaIA } from "./comparadorDatos";
export type { Confianza, FichaIA };

// ── Búsqueda web (sin API key: DuckDuckGo HTML) ──────────────────────────────
type DDGResult = { url: string; title: string };

async function ddgLinks(query: string): Promise<DDGResult[]> {
  const res = await fetch("https://html.duckduckgo.com/html/?q=" + encodeURIComponent(query), {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) return [];
  const html = await res.text();
  const out: DDGResult[] = [];
  const re = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null && out.length < 12) {
    let href = m[1];
    const uddg = /[?&]uddg=([^&]+)/.exec(href);
    let url = uddg ? decodeURIComponent(uddg[1]) : href;
    if (url.startsWith("//")) url = "https:" + url;
    const title = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (/^https?:\/\//.test(url)) out.push({ url, title });
  }
  return out;
}

function limpiarHtmlAtexto(html: string, maxChars: number): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxChars);
}

/** Ficha de km77 del modelo (fuente prioritaria). */
async function fichaKm77(
  marca: string,
  modelo: string
): Promise<{ url: string | null; texto: string }> {
  try {
    const res = await ddgLinks(`km77 ${marca} ${modelo} ficha tecnica`);
    const km = res.find((r) => /km77\.com/.test(r.url));
    if (!km) return { url: null, texto: "" };
    const page = await fetch(km.url, { headers: { "User-Agent": UA } });
    if (!page.ok) return { url: km.url, texto: "" };
    return { url: km.url, texto: limpiarHtmlAtexto(await page.text(), 14000) };
  } catch {
    return { url: null, texto: "" };
  }
}

/** Extrae el dominio visible de una URL (p. ej. "km77.com"). */
function hostDe(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Fuentes web alternativas cuando km77 no aporta datos.
 * Directiva literal de Daniel: SEGUIR buscando en otras fuentes web
 * ANTES de llamar a Groq ("que siga buscando hasta dar con el real").
 * Prueba varias queries y concatena el texto de los mejores resultados.
 */
async function fuentesWebExtra(
  marca: string,
  modelo: string,
  excluirUrls: string[]
): Promise<{ url: string | null; texto: string }> {
  const queries = [
    `${marca} ${modelo} ficha tecnica`,
    `${marca} ${modelo} precio ficha tecnica especificaciones`,
  ];
  let texto = "";
  let primeraUrl: string | null = null;
  try {
    for (const q of queries) {
      if (texto.length > 8000) break;
      const res = await ddgLinks(q);
      for (const r of res) {
        if (texto.length > 16000) break;
        if (excluirUrls.includes(r.url)) continue;
        if (!/^https?:\/\//.test(r.url)) continue;
        if (!primeraUrl) primeraUrl = r.url;
        try {
          const page = await fetch(r.url, {
            headers: { "User-Agent": UA },
            signal: AbortSignal.timeout(12000),
          });
          if (!page.ok) continue;
          const ct = page.headers.get("content-type") ?? "";
          if (/pdf/i.test(ct)) continue;
          const t = limpiarHtmlAtexto(await page.text(), 8000);
          if (t.length > 500) texto += `\n\n[Fuente: ${r.url}]\n${t}`;
        } catch {
          /* seguir con el siguiente resultado */
        }
      }
    }
  } catch {
    /* sin fuentes extra: el flujo sigue con lo que haya */
  }
  return { url: primeraUrl, texto };
}

/** Vídeo real de YouTube (prueba/review). Solo se acepta si el título menciona el modelo. */
async function videoYoutube(
  marca: string,
  modelo: string
): Promise<{ id: string | null; titulo: string | null; url: string | null }> {
  try {
    const res = await ddgLinks(`youtube ${marca} ${modelo} prueba review`);
    const token = normalizar(modelo).split(" ")[0];
    for (const r of res) {
      const ym = /youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})/.exec(r.url);
      if (ym && token.length > 1 && normalizar(r.title).includes(token)) {
        return { id: ym[1], titulo: r.title, url: `https://www.youtube.com/watch?v=${ym[1]}` };
      }
    }
    return { id: null, titulo: null, url: null };
  } catch {
    return { id: null, titulo: null, url: null };
  }
}

// ── Detección de match en la base local ──────────────────────────────────────
function buscarEnBase(marca: string, modelo: string): string | null {
  const m = normalizar(marca);
  const mo = normalizar(modelo);
  const combo = `${m} ${mo}`;
  for (const b of BASE_INDEX) {
    if (normalizar(b.marca) === m && normalizar(b.modelo) === mo) return b.id;
  }
  for (const b of BASE_INDEX) {
    const base = `${normalizar(b.marca)} ${normalizar(b.modelo)}`;
    if (combo === base || combo.includes(base) || base.includes(combo)) return b.id;
  }
  return null;
}

// ── Llamada a Groq ───────────────────────────────────────────────────────────
const FICHA_SYSTEM = `Eres un redactor técnico de motor. Investiga el coche indicado y devuelve SOLO JSON puro, sin markdown ni explicaciones, con EXACTAMENTE esta estructura:
{
  "marca": "...", "modelo": "...", "version": "<versión/base analizada o null>",
  "tipo": "<Eléctrico|Híbrido enchufable|Híbrido|Gasolina|Diésel|... o null>",
  "categoria": "<SUV|Urbano|Berlina|Familiar|Deportivo|Monovolumen|... o null>",
  "precioDesde": <euros, número o null>,
  "potenciaCv": <número o null>,
  "autonomiaKm": <WLTP, número o null>,
  "bateriaKwh": <número o null>,
  "cargaRapidaKw": <número o null>,
  "ceroCien": <segundos, número o null>,
  "velocidadMax": <km/h, número o null>,
  "maleteroL": <litros, número o null>,
  "largoMm": <número o null>, "anchoMm": <número o null>, "altoMm": <número o null>,
  "pesoKg": <número o null>,
  "consumo": <número o null>, "consumoUnidad": <"kWh/100 km"|"l/100 km"|null>,
  "plazas": <número o null>, "parNm": <número o null>,
  "traccion": <"Delantera"|"Trasera"|"Total"|null>,
  "emisionesCo2": <g/km, número o null>,
  "etiquetaDgt": <"Cero"|"ECO"|"B"|"C"|null>,
  "videoYtId": <id de 11 caracteres o null>,
  "videoYtCanal": <canal o null>,
  "fuenteNombre": "<nombre de la fuente principal>",
  "fuenteUrl": "<url de la fuente principal>",
  "pros": [<mínimo 5, frases cortas>],
  "contras": [<mínimo 5, frases cortas>],
  "curiosidades": [<mínimo 3>],
  "confianza": <"alta"|"media"|"baja">,
  "camposEstimados": [<nombres de los campos con cifra estimada>]
}
REGLAS INQUEBRANTABLES:
- CERO cifras inventadas: si un dato no aparece en el contexto o no lo sabes con seguridad, pon null.
- CERO urls o ids de YouTube inventados: solo usa el videoYtId que aparece en el contexto; si no hay ninguno, null.
- Los datos aproximados o dudosos se marcan en "camposEstimados" (la web los muestra con ≈).
- "confianza": "alta" si la fuente cubre casi todo; "media" si hay huecos; "baja" si casi todo es null.
- Precios: España si es posible; si no, indica el mercado en "version".
- Todo el texto en español.`;

function limpiarJson(raw: string): string {
  return raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
}

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}
function str(v: unknown): string | null {
  return typeof v === "string" && v.trim() ? v.trim() : null;
}
function strArr(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x) => typeof x === "string" && x.trim()).map((x) => x.trim()) : [];
}

async function investigarConGroq(
  marca: string,
  modelo: string,
  fuente: { url: string | null; texto: string; nombre: string | null },
  video: { id: string | null; titulo: string | null; url: string | null }
): Promise<FichaIA> {
  const client = groq();
  const contexto = [
    `Coche a investigar: ${marca} ${modelo}.`,
    fuente.url
      ? `Fuente principal${fuente.nombre ? ` (${fuente.nombre})` : ""}: ${fuente.url}`
      : "No se ha localizado ninguna ficha web del modelo.",
    fuente.texto ? `Texto de la fuente:\n${fuente.texto}` : "",
    video.id
      ? `Vídeo candidato REAL de YouTube (solo úsalo si corresponde al modelo): id=${video.id} título="${video.titulo}" url=${video.url}`
      : "No se ha localizado ningún vídeo real del modelo: videoYtId debe ser null.",
    "Si no encuentras el modelo exacto, usa la versión más cercana e indícalo en \"version\". Si no existe o no hay datos fiables, devuelve casi todo a null con confianza \"baja\".",
  ]
    .filter(Boolean)
    .join("\n\n");

  const response = await withRetry(() =>
    client.chat.completions.create({
      model: MODEL_TEXT,
      max_completion_tokens: MAX_OUTPUT_TOKENS_FICHA,
      reasoning_effort: REASONING_EFFORT,
      messages: [
        { role: "system", content: FICHA_SYSTEM },
        { role: "user", content: contexto },
      ],
    })
  );
  const raw = response.choices[0]?.message?.content ?? "";
  let p: Record<string, unknown>;
  try {
    p = JSON.parse(limpiarJson(raw)) as Record<string, unknown>;
  } catch {
    throw new ConvexError({
      code: "GROQ_PARSE",
      message: "La IA no devolvió una ficha válida. Inténtalo de nuevo.",
    });
  }
  const confianza: Confianza =
    p.confianza === "alta" || p.confianza === "media" || p.confianza === "baja"
      ? p.confianza
      : "baja";
  return {
    marca: str(p.marca) ?? marca,
    modelo: str(p.modelo) ?? modelo,
    version: str(p.version),
    tipo: str(p.tipo),
    categoria: str(p.categoria),
    precioDesde: num(p.precioDesde),
    potenciaCv: num(p.potenciaCv),
    autonomiaKm: num(p.autonomiaKm),
    bateriaKwh: num(p.bateriaKwh),
    cargaRapidaKw: num(p.cargaRapidaKw),
    ceroCien: num(p.ceroCien),
    velocidadMax: num(p.velocidadMax),
    maleteroL: num(p.maleteroL),
    largoMm: num(p.largoMm),
    anchoMm: num(p.anchoMm),
    altoMm: num(p.altoMm),
    pesoKg: num(p.pesoKg),
    consumo: num(p.consumo),
    consumoUnidad: str(p.consumoUnidad),
    plazas: num(p.plazas),
    parNm: num(p.parNm),
    traccion: str(p.traccion),
    emisionesCo2: num(p.emisionesCo2),
    etiquetaDgt: str(p.etiquetaDgt),
    videoYtId: str(p.videoYtId),
    videoYtCanal: str(p.videoYtCanal),
    fuenteNombre: str(p.fuenteNombre),
    fuenteUrl: str(p.fuenteUrl) ?? fuente.url,
    pros: strArr(p.pros),
    contras: strArr(p.contras),
    curiosidades: strArr(p.curiosidades),
    confianza,
    camposEstimados: strArr(p.camposEstimados),
  };
}

// ── ACTION PRINCIPAL ─────────────────────────────────────────────────────────
export const investigarModelo = action({
  args: {
    marca: v.string(),
    modelo: v.string(),
    fingerprint: v.optional(v.string()),
  },
  handler: async (
    ctx,
    { marca, modelo, fingerprint }
  ): Promise<
    | { encontradoEnBase: string; deCache: false }
    | {
        ficha: FichaIA;
        confianza: Confianza;
        camposEstimados: string[];
        fuenteNombre: string | null;
        fuenteUrl: string | null;
        deCache: boolean;
        draftSlug: string | null;
      }
  > => {
    const marcaL = marca.trim().slice(0, 40);
    const modeloL = modelo.trim().slice(0, 60);
    if (!marcaL || !modeloL) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Indica la marca y el modelo." });
    }
    const clave = `${normalizar(marcaL)}|${normalizar(modeloL)}`;

    // 1. Caché: segunda búsqueda instantánea
    const hit = await ctx.runQuery(internal.comparadorInterno.obtenerCache, { clave });
    if (hit) {
      await ctx.runMutation(internal.comparadorInterno.tocarCache, { id: hit._id });
      const ficha = JSON.parse(hit.ficha) as FichaIA;
      return {
        ficha,
        confianza: hit.confianza,
        camposEstimados: hit.camposEstimados,
        fuenteNombre: ficha.fuenteNombre,
        fuenteUrl: ficha.fuenteUrl,
        deCache: true,
        draftSlug: null,
      };
    }

    // 2. ¿Está en la base local? → selección directa, sin IA
    const enBase = buscarEnBase(marcaL, modeloL);
    if (enBase) return { encontradoEnBase: enBase, deCache: false };

    // 3. Rate limit: 5 investigaciones/día por fingerprint anónimo
    // (mismo patrón que multas_rate_limit.ts)
    await ctx.runMutation(internal.multas_rate_limit.checkAndIncrementAnonymousLimit, {
      fingerprint: fingerprint && fingerprint.trim() ? fingerprint : "anon",
    });

    // 4. Búsqueda web OBLIGATORIA antes de Groq (directiva de Daniel)
    const [km77, video] = await Promise.all([fichaKm77(marcaL, modeloL), videoYoutube(marcaL, modeloL)]);

    // 4b. Si km77 no aporta datos, SEGUIR buscando en otras fuentes web
    // ANTES de llamar a Groq (directiva literal de Daniel).
    let fuenteUrl = km77.url;
    let fuenteTexto = km77.texto;
    let fuenteNombre: string | null = km77.url ? hostDe(km77.url) : null;
    if (fuenteTexto.trim().length < 300) {
      const extra = await fuentesWebExtra(marcaL, modeloL, km77.url ? [km77.url] : []);
      if (extra.texto.trim().length > 0) {
        fuenteTexto = `${fuenteTexto}\n${extra.texto}`.trim();
        if (!fuenteUrl) fuenteUrl = extra.url;
        if (!fuenteNombre && extra.url) fuenteNombre = hostDe(extra.url);
      }
    }
    const fuente = { url: fuenteUrl, texto: fuenteTexto, nombre: fuenteNombre };

    // 5. Groq estructura la ficha
    const ficha = await investigarConGroq(marcaL, modeloL, fuente, video);

    // 6. Guardar en caché + crear borrador
    const fuenteUrls = [fuenteUrl, video.url].filter((u): u is string => !!u);
    await ctx.runMutation(internal.comparadorInterno.guardarCache, {
      clave,
      marca: ficha.marca,
      modelo: ficha.modelo,
      ficha: JSON.stringify(ficha),
      confianza: ficha.confianza,
      camposEstimados: ficha.camposEstimados,
      fuenteUrls,
    });
    const { slug } = await ctx.runMutation(internal.comparadorInterno.crearBorrador, {
      ficha: JSON.stringify(ficha),
      marca: ficha.marca,
      modelo: ficha.modelo,
    });

    return {
      ficha,
      confianza: ficha.confianza,
      camposEstimados: ficha.camposEstimados,
      fuenteNombre: ficha.fuenteNombre,
      fuenteUrl: ficha.fuenteUrl,
      deCache: false,
      draftSlug: slug,
    };
  },
});
