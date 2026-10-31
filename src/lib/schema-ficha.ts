// Schema 17/10/2026: nodo Product/Car/Motorcycle común de las fichas.
// - Offer solo con precio real (los aproximados van en la descripción, no en el Offer).
// - offeredBy = la marca (precio de partida publicado por ella): nosotros no vendemos.
// - ORD-20261027-1035 (Grok, 27/10/2026): todo Offer con precio real lleva
//   availability InStock y priceValidUntil 2026-12-31, por orden expresa de Grok
//   (sustituye al criterio anterior de no declarar ni stock ni caducidad).
// - Sin valoraciones: aggregateRating solo llega de reseñas reales (ResenasVehiculo).
import type { PuntoGen } from "./historial-precios-cargar";

/** Precio real en origen cuando solo hay conversión a euros (p. ej. Stelato G9, China). */
export const PRECIO_ORIGEN: Record<string, { price: number; priceCurrency: string; pais?: string }> = {
  "stelato-g9-2026-precio-ficha-tecnica": { price: 479800, priceCurrency: "CNY", pais: "China" },
  // 31/10/2026 (GEO): Offer con mercado indicado (China) en las fichas chinas sin precio en España. Precios: CnEVPost.
  "stelato-g9-erev-2026-precio-ficha-tecnica": { price: 429800, priceCurrency: "CNY", pais: "China" },
  "maextro-v800-huawei-precio-ficha-tecnica": { price: 766000, priceCurrency: "CNY", pais: "China" },
  // Lanzamiento 20/10/2026 en Zhengzhou: 5 versiones, 65.900–99.900 yuanes (CnEVPost).
  "byd-seagull-2026-precio-ficha-tecnica": { price: 65900, priceCurrency: "CNY", pais: "China" },
  // Nota de prensa Mercedes-AMG 17/10/2026: AMG GT 53 SUV desde 113.050 € en Alemania (IVA 19 %); sin tarifa en España.
  "mercedes-amg-gt-suv-precio-ficha-tecnica": { price: 113050, priceCurrency: "EUR", pais: "Alemania" },
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
  precioOrigen?: { price: number; priceCurrency: string; pais?: string } | null;
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
  // GSC 17/10: fichas de comerciante exigen imagen; sin imagen no se declara Offer.
  const conImagen = Array.isArray(d.image) ? d.image.length > 0 : !!d.image;
  // ORD-20261027-1035: availability + priceValidUntil en todo Offer con precio real.
  const base = {
    "@type": "Offer",
    url: d.url,
    offeredBy: { "@type": "Organization", name: d.marca },
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  };
  if (!conImagen) {
    offers = null;
  } else if (d.precioOrigen && ok(d.precioOrigen.price) && d.precioOrigen.priceCurrency !== "EUR") {
    // 31/10/2026: sin Offer en moneda no-EUR (CNY): no hay oferta real en España y un Offer en yuanes sobre un
    // Car induce a error en Merchant listings. El precio de origen sigue en el texto visible, con su conversión.
    offers = null;
  } else if (d.precioOrigen && ok(d.precioOrigen.price)) {
    offers = {
      ...base,
      price: d.precioOrigen.price,
      priceCurrency: d.precioOrigen.priceCurrency,
      ...(d.precioOrigen.pais ? { eligibleRegion: { "@type": "Country", name: d.precioOrigen.pais } } : {}),
    };
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
