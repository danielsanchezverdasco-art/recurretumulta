#!/usr/bin/env python3
"""publicar.py - publica recurretumulta.online en Netlify con el MISMO método seguro que usa Cosa.

  python3 tools/publicar/publicar.py                    # DRY-RUN (por defecto): hace TODAS las comprobaciones, no crea ni publica nada
  python3 tools/publicar/publicar.py --publicar --si-daniel "28/10 05:20 «Sí, publica...»"   # crea borrador, QA, publica, purga y verifica

Aborta (código != 0) ante cualquier fallo. NUNCA existe --allow-removals ni force. Ver tools/publicar/GUIA.md.
Solo librería estándar de Python (>=3.10). Las claves se leen del entorno o de tools/publicar/.env (no se sube a git)."""
import argparse, concurrent.futures as cf, csv, datetime, html, json, os, random, re, shutil, subprocess, sys, time
import urllib.error, urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = "438b74cf-d05a-4685-9de8-7bf56a1ef7ee"
PROD = "https://recurretumulta.online"
SECRETOS = ["NETLIFY_AUTH_TOKEN", "CF_API_TOKEN", "CLOUDFLARE_API_TOKEN", "CF_ZONE_ID"]
FASES = ["entorno", "candado", "vivo", "git", "src", "rev3", "build", "dist", "publicar"]
# Ficheros que `npm run build` y el postproceso regeneran y dejan "modificados" en git: es normal.
DIRT_OK = re.compile(r"(\.generated\.|__pycache__|^sitemap-final-informe\.json$|^scripts/noindex-vacios\.txt$|"
                     r"^src/lib/(data-loaders|historial-precios-gen|ficha-extra-gen|fichas-fechas-eeat|audiencia)/|"
                     r"^tools/publicar/(\.env$|\.deploy-work)|^\.deploy-work)")
# Cambios que solo tocan datos/contenido: permiten prerender parcial. Cualquier otro cambio de src/ exige prerender TOTAL.
DATA_RE = re.compile(r"^(src/lib/|src/content/|public/|docs/|tools/|scripts/(.*-slugs\.txt|routes\.json|datos-seo/|deploy/fotos-hotfix/))")


class Abort(Exception):
    pass


def hoy_madrid():
    try:
        from zoneinfo import ZoneInfo
        return datetime.datetime.now(ZoneInfo("Europe/Madrid")).date()
    except Exception:
        return (datetime.datetime.utcnow() + datetime.timedelta(hours=1)).date()


class Ctx:
    def __init__(s, a):
        s.a = a
        s.repo = os.path.abspath(a.repo)
        s.dist = os.path.abspath(a.dist if os.path.isabs(a.dist) else os.path.join(s.repo, a.dist))
        s.work = os.path.abspath(os.environ.get("DEPLOY_WORK") or os.path.join(s.repo, ".deploy-work"))
        os.makedirs(s.work, exist_ok=True)
        s.logf = open(os.path.join(s.work, "publicar-%s.log" % time.strftime("%Y%m%d-%H%M%S")), "a", encoding="utf8")
        s.estado = {}
        s.avisos = []

    def sc(s, t):  # quita cualquier secreto de lo que se imprime
        for k in SECRETOS:
            v = os.environ.get(k)
            if v and len(v) > 6:
                t = t.replace(v, "***")
        return t

    def say(s, m=""):
        m = s.sc(str(m)); print(m, flush=True); s.logf.write(m + "\n"); s.logf.flush()

    def ok(s, m): s.say("  OK   " + m)

    def warn(s, m): s.avisos.append(m); s.say("  AVISO " + m)

    def fase(s, n, t): s.say("\n== FASE %s: %s" % (n, t))

    def abort(s, m): raise Abort(s.sc(m))

    def run(s, cmd, cwd=None, env=None, check=True, quiet=False, tail=None):
        e = dict(os.environ); e["DEPLOY_WORK"] = s.work
        if env: e.update(env)
        s.logf.write("$ " + s.sc(" ".join(cmd)) + "\n")
        p = subprocess.Popen(cmd, cwd=cwd or s.repo, env=e, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, encoding="utf8", errors="replace")
        out = []
        for line in p.stdout:
            line = s.sc(line.rstrip("\n")); out.append(line); s.logf.write(line + "\n")
            if not quiet: print("    " + line, flush=True)
        p.wait(); s.logf.flush()
        if check and p.returncode != 0:
            s.abort("FALLÓ (código %s): %s\n    %s" % (p.returncode, " ".join(cmd[:4]), "\n    ".join(out[-8:])))
        return p.returncode, "\n".join(out)

    def git(s, *args, check=True):
        r = subprocess.run(["git"] + list(args), cwd=s.repo, capture_output=True, text=True, encoding="utf8", errors="replace")
        if check and r.returncode != 0:
            s.abort("git %s falló: %s" % (" ".join(args), r.stderr.strip()[:300]))
        return r.stdout

    def py(s, script, *args, **kw):
        return s.run([sys.executable, os.path.join(s.repo, "scripts", "deploy", script)] + list(args), **kw)


def load_env_file():
    p = os.path.join(HERE, ".env")
    if not os.path.exists(p): return
    for l in open(p, encoding="utf8"):
        l = l.strip()
        if not l or l.startswith("#") or "=" not in l: continue
        k, v = l.split("=", 1); k = k.strip(); v = v.strip().strip('"').strip("'")
        if v and not os.environ.get(k): os.environ[k] = v


def read_estado():
    d = {}
    for l in open(os.path.join(HERE, "ESTADO-VIVO.txt"), encoding="utf8"):
        if l.startswith("#") or "=" not in l: continue
        k, v = l.strip().split("=", 1); d[k] = v
    return d


def sucio(c, untracked=True):
    """Cambios sin commit que NO son ficheros generados por el build."""
    a = ["status", "--porcelain"] + ([] if untracked else ["--untracked-files=no"])
    return [l for l in c.git(*a).splitlines() if l.strip() and not DIRT_OK.search(l[3:].strip().strip('"'))]


def lines_of(p):
    return [l.strip() for l in open(p, encoding="utf8") if l.strip() and not l.lstrip().startswith("#")] if os.path.exists(p) else []


def http(url, method="GET", follow=False, timeout=40):
    class NR(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *x, **k): return None
    op = urllib.request.build_opener() if follow else urllib.request.build_opener(NR)
    try:
        r = op.open(urllib.request.Request(url, method=method, headers={"User-Agent": "Mozilla/5.0 (publicar.py)", "Cache-Control": "no-cache"}), timeout=timeout)
        return r.status, r.headers, (r.read().decode("utf8", "replace") if method == "GET" else "")
    except urllib.error.HTTPError as e:
        return e.code, e.headers, ""
    except Exception:
        return 0, {}, ""


def path_of_html(p):  # /coches/x/index.html -> /coches/x/
    return p[:-len("index.html")] if p.endswith("/index.html") else p


# ---------------------------------------------------------------- FASES
def f_entorno(c):
    c.fase("entorno", "programas y claves")
    v = subprocess.run(["node", "-v"], capture_output=True, text=True).stdout.strip() if shutil.which("node") else ""
    if not v: c.abort("Falta node (>=20). Instálalo desde nodejs.org.")
    if int(v.lstrip("v").split(".")[0]) < 20: c.abort("node %s es antiguo; hace falta >=20." % v)
    c.ok("node " + v)
    if not shutil.which("npm"): c.abort("Falta npm.")
    if not shutil.which("git"): c.abort("Falta git.")
    if sys.version_info < (3, 10): c.abort("Python >=3.10 necesario.")
    c.ok("python %d.%d, npm, git" % sys.version_info[:2])
    try:
        import PIL; c.ok("Pillow " + PIL.__version__)
    except ImportError:
        c.abort("Falta Pillow: pip install Pillow==12.3.0")
    if not os.environ.get("NETLIFY_AUTH_TOKEN"): c.abort("FALTA NETLIFY_AUTH_TOKEN (entorno o tools/publicar/.env). Pídesela a Daniel.")
    c.ok("NETLIFY_AUTH_TOKEN presente (no se imprime)")
    cft = os.environ.get("CF_API_TOKEN") or os.environ.get("CLOUDFLARE_API_TOKEN")
    if cft and not os.environ.get("CF_ZONE_ID"):  # consulta de SOLO LECTURA (GET) para sacar el id de zona
        try:
            rq = urllib.request.Request("https://api.cloudflare.com/client/v4/zones?name=recurretumulta.online", headers={"Authorization": "Bearer " + cft, "User-Agent": "publicar.py"})
            zs = json.loads(urllib.request.urlopen(rq, timeout=30).read()).get("result") or []
            if len(zs) == 1 and zs[0].get("name") == "recurretumulta.online":
                os.environ["CF_ZONE_ID"] = zs[0]["id"]; c.ok("CF_ZONE_ID obtenido de Cloudflare (consulta de solo lectura)")
            else: c.warn("Cloudflare no devolvió una zona única para recurretumulta.online; pon CF_ZONE_ID a mano.")
        except Exception as e:
            c.warn("no pude obtener CF_ZONE_ID (¿el token no tiene permiso Zone:Read?): %s. Ponlo a mano en .env." % type(e).__name__)
    falta = [k for k in ("CF_ZONE_ID",) if not os.environ.get(k)]
    if not cft: falta.append("CF_API_TOKEN")
    if falta:
        if c.a.publicar: c.abort("Para --publicar faltan: %s" % ", ".join(falta))
        c.warn("faltan %s: el dry-run sigue, pero NO podrás purgar Cloudflare al publicar." % ", ".join(falta))
    else:
        c.ok("CF_API_TOKEN y CF_ZONE_ID presentes")
    # .env.production
    envp = os.path.join(c.repo, ".env.production")
    if not os.path.exists(envp) and not c.a.sin_build:
        url = None
        chk = os.path.join(c.repo, "scripts", "check-convex-url.mjs")
        if os.path.exists(chk):
            mm = re.search(r'ESPERADA\s*=\s*"(https://[a-z0-9-]+\.eu-west-1\.convex\.cloud)"', open(chk, encoding="utf8").read())
            if mm: url = mm.group(1)
        if not url:  # alternativa: la web viva (URL regional; se ignoran URL de ejemplo)
            st, _, h = http(PROD + "/", follow=True)
            m = re.search(r'src="(/assets/index-[^"]+\.js)"', h)
            if m:
                js = http(PROD + m.group(1), follow=True)[2]
                for nm in [m.group(1)] + ["/assets/" + x for x in dict.fromkeys(re.findall(r"[\"'`./]([\w-]+\.js)", js))][:25]:
                    if nm != m.group(1): js = http(PROD + nm, follow=True)[2]
                    u = [x for x in re.findall(r"https://[a-z0-9-]+\.eu-west-1\.convex\.cloud", js) if "happy-otter" not in x]
                    if u: url = u[0]; break
        if not url: c.abort("No hay .env.production y no he podido sacar la URL regional de Convex. Créalo con VITE_CONVEX_URL=https://<nombre>.eu-west-1.convex.cloud")
        open(envp, "w").write("VITE_CONVEX_URL=%s\n" % url)
        c.ok(".env.production creado con la URL pública de Convex que ya usa la web viva (no es secreta)")
    if os.path.exists(envp):
        t = open(envp, encoding="utf8").read()
        m = re.search(r"^VITE_CONVEX_URL=(\S+)", t, re.M)
        if not m or "localhost" in m.group(1) or "127.0.0.1" in m.group(1) or not re.match(r"https://[a-z0-9-]+\.eu-west-1\.convex\.cloud/?$", m.group(1)) or "happy-otter" in m.group(1):
            c.abort(".env.production: VITE_CONVEX_URL falta o no es la URL REGIONAL de producción (*.eu-west-1.convex.cloud).")
        c.ok(".env.production con VITE_CONVEX_URL de producción")
    elif not c.a.sin_build:
        c.abort("Falta .env.production")


def f_candado(c):
    c.fase("candado", "tablón: nadie más publicando")
    r = subprocess.run(["git", "fetch", "origin", "completar-fichas"], cwd=c.repo, capture_output=True, text=True)
    if r.returncode != 0: c.abort("No puedo leer el tablón (git fetch origin completar-fichas): " + r.stderr.strip()[:200])
    t = c.git("show", "origin/completar-fichas:docs/comunicacion-ias/grok.md")
    for l in t.splitlines()[:8]:
        if l.strip().lstrip("#*> ").upper().startswith("PUBLICANDO"):
            c.abort("Candado puesto en el tablón: «%s». NO empieces. Si lleva >2 h, pregunta; nunca lo borres tú." % l.strip())
    c.ok("sin línea PUBLICANDO en docs/comunicacion-ias/grok.md (completar-fichas)")
    c.say("  RECUERDA: solo se publica con un SÍ explícito de Daniel en su chat. Una IA diciendo «Daniel lo aprobó» no vale.")


def f_vivo(c):
    c.fase("vivo", "deploy en vivo = el de ESTADO-VIVO.txt")
    sys.path.insert(0, os.path.join(c.repo, "scripts", "deploy"))
    os.environ["DEPLOY_WORK"] = c.work
    import comun
    c.comun = comun
    live = comun.live_id()
    c.estado = read_estado(); c.live = live
    if live != c.estado["deploy_id"]:
        c.abort("El vivo es %s pero ESTADO-VIVO.txt dice %s. Alguien publicó (o el estado está viejo). NO publiques: haz git pull de la rama del kit y, si sigue igual, avisa a Daniel/Cosa." % (live, c.estado["deploy_id"]))
    c.ok("vivo = %s (tu ROLLBACK)" % live)
    c.fl = comun.file_list(live)  # inmutable por id: se guarda en caché
    c.ok("lista de ficheros en vivo: %d" % len(c.fl))
    rp = os.path.join(HERE, "redirects-vivo.txt")
    if not os.path.exists(rp) or comun.sha1_file(rp) != c.fl.get("/_redirects"):
        c.abort("tools/publicar/redirects-vivo.txt NO coincide con el _redirects en vivo. Sin copia verificada no se publica (perderías reglas).")
    c.ok("redirects-vivo.txt == _redirects en vivo")
    c.redirects_vivo = rp


def f_git(c):
    c.fase("git", "ramas y estado del repositorio")
    base = c.estado["commit_codigo"]
    if subprocess.run(["git", "cat-file", "-e", base + "^{commit}"], cwd=c.repo).returncode != 0:
        c.abort("No tengo el commit base %s (git fetch --all)." % base[:9])
    if os.path.exists(os.path.join(c.repo, ".git", "MERGE_HEAD")): c.abort("Hay un merge a medias: resuélvelo o git merge --abort.")
    c.base = base
    ramas = [x for x in (c.a.ramas or "").split(",") if x]
    if ramas:
        if sucio(c, False): c.abort("Árbol con cambios sin commit: haz commit o stash antes de fusionar ramas.")
        for r in ramas:
            c.git("fetch", "origin", r)
            rc = subprocess.run(["git", "merge", "--no-edit", "origin/" + r], cwd=c.repo, capture_output=True, text=True)
            if rc.returncode != 0:
                subprocess.run(["git", "merge", "--abort"], cwd=c.repo)
                c.abort("Conflicto al fusionar %s (merge abortado, nada cambiado). Resuélvelo a mano; no inventes: pregunta." % r)
            c.ok("fusionada origin/" + r)
    if subprocess.run(["git", "merge-base", "--is-ancestor", base, "HEAD"], cwd=c.repo).returncode != 0:
        c.abort("HEAD no contiene el commit en vivo %s: estás en una rama que no parte de lo publicado. Usa kit-publicar-merlin (o su descendiente)." % base[:9])
    c.ok("HEAD %s contiene el código en vivo (%s)" % (c.git("rev-parse", "--short", "HEAD").strip(), base[:9]))
    dirty = [l for l in c.git("status", "--porcelain").splitlines() if l.strip()]
    malos = [l for l in dirty if not DIRT_OK.search(l[3:].strip().strip('"'))]
    if malos:
        c.abort("Hay cambios sin commit que NO son del build (se publicarían sin revisar): " + "; ".join(malos[:8]))
    if dirty and not c.a.sin_build:
        # antes de construir, el árbol debe estar limpio salvo lo generado
        pass
    c.ok("árbol de trabajo limpio (salvo ficheros generados por el build: %d)" % len(dirty))


def f_src(c):
    c.fase("src", "no-tocar, títulos congelados, tienda fuera")
    base = c.base
    changed = [x for x in c.git("diff", "--name-only", base, "HEAD").splitlines() if x]
    c.changed_src = changed
    c.ok("ficheros cambiados respecto a lo vivo: %d" % len(changed))
    nt = set(lines_of(os.path.join(HERE, "no-tocar.txt")))
    tocados = sorted(set(changed) & nt)
    if tocados: c.abort("Se han tocado %d páginas/ficheros BLOQUEADOS (no-tocar.txt): %s" % (len(tocados), ", ".join(tocados[:10])))
    c.ok("0 ficheros de no-tocar.txt cambiados (%d en la lista)" % len(nt))
    # títulos congelados hasta el 1/11/2026 (Madrid)
    csvp = "src/content/seo/titulos.csv"
    def rows(txt):
        return {r["url"]: (r.get("titulo_nuevo") or "").strip() for r in csv.DictReader(txt.splitlines())}
    old = rows(c.git("show", base + ":" + csvp)); new = rows(open(os.path.join(c.repo, csvp), encoding="utf8").read())
    dif = sorted(u for u in old if old[u] != new.get(u))
    congelado = hoy_madrid() < datetime.date(2026, 11, 1)
    if dif and congelado: c.abort("TÍTULOS CONGELADOS hasta el 1/11/2026: %d títulos cambiados (p.ej. %s)." % (len(dif), dif[:3]))
    if dif: c.warn("%d títulos cambiados en titulos.csv (ya pasó el 1/11: confirma con Daniel que están aprobados)." % len(dif))
    else: c.ok("títulos existentes de titulos.csv sin cambios (%s)" % ("congelados hasta 1/11" if congelado else "hoy ya no hay congelación"))
    # tienda fuera del build
    mal = []
    rj = json.load(open(os.path.join(c.repo, "scripts", "routes.json"), encoding="utf8"))
    if any(str(r).startswith("/tienda") for r in rj.get("staticRoutes", [])): mal.append("scripts/routes.json tiene /tienda")
    for f, pat in (("src/App.tsx", r'path="tienda|pages/tienda'), ("src/components/shared-navbar.tsx", r'/tienda'), ("src/pages/index/_components/AnalizadorMulta.tsx", r'/tienda')):
        p = os.path.join(c.repo, f)
        if os.path.exists(p) and re.search(pat, open(p, encoding="utf8", errors="ignore").read()): mal.append(f + " enlaza/rutea la tienda")
    if mal: c.abort("TIENDA DENTRO DEL BUILD (debe quedar fuera): " + "; ".join(mal))
    c.ok("tienda fuera del build (rutas, navbar, embudo)")
    c.need_full = [x for x in changed if x.startswith("src/") and not DATA_RE.search(x)]
    if c.need_full:
        c.say("  (hay %d cambios de CÓDIGO en src/, p.ej. %s → exige prerender TOTAL)" % (len(c.need_full), c.need_full[0]))


def f_rev3(c):
    c.fase("rev3", "0 frases repetidas nuevas (8-gramas) frente a lo vivo")
    out = os.path.join(c.work, "rev3new.json")
    rc, t = c.run([sys.executable, os.path.join(HERE, "rev3b.py"), c.repo, c.base, c.base, "HEAD"], env={"REV3_OUT": out}, check=False, quiet=True)
    m = re.search(r"ACUMULADO nuevos 8-gramas repetidos vs vivo:\s*(\d+)", t)
    if rc != 0 or not m: c.abort("rev3b.py no ha dado resultado (rc=%s): %s" % (rc, t[-300:]))
    n = int(m.group(1))
    for l in t.splitlines()[:4]: c.say("    " + l)
    if n != 0: c.abort("rev3: %d frases de 8+ palabras NUEVAS repetidas (detalle en %s). Reescribe sin repetir; no se publica." % (n, out))
    c.ok("rev3 = 0 nuevas repeticiones")


def rutas_todas(c, ref=None):
    def rd(f):
        return (c.git("show", "%s:%s" % (ref, f)) if ref else open(os.path.join(c.repo, f), encoding="utf8").read())
    cfg = json.loads(rd("scripts/routes.json"))
    R = list(cfg["staticRoutes"]) + ["/multas/" + p for p in cfg["provinceSlugs"]] + ["/provincias/" + p for p in cfg["provinceSlugs"]] + ["/comunidades/" + x for x in cfg["communitySlugs"]]
    for sf in cfg["slugFiles"]:
        R += [sf["prefix"] + s.strip() for s in rd(sf["file"]).splitlines() if s.strip()]
    return list(dict.fromkeys(R)), set(cfg["staticRoutes"])


def f_build(c):
    c.fase("build", "tsc + build + vivo + prerender + postproceso")
    if c.a.sin_build:
        if not os.path.isdir(c.dist): c.abort("--sin-build pero no existe %s" % c.dist)
        c.ok("--sin-build: uso el dist existente (%s)" % c.dist); return
    if sucio(c, False):
        c.abort("Árbol con cambios sin commit antes de construir: haz commit (o git stash) para que lo publicado = lo revisado.")
    if not os.path.isdir(os.path.join(c.repo, "node_modules")): c.run(["npm", "ci"] if os.name != "nt" else ["npm.cmd", "ci"])
    npm = shutil.which("npm")
    c.run([npm, "run", "build"])
    idx = [f for f in os.listdir(os.path.join(c.dist, "assets")) if f.startswith(("index-", "react-")) and f.endswith(".js")]
    js = "".join(open(os.path.join(c.dist, "assets", f), encoding="utf8", errors="ignore").read() for f in idx)
    cu = re.search(r"^VITE_CONVEX_URL=(\S+)", open(os.path.join(c.repo, ".env.production"), encoding="utf8").read(), re.M)
    if not cu or cu.group(1).rstrip("/") not in js or re.search(r"(localhost|127\.0\.0\.1):\d+", js): c.abort("El build apunta a Convex equivocado (.env.production). No se publica.")
    c.ok("build OK y Convex de producción")
    c.py("bajar_vivo.py", "dist", "--rellenar", "--patron", r"\.html$")
    c.run([sys.executable, os.path.join(c.repo, "scripts", "rellenar-media-vivo.py"), "dist"])
    todas, estaticas = rutas_todas(c)
    modo = c.a.prerender
    env = {"PRERENDER_CONCURRENCY": os.environ.get("PRERENDER_CONCURRENCY", "4")}
    if modo == "todo":
        rutas = todas
    else:
        if modo == "rapido":
            if c.need_full: c.abort("Hay cambios de código en src/ (p.ej. %s): usa --prerender todo." % c.need_full[0])
            vivas, _ = rutas_todas(c, c.base)
            rutas = list(dict.fromkeys(["/"] + sorted(estaticas) + [r for r in todas if r not in set(vivas)]))
        else:
            rutas = ["/"] + lines_of(modo)
        rf = os.path.join(c.work, "rutas-prerender.txt"); open(rf, "w").write("\n".join(rutas) + "\n")
        env["PRERENDER_ONLY_FILE"] = rf
    # Rutas con 301! en public/_redirects: Netlify las redirige aunque exista fichero; no se prerenderizan (cada una gastaba 30-70 s en timeout de canonical).
    redir301 = set()
    for ln in open(os.path.join(c.repo, "public", "_redirects"), encoding="utf8"):
        pp = ln.split()
        if len(pp) >= 3 and pp[0].startswith("/") and pp[2].startswith("301") and "*" not in pp[0] and ":" not in pp[0]: redir301.add(pp[0].rstrip("/") or "/")
    n0 = len(rutas); rutas = [r for r in rutas if r == "/" or r not in redir301]
    if n0 != len(rutas):
        rf = os.path.join(c.work, "rutas-prerender.txt"); open(rf, "w").write("\n".join(rutas) + "\n"); env["PRERENDER_ONLY_FILE"] = rf
        c.say("  (%d rutas con 301 en _redirects no se prerenderizan)" % (n0 - len(rutas)))
    c.say("  prerender de %d rutas (modo %s)" % (len(rutas), modo))
    rc, t = c.run(["node", "scripts/prerender.mjs"], env=env, check=False, quiet=True)
    c.say("    " + (t.strip().splitlines() or [""])[-1])
    ign = set(lines_of(os.path.join(HERE, "rutas-sin-pagina-ok.txt")))
    faltan = [r for r in rutas if r != "/" and not os.path.exists(os.path.join(c.dist, r.strip("/"), "index.html")) and r not in ign]
    if rc != 0 and not faltan: c.warn("prerender salió con código %s pero todas las rutas tienen página (se conserva la de vivo)." % rc)
    if faltan: c.abort("Prerender sin página para %d rutas (ni nueva ni en vivo): %s. Repite esas rutas con PRERENDER_CONCURRENCY=1; si sigue, es un error del contenido." % (len(faltan), faltan[:8]))
    c.ok("todas las rutas tienen página en dist")
    for cmd in [["python3", "scripts/gen-hero-variantes.py", "dist"], ["python3", "scripts/gen-hubs.py", "dist"], ["python3", "scripts/seo-dist.py", "dist"],
                ["python3", "scripts/gen-marcas.py", "dist"], ["node", "scripts/apply-seo.mjs", "dist"], ["python3", "scripts/fix-jsonld-fichas.py", "dist"],
                ["python3", "scripts/fix-jsonld-global.py", "dist"], ["python3", "scripts/adsense-dist.py", "dist", "blog"], ["node", "scripts/apply-seo.mjs", "dist"], ["python3", "scripts/postfix-dist.py", "dist"], ["python3", "scripts/postfix-vacios.py", "dist"],
                ["python3", "scripts/fix-redirects.py"], ["python3", "../scripts/fix-chains.py"], ["python3", "scripts/postproceso-seo-20261019.py", "dist"],
                ["python3", "scripts/deploy/fotos-hotfix/fotos_hotfix.py", "dist/media", "--bajar-origenes", "--lista-salida", os.path.join(c.work, "media-forzar.txt")],
                ["python3", "scripts/postfix-foto-pendiente.py", "dist"],
                ["python3", "scripts/politica-noindex.py", "dist"],  # 31/10: regla de Daniel, sin noindex salvo scripts/noindex-permitidos.txt
                ["python3", "scripts/sitemap-final.py", "dist"]]:
        cwd = os.path.join(c.repo, "dist") if cmd[1] == "../scripts/fix-chains.py" else c.repo
        cmd = [sys.executable if x == "python3" else x for x in cmd]
        c.say("  paso: " + " ".join(os.path.basename(x) if i == 0 else x for i, x in enumerate(cmd[:3])))
        c.run(cmd, cwd=cwd, quiet=True)
    c.ok("postproceso (17 pasos) OK")
    dirty = [l for l in c.git("status", "--porcelain").splitlines() if l.strip()]
    malos = [l for l in dirty if not DIRT_OK.search(l[3:].strip().strip('"'))]
    if malos: c.abort("El build ha modificado ficheros fuente inesperados: " + "; ".join(malos[:6]))


def titulo_de(h):
    m = re.search(r"<title[^>]*>(.*?)</title>", h, re.S | re.I)
    return html.unescape(m.group(1)).strip() if m else None


def f_dist(c):
    c.fase("dist", "comprobaciones sobre dist/ antes del borrador")
    comun = c.comun
    for f in ("index.html", "404.html", "robots.txt", "ads.txt", "sitemap.xml", "_redirects"):
        if not os.path.exists(os.path.join(c.dist, f)) and ("/" + f) not in c.fl: c.abort("Falta %s en dist y en vivo." % f)
    c.ok("ficheros raíz presentes (index, 404, robots, ads, sitemap, _redirects)")
    # mkdraft --check: 0 eliminaciones, 0 reglas perdidas
    mf = os.path.join(c.work, "media-forzar.txt")
    args = ["--dist", c.dist, "--vivo", c.live, "--titulo", "simulacro", "--check"] + (["--media-forzar", mf] if os.path.exists(mf) else [])
    rc, t = c.py("mkdraft.py", *args, env={"REDIRECTS_VIVO": c.redirects_vivo}, check=False, quiet=True)
    for l in t.splitlines()[-6:]: c.say("    " + l)
    m = re.search(r"DESAPARECER[ÍI]AN (\d+) \| nuevos (\d+) \| cambiados (\d+)", t)
    if rc != 0 or not m: c.abort("mkdraft --check FALLÓ (rc=%s). Mira el log; NO se publica." % rc)
    if int(m.group(1)) != 0: c.abort("REMOCIONES: %s ficheros en vivo desaparecerían. Prohibido (nunca --allow-removals)." % m.group(1))
    if "0 reglas en vivo perdidas" not in t: c.abort("_redirects: se pierden reglas en vivo.")
    c.ok("0 eliminaciones, 0 reglas de _redirects perdidas | nuevos %s | cambiados %s" % (m.group(2), m.group(3)))
    c.n_new, c.n_chg = int(m.group(2)), int(m.group(3))
    cam = json.load(open(os.path.join(c.work, "cambios.json")))
    c.cam = cam
    if c.a.prerender == "rapido" and c.n_chg > 3000: c.warn("prerender rápido pero %d páginas cambiadas: revisa que son las esperadas." % c.n_chg)
    pages = [p for p in cam["new"] + cam["chg"] if p.endswith(".html")]
    # tienda: nada de /tienda en lo que se sube
    tt = [p for p in cam["new"] + cam["chg"] if p.startswith("/tienda")]
    if tt: c.abort("La subida toca /tienda: %s" % tt[:5])
    # contenido de las páginas cambiadas
    con_tienda, rotas, vacias = [], {}, []
    live_l = {k.lower() for k in c.fl}
    for p in pages:
        f = os.path.join(c.dist, p.lstrip("/"))
        if not os.path.exists(f): continue
        h = open(f, encoding="utf8", errors="ignore").read()
        if re.search(r'href="/tienda', h): con_tienda.append(p)
        if "Algo salió mal" in h or re.search(r"(localhost|127\.0\.0\.1):\d{4}", h): vacias.append(p)
        for mm in set(re.findall(r'(?:src|content|href)="(?:https://recurretumulta\.online)?(/media/[^"?#]+)', h)):
            mm = urllib.parse.unquote(mm)
            if mm.lower() not in live_l and not os.path.exists(os.path.join(c.dist, mm.lstrip("/"))): rotas.setdefault(p, []).append(mm)
    if con_tienda: c.abort("%d páginas cambiadas enlazan a /tienda (p.ej. %s)." % (len(con_tienda), con_tienda[:3]))
    c.ok("ninguna página cambiada enlaza a /tienda")
    if vacias: c.abort("%d páginas con «Algo salió mal» o URLs localhost (p.ej. %s)." % (len(vacias), vacias[:3]))
    c.ok("sin «Algo salió mal» ni localhost en las páginas cambiadas")
    # fotos rotas: solo cuenta si la versión en vivo de la página NO tiene ya la misma foto rota
    # 31/10/2026: el listado de ficheros de vivo es incompleto -> una foto ausente del listado cuenta como existente si vivo la sirve (HTTP 200).
    _ok_vivo = {}
    for ms_ in rotas.values():
        for m_ in ms_:
            if m_ not in _ok_vivo:
                _ok_vivo[m_] = http("https://%s--%s.netlify.app%s" % (c.live, comun.site_name(), urllib.parse.quote(m_)), follow=False)[0] == 200
    rotas = {p_: [m_ for m_ in ms_ if not _ok_vivo.get(m_)] for p_, ms_ in rotas.items()}
    rotas = {p_: ms_ for p_, ms_ in rotas.items() if ms_}
    nuevas_rotas = {}
    for p, ms in rotas.items():
        base_url = "https://%s--%s.netlify.app%s" % (c.live, comun.site_name(), path_of_html(p))
        st, _, h = http(base_url, follow=False)
        pre = st == 200 and all((m_ in h or urllib.parse.quote(m_) in h) for m_ in ms)
        if not pre: nuevas_rotas[p] = ms
    if nuevas_rotas:
        ej = list(nuevas_rotas.items())[0]
        c.abort("FOTOS ROTAS: %d páginas referencian /media/ que no existe ni en dist ni en vivo (p.ej. %s → %s). Revierte esas páginas a la versión de vivo o añade la foto real con su fuente." % (len(nuevas_rotas), ej[0], ej[1][:2]))
    c.ok("0 fotos rotas nuevas (%d ya estaban rotas en vivo)" % len(rotas))
    c.py("chequeo_fotos.py", "--dist", c.dist, "--cambios", os.path.join(c.work, "cambios.json"), quiet=True)
    c.ok("chequeo_fotos.py OK (sin fotos IA, fotos nuevas con URL de fuente)")
    # 31/10/2026 (orden de Daniel): las comprobaciones de FOTOS solo INFORMAN (no abortan). Lo que sí aborta: noindex fuera de lista.
    rc, t = c.run([sys.executable, os.path.join(c.repo, "scripts", "validar-dist-publicable.py"), c.dist, "--informe", os.path.join(c.work, "validar-dist.txt")], check=False, quiet=True)
    if rc != 0: c.warn("validar-dist-publicable.py (solo informe): %s. Informe: %s" % ("; ".join(t.strip().splitlines()[:2])[:300], os.path.join(c.work, "validar-dist.txt")))
    else: c.ok("validar-dist-publicable.py OK")
    rc, t = c.run([sys.executable, os.path.join(HERE, "verificar_fotos_fichas.py"), c.dist, "--informe", os.path.join(c.work, "verificar-fotos-fichas.txt")], check=False, quiet=True)
    c.say("    " + (t.strip().splitlines() or ["(sin salida)"])[0][:300])
    if rc != 0: c.warn("verificar_fotos_fichas.py (solo informe): fichas con foto que no se pinta / imágenes sin 200. Informe: %s" % os.path.join(c.work, "verificar-fotos-fichas.txt"))
    # REGLA DE DANIEL: nunca noindex salvo scripts/noindex-permitidos.txt (BLOQUEANTE)
    rc, t = c.run([sys.executable, os.path.join(c.repo, "scripts", "politica-noindex.py"), c.dist, "--comprobar"], check=False, quiet=True)
    if rc != 0: c.abort("Hay páginas con noindex fuera de scripts/noindex-permitidos.txt: %s" % t.strip()[:400])
    c.ok("0 noindex fuera de la lista permitida (scripts/noindex-permitidos.txt)")
    # títulos congelados en el HTML real: muestra de páginas cambiadas vs vivo
    exist = [p for p in cam["chg"] if p.endswith(".html")]
    random.seed(1); muestra = random.sample(exist, min(len(exist), c.a.muestra_titulos))
    def tv(p):
        st, _, h = http("https://%s--%s.netlify.app%s" % (c.live, comun.site_name(), path_of_html(p)))
        return p, st, titulo_de(h) if st == 200 else None
    difs, sin = [], 0
    with cf.ThreadPoolExecutor(12) as ex:
        for p, st, tl in ex.map(tv, muestra):
            if st != 200 or tl is None: sin += 1; continue
            f = os.path.join(c.dist, p.lstrip("/"))
            if titulo_de(open(f, encoding="utf8", errors="ignore").read()) != tl: difs.append((p, tl))
    if difs and hoy_madrid() < datetime.date(2026, 11, 1):
        c.abort("TÍTULO CAMBIADO en %d de %d páginas muestreadas (congelados hasta 1/11): %s" % (len(difs), len(muestra), difs[:2]))
    if difs: c.warn("%d títulos distintos a los de vivo en la muestra" % len(difs))
    c.ok("títulos iguales a los de vivo en la muestra (%d páginas%s)" % (len(muestra) - sin, ", %d sin versión 200 en vivo" % sin if sin else ""))
    # sitemap
    sm = open(os.path.join(c.dist, "sitemap.xml"), encoding="utf8").read(); urls = re.findall(r"<loc>([^<]+)</loc>", sm)
    st, _, lsm = http("https://%s--%s.netlify.app/sitemap.xml" % (c.live, comun.site_name())); nl = lsm.count("<loc>")
    if len(urls) < 0.97 * nl: c.abort("El sitemap baja de %d a %d URLs (>3%%). Revisa antes de publicar." % (nl, len(urls)))
    fl_l = live_l | {("/" + os.path.relpath(os.path.join(dp, f), c.dist).replace(os.sep, "/")).lower() for dp, _, fs in os.walk(c.dist) for f in fs if f == "index.html"}
    sin_pag = [u for u in urls if (urllib.parse.urlparse(u).path.rstrip("/") + "/index.html").lower() not in fl_l]
    if sin_pag: c.abort("El sitemap lista %d URLs sin página (p.ej. %s)." % (len(sin_pag), sin_pag[:3]))
    c.ok("sitemap: %d URLs (vivo %d), todas con página" % (len(urls), nl))
    c.dist_sitemap_n = len(urls)
    # _redirects
    rd = open(os.path.join(c.dist, "_redirects"), encoding="utf8").read()
    if len(rd.splitlines()) < len(open(c.redirects_vivo, encoding="utf8").read().splitlines()) - 0 and not c.a.permitir_menos_reglas:
        c.abort("dist/_redirects tiene MENOS líneas que el de vivo.")
    def _reglas(t): return {" ".join(l.split()) for l in t.splitlines() if l.strip() and not l.lstrip().startswith("#")}
    perdidas = _reglas(open(c.redirects_vivo, encoding="utf8").read()) - _reglas(rd)
    if perdidas:
        c.abort("dist/_redirects PIERDE %d reglas del _redirects en vivo (p.ej. %s). Causa típica: construyes desde main, que no tiene los 301 de lexus-tz-2026, audi-q9-2026, bmw-ix7-2027 y bentley-torcal-first-edition-2026; usa la rama del kit." % (len(perdidas), sorted(perdidas)[:3]))
    c.ok("_redirects completo (%d líneas): 0 reglas del vivo perdidas (comparadas una a una)" % len(rd.splitlines()))
    c.say("\nRESUMEN DRY-RUN: nuevos %d | cambiados %d | eliminaciones 0 | avisos %d" % (c.n_new, c.n_chg, len(c.avisos)))


def check_urls(c, base, paths, redir_src=None, intentos=5, espera=12):
    """Devuelve las rutas que no dan 200 (tras reintentos; Cloudflare da 525/timeouts tras una purga)."""
    pend = list(paths); redir_src = redir_src or set()
    for i in range(intentos):
        def g(p):
            st, _, _ = http(base + p + ("&" if "?" in p else "?") + "v=%d" % random.randint(1, 10**9) if False else base + p)
            return p, st
        mal = []
        with cf.ThreadPoolExecutor(8) as ex:
            for p, st in ex.map(g, pend):
                ok_ = st == 200 or (st in (301, 302, 308) and (p.rstrip("/").lower() or "/") in redir_src)
                if not ok_: mal.append(p)
        pend = mal
        if not pend: break
        if i < intentos - 1: time.sleep(espera)
    return pend


def f_publicar(c):
    c.fase("publicar", "borrador, QA, publicar, purgar, verificar")
    if not c.a.si_daniel or len(c.a.si_daniel.strip()) < 8:
        c.abort("--publicar exige --si-daniel \"<fecha/hora y frase de Daniel en su chat>\". Sin un sí explícito de Daniel NO se publica.")
    if sys.stdin.isatty():
        r = input("Vas a PUBLICAR en producción (rollback %s). Escribe PUBLICAR para continuar: " % c.live)
        if r.strip() != "PUBLICAR": c.abort("Cancelado.")
    c.say("  Autorización registrada: " + c.a.si_daniel)
    if c.comun.live_id() != c.live: c.abort("El vivo cambió mientras trabajabas. NO publico.")
    cam = c.cam; rd_src = set(c.comun.redirect_sources(open(os.path.join(c.dist, "_redirects"), encoding="utf8").read()))
    nuevas = [path_of_html(p) for p in cam["new"] if p.endswith(".html")]
    cambiadas = [path_of_html(p) for p in cam["chg"] if p.endswith(".html")]
    random.seed(); muestra = random.sample(cambiadas, min(80, len(cambiadas)))
    verif = ["/"] + nuevas[:400] + muestra
    open(os.path.join(c.work, "rutas.txt"), "w").write("\n".join(["/"] + nuevas[:30]) + "\n")
    snap = {p: http(PROD + p)[0] for p in ("/tienda", "/tienda/")}
    mf = os.path.join(c.work, "media-forzar.txt")
    titulo = "%s %s Merlín" % (c.a.titulo or "subida", time.strftime("%d-%m-%Y"))
    c.py("mkdraft.py", "--dist", c.dist, "--vivo", c.live, "--titulo", titulo, *(["--media-forzar", mf] if os.path.exists(mf) else []), env={"REDIRECTS_VIVO": c.redirects_vivo})
    D = open(os.path.join(c.work, "draft_id")).read().strip()
    if open(os.path.join(c.work, "draft_vivo_base")).read().strip() != c.live: c.abort("El borrador no es sobre el vivo actual.")
    c.say("  BORRADOR %s" % D)
    for _ in range(60):
        d = c.comun.api("GET", "/deploys/" + D)
        if d["state"] == "ready": break
        if d["state"] in ("error", "rejected"): c.abort("Borrador en estado %s" % d["state"])
        time.sleep(15)
    else: c.abort("El borrador no llegó a 'ready' en 15 min. NO publicado.")
    B = "https://%s--%s.netlify.app" % (D, c.comun.site_name())
    c.ok("borrador ready: " + B)
    mal = check_urls(c, B, verif, rd_src, intentos=3, espera=10)
    if mal: c.abort("QA del BORRADOR falla en %d URLs (p.ej. %s). NO publicado." % (len(mal), mal[:5]))
    c.ok("borrador: portada, %d nuevas y muestra de %d cambiadas dan 200" % (len(nuevas[:400]), len(muestra)))
    c.py("qa.py", B, "--rutas", os.path.join(c.work, "rutas.txt"))
    c.ok("qa.py del borrador TODO OK")
    c.py("publicar.py", "--draft", D, "--vivo", c.live)
    c.py("publicar.py", "--draft", D, "--vivo", c.live, "--go")
    c.ok("PUBLICADO %s (rollback %s)" % (D, c.live))
    # a partir de aquí cualquier fallo => instrucciones de rollback
    rb = "python3 scripts/deploy/rollback.py --a %s --desde %s --go && python3 scripts/deploy/purgar.py" % (c.live, D)
    try:
        purgado = False
        for i in range(3):
            rc, _ = c.py("purgar.py", check=False)
            if rc == 0: purgado = True; break
            time.sleep(10)
        if not purgado: c.say("  !! La purga de Cloudflare falló 3 veces: la web puede servir caché vieja. Purga a mano en Cloudflare > Caching > Purge Everything.")
        time.sleep(20)
        mal = check_urls(c, PROD, verif, rd_src, intentos=6, espera=15)
        sm = http(PROD + "/sitemap.xml")[2]; n = sm.count("<loc>")
        st_t = {p: http(PROD + p)[0] for p in snap}
        errs = []
        if mal: errs.append("%d URLs sin 200 (p.ej. %s)" % (len(mal), mal[:5]))
        if n != c.dist_sitemap_n: errs.append("sitemap en vivo %d URLs != %d del build" % (n, c.dist_sitemap_n))
        if st_t != snap: errs.append("/tienda cambió: antes %s ahora %s" % (snap, st_t))
        rc, _ = c.py("qa.py", PROD, "--rutas", os.path.join(c.work, "rutas.txt"), check=False, quiet=True)
        if rc != 0: errs.append("qa.py en producción con fallos")
        if errs: raise Abort("; ".join(errs))
        c.ok("producción: portada, %d nuevas, muestra de %d, sitemap %d URLs, /tienda igual, qa.py OK" % (len(nuevas[:400]), len(muestra), n))
    except Abort as e:
        c.say("\n!!! VERIFICACIÓN POSTERIOR FALLIDA: %s" % e)
        if c.a.auto_rollback:
            c.say("--auto-rollback: vuelvo al deploy anterior %s" % c.live)
            c.run(rb.split(" && ")[0].split(), check=False); c.run(rb.split(" && ")[1].split(), check=False)
        else:
            c.say("ROLLBACK (si la web va mal, hazlo PRIMERO y luego investiga):\n    " + rb)
        raise
    # estado nuevo
    E = open(os.path.join(HERE, "ESTADO-VIVO.txt"), encoding="utf8").read().splitlines()
    new = {"deploy_id": D, "deploy_anterior": c.live, "commit_codigo": c.git("rev-parse", "HEAD").strip(),
           "redirects_sha1": c.comun.sha1_file(os.path.join(c.dist, "_redirects")),
           "publicado": time.strftime("%Y-%m-%d %H:%M") + " (Merlín con publicar.py; sí de Daniel: " + c.a.si_daniel.replace("\n", " ") + ")"}
    out = [l for l in E if l.startswith("#")] + ["%s=%s" % kv for kv in new.items()]
    open(os.path.join(HERE, "ESTADO-VIVO.txt"), "w", encoding="utf8").write("\n".join(out) + "\n")
    shutil.copyfile(os.path.join(c.dist, "_redirects"), os.path.join(HERE, "redirects-vivo.txt"))
    shutil.copyfile(os.path.join(c.dist, "_redirects"), os.path.join(c.repo, "public", "_redirects"))
    c.say("\nHECHO. Deploy nuevo %s | rollback %s." % (D, c.live))
    c.say("AHORA (obligatorio, para que el siguiente que publique parta de lo vivo): \n"
          "    git add tools/publicar/ESTADO-VIVO.txt tools/publicar/redirects-vivo.txt public/_redirects\n"
          "    git commit -m \"Publicado %s (rollback %s)\" && git push origin HEAD   # SIN --force\n"
          "  y avisa en el tablón con los dos ids; quita tu línea PUBLICANDO si la pusiste." % (D, c.live))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--repo", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--dist", default="dist")
    ap.add_argument("--publicar", action="store_true", help="publica de verdad (por defecto es DRY-RUN)")
    ap.add_argument("--si-daniel", help="texto/fecha del sí explícito de Daniel (obligatorio con --publicar)")
    ap.add_argument("--dry-run", action="store_true", help="(es el modo por defecto)")
    ap.add_argument("--ramas", help="ramas de origin a fusionar antes, separadas por comas")
    ap.add_argument("--sin-build", action="store_true", help="no reconstruye: usa el dist ya existente")
    ap.add_argument("--prerender", default="todo", help="todo (por defecto) | rapido (estáticas + rutas nuevas) | FICHERO con rutas")
    ap.add_argument("--solo", help="solo estas fases (separadas por comas): " + ",".join(FASES))
    ap.add_argument("--titulo", help="título del borrador en Netlify")
    ap.add_argument("--muestra-titulos", type=int, default=300)
    ap.add_argument("--auto-rollback", action="store_true", help="si la verificación posterior falla, vuelve solo al deploy anterior")
    ap.add_argument("--permitir-menos-reglas", action="store_true", help=argparse.SUPPRESS)
    a = ap.parse_args()
    if a.publicar and a.dry_run: sys.exit("--publicar y --dry-run a la vez no tiene sentido.")
    load_env_file()
    c = Ctx(a)
    c.say("publicar.py | modo: %s | repo %s | log %s" % ("PUBLICAR" if a.publicar else "DRY-RUN (no crea ni publica nada)", c.repo, c.logf.name))
    solo = set((a.solo or "").split(",")) - {""}
    orden = [("entorno", f_entorno), ("candado", f_candado), ("vivo", f_vivo), ("git", f_git), ("src", f_src), ("rev3", f_rev3), ("build", f_build), ("dist", f_dist)]
    if a.publicar: orden.append(("publicar", f_publicar))
    try:
        for n, fn in orden:
            if solo and n not in solo and n not in ("vivo", "git"): continue  # vivo y git dan el contexto que necesitan las demás
            fn(c)
    except Abort as e:
        c.say("\n########## ABORTADO ##########\n%s\nNo se ha publicado nada nuevo (salvo lo indicado arriba). Corrige y repite." % e)
        sys.exit(2 if "VERIFICACIÓN POSTERIOR" not in str(e) else 3)
    c.say("\nTERMINADO SIN ERRORES. %s" % ("PUBLICADO." if a.publicar else "DRY-RUN: no se ha creado ni publicado nada. Para publicar (solo con sí explícito de Daniel): repite con --publicar --si-daniel \"...\""))
    for w in c.avisos: c.say("  aviso: " + w)


if __name__ == "__main__":
    main()
