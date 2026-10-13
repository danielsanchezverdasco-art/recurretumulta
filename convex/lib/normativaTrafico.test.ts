import { describe, expect, it } from "vitest";
import { evaluarVelocidad, tramoVelocidad, velocidadCorregida } from "./normativaTrafico";
describe("normativa de tráfico", () => {
  it("margen ICT/155/2020", () => {
    expect(velocidadCorregida(72, "fijo").corregida).toBe(67);
    expect(velocidadCorregida(72, "movil").corregida).toBe(65);
    expect(velocidadCorregida(140, "fijo").corregida).toBe(133);
    expect(velocidadCorregida(140, "movil").corregida).toBe(130);
  });
  it("anexo IV LSV", () => {
    expect(tramoVelocidad(50, 67)).toEqual({ multa: 100, puntos: 0 });
    expect(tramoVelocidad(50, 75)).toEqual({ multa: 300, puntos: 2 });
    expect(tramoVelocidad(120, 160)).toEqual({ multa: 300, puntos: 2 });
    expect(tramoVelocidad(50, 50)).toBe("sin_infraccion");
  });
  it("detecta importe incorrecto y velocidad no sancionable", () => {
    expect(evaluarVelocidad({ velocidadDetectada: "72 km/h", limiteVia: "50", importe: "300", tipoRadar: "fijo" }).motivosFuertes.length).toBe(1);
    expect(evaluarVelocidad({ velocidadDetectada: "54", limiteVia: "50", tipoRadar: "fijo" }).motivosFuertes[0]).toMatch(/no supera/);
    expect(evaluarVelocidad({ velocidadDetectada: "No aplica", limiteVia: "50" }).datosFaltantes).toContain("velocidad medida por el cinemómetro");
  });
});

import { evaluarPrescripcion } from "./normativaTrafico";
import { test } from "vitest";
test("prescripción leve 3 meses", () => {
  expect(evaluarPrescripcion({ fecha: "03/03/2026", fechaNotificacion: "15/07/2026", calificacion: "LEVE" }).motivo).toMatch(/3 meses/);
  expect(evaluarPrescripcion({ fecha: "14/08/2026", fechaNotificacion: "02/09/2026", calificacion: "GRAVE" }).linea).toMatch(/6 meses/);
  expect(evaluarPrescripcion({ fecha: "14/08/2026", fechaNotificacion: "No consta" }).falta).toMatch(/notificación/);
});
