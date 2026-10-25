// Limpieza del ranking (08/10/2026; interna desde el 13/10/2026: antes era una
// mutación PÚBLICA sin autenticación). Borra entradas de prueba: "seed-" y "test-bot-".
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const run = internalMutation({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db.query("monkeyHunters").collect();
    const falsos = todos.filter((h) => h.hunterId.startsWith("seed-") || h.hunterId.startsWith("test-bot-"));
    for (const f of falsos) {
      await ctx.db.delete(f._id);
    }
    return { borrados: falsos.length, nombres: falsos.map((f) => f.nickname) };
  },
});

// 13/10/2026: borrado exacto de UN cazador de prueba (y sus cazas legendarias).
export const borrarUno = internalMutation({
  args: { hunterId: v.string() },
  handler: async (ctx, { hunterId }) => {
    if (!hunterId.startsWith("test-bot-")) throw new Error("solo cazadores de prueba");
    const filas = await ctx.db.query("monkeyHunters").withIndex("by_hunterId", (q) => q.eq("hunterId", hunterId)).collect();
    const leg = await ctx.db.query("legendaryCatches").withIndex("by_hunterId", (q) => q.eq("hunterId", hunterId)).collect();
    for (const f of [...filas, ...leg]) await ctx.db.delete(f._id);
    return { monkeyHunters: filas.length, legendaryCatches: leg.length };
  },
});
