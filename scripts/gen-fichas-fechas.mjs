// Genera src/lib/fichas-fechas.generated.json: fecha real de publicación de cada ficha
// (primer commit que añadió su `id` en src/lib/comparador-*.ts), para ordenar
// /fichas-tecnicas/ por lo más reciente primero.
import { spawn } from "child_process";
import { createInterface } from "readline";
import { writeFileSync, readFileSync } from "fs";
const git = spawn("git", ["log", "--reverse", "--format=@@C %cI", "-p", "--unified=0", "--", "src/lib/comparador-*.ts"]);
const out = {};
let fecha = "";
const rl = createInterface({ input: git.stdout });
rl.on("line", (l) => {
  if (l.startsWith("@@C ")) { fecha = l.slice(4); return; }
  const m = l.match(/^\+\s*"?id"?:\s*"([^"]+)"/);
  if (m && !out[m[1]]) out[m[1]] = fecha;
});
// Fichas existentes actualizadas a fondo (fecha de publicación de la actualización):
// scripts/fichas-actualizadas.json { id: fechaISO }. Se usa la más reciente de las dos.
const ACTUALIZADAS = JSON.parse(readFileSync(new URL("./fichas-actualizadas.json", import.meta.url), "utf8"));
rl.on("close", () => {
  for (const [id, f] of Object.entries(ACTUALIZADAS)) {
    if (!out[id] || Date.parse(f) > Date.parse(out[id])) out[id] = f;
  }
  writeFileSync(new URL("../src/lib/fichas-fechas.generated.json", import.meta.url), JSON.stringify(out));
  console.log("fichas con fecha:", Object.keys(out).length);
});
