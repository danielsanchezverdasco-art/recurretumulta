// Temporal: elimina las 10 entradas falsas del ranking (08/10/2026).
// Se elimina después de usar.
import { mutation } from "./_generated/server";

export const run = mutation({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db.query("monkeyHunters").collect();
    const falsos = todos.filter((h) => h.hunterId.startsWith("seed-"));
    for (const f of falsos) {
      await ctx.db.delete(f._id);
    }
    return { borrados: falsos.length, nombres: falsos.map((f) => f.nickname) };
  },
});
