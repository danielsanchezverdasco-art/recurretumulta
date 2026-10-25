// Recorta SOLO los títulos de blog más largos (base > 52, final > 70).
// Reglas seguras: corte por coma; por conjunción; por espacio protegiendo
// precios (nunca deja "12.974" sin "€": o se queda el precio entero o se quita
// entero con su preposición). Si no hay corte limpio, no se toca.
// Uso: node scripts/recortar-titulos-blog.mjs [--apply]
import { readdirSync, readFileSync, writeFileSync } from "fs";

const APPLY = process.argv.includes("--apply");
const MAX_BASE = 52; // 52 + 18 = 70
const MIN_KEEP = 34;
const DANGLING = new Set(["y","e","de","del","la","el","los","las","lo","en","por","con","sin","un","una","uno","que","al","a","o","u","se","su","sus","mi","tu","para","como","más","muy","tan","ni","si","no","desde","hasta","entre","sobre","tras","the","of","in","on","at","to"]);

function clean(s) {
  let words = s.split(" ");
  while (words.length > 4) {
    const last = words[words.length - 1].toLowerCase().replace(/[.,:;!?¿¡\-–—()]/g, "");
    if (!DANGLING.has(last)) break;
    words.pop();
  }
  return words.join(" ").replace(/[,;:.!?¿¡\-–—]+$/, "").trim();
}
function ok(s) { return s.length >= MIN_KEEP && s.length <= MAX_BASE; }
// si el corte deja un número colgado (precio sin €), retrocede al espacio anterior
function protectPrice(t, cutAt) {
  let c = t.slice(0, cutAt);
  if (/[\d.,]+$/.test(c)) {
    const prev = c.lastIndexOf(" ");
    if (prev >= MIN_KEEP) c = t.slice(0, prev);
  }
  return c;
}

function trimTitle(t) {
  if (t.length <= MAX_BASE) return t;
  const ci = t.indexOf(", ");
  if (ci > 0) { const c = clean(t.slice(0, ci)); if (c.length >= 25 && c.length <= MAX_BASE) return c; }
  for (const sep of [" y ", " con ", " e "]) {
    const idx = t.lastIndexOf(sep);
    if (idx >= MIN_KEEP) { const c = clean(protectPrice(t, idx)); if (ok(c)) return c; }
  }
  for (let i = MAX_BASE; i >= MIN_KEEP; i--) {
    if (t[i] === " ") { const c = clean(protectPrice(t, i)); if (ok(c)) return c; break; }
  }
  return t;
}

const files = readdirSync("src/lib").filter(f => /^blog-posts-.*\.ts$/.test(f) && !f.includes("generated"));
let changed = 0, untouched = 0;
const log = [];
for (const f of files) {
  const p = "src/lib/" + f;
  let text = readFileSync(p, "utf8");
  let n = 0;
  text = text.replace(/^([ \t]*)"title": "((?:[^"\\]|\\.)*)",?$/gm, (m, ind, title) => {
    if (title.length <= MAX_BASE || title.includes("RecurreTuMulta")) return m;
    const nt = trimTitle(title);
    if (nt === title) { untouched++; log.push(["PENDIENTE", f, title]); return m; }
    changed++; n++;
    log.push([f, title, nt]);
    return `${ind}"title": "${nt}",`;
  });
  if (APPLY && n > 0) writeFileSync(p, text);
}
console.log(`ficheros: ${files.length} | recortados: ${changed} | sin corte limpio: ${untouched} ${APPLY ? "(APLICADO)" : "(simulación)"}`);
for (const [f, a, b] of log.slice(0, 120)) console.log(`\n[${f}]\n- ${a}\n+ ${b}`);
if (log.length > 120) console.log(`\n... y ${log.length - 120} más`);
