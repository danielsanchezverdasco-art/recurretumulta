import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireUser, getUserFromSession } from "./authSimple";

/* Envía una nueva valoración (pendiente de moderación) */
export const crearValoracion = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    nombre: v.string(),
    ciudad: v.optional(v.string()),
    estrellas: v.number(),
    texto: v.string(),
    multa: v.optional(v.string()),
    resultado: v.optional(v.union(v.literal("anulada"), v.literal("reducida"), v.literal("pendiente"))),
  },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);

    // Limitar a 1 valoración por usuario
    const existing = await ctx.db
      .query("valoraciones")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .first();
    if (existing) throw new ConvexError({ code: "CONFLICT", message: "Ya has enviado una valoración" });

    if (args.estrellas < 1 || args.estrellas > 5) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Las estrellas deben ser entre 1 y 5" });
    }
    if (args.texto.trim().length < 10) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "El comentario debe tener al menos 10 caracteres" });
    }

    return await ctx.db.insert("valoraciones", {
      userId: user._id,
      nombre: args.nombre.trim(),
      ciudad: args.ciudad?.trim(),
      estrellas: args.estrellas,
      texto: args.texto.trim(),
      multa: args.multa?.trim(),
      resultado: args.resultado,
      aprobada: true, // publicación automática
      createdAt: new Date().toISOString(),
    });
  },
});

/* Lista pública — solo valoraciones aprobadas, máx 20, orden descendente */
export const listarAprobadas = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("valoraciones")
      .withIndex("by_aprobada", (q) => q.eq("aprobada", true))
      .order("desc")
      .take(20);
  },
});

/* Devuelve la valoración del usuario actual (si existe) */
export const miValoracion = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user) return null;
    return await ctx.db
      .query("valoraciones")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .first();
  },
});

/* Admin: aprobar o rechazar valoración */
export const moderarValoracion = mutation({
  args: { sessionToken: v.optional(v.string()), valoracionId: v.id("valoraciones"), aprobada: v.boolean() },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);
    if (!user?.isAdmin) throw new ConvexError({ code: "FORBIDDEN", message: "Solo administradores" });
    await ctx.db.patch("valoraciones", args.valoracionId, { aprobada: args.aprobada });
  },
});

/* Admin: listar todas las valoraciones pendientes */
export const listarPendientes = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user?.isAdmin) return [];
    return await ctx.db
      .query("valoraciones")
      .withIndex("by_aprobada", (q) => q.eq("aprobada", false))
      .order("desc")
      .take(50);
  },
});
