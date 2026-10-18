import { ConvexError, v } from "convex/values";
import { internalMutation, mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import type { Doc } from "./_generated/dataModel";

/* ── Audiencia (18/10/2026) ──────────────────────────────────────────────
   «Puntúa este coche», «¿Lo comprarías?», «Duelo», contador de visitas,
   «Favoritos del mes» y reacciones del blog.
   - Anónimo: el navegador genera un id aleatorio (localStorage) y aquí solo se
     guarda su SHA-256 con sal (env AUDIENCIA_SAL, opcional). Sin IP, sin email.
   - Un voto por persona y ficha (votar otra vez CAMBIA el voto, no suma).
   - Límite diario por votante (LIMITE_VOTOS_DIA) y por sesión (LIMITE_VISITAS_DIA).
   - NUNCA se inventan datos: todo sale de votos/visitas reales.
   - Estos datos NO se publican como aggregateRating en el JSON-LD. */

const tipoFicha = v.union(v.literal("coches"), v.literal("motos"), v.literal("patinetes"));
type TipoFicha = "coches" | "motos" | "patinetes";

const LIMITE_VOTOS_DIA = 150;
const LIMITE_VISITAS_DIA = 400;
const SLUG_RE = /^[a-z0-9][a-z0-9-]{1,159}$/;
const ID_RE = /^[A-Za-z0-9-]{16,64}$/;

function ahora() {
  const d = new Date();
  const dia = d.toISOString().slice(0, 10);
  const mes = dia.slice(0, 7);
  // Semana ISO-8601 (UTC)
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const dow = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - dow);
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const w = Math.ceil(((t.getTime() - y0.getTime()) / 86400000 + 1) / 7);
  return { dia, mes, semana: `${t.getUTCFullYear()}-W${String(w).padStart(2, "0")}`, t: d.getTime() };
}

function checkSlug(s: string) {
  if (!SLUG_RE.test(s)) throw new ConvexError({ code: "BAD_REQUEST", message: "Ficha no válida" });
}

async function hashId(id: string): Promise<string> {
  if (!ID_RE.test(id)) throw new ConvexError({ code: "BAD_REQUEST", message: "Identificador no válido" });
  const sal = process.env.AUDIENCIA_SAL ?? "rtm-audiencia-2026";
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${sal}:${id}`));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

async function hashOpcional(id: string | undefined) {
  if (!id || !ID_RE.test(id)) return null;
  return await hashId(id);
}

async function limitar(ctx: MutationCtx, clave: string, max: number) {
  const { dia } = ahora();
  const doc = await ctx.db
    .query("audienciaLimite")
    .withIndex("by_clave_dia", (q) => q.eq("clave", clave).eq("dia", dia))
    .unique();
  if (doc && doc.n >= max) {
    throw new ConvexError({ code: "RATE_LIMIT", message: "Has llegado al límite de hoy. Vuelve mañana." });
  }
  if (doc) await ctx.db.patch(doc._id, { n: doc.n + 1 });
  else await ctx.db.insert("audienciaLimite", { clave, dia, n: 1 });
}

async function fichaDoc(ctx: QueryCtx, tipo: TipoFicha, slug: string) {
  return await ctx.db
    .query("audienciaFicha")
    .withIndex("by_tipo_slug", (q) => q.eq("tipo", tipo).eq("slug", slug))
    .unique();
}

async function fichaOCrear(ctx: MutationCtx, tipo: TipoFicha, slug: string): Promise<Doc<"audienciaFicha">> {
  const d = await fichaDoc(ctx, tipo, slug);
  if (d) return d;
  const { semana } = ahora();
  const id = await ctx.db.insert("audienciaFicha", {
    tipo, slug, estrellasSuma: 0, estrellasVotos: 0, compraSi: 0, compraPienso: 0, compraNo: 0,
    visitas: 0, semana, visitasSemana: 0,
  });
  return (await ctx.db.get(id))!;
}

async function mesOCrear(ctx: MutationCtx, mes: string, tipo: TipoFicha, slug: string): Promise<Doc<"audienciaMes">> {
  const d = await ctx.db
    .query("audienciaMes")
    .withIndex("by_mes_tipo_slug", (q) => q.eq("mes", mes).eq("tipo", tipo).eq("slug", slug))
    .unique();
  if (d) return d;
  const id = await ctx.db.insert("audienciaMes", { mes, tipo, slug, estrellasSuma: 0, estrellasVotos: 0, visitas: 0 });
  return (await ctx.db.get(id))!;
}

async function votoPrevio(ctx: QueryCtx, voter: string, tipoVoto: Doc<"audienciaVoto">["tipoVoto"], ambito: string, clave: string) {
  return await ctx.db
    .query("audienciaVoto")
    .withIndex("by_voter_clave", (q) => q.eq("voter", voter).eq("tipoVoto", tipoVoto).eq("ambito", ambito).eq("clave", clave))
    .unique();
}

const media = (suma: number, n: number) => (n > 0 ? Math.round((suma / n) * 10) / 10 : null);

/* ── Lectura de una ficha (estrellas, «¿Lo comprarías?», visitas) ── */
export const ficha = query({
  args: { tipo: tipoFicha, slug: v.string(), votante: v.optional(v.string()) },
  handler: async (ctx, { tipo, slug, votante }) => {
    const d = await fichaDoc(ctx, tipo, slug);
    const { semana } = ahora();
    const voter = await hashOpcional(votante);
    const misEstrellas = voter ? await votoPrevio(ctx, voter, "estrellas", tipo, slug) : null;
    const miCompra = voter ? await votoPrevio(ctx, voter, "compra", tipo, slug) : null;
    return {
      estrellas: { media: d ? media(d.estrellasSuma, d.estrellasVotos) : null, votos: d?.estrellasVotos ?? 0 },
      compra: { si: d?.compraSi ?? 0, pienso: d?.compraPienso ?? 0, no: d?.compraNo ?? 0 },
      visitas: { total: d?.visitas ?? 0, semana: d && d.semana === semana ? d.visitasSemana : 0 },
      mio: { estrellas: misEstrellas ? Number(misEstrellas.valor) : null, compra: miCompra?.valor ?? null },
    };
  },
});

/* ── «Puntúa este coche» (1-5) ── */
export const puntuar = mutation({
  args: { tipo: tipoFicha, slug: v.string(), votante: v.string(), estrellas: v.number() },
  handler: async (ctx, { tipo, slug, votante, estrellas }) => {
    checkSlug(slug);
    if (!Number.isInteger(estrellas) || estrellas < 1 || estrellas > 5) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Las estrellas deben ser entre 1 y 5" });
    }
    const voter = await hashId(votante);
    const previo = await votoPrevio(ctx, voter, "estrellas", tipo, slug);
    if (previo && Number(previo.valor) === estrellas) return { ok: true };
    await limitar(ctx, `v:${voter}`, LIMITE_VOTOS_DIA);
    const { mes, t } = ahora();
    const f = await fichaOCrear(ctx, tipo, slug);
    const anterior = previo ? Number(previo.valor) : 0;
    await ctx.db.patch(f._id, {
      estrellasSuma: f.estrellasSuma - anterior + estrellas,
      estrellasVotos: f.estrellasVotos + (previo ? 0 : 1),
    });
    // Mensual: el voto cuenta en el mes en que se emitió (o se cambió por última vez).
    if (previo) {
      const viejo = await ctx.db
        .query("audienciaMes")
        .withIndex("by_mes_tipo_slug", (q) => q.eq("mes", previo.mes).eq("tipo", tipo).eq("slug", slug))
        .unique();
      if (viejo && viejo.estrellasVotos > 0) {
        await ctx.db.patch(viejo._id, {
          estrellasSuma: Math.max(0, viejo.estrellasSuma - anterior),
          estrellasVotos: viejo.estrellasVotos - 1,
        });
      }
    }
    const m = await mesOCrear(ctx, mes, tipo, slug);
    await ctx.db.patch(m._id, { estrellasSuma: m.estrellasSuma + estrellas, estrellasVotos: m.estrellasVotos + 1 });
    if (previo) await ctx.db.patch(previo._id, { valor: String(estrellas), mes, t });
    else await ctx.db.insert("audienciaVoto", { voter, tipoVoto: "estrellas", ambito: tipo, clave: slug, valor: String(estrellas), mes, t });
    return { ok: true };
  },
});

/* ── «¿Lo comprarías?» ── */
const opcionCompra = v.union(v.literal("si"), v.literal("pienso"), v.literal("no"));
const CAMPO_COMPRA = { si: "compraSi", pienso: "compraPienso", no: "compraNo" } as const;

export const comprarias = mutation({
  args: { tipo: tipoFicha, slug: v.string(), votante: v.string(), opcion: opcionCompra },
  handler: async (ctx, { tipo, slug, votante, opcion }) => {
    checkSlug(slug);
    const voter = await hashId(votante);
    const previo = await votoPrevio(ctx, voter, "compra", tipo, slug);
    if (previo?.valor === opcion) return { ok: true };
    await limitar(ctx, `v:${voter}`, LIMITE_VOTOS_DIA);
    const { mes, t } = ahora();
    const f = await fichaOCrear(ctx, tipo, slug);
    const cambios: Partial<Record<(typeof CAMPO_COMPRA)[keyof typeof CAMPO_COMPRA], number>> = {};
    if (previo && previo.valor in CAMPO_COMPRA) {
      const c = CAMPO_COMPRA[previo.valor as keyof typeof CAMPO_COMPRA];
      cambios[c] = Math.max(0, f[c] - 1);
    }
    const nuevo = CAMPO_COMPRA[opcion];
    cambios[nuevo] = (cambios[nuevo] ?? f[nuevo]) + 1;
    await ctx.db.patch(f._id, cambios);
    if (previo) await ctx.db.patch(previo._id, { valor: opcion, mes, t });
    else await ctx.db.insert("audienciaVoto", { voter, tipoVoto: "compra", ambito: tipo, clave: slug, valor: opcion, mes, t });
    return { ok: true };
  },
});

/* ── Duelo contra el rival natural ── */
function par(x: string, y: string) {
  return x < y ? { a: x, b: y } : { a: y, b: x };
}

export const duelo = query({
  args: { tipo: tipoFicha, slug: v.string(), rival: v.string(), votante: v.optional(v.string()) },
  handler: async (ctx, { tipo, slug, rival, votante }) => {
    const { a, b } = par(slug, rival);
    const d = await ctx.db.query("audienciaDuelo").withIndex("by_par", (q) => q.eq("tipo", tipo).eq("a", a).eq("b", b)).unique();
    const voter = await hashOpcional(votante);
    const mio = voter ? await votoPrevio(ctx, voter, "duelo", tipo, `${a}|${b}`) : null;
    const votos = { [a]: d?.votosA ?? 0, [b]: d?.votosB ?? 0 };
    return { votosFicha: votos[slug], votosRival: votos[rival], mio: mio?.valor ?? null };
  },
});

export const votarDuelo = mutation({
  args: { tipo: tipoFicha, slug: v.string(), rival: v.string(), votante: v.string(), elegido: v.string() },
  handler: async (ctx, { tipo, slug, rival, votante, elegido }) => {
    checkSlug(slug);
    checkSlug(rival);
    if (slug === rival || (elegido !== slug && elegido !== rival)) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Duelo no válido" });
    }
    const voter = await hashId(votante);
    const { a, b } = par(slug, rival);
    const clave = `${a}|${b}`;
    const previo = await votoPrevio(ctx, voter, "duelo", tipo, clave);
    if (previo?.valor === elegido) return { ok: true };
    await limitar(ctx, `v:${voter}`, LIMITE_VOTOS_DIA);
    const { mes, t } = ahora();
    let d = await ctx.db.query("audienciaDuelo").withIndex("by_par", (q) => q.eq("tipo", tipo).eq("a", a).eq("b", b)).unique();
    if (!d) {
      const id = await ctx.db.insert("audienciaDuelo", { tipo, a, b, votosA: 0, votosB: 0 });
      d = (await ctx.db.get(id))!;
    }
    let votosA = d.votosA;
    let votosB = d.votosB;
    if (previo) {
      if (previo.valor === a) votosA = Math.max(0, votosA - 1);
      else if (previo.valor === b) votosB = Math.max(0, votosB - 1);
    }
    if (elegido === a) votosA += 1;
    else votosB += 1;
    await ctx.db.patch(d._id, { votosA, votosB });
    if (previo) await ctx.db.patch(previo._id, { valor: elegido, mes, t });
    else await ctx.db.insert("audienciaVoto", { voter, tipoVoto: "duelo", ambito: tipo, clave, valor: elegido, mes, t });
    return { ok: true };
  },
});

/* ── Contador de visitas (una por ficha y sesión) ──
   El cliente ya deduplica con sessionStorage y no llama en bots/prerender;
   aquí se vuelve a deduplicar por sesión y se limita por día. */
export const visita = mutation({
  args: { tipo: tipoFicha, slug: v.string(), sesion: v.string() },
  handler: async (ctx, { tipo, slug, sesion }) => {
    checkSlug(slug);
    const s = await hashId(sesion);
    const ya = await ctx.db
      .query("audienciaVisitaSesion")
      .withIndex("by_sesion_slug", (q) => q.eq("sesion", s).eq("ambito", tipo).eq("slug", slug))
      .first();
    if (ya) return { contada: false };
    const lim = await ctx.db
      .query("audienciaLimite")
      .withIndex("by_clave_dia", (q) => q.eq("clave", `s:${s}`).eq("dia", ahora().dia))
      .unique();
    if (lim && lim.n >= LIMITE_VISITAS_DIA) return { contada: false };
    await limitar(ctx, `s:${s}`, LIMITE_VISITAS_DIA);
    const { dia, mes, semana } = ahora();
    await ctx.db.insert("audienciaVisitaSesion", { sesion: s, ambito: tipo, slug, dia });
    const f = await fichaOCrear(ctx, tipo, slug);
    await ctx.db.patch(f._id, {
      visitas: f.visitas + 1,
      semana,
      visitasSemana: f.semana === semana ? f.visitasSemana + 1 : 1,
    });
    const m = await mesOCrear(ctx, mes, tipo, slug);
    await ctx.db.patch(m._id, { visitas: m.visitas + 1 });
    return { contada: true };
  },
});

/* ── Favoritos del mes ──
   Ranking por media mensual (mínimo MIN_VOTOS votos) y, a igualdad, por votos.
   Si nadie llega al mínimo, `valorados` va vacío y la página muestra «pocos votos». */
const MIN_VOTOS_RANKING = 3;

export const favoritosMes = query({
  args: { tipo: tipoFicha, mes: v.optional(v.string()) },
  handler: async (ctx, { tipo, mes: mesArg }) => {
    const mes = mesArg && /^\d{4}-\d{2}$/.test(mesArg) ? mesArg : ahora().mes;
    const conVotos = await ctx.db
      .query("audienciaMes")
      .withIndex("by_mes_tipo_votos", (q) => q.eq("mes", mes).eq("tipo", tipo).gt("estrellasVotos", 0))
      .order("desc")
      .take(300);
    const valorados = conVotos
      .filter((d) => d.estrellasVotos >= MIN_VOTOS_RANKING)
      .map((d) => ({ slug: d.slug, media: media(d.estrellasSuma, d.estrellasVotos)!, votos: d.estrellasVotos, visitas: d.visitas }))
      .sort((x, y) => y.media - x.media || y.votos - x.votos)
      .slice(0, 25);
    const visitados = await ctx.db
      .query("audienciaMes")
      .withIndex("by_mes_tipo_visitas", (q) => q.eq("mes", mes).eq("tipo", tipo).gt("visitas", 0))
      .order("desc")
      .take(25);
    return {
      mes,
      minVotos: MIN_VOTOS_RANKING,
      valorados,
      // Con votos pero sin llegar al mínimo: se listan aparte, sin nota de ranking.
      pocosVotos: conVotos.filter((d) => d.estrellasVotos < MIN_VOTOS_RANKING).length,
      votosMes: conVotos.reduce((s, d) => s + d.estrellasVotos, 0),
      masVisitados: visitados.map((d) => ({
        slug: d.slug,
        visitas: d.visitas,
        media: d.estrellasVotos >= MIN_VOTOS_RANKING ? media(d.estrellasSuma, d.estrellasVotos) : null,
        votos: d.estrellasVotos,
      })),
    };
  },
});

/* ── Reacciones del blog 👍 😮 😡 (una por persona y post) ── */
const reaccion = v.union(v.literal("like"), v.literal("wow"), v.literal("angry"));

export const reacciones = query({
  args: { slug: v.string(), votante: v.optional(v.string()) },
  handler: async (ctx, { slug, votante }) => {
    const d = await ctx.db.query("audienciaReacciones").withIndex("by_slug", (q) => q.eq("slug", slug)).unique();
    const voter = await hashOpcional(votante);
    const mio = voter ? await votoPrevio(ctx, voter, "reaccion", "blog", slug) : null;
    return { like: d?.like ?? 0, wow: d?.wow ?? 0, angry: d?.angry ?? 0, mia: (mio?.valor ?? null) as "like" | "wow" | "angry" | null };
  },
});

export const reaccionar = mutation({
  args: { slug: v.string(), votante: v.string(), reaccion },
  handler: async (ctx, args) => {
    checkSlug(args.slug);
    const voter = await hashId(args.votante);
    const previo = await votoPrevio(ctx, voter, "reaccion", "blog", args.slug);
    if (previo?.valor === args.reaccion) return { ok: true };
    await limitar(ctx, `v:${voter}`, LIMITE_VOTOS_DIA);
    const { mes, t } = ahora();
    let d = await ctx.db.query("audienciaReacciones").withIndex("by_slug", (q) => q.eq("slug", args.slug)).unique();
    if (!d) {
      const id = await ctx.db.insert("audienciaReacciones", { slug: args.slug, like: 0, wow: 0, angry: 0 });
      d = (await ctx.db.get(id))!;
    }
    const nuevo = { like: d.like, wow: d.wow, angry: d.angry };
    if (previo && (previo.valor === "like" || previo.valor === "wow" || previo.valor === "angry")) {
      nuevo[previo.valor] = Math.max(0, nuevo[previo.valor] - 1);
    }
    nuevo[args.reaccion] += 1;
    await ctx.db.patch(d._id, nuevo);
    if (previo) await ctx.db.patch(previo._id, { valor: args.reaccion, mes, t });
    else await ctx.db.insert("audienciaVoto", { voter, tipoVoto: "reaccion", ambito: "blog", clave: args.slug, valor: args.reaccion, mes, t });
    return { ok: true };
  },
});

/* ── Limpieza diaria (cron): límites y deduplicación de visitas de días pasados ── */
export const purgar = internalMutation({
  args: {},
  handler: async (ctx) => {
    const hoy = ahora().dia;
    let borrados = 0;
    for (const tabla of ["audienciaLimite", "audienciaVisitaSesion"] as const) {
      const viejos = await ctx.db.query(tabla).withIndex("by_dia", (q) => q.lt("dia", hoy)).take(2000);
      for (const d of viejos) await ctx.db.delete(d._id);
      borrados += viejos.length;
    }
    return { borrados };
  },
});
