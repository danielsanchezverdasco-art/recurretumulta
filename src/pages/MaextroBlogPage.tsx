// Página genérica para BLOGS Maextro V800 (/blog/:slug).
// (11/10/2026) Plantilla obligatoria — MANDATOS-PERMANENTES.md §1.
//
// Comportamiento:
//  - Si el slug está en el registro Maextro → carga perezosa de los datos y
//    renderiza <BlogMaextro> (H1 título V800, H2 modelo, ficha técnica,
//    tecnología, curiosidades, comparativo, FAQ con schema, CTA analizador).
//  - Si NO está → delega en la página de blog existente (sin romper nada).
//
// Prerender: fija document.body.dataset.pageReady="1" cuando los datos
// resolvieron (scripts/prerender.mjs lo exige en /blog/*).
//
// Cableado en App.tsx (1 línea, ver docs/PLANTILLA-MAEXTRO.md):
//   <Route path="blog/:slug" element={<MaextroBlogPage />} />

import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { BlogMaextro } from "@/components/maextro/BlogMaextro.tsx";
import { BLOGS_MAEXTRO } from "@/data/maextro/registro.ts";
import type { MaextroBlogData } from "@/components/maextro/tipos.ts";

// Fallback: la página de blog existente, en lazy para no engordar el chunk.
const BlogPostPage = lazy(() => import("./blog/[slug].tsx"));

export function MaextroBlogPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const loader = BLOGS_MAEXTRO[slug];
  const [data, setData] = useState<MaextroBlogData | null | undefined>(undefined);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    setData(undefined);
    if (!loader) return () => {};
    (async () => {
      try {
        const d = await loader();
        if (!alive) return;
        setData(d ?? null);
      } catch {
        if (alive) setData(null);
      }
      // Datos resueltos (o fallo): la página está lista para el prerender.
      // Si el slug no era Maextro, la página existente fija su propia marca.
      if (alive) document.body.dataset.pageReady = "1";
    })();
    return () => {
      alive = false;
      delete document.body.dataset.pageReady;
    };
  }, [slug, loader]);

  // Slug no-Maextro o error de carga: la página existente manda (cero rotura).
  if (!loader || data === null) {
    return (
      <Suspense fallback={null}>
        <BlogPostPage />
      </Suspense>
    );
  }
  if (data === undefined) return null; // cargando: el Suspense de App muestra el PageLoader

  return (
    <>
      <SharedNavbar />
      <BlogMaextro data={data} />
      <SharedFooter />
    </>
  );
}

export default MaextroBlogPage;
