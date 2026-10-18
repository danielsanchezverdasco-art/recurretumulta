import { describe, expect, it } from "vitest";
import { elegirFicha, puntuarFicha, type FichaCandidata } from "./ficha-match.ts";

const f = (tipo: FichaCandidata["tipo"], id: string, marca: string, modelo: string): FichaCandidata => ({ tipo, id, marca, modelo });
const cayenne = f("coches", "porsche-cayenne-electric-2025-precio-ficha-tecnica", "Porsche", "Cayenne Electric 2025");
const eletre = f("coches", "lotus-eletre-900-sport-2025-precio-ficha-tecnica", "Lotus", "Eletre 900 Sport");

describe("ficha del post", () => {
  it("el post del AMG GT SUV no muestra la ficha de un rival", () => {
    const post = { slug: "mercedes-amg-gt-suv-electrico-presentacion-oficial", title: "AMG GT SUV eléctrico: 1.169 CV, 700 km y carga en 12 min" };
    expect(elegirFicha(post, [cayenne, eletre])).toBeNull();
  });
  it("el post del AMG GT SUV enlaza su propia ficha (y no la del GT 63 Coupé)", () => {
    const post = { slug: "mercedes-amg-gt-suv-electrico-presentacion-oficial", title: "AMG GT SUV eléctrico: 1.169 CV, 700 km y carga en 12 min" };
    const gtSuv = f("coches", "mercedes-amg-gt-suv-precio-ficha-tecnica", "Mercedes-Benz", "AMG GT SUV");
    const gt63 = f("coches", "mercedes-benz-amg-gt-63-precio-ficha-tecnica", "Mercedes-Benz", "AMG GT 63 4MATIC+ Coupé");
    expect(elegirFicha(post, [cayenne, gt63, gtSuv, eletre])?.id).toBe(gtSuv.id);
  });
  it("casa marca y modelo exactos", () => {
    const post = { slug: "mercedes-amg-glc-43-2026-precio-ficha-tecnica", title: "Mercedes-AMG GLC 43: 421 CV con etiqueta ECO" };
    const glc = f("coches", "mercedes-amg-glc-43-2026-precio-ficha-tecnica-x", "Mercedes-Benz", "AMG GLC 43 4MATIC");
    expect(elegirFicha(post, [cayenne, glc])?.id).toBe(glc.id);
  });
  it("misma marca, otro modelo: no casa", () => {
    const post = { slug: "porsche-mission-s-2026-revelado", title: "Porsche Mission S: 8.000 rpm y motor central como el 911" };
    expect(puntuarFicha(post, f("coches", "porsche-911-carrera", "Porsche", "911 Carrera"))).toBe(0);
  });
  it("MG4, Zero S y Dualtron (MiniMotors)", () => {
    expect(puntuarFicha({ slug: "mg4-xpower-2025-precio-ficha-tecnica" }, f("coches", "x", "MG", "MG4 XPower"))).toBeGreaterThan(0);
    expect(puntuarFicha({ slug: "zero-s-baja-precio-octubre-2026" }, f("motos", "x", "Zero Motorcycles", "S"))).toBeGreaterThan(0);
    expect(puntuarFicha({ slug: "dualtron-storm-precio" }, f("patinetes", "x", "Dualtron (MiniMotors)", "Dualtron Storm"))).toBeGreaterThan(0);
  });
  it("motos: la cilindrada distinta es otra moto", () => {
    expect(puntuarFicha({ slug: "fb-mondial-hps-125-2025-precio-ficha-tecnica" }, f("motos", "x", "FB Mondial", "HPS 300"))).toBe(0);
  });
});
