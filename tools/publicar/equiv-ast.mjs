import fs from "node:fs";
import ts from "typescript";

function huella(texto, nombre) {
  const sf = ts.createSourceFile(nombre, texto, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  function nodo(node) {
    const partes = [ts.SyntaxKind[node.kind]];
    if (node.kind !== ts.SyntaxKind.SourceFile && typeof node.text === "string") {
      partes.push(JSON.stringify(node.text));
    }
    node.forEachChild((hijo) => {
      partes.push(nodo(hijo));
    });
    return partes.join("\n");
  }
  return nodo(sf);
}

const [a, b] = process.argv.slice(2).map((p) => fs.readFileSync(p, "utf8"));
const fa = huella(a, "a.tsx");
const fb = huella(b, "b.tsx");
if (fa !== fb) {
  process.stderr.write("AST distinto\n");
  process.exit(1);
}
process.stdout.write("AST_IGUAL\n");
