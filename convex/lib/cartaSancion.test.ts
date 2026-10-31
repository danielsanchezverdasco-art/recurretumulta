import { describe, it, expect } from "vitest";
import { cartaSancionCompleta, cartaSancionDeterminista, citaPermitidaSancion, limpiarCartaSancion } from "./cartaSancion";

const datos = { municipio: "Valladolid", expediente: "2026/ABC/123", importe: "300 euros", infraccion: "Consumo de alcohol en la vía pública", fecha: "12/09/2026", ley: "Ordenanza Municipal" };
const defectos = [{ titulo: "Descripción genérica", descripcion: "La denuncia no describe los hechos con precisión.", gravedad: "alta" as const }];

describe("carta de sanciones", () => {
  it("el escrito determinista es completo, con datos reales y sin sentencias", () => {
    const c = cartaSancionDeterminista(datos, defectos, { nombreRecurrente: "Ana $& Prueba" }, "31 de octubre de 2026");
    expect(cartaSancionCompleta(c)).toBe(true);
    expect(c).toContain("2026/ABC/123");
    expect(c).toContain("AL AYUNTAMIENTO DE VALLADOLID");
    expect(c).toContain("Ana $& Prueba");
    expect(c).toContain("[COMPLETAR: DNI/NIE]");
    expect(c).not.toMatch(/STC|STS|sentencia|jurisprudencia/i);
  });
  it("sin datos no inventa: usa [COMPLETAR]", () => {
    const c = cartaSancionDeterminista({ municipio: "No detectado", expediente: "No encontrado", importe: "No especificado", infraccion: "No especificada", fecha: "No especificada", ley: "No especificada" }, [], {}, "31 de octubre de 2026");
    expect(c).toContain("[COMPLETAR: número de expediente]");
    expect(c).toContain("[COMPLETAR: órgano que dictó el acto]");
    expect(c).not.toMatch(/No encontrado|No especificad/);
    expect(cartaSancionCompleta(c)).toBe(true);
  });
  it("limpia sentencias inventadas y artículos fuera de lista", () => {
    const t = "Primero. Según la STC 123/2020 no procede.\nSegundo. Vulnera el art. 24 CE.\nTercero. Conforme al art. 999 Ley 39/2015 es nula.";
    const l = limpiarCartaSancion(t);
    expect(l).toContain("art. 24 CE");
    expect(l).not.toMatch(/STC|999/);
    expect(citaPermitidaSancion("art. 124 Ley 39/2015")).toBe(true);
  });
  it("detecta un escrito cortado", () => {
    expect(cartaSancionCompleta("EXPONE\n" + "texto ".repeat(200) + "y por ello el recurrente")).toBe(false);
  });
});
