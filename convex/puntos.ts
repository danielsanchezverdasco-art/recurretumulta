// Sistema de puntos y gamificación — V8 runtime
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireUser, getUserFromSession } from "./authSimple";

const PUNTOS_POR_PDF = 500;
const PUNTOS_POR_AD = 10;
const PUNTOS_POR_REFERIDO = 200;

// ── Obtener puntos del usuario ────────────────────────────────────────────────
export const getMisPuntos = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user) return null;
    return {
      points: user.points ?? 0,
      pdfCredits: user.pdfCredits ?? 0,
      plan: user.plan ?? "free",
    };
  },
});

const AD_REWARDS_DAILY_LIMIT = 5;

// ── Recompensa por ver un anuncio de video (+10 pts) ─────────────────────────
// Máx 5 veces/día por usuario para evitar farming gratuito de créditos PDF.
export const rewardAdView = mutation({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);

    // Rate limiting diario
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD UTC
    const rewardsDate = user.adRewardsDate;
    const rewardsToday = rewardsDate === today ? (user.adRewardsToday ?? 0) : 0;

    if (rewardsToday >= AD_REWARDS_DAILY_LIMIT) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `Has alcanzado el límite diario de ${AD_REWARDS_DAILY_LIMIT} recompensas por anuncio. Vuelve mañana.`,
      });
    }

    const newPoints = (user.points ?? 0) + PUNTOS_POR_AD;
    await ctx.db.patch("users", user._id, {
      points: newPoints,
      adRewardsToday: rewardsToday + 1,
      adRewardsDate: today,
    });
    return {
      points: newPoints,
      ganados: PUNTOS_POR_AD,
      rewardsHoy: rewardsToday + 1,
      limiteDiario: AD_REWARDS_DAILY_LIMIT,
    };
  },
});

// ── Recompensa por referido ───────────────────────────────────────────────────
export const rewardReferido = mutation({
  args: { sessionToken: v.optional(v.string()), referidoUserId: v.id("users") },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);
    // No auto-referido
    if (user._id === args.referidoUserId)
      throw new ConvexError({ code: "BAD_REQUEST", message: "No puedes referirte a ti mismo" });

    const newPoints = (user.points ?? 0) + PUNTOS_POR_REFERIDO;
    await ctx.db.patch("users", user._id, { points: newPoints });
    return { points: newPoints, ganados: PUNTOS_POR_REFERIDO };
  },
});

// ── Canjear 500 puntos por 1 PDF ─────────────────────────────────────────────
export const canjearPuntosParaPdf = mutation({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);

    const currentPoints = user.points ?? 0;
    if (currentPoints < PUNTOS_POR_PDF) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `Necesitas ${PUNTOS_POR_PDF} puntos. Tienes ${currentPoints}.`,
      });
    }

    await ctx.db.patch("users", user._id, {
      points: currentPoints - PUNTOS_POR_PDF,
      pdfCredits: (user.pdfCredits ?? 0) + 1,
    });
    return { points: currentPoints - PUNTOS_POR_PDF, pdfCredits: (user.pdfCredits ?? 0) + 1 };
  },
});
