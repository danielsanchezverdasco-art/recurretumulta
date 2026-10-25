#!/usr/bin/env python3
"""Seguimiento post-compra sin login (días 5, 18 y 60 tras el PDF).

Fuente de datos: emails de Resend taggeados tipo=recurso-pdf-comprado
(asunto "Tu recurso PDF está listo"). No necesita Convex ni Stripe.

Uso: python3 seguimiento-postcompra.py [--dry-run]
"""
from __future__ import annotations

import json
import os
import sys
import urllib.request
from datetime import datetime, timezone

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
sys.path.insert(0, "/home/hatch/workspace/skills/resend/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

CRED = "custom.resend"
HOSTS = ["api.resend.com"]
BASE = "https://api.resend.com"
FROM = "RecurreTuMulta.online <recurso@recurretumulta.online>"
APP_URL = "https://recurretumulta.online"
STATE_FILE = "/home/hatch/workspace/goals/recurretumulta-online-daily-blog-publishing/hidden_files/seguimiento-postcompra.json"

DIA5, DIA18, DIA60 = 5, 18, 60


def _req(method: str, path: str, payload: dict | None = None) -> dict:
    req = urllib.request.Request(BASE + path, method=method)
    req.add_header("User-Agent", "Mozilla/5.0")
    if payload is not None:
        req.data = json.dumps(payload).encode()
        req.add_header("Content-Type", "application/json")
    add_surrogate_to_request(req, CRED, allowed_hosts=HOSTS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return read_json_response(resp)


def shell(titulo: str, emoji: str, cuerpo: str) -> str:
    return f"""<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;"><tr><td align="center">
<table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
<tr><td style="background:linear-gradient(135deg,#dc2626,#b91c1c);padding:28px 32px;text-align:center;">
<div style="font-size:32px;margin-bottom:8px;">{emoji}</div>
<div style="color:#ffffff;font-size:20px;font-weight:800;">{titulo}</div></td></tr>
<tr><td style="padding:28px 32px;color:#374151;font-size:15px;line-height:1.7;">{cuerpo}
<p style="margin-top:24px;color:#9ca3af;font-size:13px;">RecurreTuMulta.online — Análisis de multas con IA</p></td></tr>
</table></td></tr></table></body></html>""".strip()


PLANTILLAS = {
    "dia5": {
        "subject": "¿Ya presentaste tu recurso? No lo dejes pasar | RecurreTuMulta.online",
        "tag": "seguimiento-dia5",
        "titulo": "¿Ya presentaste tu recurso?",
        "emoji": "📨",
        "cuerpo": """<p>Hola,</p>
<p>Hace unos días generaste tu recurso con nosotros. Te recordamos que <strong>el PDF está listo para presentar</strong>.</p>
<p><strong>Dónde presentarlo:</strong></p>
<ul><li>Sede Electrónica de la DGT (con certificado digital o Cl@ve)</li>
<li>Cualquier registro oficial (ayuntamiento, Jefatura de Tráfico)</li>
<li>Por correo certificado desde una oficina de Correos</li></ul>
<p>Preséntalo dentro del <strong>plazo de 20 días naturales</strong> desde la notificación y <strong>guarda el justificante</strong>.</p>
<p>¿Dudas? Responde a este email y te ayudamos.</p>""",
        "text": "Hola,\n\n¿Ya presentaste tu recurso? El PDF que te enviamos está listo para presentar.\n\nPuedes presentarlo en la Sede Electrónica de la DGT, en cualquier registro oficial o por correo certificado.\n\nHazlo dentro del plazo de 20 días naturales desde la notificación y guarda el justificante.\n\n¿Dudas? Respóndenos a este email.\n\nRecurreTuMulta.online",
    },
    "dia18": {
        "subject": "⏰ Revisa el plazo de tu recurso | RecurreTuMulta.online",
        "tag": "seguimiento-dia18",
        "titulo": "Revisa tu plazo",
        "emoji": "⏰",
        "cuerpo": """<p>Hola,</p>
<p>El plazo para presentar alegaciones contra una multa es de <strong>20 días naturales desde la notificación</strong>.</p>
<p>Si aún no has presentado tu recurso, <strong>hazlo hoy</strong>: vencido el plazo, se pierde el derecho a recurrir.</p>
<p>Si ya lo presentaste, ignora este mensaje: todo en orden. 👍</p>""",
        "text": "Hola,\n\nRevisa tu plazo: son 20 días naturales desde la notificación. Si aún no has presentado tu recurso, hazlo hoy.\n\nSi ya lo presentaste, ignora este mensaje.\n\nRecurreTuMulta.online",
    },
    "dia60": {
        "subject": "¿Qué pasó con tu recurso? | RecurreTuMulta.online",
        "tag": "seguimiento-dia60",
        "titulo": "¿Qué pasó con tu recurso?",
        "emoji": "🔍",
        "cuerpo": """<p>Hola,</p>
<p>Han pasado unas semanas desde que presentaste tu recurso. ¿Ya tienes noticias?</p>
<ul>
<li><strong>Te lo han estimado:</strong> ¡enhorabuena! Nos encantaría que nos lo contaras respondiendo a este email.</li>
<li><strong>Te lo han desestimado:</strong> aún puedes presentar un <strong>recurso de reposición en 1 mes</strong>.</li>
<li><strong>Sin respuesta:</strong> es normal, la administración puede tardar meses. El silencio administrativo equivale a desestimación.</li></ul>
<p><a href="https://recurretumulta.online/?utm_source=email&utm_medium=seguimiento&utm_campaign=dia60" style="display:inline-block;background:#dc2626;color:#fff;padding:12px 24px;border-radius:12px;text-decoration:none;font-weight:700;">Analizar otra multa</a></p>""",
        "text": "Hola,\n\n¿Ya te han respondido a tu recurso?\n\n- Estimado: ¡enhorabuena! Cuéntanoslo respondiendo a este email.\n- Desestimado: aún puedes presentar recurso de reposición en 1 mes.\n- Sin respuesta: es normal, pueden tardar meses.\n\nRecurreTuMulta.online",
    },
}


def main() -> int:
    dry = "--dry-run" in sys.argv
    state: dict = {}
    if os.path.exists(STATE_FILE):
        state = json.load(open(STATE_FILE))

    # Listar emails enviados (paginado)
    pdfs: list[dict] = []
    cursor = None
    while True:
        path = "/emails?limit=100" + (f"&after={cursor}" if cursor else "")
        data = _req("GET", path)
        items = data.get("data", [])
        for e in items:
            if "Tu recurso PDF está listo" in (e.get("subject") or ""):
                pdfs.append(e)
        if not data.get("has_more") or not items:
            break
        cursor = items[-1]["id"]

    print(f"PDFs encontrados: {len(pdfs)}")
    enviados = 0
    hoy = datetime.now(timezone.utc)

    for pdf in pdfs:
        to = (pdf.get("to") or [None])[0]
        if not to:
            continue
        creada = datetime.fromisoformat(pdf["created_at"])
        dias = (hoy - creada).days
        key = pdf["id"]
        done = state.get(key, {})

        for etapa, umbral in (("dia5", DIA5), ("dia18", DIA18), ("dia60", DIA60)):
            if dias >= umbral and not done.get(etapa):
                p = PLANTILLAS[etapa]
                if dry:
                    print(f"[dry-run] {to}: enviar {etapa} ({dias} días)")
                else:
                    _req("POST", "/emails", {
                        "from": FROM, "to": to,
                        "subject": p["subject"],
                        "html": shell(p["titulo"], p["emoji"], p["cuerpo"]),
                        "text": p["text"],
                        "tags": [{"name": "tipo", "value": p["tag"]}],
                    })
                    print(f"enviado {etapa} a {to} ({dias} días)")
                    enviados += 1
                done[etapa] = True
        state[key] = done

    if not dry:
        os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
        json.dump(state, open(STATE_FILE, "w"), indent=1)
    print(f"Total enviados: {enviados}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
