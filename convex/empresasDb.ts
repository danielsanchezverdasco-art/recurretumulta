// Queries y mutations internas para el plan empresas — Convex V8 runtime
import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

// ── Query interna: obtener usuario para el checkout de empresas ──────────────
export const getUserForEmpresasCheckout = internalQuery({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get("users", args.userId);
  },
});

// ── Mutation interna: guardar stripeCustomerId y nombre de empresa ────────────
export const saveStripeCustomerId = internalMutation({
  args: {
    userId: v.id("users"),
    stripeCustomerId: v.string(),
    empresaNombre: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get("users", args.userId);
    if (!user) return;
    await ctx.db.patch("users", user._id, {
      stripeCustomerId: args.stripeCustomerId,
      ...(args.empresaNombre ? { empresaNombre: args.empresaNombre } : {}),
    });
  },
});
