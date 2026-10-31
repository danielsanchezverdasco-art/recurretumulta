// Carga diferida del análisis editorial de UNA ficha (ver shards.ts). Devuelve null si no tiene.
import loaders from "virtual:analisis-loaders";
import type { AnalisisEditorial } from "../analisis-editorial-tipos";
import { shardDe } from "./shards";

export async function cargarAnalisisEditorial(slug: string): Promise<AnalisisEditorial | null> {
  const mod = await loaders[shardDe(slug)]();
  return mod.default[slug] ?? null;
}
