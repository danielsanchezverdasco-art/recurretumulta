"""Plan local de una subida. No llama a la red.

La vía directa usa el endpoint público createSiteDeploy
(POST /api/v1/sites/{site_id}/deploys, OpenAPI de Netlify, deployFiles.draft).
La guía oficial dice que "draft": true no cambia el deploy publicado al terminar;
con "draft": false el deploy pasa a ser el publicado cuando su estado es ready.
No hay otro endpoint: no se usa restoreSiteDeploy, que es el paso del borrador.
"""
import concurrent.futures as cf

from comun import redirect_sources, sha1_file


class PlanError(Exception):
    pass


def via_publicacion(con_borrador):
    """Preferencia de Daniel (7/11 10:11): directa. El borrador solo si se pide."""
    return "borrador" if con_borrador else "directo"


def cuerpo_deploy(hs, directo):
    """Cuerpo JSON de createSiteDeploy. directo nunca puede salir con draft true."""
    if not isinstance(hs, dict) or not hs:
        raise PlanError("ABORT: plan de ficheros vacío")
    if directo:
        body = {"files": hs, "draft": False}
        if body.get("draft") is not False:
            raise PlanError("ABORT: la vía directa no puede marcar draft")
        return body
    body = {"files": hs, "draft": True}
    if body.get("draft") is not True:
        raise PlanError("ABORT: la vía de borrador ha perdido draft true")
    return body


def armar_plan(files_in, live, redirects_vivo_text, media_forzar, quitar):
    """Misma conservación que mkdraft: 0 bajas, 0 reglas perdidas, fotos de vivo.

    files_in: {ruta: path local}. live: {ruta: sha1}.
    redirects_vivo_text es None si no hay copia verificada del _redirects en vivo.
    Devuelve un dict. Lanza PlanError si la subida borraría algo. No crea nada remoto.
    """
    files = dict(files_in)
    live_l = {k.lower(): v for k, v in live.items()}
    redirects_note = None
    excl_n = 0
    forced = set()
    if "/_redirects" in files:
        if redirects_vivo_text is None:
            raise PlanError("ABORT: no tengo copia verificada del _redirects en vivo (public/_redirects del repo != vivo). Avisa a Cosa/Daniel.")
        quit_ = {s.rstrip("/").lower() or "/" for s in quitar}
        perdidas = sorted(redirect_sources(redirects_vivo_text) - redirect_sources(open(files["/_redirects"], encoding="utf-8").read()) - quit_)
        if perdidas:
            raise PlanError("ABORT: el _redirects nuevo pierde %d reglas en vivo: %s" % (len(perdidas), perdidas[:10]))
        identical = sha1_file(files["/_redirects"]) == live.get("/_redirects")
        redirects_note = "idéntico" if identical else "con cambios"
        for line in open(files["/_redirects"], encoding="utf-8"):
            p = line.split()
            if len(p) >= 3 and not line.startswith("#") and p[2].endswith("!"):
                forced.add(p[0].rstrip("/").lower())
        excl = [k for k in files if k.lower() not in live_l and k.endswith("/index.html") and k[:-11].rstrip("/").lower() in forced]
        for k in excl:
            del files[k]
        excl_n = len(excl)

    items = list(files.items())
    with cf.ThreadPoolExecutor(8) as ex:
        digested = list(ex.map(lambda it: sha1_file(it[1]), items))
    hs = {it[0]: digested[i] for i, it in enumerate(items)}
    forz = {p.lower() for p in media_forzar}
    prot = 0
    for k in list(hs):
        kl = k.lower()
        if kl.startswith("/media/") and kl in live_l and hs[k] != live_l[kl] and kl not in forz:
            hs[k] = live_l[kl]
            prot += 1
    tap = 0
    for k in list(hs):
        kl = k.lower()
        if kl.endswith("/index.html") and kl in live_l and hs[k] != live_l[kl] and kl[:-11].rstrip("/") in forced:
            hs[k] = live_l[kl]
            tap += 1
    case = [k for k in hs if k.lower() in live_l and k not in live]
    have = {k.lower() for k in hs}
    added = 0
    for p, s in live.items():
        if p.lower() not in have:
            hs[p] = s
            added += 1
    have = {k.lower() for k in hs}
    gone = [p for p in live if p.lower() not in have]
    new = [k for k in hs if k.lower() not in live_l]
    chg = [k for k in hs if k.lower() in live_l and live_l[k.lower()] != hs[k]]
    if gone:
        raise PlanError("ABORT: %d ficheros en vivo desaparecerían: %s. Cópialos a dist; NUNCA borres a la fuerza." % (len(gone), gone[:10]))
    if len(hs) < len(live):
        raise PlanError("ABORT: total < vivo")
    return {
        "hs": hs, "gone": gone, "new": new, "chg": chg, "added": added, "prot": prot,
        "tap": tap, "excl": excl_n, "case": case, "redirects_note": redirects_note,
        "locales": len(files), "live_n": len(live),
    }
