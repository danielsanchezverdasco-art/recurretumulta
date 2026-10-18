// Ficha de caravana (/caravanas/<slug>/) — 18/10/2026 (sección /caravanas/).
// Espejo de CochesFichaPage: reutiliza el componente Ficha exportado con la
// prop `caravana` (tabla MMA/carnet, FAQ propias, bloque de normativa DGT,
// sin ZBE/etiqueta/audiencia/reseñas — el backend Convex no admite caravanas).
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Ficha } from "./CochesFicha.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import type { CocheComparador } from "@/lib/comparador-coches-data.ts";
import { loadArrayItem, loadModuleArray } from "@/lib/data-loader-utils.ts";
import { cargarFichaExtra, type FichaExtra } from "@/lib/ficha-extra.ts";

export default function CaravanasFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  // Carga perezosa como en las fichas de coches: solo el módulo de la marca
  // de esta caravana (dominio "caravana" en src/lib/data-loaders.ts).
  const [extra, setExtra] = useState<FichaExtra>({});
  const [caravana, setCaravana] = useState<CocheComparador | null | undefined>(undefined);
  const [hermanas, setHermanas] = useState<CocheComparador[]>([]);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      const [c, ex] = await Promise.all([
        loadArrayItem<CocheComparador>("caravana", slug, (x) => x.id === slug),
        cargarFichaExtra("caravanas", slug),
      ]);
      // Mismo módulo (fichero de la marca), ya en caché: sin coste extra.
      const herm = await loadModuleArray<CocheComparador>("caravana", slug);
      if (alive) setHermanas(herm);
      if (!alive) return;
      setExtra(ex);
      setCaravana(c ?? null);
      // Sin precarga de historia ni EuroNCAP: no hay datos para caravanas y
      // los componentes hijos lo gestionan (ocultan o muestran "sin datos").
      if (alive) document.body.dataset.pageReady = "1";
    })();
    return () => {
      alive = false;
      delete document.body.dataset.pageReady;
    };
  }, [slug]);

  if (caravana === undefined) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" aria-label="Cargando ficha" />
      </div>
    );
  }

  if (!caravana) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-xl px-4 pb-16 pt-16 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Caravana no encontrada</h1>
          <p className="mt-3 text-gray-600">
            No hay ninguna caravana con esa dirección en la ficha técnica. Prueba con el índice.
          </p>
          <Link
            to="/caravanas/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Ver todas las caravanas
          </Link>
        </main>
        <SharedFooter />
      </div>
    );
  }

  return <Ficha coche={caravana} extra={extra} hermanas={hermanas} caravana />;
}
