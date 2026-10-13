// Queries y mutaciones internas de la caché de análisis de multas.
// Viven aquí (sin "use node") porque los ficheros Node.js solo pueden definir
// actions. Extraído de convex/multas.ts el 03/10/2026.
import { v } from "convex/values";
import { internalQuery, internalMutation, query } from "./_generated/server";

export const setProgreso = internalMutation({
  args: { pid: v.string(), etapa: v.string() },
  handler: async (ctx, { pid, etapa }) => {
    const d = await ctx.db.query("progresoAnalisis").withIndex("by_pid", (q) => q.eq("pid", pid)).first();
    if (d) await ctx.db.patch(d._id, { etapa, t: Date.now() });
    else await ctx.db.insert("progresoAnalisis", { pid, etapa, t: Date.now() });
    // limpieza ligera de entradas viejas (>1 h)
    const viejas = await ctx.db.query("progresoAnalisis").order("asc").take(5);
    for (const x of viejas) if (Date.now() - x.t > 3_600_000) await ctx.db.delete(x._id);
  },
});

// Solo devuelve el nombre de la etapa; el pid es un id aleatorio del navegador.
export const getProgreso = query({
  args: { pid: v.string() },
  handler: async (ctx, { pid }) =>
    (await ctx.db.query("progresoAnalisis").withIndex("by_pid", (q) => q.eq("pid", pid)).first())?.etapa ?? null,
});

export const buscarAnalisisCache = internalQuery({
  args: {
    docHash: v.optional(v.string()),
    expedienteKey: v.optional(v.string()),
  },
  handler: async (ctx, { docHash, expedienteKey }) => {
    if (docHash) {
      const hit = await ctx.db.query("analisisCache").withIndex("by_docHash", (q) => q.eq("docHash", docHash)).first();
      if (hit) return hit;
    }
    if (expedienteKey && expedienteKey !== "SIN_EXPEDIENTE") {
      return await ctx.db.query("analisisCache").withIndex("by_expediente", (q) => q.eq("expedienteKey", expedienteKey)).first();
    }
    return null;
  },
});

export const guardarAnalisisCache = internalMutation({
  args: {
    expedienteKey: v.string(),
    docHash: v.string(),
    resultado: v.string(),
  },
  handler: async (ctx, { expedienteKey, docHash, resultado }) => {
    const hoy = new Date().toISOString();
    // Evitar duplicados si el mismo documento llega dos veces a la vez
    const existente = await ctx.db.query("analisisCache").withIndex("by_docHash", (q) => q.eq("docHash", docHash)).first();
    if (existente) return existente._id;
    return await ctx.db.insert("analisisCache", { expedienteKey, docHash, resultado, createdAt: hoy, hits: 0 });
  },
});

export const contarHitCache = internalMutation({
  args: { id: v.id("analisisCache") },
  handler: async (ctx, { id }) => {
    const doc = await ctx.db.get(id);
    if (doc) await ctx.db.patch(id, { hits: doc.hits + 1 });
  },
});

// Devuelve la carta base (con [COMPLETAR]) guardada en caché para un expediente.
// Si no hay caché, devuelve cadena vacía.
export const obtenerCartaBase = internalQuery({
  args: { expedienteKey: v.string() },
  handler: async (ctx, { expedienteKey }) => {
    if (expedienteKey === "SIN_EXPEDIENTE") return { carta: "" };
    const hit = await ctx.db
      .query("analisisCache")
      .withIndex("by_expediente", (q) => q.eq("expedienteKey", expedienteKey))
      .first();
    if (!hit) return { carta: "" };
    try {
      const r = JSON.parse(hit.resultado) as { carta?: string };
      return { carta: r.carta ?? "" };
    } catch {
      return { carta: "" };
    }
  },
});
