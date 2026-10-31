// Plugin de Vite (31/10/2026, velocidad): reparte el análisis editorial en shards virtuales.
// Evalúa src/lib/analisis-editorial/index.ts (los 52 lotes) UNA vez con esbuild y expone:
//   virtual:analisis-shard-N   → export default { [slug]: { parrafos, veredicto } }
//   virtual:analisis-loaders   → export default [() => import("virtual:analisis-shard-0"), ...]
// Así el texto no se duplica en el repo y los lotes nuevos entran solos en el siguiente build.
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import type { Plugin } from "vite";
import { N_SHARDS, shardDe } from "../../src/lib/analisis-editorial/shards.ts";

type Analisis = { parrafos: string[]; veredicto: string };
const P_SHARD = "virtual:analisis-shard-";
const P_LOADERS = "virtual:analisis-loaders";

export default function analisisShards(): Plugin {
  const raiz = path.resolve(import.meta.dirname, "../..");
  let shards: Record<string, Analisis>[] | null = null;

  async function cargar() {
    if (shards) return shards;
    const out = await build({
      entryPoints: [path.join(raiz, "src/lib/analisis-editorial/index.ts")],
      bundle: true,
      format: "esm",
      platform: "node",
      write: false,
      logLevel: "silent",
    });
    const dir = mkdtempSync(path.join(tmpdir(), "analisis-"));
    try {
      const f = path.join(dir, "analisis.mjs");
      writeFileSync(f, out.outputFiles[0].text);
      const mod = (await import(pathToFileURL(f).href)) as { ANALISIS_EDITORIAL: Record<string, Analisis> };
      const res: Record<string, Analisis>[] = Array.from({ length: N_SHARDS }, () => ({}));
      for (const [slug, a] of Object.entries(mod.ANALISIS_EDITORIAL)) res[shardDe(slug)][slug] = a;
      shards = res;
      return res;
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }

  return {
    name: "rtm-analisis-shards",
    resolveId(id) {
      if (id.startsWith(P_SHARD) || id === P_LOADERS) return "\0" + id;
      return null;
    },
    async load(id) {
      if (id === "\0" + P_LOADERS) {
        const l = Array.from({ length: N_SHARDS }, (_, i) => `() => import("${P_SHARD}${i}")`);
        return `export default [${l.join(",")}];`;
      }
      if (id.startsWith("\0" + P_SHARD)) {
        const n = Number(id.slice(("\0" + P_SHARD).length));
        const s = await cargar();
        return `export default ${JSON.stringify(s[n] ?? {})};`;
      }
      return null;
    },
  };
}
