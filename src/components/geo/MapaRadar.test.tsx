/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import MapaRadar, {
  coordenadasValidas,
  formatearCoord,
  urlMapa2D,
  urlStreetView,
  urlStreetViewExterno,
} from "@/components/geo/MapaRadar.tsx";

afterEach(() => cleanup());

// Coordenadas reales DGT del radar n-330-671-7-decreciente-fijo (Aisa, Huesca)
const LAT = 42.78251;
const LNG = -0.54176;

describe("urls de embed (sin API key)", () => {
  it("mapa 2D: host y parámetros bien formados", () => {
    const u = new URL(urlMapa2D(LAT, LNG));
    expect(u.origin).toBe("https://www.google.com");
    expect(u.pathname).toBe("/maps");
    expect(u.searchParams.get("q")).toBe("42.78251,-0.54176");
    expect(u.searchParams.get("z")).toBe("15");
    expect(u.searchParams.get("output")).toBe("embed");
  });

  it("mapa 2D: respeta el zoom y lo acota a 1-21", () => {
    expect(new URL(urlMapa2D(LAT, LNG, 17)).searchParams.get("z")).toBe("17");
    expect(new URL(urlMapa2D(LAT, LNG, 99)).searchParams.get("z")).toBe("21");
    expect(new URL(urlMapa2D(LAT, LNG, 0)).searchParams.get("z")).toBe("1");
  });

  it("street view embed: layer=c + cbll + output=svembed", () => {
    const u = new URL(urlStreetView(LAT, LNG));
    expect(u.origin).toBe("https://maps.google.com");
    expect(u.pathname).toBe("/maps");
    expect(u.searchParams.get("layer")).toBe("c");
    expect(u.searchParams.get("cbll")).toBe("42.78251,-0.54176");
    expect(u.searchParams.get("output")).toBe("svembed");
  });

  it("enlace externo street view: api=1 + map_action=pano + viewpoint", () => {
    const u = new URL(urlStreetViewExterno(LAT, LNG));
    expect(u.origin).toBe("https://www.google.com");
    expect(u.searchParams.get("api")).toBe("1");
    expect(u.searchParams.get("map_action")).toBe("pano");
    expect(u.searchParams.get("viewpoint")).toBe("42.78251,-0.54176");
  });
});

describe("formatearCoord", () => {
  it("sin notación científica ni ceros sobrantes", () => {
    expect(formatearCoord(42.78251)).toBe("42.78251");
    expect(formatearCoord(-0.54176)).toBe("-0.54176");
    expect(formatearCoord(40.0)).toBe("40");
    expect(formatearCoord(0.000001)).toBe("0.000001");
    expect(formatearCoord(-0.0000004)).toBe("0"); // -0 → 0
  });
});

describe("coordenadasValidas", () => {
  it("acepta coordenadas reales", () => {
    expect(coordenadasValidas(LAT, LNG)).toBe(true);
  });
  it("rechaza ausentes o no numéricas", () => {
    expect(coordenadasValidas(null, LNG)).toBe(false);
    expect(coordenadasValidas(LAT, undefined)).toBe(false);
    expect(coordenadasValidas(NaN, LNG)).toBe(false);
    expect(coordenadasValidas(LAT, Infinity)).toBe(false);
  });
  it("rechaza fuera de rango", () => {
    expect(coordenadasValidas(91, LNG)).toBe(false);
    expect(coordenadasValidas(LAT, 181)).toBe(false);
  });
});

describe("componente MapaRadar", () => {
  it("renderiza los dos iframes con las urls de embed", () => {
    render(<MapaRadar lat={LAT} lng={LNG} titulo="Radar N-330, pk 671,7" />);
    const mapa = screen.getByTitle("Mapa de ubicación: Radar N-330, pk 671,7");
    const sv = screen.getByTitle("Street View: Radar N-330, pk 671,7");
    expect(mapa.tagName).toBe("IFRAME");
    expect(sv.tagName).toBe("IFRAME");
    expect(mapa.getAttribute("src")).toBe(urlMapa2D(LAT, LNG));
    expect(sv.getAttribute("src")).toBe(urlStreetView(LAT, LNG));
    expect(mapa.getAttribute("loading")).toBe("lazy");
    expect(
      screen
        .getByText(/^Street View /)
        .getAttribute("href"),
    ).toBe(urlStreetViewExterno(LAT, LNG));
  });

  it("conStreetView=false solo muestra el mapa 2D", () => {
    render(
      <MapaRadar lat={LAT} lng={LNG} titulo="Radar X" conStreetView={false} />,
    );
    expect(screen.getByTitle("Mapa de ubicación: Radar X")).toBeTruthy();
    expect(screen.queryByTitle("Street View: Radar X")).toBeNull();
  });

  it("sin coordenadas no renderiza nada (nunca un iframe roto)", () => {
    const { container } = render(
      <MapaRadar lat={null} lng={LNG} titulo="Radar X" />,
    );
    expect(container.innerHTML).toBe("");
    expect(container.querySelectorAll("iframe").length).toBe(0);
  });
});
