// Limpieza del ranking (08/10/2026; interna desde el 13/10/2026: antes era una
// mutación PÚBLICA sin autenticación). Borra entradas de prueba: "seed-" y "test-bot-".
import { internalMutation } from "./_generated/server";

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
