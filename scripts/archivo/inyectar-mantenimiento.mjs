// Inyecta bloques mantenimientoDIY en los ficheros del comparador de coches.
// Uso: node scripts/inyectar-mantenimiento.mjs /tmp/mantenimiento-lote-1.json [...]
// Solo inyecta entradas con estado "ok". Idempotente: si el id ya tiene
// mantenimientoDIY, lo salta.
import { readFileSync, writeFileSync } from "fs";

const FILES = [
  "src/lib/comparador-coches-data.ts",
  "src/lib/comparador-coches-nuevos.ts",
  "src/lib/comparador-coches-chinos-2026.ts",
];

function esc(s) {
  return JSON.stringify(s);
}

function buildBlock(d, indent) {
  const p = indent + "    ";
  const lines = [`${indent}mantenimientoDIY: {`];
  lines.push(`${p}resetAceiteTitulo: ${esc(d.resetAceiteTitulo)},`);
  lines.push(
    `${p}resetAceitePasos: [${d.resetAceitePasos.map(esc).join(", ")}],`
  );
  if (d.resetAceiteNota) lines.push(`${p}resetAceiteNota: ${esc(d.resetAceiteNota)},`);
  if (d.intervaloMantenimiento)
    lines.push(`${p}intervaloMantenimiento: ${esc(d.intervaloMantenimiento)},`);
  lines.push(`${p}filtroPolenUbicacion: ${esc(d.filtroPolenUbicacion)},`);
  lines.push(
    `${p}filtroPolenPasos: [${d.filtroPolenPasos.map(esc).join(", ")}],`
  );
  if (d.filtroAirePasos && d.filtroAirePasos.length > 0)
    lines.push(
      `${p}filtroAirePasos: [${d.filtroAirePasos.map(esc).join(", ")}],`
    );
  if (d.videoTutorialUrl) lines.push(`${p}videoTutorialUrl: ${esc(d.videoTutorialUrl)},`);
  if (d.videoTutorialTitulo)
    lines.push(`${p}videoTutorialTitulo: ${esc(d.videoTutorialTitulo)},`);
  lines.push(`${indent}},`);
  return lines.join("\n");
}

function validate(d, id) {
  const errs = [];
  if (!d.resetAceiteTitulo || typeof d.resetAceiteTitulo !== "string") errs.push("resetAceiteTitulo");
  if (!Array.isArray(d.resetAceitePasos) || d.resetAceitePasos.length === 0) errs.push("resetAceitePasos");
  if (!d.filtroPolenUbicacion || typeof d.filtroPolenUbicacion !== "string") errs.push("filtroPolenUbicacion");
  if (!Array.isArray(d.filtroPolenPasos) || d.filtroPolenPasos.length === 0) errs.push("filtroPolenPasos");
  if (errs.length) throw new Error(`Modelo ${id}: campos inválidos: ${errs.join(", ")}`);
}

let inyectados = 0;
let saltados = 0;
const pendientes = [];

for (const jsonPath of process.argv.slice(2)) {
  const data = JSON.parse(readFileSync(jsonPath, "utf8"));
  for (const [id, d] of Object.entries(data)) {
    if (!d || d.estado !== "ok") {
      pendientes.push(id);
      continue;
    }
    validate(d, id);
    let done = false;
    for (const file of FILES) {
      let text;
      try {
        text = readFileSync(file, "utf8");
      } catch {
        continue; // fichero no existe en este cwd (tests)
      }
      const idRe = new RegExp(`^([ \\t]*)id: "${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}",[ \\t]*$`, "m");
      const m = text.match(idRe);
      if (!m) continue;
      const indent = m[1];
      // ¿ya tiene mantenimientoDIY este bloque? buscar hasta el cierre del objeto
      const startIdx = m.index;
      // ¿ya tiene mantenimientoDIY este bloque? Delimitar por el inicio de la
      // SIGUIENTE entrada (algunas entradas cierran con indentación inconsistente)
      const afterId = text.slice(startIdx);
      const rest = afterId.slice(m[0].length);
      const nextEntry = rest.search(/\n {0,2}\{\n {2,6}id: "/);
      const blockSlice = nextEntry >= 0 ? afterId.slice(0, m[0].length + nextEntry) : afterId.slice(0, 30000);
      if (blockSlice.includes("mantenimientoDIY")) {
        saltados++;
        done = true;
        break;
      }
      const block = buildBlock(d, indent);
      text = text.slice(0, m.index + m[0].length) + "\n" + block + text.slice(m.index + m[0].length);
      writeFileSync(file, text);
      inyectados++;
      done = true;
      break;
    }
    if (!done) {
      console.error(`AVISO: id no encontrado en ningún fichero: ${id}`);
      pendientes.push(id);
    }
  }
}

console.log(`Inyectados: ${inyectados} | Ya existían (saltados): ${saltados} | Pendientes/no-ok: ${pendientes.length}`);
if (pendientes.length) console.log("Pendientes: " + pendientes.join(", "));
