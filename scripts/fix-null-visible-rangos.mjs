// Ayudante de scripts/fix-null-visible.py: devuelve los rangos [inicio, fin) del texto
// interior de cada cadena JS ("..." '...' y trozos de `...`) que contiene null/undefined/NaN.
// Usa acorn (ya está en node_modules) para no confundir código con texto.
import { parse } from "acorn";
import { readFileSync } from "node:fs";
const HAY = /\b(null|undefined|NaN)\b/;
const out = {};
for (const f of process.argv.slice(2)) {
  const code = readFileSync(f, "utf8");
  let ast;
  try { ast = parse(code, { ecmaVersion: "latest", sourceType: "module" }); }
  catch { try { ast = parse(code, { ecmaVersion: "latest", sourceType: "script" }); } catch (e) { out[f] = { error: String(e.message) }; continue; } }
  const r = [];
  const walk = (n) => {
    if (!n || typeof n.type !== "string") return;
    if (n.type === "Literal" && typeof n.value === "string" && HAY.test(n.value)) r.push([n.start + 1, n.end - 1]);
    else if (n.type === "TemplateElement" && HAY.test(n.value.raw)) r.push([n.start, n.end]);
    for (const k in n) {
      if (k === "type" || k === "start" || k === "end") continue;
      const v = n[k];
      if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === "object") walk(v);
    }
  };
  walk(ast);
  // acorn da posiciones en unidades UTF-16; las pasamos a índices de code point para Python
  const cp = (i) => [...code.slice(0, i)].length;
  out[f] = r.length ? (/[\uD800-\uDFFF]/.test(code) ? r.map(([a, b]) => [cp(a), cp(b)]) : r) : [];
}
process.stdout.write(JSON.stringify(out));
