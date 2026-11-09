// Tanda 7b — fix "sin fuente oficial": añade enlace honesto a la DGT en la FAQ
// de homologación de los 5 patinetes de exp-p10 (el validador lo exige).
import fs from "fs";

const F = "src/lib/blog-posts-patinetes-exp-p10.ts";
let t = fs.readFileSync(F, "utf8");
let n = 0;

function inBlock(text, slug, fn) {
  const re = new RegExp('"slug": "' + slug + '",[\\s\\S]*?(?=\\n  \\},\\n  \\{|\\n  \\}\\n\\];)');
  let c = 0;
  const out = text.replace(re, (m) => { c++; return fn(m); });
  if (c !== 1) throw new Error("bloque no único para " + slug);
  return out;
}
function repOnce(b, anchor, repl, what) {
  if (!b.includes(anchor)) throw new Error("ANCLA NO ENCONTRADA [" + what + "]");
  if (b.split(anchor).length - 1 !== 1) throw new Error("ancla no única [" + what + "]");
  n++;
  return b.replace(anchor, repl);
}

const DGT = 'Puedes consultar la normativa de VMP en la <a href=https://www.dgt.es>DGT</a>';

t = inBlock(t, "fiat-500-iride", (b) => repOnce(b,
  "Circular con un VMP sin certificado puede acarrear multa:",
  "Circular con un VMP sin certificado puede acarrear multa. " + DGT + ":",
  "fiat dgt"));

t = inBlock(t, "ducati-pro-3", (b) => repOnce(b,
  "**No verificado** en las fuentes consultadas. Confírmalo antes de comprar.",
  "**No verificado** en las fuentes consultadas. Confírmalo antes de comprar. " + DGT + ".",
  "ducati dgt"));

t = inBlock(t, "aprilia-esr2-evo", (b) => repOnce(b,
  "**No verificado** en las fuentes consultadas. Confírmalo antes de comprar si vas a circular por vía pública.",
  "**No verificado** en las fuentes consultadas. Confírmalo antes de comprar si vas a circular por vía pública. " + DGT + ".",
  "aprilia dgt"));

t = inBlock(t, "cecotec-bongo-serie-a-plus-max-45-connected", (b) => repOnce(b,
  "Sí, **homologado DGT** para circular por España.",
  "Sí, **homologado DGT** para circular por España. " + DGT + ".",
  "cecotec dgt"));

t = inBlock(t, "acer-es-series-5-advance", (b) => repOnce(b,
  "Con la homologación verificada, circulas tranquilo:",
  "Con la homologación verificada, circulas tranquilo. " + DGT + ":",
  "acer dgt"));

fs.writeFileSync(F, t);
console.log("OK, ediciones:", n);
