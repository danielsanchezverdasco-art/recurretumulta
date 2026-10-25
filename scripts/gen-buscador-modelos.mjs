// Genera src/lib/buscador-coches-modelos.generated.ts con el índice mínimo
// {id, marca, modelo, precioDesde, tieneFicha} de todos los coches para el
// autocompletado del Buscador de coches (/buscador-coches/).
// Fusiona: 1) fichas propias del comparador (tieneFicha: true, con id y precio),
// 2) dataset curado de modelos vendidos en España 2000-2026 (tieneFicha: false).
// Uso: node scripts/gen-buscador-modelos.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { MODELOS_EXTRA } from "./datos-modelos-extra.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "src", "lib");

function norm(s) {
  return s.normalize("NFD").split("").filter(c => { const n = c.codePointAt(0); return !(n >= 0x300 && n <= 0x36f); }).join("").toLowerCase().trim().replace(/\s+/g, " ");
}

const files = readdirSync(LIB).filter(
  (f) => f.startsWith("comparador-coches-") && f.endsWith(".ts")
);

const seen = new Set(); // norm("marca modelo") para dedup
const modelos = [];

function push(id, marca, modelo, precioDesde, tieneFicha) {
  const key = norm(`${marca} ${modelo}`);
  if (seen.has(key)) return;
  seen.add(key);
  modelos.push({ id, marca, modelo, precioDesde, tieneFicha });
}

// 1) Fichas propias (prioridad: tienen id y precio verificado)
for (const f of files) {
  const text = readFileSync(join(LIB, f), "utf8");
  const reId = /id:\s*"([^"]+)"/g;
  let m;
  while ((m = reId.exec(text)) !== null) {
    const id = m[1];
    const tail = text.slice(m.index, m.index + 4000);
    const marcaM = /marca:\s*"([^"]+)"/.exec(tail);
    const modeloM = /modelo:\s*"([^"]+)"/.exec(tail);
    const precioM = /precioDesde:\s*(\d+)/.exec(tail);
    if (!marcaM || !modeloM) continue;
    push(id, marcaM[1], modeloM[1], precioM ? parseInt(precioM[1], 10) : null, true);
  }
}

// 2) Dataset curado (solo los que no estén ya)
for (const grupo of MODELOS_EXTRA) {
  for (const modelo of grupo.modelos) {
    push("", grupo.marca, modelo, null, false);
  }
}

modelos.sort((a, b) =>
  `${a.marca} ${a.modelo}`.localeCompare(`${b.marca} ${b.modelo}`, "es")
);

const out =
  `// Generado por scripts/gen-buscador-modelos.mjs — NO editar a mano.\n` +
  `// Índice para el autocompletado del Buscador de coches: fichas propias\n` +
  `// (tieneFicha: true) + modelos vendidos en España 2000-2026 (tieneFicha: false).\n` +
  `export interface ModeloBuscador { id: string; marca: string; modelo: string; precioDesde: number | null; tieneFicha: boolean; }\n` +
  `export const MODELOS_BUSCADOR: ModeloBuscador[] = ` +
  JSON.stringify(modelos) +
  `;\n` +
  `export const TOTAL_MARCAS_BUSCADOR = ${new Set(modelos.map((x) => x.marca)).size};\n`;

writeFileSync(join(LIB, "buscador-coches-modelos.generated.ts"), out);
const conFicha = modelos.filter((x) => x.tieneFicha).length;
console.log(`OK: ${modelos.length} modelos (${conFicha} con ficha) → src/lib/buscador-coches-modelos.generated.ts`);
