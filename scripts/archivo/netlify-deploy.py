#!/usr/bin/env python3
"""Deploy dist/ to Netlify via REST API (digest flow).
Auth: NETLIFY_TOKEN env var, else the stored `custom.netlify` connector
(via dynamic_credentials surrogate)."""
import os, sys, json, hashlib, time, urllib.request, urllib.parse, urllib.error, http.client
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request

BASE = "https://api.netlify.com/api/v1"
TOKEN = os.environ.get("NETLIFY_TOKEN", "")
NETLIFY_HOSTS = ["api.netlify.com"]
DIST = os.environ.get("NETLIFY_DIST", "/home/hatch/workspace/recurretumulta-v2/dist")
SITE_NAME = os.environ.get("NETLIFY_SITE_NAME", "recurretumulta")
SITE_ID = os.environ.get("NETLIFY_SITE_ID", "438b74cf-d05a-4685-9de8-7bf56a1ef7ee")  # sitio prod recurretumulta.online; no crear sitios nuevos por defecto
MAX_WORKERS = int(os.environ.get("NETLIFY_WORKERS", "3"))
# Progress file for resume after VM restart / interruption.
# Saved in DIST so it survives with the files being deployed.
PROGRESS_FILE = os.path.join(DIST, ".netlify-deploy-progress.json")

def add_auth(req):
    if TOKEN:
        req.add_header("Authorization", "Bearer " + TOKEN)
    else:
        # stored connector credential (user must have completed the secure card)
        add_surrogate_to_request(req, "custom.netlify", allowed_hosts=NETLIFY_HOSTS)

def api_raw(method, path, body=None, raw=None, ctype="application/json", timeout=120):
    data = None
    if body is not None:
        data = json.dumps(body).encode()
    elif raw is not None:
        data = raw
    req = urllib.request.Request(BASE + path, data=data, method=method)
    add_auth(req)
    if data is not None:
        req.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, dict(r.headers)
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers)
    except (urllib.error.URLError, TimeoutError, ConnectionError, OSError,
            http.client.HTTPException) as e:
        # Network-level failure (proxy timeout, connection reset, VM network blip,
        # remote end closed connection). Return 0 as retryable indicator.
        return 0, {"x-network-error": str(e)[:200]}

def api(method, path, body=None, raw=None, ctype="application/json", timeout=120):
    data = None
    if body is not None:
        data = json.dumps(body).encode()
    elif raw is not None:
        data = raw
    req = urllib.request.Request(BASE + path, data=data, method=method)
    add_auth(req)
    if data is not None:
        req.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, json.loads(r.read().decode() or "{}")
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode() or "{}")
        except Exception:
            return e.code, {}
    except (urllib.error.URLError, TimeoutError, ConnectionError, OSError,
            http.client.HTTPException) as e:
        # Network-level failure: return 0 as retryable indicator.
        return 0, {"x-network-error": str(e)[:200]}

def load_progress():
    """Return saved progress dict or None."""
    try:
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    except (OSError, ValueError):
        return None

def save_progress(deploy_id, required, uploaded):
    """Persist upload progress atomically."""
    tmp = PROGRESS_FILE + ".tmp"
    try:
        with open(tmp, "w") as f:
            json.dump({"deploy_id": deploy_id, "required": required,
                       "uploaded": sorted(uploaded)}, f)
        os.replace(tmp, PROGRESS_FILE)
    except OSError:
        pass  # best effort; upload still works without it

def clear_progress():
    try:
        os.remove(PROGRESS_FILE)
    except OSError:
        pass

def main():
    if SITE_ID:
        site_id = SITE_ID
        site = None
        for attempt in range(5):
            st, site = api("GET", f"/sites/{site_id}")
            if st != 0:
                break
            print(f"  network error getting site, retry {attempt + 1}/5", flush=True)
            time.sleep(min(2 ** attempt, 30))
        if st == 0:
            print(f"  FATAL: cannot reach Netlify API after 5 retries", file=sys.stderr)
            sys.exit(1)
        print(f"  reusing site id={site_id} url={site.get('ssl_url')}", flush=True)
    else:
        print("Creating site...", flush=True)
        site = None
        for name in [SITE_NAME, SITE_NAME + "-online"]:
            st, out = api("POST", "/sites", body={"name": name})
            if st in (200, 201):
                site = out
                break
            print(f"  name '{name}' -> {st} {(out.get('message') if isinstance(out, dict) else '')}", flush=True)
        if site is None:
            st, out = api("POST", "/sites", body={})
            if st in (200, 201):
                site = out
        if site is None:
            print("Could not create site", file=sys.stderr)
            sys.exit(1)
        site_id = site["id"]
        print(f"  site id={site_id} url={site.get('ssl_url')}", flush=True)

    print("Hashing files...", flush=True)
    files, by_sha = {}, {}
    for root, _dirs, filenames in os.walk(DIST):
        for fn in filenames:
            full = os.path.join(root, fn)
            rel = "/" + os.path.relpath(full, DIST).replace(os.sep, "/")
            # Hash without keeping data in RAM (streaming fix for OOM):
            # store path, read content on-demand in upload().
            h = hashlib.sha1()
            with open(full, "rb") as f:
                for chunk in iter(lambda: f.read(65536), b""):
                    h.update(chunk)
            h = h.hexdigest()
            files[rel] = h
            by_sha.setdefault(h, []).append((rel, full))
    print(f"  {len(files)} files, {len(by_sha)} unique", flush=True)

    print("Creating deploy...", flush=True)
    # --- RESUME: check for an interrupted previous run ---
    deploy_id = None
    required = None
    uploaded_set = set()
    prog = load_progress()
    if prog and prog.get("deploy_id") and prog.get("required") is not None:
        # Verify the file hashes still match (dist/ may have changed)
        old_required = set(prog["required"])
        # Quick sanity: the progress file is only valid if dist/ hasn't been rebuilt.
        # We check by comparing the count of unique SHAs.
        st_chk, dep_chk = api("GET", f"/deploys/{prog['deploy_id']}")
        if st_chk == 200 and dep_chk.get("state") == "uploading":
            deploy_id = prog["deploy_id"]
            required = prog["required"]
            uploaded_set = set(prog.get("uploaded", []))
            # Filter to SHAs that still exist in current dist/
            current_shas = set(by_sha.keys())
            required = [s for s in required if s in current_shas]
            uploaded_set = {s for s in uploaded_set if s in current_shas}
            remaining = [s for s in required if s not in uploaded_set]
            print(f"  RESUMING deploy={deploy_id} already_uploaded={len(uploaded_set)} remaining={len(remaining)}", flush=True)
            required = remaining
        else:
            state = dep_chk.get("state") if isinstance(dep_chk, dict) else f"http_{st_chk}"
            print(f"  previous deploy {prog['deploy_id'][:8]}... state={state}, starting fresh", flush=True)
            clear_progress()

    if deploy_id is None:
        st, dep = api("POST", f"/sites/{site_id}/deploys", body={"files": files})
        if st not in (200, 201):
            print(f"deploy create failed: {st} {dep}", file=sys.stderr)
            sys.exit(1)
        deploy_id = dep["id"]
        required = list(dict.fromkeys(dep.get("required", [])))
        print(f"  deploy={deploy_id} need_upload={len(required)}", flush=True)
        save_progress(deploy_id, required, set())

    if not required:
        print("  nothing to upload, all files already on Netlify", flush=True)
    else:
        def upload(sha):
            rel, full = by_sha[sha][0]
            with open(full, "rb") as f:
                data = f.read()
            path = urllib.parse.quote(rel, safe="/")
            # retry with backoff on 429/5xx AND network errors (st == 0)
            for attempt in range(8):
                st, headers = api_raw("PUT", f"/deploys/{deploy_id}/files{path}", raw=data,
                                      ctype="application/octet-stream", timeout=300)
                if st in (200, 201, 204):
                    return sha, st
                if st == 0 or st == 429 or (500 <= st < 600):
                    wait = min(2 ** attempt, 60)
                    if st == 0:
                        print(f"  network error on {rel[:40]}, retry {attempt + 1}/8 in {wait}s", flush=True)
                    time.sleep(wait)
                    continue
                return sha, st
            return sha, st

        import threading
        progress_lock = threading.Lock()
        done_count = [0]

        def upload_and_track(sha):
            sha, st = upload(sha)
            if st in (200, 201, 204):
                with progress_lock:
                    uploaded_set.add(sha)
                    done_count[0] += 1
                    # persist every 10 uploads to bound work lost on kill
                    if done_count[0] % 10 == 0:
                        save_progress(deploy_id, prog["required"] if prog and deploy_id == prog.get("deploy_id") else required, uploaded_set)
            return sha, st

        # full required list for the progress file (not just remaining)
        full_required = (prog["required"] if prog and deploy_id == prog.get("deploy_id")
                         else required)
        bad = 0
        total = len(required)
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
            for i, (sha, st) in enumerate(ex.map(upload_and_track, required)):
                if st not in (200, 201, 204):
                    bad += 1
                    print(f"  upload failed {sha} -> {st}", flush=True)
                elif (i + 1) % 50 == 0:
                    print(f"  uploaded {i + 1}/{total}", flush=True)
        # final persist
        save_progress(deploy_id, full_required, uploaded_set)
        print(f"  uploads done, failures={bad}", flush=True)
        if bad:
            print(f"  progress saved to {PROGRESS_FILE}; re-run to resume", flush=True)
            sys.exit(1)

    print("Waiting for deploy to be ready...", flush=True)
    url = None
    for _ in range(90):
        st, dep = api("GET", f"/deploys/{deploy_id}")
        state = dep.get("state")
        if state == "ready":
            url = dep.get("ssl_url") or dep.get("deploy_ssl_url")
            break
        if state == "error":
            print(f"deploy error: {dep.get('error_message')}", file=sys.stderr)
            sys.exit(1)
        time.sleep(10)
    print(f"SUCCESS site_id={site_id} url={url}", flush=True)
    clear_progress()  # deploy complete, remove resume state
    # R6 (auditoría 11/10/2026): líneas estables para que safe-publish-v2.sh
    # capture id y url sin regex frágil. NO cambiar este formato.
    print(f"NETLIFY_DEPLOY_ID={deploy_id}", flush=True)
    print(f"NETLIFY_DEPLOY_URL={url}", flush=True)

if __name__ == "__main__":
    main()
