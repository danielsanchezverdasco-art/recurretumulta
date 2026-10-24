/**
 * @vitest-environment jsdom
 */
// Test del envoltorio lazy (orden Grok 24/10/2026 03:05): condiciones 1 y 2.
//  - Condición 1: sin coordenadas oficiales no se pinta nada (ni botón).
//  - Condición 2: cero iframes en el HTML inicial; el mapa se crea solo al clic.
//    Street View solo como enlace, nunca incrustado.
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import MapaRadarLazy from "@/components/geo/MapaRadarLazy.tsx";
import {
  urlMapa2D,
  urlStreetViewExterno,
} from "@/components/geo/MapaRadar.tsx";

afterEach(() => cleanup());

// Coordenadas reales DGT del radar n-330-671-7-decreciente-fijo (Aisa, Huesca)
const LAT = 42.78251;
const LNG = -0.54176;

describe("MapaRadarLazy", () => {
  it("HTML inicial: botón «Ver mapa», cero iframes", () => {
    const { container } = render(
      <MapaRadarLazy lat={LAT} lng={LNG} titulo="Radar N-330, pk 671,7" />,
    );
    expect(screen.getByRole("button", { name: "Ver mapa" })).toBeTruthy();
    expect(container.querySelectorAll("iframe").length).toBe(0);
  });

  it("al clic: crea el iframe del mapa 2D y Street View solo como enlace", () => {
    const { container } = render(
      <MapaRadarLazy lat={LAT} lng={LNG} titulo="Radar N-330, pk 671,7" />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Ver mapa" }));
    const iframes = container.querySelectorAll("iframe");
    expect(iframes.length).toBe(1);
    expect(iframes[0].getAttribute("src")).toBe(urlMapa2D(LAT, LNG));
    expect(iframes[0].getAttribute("title")).toBe(
      "Mapa de ubicación: Radar N-330, pk 671,7",
    );
    // Street View como enlace externo, nunca incrustado
    const sv = screen.getByRole("link", { name: /street view/i });
    expect(sv.getAttribute("href")).toBe(urlStreetViewExterno(LAT, LNG));
  });

  it("clic de nuevo: cierra el mapa (el iframe desaparece)", () => {
    const { container } = render(
      <MapaRadarLazy lat={LAT} lng={LNG} titulo="Radar X" />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Ver mapa" }));
    expect(container.querySelectorAll("iframe").length).toBe(1);
    fireEvent.click(screen.getByRole("button", { name: "Cerrar mapa" }));
    expect(container.querySelectorAll("iframe").length).toBe(0);
  });

  it("sin coordenadas oficiales: no pinta nada (ni botón ni mapa)", () => {
    const { container } = render(
      <MapaRadarLazy lat={null} lng={LNG} titulo="Radar X" />,
    );
    expect(container.innerHTML).toBe("");
    expect(container.querySelectorAll("iframe").length).toBe(0);
    expect(container.querySelectorAll("button").length).toBe(0);
  });
});
