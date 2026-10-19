// ── alertasPrecio: "Cazachollos" — avisos de bajadas de precio por modelo ──
// Mutaciones públicas (sin login): suscribirse + darseDeBaja.
// La lectura para el cron recurretumulta-radar-precios es porModelo (interna,
// el worker del cron la llama con `npx convex run` usando la deploy key).

import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { internalQuery, mutation } from "./_generated/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Token aleatorio URL-safe para la baja en 1 clic. */
function generarToken(): string {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const suscribirse = mutation({
  args: {
    email: v.string(),
    cocheId: v.string(),
    precioObjetivo: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      throw new ConvexError("EMAIL_INVALIDO");
    }
    const cocheId = args.cocheId.trim();
    if (!cocheId || cocheId.length > 200) {
      throw new ConvexError("COCHE_INVALIDO");
    }
    const objetivo = args.precioObjetivo ?? undefined;
    if (objetivo !== undefined && (!Number.isFinite(objetivo) || objetivo <= 0)) {
      throw new ConvexError("PRECIO_INVALIDO");
    }

    const existente = await ctx.db
      .query("alertasPrecio")
      .withIndex("by_email_coche", (q) => q.eq("email", email).eq("cocheId", cocheId))
      .first();

    if (existente) {
      if (existente.activo) {
        return { ok: true as boolean, yaSuscrito: true as boolean };
      }
      await ctx.db.patch(existente._id, {
        activo: true,
        precioObjetivo: objetivo,
        token: existente.token || generarToken(),
      });
      return { ok: true as boolean, yaSuscrito: false as boolean };
    }

    await ctx.db.insert("alertasPrecio", {
      email,
      cocheId,
      precioObjetivo: objetivo,
      token: generarToken(),
      activo: true,
      creadoEn: Date.now(),
    });
    return { ok: true as boolean, yaSuscrito: false as boolean };
  },
});

export const darseDeBaja = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const sub = await ctx.db
      .query("alertasPrecio")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .first();
    if (!sub) {
      throw new ConvexError("TOKEN_INVALIDO");
    }
    if (sub.activo) {
      await ctx.db.patch(sub._id, { activo: false });
    }
    return { ok: true as boolean, email: sub.email, cocheId: sub.cocheId };
  },
});

/**
 * Suscripciones activas de un modelo. La usa el worker del cron
 * recurretumulta-radar-precios con `npx convex run` (deploy key).
 */
export const porModelo = internalQuery({
  args: { cocheId: v.string() },
  handler: async (ctx, args) => {
    const subs = await ctx.db
      .query("alertasPrecio")
      .withIndex("by_coche_activo", (q) => q.eq("cocheId", args.cocheId).eq("activo", true))
      .collect();
    return subs.map((s) => ({
      email: s.email,
      precioObjetivo: s.precioObjetivo ?? null,
      token: s.token,
    }));
  },
});
