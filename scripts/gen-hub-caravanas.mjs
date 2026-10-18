// Genera los datos del hub /caravanas/ DESDE los ficheros de datos
// (src/lib/comparador-caravanas-*.ts) — no desde dist/ (18/10/2026).
// - src/lib/hub-caravanas.generated.json: [[id, "Marca Modelo"]]
//   (lista base, mismo formato que hub-coches/motos/patinetes.generated.json)
// - src/lib/hub-caravanas-filtros.generated.json: datos estructurados para
//   los filtros del hub (marca, longitud, plazas).
// - fusiona "caravanas": N en src/lib/hub-conteos.generated.json.
// El coordinador regenerará estos JSON desde dist/ con scripts/gen-hubs.py
// cuando las fichas estén publicadas.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "src", "lib");

function strVal(block, key) {
  const m = block.match(new RegExp(`\\b${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"') : null;
}
function numVal(block, key) {
  const m = block.match(new RegExp(`\\b${key}:\\s*(-?[0-9]+(?:\\.[0-9]+)?|null)`));
  return m ? (m[1] === "null" ? null : Number(m[1])) : null;
}

const lista = [];
const filtros = [];
for (const f of readdirSync(LIB).filter((x) => /^comparador-caravanas-.*\.ts$/.test(x)).sort()) {
  const text = readFileSync(join(LIB, f), "utf-8");
  const idRe = /\bid:\s*"([^"]+)"/g;
  let m;
  const ids = [];
  while ((m = idRe.exec(text)) !== null) ids.push({ id: m[1], index: m.index });
  for (let i = 0; i < ids.length; i++) {
    const start = text.lastIndexOf("{", ids[i].index);
    const end = i + 1 < ids.length ? text.lastIndexOf("{", ids[i + 1].index) : text.length;
    const block = text.slice(start, end);
    const marca = strVal(block, "marca") ?? "";
    const modelo = strVal(block, "modelo") ?? "";
    const aproxM = block.match(/"?(aprox)"?:\s*\[([^\]]*)\]/);
    const aprox = aproxM ? [...aproxM[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
    lista.push([ids[i].id, `${marca} ${modelo}`.trim()]);
    filtros.push({
      id: ids[i].id,
      marca,
      modelo,
      largoMm: numVal(block, "largoMm"),
      plazas: numVal(block, "plazas"),
      precioDesde: numVal(block, "precioDesde"),
      precioAprox: aprox.includes("precioDesde"),
      mmaKg: numVal(block, "mmaKg"),
      carnetNecesario: strVal(block, "carnetNecesario"),
      imagen: strVal(block, "imagenOficial") ?? strVal(block, "imagen"),
    });
  }
}

writeFileSync(
  join(LIB, "hub-caravanas.generated.json"),
  JSON.stringify(lista, null, 0),
);
writeFileSync(
  join(LIB, "hub-caravanas-filtros.generated.json"),
  JSON.stringify(filtros, null, 1),
);

// Fusiona el conteo (gen-hubs.py lo regenerará desde dist/ al publicar).
const conteosPath = join(LIB, "hub-conteos.generated.json");
const conteos = JSON.parse(readFileSync(conteosPath, "utf-8"));
conteos.caravanas = lista.length;
writeFileSync(conteosPath, JSON.stringify(conteos));

console.log(`hub-caravanas: ${lista.length} fichas, ${new Set(filtros.map((x) => x.marca)).size} marcas`);
