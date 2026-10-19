// Driver: importa el snapshot a través de las mutaciones públicas temporales
// (la deploy key no tiene permisos de backups ni internal mutations).
// Los IDs antiguos codifican la tabla de la BD original, así que las
// referencias se insertan con un placeholder válido y luego se parchean
// con los IDs nuevos correctos.
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";

const URL = "https://handsome-rhinoceros-259.eu-west-1.convex.cloud";
const SNAP = `${homedir()}/workspace/migracion-export/snapshot-import.zip`;
const ORDER = ["users", "blogPosts", "creadores", "recursos", "payments", "valoraciones", "pagosAfiliados"];
// tabla -> campo -> tabla destino
const REFS = {
  creadores: { userId: "users" },
  recursos: { userId: "users" },
  payments: { userId: "users", recursoId: "recursos" },
  valoraciones: { userId: "users" },
  pagosAfiliados: { creadorId: "creadores" },
};
const REQUIRED = { payments: ["userId"] }; // campos requeridos por el schema

function callFn(path, args) {
  const out = execFileSync("npx", ["convex", "run", path, JSON.stringify(args)],
    { cwd: `${homedir()}/workspace/migracion-clon`, stdio: ["ignore", "pipe", "pipe"] }).toString();
  const data = JSON.parse(out);
  // `convex run` puede devolver el valor crudo o {status,value} según versión
  if (data && typeof data === "object" && !Array.isArray(data) && "status" in data) {
    if (data.status !== "success") throw new Error(`Fallo ${path}: ${JSON.stringify(data).slice(0, 200)}`);
    return data.value;
  }
  return data;
}

const idMaps = {};   // tabla -> { oldId: newId }
const refFixes = []; // { table, oldId, field, targetOldId }

for (const table of ORDER) {
  const raw = execFileSync("unzip", ["-p", SNAP, `${table}/documents.jsonl`]).toString().trim();
  const docs = raw ? raw.split("\n").map((l) => JSON.parse(l)) : [];
  if (!docs.length) { console.log(`${table}: 0 docs, skip`); continue; }
  const tableRefs = REFS[table] || {};
  const required = REQUIRED[table] || [];
  idMaps[table] = {};
  for (let i = 0; i < docs.length; i += 10) {
    const batch = docs.slice(i, i + 10).map((d) => {
      const { _id: oldId, _creationTime, ...rest } = d;
      for (const [field, target] of Object.entries(tableRefs)) {
        if (rest[field] === undefined || rest[field] === null) continue;
        const targetOldId = rest[field];
        const targetMap = idMaps[target];
        if (targetMap && targetMap[targetOldId]) {
          rest[field] = targetMap[targetOldId];
        } else if (targetMap && Object.keys(targetMap).length) {
          rest[field] = Object.values(targetMap)[0]; // placeholder válido
          refFixes.push({ table, oldId, field, targetOldId });
        } else if (required.includes(field)) {
          throw new Error(`Sin placeholder para ${table}.${field}`);
        } else {
          delete rest[field];
          refFixes.push({ table, oldId, field, targetOldId });
        }
      }
      return { oldId, doc: rest };
    });
    const newIds = callFn("importSnapshot:bulkInsert", { table, docs: batch.map((b) => b.doc) });
    batch.forEach((b, j) => { idMaps[table][b.oldId] = newIds[j]; });
    console.log(`${table}: ${Math.min(i + 10, docs.length)}/${docs.length}`);
  }
}

// Parchea las referencias pendientes con los IDs nuevos definitivos
const patches = [];
for (const f of refFixes) {
  const target = REFS[f.table][f.field];
  const newTarget = idMaps[target]?.[f.targetOldId];
  const newSelf = idMaps[f.table]?.[f.oldId];
  if (!newTarget || !newSelf) {
    console.log(`AVISO: referencia sin resolver ${f.table}.${f.field}`);
    continue;
  }
  patches.push({ table: f.table, id: newSelf, field: f.field, value: newTarget });
}
const byTable = {};
for (const p of patches) (byTable[p.table] ||= []).push(p);
for (const [table, list] of Object.entries(byTable)) {
  for (let i = 0; i < list.length; i += 10) {
    const n = callFn("importSnapshot:bulkPatch", {
      table,
      patches: list.slice(i, i + 10).map(({ id, field, value }) => ({ id, field, value })),
    });
    console.log(`patch ${table}: ${Math.min(i + 10, list.length)}/${list.length}`);
  }
}

const counts = callFn("importSnapshot:countAll", {});
console.log("CONTEOS FINALES:", JSON.stringify(counts));
console.log("IMPORT OK");
