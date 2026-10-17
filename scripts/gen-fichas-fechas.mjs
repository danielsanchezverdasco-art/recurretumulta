// Genera src/lib/fichas-fechas.generated.json: fecha real de publicación de cada ficha
// (primer commit que añadió su `id` en src/lib/comparador-*.ts), para ordenar
// /fichas-tecnicas/ por lo más reciente primero.
import { spawn } from "child_process";
import { createInterface } from "readline";
import { writeFileSync } from "fs";
const git = spawn("git", ["log", "--reverse", "--format=@@C %cI", "-p", "--unified=0", "--", "src/lib/comparador-*.ts"]);
const out = {};
let fecha = "";
const rl = createInterface({ input: git.stdout });
rl.on("line", (l) => {
  if (l.startsWith("@@C ")) { fecha = l.slice(4); return; }
  const m = l.match(/^\+\s*"?id"?:\s*"([^"]+)"/);
  if (m && !out[m[1]]) out[m[1]] = fecha;
});
// Fichas existentes actualizadas a fondo con una presentación oficial (fecha del commit).
const ACTUALIZADAS = {
  "bmw-ix4-electrico-2026": "2026-10-16T14:42:03+02:00", // 88db706: datos y fotos oficiales del iX4
};
rl.on("close", () => {
  Object.assign(out, ACTUALIZADAS);
  writeFileSync(new URL("../src/lib/fichas-fechas.generated.json", import.meta.url), JSON.stringify(out));
  console.log("fichas con fecha:", Object.keys(out).length);
});
