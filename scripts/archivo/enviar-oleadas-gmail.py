#!/usr/bin/env python3
"""Reenvío por Gmail en oleadas de los 109 fallos de la oleada-200 (Resend).
Orden de Daniel 04/10/2026: desde su Gmail, en oleadas, sin Resend."""
import subprocess, time, sys

LOG_FAIL = "/home/hatch/workspace/recurretumulta-v2/hidden_files/campana-oleada-200-log.txt"
LOG_OUT = "/home/hatch/workspace/recurretumulta-v2/hidden_files/campana-gmail-oleadas-log.txt"

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
                if email and "@" in email:
                    out.append(email)
    # deduplicar preservando orden
    vistos, res = set(), []
    for e in out:
        if e not in vistos:
            vistos.add(e); res.append(e)
    return res

def enviar_gmail(to):
    cmd = ["hatch_gws_cli", "gmail", "+send", "--to", to,
           "--subject", ASUNTO, "--body", CUERPO]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
    return r.returncode == 0, (r.stdout + r.stderr)[-300:]

def main():
    dests = fallidos()
    print(f"Reenvío Gmail: {len(dests)} destinatarios", flush=True)
    ok = fail = 0
    with open(LOG_OUT, "a") as log:
        for i, email in enumerate(dests, 1):
            bueno, detalle = enviar_gmail(email)
            estado = "OK" if bueno else "FALLO"
            log.write(f"{email} | {estado} | {detalle[:120]}\n"); log.flush()
            if bueno: ok += 1
            else: fail += 1; print(f"[{i}/{len(dests)}] FALLO {email}", flush=True)
            # Pausa entre envíos para no saturar la cuota de Gmail
            time.sleep(20)
            # Pausa larga cada 25 para respirar la cuota
            if i % 25 == 0:
                print(f"[{i}/{len(dests)}] pausa de cuota...", flush=True)
                time.sleep(300)
    print(f"Terminado: OK={ok} FALLO={fail}", flush=True)

if __name__ == "__main__":
    main()
