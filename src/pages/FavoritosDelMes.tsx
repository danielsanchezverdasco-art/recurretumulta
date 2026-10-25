// «Favoritos del mes» (18/10/2026): ranking de la audiencia por tipo de vehículo.
// - El HTML prerenderizado solo lleva el texto fijo; las tablas se cargan en
//   cliente desde Convex (en directo: se actualizan solas con cada voto).
// - Nunca se inventan votos ni visitas: sin datos → estado «pocos votos».
// - Sin aggregateRating ni ItemList con notas en el JSON-LD.
import { Component, useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { Eye, Star, Trophy } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { DOMAIN, PUBLISHER } from "@/lib/eeat.ts";
import { esAutomatizado, fmtNota, fmtNum, type TipoFicha } from "@/lib/audiencia/cliente.ts";

const TIPOS: { tipo: TipoFicha; titulo: string; emoji: string; hub: string }[] = [
  { tipo: "coches", titulo: "Coches", emoji: "🚗", hub: "/coches/" },
  { tipo: "motos", titulo: "Motos", emoji: "🏍️", hub: "/motos/" },
  { tipo: "patinetes", titulo: "Patinetes eléctricos", emoji: "🛴", hub: "/patinetes/" },
];

type Nombres = Record<string, [string, string | null]>;
// import.meta.glob tipado: evita que TypeScript infiera los JSON enormes.
const NOMBRES_GLOB = import.meta.glob<{ default: Nombres }>("../lib/audiencia/nombres-*.generated.json");
const NOMBRES = (tipo: TipoFicha) => NOMBRES_GLOB[`../lib/audiencia/nombres-${tipo}.generated.json`]();

function nombreMes(mes: string) {
  const [y, m] = mes.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 15)).toLocaleDateString("es-ES", { month: "long", year: "numeric", timeZone: "UTC" });
}

function Vacio({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-4 text-sm text-gray-600">{children}</p>;
}

function Modelo({ tipo, slug, nombres }: { tipo: TipoFicha; slug: string; nombres: Nombres }) {
  return (
    <Link to={`/${tipo}/${slug}/`} className="font-semibold text-gray-900 [overflow-wrap:anywhere] hover:text-red-600 hover:underline">
      {nombres[slug]?.[0] ?? slug}
    </Link>
  );
}

function TablaTipo({ tipo, titulo, hub }: (typeof TIPOS)[number]) {
  const datos = useQuery(api.audiencia.favoritosMes, { tipo });
  const [nombres, setNombres] = useState<Nombres | null>(null);
  useEffect(() => {
    let vivo = true;
    NOMBRES(tipo).then((m) => vivo && setNombres(m.default));
    return () => {
      vivo = false;
    };
  }, [tipo]);
  const cargando = datos === undefined || nombres === null;
  // Solo fichas que existen de verdad en la web.
  const valorados = !cargando ? datos.valorados.filter((x) => nombres[x.slug]).slice(0, 10) : [];
  const visitados = !cargando ? datos.masVisitados.filter((x) => nombres[x.slug]).slice(0, 10) : [];
  const th = "px-2 py-2 text-left text-xs font-bold uppercase tracking-wide text-gray-500";
  const td = "px-2 py-2 align-top text-sm";
  return (
    <div className="grid gap-4 lg:grid-cols-2" aria-busy={cargando}>
      <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4">
        <h3 className="flex items-center gap-2 font-extrabold text-gray-900">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" /> Mejor valorados
        </h3>
        <div className="mt-3">
          {cargando ? (
            <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
          ) : valorados.length === 0 ? (
            <Vacio>
              <strong>Pocos votos todavía.</strong> Un modelo entra en el ranking con al menos {datos.minVotos} votos este mes
              {datos.pocosVotos > 0 ? ` (ahora mismo hay ${fmtNum(datos.pocosVotos)} ${datos.pocosVotos === 1 ? "modelo" : "modelos"} en camino)` : ""}.
              Entra en cualquier ficha de <Link to={hub} className="font-semibold text-red-600 underline">{titulo.toLowerCase()}</Link> y puntúalo.
            </Vacio>
          ) : (
            <table className="w-full table-fixed border-collapse">
              <caption className="sr-only">{titulo} mejor valorados por la audiencia en {nombreMes(datos.mes)}</caption>
              <thead>
                <tr className="border-b border-gray-200">
                  <th scope="col" className={`${th} w-8`}>#</th>
                  <th scope="col" className={th}>Modelo</th>
                  <th scope="col" className={`${th} w-16 text-right`}>Nota</th>
                  <th scope="col" className={`${th} w-16 text-right`}>Votos</th>
                </tr>
              </thead>
              <tbody>
                {valorados.map((x, i) => (
                  <tr key={x.slug} className="border-b border-gray-100 last:border-0 even:bg-gray-50/70">
                    <td className={`${td} font-black text-gray-400`}>{i + 1}</td>
                    <td className={td}><Modelo tipo={tipo} slug={x.slug} nombres={nombres} /></td>
                    <td className={`${td} text-right font-black text-gray-900`}>{fmtNota(x.media)}</td>
                    <td className={`${td} text-right text-gray-600`}>{fmtNum(x.votos)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4">
        <h3 className="flex items-center gap-2 font-extrabold text-gray-900">
          <Eye className="h-4 w-4 text-sky-600" aria-hidden="true" /> Más visitados
        </h3>
        <div className="mt-3">
          {cargando ? (
            <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
          ) : visitados.length === 0 ? (
            <Vacio>Aún no hay visitas registradas este mes en {titulo.toLowerCase()}.</Vacio>
          ) : (
            <table className="w-full table-fixed border-collapse">
              <caption className="sr-only">{titulo} más visitados en {nombreMes(datos.mes)}</caption>
              <thead>
                <tr className="border-b border-gray-200">
                  <th scope="col" className={`${th} w-8`}>#</th>
                  <th scope="col" className={th}>Modelo</th>
                  <th scope="col" className={`${th} w-20 text-right`}>Visitas</th>
                  <th scope="col" className={`${th} w-14 text-right`}>Nota</th>
                </tr>
              </thead>
              <tbody>
                {visitados.map((x, i) => (
                  <tr key={x.slug} className="border-b border-gray-100 last:border-0 even:bg-gray-50/70">
                    <td className={`${td} font-black text-gray-400`}>{i + 1}</td>
                    <td className={td}><Modelo tipo={tipo} slug={x.slug} nombres={nombres} /></td>
                    <td className={`${td} text-right font-bold text-gray-900`}>{fmtNum(x.visitas)}</td>
                    <td className={`${td} text-right text-gray-600`}>{x.media != null ? fmtNota(x.media) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

class Boundary extends Component<{ children: ReactNode }, { fallo: boolean }> {
  state = { fallo: false };
  static getDerivedStateFromError() {
    return { fallo: true };
  }
  render() {
    return this.state.fallo ? (
      <Vacio>Los votos de la audiencia no están disponibles ahora mismo. Vuelve a intentarlo en un rato.</Vacio>
    ) : (
      this.props.children
    );
  }
}

function MesActual() {
  const d = new Date();
  return <>{nombreMes(d.toISOString().slice(0, 7))}</>;
}

export default function FavoritosDelMes() {
  useSeo({
    title: "Favoritos del mes: coches, motos y patinetes que más gustan",
    description:
      "Ranking mensual hecho con los votos reales de nuestros lectores: los coches, motos y patinetes eléctricos mejor valorados y los más visitados del mes.",
    canonical: "/favoritos-del-mes/",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${DOMAIN}/favoritos-del-mes/#webpage`,
      name: "Favoritos del mes de la audiencia",
      url: `${DOMAIN}/favoritos-del-mes/`,
      inLanguage: "es-ES",
      publisher: PUBLISHER,
    },
  });
  const [cliente, setCliente] = useState(false);
  useEffect(() => {
    if (!esAutomatizado()) setCliente(true);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SharedNavbar />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-[96px]">
        <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
          <Trophy className="h-3.5 w-3.5" aria-hidden="true" /> Ranking de la audiencia
        </p>
        <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Favoritos del mes</h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          Los coches, motos y patinetes eléctricos que más gustan a nuestros lectores en{" "}
          <strong>{cliente ? <MesActual /> : "este mes"}</strong>. Se actualiza solo con cada voto de las fichas técnicas.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-3">
          <li className="rounded-xl border border-gray-200 bg-white px-3 py-2">⭐ Nota media de 1 a 5, con un mínimo de votos para entrar.</li>
          <li className="rounded-xl border border-gray-200 bg-white px-3 py-2">👤 Un voto por persona y modelo, anónimo y sin datos personales.</li>
          <li className="rounded-xl border border-gray-200 bg-white px-3 py-2">📅 Cuenta lo votado y visitado este mes (hora UTC).</li>
        </ul>
        {TIPOS.map((t) => (
          <section key={t.tipo} className="mt-10" aria-labelledby={`fav-${t.tipo}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id={`fav-${t.tipo}`} className="text-2xl font-extrabold">
                <span aria-hidden="true">{t.emoji}</span> {t.titulo}
              </h2>
              <Link to={t.hub} className="text-sm font-semibold text-red-600 hover:underline">Ver todas las fichas</Link>
            </div>
            <div className="mt-3">
              {cliente ? (
                <Boundary>
                  <LazyConvexProvider fallback={<div className="h-40 animate-pulse rounded-2xl bg-gray-100" />}>
                    <TablaTipo {...t} />
                  </LazyConvexProvider>
                </Boundary>
              ) : (
                <Vacio>Cargando los votos de la audiencia…</Vacio>
              )}
            </div>
          </section>
        ))}
        <p className="mt-10 text-xs text-gray-500">
          Son votos de lectores, no reseñas verificadas ni pruebas nuestras: sirven para saber qué interesa a la gente. Las
          notas técnicas y los datos oficiales están en cada ficha. Más información en nuestra{" "}
          <Link to="/politica-editorial/" className="text-red-600 underline">política editorial</Link>.
        </p>
      </main>
      <SharedFooter />
    </div>
  );
}
