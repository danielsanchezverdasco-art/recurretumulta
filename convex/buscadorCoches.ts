/// <reference types="node" />

// ── Buscador de coches: encuentra tu coche ideal en internet (08/10/2026) ────
// Idea de Daniel: el usuario indica modelo, presupuesto máximo, km máximos,
// zona y filtros; la IA rastrea Coches.net, Wallapop, Milanuncios y
// Autoscout24 y presenta las mejores ofertas con el veredicto mecánico.
//
// Veredicto del mecánico (aclaración de Daniel 08/10/2026): NO lo escribe
// Daniel a mano. Se genera AUTOMÁTICAMENTE agregando foros (forocoches,
// foros de modelo) y opiniones de usuarios vía web + Groq. Se presenta como
// "Averías típicas reportadas" con fuentes. Si no hay información fiable:
// estado "sin_datos" (NUNCA inventar).
//
// Robustez: cada portal va en su propio try/catch con timeout; si uno falla,
// los demás siguen (degradación elegante, nunca pantallazo de error).

import { v } from "convex/values";
import { ConvexError } from "convex/values";
import OpenAI from "openai";
import { action, internalAction, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Doc } from "./_generated/dataModel";
import { scrapeAll } from "./buscadorCochesScrapers";
import {
  puntuar,
  hashParams,
  investigarAveriasWeb,
  generarRecomendacionTop3,
  consultarDGT,
  decodificarVIN,
  extraerMatricula,
  extraerVIN,
  enriquecerHistorial,
  CACHE_TTL_MS,
  AVERIAS_TTL_MS,
} from "./buscadorCochesActions";

const UA_LIST = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
  "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
];
const ua = () => UA_LIST[Math.floor(Math.random() * UA_LIST.length)];
const FETCH_TIMEOUT_MS = 12000;

function groq(): OpenAI {
  const apiKey = process.env.GROQ_API_KEY ?? "";
  if (!apiKey) {
    throw new ConvexError({
      code: "GROQ_NO_KEY",
      message: "Servicio no configurado (falta GROQ_API_KEY).",
    });
  }
  return new OpenAI({ baseURL: "https://api.groq.com/openai/v1", apiKey });
}

function normalizar(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function slugUrl(s: string): string {
  return normalizar(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function hostDe(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
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

// ── Búsqueda web (DuckDuckGo HTML, sin API key) ──────────────────────────────
type DDGResult = { url: string; title: string };

async function ddgLinks(query: string): Promise<DDGResult[]> {
  const res = await fetch("https://html.duckduckgo.com/html/?q=" + encodeURIComponent(query), {
    headers: { "User-Agent": ua() },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
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

// ── Tipos ───────────────────────────────────────────────────────────────────
export type Anuncio = {
  id: string;
  portal: "wallapop" | "milanuncios" | "coches.net" | "autoscout24";
  titulo: string;
  precio: number;
  km?: number;
  ano?: number;
  ubicacion?: string;
  url: string;
  imagen?: string;
  vendedorTipo?: "particular" | "profesional";
  verificado: boolean;
  puntuacion: number;
  difMercadoPct?: number;
  // Historial gratuito (08/10/2026): matrícula detectada en el anuncio y
  // etiqueta DGT oficial consultada automáticamente (puede no existir).
  matricula?: string;
  dgtEtiqueta?: "Cero" | "ECO" | "B" | "C";
};

export type FuenteEstado = "ok" | "fallo" | "vacio";
export type Fuentes = {
  wallapop: FuenteEstado;
  milanuncios: FuenteEstado;
  cochesNet: FuenteEstado;
  autoscout24: FuenteEstado;
};

export type BusquedaParams = {
  marca: string;
  modelo: string;
  modeloId?: string;
  presupuestoMax: number;
  kmMax: number;
  anoMin?: number;
  zona: "toda" | "ciudad" | "radio";
  ciudad?: string;
  provincia?: string;
  radioKm?: number;
  sinGolpes: boolean;
  version?: string;
  combustible?: string;
  cambio?: string;
};

const anuncioValidator = v.object({
  id: v.string(),
  portal: v.union(
    v.literal("wallapop"),
    v.literal("milanuncios"),
    v.literal("coches.net"),
    v.literal("autoscout24")
  ),
  titulo: v.string(),
  precio: v.number(),
  km: v.optional(v.number()),
  ano: v.optional(v.number()),
  ubicacion: v.optional(v.string()),
  url: v.string(),
  imagen: v.optional(v.string()),
  vendedorTipo: v.optional(v.union(v.literal("particular"), v.literal("profesional"))),
  verificado: v.boolean(),
  puntuacion: v.number(),
  difMercadoPct: v.optional(v.number()),
  matricula: v.optional(v.string()),
  dgtEtiqueta: v.optional(v.union(v.literal("Cero"), v.literal("ECO"), v.literal("B"), v.literal("C"))),
});

const paramsValidator = v.object({
  marca: v.string(),
  modelo: v.string(),
  modeloId: v.optional(v.string()),
  presupuestoMax: v.number(),
  kmMax: v.number(),
  anoMin: v.optional(v.number()),
  zona: v.union(v.literal("toda"), v.literal("ciudad"), v.literal("radio")),
  ciudad: v.optional(v.string()),
  provincia: v.optional(v.string()),
  radioKm: v.optional(v.number()),
  sinGolpes: v.boolean(),
  version: v.optional(v.string()),
  combustible: v.optional(v.string()),
  cambio: v.optional(v.string()),
});

// ── Caché (queries internas) ────────────────────────────────────────────────
export const _getCache = internalQuery({
  args: { queryHash: v.string() },
  handler: async (ctx, { queryHash }) => {
    const row = await ctx.db
      .query("buscadorCochesCache")
      .withIndex("by_queryHash", (q) => q.eq("queryHash", queryHash))
      .first();
    if (!row) return null;
    return row;
  },
});

export const _setCache = internalMutation({
  args: {
    queryHash: v.string(),
    params: v.string(),
    anuncios: v.array(anuncioValidator),
    fuentes: v.object({
      wallapop: v.string(),
      milanuncios: v.string(),
      cochesNet: v.string(),
      autoscout24: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    const existente = await ctx.db
      .query("buscadorCochesCache")
      .withIndex("by_queryHash", (q) => q.eq("queryHash", args.queryHash))
      .first();
    const doc = {
      queryHash: args.queryHash,
      params: args.params,
      anuncios: args.anuncios,
      fuentes: args.fuentes,
      creadoEn: Date.now(),
    };
    if (existente) await ctx.db.replace(existente._id, doc);
    else await ctx.db.insert("buscadorCochesCache", doc);
  },
});

export const _getAverias = internalQuery({
  args: { modeloId: v.string() },
  handler: async (ctx, { modeloId }) => {
    return await ctx.db
      .query("averiasTipicas")
      .withIndex("by_modeloId", (q) => q.eq("modeloId", modeloId))
      .first();
  },
});

export const _setAverias = internalMutation({
  args: {
    modeloId: v.string(),
    marca: v.string(),
    modelo: v.string(),
    estado: v.union(v.literal("ok"), v.literal("sin_datos")),
    averias: v.array(
      v.object({
        titulo: v.string(),
        detalle: v.string(),
        frecuencia: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
      })
    ),
    fuentes: v.array(
      v.object({ titulo: v.string(), url: v.string(), dominio: v.string() })
    ),
  },
  handler: async (ctx, args) => {
    const existente = await ctx.db
      .query("averiasTipicas")
      .withIndex("by_modeloId", (q) => q.eq("modeloId", args.modeloId))
      .first();
    const doc = { ...args, actualizadoEn: Date.now() };
    if (existente) await ctx.db.replace(existente._id, doc);
    else await ctx.db.insert("averiasTipicas", doc);
  },
});

// ── Actions públicas ────────────────────────────────────────────────────────

/**
 * Busca anuncios en los 4 portales (con caché de 1h).
 * Degradación elegante: cada portal falla por su cuenta, nunca 500 global.
 */
export const buscarAnuncios = action({
  args: { params: paramsValidator },
  handler: async (ctx, { params }): Promise<{
    anuncios: Anuncio[];
    fuentes: Fuentes;
    cached: boolean;
  }> => {
    // Validación básica
    const marca = params.marca.trim().slice(0, 40);
    const modelo = params.modelo.trim().slice(0, 60);
    if (!marca || !modelo) {
      throw new ConvexError({ code: "PARAMS_INVALIDOS", message: "Indica marca y modelo." });
    }
    if (!(params.presupuestoMax > 0) || !(params.kmMax > 0)) {
      throw new ConvexError({ code: "PARAMS_INVALIDOS", message: "Presupuesto y km deben ser positivos." });
    }
    const p: BusquedaParams = { ...params, marca, modelo };

    const queryHash = hashParams(p);
    const cached = await ctx.runQuery(internal.buscadorCoches._getCache, { queryHash });
    if (cached && Date.now() - cached.creadoEn < CACHE_TTL_MS) {
      return {
        anuncios: cached.anuncios as Anuncio[],
        fuentes: cached.fuentes as Fuentes,
        cached: true,
      };
    }

    const { anuncios, estados } = await scrapeAll(p);
    // Historial gratuito: matrícula + etiqueta DGT por anuncio (concurrencia limitada)
    await enriquecerHistorial(anuncios);
    const puntuados = puntuar(anuncios, p.kmMax).slice(0, 40);
    const fuentes: Fuentes = {
      wallapop: estados.wallapop,
      milanuncios: estados.milanuncios,
      cochesNet: estados.cochesNet,
      autoscout24: estados.autoscout24,
    };
    await ctx.runMutation(internal.buscadorCoches._setCache, {
      queryHash,
      params: JSON.stringify(p),
      anuncios: puntuados,
      fuentes: {
        wallapop: fuentes.wallapop,
        milanuncios: fuentes.milanuncios,
        cochesNet: fuentes.cochesNet,
        autoscout24: fuentes.autoscout24,
      },
    });
    return { anuncios: puntuados, fuentes, cached: false };
  },
});

/**
 * Averías típicas reportadas del modelo (agregación automática de foros).
 * Nunca inventa: sin información fiable → estado "sin_datos".
 */
export const obtenerAverias = action({
  args: {
    modeloId: v.string(),
    marca: v.string(),
    modelo: v.string(),
  },
  handler: async (ctx, args): Promise<{
    estado: "ok" | "sin_datos";
    averias: { titulo: string; detalle: string; frecuencia: "alta" | "media" | "baja" }[];
    fuentes: { titulo: string; url: string; dominio: string }[];
  }> => {
    const modeloId = args.modeloId.trim().slice(0, 200) || `libre:${normalizar(args.marca)} ${normalizar(args.modelo)}`;

    const existente = await ctx.runQuery(internal.buscadorCoches._getAverias, { modeloId });
    if (existente && Date.now() - existente.actualizadoEn < AVERIAS_TTL_MS) {
      return {
        estado: existente.estado,
        averias: existente.averias,
        fuentes: existente.fuentes,
      };
    }
    // Investigar (puede tardar ~20-40s; el frontend muestra skeleton)
    const info = await investigarAveriasWeb(args.marca.trim(), args.modelo.trim());
    await ctx.runMutation(internal.buscadorCoches._setAverias, {
      modeloId,
      marca: args.marca.trim().slice(0, 40),
      modelo: args.modelo.trim().slice(0, 60),
      estado: info.estado,
      averias: info.averias,
      fuentes: info.fuentes,
    });
    return info;
  },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const averiasResumenValidator = v.object({
  estado: v.union(v.literal("ok"), v.literal("sin_datos")),
  averias: v.array(
    v.object({
      titulo: v.string(),
      detalle: v.string(),
      frecuencia: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
    })
  ),
});

/**
 * "Mi recomendación personal": TOP 3 de anuncios con motivo honesto
 * (tono de colega que sabe de coches). Tiene en cuenta km, precio vs
 * mercado, año, vendedor y averías típicas del modelo.
 */
export const obtenerRecomendacion = action({
  args: {
    marca: v.string(),
    modelo: v.string(),
    anuncios: v.array(anuncioValidator),
    averias: v.optional(averiasResumenValidator),
  },
  handler: async (_ctx, args) => {
    const top10 = [...args.anuncios]
      .sort((x, y) => y.puntuacion - x.puntuacion)
      .slice(0, 10);
    return await generarRecomendacionTop3(
      top10,
      args.marca.trim().slice(0, 40),
      args.modelo.trim().slice(0, 60),
      (args.averias?.averias ?? []).map((a) => ({
        titulo: a.titulo,
        detalle: a.detalle,
        frecuencia: a.frecuencia,
      }))
    );
  },
});

/**
 * Envía los resultados de la búsqueda por email (Resend).
 */
export const enviarResultados = action({
  args: {
    email: v.string(),
    marca: v.string(),
    modelo: v.string(),
    presupuestoMax: v.number(),
    anuncios: v.array(anuncioValidator),
  },
  handler: async (ctx, args): Promise<{ ok: boolean }> => {
    const email = args.email.trim().toLowerCase();
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      throw new ConvexError({ code: "EMAIL_INVALIDO", message: "Email no válido." });
    }
    const top = args.anuncios.slice(0, 10);
    await ctx.runAction(internal.emails.sendBuscadorResultados, {
      to: email,
      marca: args.marca.trim().slice(0, 40),
      modelo: args.modelo.trim().slice(0, 60),
      presupuestoMax: Math.round(args.presupuestoMax),
      anuncios: top.map((a) => ({
        titulo: a.titulo.slice(0, 120),
        precio: Math.round(a.precio),
        km: a.km,
        ano: a.ano,
        ubicacion: a.ubicacion,
        portal: a.portal,
        url: a.url,
        difMercadoPct: a.difMercadoPct,
      })),
    });
    return { ok: true };
  },
});

// ── Valorador: "¿Ya tienes un coche visto?" ─────────────────────────────────
// El usuario pega la URL de un anuncio; la IA lo analiza:
// precio vs mercado, puntos fuertes/débiles, averías típicas, historial
// (DGT por matrícula + VIN, fuentes gratuitas) y veredicto directo.
// Tono de colega que sabe. Sin inventar: si no se extrae, se dice.

type Valoracion = {
  ok: boolean;
  error?: string;
  portal?: string;
  titulo?: string;
  precio?: number;
  km?: number;
  ano?: number;
  ubicacion?: string;
  descripcion?: string;
  numFotos?: number;
  vendedorTipo?: "particular" | "profesional";
  url?: string;
  matricula?: string;
  vin?: string;
  dgt?: {
    matricula: string;
    etiqueta: "Cero" | "ECO" | "B" | "C" | null;
    encontrada: boolean;
  };
  vinInfo?: {
    vin: string;
    marca?: string;
    modelo?: string;
    ano?: number;
    combustible?: string;
    pais?: string;
    encontrada: boolean;
  };
  mercado?: { mediana: number; n: number };
  difMercadoPct?: number;
  veredicto?: "chollo" | "justo" | "caro" | "dudoso";
  titular?: string;
  puntosFuertes?: string[];
  puntosDebiles?: string[];
  lineaHistorial?: string;
  consejo?: string;
  averias?: { titulo: string; detalle: string; frecuencia: string }[];
};

function detectarPortal(url: string): Anuncio["portal"] | null {
  const h = hostDe(url);
  if (h.includes("wallapop")) return "wallapop";
  if (h.includes("milanuncios")) return "milanuncios";
  if (h.includes("coches.net") || h.includes("cochesnet")) return "coches.net";
  if (h.includes("autoscout24")) return "autoscout24";
  return null;
}

const SENALES_HISTORIAL: { re: RegExp; texto: string; positiva: boolean }[] = [
  { re: /libro\s+de\s+revisiones|revisiones\s+selladas|mantenimiento\s+al\s+d[ií]a/i, texto: "Menciona libro de revisiones", positiva: true },
  { re: /km\s+certificados|kilometraje\s+certificado/i, texto: "Menciona km certificados", positiva: true },
  { re: /sin\s+accidentes|nunca\s+siniestrado|sin\s+siniestros/i, texto: "Declara sin accidentes", positiva: true },
  { re: /itv\s+(al\s+d[ií]a|en\s+vigor|reci[eé]n)/i, texto: "ITV al día según el anuncio", positiva: true },
  { re: /\bcarfax\b/i, texto: "Menciona informe Carfax", positiva: true },
  { re: /\bcarvertical\b/i, texto: "Menciona informe CarVertical", positiva: true },
  { re: /segunda\s+mano|de\s+segunda/i, texto: "Vehículo de segunda mano", positiva: false },
];

async function extraerAnuncio(url: string): Promise<Partial<Valoracion> & { html: string }> {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const og = (prop: string) => {
    const m = new RegExp(`<meta[^>]+property=["']og:${prop}["'][^>]+content=["']([^"']+)["']`, "i").exec(html)
      ?? new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:${prop}["']`, "i").exec(html);
    return m?.[1]?.trim();
  };
  const titulo = og("title") ?? /<h1[^>]*>([\s\S]{0,200}?)<\/h1>/i.exec(html)?.[1]?.replace(/<[^>]+>/g, " ").trim();
  const texto = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const precioM = /([\d.]+)\s*€/.exec(texto.slice(0, 8000));
  const precio = precioM ? parseInt(precioM[1].replace(/\./g, ""), 10) : undefined;
  const kmM = /([\d.]+)\s*km/i.exec(texto.slice(0, 12000));
  const km = kmM ? parseInt(kmM[1].replace(/\./g, ""), 10) : undefined;
  const anoM = /(19|20)\d{2}/.exec((titulo ?? "") + " " + texto.slice(0, 3000));
  const ano = anoM ? parseInt(anoM[0], 10) : undefined;
  const descripcion = og("description")?.slice(0, 1200);
  const numFotos = (html.match(/<img[^>]+src=/gi) ?? []).length;
  const vendedorTipo = /profesional|concesionario|compraventa/i.test(texto.slice(0, 6000)) ? "profesional" as const : "particular" as const;
  return { titulo, precio: precio && precio > 0 ? precio : undefined, km, ano, descripcion, numFotos, vendedorTipo, html };
}

export const valorarAnuncio = action({
  args: { url: v.string() },
  handler: async (ctx, { url }): Promise<Valoracion> => {
    const limpia = url.trim().slice(0, 500);
    if (!/^https?:\/\//i.test(limpia)) {
      return { ok: false, error: "Pega una URL completa del anuncio (https://…)." };
    }
    const portal = detectarPortal(limpia);
    if (!portal) {
      return { ok: false, error: "Solo analizamos anuncios de Coches.net, Wallapop, Milanuncios y Autoscout24." };
    }
    let ext: Partial<Valoracion> & { html: string };
    try {
      ext = await extraerAnuncio(limpia);
    } catch {
      return { ok: false, error: "No hemos podido leer ese anuncio (la web bloqueó la lectura). Prueba con el buscador para comparar el modelo." };
    }
    if (!ext.titulo || !ext.precio) {
      return { ok: false, error: "No pudimos extraer título y precio de ese enlace. Revísalo o usa el buscador por modelo." };
    }

    const textoTotal = `${ext.titulo} ${ext.descripcion ?? ""}`;
    const matricula = extraerMatricula(textoTotal);
    const vin = extraerVIN(textoTotal);

    // DGT + VIN en paralelo (fuentes gratuitas; si fallan → datos ausentes)
    const [dgt, vinInfo] = await Promise.all([
      matricula ? consultarDGT(matricula) : Promise.resolve(null),
      vin ? decodificarVIN(vin) : Promise.resolve(null),
    ]);

    // Detectar marca/modelo del título para comparar con el mercado
    const tituloN = normalizar(ext.titulo);
    const palabras = tituloN.split(" ").filter((w) => w.length > 2);
    const marca = palabras[0] ?? "";
    const modelo = palabras.slice(1, 4).join(" ");
    let mercado: { mediana: number; n: number } | undefined;
    let difMercadoPct: number | undefined;
    try {
      const { anuncios } = await scrapeAll({
        marca, modelo, presupuestoMax: ext.precio * 2, kmMax: 999999,
        zona: "toda", sinGolpes: false,
      });
      const precios = anuncios.map((a) => a.precio).sort((a, b) => a - b);
      if (precios.length >= 3) {
        const mediana = precios[Math.floor(precios.length / 2)];
        mercado = { mediana, n: precios.length };
        difMercadoPct = Math.round(((ext.precio - mediana) / mediana) * 100);
      }
    } catch { /* sin mercado: el veredicto lo dirá */ }

    // Señales de historial en el texto del anuncio
    const senales = SENALES_HISTORIAL.filter((s) => s.re.test(textoTotal)).map((s) => s.texto);
    const tieneSenalesPositivas = senales.some((_, i) =>
      SENALES_HISTORIAL.find((s) => s.texto === senales[i])?.positiva
    );

    // Averías típicas del modelo (caché 30 días)
    let averias: { titulo: string; detalle: string; frecuencia: string }[] = [];
    try {
      const modeloId = `libre:${normalizar(marca)} ${normalizar(modelo)}`;
      const existente = await ctx.runQuery(internal.buscadorCoches._getAverias, { modeloId });
      if (existente && existente.estado === "ok" && Date.now() - existente.actualizadoEn < AVERIAS_TTL_MS) {
        averias = existente.averias;
      } else {
        const info = await investigarAveriasWeb(marca, modelo);
        if (info.estado === "ok") {
          averias = info.averias;
          await ctx.runMutation(internal.buscadorCoches._setAverias, {
            modeloId, marca: marca.slice(0, 40), modelo: modelo.slice(0, 60),
            estado: "ok", averias: info.averias, fuentes: info.fuentes,
          });
        }
      }
    } catch { /* sin averías: honesto */ }

    // Veredicto con Groq (tono de colega, grounding estricto)
    let veredicto: Valoracion["veredicto"] = "dudoso";
    let titular = "";
    let puntosFuertes: string[] = [];
    let puntosDebiles: string[] = [];
    let lineaHistorial = "";
    let consejo = "";
    try {
      const client = groq();
      const prompt =
        `Eres un amigo que sabe mucho de coches. Analiza este anuncio de segunda mano y da un veredicto directo.\n\n` +
        `ANUNCIO:\n${JSON.stringify({ titulo: ext.titulo, precio: ext.precio, km: ext.km, ano: ext.ano, descripcion: (ext.descripcion ?? "").slice(0, 800), numFotos: ext.numFotos, vendedorTipo: ext.vendedorTipo, portal })}\n\n` +
        `MERCADO: ${mercado ? `mediana de ${mercado.n} anuncios similares: ${mercado.mediana} € (este está ${difMercadoPct}% ${difMercadoPct! <= 0 ? "por debajo" : "por encima"})` : "no se pudo calcular"}\n\n` +
        `DGT: ${dgt ? (dgt.encontrada ? `matrícula ${dgt.matricula}, etiqueta ${dgt.etiqueta ?? "sin distintivo"}` : "matrícula no encontrada en DGT") : "el anuncio no muestra matrícula"}\n` +
        `VIN: ${vinInfo ? (vinInfo.encontrada ? `${vinInfo.marca} ${vinInfo.modelo ?? ""} ${vinInfo.ano ?? ""}`.trim() : "VIN no decodificado") : "sin VIN en el anuncio"}\n` +
        `AVERÍAS TÍPICAS: ${averias.length ? JSON.stringify(averias) : "sin datos"}\n` +
        `SEÑALES DE HISTORIAL EN EL ANUNCIO: ${senales.length ? senales.join("; ") : "ninguna (no menciona revisiones, ni km certificados, ni accidentes)"}\n\n` +
        `Devuelve SOLO JSON:\n{"veredicto": "chollo|justo|caro|dudoso", "titular": "1 frase directa", "puntosFuertes": ["..."], "puntosDebiles": ["..."], "lineaHistorial": "qué se sabe gratis + recomendación (máx 2 frases)", "consejo": "1-2 frases finales"}\n\n` +
        `Reglas: usa SOLO los datos de arriba. Si algo no se pudo verificar, dilo ("no se pudo comprobar"). ` +
        `"chollo" solo si está claramente bajo mercado con buen estado; "dudoso" si faltan datos clave. ` +
        `En lineaHistorial: si hay matrícula+DGT, cítelo; si no, recomienda pedir la matrícula y el informe DGT antes de comprar. ` +
        `Tono de colega directo. Nada de relleno.`;
      const completion = await client.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 900,
        temperature: 0.4,
      });
      const raw = completion.choices[0]?.message?.content ?? "";
      const jsonM = /```json\s*([\s\S]*?)```/.exec(raw) ?? /(\{[\s\S]*\})/.exec(raw);
      if (jsonM) {
        const p = JSON.parse(jsonM[1]) as {
          veredicto?: string; titular?: string; puntosFuertes?: string[];
          puntosDebiles?: string[]; lineaHistorial?: string; consejo?: string;
        };
        if (["chollo", "justo", "caro", "dudoso"].includes(p.veredicto ?? "")) {
          veredicto = p.veredicto as Valoracion["veredicto"];
          titular = String(p.titular ?? "").slice(0, 200);
          puntosFuertes = (p.puntosFuertes ?? []).slice(0, 5).map((s) => String(s).slice(0, 160));
          puntosDebiles = (p.puntosDebiles ?? []).slice(0, 5).map((s) => String(s).slice(0, 160));
          lineaHistorial = String(p.lineaHistorial ?? "").slice(0, 300);
          consejo = String(p.consejo ?? "").slice(0, 300);
        }
      }
    } catch { /* fallback abajo */ }

    // Fallback determinista si Groq falla: honesto y sin inventar
    if (!titular) {
      if (difMercadoPct !== undefined && difMercadoPct <= -10) {
        veredicto = "chollo";
        titular = `Está ${Math.abs(difMercadoPct)}% por debajo de la media de ${mercado!.n} anuncios similares.`;
      } else if (difMercadoPct !== undefined && difMercadoPct <= 5) {
        veredicto = "justo";
        titular = "Precio en línea con el mercado.";
      } else if (difMercadoPct !== undefined && difMercadoPct > 5) {
        veredicto = "caro";
        titular = `Está ${difMercadoPct}% por encima de la media. Negocia o espera.`;
      } else {
        veredicto = "dudoso";
        titular = "No pudimos comparar con el mercado; revísalo con calma.";
      }
      lineaHistorial = matricula
        ? `Matrícula ${matricula} localizada en el anuncio.`
        : "El anuncio no muestra matrícula: pídesela al vendedor antes de quedar.";
      if (!tieneSenalesPositivas) {
        lineaHistorial += " No menciona historial de revisiones: pide el informe DGT antes de comprar.";
      }
      consejo = "Verifica siempre el coche en persona y el informe DGT antes de pagar.";
    }

    return {
      ok: true, portal, titulo: ext.titulo, precio: ext.precio, km: ext.km, ano: ext.ano,
      descripcion: ext.descripcion, numFotos: ext.numFotos, vendedorTipo: ext.vendedorTipo, url: limpia,
      matricula: matricula ?? undefined, vin: vin ?? undefined,
      dgt: dgt ?? undefined, vinInfo: vinInfo ?? undefined,
      mercado, difMercadoPct, veredicto, titular, puntosFuertes, puntosDebiles,
      lineaHistorial, consejo, averias,
    };
  },
});

// ── Alertas de precio ───────────────────────────────────────────────────────
// El usuario guarda una búsqueda; un cron llama a comprobarAlertas y avisa
// por email cuando: a) baja el precio de un anuncio ya visto,
// b) aparece un anuncio nuevo más barato que cumple sus filtros.
// WhatsApp: canal preparado en el schema; requiere API de WhatsApp Business
// (pendiente de credenciales) — el código lo contempla pero hoy envía email.

export const _getAlerta = internalQuery({
  args: { email: v.string(), queryHash: v.string() },
  handler: async (ctx, { email, queryHash }) => {
    return await ctx.db
      .query("alertasBuscador")
      .withIndex("by_email_queryHash", (q) => q.eq("email", email).eq("queryHash", queryHash))
      .first();
  },
});

export const _alertasActivas = internalQuery({
  args: {},
  handler: async (ctx): Promise<Doc<"alertasBuscador">[]> => {
    return await ctx.db
      .query("alertasBuscador")
      .withIndex("by_activo", (q) => q.eq("activo", true))
      .collect();
  },
});

export const _guardarAlerta = internalMutation({
  args: {
    email: v.string(),
    canal: v.union(v.literal("email"), v.literal("whatsapp")),
    telefono: v.optional(v.string()),
    queryHash: v.string(),
    params: v.string(),
    marca: v.string(),
    modelo: v.string(),
    ultimoMinPrecio: v.optional(v.number()),
    ultimosPrecios: v.array(v.object({ id: v.string(), precio: v.number() })),
  },
  handler: async (ctx, args): Promise<{ yaExistia: boolean }> => {
    const existente = await ctx.db
      .query("alertasBuscador")
      .withIndex("by_email_queryHash", (q) => q.eq("email", args.email).eq("queryHash", args.queryHash))
      .first();
    if (existente) {
      await ctx.db.patch(existente._id, {
        activo: true,
        params: args.params,
        ultimoMinPrecio: args.ultimoMinPrecio,
        ultimosPrecios: args.ultimosPrecios,
      });
      return { yaExistia: true };
    }
    await ctx.db.insert("alertasBuscador", { ...args, activo: true, creadoEn: Date.now() });
    return { yaExistia: false };
  },
});

export const _actualizarAlerta = internalMutation({
  args: {
    id: v.id("alertasBuscador"),
    ultimoMinPrecio: v.optional(v.number()),
    ultimosPrecios: v.array(v.object({ id: v.string(), precio: v.number() })),
    ultimoAvisoEn: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      ultimoMinPrecio: args.ultimoMinPrecio,
      ultimosPrecios: args.ultimosPrecios,
      ultimoAvisoEn: args.ultimoAvisoEn,
    });
  },
});

/** Guarda (o reactiva) una alerta de precio para una búsqueda. */
export const guardarAlerta = action({
  args: {
    email: v.string(),
    canal: v.union(v.literal("email"), v.literal("whatsapp")),
    telefono: v.optional(v.string()),
    params: paramsValidator,
  },
  handler: async (ctx, args): Promise<{ ok: boolean; yaExistia: boolean; canal: string }> => {
    const email = args.email.trim().toLowerCase();
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      throw new ConvexError({ code: "EMAIL_INVALIDO", message: "Email no válido." });
    }
    if (args.canal === "whatsapp" && !args.telefono) {
      throw new ConvexError({ code: "TELEFONO_REQUERIDO", message: "Indica tu WhatsApp para las alertas." });
    }
    const p: BusquedaParams = {
      ...args.params,
      marca: args.params.marca.trim().slice(0, 40),
      modelo: args.params.modelo.trim().slice(0, 60),
    };
    const queryHash = hashParams(p);
    // Baseline inmediata: primer rastreo para comparar después
    let baseline: { id: string; precio: number }[] = [];
    let minPrecio: number | undefined;
    try {
      const { anuncios } = await scrapeAll(p);
      baseline = anuncios.slice(0, 40).map((a) => ({ id: a.id, precio: a.precio }));
      if (baseline.length) minPrecio = Math.min(...baseline.map((b) => b.precio));
    } catch { /* sin baseline: el cron la creará */ }
    const r = await ctx.runMutation(internal.buscadorCoches._guardarAlerta, {
      email,
      canal: args.canal,
      telefono: args.telefono?.trim().slice(0, 20),
      queryHash,
      params: JSON.stringify(p),
      marca: p.marca,
      modelo: p.modelo,
      ultimoMinPrecio: minPrecio,
      ultimosPrecios: baseline,
    });
    return { ok: true, yaExistia: r.yaExistia, canal: args.canal };
  },
});

/**
 * Comprueba todas las alertas activas (la llama un cron).
 * Para cada una: re-rastrea, detecta bajadas y nuevos chollos, avisa por email.
 */
export const comprobarAlertas = internalAction({
  args: {},
  handler: async (ctx): Promise<{ revisadas: number; avisos: number }> => {
    const alertas = await ctx.runQuery(internal.buscadorCoches._alertasActivas, {});
    let avisos = 0;
    for (const al of alertas) {
      try {
        const p = JSON.parse(al.params) as BusquedaParams;
        const { anuncios } = await scrapeAll(p);
        const actual = new Map(anuncios.map((a) => [a.id, a]));
        const anterior = new Map(al.ultimosPrecios.map((x) => [x.id, x.precio]));

        const bajadas: { id: string; titulo: string; antes: number; ahora: number; url: string }[] = [];
        for (const [id, precioAntes] of anterior) {
          const a = actual.get(id);
          if (a && a.precio < precioAntes * 0.97) {
            bajadas.push({ id, titulo: a.titulo, antes: precioAntes, ahora: a.precio, url: a.url });
          }
        }
        const nuevosBaratos = anuncios.filter(
          (a) =>
            !anterior.has(a.id) &&
            al.ultimoMinPrecio !== undefined &&
            a.precio < al.ultimoMinPrecio * 0.97
        );

        if (bajadas.length > 0 || nuevosBaratos.length > 0) {
          await ctx.runAction(internal.emails.sendAlertaBuscador, {
            to: al.email,
            marca: al.marca,
            modelo: al.modelo,
            bajadas: bajadas.slice(0, 5).map((b) => ({
              titulo: b.titulo.slice(0, 120),
              antes: Math.round(b.antes),
              ahora: Math.round(b.ahora),
              url: b.url,
            })),
            nuevos: nuevosBaratos.slice(0, 5).map((a) => ({
              titulo: a.titulo.slice(0, 120),
              precio: Math.round(a.precio),
              km: a.km,
              portal: a.portal,
              url: a.url,
            })),
          });
          avisos++;
          await ctx.runMutation(internal.buscadorCoches._actualizarAlerta, {
            id: al._id,
            ultimoMinPrecio:
              actual.size > 0 ? Math.min(...[...actual.values()].map((a) => a.precio)) : al.ultimoMinPrecio,
            ultimosPrecios: [...actual.entries()].slice(0, 40).map(([id, a]) => ({ id, precio: a.precio })),
            ultimoAvisoEn: Date.now(),
          });
        } else if (actual.size > 0) {
          // Sin avisos: actualiza baseline igualmente
          await ctx.runMutation(internal.buscadorCoches._actualizarAlerta, {
            id: al._id,
            ultimoMinPrecio: Math.min(...[...actual.values()].map((a) => a.precio)),
            ultimosPrecios: [...actual.entries()].slice(0, 40).map(([id, a]) => ({ id, precio: a.precio })),
          });
        }
      } catch (e) {
        console.error("[buscadorCoches] comprobarAlertas fallo en alerta", al._id, e);
      }
    }
    return { revisadas: alertas.length, avisos };
  },
});

// ── Gráfica de precios por modelo ───────────────────────────────────────────
// Datos reales: precio de nuevo (ficha) + mediana actual de segunda mano
// (rastreo). Curva de depreciación intermedia = ESTIMACIÓN (etiquetada).
// Señal: ¿buen momento para comprar o mejor esperar?

export const historialPrecios = action({
  args: {
    marca: v.string(),
    modelo: v.string(),
    precioNuevo: v.optional(v.number()), // precioDesde de la ficha (dato real)
  },
  handler: async (_ctx, args): Promise<{
    ok: boolean;
    precioNuevo?: number;
    mediana?: number;
    n?: number;
    edadMedia?: number;
    puntos: { edad: number; valor: number; real: boolean; etiqueta: string }[];
    senal?: "buen_momento" | "en_linea" | "espera";
    mensaje?: string;
  }> => {
    const marca = args.marca.trim().slice(0, 40);
    const modelo = args.modelo.trim().slice(0, 60);
    let mediana: number | undefined;
    let n = 0;
    let edadMedia: number | undefined;
    try {
      const { anuncios } = await scrapeAll({
        marca, modelo, presupuestoMax: 500000, kmMax: 999999, zona: "toda", sinGolpes: false,
      });
      const precios = anuncios.map((a) => a.precio).sort((a, b) => a - b);
      if (precios.length >= 3) {
        mediana = precios[Math.floor(precios.length / 2)];
        n = precios.length;
        const anos = anuncios.map((a) => a.ano).filter((x): x is number => x !== undefined);
        if (anos.length) {
          edadMedia = Math.max(1, Math.round(new Date().getFullYear() - anos.reduce((s, x) => s + x, 0) / anos.length));
        }
      }
    } catch { /* sin datos de mercado */ }

    const precioNuevo = args.precioNuevo && args.precioNuevo > 0 ? Math.round(args.precioNuevo) : undefined;
    if (!precioNuevo || !mediana || !edadMedia) {
      return { ok: false, puntos: [] };
    }
    // Curva estimada: 15%/año los 3 primeros, 8%/año después (etiquetada como estimación)
    const curva = (edad: number) =>
      Math.round(precioNuevo * Math.pow(0.85, Math.min(edad, 3)) * Math.pow(0.92, Math.max(0, edad - 3)));
    const puntos: { edad: number; valor: number; real: boolean; etiqueta: string }[] = [
      { edad: 0, valor: precioNuevo, real: true, etiqueta: "Nuevo" },
    ];
    for (let e = 1; e < edadMedia; e++) {
      puntos.push({ edad: e, valor: curva(e), real: false, etiqueta: `~${e}a` });
    }
    puntos.push({ edad: edadMedia, valor: mediana, real: true, etiqueta: "Hoy 2ª mano" });

    const esperado = curva(edadMedia);
    const dif = (mediana - esperado) / esperado;
    let senal: "buen_momento" | "en_linea" | "espera" = "en_linea";
    let mensaje = "El precio está en línea con la depreciación esperada.";
    if (dif <= -0.07) {
      senal = "buen_momento";
      mensaje = `Buen momento: la media está ${Math.abs(Math.round(dif * 100))}% por debajo de la depreciación esperada.`;
    } else if (dif >= 0.07) {
      senal = "espera";
      mensaje = `Caro ahora mismo: la media está ${Math.round(dif * 100)}% por encima de lo esperado. Si puedes, espera.`;
    }
    return { ok: true, precioNuevo, mediana, n, edadMedia, puntos, senal, mensaje };
  },
});
