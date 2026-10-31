import { describe, expect, it } from "vitest";
import { extraerDeterminista, verificarContraTexto, normalizarFecha, fechaNotificacionCoherente } from "./extraccionMulta";
import { BOLETIN_RADAR, DENUNCIA_SEVILLA_IMPORTE, FOTO_RADAR, RESOLUCION_AYTO_VALENCIA } from "./fixtures/multasSinteticas";

describe("extracción determinista", () => {
  it("boletín de radar DGT", () => {
    const d = extraerDeterminista(BOLETIN_RADAR);
    expect(d).toMatchObject({
      expediente: "280459871234", matricula: "4821 KLM", fecha: "14/08/2026", hora: "10:42",
      importe: "100,00 €", importeReducido: "50,00 €", puntos: "0", calificacion: "grave",
      velocidadDetectada: "136 km/h", limiteVia: "120 km/h", tipoRadar: "fijo", fechaNotificacion: "02/09/2026", tipoDocumento: "denuncia",
    });
    expect(d.precepto).toMatch(/48 RGC/);
    expect(d.precepto).toMatch(/76\.a LSV/);
    expect(d.lugar).toMatch(/^Autovía A-6, km 21,300/);
    expect(d.provincia).toBe("Madrid");
  });
  it("denuncia de Sevilla", () => {
    const d = extraerDeterminista(DENUNCIA_SEVILLA_IMPORTE);
    expect(d).toMatchObject({
      expediente: "SEV-2026-0091123", matricula: "7788 MNB", fecha: "05/09/2026", hora: "07:55", importe: "300,00 €",
      puntos: "2", calificacion: "grave", velocidadDetectada: "66 km/h", limiteVia: "50 km/h", tipoRadar: "fijo", fechaNotificacion: "25/09/2026",
    });
    expect(d.lugar).toBe("Avda. de la Palmera 40, Sevilla");
    expect(d.precepto).toMatch(/48 RGC/);
  });
  it("resolución del Ayuntamiento de Valencia (no es velocidad)", () => {
    const d = extraerDeterminista(RESOLUCION_AYTO_VALENCIA);
    expect(d).toMatchObject({ expediente: "2026/VLC/558812", matricula: "1123 HZT", fecha: "03/03/2026", hora: "18:20", importe: "90,00 €", calificacion: "leve", tipoDocumento: "resolucion" });
    expect(d.velocidadDetectada).toBeUndefined();
    expect(d.provincia).toBe("Valencia");
    // "Fecha de notificación de la denuncia" NO es la fecha de la infracción
    expect(d.fecha).not.toBe("15/07/2026");
    expect(d.fechaNotificacion).toBe("15/07/2026");
  });
  it("fotograma de radar", () => {
    const d = extraerDeterminista(FOTO_RADAR);
    expect(d).toMatchObject({ matricula: "9374 LMB", fecha: "21/09/2026", hora: "08:15", velocidadDetectada: "78 km/h", limiteVia: "70 km/h", tipoRadar: "fijo", esFotograma: true });
    expect(d.expediente).toBeUndefined();
    expect(d.importe).toBeUndefined();
  });
});

describe("la fecha de notificación no sale de la boleta de pago", () => {
  const FORM = `TITULAR REGISTRAL DEL VEHÍCULO | FECHA / HORA DE LA INFRACCIÓN PÉRDIDA DE PUNTOS
22/08/2026 16:18 NO
JUAN PRUEBA
FECHA DE APERTURA DEL EXPEDIENTE CLAVE Y CALIFICACIÓN
VEHÍCULO | 31/08/2026 | 14/011 GRAVE
1234BCD | FECHA DE EMISIÓN DE LA NOTIFICACIÓN PRECEPTO INFRINGIDO *
LUGAR DE LA INFRACCIÓN | 01/09/2026 | 76.A LSV
CALLE FICTICIA 5 | IMPORTE DE LA MULTA IMPORTE REDUCIDO
REFERENCIA DEL EXPEDIENTE Nº DE NOTIFICACIÓN | 100,00 | 50,00
DESTINATARIO/A Nº DE NOTIFICACIÓN
911/123456789.4 | NOTIFI. 911/987654321
HECHO DENUNCIADO
SOBREPASAR LA VELOCIDAD MEDIA EN TRAMO CONTROLADO. CIRCULAR A 68 km/h LIMITE 50 km/h
La directora general de Gestión y Vigilancia de la Circulación del Ayuntamiento de Madrid ¹ ha dispuesto que se inicie un expediente
tiene que estar dirigido al Servicio de Instrucción de Multas de Circulación.
FECHA CONTROL 13/10/2026 123456789 EUROS 100,00`;
  it("formulario tipo Madrid", () => {
    const d = extraerDeterminista(FORM);
    expect(d).toMatchObject({
      fecha: "22/08/2026", hora: "16:18", puntos: "0", calificacion: "grave", fechaApertura: "31/08/2026",
      fechaNotificacion: "01/09/2026", fechaNotificacionEsEmision: true, importe: "100,00 €", importeReducido: "50,00 €",
      expediente: "911/123456789.4", velocidadDetectada: "68 km/h", limiteVia: "50 km/h", tipoRadar: "fijo", matricula: "1234 BCD", lugar: "CALLE FICTICIA 5",
    });
    expect(d.precepto).toBe("art. 76.a LSV");
    expect(d.organo).toMatch(/Servicio de Instrucción de Multas de Circulación/);
    expect(d.provincia).toBe("Madrid");
  });
});

describe("verificar contra el texto (anti-invención)", () => {
  it("acepta lo que está y rechaza lo que no", () => {
    expect(verificarContraTexto("expediente", "280459871234", BOLETIN_RADAR).ok).toBe(true);
    expect(verificarContraTexto("expediente", "280459871299", BOLETIN_RADAR).ok).toBe(false);
    expect(verificarContraTexto("matricula", "4821KLM", BOLETIN_RADAR).ok).toBe(true);
    expect(verificarContraTexto("matricula", "1111 AAA", BOLETIN_RADAR).ok).toBe(false);
    expect(verificarContraTexto("importe", "100 euros", BOLETIN_RADAR).ok).toBe(true);
    expect(verificarContraTexto("importe", "200€", BOLETIN_RADAR).ok).toBe(false);
    expect(verificarContraTexto("fecha", "14/08/2026", BOLETIN_RADAR).ok).toBe(true);
    expect(verificarContraTexto("fecha", "15/08/2026", BOLETIN_RADAR).ok).toBe(false);
    expect(verificarContraTexto("velocidadDetectada", "136 km/h", BOLETIN_RADAR).ok).toBe(true);
    expect(verificarContraTexto("velocidadDetectada", "142 km/h", BOLETIN_RADAR).ok).toBe(false);
    expect(verificarContraTexto("lugar", "Autovía A-6, km 21,300, sentido Madrid", BOLETIN_RADAR).ok).toBe(true);
    expect(verificarContraTexto("lugar", "Paseo de la Castellana 100, Madrid", BOLETIN_RADAR).ok).toBe(false);
    expect(verificarContraTexto("puntos", "4", BOLETIN_RADAR).ok).toBe(false);
  });
  it("fechas y coherencia", () => {
    expect(normalizarFecha("5-9-26")).toBe("05/09/2026");
    expect(normalizarFecha("31/02/2026")).toBeUndefined();
    expect(fechaNotificacionCoherente("22/08/2026", "01/09/2026", new Date("2026-10-31"))).toBe(true);
    expect(fechaNotificacionCoherente("22/08/2026", "13/08/2026", new Date("2026-10-31"))).toBe(false);
    expect(fechaNotificacionCoherente("22/08/2026", "01/12/2026", new Date("2026-10-31"))).toBe(false);
  });
});
