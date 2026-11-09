// Añade un punto al histórico de precios de una ficha de coche.
// Uso: node scripts/add-punto-historico.mjs <id-ficha> <yyyy-mm-dd> <precio-euros>
// Solo añade si el precio cambió respecto al último punto (evita duplicados).
// NO inventa precios: el worker debe pasar el PVP verificado del radar.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, "..", "src", "lib", "historico-precios.ts");

const [id, fecha, precioRaw] = process.argv.slice(2);
if (!id || !/^\d{4}-\d{2}-\d{2}$/.test(fecha || "")) {
  console.error("Uso: node scripts/add-punto-historico.mjs <id-ficha> <yyyy-mm-dd> <precio>");
  process.exit(1);
}
const precio = Number(precioRaw);
if (!Number.isInteger(precio) || precio <= 0) {
  console.error("El precio debe ser un entero positivo en euros.");
  process.exit(1);
}

let text = fs.readFileSync(FILE, "utf8");
const key = `"${id}": [`;
const idx = text.indexOf(key);

if (idx === -1) {
  // Entrada nueva: insertar antes del cierre del Record.
  const cierre = text.lastIndexOf("};");
  if (cierre === -1) {
    console.error("No se encontró el cierre de HISTORICO_PRECIOS.");
    process.exit(1);
  }
  const entry = `  ${key}\n    { fecha: "${fecha}", precio: ${precio} },\n  ],\n`;
  text = text.slice(0, cierre) + entry + text.slice(cierre);
  fs.writeFileSync(FILE, text);
  console.log(`OK: entrada nueva para ${id} → ${fecha} ${precio} €`);
  process.exit(0);
}

// Entrada existente: buscar su array y el último punto.
const arrStart = idx + key.length;
const arrEnd = text.indexOf("  ],", arrStart);
if (arrEnd === -1) {
  console.error("Array no encontrado para " + id);
  process.exit(1);
}
const arrText = text.slice(arrStart, arrEnd);
const last = arrText.match(/\{ fecha: "(\d{4}-\d{2}-\d{2})", precio: (\d+) \}(?!.*\{ fecha:)/s);
if (last && Number(last[2]) === precio) {
  console.log(`Sin cambios: ${id} ya tiene ${precio} € como último punto.`);
  process.exit(0);
}
const punto = `\n    { fecha: "${fecha}", precio: ${precio} },`;
text = text.slice(0, arrEnd) + punto + text.slice(arrEnd);
fs.writeFileSync(FILE, text);
console.log(`OK: ${id} → añadido ${fecha} ${precio} €`);
