// Página genérica para FICHAS Maextro V800 (/coches|motos|patinetes/:slug).
// (11/10/2026) Plantilla obligatoria — MANDATOS-PERMANENTES.md §1.
//
// Comportamiento:
//  - Si el slug está en el registro Maextro → carga perezosa de los datos y
//    renderiza <FichaMaextro> (H1 modelo, nota de Cosa, cifras, ZBE, precio,
//    EuroNCAP, historia, mantenimiento, garantía, FAQ con schema).
//  - Si NO está → delega en la página existente de la sección (sin romper nada).
//
// Prerender: fija document.body.dataset.pageReady="1" cuando los datos
// resolvieron (scripts/prerender.mjs lo exige en /coches|motos|patinetes/*).
//
// Cableado en App.tsx (1 línea por sección, ver docs/PLANTILLA-MAEXTRO.md):
//   <Route path="coches/:slug" element={<MaextroFichaPage seccion="coches" />} />

import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { FichaMaextro } from "@/components/maextro/FichaMaextro.tsx";
import { FICHAS_MAEXTRO } from "@/data/maextro/registro.ts";
import type { MaextroFichaData } from "@/components/maextro/tipos.ts";

// Fallbacks: las páginas existentes, en lazy para no engordar el chunk.
const CochesFichaPage = lazy(() => import("./CochesFicha.tsx"));
const MotosFichaPage = lazy(() => import("./MotosFicha.tsx"));
const PatinetesFichaPage = lazy(() => import("./PatinetesFicha.tsx"));

type Seccion = "coches" | "motos" | "patinetes";

function PaginaExistente({ seccion }: { seccion: Seccion }) {
  if (seccion === "motos") return <MotosFichaPage />;
  if (seccion === "patinetes") return <PatinetesFichaPage />;
  return <CochesFichaPage />;
}

export function MaextroFichaPage({ seccion }: { seccion: Seccion }) {
  const { slug = "" } = useParams<{ slug: string }>();
  const loader = FICHAS_MAEXTRO[slug];
  const [data, setData] = useState<MaextroFichaData | null | undefined>(undefined);

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
        <PaginaExistente seccion={seccion} />
      </Suspense>
    );
  }
  if (data === undefined) return null; // cargando: el Suspense de App muestra el PageLoader

  return (
    <>
      <SharedNavbar />
      <FichaMaextro data={data} />
      <SharedFooter />
    </>
  );
}

export default MaextroFichaPage;
