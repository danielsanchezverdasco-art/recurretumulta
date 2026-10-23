// Entrada para scripts/contar-datos-seo.mjs (la empaqueta esbuild).
// Reutiliza el slugify REAL de la app para que los slugs de marca coincidan
// con las URLs /coches/marca/<slug>/, /motos/marca/<slug>/ y /patinetes/marca/<slug>/.
import { COCHES_COMPARADOR } from "../src/lib/comparador-coches-data.ts";
import { MOTOS_PUBLICADAS } from "../src/lib/comparador-motos-data.ts";
import { PATINETES_PUBLICADOS } from "../src/lib/comparador-patinetes-data.ts";
import { slugify } from "../src/lib/ficha-match.ts";

function stats(arr: Array<{ marca: string; certificadoDgt?: boolean | null }>, certKey?: string) {
  const marcas: Record<string, { nombre: string; n: number; cert: number }> = {};
  for (const x of arr) {
    const slug = slugify(x.marca);
    if (!marcas[slug]) marcas[slug] = { nombre: x.marca, n: 0, cert: 0 };
    marcas[slug].n++;
    if (certKey && (x as Record<string, unknown>)[certKey] === true) marcas[slug].cert++;
  }
  return { n: arr.length, marcas };
}

console.log(
  JSON.stringify({
    coches: stats(COCHES_COMPARADOR),
    motos: stats(MOTOS_PUBLICADAS),
    patinetes: stats(PATINETES_PUBLICADOS, "certificadoDgt"),
    ids: {
      coches: COCHES_COMPARADOR.map((x) => ({ id: x.id, marca: x.marca })),
      motos: MOTOS_PUBLICADAS.map((x) => ({ id: x.id, marca: x.marca })),
      patinetes: PATINETES_PUBLICADOS.map((x) => ({ id: x.id, marca: x.marca, cert: x.certificadoDgt === true })),
    },
  }),
);
