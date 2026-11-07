#!/usr/bin/env python3
"""Recupera entregas cuyo contenido no está en HEAD.

No fusiona ramas. Compara blobs y, si un fichero diverge, hace merge a tres
bandas (base = merge-base, nuestro = HEAD, suyo = la rama). Si hay conflicto,
no toca el fichero. No edita tools/publicar/no-tocar.txt. No añade reglas 301
ni marcas noindex nuevas. Los ficheros generados (blog-lite, data-loaders,
sitemap) no se copian: el build los regenera.
"""
from __future__ import annotations

import csv
import hashlib
import json
import os
import re
import subprocess
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
INV = os.environ.get("INVENTARIO_DIR", "/tmp/inventario-ramas")
OUT = os.path.join(ROOT, "docs", "inventario")
os.makedirs(OUT, exist_ok=True)

PRIORITY = [
    "origin/niky-adsense-dart-contacto-2611",
    "origin/merlin-adsense-legales-1105",
    "origin/niky-fuentes-patinetes-2611",
    "origin/niky-faq-blogs-2611",
    "origin/niky-seo-1026",
    "origin/niky-seo-1102",
    "origin/precios-20261105",
    "origin/precios-20261106",
    "origin/radar-20261105-0258",
    "origin/radar-20261105-1258",
    "origin/radar-20261105-1758",
    "origin/radar-20261105-2258",
    "origin/niky-boe-zbe-rd953-20261106",
    "origin/radar-20261106-1358",
    "origin/radar-20261106-1858",
    "origin/merlin-fotos-blogs-1105",
]

SKIP_SUB = (
    "src/lib/blog-lite",
    "src/lib/data-loaders",
    "src/lib/comparador-lite",
    "src/lib/hub-",
    "src/lib/blog-lite-cat",
    "src/lib/blog-lite-home",
    "censo/",
    "b3-outputs/",
    "hidden_files/",
    ".t7-drafts/",
    ".deploy-work/",
)
SKIP_EXACT = {"index.html", "public/sitemap.xml", "public/_redirects"}


def run(args, input_bytes=None, check=False):
    return subprocess.run(["git", *args], input=input_bytes, capture_output=True, check=check)


def clean(s):
    return s.encode("utf-8", "surrogateescape").decode("utf-8", "replace")


def notocar():
    p = os.path.join(ROOT, "tools", "publicar", "no-tocar.txt")
    return {ln.strip() for ln in open(p, encoding="utf-8") if ln.strip() and not ln.startswith("#")}


def placeholders():
    out = set()
    p = os.path.join(ROOT, "scripts", "placeholder-md5.txt")
    for ln in open(p, encoding="utf-8"):
        ln = ln.strip()
        if ln and not ln.startswith("#"):
            out.add(ln)
    return out


def blob(rev, path):
    r = run(["show", f"{rev}:{path}"])
    if r.returncode != 0:
        return None
    return r.stdout


def head_has(path):
    return run(["cat-file", "-e", f"HEAD:{path}"]).returncode == 0


def skip_path(path):
    if path in SKIP_EXACT:
        return True
    if "generated" in path:
        return True
    return any(path.startswith(s) for s in SKIP_SUB)


def slugs_in(text):
    return set(re.findall(r'"slug"\s*:\s*"([^"]+)"', text)) | set(
        re.findall(r"\bslug:\s*\"([^\"]+)\"", text)
    )


def ids_in(text):
    return set(re.findall(r'\bid:\s*"([^"]+)"', text))


def existing_slugs():
    found = set()
    lib = os.path.join(ROOT, "src", "lib")
    for fn in os.listdir(lib):
        if not (fn.startswith("blog-posts-") or fn == "blog-data.ts"):
            continue
        if not fn.endswith(".ts"):
            continue
        found |= slugs_in(open(os.path.join(lib, fn), encoding="utf-8", errors="replace").read())
    slugf = os.path.join(ROOT, "scripts", "blog-slugs.txt")
    found |= {ln.strip() for ln in open(slugf, encoding="utf-8") if ln.strip()}
    return found


def existing_ids(prefix):
    found = set()
    lib = os.path.join(ROOT, "src", "lib")
    for fn in os.listdir(lib):
        if fn.startswith(prefix) and fn.endswith(".ts"):
            found |= ids_in(open(os.path.join(lib, fn), encoding="utf-8", errors="replace").read())
    return found


def append_lines(path, lines):
    cur = open(path, encoding="utf-8").read().splitlines()
    have = {ln.strip() for ln in cur}
    add = [ln for ln in lines if ln not in have]
    if not add:
        return 0
    with open(path, "a", encoding="utf-8") as f:
        if cur and cur[-1] != "":
            f.write("\n")
        f.write("\n".join(add) + "\n")
    return len(add)


def checkout(rev, path):
    r = run(["checkout", rev, "--", path])
    return r.returncode == 0


def merge_file(base, ours, theirs):
    """Devuelve (status, bytes). status: clean|conflict|igual|error."""
    if b"\0" in base or b"\0" in ours or b"\0" in theirs:
        return "binario", None
    td = "/tmp/merge3"
    os.makedirs(td, exist_ok=True)
    bp, op, tp = f"{td}/base", f"{td}/ours", f"{td}/theirs"
    for p, data in ((bp, base), (op, ours), (tp, theirs)):
        open(p, "wb").write(data)
    r = subprocess.run(["git", "merge-file", "-q", op, bp, tp], capture_output=True)
    data = open(op, "rb").read()
    if r.returncode < 0:
        return "error", None
    if r.returncode > 0 or b"<<<<<<<" in data:
        return "conflict", None
    if data == ours:
        return "igual", data
    return "clean", data


def guard(path, before, after):
    if path.endswith("Privacidad.tsx") or path.endswith("Terminos.tsx"):
        if "7,99" in before and "7,99" not in after:
            return "perderia el plan 7,99"
    if path.endswith("SobreNosotros.tsx"):
        if "Sánchez Verdasco" in before and "Sánchez Verdasco" not in after:
            return "perderia el nombre editorial completo"
    if after.count("noindex") > before.count("noindex") + 0:
        # permite el mismo número; cualquier noindex nuevo se rechaza
        if "noindex" in after and after.count("noindex") > before.count("noindex"):
            return "añadiria noindex"
    if path == "public/_redirects":
        b_lines = [ln for ln in before.splitlines() if ln.strip() and not ln.strip().startswith("#")]
        a_lines = [ln for ln in after.splitlines() if ln.strip() and not ln.strip().startswith("#")]
        if len(a_lines) < len(b_lines):
            return "perderia reglas de _redirects"
        bset = set(b_lines)
        nuevos = [ln for ln in a_lines if ln not in bset and " 301" in ln]
        if nuevos:
            return "añadiria 301"
    return None


def load_added():
    added = defaultdict(list)  # path -> [(date, sha, ref)]
    for line in open(os.path.join(INV, "unicos.jsonl"), encoding="utf-8"):
        u = json.loads(line)
        for p in u.get("added") or []:
            added[p].append((u["date"], u["sha"], u["ref"]))
    return added


def write_matrix():
    rows = [json.loads(l) for l in open(os.path.join(INV, "matriz.jsonl"), encoding="utf-8")]
    path = os.path.join(OUT, "matriz-ramas.csv")
    fields = ["ref", "sha", "date", "ancestor", "estado", "merge_base", "n_changed", "n_same", "n_differ", "n_added", "n_deleted_kept", "subject"]
    with open(path, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            r["subject"] = clean(r.get("subject") or "")
            w.writerow(r)
    return len(rows)


def main():
    nt = notocar()
    ph = placeholders()
    added = load_added()
    nmatrix = write_matrix()
    log = []

    def note(msg):
        log.append(msg)
        print(msg, flush=True)

    note(f"matriz {nmatrix} ramas escrita en docs/inventario/matriz-ramas.csv")

    # Ficheros ausentes (lista, sin traerlos todos).
    ausentes = os.path.join(OUT, "ficheros-ausentes.csv")
    with open(ausentes, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["path", "fecha_rama_mas_nueva", "rama", "sha"])
        for path in sorted(added):
            date, sha, ref = max(added[path])
            w.writerow([path, date, ref, sha])
    note(f"ficheros ausentes en HEAD: {len(added)}")

    # 1) Markdown de radares ya enrutados y que no están en el árbol.
    slugs = [ln.strip() for ln in open("scripts/radares-slugs.txt", encoding="utf-8") if ln.strip()]
    radar_ok = radar_miss = 0
    for slug in slugs:
        path = f"docs/radares/contenido/{slug}.md"
        if os.path.exists(path):
            continue
        cands = added.get(path)
        if not cands:
            radar_miss += 1
            continue
        date, sha, ref = max(cands)
        if checkout(sha, path):
            radar_ok += 1
        else:
            radar_miss += 1
    note(f"radares md recuperados {radar_ok}, sin fuente {radar_miss}")

    # 2) Posts y comparadores cuyo slug/id no existe.
    have_slugs = existing_slugs()
    have_auto = existing_ids("comparador-autocaravanas-")
    blog_added = 0
    blog_skip = 0
    auto_added = 0
    new_blog_slugs = []
    new_auto_ids = []
    for path, cands in sorted(added.items()):
        if not (path.startswith("src/lib/blog-posts-") or path.startswith("src/lib/comparador-autocaravanas-")):
            continue
        if os.path.exists(path):
            continue
        date, sha, ref = max(cands)
        data = blob(sha, path)
        if not data:
            continue
        text = data.decode("utf-8", "replace")
        if "NETLIFY_AUTH_TOKEN" in text or "BEGIN PRIVATE" in text:
            note(f"SKIP secreto {path}")
            continue
        if path.startswith("src/lib/blog-posts-"):
            sl = slugs_in(text)
            if not sl or not sl.isdisjoint(have_slugs):
                blog_skip += 1
                continue
            if checkout(sha, path):
                blog_added += 1
                have_slugs |= sl
                new_blog_slugs.extend(sorted(sl))
        else:
            ids = ids_in(text)
            if not ids or not ids.isdisjoint(have_auto):
                continue
            if checkout(sha, path):
                auto_added += 1
                have_auto |= ids
                new_auto_ids.extend(sorted(ids))
    nslug = append_lines("scripts/blog-slugs.txt", new_blog_slugs)
    nauto = append_lines("scripts/slugs-autocaravanas.txt", new_auto_ids)
    note(f"blogs nuevos {blog_added} (slugs +{nslug}), saltados por slug ya existente {blog_skip}")
    note(f"autocaravanas nuevas {auto_added} (ids +{nauto})")

    # 3) Merge a tres bandas de las entregas del 5-6/11 (y fotos de blogs).
    merged = conflicts = rejected = igual = protected = 0
    protected_paths = []
    conflict_paths = []
    for ref in PRIORITY:
        r = run(["merge-base", "HEAD", ref])
        if r.returncode != 0:
            note(f"sin merge-base {ref}")
            continue
        mb = r.stdout.decode().strip()
        diff = run(["diff", "--name-only", "--no-renames", mb, ref]).stdout.decode("utf-8", "replace").splitlines()
        for path in diff:
            path = path.strip()
            if not path or skip_path(path):
                continue
            theirs = blob(ref, path)
            ours = blob("HEAD", path)
            base = blob(mb, path)
            if theirs is None:
                continue
            if ours is None:
                # alta nueva de estas entregas (posts, csv, fotos)
                if path.startswith("public/media/"):
                    md5 = hashlib.md5(theirs).hexdigest()
                    if md5 in ph:
                        note(f"SKIP placeholder {path}")
                        continue
                if checkout(ref, path):
                    note(f"ALTA {ref} {path}")
                continue
            if base is None:
                base = ours
            status, data = merge_file(base, ours, theirs)
            if status == "igual":
                igual += 1
                continue
            if status != "clean":
                conflicts += 1
                if len(conflict_paths) < 200:
                    conflict_paths.append(f"{ref} {path} {status}")
                continue
            try:
                before = ours.decode("utf-8")
                after = data.decode("utf-8")
            except UnicodeDecodeError:
                conflicts += 1
                continue
            why = guard(path, before, after)
            if why:
                rejected += 1
                note(f"RECHAZADO {path}: {why}")
                continue
            os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
            open(path, "wb").write(data)
            merged += 1
            if path in nt:
                protected += 1
                protected_paths.append(path)
    note(f"merges limpios {merged} (de ellos en no-tocar {protected}), iguales {igual}, conflictos {conflicts}, rechazados {rejected}")

    # 4) Fotos citadas por el código y ausentes en disco, si alguna rama las tiene.
    refs = set()
    for dirpath, _, files in os.walk("src"):
        for fn in files:
            if not fn.endswith((".ts", ".tsx", ".js", ".json", ".css", ".md")):
                continue
            text = open(os.path.join(dirpath, fn), encoding="utf-8", errors="ignore").read()
            for m in re.findall(r"/media/[A-Za-z0-9_./%\-]+\.(?:webp|png|jpe?g|avif|svg)", text):
                refs.add("public" + m.split("?")[0])
    foto_ok = foto_ph = foto_no = 0
    for rel in sorted(refs):
        if os.path.exists(rel):
            continue
        cands = added.get(rel)
        if not cands:
            foto_no += 1
            continue
        date, sha, ref = max(cands)
        data = blob(sha, rel)
        if not data:
            foto_no += 1
            continue
        if hashlib.md5(data).hexdigest() in ph:
            foto_ph += 1
            continue
        if checkout(sha, rel):
            foto_ok += 1
        else:
            foto_no += 1
    note(f"fotos citadas recuperadas {foto_ok}, placeholder no copiado {foto_ph}, sin blob {foto_no}")

    # Excepciones no-tocar ya presentes frente a main, más las de este merge.
    changed = run(["diff", "--name-only", "main", "HEAD"]).stdout.decode().splitlines()
    # working tree vs main, including unstaged
    changed_now = run(["diff", "--name-only", "main"]).stdout.decode().splitlines()
    staged = run(["diff", "--name-only", "--cached", "main"]).stdout.decode().splitlines()
    tocados = sorted(set(changed_now) | set(staged) | set(protected_paths))
    tocados_nt = [p for p in tocados if p in nt]
    with open(os.path.join(OUT, "excepciones-no-tocar.txt"), "w", encoding="utf-8") as f:
        f.write("# Ficheros de tools/publicar/no-tocar.txt que difieren de main.\n")
        f.write("# no-tocar.txt NO se ha editado. El publicador abortará hasta que Daniel acepte la excepción.\n")
        for p in sorted(set(tocados_nt)):
            f.write(p + "\n")
    note(f"excepciones no-tocar frente a main (worktree): {len(set(tocados_nt))}")

    with open(os.path.join(OUT, "conflictos-no-aplicados.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(conflict_paths) + ("\n" if conflict_paths else ""))
    with open(os.path.join(OUT, "recuperacion-log.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(log) + "\n")
    print("HECHO", flush=True)


if __name__ == "__main__":
    main()
