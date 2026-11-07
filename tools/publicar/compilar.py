#!/usr/bin/env python3
"""Compilación local. Escribe build-commit solo si el build completo termina bien.

No llama a Netlify. No sustituye las fases de publicación del box (entorno, vivo,
src, rev3, dist). El sello es el HEAD vigilado al empezar, y solo se escribe si
sigue siendo el mismo y el árbol vigilado no cambió.
"""
import hashlib, os, subprocess, sys, time

AQUI = os.path.dirname(os.path.abspath(__file__))
VIGILADOS = (
    "package.json", "package-lock.json", "vite.config.ts", "tsconfig.json",
    "tsconfig.app.json", "tsconfig.node.json", "scripts/prerender.mjs",
    "scripts/routes.json", "netlify.toml", "src/content/seo/titulos.csv",
    "src/pages/index/_components/AnalizadorMulta.tsx",
    "src/pages/MotosFicha.tsx", "src/pages/PatinetesFicha.tsx",
)
REDIRECTS_SHA1 = "745db003c67d4f5deb25d8e0ac9989b319fd3b4c"
ESCRITOR = "tools/publicar/compilar.py"


def _git(repo, *args):
    p = subprocess.run(["git", *args], cwd=repo, capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError((p.stderr or p.stdout).strip() or "git fallo")
    return p.stdout


def cabeza(repo):
    return _git(repo, "rev-parse", "HEAD").strip()


def sucio(repo):
    out = _git(repo, "diff", "--name-only", "HEAD", "--", *VIGILADOS)
    return [l for l in out.splitlines() if l.strip()]


def sha256_file(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def manifiesto_dist(dist):
    filas = []
    total = 0
    for dirpath, dirnames, names in os.walk(dist):
        dirnames.sort()
        for name in sorted(names):
            p = os.path.join(dirpath, name)
            if os.path.islink(p) or not os.path.isfile(p):
                continue
            rel = os.path.relpath(p, dist).replace(os.sep, "/")
            size = os.path.getsize(p)
            filas.append("%s %s %s" % (sha256_file(p), size, rel))
            total += size
    texto = "# sha256 size path\n" + "\n".join(filas) + ("\n" if filas else "")
    return hashlib.sha256(texto.encode()).hexdigest(), len(filas), total, texto


def conservar_redirects(repo, dist):
    """Mete en dist/_redirects las reglas del fichero oficial que falten. No inventa reglas."""
    oficial = os.path.join(repo, "tools", "publicar", "redirects-vivo.txt")
    destino = os.path.join(dist, "_redirects")
    if not os.path.isfile(oficial) or not os.path.isfile(destino):
        return 0, ""
    h = hashlib.sha1()
    bruto = open(oficial, "rb").read()
    h.update(bruto)
    if h.hexdigest() != REDIRECTS_SHA1:
        raise RuntimeError("redirects-vivo.txt no es el fichero oficial %s" % REDIRECTS_SHA1)
    def normas(texto):
        return [" ".join(l.split()) for l in texto.splitlines() if l.strip() and not l.lstrip().startswith("#")]
    tienen = set(normas(open(destino, encoding="utf-8", errors="replace").read()))
    faltan = [r for r in normas(bruto.decode("utf-8", "replace")) if r not in tienen]
    if not faltan:
        return 0, h.hexdigest()
    with open(destino, "a", encoding="utf-8") as f:
        if not open(destino, "rb").read().endswith(b"\n"):
            f.write("\n")
        f.write("\n".join(faltan) + "\n")
    return len(faltan), h.hexdigest()


def escribir_sello(repo, dist, head, inicio, extra):
    work = os.path.join(repo, ".deploy-work")
    os.makedirs(work, exist_ok=True)
    man_sha, n, total, texto = manifiesto_dist(dist)
    fin = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    prov = os.path.join(work, "build-commit.provenance")
    sello = os.path.join(work, "build-commit")
    cuerpo = "\n".join([
        "head=" + head,
        "escritor=" + ESCRITOR,
        "dist_manifest_sha256=" + man_sha,
        "dist_files=%d" % n,
        "dist_bytes=%d" % total,
        "inicio=" + inicio,
        "fin=" + fin,
    ] + extra) + "\n"
    open(prov, "w", encoding="utf-8").write(cuerpo)
    open(os.path.join(work, "MANIFIESTO-SELLO.txt"), "w", encoding="utf-8").write(texto)
    open(sello, "w", encoding="utf-8").write(head + "\n")
    return man_sha, n, total


# Lo que entra en el dist de Vite. Un cambio aquí impide reutilizar el sello.
ENTRADAS_BUILD = (
    "src/", "public/",
)
ENTRADAS_BUILD_EXACTAS = {
    "index.html", "package.json", "package-lock.json", "vite.config.ts",
    "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json",
    "scripts/prerender.mjs", "scripts/routes.json", "netlify.toml",
}
# Controles y documentación que no copia el build. Cualquier otra ruta se rechaza.
CONTROLES_FUERA_DEL_BUILD = {
    "scripts/deploy/chequeo_fotos.py": "control del borrador; Vite no lo empaqueta",
    "scripts/deploy/test_chequeo_fotos.py": "prueba de ese control; no entra en dist",
    "tools/publicar/compilar.py": "comprobador del sello; no entra en dist",
    "tools/publicar/test_reutilizacion.py": "prueba del comprobador; no entra en dist",
    "tools/publicar/publicar.py": "orquestación de la publicación; no compila dist",
    "tools/publicar/componer_hardlinks.py": "compone el stage por hardlinks; no entra en dist",
    "tools/publicar/test_componer_hardlinks.py": "prueba de esa composición; no entra en dist",
}


def es_entrada_build(ruta):
    if ruta in ENTRADAS_BUILD_EXACTAS:
        return True
    return ruta.startswith(ENTRADAS_BUILD)


def clasificar_cambios(rutas):
    """Rechaza src, configuración, dependencias y scripts de build.

    Acepta solo controles y docs/inventario, que no entran en el dist.
    """
    fallos = []
    for ruta in rutas:
        if es_entrada_build(ruta):
            fallos.append("entrada de build cambiada: " + ruta)
        elif ruta.startswith("docs/inventario/") or ruta in CONTROLES_FUERA_DEL_BUILD:
            continue
        else:
            fallos.append("cambio no justificado fuera del dist: " + ruta)
    return fallos


def juzgar_reutilizacion(head_sello, head_validacion, head_prov, escritor, sucio, man_sha, man_esperado, dist_sha, dist_esperado, n, n_esperado, total, total_esperado, cambios=()):
    """No reescribe el sello. El HEAD de validación tiene que ser otro, y el dist el mismo.

    El manifiesto igual no basta: también se miran las rutas cambiadas desde el sello.
    """
    fallos = []
    if escritor != ESCRITOR:
        fallos.append("el sello no lo escribió compilar.py")
    if head_sello != head_prov:
        fallos.append("build-commit y provenance no coinciden")
    if head_validacion == head_sello:
        fallos.append("el HEAD de validación es el mismo que el sello; no es una reutilización")
    if sucio:
        fallos.append("el árbol vigilado cambió")
    if man_sha != man_esperado:
        fallos.append("el manifiesto sellado fue alterado")
    if dist_sha != dist_esperado or str(n) != str(n_esperado) or str(total) != str(total_esperado):
        fallos.append("el dist no coincide con el manifiesto sellado")
    fallos.extend(clasificar_cambios(cambios))
    return fallos


def comprobar_reutilizacion(repo, dist):
    """Vacío si el dist sellado sigue íntegro y el HEAD de validación es otro."""
    work = os.path.join(repo, ".deploy-work")
    sello = os.path.join(work, "build-commit")
    prov = os.path.join(work, "build-commit.provenance")
    if not os.path.isfile(sello) or not os.path.isfile(prov):
        return ["no hay sello del compilador"]
    head_sello = open(sello, encoding="utf-8").read().strip()
    datos = {}
    for line in open(prov, encoding="utf-8"):
        if "=" in line:
            k, v = line.rstrip("\n").split("=", 1)
            datos[k] = v
    try:
        head = cabeza(repo)
    except RuntimeError as e:
        return [str(e)]
    man = os.path.join(work, "MANIFIESTO-SELLO.txt")
    if not os.path.isfile(man):
        return ["falta el manifiesto sellado"]
    man_sha = hashlib.sha256(open(man, "rb").read()).hexdigest()
    ahora, n, total, _ = manifiesto_dist(dist)
    try:
        diff = _git(repo, "diff", "--name-only", head_sello, head)
    except RuntimeError as e:
        return [str(e)]
    cambios = [l.strip() for l in diff.splitlines() if l.strip()]
    return juzgar_reutilizacion(
        head_sello, head, datos.get("head"), datos.get("escritor"), sucio(repo),
        man_sha, datos.get("dist_manifest_sha256"),
        ahora, datos.get("dist_manifest_sha256"),
        n, datos.get("dist_files"), total, datos.get("dist_bytes"),
        cambios,
    )


def comprobar_sello(repo, dist):
    """Vacío si el sello lo escribió este procedimiento y el dist no cambió."""
    work = os.path.join(repo, ".deploy-work")
    sello = os.path.join(work, "build-commit")
    prov = os.path.join(work, "build-commit.provenance")
    fallos = []
    if not os.path.isfile(sello) or not os.path.isfile(prov):
        return ["no hay sello del compilador"]
    head_file = open(sello, encoding="utf-8").read().strip()
    datos = {}
    for line in open(prov, encoding="utf-8"):
        if "=" in line:
            k, v = line.rstrip("\n").split("=", 1)
            datos[k] = v
    try:
        head = cabeza(repo)
    except RuntimeError as e:
        return [str(e)]
    if datos.get("escritor") != ESCRITOR:
        fallos.append("el sello no lo escribió compilar.py")
    if head_file != head or datos.get("head") != head:
        fallos.append("el sello no es el HEAD actual")
    if sucio(repo):
        fallos.append("el árbol vigilado cambió")
    man = os.path.join(work, "MANIFIESTO-SELLO.txt")
    if not os.path.isfile(man):
        fallos.append("falta el manifiesto sellado")
        return fallos
    if hashlib.sha256(open(man, "rb").read()).hexdigest() != datos.get("dist_manifest_sha256"):
        fallos.append("el manifiesto sellado fue alterado")
        return fallos
    ahora, n, total, _ = manifiesto_dist(dist)
    if ahora != datos.get("dist_manifest_sha256") or str(n) != datos.get("dist_files") or str(total) != datos.get("dist_bytes"):
        fallos.append("el dist no coincide con el manifiesto sellado")
    return fallos


def compilar(repo, comando, conservar=True):
    """Devuelve 0 si escribió sello. No escribe sello si algo falla."""
    repo = os.path.abspath(repo)
    inicio = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    try:
        head0 = cabeza(repo)
    except RuntimeError as e:
        print(e)
        return 1
    if sucio(repo):
        print("árbol vigilado sucio antes del build:", ", ".join(sucio(repo)))
        return 1
    rc = subprocess.run(comando, cwd=repo).returncode
    if rc != 0:
        print("build falló rc=%s; no hay sello" % rc)
        return rc
    try:
        head1 = cabeza(repo)
    except RuntimeError as e:
        print(e)
        return 1
    if head1 != head0:
        print("HEAD cambió durante el build (%s -> %s); no hay sello" % (head0[:12], head1[:12]))
        return 1
    mal = sucio(repo)
    if mal:
        print("árbol vigilado cambió durante el build:", ", ".join(mal))
        return 1
    dist = os.path.join(repo, "dist")
    if not os.path.isdir(dist):
        print("no existe dist; no hay sello")
        return 1
    extra = []
    if conservar:
        try:
            n, sha = conservar_redirects(repo, dist)
        except RuntimeError as e:
            print(e)
            return 1
        extra.append("redirects_vivo_sha1=" + sha)
        extra.append("redirects_repuestas=%d" % n)
    man, nfiles, total = escribir_sello(repo, dist, head0, inicio, extra)
    print("SELLO %s ficheros %d bytes %d manifiesto %s" % (head0, nfiles, total, man))
    return 0


def leer_manifiesto_sello(path):
    filas = {}
    for line in open(path, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line or line.startswith("#"):
            continue
        sha, size, rel = line.split(" ", 2)
        filas[rel] = (sha, size)
    return filas


def sellar_delta(repo, previo, permitidos):
    """Sella el dist actual solo si los únicos ficheros distintos del manifiesto previo son los declarados.

    No ejecuta build. No escribe sello si la diferencia no coincide con la lista.
    """
    repo = os.path.abspath(repo)
    inicio = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    head = cabeza(repo)
    if sucio(repo):
        print("árbol vigilado sucio; no hay sello:", ", ".join(sucio(repo)))
        return 1
    dist = os.path.join(repo, "dist")
    antes = leer_manifiesto_sello(previo)
    ahora_sha, n, total, texto = manifiesto_dist(dist)
    ahora = {}
    for line in texto.splitlines():
        if not line or line.startswith("#"):
            continue
        sha, size, rel = line.split(" ", 2)
        ahora[rel] = (sha, size)
    cambiados = []
    for rel, par in ahora.items():
        if antes.get(rel) != par:
            cambiados.append(rel)
    faltan = [rel for rel in antes if rel not in ahora]
    esp = set(permitidos)
    got = set(cambiados)
    if faltan or got != esp:
        print("DELTA NO SELLA")
        print("esperados %d obtenidos %d faltan %d" % (len(esp), len(got), len(faltan)))
        for rel in sorted(got - esp)[:40]:
            print(" sobra", rel)
        for rel in sorted(esp - got)[:40]:
            print(" no-cambio", rel)
        for rel in faltan[:20]:
            print(" falta", rel)
        return 1
    extra = [
        "delta_prev_manifest=" + hashlib.sha256(open(previo, "rb").read()).hexdigest(),
        "delta_paths=%d" % len(cambiados),
    ] + ["delta_path=" + rel for rel in sorted(cambiados)]
    man, nfiles, nbytes = escribir_sello(repo, dist, head, inicio, extra)
    if man != ahora_sha or nfiles != n or nbytes != total:
        print("el sello escrito no coincide con la lectura; no se da por bueno")
        return 1
    print("SELLO %s ficheros %d bytes %d manifiesto %s delta %d" % (head, nfiles, nbytes, man, len(cambiados)))
    return 0


def main():
    repo = os.path.abspath(os.path.join(AQUI, "..", ".."))
    if len(sys.argv) > 1 and sys.argv[1] == "--delta":
        if len(sys.argv) != 4:
            print("uso: compilar.py --delta MANIFIESTO_PREVIO LISTA_RUTAS")
            sys.exit(2)
        rutas = [l.strip() for l in open(sys.argv[3], encoding="utf-8") if l.strip() and not l.startswith("#")]
        sys.exit(sellar_delta(repo, sys.argv[2], rutas))
    if len(sys.argv) > 1 and sys.argv[1] == "--comprobar":
        dist = sys.argv[2] if len(sys.argv) > 2 else os.path.join(repo, "dist")
        fallos = comprobar_sello(repo, dist)
        if fallos:
            print("SELLO NO VALIDO")
            for f in fallos:
                print(" -", f)
            sys.exit(1)
        print("SELLO VALIDO", open(os.path.join(repo, ".deploy-work", "build-commit"), encoding="utf-8").read().strip())
        sys.exit(0)
    if len(sys.argv) > 1 and sys.argv[1] == "--comprobar-reutilizacion":
        dist = sys.argv[2] if len(sys.argv) > 2 else os.path.join(repo, "dist")
        fallos = comprobar_reutilizacion(repo, dist)
        sello = open(os.path.join(repo, ".deploy-work", "build-commit"), encoding="utf-8").read().strip()
        if fallos:
            print("REUTILIZACION NO VALIDA")
            print("sello", sello)
            print("validacion", cabeza(repo))
            for f in fallos:
                print(" -", f)
            sys.exit(1)
        print("REUTILIZACION VALIDA")
        print("sello", sello)
        print("validacion", cabeza(repo))
        sys.exit(0)
    comando = [shutil_which_npm(), "run", "build:full"]
    sys.exit(compilar(repo, comando))


def shutil_which_npm():
    import shutil
    return shutil.which("npm") or "npm"


if __name__ == "__main__":
    main()
