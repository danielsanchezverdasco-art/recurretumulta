// Punto 24/10/2026 (orden Grok 03:05 CEST, carril @Merlín): integración de mapas
// en las páginas canónicas de provincia /multas/<slug>/.
//
// ENVOLTORIO LAZY del componente reutilizable MapaRadar (src/components/geo/MapaRadar.tsx).
// Cumple las 3 condiciones de Grok:
//   1. Solo coordenadas oficiales: si lat/lng no son válidas, no se pinta nada.
//   2. Cero coste de carga inicial: el <iframe> NO existe en el HTML inicial
//      (ni en el prerender); se crea SOLO al hacer clic en «Ver mapa» (lazy al clic,
//      sin iframes en el HTML inicial, sin empeorar LCP ni CLS — la expansión
//      ocurre por interacción del usuario). Street View va como ENLACE por radar,
//      nunca incrustado.
//   3. Tipado limpio (tsc -b) y sin errores de consola.
//
// Uso (plantilla /multas/<slug>/, una instancia por radar de la lista):
//   {coordenadasValidas(r.lat, r.lon) && (
//     <MapaRadarLazy lat={r.lat} lng={r.lon} titulo={`Radar ${r.carretera}, pk ${r.pk}`} />
//   )}

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import {
  coordenadasValidas,
  formatearCoord,
  urlMapa2D,
  urlStreetViewExterno,
} from "./MapaRadar.tsx";

export type MapaRadarLazyProps = {
  /** Latitud WGS84 oficial (DGT/DATEX II/SCT). Sin coordenada válida: no se pinta nada. */
  lat: number | null | undefined;
  /** Longitud WGS84 oficial. Sin coordenada válida: no se pinta nada. */
  lng: number | null | undefined;
  /** Etiqueta accesible del punto, p. ej. «Radar A-6, pk 541,3». */
  titulo: string;
};

export default function MapaRadarLazy({
  lat,
  lng,
  titulo,
}: MapaRadarLazyProps) {
  const [abierto, setAbierto] = useState(false);
  // Condición 1 de Grok: sin coordenadas oficiales no se pinta mapa ni botón.
  if (!coordenadasValidas(lat, lng)) return null;
  const latN = lat as number;
  const lngN = lng as number;

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
      >
        <MapPin className="w-3.5 h-3.5" />
        {abierto ? "Cerrar mapa" : "Ver mapa"}
      </button>
      {abierto && (
        <section aria-label={`Mapa de ubicación: ${titulo}`} className="mt-2">
          <iframe
            title={`Mapa de ubicación: ${titulo}`}
            src={urlMapa2D(latN, lngN)}
            className="h-[380px] w-full border-0 rounded-xl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-1.5 text-[11px] text-gray-500">
            WGS84: {formatearCoord(latN)}, {formatearCoord(lngN)}.{" "}
            <a
              href={urlStreetViewExterno(latN, lngN)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline text-blue-700 hover:text-blue-900"
            >
              <ExternalLink className="w-3 h-3" />
              Ver en Google Street View
            </a>
          </p>
        </section>
      )}
    </div>
  );
}
