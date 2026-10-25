// ── newsletterSubs: mutaciones públicas + lectura interna (isolate, SIN "use node") ──
// Las actions con Resend viven en newsletter.ts ("use node").

import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { internalQuery, mutation } from "./_generated/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Token aleatorio URL-safe para la baja en 1 clic. */
function generarTokenBaja(): string {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const suscribir = mutation({
  args: {
    email: v.string(),
    origen: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      throw new ConvexError("EMAIL_INVALIDO");
    }
    const existente = await ctx.db
      .query("newsletterSubs")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existente) {
      if (existente.activo) {
        return { ok: true, yaSuscrito: true as boolean, reactivado: false as boolean };
      }
      await ctx.db.patch(existente._id, {
        activo: true,
        fechaAlta: new Date().toISOString(),
        origen: args.origen ?? existente.origen,
        tokenBaja: existente.tokenBaja || generarTokenBaja(),
      });
      return { ok: true, yaSuscrito: false as boolean, reactivado: true as boolean };
    }

    await ctx.db.insert("newsletterSubs", {
      email,
      fechaAlta: new Date().toISOString(),
      activo: true,
      origen: args.origen ?? "web",
      tokenBaja: generarTokenBaja(),
    });
    return { ok: true, yaSuscrito: false as boolean, reactivado: false as boolean };
  },
});

export const darDeBaja = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const sub = await ctx.db
      .query("newsletterSubs")
      .withIndex("by_tokenBaja", (q) => q.eq("tokenBaja", args.token))
      .first();
    if (!sub) {
      throw new ConvexError("TOKEN_INVALIDO");
    }
    if (sub.activo) {
      await ctx.db.patch(sub._id, { activo: false });
    }
    return { ok: true, email: sub.email };
  },
});

export const listarActivosInterno = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("newsletterSubs")
      .withIndex("by_activo", (q) => q.eq("activo", true))
      .collect();
  },
});

