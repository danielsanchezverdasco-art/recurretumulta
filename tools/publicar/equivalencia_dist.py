#!/usr/bin/env python3
"""Admite el dist prerenderizado en 585d para el HEAD corregido solo si la equivalencia cuadra.

No reescribe build-commit. No es una excepcion global: el par de commits, los dos
ficheros y el manifiesto de 52484 entradas estan fijos en este modulo. Daniel,
13:02 Madrid, 7/11/2026: reutilizar el resultado solo si se demuestra la equivalencia.
"""
import hashlib, json, os, subprocess, sys, tempfile

BUILD = "585d69932e10125c09e83a3c50c2fcf1abcda1d7"
FUNCIONAL = "a19bb770d727deb331970ad0b194d0d220d043f7"
FUNCIONALES = ("src/pages/MotosFicha.tsx", "src/pages/PatinetesFicha.tsx")
CONTROL = frozenset({
    "tools/publicar/equivalencia_dist.py",
    "tools/publicar/equivalencia-dist.json",
    "tools/publicar/test_equivalencia_dist.py",
    "tools/publicar/equiv-ast.mjs",
    "tools/publicar/publicar.py",
    "tools/publicar/GUIA.md",
})
CONGELADOS = frozenset({
    "package.json", "package-lock.json", "vite.config.ts", "tsconfig.json",
    "tsconfig.app.json", "tsconfig.node.json", "scripts/prerender.mjs",
    "scripts/routes.json", "netlify.toml",
})
MANIFIESTO_SHA = "07564e08d92b72b5455696c2e9fed27efb7a3b6cdf356c542f3cf9c6c76437ca"
N_FICHEROS = 52484
BYTES = 5427400884
ASSETS = 1348
ASSETS_SHA = "41c104adfa4e450c8c19c4dc41b7786760d2f389c269ab784708ebc0e1691085"
INDEX = "assets/index-5gVslHJ_.js"
INDEX_SHA = "d86d68c3ffd47b0c36f09f1529274d41d628af7ff56140f3f7e98982f9a1cfd7"
INDEX_BYTES = 387066
CONVEX = "https://handsome-rhinoceros-259.eu-west-1.convex.cloud"
TAR_SHA = "a365e04b4066c402e53d946ebc2bfdfbb5042682172389c2951c53eb728ee1dd"

AQUI = os.path.dirname(os.path.abspath(__file__))


def _git(repo, *args):
    p = subprocess.run(["git", *args], cwd=repo, capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.strip() or "git fallo")
    return p.stdout


def nombres(repo, a, b):
    return [l for l in _git(repo, "diff", "--name-only", a, b).splitlines() if l.strip()]


def sha256_fichero(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def leer_manifiesto(path):
    bruto = open(path, "rb").read()
    filas = []
    for line in bruto.decode("utf-8").splitlines():
        if not line or line.startswith("#"):
            continue
        sha, size, rel = line.split(" ", 2)
        filas.append((sha, int(size), rel))
    return hashlib.sha256(bruto).hexdigest(), filas


def verificar_manifiesto(dist, filas):
    """Comprueba cada ruta. Devuelve el primer fallo o None."""
    vistos = set()
    for sha, size, rel in filas:
        if rel in vistos:
            return "manifiesto repetido: " + rel
        vistos.add(rel)
        p = os.path.join(dist, rel)
        if not os.path.isfile(p) or os.path.islink(p):
            return "falta o no es fichero: " + rel
        if os.path.getsize(p) != size:
            return "tamano distinto: " + rel
        if sha256_fichero(p) != sha:
            return "sha distinto: " + rel
    for dirpath, _, files in os.walk(dist):
        for name in files:
            rel = os.path.relpath(os.path.join(dirpath, name), dist).replace(os.sep, "/")
            if rel not in vistos:
                return "fichero de mas: " + rel
    return None


def huella_assets(dist):
    base = os.path.join(dist, "assets")
    lines = []
    if not os.path.isdir(base):
        return 0, ""
    for name in sorted(os.listdir(base)):
        p = os.path.join(base, name)
        if not os.path.isfile(p) or os.path.islink(p):
            continue
        lines.append("%s %s %s" % (name, sha256_fichero(p), os.path.getsize(p)))
    blob = ("\n".join(lines) + ("\n" if lines else "")).encode()
    return len(lines), hashlib.sha256(blob).hexdigest()


def ast_igual(repo, rev_a, rev_b, rel):
    with tempfile.TemporaryDirectory() as tmp:
        pa, pb = os.path.join(tmp, "a.tsx"), os.path.join(tmp, "b.tsx")
        open(pa, "w", encoding="utf-8").write(_git(repo, "show", "%s:%s" % (rev_a, rel)))
        open(pb, "w", encoding="utf-8").write(_git(repo, "show", "%s:%s" % (rev_b, rel)))
        p = subprocess.run(["node", os.path.join(AQUI, "equiv-ast.mjs"), pa, pb], cwd=repo, capture_output=True, text=True)
        return p.returncode == 0 and "AST_IGUAL" in p.stdout


def protegidos(repo):
    out = set()
    p = os.path.join(repo, "tools", "publicar", "no-tocar.txt")
    if not os.path.isfile(p):
        return out
    for raw in open(p, encoding="utf-8"):
        s = raw.split("#", 1)[0].strip()
        if s:
            out.add(s)
    return out


def worktree_fuente(repo):
    vigilar = list(FUNCIONALES) + sorted(CONGELADOS) + sorted(CONTROL)
    return [l for l in _git(repo, "diff", "--name-only", "HEAD", "--", *vigilar).splitlines() if l.strip()]


def evaluar_diffs(d1, d2, lista_protegidos):
    fallos = []
    if d1 != list(FUNCIONALES):
        fallos.append("entre el build y el funcional hay %s" % (d1 or "nada"))
    fuera = [p for p in d2 if p not in CONTROL]
    if fuera:
        fallos.append("HEAD anade fuera del control: " + ", ".join(fuera[:5]))
    tocados = set(lista_protegidos).intersection(list(d1) + list(d2))
    if tocados:
        fallos.append("diff toca protegidos: " + ", ".join(sorted(tocados)[:5]))
    return fallos


def verificar_repo(repo, dist, manifiesto):
    """Lista de fallos. Vacia si el dist de 585d puede usarse con este HEAD."""
    fallos = []
    cert_p = os.path.join(repo, "tools", "publicar", "equivalencia-dist.json")
    if not os.path.isfile(cert_p):
        return ["sin certificado equivalencia-dist.json"]
    cert = json.load(open(cert_p, encoding="utf-8"))
    for clave, valor in (
        ("build_commit", BUILD), ("funcional_commit", FUNCIONAL),
        ("manifiesto_sha256", MANIFIESTO_SHA), ("ficheros", N_FICHEROS),
        ("bytes", BYTES), ("assets", ASSETS), ("assets_sha256", ASSETS_SHA),
        ("index", INDEX), ("index_sha256", INDEX_SHA), ("convex", CONVEX),
        ("tar_sha256", TAR_SHA),
    ):
        if cert.get(clave) != valor:
            fallos.append("certificado no cuadra en " + clave)
    if tuple(cert.get("funcionales") or ()) != FUNCIONALES:
        fallos.append("el certificado cambia los ficheros funcionales")
    if not set(cert.get("control") or ()).issubset(CONTROL):
        fallos.append("el certificado amplia el codigo de control")
    stamp_p = os.path.join(repo, ".deploy-work", "build-commit")
    stamp = open(stamp_p, encoding="utf-8").read().strip() if os.path.isfile(stamp_p) else ""
    if stamp != BUILD:
        fallos.append("build-commit es %s y el origen real es %s" % (stamp[:12] or "ausente", BUILD[:12]))
    try:
        head = _git(repo, "rev-parse", "HEAD").strip()
        if head == BUILD:
            fallos.append("HEAD es el build: no hace falta esta via")
        anc = subprocess.run(["git", "merge-base", "--is-ancestor", BUILD, FUNCIONAL], cwd=repo)
        if anc.returncode != 0:
            fallos.append("el commit funcional no contiene el build")
        anc = subprocess.run(["git", "merge-base", "--is-ancestor", FUNCIONAL, "HEAD"], cwd=repo)
        if anc.returncode != 0:
            fallos.append("HEAD no contiene el commit funcional")
        d1 = nombres(repo, BUILD, FUNCIONAL)
        d2 = nombres(repo, FUNCIONAL, "HEAD")
        fallos.extend(evaluar_diffs(d1, d2, protegidos(repo)))
        for rel in FUNCIONALES:
            if not ast_igual(repo, BUILD, FUNCIONAL, rel):
                fallos.append("AST distinto en " + rel)
        sucio = worktree_fuente(repo)
        if sucio:
            fallos.append("arbol de trabajo distinto de HEAD: " + ", ".join(sucio[:5]))
    except RuntimeError as e:
        fallos.append(str(e))
    if not os.path.isfile(manifiesto):
        fallos.append("falta el manifiesto")
        return fallos
    sha_m, filas = leer_manifiesto(manifiesto)
    if sha_m != MANIFIESTO_SHA or len(filas) != N_FICHEROS or sum(s for _, s, _ in filas) != BYTES:
        fallos.append("el manifiesto no es el de las 52484 entradas")
        return fallos
    if not os.path.isdir(dist):
        fallos.append("no existe el dist")
        return fallos
    mal = verificar_manifiesto(dist, filas)
    if mal:
        fallos.append(mal)
        return fallos
    n_assets, h_assets = huella_assets(dist)
    if n_assets != ASSETS or h_assets != ASSETS_SHA:
        fallos.append("los assets runtime no son los 1348 del build 585d")
    idx = os.path.join(dist, INDEX)
    if not os.path.isfile(idx) or os.path.getsize(idx) != INDEX_BYTES or sha256_fichero(idx) != INDEX_SHA:
        fallos.append("el bundle de entrada no es index-5gVslHJ_.js")
    elif CONVEX not in open(idx, encoding="utf-8", errors="ignore").read():
        fallos.append("el bundle no lleva la URL regional de Convex")
    return fallos


def main():
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default=os.path.abspath(os.path.join(AQUI, "..", "..")))
    ap.add_argument("--dist", default="dist")
    ap.add_argument("--manifiesto", required=True)
    a = ap.parse_args()
    dist = a.dist if os.path.isabs(a.dist) else os.path.join(a.repo, a.dist)
    fallos = verificar_repo(a.repo, dist, a.manifiesto)
    if fallos:
        print("NO EQUIVALENTE")
        for f in fallos:
            print(" -", f)
        sys.exit(1)
    print("EQUIVALENTE dist de %s para HEAD %s" % (BUILD[:12], subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=a.repo, text=True).strip()[:12]))
    print("build-commit se queda en", BUILD)
    sys.exit(0)


if __name__ == "__main__":
    main()
