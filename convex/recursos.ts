import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { requireUser } from "./authSimple";

export const saveRecurso = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    expediente: v.optional(v.string()),
    importe: v.optional(v.string()),
    infraccion: v.optional(v.string()),
    provincia: v.optional(v.string()),
    fecha: v.optional(v.string()),
    plazo: v.optional(v.string()),
    carta: v.optional(v.string()),
    // Obsoleto (31/10/2026): se acepta por compatibilidad con clientes antiguos pero se IGNORA; ya no hay % de viabilidad.
    viabilidad: v.optional(v.number()),
    nivel: v.optional(v.union(v.literal("alta"), v.literal("media"), v.literal("baja"), v.literal("no_valorable"))),
  },
  handler: async (ctx, args): Promise<string> => {
    const user = await requireUser(ctx, args.sessionToken);

    const recursoId = await ctx.db.insert("recursos", {
      userId: user._id,
      expediente: args.expediente,
      importe: args.importe,
      infraccion: args.infraccion,
      provincia: args.provincia,
      fecha: args.fecha,
      plazo: args.plazo,
      carta: args.carta,
      nivel: args.nivel,
      status: "pendiente",
      createdAt: new Date().toISOString(),
    });

    return recursoId;
  },
});

export const listMisRecursos = query({
  args: { sessionToken: v.optional(v.string()), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    let user;
    try {
      user = await requireUser(ctx, args.sessionToken);
    } catch {
      return { page: [], isDone: true, continueCursor: "" };
    }
    return await ctx.db
      .query("recursos")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const updateStatus = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    recursoId: v.id("recursos"),
    status: v.union(v.literal("pendiente"), v.literal("enviado"), v.literal("resuelto")),
  },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);
    const recurso = await ctx.db.get("recursos", args.recursoId);
    if (!recurso || recurso.userId !== user._id) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Not allowed" });
    }
    await ctx.db.patch("recursos", args.recursoId, { status: args.status });
  },
});

// Actualiza el texto del recurso una vez el usuario ha introducido sus datos
// personales (nombre, DNI, domicilio) para generar el documento legal final.
export const updateCarta = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    recursoId: v.id("recursos"),
    carta: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);
    const recurso = await ctx.db.get("recursos", args.recursoId);
    if (!recurso || recurso.userId !== user._id) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Not allowed" });
    }
    await ctx.db.patch("recursos", args.recursoId, { carta: args.carta });
  },
});
