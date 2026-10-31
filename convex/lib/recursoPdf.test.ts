import { describe, expect, it } from "vitest";
import { jsPDF } from "jspdf";
import { construirPdfRecurso, sanearParaPdf } from "./recursoPdf";

const CARTA = `ESCRITO DE ALEGACIONES (art. 95 LSV)\n\nEn Madrid, a 31 de octubre de 2026\n\nAL ALCALDÍA\n\nEXPONE\n\n` +
  Array.from({ length: 80 }, (_, i) => `${i + 1}. Que “el vehículo” circulaba a 66 km/h → límite ≥ 50 km/h – importe 100 € «según» el anexo IV; ✓ ñ á ü Ω 🚗 ${"texto largo ".repeat(12)}`).join("\n") + "\n\nSUPLICA\nFirma";

describe("PDF del recurso", () => {
  it("limpia glifos que rompían el PDF", () => {
    const s = sanearParaPdf("“a” «b» ≥ → ✓ Ω 🚗\u00A0€ ñ – —");
    expect(s.replace(/ +/g, " ")).toBe('"a" "b" >= -> € ñ – —');
  });
  it("genera un PDF largo en menos de 3 s, sin red, con varias páginas", () => {
    const t0 = Date.now();
    const doc = construirPdfRecurso(jsPDF, CARTA, { expediente: "X-1", importe: "100,00 €", infraccion: "Exceso de velocidad ".repeat(10), fecha: "05/09/2026", plazoRecurso: "No consta" });
    const buf = doc.output("arraybuffer");
    expect(Date.now() - t0).toBeLessThan(3000);
    expect(doc.getNumberOfPages()).toBeGreaterThan(2);
    expect(new TextDecoder().decode(new Uint8Array(buf).slice(0, 5))).toBe("%PDF-");
  });
  it("no falla con carta vacía, datos vacíos ni logo corrupto", () => {
    expect(() => construirPdfRecurso(jsPDF, "", {}, { logoBase64: "no-es-un-png" }).output("arraybuffer")).not.toThrow();
  });
});
