// Breadcrumbs de las fichas de autocaravanas (SEO interno, 19/10/2026).
// Cubre todas las fichas de las ramas merlin-autocaravanas-lote-2/3/4/5/final
// (src/lib/comparador-autocaravanas-*.ts: 210 entradas, 208 ids únicos, 48 marcas).
// Estructura de URL: /autocaravanas/ · /autocaravanas/marca/{slug}/ · /autocaravanas/{id}/.
// El slug de marca sigue la convención del site para /{categoria}/marca/{slug}/
// (minúsculas, sin tildes, espacios y símbolos → guiones;
// p. ej. "Niesmann+Bischoff" → "niesmann-bischoff", "Pössl" → "possl").
//
// Uso en la ficha:
//   import { breadcrumbAutocaravana, breadcrumbJsonLd } from "@/lib/autocaravanas-breadcrumbs.ts";
//   const migas = breadcrumbAutocaravana(ficha); // migas visuales: Inicio → Autocaravanas → marca → modelo
//   // JSON-LD: <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd(ficha))}</script>
//   // o fusionar el objeto devuelto en el @graph existente (como CochesFicha.tsx).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export interface MigaAutocaravana {
  nombre: string;
  url: string;
}

const ORIGEN = "https://recurretumulta.online";

/**
 * Slug de marca con la convención del site.
 * "Ahorn Camp" → "ahorn-camp"; "Bürstner" → "burstner"; "Eura Mobil" → "eura-mobil".
 */
export function slugMarcaAutocaravana(marca: string): string {
  return marca
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Migas de pan de una ficha de autocaravana:
 * Inicio → Autocaravanas → {marca} → {modelo}.
 * Acepta la ficha completa (Autocaravana) o cualquier objeto con id/marca/modelo.
 */
export function breadcrumbAutocaravana(
  ficha: Pick<Autocaravana, "id" | "marca" | "modelo">,
): MigaAutocaravana[] {
  const slugMarca = slugMarcaAutocaravana(ficha.marca);
  return [
    { nombre: "Inicio", url: "/" },
    { nombre: "Autocaravanas", url: "/autocaravanas/" },
    { nombre: ficha.marca, url: `/autocaravanas/marca/${slugMarca}/` },
    { nombre: ficha.modelo, url: `/autocaravanas/${ficha.id}/` },
  ];
}

/**
 * JSON-LD BreadcrumbList válido (schema.org) para una ficha de autocaravana.
 * Devuelve el objeto listo para JSON.stringify o para fusionarlo en el @graph
 * de la página (misma convención que CochesFicha.tsx: URLs absolutas).
 */
export function breadcrumbJsonLd(
  ficha: Pick<Autocaravana, "id" | "marca" | "modelo">,
): Record<string, unknown> {
  const migas = breadcrumbAutocaravana(ficha);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: migas.map((miga, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: miga.nombre,
      item: `${ORIGEN}${miga.url}`,
    })),
  };
}
