#!/usr/bin/env python3
"""Envío campaña B2B Plan Empresas — 100 empresas. Usa hatch_gws_cli +send."""
import csv, subprocess, time

CSV_PATH = "/home/hatch/workspace/recurretumulta-v2/empresas-campana-100.csv"
LOG_PATH = "/home/hatch/workspace/recurretumulta-v2/hidden_files/campana-empresas-log.txt"

ASUNTO = "Las multas de vuestra flota se pueden recurrir (y os sale a cuenta)"

def cuerpo(nombre):
    return f"""Hola,

Soy Daniel, de RecurreTuMulta.online. Hemos creado una herramienta con inteligencia artificial que analiza las multas de tráfico de vuestra flota y prepara el recurso automáticamente, listo para presentar.

OFERTA DE BIENVENIDA (solo primer año): 100 €/mes en lugar de 150 €/mes si contratáis el año completo. Sin permanencia después del primer año.

HACED LOS NÚMEROS CONMIGO:
- 30 multas pequeñas al año (100 € de media) = 3.000 € en sanciones
- Nuestro plan anual con descuento: 1.200 €/año
- Si conseguimos anular solo 12 de esas 30 multas (un 40%), ya habéis recuperado la inversión. Todo lo demás es ahorro directo.

Incluye: análisis ilimitado de multas, recursos listos para presentar y asistencia prioritaria.

Toda la información aquí:
https://recurretumulta.online/empresas

Un saludo,
Daniel
RecurreTuMulta.online"""

def main():
    with open(CSV_PATH) as f:
        empresas = list(csv.DictReader(f))
    print(f"Total: {len(empresas)} empresas", flush=True)
    ok, fail = 0, []
    with open(LOG_PATH, "a") as log:
        for i, e in enumerate(empresas):
            email = e["email"].strip()
            nombre = e["nombre_empresa"].strip()
            body = cuerpo(nombre)
            cmd = ["hatch_gws_cli", "gmail", "+send",
                   "--to", email, "--subject", ASUNTO, "--body", body]
            r = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
            success = r.returncode == 0
            status = "OK" if success else f"FALLO: {r.stderr[:150]}"
            log.write(f"{email} | {nombre} | {status}\n"); log.flush()
            if success: ok += 1
            else: fail.append(email)
            print(f"[{i+1}/{len(empresas)}] {email}: {status}", flush=True)
            if i < len(empresas) - 1:
                time.sleep(5)
    print(f"\nEnviados: {ok}/{len(empresas)}", flush=True)
    if fail: print(f"Fallos ({len(fail)}): {fail}", flush=True)

if __name__ == "__main__":
    main()
