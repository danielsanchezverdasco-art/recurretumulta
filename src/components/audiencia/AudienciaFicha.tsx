import { Component, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { ConvexError } from "convex/values";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { ChevronRight, Eye, Star, Swords, Trophy } from "lucide-react";
import {
  cargarRival, esAutomatizado, ETIQUETA, fmtEur, fmtNota, fmtNum, idVotante, trasCarga,
  type Rival, type TipoFicha,
} from "@/lib/audiencia/cliente.ts";

/* ── La opinión de la audiencia (18/10/2026) ─────────────────────────────
   Puntúa (1-5), ¿Lo comprarías?, Duelo contra el rival natural y visitas.
   - Solo en cliente, después de la carga y cuando la sección se acerca a la
     pantalla: no entra en el prerender ni compite con el LCP.
   - Datos 100 % reales de Convex; con pocos datos se dice tal cual.
   - NO se emite aggregateRating ni ningún JSON-LD con estos votos. */

const MIN_MEDIA = 3; // votos mínimos para enseñar la nota media
const MIN_VISITAS = 20;
const EMOJI: Record<TipoFicha, string> = { coches: "🚗", motos: "🏍️", patinetes: "🛴" }; // visitas mínimas para enseñar el contador

type Props = { tipo: TipoFicha; slug: string; nombre: string };

function mensajeError(e: unknown) {
  if (e instanceof ConvexError) {
    const d = e.data as { message?: string } | undefined;
    if (d?.message) return d.message;
  }
  return "No se ha podido guardar tu voto. Inténtalo de nuevo.";
}

function useVoto() {
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const enviar = async (fn: () => Promise<unknown>) => {
    setError(null);
    setEnviando(true);
    try {
      await fn();
    } catch (e) {
      setError(mensajeError(e));
    } finally {
      setEnviando(false);
    }
  };
  return { error, enviando, enviar };
}

function Tarjeta({ titulo, icono, children, id }: { titulo: string; icono: ReactNode; children: ReactNode; id: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-gray-200 bg-gray-50/60 p-4" role="group" aria-labelledby={id}>
      <h3 id={id} className="flex items-center gap-2 text-base font-extrabold text-gray-900">
        {icono}
        {titulo}
      </h3>
      {children}
    </div>
  );
}

function Puntuar({ tipo, slug, nombre, datos }: Props & { datos: { media: number | null; votos: number; mio: number | null } }) {
  const puntuar = useMutation(api.audiencia.puntuar);
  const { error, enviando, enviar } = useVoto();
  const [hover, setHover] = useState(0);
  const idT = useId();
  const et = ETIQUETA[tipo];
  const activo = hover || datos.mio || 0;
  return (
    <Tarjeta id={idT} titulo={`Puntúa ${et.art} ${et.singular}`} icono={<Star className="h-4 w-4 text-amber-500" aria-hidden="true" />}>
      <div className="mt-3 flex items-center gap-1" onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            disabled={enviando}
            aria-pressed={datos.mio === n}
            aria-label={`Dar ${n} ${n === 1 ? "estrella" : "estrellas"} al ${nombre}`}
            onMouseEnter={() => setHover(n)}
            onFocus={() => setHover(n)}
            onBlur={() => setHover(0)}
            onClick={() => enviar(() => puntuar({ tipo, slug, votante: idVotante(), estrellas: n }))}
            className="rounded-lg p-1 transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-amber-500 disabled:opacity-60"
          >
            <Star
              className={`h-8 w-8 ${n <= activo ? "fill-amber-400 text-amber-400" : "fill-white text-gray-300"}`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-700" aria-live="polite">
        {datos.votos >= MIN_MEDIA && datos.media != null ? (
          <>
            <strong className="text-lg font-black text-gray-900">{fmtNota(datos.media)}</strong>
            <span className="text-gray-500"> / 5</span> · nota media de {fmtNum(datos.votos)} votos
          </>
        ) : datos.votos > 0 ? (
          <>Aún hay pocos votos ({fmtNum(datos.votos)}): la media sale a partir de {MIN_MEDIA}.</>
        ) : (
          <>Todavía nadie lo ha puntuado. ¡Sé el primero!</>
        )}
      </p>
      {datos.mio ? <p className="mt-1 text-xs font-semibold text-emerald-700">Tu nota: {datos.mio}/5 (puedes cambiarla)</p> : null}
      {error ? <p className="mt-1 text-xs font-semibold text-red-700" role="alert">{error}</p> : null}
    </Tarjeta>
  );
}

const OPCIONES = [
  { k: "si", txt: "Sí", barra: "bg-emerald-500" },
  { k: "pienso", txt: "Me lo pienso", barra: "bg-amber-400" },
  { k: "no", txt: "No", barra: "bg-rose-500" },
] as const;

function Comprarias({ tipo, slug, datos }: { tipo: TipoFicha; slug: string; datos: { si: number; pienso: number; no: number; mio: string | null } }) {
  const votar = useMutation(api.audiencia.comprarias);
  const { error, enviando, enviar } = useVoto();
  const idT = useId();
  const total = datos.si + datos.pienso + datos.no;
  const pct = (n: number) => (total ? Math.round((n / total) * 100) : 0);
  const et = ETIQUETA[tipo];
  return (
    <Tarjeta id={idT} titulo="¿Lo comprarías?" icono={<span aria-hidden="true">🛒</span>}>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {OPCIONES.map((o) => (
          <button
            key={o.k}
            type="button"
            disabled={enviando}
            aria-pressed={datos.mio === o.k}
            onClick={() => enviar(() => votar({ tipo, slug, votante: idVotante(), opcion: o.k }))}
            className={`min-h-11 rounded-xl border px-2 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-red-600 disabled:opacity-60 ${
              datos.mio === o.k ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-800 hover:border-gray-500"
            }`}
          >
            {o.txt}
          </button>
        ))}
      </div>
      {total > 0 ? (
        <ul className="mt-3 space-y-1.5" aria-label={`Resultados: ${fmtNum(total)} respuestas`}>
          {OPCIONES.map((o) => (
            <li key={o.k} className="text-xs text-gray-700">
              <div className="flex justify-between gap-2">
                <span className="font-semibold">{o.txt}</span>
                <span>
                  <strong className="text-gray-900">{pct(datos[o.k])} %</strong> ({fmtNum(datos[o.k])})
                </span>
              </div>
              <div className="mt-0.5 h-2 overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
                <div className={`h-full rounded-full ${o.barra} transition-[width] duration-500`} style={{ width: `${pct(datos[o.k])}%` }} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-gray-600">Nadie ha respondido aún sobre {et.art} {et.singular}.</p>
      )}
      {total > 0 ? <p className="mt-2 text-xs text-gray-500">{fmtNum(total)} {total === 1 ? "respuesta" : "respuestas"} de la audiencia</p> : null}
      {error ? <p className="mt-1 text-xs font-semibold text-red-700" role="alert">{error}</p> : null}
    </Tarjeta>
  );
}

function LadoDuelo({
  nombre, precio, img, votos, pct, elegido, onVotar, deshabilitado, hayVotos, color, emoji,
}: {
  nombre: string; precio: number | null; img: string | null; votos: number; pct: number; elegido: boolean;
  onVotar: () => void; deshabilitado: boolean; hayVotos: boolean; color: string; emoji: string;
}) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className={`flex min-w-0 flex-col rounded-2xl border-2 bg-white p-2.5 ${elegido ? "border-gray-900" : "border-gray-200"}`}>
      <div className="aspect-[3/2] overflow-hidden rounded-xl bg-gray-100 sm:aspect-auto sm:h-44">
        {img && imgOk ? (
          <img src={img} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" onError={() => setImgOk(false)} />
        ) : (
          <div className="flex h-full items-center justify-center text-2xl" aria-hidden="true">{emoji}</div>
        )}
      </div>
      <p className="mt-2 line-clamp-2 text-sm font-extrabold leading-tight text-gray-900 [overflow-wrap:anywhere]">{nombre}</p>
      {precio != null ? <p className="text-xs text-gray-500">desde {fmtEur(precio)}</p> : null}
      {hayVotos ? (
        <div className="mt-2">
          <div className="flex items-baseline justify-between text-xs">
            <strong className="text-base font-black text-gray-900">{pct} %</strong>
            <span className="text-gray-500">{fmtNum(votos)} {votos === 1 ? "voto" : "votos"}</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
            <div className={`h-full rounded-full ${color} transition-[width] duration-500`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={onVotar}
        disabled={deshabilitado}
        aria-pressed={elegido}
        aria-label={`Prefiero el ${nombre}`}
        className={`mt-auto min-h-11 w-full rounded-xl px-2 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-red-600 disabled:opacity-60 ${
          elegido ? "bg-gray-900 text-white" : "bg-red-600 text-white hover:bg-red-700"
        } ${hayVotos ? "mt-2" : "mt-3"}`}
      >
        {elegido ? "Tu elección ✓" : "Prefiero este"}
      </button>
    </div>
  );
}

function Duelo({ tipo, slug, nombre, img, rival }: { tipo: TipoFicha; slug: string; nombre: string; img: string | null; rival: Rival }) {
  const votante = idVotante();
  const d = useQuery(api.audiencia.duelo, { tipo, slug, rival: rival.slug, votante });
  const votar = useMutation(api.audiencia.votarDuelo);
  const { error, enviando, enviar } = useVoto();
  const idT = useId();
  const vF = d?.votosFicha ?? 0;
  const vR = d?.votosRival ?? 0;
  const total = vF + vR;
  const pF = total ? Math.round((vF / total) * 100) : 0;
  const v = (elegido: string) => enviar(() => votar({ tipo, slug, rival: rival.slug, votante, elegido }));
  return (
    <div className="mt-4 min-w-0 rounded-2xl border border-gray-200 bg-gray-50/60 p-4" role="group" aria-labelledby={idT}>
      <h3 id={idT} className="flex items-center gap-2 text-base font-extrabold text-gray-900">
        <Swords className="h-4 w-4 text-red-600" aria-hidden="true" /> Duelo: ¿cuál te llevas?
      </h3>
      <p className="mt-1 text-xs text-gray-500">Su rival natural: mismo segmento y precio parecido.</p>
      <div className="relative mt-3 grid grid-cols-2 gap-2.5">
        <LadoDuelo nombre={nombre} precio={rival.precioPropio} img={img} votos={vF} pct={pF} elegido={d?.mio === slug}
          onVotar={() => v(slug)} deshabilitado={enviando || d === undefined} hayVotos={total > 0} color="bg-red-500" emoji={EMOJI[tipo]} />
        <LadoDuelo nombre={rival.nombre} precio={rival.precio} img={rival.img} votos={vR} pct={total ? 100 - pF : 0} elegido={d?.mio === rival.slug}
          onVotar={() => v(rival.slug)} deshabilitado={enviando || d === undefined} hayVotos={total > 0} color="bg-sky-500" emoji={EMOJI[tipo]} />
        <span className="pointer-events-none absolute left-1/2 top-[22%] sm:top-[92px] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-black text-white shadow" aria-hidden="true">VS</span>
      </div>
      <p className="mt-2 text-xs text-gray-600" aria-live="polite">
        {total > 0 ? `Resultado en directo: ${fmtNum(total)} ${total === 1 ? "voto" : "votos"}.` : "Aún no hay votos en este duelo: ¡abre tú el marcador!"}
      </p>
      {error ? <p className="mt-1 text-xs font-semibold text-red-700" role="alert">{error}</p> : null}
      <Link
        to={`/${tipo}/${rival.slug}/`}
        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
      >
        Ver la ficha del {rival.nombre} <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

function AudienciaInner({ tipo, slug, nombre, img }: Props & { img: string | null }) {
  const votante = idVotante();
  const f = useQuery(api.audiencia.ficha, { tipo, slug, votante });
  const [rival, setRival] = useState<Rival | null | undefined>(undefined);
  useEffect(() => {
    let vivo = true;
    cargarRival(tipo, slug).then((r) => vivo && setRival(r)).catch(() => vivo && setRival(null));
    return () => {
      vivo = false;
    };
  }, [tipo, slug]);
  const idH = useId();

  return (
    <section aria-labelledby={idH} className="rtm-card mt-8 min-w-0 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id={idH} className="text-xl font-extrabold text-gray-900">La opinión de la audiencia</h2>
        {f && f.visitas.total >= MIN_VISITAS ? (
          <p className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            {fmtNum(f.visitas.total)} visitas
            {f.visitas.semana > 0 ? <> · {fmtNum(f.visitas.semana)} esta semana</> : null}
          </p>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-gray-600">Votos anónimos de lectores: uno por persona. No usamos estos datos como reseñas.</p>
      {f === undefined ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2" aria-busy="true" aria-label="Cargando la opinión de la audiencia">
          <div className="h-36 animate-pulse rounded-2xl bg-gray-100" />
          <div className="h-36 animate-pulse rounded-2xl bg-gray-100" />
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Puntuar tipo={tipo} slug={slug} nombre={nombre} datos={{ ...f.estrellas, mio: f.mio.estrellas }} />
          <Comprarias tipo={tipo} slug={slug} datos={{ ...f.compra, mio: f.mio.compra }} />
        </div>
      )}
      {rival ? <Duelo tipo={tipo} slug={slug} nombre={nombre} img={img} rival={rival} /> : null}
      <Link
        to="/favoritos-del-mes/"
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
      >
        <Trophy className="h-4 w-4 text-amber-300" aria-hidden="true" /> Ver los favoritos del mes
      </Link>
    </section>
  );
}

// Si el backend no tiene audiencia:* desplegado (o falla), la sección desaparece sin romper la ficha.
class Boundary extends Component<{ children: ReactNode }, { fallo: boolean }> {
  state = { fallo: false };
  static getDerivedStateFromError() {
    return { fallo: true };
  }
  componentDidCatch(e: unknown) {
    console.warn("[Audiencia] sección oculta:", e);
  }
  render() {
    return this.state.fallo ? null : this.props.children;
  }
}

export default function AudienciaFicha(props: Props & { img?: string | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const [montar, setMontar] = useState(false);
  useEffect(() => {
    if (esAutomatizado()) return; // prerender y bots: nada
    let io: IntersectionObserver | null = null;
    const cancelar = trasCarga(() => {
      if (!ref.current || typeof IntersectionObserver === "undefined") {
        setMontar(true);
        return;
      }
      io = new IntersectionObserver(
        (e) => {
          if (e.some((x) => x.isIntersecting)) {
            setMontar(true);
            io?.disconnect();
          }
        },
        { rootMargin: "900px 0px" },
      );
      io.observe(ref.current);
    });
    return () => {
      cancelar();
      io?.disconnect();
    };
  }, []);
  if (!montar) return <div ref={ref} aria-hidden="true" />;
  return (
    <Boundary>
      <LazyConvexProvider>
        <AudienciaInner {...props} img={props.img ?? null} />
      </LazyConvexProvider>
    </Boundary>
  );
}
