import { describe, expect, it } from "vitest";
import { conciliar, sinDatosBasicos } from "./analisisMulta";
import { cartaCompleta, cartaDeterminista, limpiarCarta } from "./cartaMulta";
import { BOLETIN_RADAR, DENUNCIA_SEVILLA_IMPORTE, FOTO_RADAR, RESOLUCION_AYTO_VALENCIA } from "./fixtures/multasSinteticas";

const HOY = new Date("2026-10-31T12:00:00Z");
// Respuesta de IA "mala" a propósito: cifras inventadas, defectos absurdos, porcentaje.
const IA_MALA = {
  viabilidad: 85, nivel: "alta", expediente: "999888777666", importe: "250€", fecha: "01/01/2026", matricula: "0000 ZZZ",
  velocidadDetectada: "190 km/h", limiteVia: "30 km/h", infraccion: "Exceso de velocidad a 190 km/h", fechaNotificacion: "13/10/2026",
  organo: "Juzgado de Primera Instancia nº 4 de Cádiz", provincia: "Cádiz", calificacion: "muy grave", puntos: "6",
  datosFaltantes: ["falta de número de expediente", "fecha de notificación", "fechaNotificacion", "precepto infringido"],
  defectos: [
    { titulo: "Falta la matrícula del vehículo", descripcion: "No consta la matrícula (art. 87 LSV)", gravedad: "alta" },
    { titulo: "Sin cita alguna", descripcion: "esto es opinión", gravedad: "alta" },
    { titulo: "Contradicción en la velocidad", descripcion: "La velocidad no cuadra (art. 48 RGC)", gravedad: "alta" },
  ],
};

describe("la IA no puede inventar datos (se comprueba contra el texto)", () => {
  const a = conciliar(IA_MALA, { texto: BOLETIN_RADAR, hoy: HOY });
  it("descarta los valores que no están en el documento", () => {
    expect(a.expediente).toBe("280459871234");
    expect(a.importe).toBe("100,00 €");
    expect(a.fecha).toBe("14/08/2026");
    expect(a.matricula).toBe("4821 KLM");
    expect(a.velocidadDetectada).toBe("136 km/h");
    expect(a.limiteVia).toBe("120 km/h");
    expect(a.puntos).toBe("0");
    expect(a.calificacion).toBe("grave");
    expect(a.organo).toMatch(/Jefe Provincial de Tráfico de Madrid/);
    expect(a.provincia).toBe("Madrid");
    expect(a.infraccion).toMatch(/136 km\/h/);
    expect(a.infraccion).not.toMatch(/190/);
    expect(a.fechaNotificacion).toBe("02/09/2026");
  });
  it("no mete defectos sin cita, ni que contradicen datos leídos, ni sobre la cifra", () => {
    expect(a.defectos).toEqual([]);
  });
  it("valoración cualitativa, sin porcentaje", () => {
    expect(a.nivel).toBe("baja");
    expect(JSON.stringify(a)).not.toMatch(/viabilidad/i);
    expect(a.motivosNivel.length).toBeGreaterThan(0);
    expect(a.resumen).not.toMatch(/\d\s?%/);
  });
  it("datosFaltantes sin duplicados ni contradicciones", () => {
    const f = a.datosFaltantes ?? [];
    expect(f.join("|")).not.toMatch(/expediente|matr[ií]cula|importe|fechaNotificacion/i);
    expect(new Set(f).size).toBe(f.length);
  });
  it("avisa cuando viene de una imagen", () => {
    const b = conciliar(IA_MALA, { texto: BOLETIN_RADAR, esImagen: true, hoy: HOY });
    expect(b.advertencias?.join(" ")).toMatch(/imagen/);
  });
});

describe("casos sintéticos", () => {
  it("Sevilla: importe y puntos no cuadran con el anexo IV → motivo objetivo, nivel alta", () => {
    const a = conciliar({}, { texto: DENUNCIA_SEVILLA_IMPORTE, hoy: HOY });
    expect(a.nivel).toBe("alta");
    expect(a.defectos.map((d) => d.descripcion).join(" ")).toMatch(/300 .*100|\(300 €\).*\(100 €\)/);
    expect(a.defectos.map((d) => d.descripcion).join(" ")).toMatch(/puntos/);
    expect(a.expediente).toBe("SEV-2026-0091123");
    expect(a.organo).toMatch(/Sevilla/);
  });
  it("Valencia: notificada fuera de plazo → prescripción, nivel alta, tipo resolución", () => {
    const a = conciliar({}, { texto: RESOLUCION_AYTO_VALENCIA, hoy: HOY });
    expect(a.nivel).toBe("alta");
    expect(a.defectos[0].titulo).toMatch(/Prescripci/);
    expect(a.tipoDocumento).toBe("resolucion");
    expect(a.plazoRecurso).toMatch(/1 mes/);
    expect(a.datosFaltantes).not.toContain("velocidad medida por el cinemómetro");
  });
  it("foto de radar sin notificación: no valorable, faltan datos, nada de defectos", () => {
    const a = conciliar({ defectos: [{ titulo: "Falta el órgano sancionador", descripcion: "No consta (art. 87 LSV)", gravedad: "alta" }] }, { texto: FOTO_RADAR, esImagen: true, hoy: HOY });
    expect(a.nivel).toBe("no_valorable");
    expect(a.defectos).toEqual([]);
    expect(a.matricula).toBe("9374 LMB");
    expect(a.velocidadDetectada).toBe("78 km/h");
    expect(a.datosFaltantes).toEqual(expect.arrayContaining(["número de expediente", "importe de la sanción"]));
  });
  it("texto ilegible → sin datos básicos (se pide otra foto, no se inventa)", () => {
    const a = conciliar(IA_MALA, { texto: "xx ~~ ¿¿ ilegible", hoy: HOY });
    expect(sinDatosBasicos(a)).toBe(true);
    expect(a.expediente).toBe("No encontrado");
  });
});

describe("escrito", () => {
  it("el escrito de respaldo es completo, sin inventar y solo con citas permitidas", () => {
    const a = conciliar({}, { texto: RESOLUCION_AYTO_VALENCIA, hoy: HOY });
    const c = limpiarCarta(cartaDeterminista(a, a.defectos, {}, "31 de octubre de 2026"));
    expect(cartaCompleta(c)).toBe(true);
    expect(c).toMatch(/RECURSO DE REPOSICIÓN/);
    expect(c).toMatch(/2026\/VLC\/558812/);
    expect(c).toMatch(/\[COMPLETAR: Nombre y apellidos\]/);
    expect(c).not.toMatch(/sentencia|jurisprudencia|juzgado/i);
  });
  it("detecta un escrito cortado por falta de tokens", () => {
    expect(cartaCompleta("EXPONE\n1. Que el día 5 de agosto ".repeat(40))).toBe(false);
  });
});
