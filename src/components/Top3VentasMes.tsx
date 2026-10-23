// ─── TOP 3 MÁS VENDIDOS DEL MES (portada) ─────────────────────────────────────
// Orden de Daniel (05/10/2026): sustituye al quiz de la landing.
// Datos reales de matriculaciones desde src/lib/mas-vendidos-data.ts
// (notas mensuales de ANFAC). Muestra los 3 primeros turismos del último
// mes con datos publicados, con enlace a su ficha técnica.
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Trophy, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { PERIODOS_COCHES } from "@/lib/mas-vendidos-data.ts";
import { fmtMiles } from "@/lib/formato.ts";

// 07/10/2026: imagen directa por patrón (evita importar 618KB de comparador-lite).
// El patrón es /media/{fichaId}-oficial.webp
function imagenDeFicha(fichaId: string | undefined): string | null {
  if (!fichaId) return null;
  return `/media/${fichaId}-oficial.webp`;
}

const MEDALLA = [
  "bg-yellow-400 text-yellow-900", // oro
  "bg-gray-300 text-gray-800", // plata
  "bg-amber-600 text-white", // bronce
];

export default function Top3VentasMes() {
  const datos = useMemo(() => {
    const periodos = (PERIODOS_COCHES ?? []).filter(
      (p) => p.ranking && p.ranking.length >= 3
    );
    if (periodos.length === 0) return null;
    const ultimo = [...periodos].sort((a, b) =>
      a.periodo < b.periodo ? 1 : -1
    )[0];
    const top3 = ultimo.ranking.slice(0, 3).map((v) => ({
      modelo: v.modelo,
      unidades: v.unidades,
      fichaId: v.fichaId ?? null,
      imagen: imagenDeFicha(v.fichaId),
    }));
    return { etiqueta: ultimo.etiqueta, fuente: ultimo.fuente, top3 };
  }, []);

  if (!datos) {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Actualizando los datos de ventas…
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="text-center space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-red-600">
          Datos reales · Matriculaciones
        </p>
        <h2 className="text-2xl font-black text-gray-900">
          Los 3 más vendidos en España
        </h2>
        <p className="text-xs text-gray-400">
          {`Turismos matriculados en ${datos.etiqueta} · Fuente: ${datos.fuente}`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {datos.top3.map((v, i) => {
          const tarjeta = (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-0">
                <div className="relative">
                  {v.imagen ? (
                    <img
                      src={v.imagen}
                      alt={`${v.modelo}, uno de los coches más vendidos en España en ${datos.etiqueta}`}
                      className="w-full h-36 object-cover"
                      loading="lazy"
                      width={400}
                      height={225}
                    />
                  ) : (
                    <div className="w-full h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Trophy className="w-10 h-10 text-gray-300" />
                    </div>
                  )}
                  <span
                    className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shadow ${MEDALLA[i]}`}
                  >
                    {i + 1}
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <p className="font-bold text-gray-900 leading-tight">{v.modelo}</p>
                  <p className="text-sm text-gray-500">
                    {v.unidades != null ? (
                      <>
                        <span className="font-black text-gray-900">
                          {fmtMiles(v.unidades)}
                        </span>
                        {" matriculaciones"}
                      </>
                    ) : (
                      "cifra no publicada"
                    )}
                  </p>
                  {v.fichaId && (
                    <p className="text-xs font-semibold text-red-600 pt-1">
                      Ver ficha técnica →
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
          return v.fichaId ? (
            <Link key={i} to={`/coches/${v.fichaId}/`} className="block h-full">
              {tarjeta}
            </Link>
          ) : (
            <div key={i} className="h-full">
              {tarjeta}
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          to="/comparador/mas-vendidos/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700"
        >
          Ver ranking completo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
