// Calendario de lanzamientos 2026-2027: query pública + upsert protegido por token.
// La página /calendario-lanzamientos-2026-2027 lee `listar` y usa la semilla
// local (src/lib/lanzamientos-2026-2027.ts) como fallback durante el prerender.

import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

/** Todos los lanzamientos, ordenados para la página pública */
export const listar = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("lanzamientos")
      .withIndex("by_orden")
      .order("asc")
      .collect();
  },
});

function requireAdminToken(token: string) {
  const expected = process.env.LANZAMIENTOS_ADMIN_TOKEN;
  if (!expected || token !== expected) {
    throw new ConvexError("FORBIDDEN");
  }
}

/**
 * Crea o actualiza un lanzamiento (idempotente por marca+modelo).
 * Protegido: exige el token de admin en args.token.
 */
export const upsert = mutation({
  args: {
    token: v.string(),
    marca: v.string(),
    modelo: v.string(),
    segmento: v.string(),
    fechaPrevista: v.string(),
    fechaConfirmada: v.boolean(),
    fuenteUrl: v.optional(v.string()),
    notas: v.optional(v.string()),
    imagen: v.optional(v.string()),
    orden: v.number(),
  },
  handler: async (ctx, args) => {
    requireAdminToken(args.token);

    const { token, ...data } = args;
    const existente = await ctx.db
      .query("lanzamientos")
      .withIndex("by_marca_modelo", (q) =>
        q.eq("marca", data.marca).eq("modelo", data.modelo)
      )
      .first();

    if (existente) {
      await ctx.db.patch(existente._id, data);
    } else {
      await ctx.db.insert("lanzamientos", data);
    }
    return { ok: true };
  },
});
