#!/usr/bin/env python3
"""Reenvío por Gmail en oleada: los fallos de la oleada-200.
Orden de Daniel 04/10/2026: todo de una vez desde su Gmail, sin Resend."""
import subprocess, sys, time

LOG_FAIL = "/home/hatch/workspace/recurretumulta-v2/hidden_files/campana-oleada-200-log.txt"
LOG_OUT = "/home/hatch/workspace/recurretumulta-v2/hidden_files/campana-gmail-oleadas-log.txt"

# Emails ya enviados por el script lento anterior (no repetir)
YA_ENVIADOS = set()
try:
    with open(LOG_OUT) as f:
        for line in f:
            if "| OK" in line:
                YA_ENVIADOS.add(line.split("|")[0].strip())
except FileNotFoundError:
    pass

ASUNTO = "Herramienta gratuita con IA: ayuda a decidir si recurrir una multa"
CUERPO = """Hola,

Soy Daniel, de RecurreTuMulta.online. Hemos creado una herramienta gratuita con inteligencia artificial que analiza las multas de tráfico y ayuda al conductor a decidir si le compensa recurrir o pagar con descuento.

La historia: un mismo radar me puso 5 multas sin enterarme hasta que llegaron todas a la vez. Entrené una IA con la ley de tráfico, conseguí recurrirlas y de ahí nació la herramienta.

Cómo ayuda al conductor:
- Análisis gratis de la multa con IA (foto o datos del boletín)
- Detecta defectos de forma que pueden anularla
- Recomendación honesta: si no se puede recurrir, lo decimos y recomendamos pagar con el 50% de descuento
- Recurso listo por 4,99€ si decide recurrir

Además tenemos la mayor base de datos de fichas técnicas en español: 474 modelos con fotos, vídeos, comparadores y guías.

Nos encantaría que la conocierais:
https://recurretumulta.online

Un saludo,
Daniel
RecurreTuMulta.online"""

def fallidos():
    out = []
    with open(LOG_FAIL) as f:
        for line in f:
            if "FALLO" in line:
                email = line.split("|")[0].strip()
                if email and "@" in email and email not in YA_ENVIADOS:
                    out.append(email)
    vistos, res = set(), []
    for e in out:
        if e not in vistos:
            vistos.add(e); res.append(e)
    return res

def main():
    dests = fallidos()
    print(f"Oleada Gmail: {len(dests)} pendientes ({len(YA_ENVIADOS)} ya enviados)", flush=True)
    ok = fail = 0
    with open(LOG_OUT, "a") as log:
        for i, email in enumerate(dests, 1):
            try:
                r = subprocess.run(
                    ["hatch_gws_cli", "gmail", "+send", "--to", email,
                     "--subject", ASUNTO, "--body", CUERPO],
                    capture_output=True, text=True, timeout=120)
                bueno = r.returncode == 0
            except subprocess.TimeoutExpired:
                bueno = False
                print(f"[{i}/{len(dests)}] TIMEOUT {email}", flush=True)
            estado = "OK" if bueno else "FALLO"
            log.write(f"{email} | {estado}\n"); log.flush()
            if bueno: ok += 1
            else: fail += 1
            if i % 10 == 0:
                print(f"[{i}/{len(dests)}] OK={ok} FALLO={fail}", flush=True)
            time.sleep(5)  # respiro mínimo entre envíos
    print(f"TERMINADO: OK={ok} FALLO={fail}", flush=True)

if __name__ == "__main__":
    main()
