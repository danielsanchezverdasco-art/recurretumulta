#!/usr/bin/env python3
"""List and update DNS records in the Cloudflare zone for recurretumulta.online."""
import sys, json
sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
sys.path.insert(0, "/home/hatch/workspace/skills/cloudflare/bin")
import urllib.request
from dynamic_credentials import add_surrogate_to_request, read_json_response

CRED = "custom.cloudflare"
HOSTS = ["api.cloudflare.com"]
BASE = "https://api.cloudflare.com/client/v4"

def api(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(BASE + path, data=data, method=method)
    if data:
        req.add_header("Content-Type", "application/json")
    add_surrogate_to_request(req, CRED, allowed_hosts=HOSTS)
    out = read_json_response(urllib.request.urlopen(req, timeout=60))
    if not out.get("success"):
        print(f"API ERROR {method} {path}: {json.dumps(out.get('errors'))}", file=sys.stderr)
        sys.exit(1)
    return out["result"]

def main():
    zones = api("GET", "/zones?name=recurretumulta.online")
    if not zones:
        print("zone not found", file=sys.stderr); sys.exit(1)
    zid = zones[0]["id"]
    print(f"zone {zid} status={zones[0]['status']}", flush=True)
    recs = api("GET", f"/zones/{zid}/dns_records?per_page=100")
    for r in recs:
        if r["name"] in ("recurretumulta.online", "www.recurretumulta.online"):
            print(f"  {r['id']} {r['type']:6} {r['name']:28} -> {r['content']}  proxied={r['proxied']}", flush=True)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "list":
        main()
    else:
        print("usage: list")
