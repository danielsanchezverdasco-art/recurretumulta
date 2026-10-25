// Mutaciones internas del email de comparativas (sin "use node": los ficheros
// Node.js solo pueden definir actions). Extraído de convex/comparadorEmail.ts
// el 03/10/2026 porque el deploy rechazaba una Mutation en fichero "use node".
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { internalMutation } from "./_generated/server";

const MAX_ENVIOS_DIA = 5;

// Límite anti-abuso: 5 envíos/día por dispositivo (contador propio "email:<fp>"
// en anonymousLimits, separado del límite de investigaciones IA).
export const checkAndIncrementEmailLimit = internalMutation({
  args: { fingerprint: v.string() },
  handler: async (ctx, { fingerprint }) => {
    const hoy = new Date().toISOString().slice(0, 10);
    const reg = await ctx.db
      .query("anonymousLimits")
      .withIndex("by_fingerprint", (q) => q.eq("fingerprint", fingerprint))
      .first();
    const usados = reg && reg.date === hoy ? reg.count : 0;
    if (usados >= MAX_ENVIOS_DIA) {
      throw new ConvexError(
        `Has alcanzado el límite de ${MAX_ENVIOS_DIA} envíos por día. Vuelve mañana.`
      );
    }
    if (reg && reg.date === hoy) {
      await ctx.db.patch(reg._id, { count: usados + 1 });
    } else if (reg) {
      await ctx.db.patch(reg._id, { date: hoy, count: 1 });
    } else {
      await ctx.db.insert("anonymousLimits", { fingerprint, date: hoy, count: 1 });
    }
  },
});
