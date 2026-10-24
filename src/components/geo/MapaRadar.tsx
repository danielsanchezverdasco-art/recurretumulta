// Punto 3 (orden Grok/Daniel 23/10/2026 21:55): mapas 2D + Street View en radares.
// Componente REUTILIZABLE: recibe coordenadas WGS84 (las que publica la DGT en
// DATEX II) y renderiza el mapa 2D y la vista 3D (Street View) con los embeds
// de Google que no necesitan API key. No toca enrutado: Grok lo usa en RadarPage
// y en las páginas por provincia de su rama fix-adsense-radares-provincias.
//
// Causa raíz del fallo en vivo (verificada 23/10/2026): las páginas de radares
// generan las secciones "Mapa de ubicación" y "Street View 3D" solo con texto
// (coordenadas + enlace externo); el HTML servido no contiene ningún <iframe>
// de mapa. Los datos (coordenadas) existen; faltaba el bloque que los convierte
// en embeds. Este componente es ese bloque.

export type MapaRadarProps = {
  /** Latitud WGS84 (DGT). Si es null/undefined o inválida, no se renderiza nada. */
  lat: number | null | undefined;
  /** Longitud WGS84 (DGT). Si es null/undefined o inválida, no se renderiza nada. */
  lng: number | null | undefined;
  /** Etiqueta accesible del punto, p. ej. "Radar N-330, pk 671,7". */
  titulo: string;
  /** Zoom del mapa 2D (1-21). Por defecto 15. */
  zoom?: number;
  /** Muestra también el bloque Street View. Por defecto true. */
  conStreetView?: boolean;
  className?: string;
};

/** ¿Son coordenadas utilizables? Evita embeds rotos cuando falta el dato. */
export function coordenadasValidas(
  lat: number | null | undefined,
  lng: number | null | undefined,
): boolean {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

/** Formatea una coordenada sin notación científica ni ceros sobrantes. */
export function formatearCoord(v: number): string {
  // 6 decimales bastan (~11 cm de precisión); quita ceros a la derecha.
  // Ojo: no usar replace("-0","0") global: "-0.54176" perdería el signo.
  const s = v.toFixed(6).replace(/\.?0+$/, "");
  return s === "-0" ? "0" : s;
}

/** Embed 2D de Google Maps (sin API key): ?q=lat,lng&z=N&output=embed */
export function urlMapa2D(lat: number, lng: number, zoom = 15): string {
  const z = Math.min(21, Math.max(1, Math.round(zoom)));
  return `https://www.google.com/maps?q=${formatearCoord(lat)},${formatearCoord(lng)}&z=${z}&output=embed`;
}

/** Embed Street View clásico (sin API key): layer=c + cbll + output=svembed */
export function urlStreetView(lat: number, lng: number): string {
  return `https://maps.google.com/maps?q=&layer=c&cbll=${formatearCoord(lat)},${formatearCoord(lng)}&cbp=11,0,0,0,0&output=svembed`;
}

/** Enlace externo "ver en Google Street View" (app/web de Google Maps). */
export function urlStreetViewExterno(lat: number, lng: number): string {
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${formatearCoord(lat)},${formatearCoord(lng)}`;
}

const IFRAME_CLASS = "h-[380px] w-full border-0";

export default function MapaRadar({
  lat,
  lng,
  titulo,
  zoom = 15,
  conStreetView = true,
  className,
}: MapaRadarProps) {
  // Sin coordenadas válidas no se renderiza nada: nunca un iframe roto.
  if (
    typeof lat !== "number" ||
    typeof lng !== "number" ||
    !coordenadasValidas(lat, lng)
  )
    return null;
  const latF = formatearCoord(lat);
  const lngF = formatearCoord(lng);

  return (
    <div className={className}>
      <section aria-label={`Mapa de ubicación: ${titulo}`}>
        <iframe
          title={`Mapa de ubicación: ${titulo}`}
          src={urlMapa2D(lat, lng, zoom)}
          className={IFRAME_CLASS}
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="mt-2 text-sm text-neutral-600">
          WGS84: {latF}, {lngF}.
        </p>
      </section>

      {conStreetView && (
        <section aria-label={`Street View: ${titulo}`} className="mt-8">
          <iframe
            title={`Street View: ${titulo}`}
            src={urlStreetView(lat, lng)}
            className={IFRAME_CLASS}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-2 text-sm text-neutral-600">
            <a
              href={urlStreetViewExterno(lat, lng)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Street View {latF}, {lngF}
            </a>
          </p>
        </section>
      )}
    </div>
  );
}

/* Uso previsto en RadarPage (rama fix-adsense-radares-provincias de Grok),
   sin tocar App.tsx ni routes.json:
     import MapaRadar from "@/components/geo/MapaRadar.tsx";
     <MapaRadar lat={radar.lat} lng={radar.lng} titulo={`Radar ${radar.carretera}, pk ${radar.pk}`} />
   Si el radar no trae coordenadas, el componente no renderiza nada (sin iframes rotos). */
