/// <reference types="vite/client" />
// @vitest-environment edge-runtime
import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api, internal } from "./_generated/api";
import schema from "./schema";

const modules = import.meta.glob("./**/*.ts");
const A = "11111111-1111-4111-8111-111111111111";
const B = "22222222-2222-4222-8222-222222222222";
const C = "33333333-3333-4333-8333-333333333333";

describe("audiencia", () => {
  test("estrellas: un voto por persona (cambiar no suma) y media real", async () => {
    const t = convexTest(schema, modules);
    const base = { tipo: "coches" as const, slug: "seat-leon-2026" };
    let f = await t.query(api.audiencia.ficha, base);
    expect(f.estrellas).toEqual({ media: null, votos: 0 });
    await t.mutation(api.audiencia.puntuar, { ...base, votante: A, estrellas: 5 });
    await t.mutation(api.audiencia.puntuar, { ...base, votante: A, estrellas: 3 });
    await t.mutation(api.audiencia.puntuar, { ...base, votante: B, estrellas: 4 });
    f = await t.query(api.audiencia.ficha, { ...base, votante: A });
    expect(f.estrellas).toEqual({ media: 3.5, votos: 2 });
    expect(f.mio.estrellas).toBe(3);
    await expect(t.mutation(api.audiencia.puntuar, { ...base, votante: A, estrellas: 9 })).rejects.toThrow();
    await expect(t.mutation(api.audiencia.puntuar, { ...base, votante: "corto", estrellas: 2 })).rejects.toThrow();
  });

  test("¿Lo comprarías?, duelo y reacciones mueven el voto", async () => {
    const t = convexTest(schema, modules);
    const base = { tipo: "motos" as const, slug: "honda-sh125i" };
    await t.mutation(api.audiencia.comprarias, { ...base, votante: A, opcion: "si" });
    await t.mutation(api.audiencia.comprarias, { ...base, votante: A, opcion: "no" });
    await t.mutation(api.audiencia.comprarias, { ...base, votante: B, opcion: "pienso" });
    const f = await t.query(api.audiencia.ficha, base);
    expect(f.compra).toEqual({ si: 0, pienso: 1, no: 1 });

    const d = { ...base, rival: "silence-s01" };
    await t.mutation(api.audiencia.votarDuelo, { ...d, votante: A, elegido: "silence-s01" });
    await t.mutation(api.audiencia.votarDuelo, { ...d, votante: B, elegido: "honda-sh125i" });
    await t.mutation(api.audiencia.votarDuelo, { ...d, votante: A, elegido: "honda-sh125i" });
    // Desde la ficha del rival se ve el mismo duelo, con los lados invertidos.
    const r = await t.query(api.audiencia.duelo, { tipo: "motos", slug: "silence-s01", rival: "honda-sh125i", votante: A });
    expect(r).toEqual({ votosFicha: 0, votosRival: 2, mio: "honda-sh125i" });

    await t.mutation(api.audiencia.reaccionar, { slug: "post-x", votante: A, reaccion: "like" });
    await t.mutation(api.audiencia.reaccionar, { slug: "post-x", votante: A, reaccion: "angry" });
    await t.mutation(api.audiencia.reaccionar, { slug: "post-x", votante: B, reaccion: "wow" });
    expect(await t.query(api.audiencia.reacciones, { slug: "post-x", votante: A })).toEqual({ like: 0, wow: 1, angry: 1, mia: "angry" });
  });

  test("visitas deduplicadas por sesión y favoritos con mínimo de votos", async () => {
    const t = convexTest(schema, modules);
    const base = { tipo: "patinetes" as const, slug: "xiaomi-electric-scooter-5" };
    await t.mutation(api.audiencia.visita, { ...base, sesion: A });
    await t.mutation(api.audiencia.visita, { ...base, sesion: A });
    await t.mutation(api.audiencia.visita, { ...base, sesion: B });
    const f = await t.query(api.audiencia.ficha, base);
    expect(f.visitas).toEqual({ total: 2, semana: 2 });

    let fav = await t.query(api.audiencia.favoritosMes, { tipo: "patinetes" });
    expect(fav.valorados).toEqual([]);
    expect(fav.masVisitados[0]).toMatchObject({ slug: base.slug, visitas: 2, media: null });
    for (const [v, e] of [[A, 5], [B, 4]] as const) await t.mutation(api.audiencia.puntuar, { ...base, votante: v, estrellas: e });
    fav = await t.query(api.audiencia.favoritosMes, { tipo: "patinetes" });
    expect(fav.valorados).toEqual([]); // 2 votos < mínimo 3
    expect(fav.pocosVotos).toBe(1);
    await t.mutation(api.audiencia.puntuar, { ...base, votante: C, estrellas: 3 });
    fav = await t.query(api.audiencia.favoritosMes, { tipo: "patinetes" });
    expect(fav.valorados).toEqual([{ slug: base.slug, media: 4, votos: 3, visitas: 2 }]);
    const r = await t.mutation(internal.audiencia.purgar, {});
    expect(r.borrados).toBe(0); // todo es de hoy
  });
});
