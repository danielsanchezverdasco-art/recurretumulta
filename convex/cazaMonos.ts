// Caza de monos — ranking de cazadores (05/10/2026).
// Sin cuentas: cada navegador tiene un UUID anónimo en localStorage y un apodo
// opcional. El cliente sincroniza su progreso (throttle 5 s); el servidor solo
// acepta subidas (nunca bajadas) y limita al objetivo de la temporada activa.
// Anti-trampas: found > objetivo o valores que bajen se rechazan; el premio se
// verifica manualmente por WhatsApp de todos modos.
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Temporada 1 (octubre 2026): objetivo 350 monos (ampliado de 250 el 13/10/2026).
const MAX_FOUND = 350;
const MAX_NICKNAME = 24;
const TEMPORADA = 1;

// Registro de la caza del mono legendario dorado (07/10/2026).
// Se llama una vez por cazador que lo capture; Daniel puede consultar quién lo cogió.
export const reportLegendaryCatch = mutation({
  args: {
    hunterId: v.string(),
    nickname: v.optional(v.string()),
    ruta: v.string(),
  },
  handler: async (ctx, { hunterId, nickname, ruta }) => {
    if (!hunterId || hunterId.length > 64) throw new Error("hunterId inválido");
    const ya = await ctx.db
      .query("legendaryCatches")
      .withIndex("by_hunterId", (q) => q.eq("hunterId", hunterId))
      .first();
    if (ya) return; // ya registrado
    const nickLimpio = nickname?.trim().slice(0, MAX_NICKNAME) || undefined;
    await ctx.db.insert("legendaryCatches", {
      hunterId,
      nickname: nickLimpio,
      temporada: TEMPORADA,
      caughtAt: Date.now(),
      ruta,
    });
  },
});

// Lista de cazadores del legendario (para Daniel).
export const legendaryCatches = query({
  args: {},
  handler: async (ctx) => {
    const lista = await ctx.db
      .query("legendaryCatches")
      .withIndex("by_temporada", (q) => q.eq("temporada", TEMPORADA))
      .order("desc")
      .take(50);
    return lista.map((c) => ({
      nickname: c.nickname ?? "Cazador anónimo",
      caughtAt: c.caughtAt,
      ruta: c.ruta,
    }));
  },
});

export const topHunters = query({
  args: {},
  handler: async (ctx) => {
    const top = await ctx.db
      .query("monkeyHunters")
      .withIndex("by_found")
      .order("desc")
      .take(50); // 13/10/2026: premios del 1º al 50º
    return top.map((c) => ({
      hunterId: c.hunterId,
      nickname: c.nickname ?? "Cazador anónimo",
      found: c.found,
      updatedAt: c.updatedAt,
    }));
  },
});

export const reportScore = mutation({  args: {
    hunterId: v.string(),
    nickname: v.optional(v.string()),
    found: v.number(),
  },
  handler: async (ctx, { hunterId, nickname, found }) => {
    if (!hunterId || hunterId.length > 64) throw new Error("hunterId inválido");
    const n = Math.max(0, Math.min(MAX_FOUND, Math.floor(found)));
    const nickLimpio = nickname?.trim().slice(0, MAX_NICKNAME) || undefined;

    const existente = await ctx.db
      .query("monkeyHunters")
      .withIndex("by_hunterId", (q) => q.eq("hunterId", hunterId))
      .first();

    if (!existente) {
      await ctx.db.insert("monkeyHunters", {
        hunterId,
        nickname: nickLimpio,
        found: n,
        updatedAt: Date.now(),
      });
      return;
    }
    // Solo se acepta PROGRESO (nunca retroceso): anti-trampas básico.
    if (n > existente.found || (nickLimpio && nickLimpio !== existente.nickname)) {
      await ctx.db.patch(existente._id, {
        found: Math.max(n, existente.found),
        nickname: nickLimpio ?? existente.nickname,
        updatedAt: Date.now(),
      });
    }
  },
});
