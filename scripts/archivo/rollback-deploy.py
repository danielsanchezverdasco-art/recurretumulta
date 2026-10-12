#!/usr/bin/env python3
"""Rollback a Netlify deploy (restore a previous ready deploy).

Contract: docs/ARQUITECTURA-PUBLISH.md §3.6.

Usage:
    python3 scripts/rollback-deploy.py --site-id ID (--to-previous | --deploy-id ID)
        [--dry-run] [--wait-minutes 15]

Auth: NETLIFY_TOKEN env var, else the stored `custom.netlify` connector
(via dynamic_credentials surrogate). Same pattern as scripts/netlify-deploy.py.

Restore endpoint: POST /sites/{site_id}/deploys/{deploy_id}/restore
(verified 08/10/2026).

Exit 0 = rollback served (apex returns HTTP 200). Exit 1 = failure with
explanation (do not blindly retry: notify).
"""
import argparse
import json
import os
import sys
import time
import urllib.request
import urllib.error

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request

BASE = "https://api.netlify.com/api/v1"
TOKEN = os.environ.get("NETLIFY_TOKEN", "")
NETLIFY_HOSTS = ["api.netlify.com"]
PROD_SITE_ID = "438b74cf-d05a-4685-9de8-7bf56a1ef7ee"  # sitio prod recurretumulta.online
APEX = "https://recurretumulta.online/"


def fail(msg):
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def add_auth(req):
    if TOKEN:
        req.add_header("Authorization", "Bearer " + TOKEN)
    else:
        # stored connector credential (user must have completed the secure card)
        add_surrogate_to_request(req, "custom.netlify", allowed_hosts=NETLIFY_HOSTS)


def api(method, path, body=None, timeout=60):
    data = None
    if body is not None:
        data = json.dumps(body).encode()
    req = urllib.request.Request(BASE + path, data=data, method=method)
    add_auth(req)
    if data is not None:
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, json.loads(r.read().decode() or "{}")
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode() or "{}")
        except Exception:
            return e.code, {}
    except Exception as e:
        fail(f"network error calling Netlify API {method} {path}: {e}")


def fmt_deploy(d):
    return (f"id={d.get('id')} state={d.get('state')} "
            f"created={d.get('created_at')} "
            f"url={d.get('ssl_url') or d.get('deploy_ssl_url')}")


def get_published_deploy_id(site_id):
    st, site = api("GET", f"/sites/{site_id}")
    if st != 200:
        fail(f"auth/site lookup failed: GET /sites/{site_id} -> {st} {site} "
             f"(revisa NETLIFY_TOKEN o el surrogate custom.netlify)")
    pub = site.get("published_deploy") or {}
    pub_id = pub.get("id")
    if not pub_id:
        fail("the site has no published_deploy (nada servido en producción)")
    print(f"  published deploy: {fmt_deploy(pub)}")
    return pub_id


def list_deploys(site_id, per_page=30):
    st, deploys = api("GET", f"/sites/{site_id}/deploys?per_page={per_page}")
    if st != 200:
        fail(f"listing deploys failed: GET /sites/{site_id}/deploys -> {st} {deploys}")
    if not isinstance(deploys, list) or not deploys:
        fail("no deploys found for the site")
    return deploys


def pick_previous(site_id):
    """The previous deploy with state=ready, excluding the current published one."""
    published_id = get_published_deploy_id(site_id)
    deploys = list_deploys(site_id)
    print(f"  deploys listed: {len(deploys)} (most recent first)")
    for d in deploys:
        if d.get("id") == published_id:
            continue  # skip the current production deploy
        if d.get("state") == "ready":
            return d
    fail("no previous deploy with state=ready found (no safe rollback target)")


def resolve_target(args):
    if args.deploy_id:
        st, dep = api("GET", f"/deploys/{args.deploy_id}")
        if st != 200:
            fail(f"deploy {args.deploy_id} not found (GET /deploys -> {st} {dep})")
        if dep.get("site_id") != args.site_id:
            fail(f"deploy {args.deploy_id} does not belong to site {args.site_id}")
        if dep.get("state") != "ready":
            fail(f"deploy {args.deploy_id} is not in state=ready "
                 f"(state={dep.get('state')}); refusing to restore")
        print(f"  explicit target: {fmt_deploy(dep)}")
        return dep
    # --to-previous
    print("Paso 1 · Localizando el deploy anterior en estado 'ready'...")
    target = pick_previous(args.site_id)
    print(f"  rollback target: {fmt_deploy(target)}")
    return target


def restore_deploy(site_id, target):
    dep_id = target["id"]
    print(f"Paso 2 · Restaurando deploy {dep_id} "
          f"(POST /sites/{site_id}/deploys/{dep_id}/restore)...")
    st, out = api("POST", f"/sites/{site_id}/deploys/{dep_id}/restore")
    if st not in (200, 201):
        fail(f"restore failed: {st} {out} (no se ha cambiado producción; avisar)")
    rid = out.get("id", dep_id)
    print(f"  restore accepted, deploy id={rid}")
    return rid


def wait_ready(deploy_id, wait_minutes):
    deadline = time.time() + wait_minutes * 60
    print(f"Paso 3 · Esperando state=ready (hasta {wait_minutes} min)...")
    while time.time() < deadline:
        st, dep = api("GET", f"/deploys/{deploy_id}")
        if st != 200:
            print(f"  deploy status check -> {st} {dep} (reintentando)")
            time.sleep(10)
            continue
        state = dep.get("state")
        if state == "ready":
            url = dep.get("ssl_url") or dep.get("deploy_ssl_url")
            print(f"  ready: {fmt_deploy(dep)}")
            return url
        if state == "error":
            fail(f"deploy {deploy_id} entered state=error: "
                 f"{dep.get('error_message')} (avisar)")
        time.sleep(10)
    fail(f"deploy {deploy_id} did not reach ready within {wait_minutes} min (avisar)")


def check_apex():
    print(f"Paso 4 · Verificando apex {APEX} (esperado HTTP 200)...")
    req = urllib.request.Request(APEX, method="GET")
    req.add_header("User-Agent", "rollback-deploy.py")
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            if r.status == 200:
                print("  apex OK: HTTP 200")
                return
            fail(f"apex returned HTTP {r.status} (no es 200; avisar)")
    except urllib.error.HTTPError as e:
        fail(f"apex returned HTTP {e.code} (no es 200; avisar)")
    except Exception as e:
        fail(f"apex check failed: {e} (avisar)")


def main():
    ap = argparse.ArgumentParser(description="Rollback de un deploy de Netlify (restore)")
    ap.add_argument("--site-id", default=os.environ.get("NETLIFY_SITE_ID", PROD_SITE_ID),
                    help=f"site id (default: NETLIFY_SITE_ID o prod {PROD_SITE_ID})")
    grp = ap.add_mutually_exclusive_group(required=True)
    grp.add_argument("--to-previous", action="store_true",
                     help="restaurar el deploy anterior en state=ready")
    grp.add_argument("--deploy-id", metavar="ID",
                     help="restaurar un deploy concreto (debe estar en ready)")
    ap.add_argument("--dry-run", action="store_true",
                    help="mostrar el deploy objetivo y los pasos SIN ejecutar nada")
    ap.add_argument("--wait-minutes", type=int, default=15,
                    help="espera máxima a state=ready (default 15)")
    args = ap.parse_args()

    if not args.site_id:
        fail("--site-id es obligatorio (o NETLIFY_SITE_ID)")

    print(f"rollback-deploy.py · site={args.site_id}")
    if not TOKEN:
        print("  auth: sin NETLIFY_TOKEN, usando surrogate custom.netlify")
    else:
        print("  auth: NETLIFY_TOKEN (env)")

    # Paso 1: resolver objetivo (solo lectura; seguro también en dry-run)
    target = resolve_target(args)

    steps = [
        f"1. Objetivo resuelto: {fmt_deploy(target)}",
        (f"2. POST /sites/{args.site_id}/deploys/{target['id']}/restore "
         f"(republicar este deploy)"),
        f"3. Esperar state=ready (hasta {args.wait_minutes} min)",
        "4. Imprimir ROLLBACK_OK deploy=<id> url=<url>",
        f"5. curl {APEX} esperando HTTP 200",
    ]
    if args.dry_run:
        print("DRY-RUN: no se ejecutará ningún cambio en producción.")
        print("Plan de ejecución:")
        for s in steps:
            print(f"  {s}")
        print("DRY-RUN COMPLETO: nada restaurado.")
        return 0

    deploy_id = restore_deploy(args.site_id, target)
    url = wait_ready(deploy_id, args.wait_minutes)
    print(f"ROLLBACK_OK deploy={deploy_id} url={url}")
    check_apex()
    print("ROLLBACK COMPLETO: producción sirve el deploy restaurado (apex 200).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
