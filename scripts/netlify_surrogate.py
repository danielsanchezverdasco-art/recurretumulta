"""Auth shim para los scripts de Netlify del repo.

Usa la credencial YA CONECTADA `custom.netlify` mediante surrogates dinámicos,
sin necesidad de NETLIFY_AUTH_TOKEN crudo en el entorno. Las llamadas quedan
restringidas a api.netlify.com según el connector doc.
"""
import sys
import urllib.request

sys.path.insert(0, "/opt/muse/skills/custom-connector-setup/bin")
from dynamic_credentials import add_surrogate_to_request  # noqa: E402


def authed_request(url, data=None, method=None, content_type="application/json"):
    """urllib.request.Request a api.netlify.com con el surrogate de custom.netlify."""
    req = urllib.request.Request(url, data=data, method=method)
    if data is not None and content_type:
        req.add_header("Content-Type", content_type)
    add_surrogate_to_request(req, "custom.netlify", allowed_hosts=["api.netlify.com"])
    return req
