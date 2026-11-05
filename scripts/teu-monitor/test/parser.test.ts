import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { anunciosTraficoDelIndice, parsearAnuncio, cruzar, dniCompatible, FALTA } from "../parser.ts";
import { SUSCRIPTORES_MOCK } from "../mock-suscriptores.ts";

const fx = (f: string) => readFileSync(new URL(`./fixtures/${f}`, import.meta.url), "utf8");

test("índice: solo anuncios sancionadores de tráfico", () => {
  const a = anunciosTraficoDelIndice(fx("indice.html"));
  assert.deepEqual(a.map((x) => x.id), ["BOE-N-2026-000001"]);
  assert.equal(a[0].urlPdf, "https://www.boe.es/boe_n/dias/2026/10/30/not.php?id=BOE-N-2026-000001");
});

test("anuncio: extrae matrícula, DNI, organismo y plazo", () => {
  const [m1, m2, m3] = parsearAnuncio("BOE-N-2026-000001", fx("anuncio.txt"));
  assert.equal(m1.matricula, "0000BBB");
  assert.equal(m1.dni, "00000000T");
  assert.equal(m1.organismo, "Jefatura Provincial de Tráfico de Ficticia");
  assert.equal(m1.fechaPublicacion, "2026-10-30");
  assert.equal(m1.plazoHasta, "2026-11-19");
  assert.equal(m1.importe, "200 €");
  assert.deepEqual(m1.faltan, []);
  // fila sin matrícula ni identificación: se marca FALTA, nunca se inventa
  assert.equal(m2.matricula, FALTA);
  assert.equal(m2.dni, FALTA);
  assert.ok(m2.faltan.includes("matricula") && m2.faltan.includes("dni"));
  assert.equal(m3.dni, "***9999**");
});

test("sin fecha de publicación: plazo FALTA", () => {
  const [m] = parsearAnuncio("x", fx("anuncio.txt").replace(/Viernes 30 de octubre de 2026/g, ""));
  assert.equal(m.fechaPublicacion, FALTA);
  assert.equal(m.plazoHasta, FALTA);
});

test("cruce con suscriptores mock", () => {
  const hits = cruzar(parsearAnuncio("BOE-N-2026-000001", fx("anuncio.txt")), SUSCRIPTORES_MOCK);
  assert.deepEqual(hits.map((h) => [h.suscriptorId, h.por, h.multa.expediente]), [["mock-1", "matricula", "510700000001"]]);
});

test("DNI enmascarado: solo coincide con dígitos visibles suficientes", () => {
  assert.equal(dniCompatible("***0000**", "00000000T"), true);
  assert.equal(dniCompatible("***1234**", "00000000T"), false);
  assert.equal(dniCompatible("******0**", "00000000T"), false);
});
