#!/usr/bin/env python3
"""Correct Cloudflare Pages direct-upload deploy.
Flow: upload-token (JWT) -> check-missing -> upload assets -> upsert-hashes -> create deployment.
"""
import sys, os, json, hashlib, base64, mimetypes
sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
sys.path.insert(0, "/home/hatch/workspace/skills/cloudflare/bin")
import urllib.request
from dynamic_credentials import add_surrogate_to_request, read_json_response

CRED = "custom.cloudflare"
HOSTS = ["api.cloudflare.com"]
BASE = "https://api.cloudflare.com/client/v4"
ACCOUNT_ID = "b2bcf6bf7615a60481192d6e8a622a62"
import os as _os
PROJECT = _os.environ.get("PAGES_PROJECT", "recurretumulta-test")
DIST = _os.environ.get("PAGES_DIST", "/home/hatch/workspace/recurretumulta-v2/dist")
SPECIAL = {"_headers", "_redirects", "_routes.json"}

def api_req(method, path, body=None, bearer=None, content_type="application/json", timeout=120):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(BASE + path, data=data, method=method)
    if data:
        req.add_header("Content-Type", content_type)
    if bearer:
        req.add_header("Authorization", "Bearer " + bearer)
    else:
        add_surrogate_to_request(req, CRED, allowed_hosts=HOSTS)
    return read_json_response(urllib.request.urlopen(req, timeout=timeout))

def main():
    # 1. upload token
    print("Getting upload token...", flush=True)
    out = api_req("GET", f"/accounts/{ACCOUNT_ID}/pages/projects/{PROJECT}/upload-token")
    jwt = out["result"]["jwt"]
    print("  ok", flush=True)

    # 2. walk + hash
    manifest, contents, specials = {}, {}, {}
    for root, dirs, files in os.walk(DIST):
        for fn in files:
            full = os.path.join(root, fn)
            rel = os.path.relpath(full, DIST).replace(os.sep, "/")
            with open(full, "rb") as f:
                data = f.read()
            if rel in SPECIAL or "/" + rel in SPECIAL:
                specials["/" + rel] = data
                continue
            h = hashlib.sha256(data).hexdigest()
            manifest["/" + rel] = h
            if h not in contents:
                mime, _ = mimetypes.guess_type(rel)
                contents[h] = (data, mime or "application/octet-stream")
    print(f"  {len(manifest)} files, {len(contents)} unique, {len(specials)} special", flush=True)

    # 3. check missing
    print("Checking missing assets...", flush=True)
    out = api_req("POST", "/pages/assets/check-missing", {"hashes": list(contents.keys())}, bearer=jwt)
    missing = out["result"] if isinstance(out.get("result"), list) else []
    print(f"  {len(missing)} missing", flush=True)

    # 4. upload missing in batches
    BATCH_BYTES = 30 * 1024 * 1024
    batch, batch_size = [], 0
    def flush_batch():
        nonlocal batch, batch_size
        if not batch:
            return
        payload = [{"key": h, "value": base64.b64encode(contents[h][0]).decode(),
                    "metadata": {"contentType": contents[h][1]}, "base64": True} for h in batch]
        out = api_req("POST", "/pages/assets/upload", payload, bearer=jwt, timeout=300)
        if not out.get("success"):
            print("UPLOAD FAILED:", json.dumps(out)[:1000]); sys.exit(1)
        batch, batch_size = [], 0
    for h in missing:
        size = len(contents[h][0])
        if batch and (batch_size + size > BATCH_BYTES or len(batch) >= 1000):
            flush_batch()
        batch.append(h); batch_size += size
    flush_batch()
    print("  upload done", flush=True)

    # 5. upsert hashes
    print("Upserting hashes...", flush=True)
    api_req("POST", "/pages/assets/upsert-hashes", {"hashes": list(contents.keys())}, bearer=jwt)
    print("  ok", flush=True)

    # 6. create deployment (multipart: manifest + special files)
    import uuid
    print("Creating deployment...", flush=True)
    boundary = uuid.uuid4().hex
    parts = [f'--{boundary}\r\n'.encode(),
             b'Content-Disposition: form-data; name="manifest"\r\n\r\n',
             json.dumps(manifest).encode() + b'\r\n']
    for rel, data in specials.items():
        parts.append(f'--{boundary}\r\n'.encode())
        parts.append(f'Content-Disposition: form-data; name="{rel}"; filename="{rel}"\r\n'.encode())
        parts.append(b'Content-Type: text/plain\r\n\r\n')
        parts.append(data + b'\r\n')
    parts.append(f'--{boundary}--\r\n'.encode())
    body = b''.join(parts)
    req = urllib.request.Request(
        f"{BASE}/accounts/{ACCOUNT_ID}/pages/projects/{PROJECT}/deployments",
        data=body, method='POST')
    req.add_header('Content-Type', f'multipart/form-data; boundary={boundary}')
    add_surrogate_to_request(req, CRED, allowed_hosts=HOSTS)
    out = read_json_response(urllib.request.urlopen(req, timeout=300))
    if out.get("success"):
        r = out["result"]
        print(f"\nSUCCESS! {r.get('short_id')} {r.get('url')}", flush=True)
        return 0
    print("FAILED:", json.dumps(out)[:2000])
    return 1

if __name__ == "__main__":
    sys.exit(main())
