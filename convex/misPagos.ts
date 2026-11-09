import { v } from "convex/values";
import { query } from "./_generated/server";
import { requireUser } from "./authSimple";

// Lista los pagos del usuario actual (para la página de perfil)
export const listMisPagos = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let user;
    try {
      user = await requireUser(ctx, args.sessionToken);
    } catch {
      return [];
    }
    const pagos = await ctx.db
      .query("payments")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
    return pagos;
  },
});
