// Schema 17/10/2026: nodo Product/Car/Motorcycle común de las fichas.
// - Offer solo con precio real (los aproximados van en la descripción, no en el Offer).
// - offeredBy = la marca (precio de partida publicado por ella): nosotros no vendemos.
// - Sin availability (no sabemos el stock) y sin priceValidUntil (ninguna fuente da
//   una fecha de caducidad del precio; inventarla rompería la política editorial).
// - Sin valoraciones: aggregateRating solo llega de reseñas reales (ResenasVehiculo).
import type { PuntoGen } from "./historial-precios-cargar";

/** Precio real en origen cuando solo hay conversión a euros (p. ej. Stelato G9, China). */
export const PRECIO_ORIGEN: Record<string, { price: number; priceCurrency: string }> = {
  "stelato-g9-2026-precio-ficha-tecnica": { price: 479800, priceCurrency: "CNY" },
};

export interface ProductoFichaIn {
  nombre: string;
  marca: string;
  modelo: string;
  slug: string;
  image?: string | string[];
  url: string;
  descripcion?: string;
  precio: number | null;
  precioAprox: boolean;
  precioOrigen?: { price: number; priceCurrency: string } | null;
  historial?: PuntoGen[] | null;
}

/** Año de modelo solo cuando el slug lo declara como tal («…-2026», «…-2026-precio-ficha-tecnica» o «…-2026-ficha-tecnica-precio»). */
export function anioModelo(slug: string): string | null {
  const m = slug.match(/-(20\d{2})(?:-precio-ficha-tecnica|-ficha-tecnica-precio)?$/);
  return m ? m[1] : null;
}

export function productoFicha(d: ProductoFichaIn): Record<string, unknown> {
  const anio = anioModelo(d.slug);
  const ok = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v) && v > 0;
  let offers: Record<string, unknown> | null = null;
  const base = { "@type": "Offer", url: d.url, offeredBy: { "@type": "Organization", name: d.marca } };
  if (d.precioOrigen && ok(d.precioOrigen.price)) {
    offers = { ...base, price: d.precioOrigen.price, priceCurrency: d.precioOrigen.priceCurrency };
  } else if (ok(d.precio) && !d.precioAprox) {
    const ult = d.historial?.[d.historial.length - 1];
    const desde = ult && ult.p === d.precio && (ult.m ?? "EUR") === "EUR" && !ult.a ? ult.f : null;
    offers = { ...base, price: d.precio, priceCurrency: "EUR", ...(desde ? { validFrom: desde } : {}) };
  }
  return {
    "@id": `${d.url}#producto`,
    name: d.nombre,
    brand: { "@type": "Brand", name: d.marca },
    model: d.modelo,
    ...(anio ? { vehicleModelDate: anio } : {}),
    ...(d.image ? { image: d.image } : {}),
    url: d.url,
    ...(d.descripcion ? { description: d.descripcion } : {}),
    ...(offers ? { offers } : {}),
  };
}
