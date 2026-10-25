// Rate limiting para análisis IA — V8 runtime (sin "use node")
// Esta mutation se llama desde las actions de multas.ts y sanciones.ts
// para verificar y contabilizar el límite diario de análisis IA por usuario.
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { internalMutation } from "./_generated/server";

const AI_ANALYSIS_DAILY_LIMIT = 10;

// Límite diario para análisis de usuarios ANÓNIMOS (sin registro).
// El análisis es gratis y libre; este límite solo frena el abuso automatizado.
const ANONYMOUS_AI_DAILY_LIMIT = 5;

export const checkAndIncrementAiLimit = internalMutation({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }): Promise<void> => {
    const user = await ctx.db.get("users", userId);

    if (!user) throw new ConvexError({ code: "NOT_FOUND", message: "Usuario no encontrado" });

    // Admins no tienen límite
    if (user.isAdmin) return;

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD UTC
    const analysisDate = user.aiAnalysisDate;
    const analysisToday = analysisDate === today ? (user.aiAnalysisToday ?? 0) : 0;

    if (analysisToday >= AI_ANALYSIS_DAILY_LIMIT) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `Has alcanzado el límite de ${AI_ANALYSIS_DAILY_LIMIT} análisis IA por día. Vuelve mañana.`,
      });
    }

    await ctx.db.patch("users", user._id, {
      aiAnalysisToday: analysisToday + 1,
      aiAnalysisDate: today,
    });
  },
});

// Rate limiting para análisis IA de usuarios anónimos (sin cuenta).
// Usa el fingerprint que genera el cliente (localStorage) como clave.
export const checkAndIncrementAnonymousLimit = internalMutation({
  args: { fingerprint: v.string() },
  handler: async (ctx, { fingerprint }): Promise<void> => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD UTC
    const existing = await ctx.db
      .query("anonymousLimits")
      .withIndex("by_fingerprint", (q) => q.eq("fingerprint", fingerprint))
      .first();

    if (existing && existing.date === today) {
      if (existing.count >= ANONYMOUS_AI_DAILY_LIMIT) {
        throw new ConvexError({
          code: "BAD_REQUEST",
          message: `Has alcanzado el límite de ${ANONYMOUS_AI_DAILY_LIMIT} análisis gratis por día. Crea tu cuenta gratuita para seguir analizando sin límites.`,
        });
      }
      await ctx.db.patch(existing._id, { count: existing.count + 1 });
    } else if (existing) {
      await ctx.db.patch(existing._id, { date: today, count: 1 });
    } else {
      await ctx.db.insert("anonymousLimits", { fingerprint, date: today, count: 1 });
    }
  },
});
