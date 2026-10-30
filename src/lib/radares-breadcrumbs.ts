// Breadcrumbs SEO para las páginas de radares (/radares/...).
// Generado por el worker W2 (SEO interno) a partir de docs/radares/*.csv.
// Reglas: Inicio > Radares > {Comunidad} > Radar {carretera} pk {pk}.

export interface BreadcrumbItem {
  nombre: string;
  url: string;
}

export interface RadarMin {
  id_unico: string;
  carretera: string;
  pk: string;
  comunidad: string;
}

/** Slug URL-safe para el nombre de una comunidad autónoma. */
export function slugComunidad(comunidad: string): string {
  return comunidad
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Miga de pan completa de la página de un radar. */
export function breadcrumbRadar(radar: RadarMin): BreadcrumbItem[] {
  return [
    { nombre: "Inicio", url: "/" },
    { nombre: "Radares", url: "/provincias/" },
    { nombre: radar.comunidad, url: `/radares/comunidad/${slugComunidad(radar.comunidad)}/` },
    { nombre: `Radar ${radar.carretera} pk ${radar.pk}`, url: `/radares/${radar.id_unico}/` },
  ];
}

/** JSON-LD BreadcrumbList válido (schema.org) para la página de un radar. */
export function breadcrumbRadarJsonLd(radar: RadarMin): Record<string, unknown> {
  const items = breadcrumbRadar(radar);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nombre,
      item: it.url,
    })),
  };
}
