#!/usr/bin/env python3
"""Oleada masiva 200 emails: 100 blogs + 100 periódicos. Vía Resend, sin aprobaciones."""
import csv, subprocess, json, time, sys

RESEND = "/home/hatch/workspace/skills/resend/bin/resend.py"
LOG_PATH = "/home/hatch/workspace/recurretumulta-v2/hidden_files/campana-oleada-200-log.txt"

FROM = "Daniel <hola@recurretumulta.online>"
ASUNTO = "Herramienta gratuita con IA: ayuda a decidir si recurrir una multa"

def cuerpo():
    return """Hola,

Soy Daniel, fundador de RecurreTuMulta.online. Hemos creado una herramienta gratuita con inteligencia artificial que analiza las multas de tráfico y ayuda al conductor a decidir si le compensa recurrir o pagar con descuento.

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

def cargar(csv_path, col_email, col_nombre):
    with open(csv_path) as f:
        return [(r[col_nombre].strip(), r[col_email].strip()) for r in csv.DictReader(f)]

def main():
    blogs = cargar("/home/hatch/workspace/recurretumulta-v2/blogs-campana-100.csv", "email", "nombre_blog")
    prensa = cargar("/home/hatch/workspace/recurretumulta-v2/prensa-campana-100.csv", "email", "nombre_medio")
    # Excluir hilos previos: Todos Eléctricos, CocheSpias, OndaMotor, Una Vida Camper
    excluir = {"todos electricos", "todoseléctricos", "cochespias", "coche spias", "ondamotor", "onda motor", "una vida camper"}
    todos = [(n, e) for n, e in blogs + prensa if not any(x in n.lower() for x in excluir)]
    print(f"Total a enviar: {len(todos)}", flush=True)
    texto = cuerpo()
    ok, fail = 0, []
    with open(LOG_PATH, "a") as log:
        for i, (nombre, email) in enumerate(todos):
            cmd = [sys.executable, RESEND, "send", "--from", FROM,
                   "--to", email, "--subject", ASUNTO, "--text", texto]
            r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
            try:
                out = json.loads(r.stdout)
                success = out.get("ok") and out.get("status") in (200, 201, 202)
            except Exception:
                success = False
            status = "OK" if success else "FALLO"
            log.write(f"{email} | {nombre} | {status}\n"); log.flush()
            if success: ok += 1
            else: fail.append(email)
            print(f"[{i+1}/{len(todos)}] {email}: {status}", flush=True)
            time.sleep(1)
    print(f"\nEnviados: {ok}/{len(todos)}", flush=True)
    if fail: print(f"Fallos: {len(fail)}", flush=True)

if __name__ == "__main__":
    main()
