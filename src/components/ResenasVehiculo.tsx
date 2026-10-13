import { Component, type ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { Lightbox } from "@/components/motion.tsx";
import { CountUp } from "@/components/motion-lite.tsx";
import { BadgeCheck, Camera, Star, X } from "lucide-react";

/* Icono Facebook inline (lucide-react ya no trae iconos de marcas). */
function IconoFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ── Opiniones de propietarios con fotos ("cuéntalo como un periodista") ──
   Sección reutilizable para fichas de coches, motos y patinetes.
   - Lee reseñas APROBADAS de Convex (nada sin moderar sale aquí).
   - Formulario público con fotos (compresión a WebP en cliente, <300KB).
   - Emite los nodos schema.org (aggregateRating + review) vía onDatosSchema
     para que la página los fusione con su JSON-LD base EN CLIENTE
     (en el prerender Convex está abortado: no hay datos → no hay nodos). */

export type TipoVehiculoResena = "coches" | "motos" | "patinetes";

export type ResenaSchemaExtra = {
  aggregateRating: { "@type": "AggregateRating"; ratingValue: number; reviewCount: number } | null;
  reviews: Record<string, unknown>[];
};

type Props = {
  tipo: TipoVehiculoResena;
  slug: string;
  nombre: string;
  onDatosSchema?: (d: ResenaSchemaExtra | null) => void;
};

const ETIQUETA_TIPO: Record<TipoVehiculoResena, string> = {
  coches: "coche",
  motos: "moto",
  patinetes: "patinete",
};

/* Comprime una imagen en el navegador: WebP, lado máx 1600px, <300KB. */
async function comprimirFoto(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const maxSide = 1600;
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const w = Math.max(1, Math.round(bitmap.width * scale));
  const h = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas no disponible");
  ctx.drawImage(bitmap, 0, 0, w, h);
  bitmap.close();
  let quality = 0.92;
  let blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/webp", quality));
  while (blob && blob.size > 300 * 1024 && quality > 0.52) {
    quality = Math.round((quality - 0.1) * 100) / 100;
    blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/webp", quality));
  }
  if (!blob) throw new Error("No se pudo comprimir la imagen");
  return blob;
}

function Estrellas({ valor, className = "h-4 w-4" }: { valor: number | null; className?: string }) {
  if (valor == null) return <span className="text-xs text-gray-400">sin nota</span>;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${valor} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${className} ${i <= Math.round(valor) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </span>
  );
}

function ResenasVehiculoInner({ tipo, slug, nombre, onDatosSchema }: Props) {
  const resumen = useQuery(api.resenasVehiculos.resumen, { tipo, slug });
  const distribucion = useQuery(api.resenasVehiculos.distribucion, { tipo, slug });
  const resenas = useQuery(api.resenasVehiculos.listarAprobadas, { tipo, slug, limite: 20 });
  const generarUrlSubida = useMutation(api.resenasVehiculos.generarUrlSubida);
  const enviarResena = useMutation(api.resenasVehiculos.enviarResena);

  const [fotoAmpliada, setFotoAmpliada] = useState<string | null>(null);

  // Formulario
  const [autor, setAutor] = useState("");
  const [estrellas, setEstrellas] = useState(0);
  const [titular, setTitular] = useState("");
  const [texto, setTexto] = useState("");
  const [fotos, setFotos] = useState<{ blob: Blob; preview: string; nombre: string }[]>([]);
  const [consentimiento, setConsentimiento] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviadoOk, setEnviadoOk] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const inputFotosRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      fotos.forEach((f) => URL.revokeObjectURL(f.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ordenadas = useMemo(() => {
    if (!resenas) return null;
    return [...resenas].sort((a, b) => Number(b.destacada) - Number(a.destacada) || b.createdAt - a.createdAt);
  }, [resenas]);

  // Nodos schema.org para la página (solo con datos reales aprobados).
  useEffect(() => {
    if (!onDatosSchema) return;
    if (!resumen || resumen.count < 1 || !ordenadas) {
      onDatosSchema(null);
      return;
    }
    const reviews = ordenadas.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.autor },
      ...(r.estrellas != null
        ? { reviewRating: { "@type": "Rating", ratingValue: r.estrellas, bestRating: 5 } }
        : {}),
      ...(r.titular ? { name: r.titular } : {}),
      reviewBody: r.texto,
    }));
    onDatosSchema({
      aggregateRating:
        resumen.media != null
          ? { "@type": "AggregateRating", ratingValue: resumen.media, reviewCount: resumen.count }
          : null,
      reviews,
    });
  }, [onDatosSchema, resumen, ordenadas]);

  const etiqueta = ETIQUETA_TIPO[tipo];

  async function onElegirFotos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).slice(0, 6 - fotos.length);
    if (files.length === 0) return;
    setError(null);
    try {
      const nuevas: { blob: Blob; preview: string; nombre: string }[] = [];
      for (const f of files) {
        if (!f.type.startsWith("image/")) continue;
        const blob = await comprimirFoto(f);
        nuevas.push({ blob, preview: URL.createObjectURL(blob), nombre: f.name });
      }
      setFotos((prev) => [...prev, ...nuevas].slice(0, 6));
    } catch {
      setError("No se pudieron procesar las fotos. Prueba con otras imágenes.");
    }
    if (inputFotosRef.current) inputFotosRef.current.value = "";
  }

  function quitarFoto(idx: number) {
    setFotos((prev) => {
      URL.revokeObjectURL(prev[idx].preview);
      return prev.filter((_, i) => i !== idx);
    });
  }

  async function onEnviar(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (honeypotRef.current?.value) {
      setError("No se ha podido enviar. Inténtalo de nuevo.");
      return;
    }
    const a = autor.trim();
    const t = texto.trim();
    if (a.length < 1 || a.length > 60) return setError("Escribe tu nombre o nick (máx. 60 caracteres).");
    if (t.length < 30) return setError("Cuéntanos un poco más: mínimo 30 caracteres.");
    if (t.length > 2000) return setError("La opinión no puede superar los 2000 caracteres.");
    if (!consentimiento) return setError("Marca la casilla de autorización de las fotos para poder publicarlas.");
    setEnviando(true);
    try {
      // 1) Subir fotos (ya comprimidas) y recoger sus storageIds
      const storageIds: Id<"_storage">[] = [];
      for (const f of fotos) {
        const uploadUrl = await generarUrlSubida({});
        const res = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": "image/webp" },
          body: f.blob,
        });
        if (!res.ok) throw new Error("upload");
        const { storageId } = (await res.json()) as { storageId: Id<"_storage"> };
        storageIds.push(storageId);
      }
      // 2) Enviar la reseña (queda pendiente de moderación)
      await enviarResena({
        tipo,
        slug,
        nombreVehiculo: nombre,
        autor: a,
        estrellas: estrellas >= 1 ? estrellas : undefined,
        titular: titular.trim() || undefined,
        texto: t,
        fotos: storageIds,
        consentimiento: true,
        honeypot: "",
      });
      fotos.forEach((f) => URL.revokeObjectURL(f.preview));
      setFotos([]);
      setAutor("");
      setEstrellas(0);
      setTitular("");
      setTexto("");
      setConsentimiento(false);
      setEnviadoOk(true);
    } catch (err) {
      const msg =
        err instanceof Error && "data" in (err as object)
          ? String((err as { data?: { message?: string } }).data?.message ?? "")
          : "";
      setError(
        msg.includes("RATE_LIMITED") || msg.includes("demasiadas")
          ? "Has enviado demasiadas opiniones seguidas. Espera un poco e inténtalo de nuevo."
          : "No se ha podido enviar tu opinión. Revisa los campos e inténtalo de nuevo.",
      );
    } finally {
      setEnviando(false);
    }
  }

  const totalVotos = distribucion ? Object.values(distribucion).reduce((s, n) => s + n, 0) : 0;

  return (
    <section aria-label="Opiniones de propietarios" className="mt-12">
      <h2 className="text-2xl font-extrabold text-gray-900">Opiniones de propietarios</h2>
      <p className="mt-1 text-sm text-gray-600">
        Gente real que tiene o ha probado {etiqueta === "coche" ? "este coche" : etiqueta === "moto" ? "esta moto" : "este patinete"}.
        Sin publirreportajes: si la envías, la revisamos antes de publicarla.
      </p>

      {/* Resumen */}
      {resumen && resumen.count > 0 && (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900">
                {resumen.media != null ? (
                  <CountUp to={resumen.media} decimals={1} duration={900} />
                ) : (
                  "–"
                )}
              </div>
              <Estrellas valor={resumen.media} />
              <div className="mt-1 text-xs text-gray-500">
                {resumen.count} {resumen.count === 1 ? "opinión" : "opiniones"}
              </div>
            </div>
            {distribucion && totalVotos > 0 && (
              <div className="flex-1 space-y-1" aria-hidden="true">
                {[5, 4, 3, 2, 1].map((n) => {
                  const pct = Math.round(((distribucion[String(n)] ?? 0) / totalVotos) * 100);
                  return (
                    <div key={n} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-3 text-right font-bold">{n}</span>
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-8">{pct}%</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lista de opiniones */}
      <div className="mt-6 space-y-4">
        {ordenadas?.map((r) => (
          <article key={String(r._id)} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-gray-900">{r.autor}</span>
              {r.verificado && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                  <BadgeCheck className="h-3.5 w-3.5" /> Propietario verificado
                </span>
              )}
              {r.destacada && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> Probador del mes
                </span>
              )}
              {r.fuente === "facebook" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700">
                  <IconoFacebook className="h-3.5 w-3.5" /> Vía Facebook
                </span>
              )}
              <span className="ml-auto">
                <Estrellas valor={r.estrellas} />
              </span>
            </div>
            {r.titular && <h3 className="mt-2 font-extrabold text-gray-900">{r.titular}</h3>}
            <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-gray-700">{r.texto}</p>
            {r.fotos.length > 0 && (
              <div className="mt-3 grid grid-cols-3 gap-2">
                {r.fotos.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFotoAmpliada(src)}
                    className="overflow-hidden rounded-xl border border-gray-100 transition hover:opacity-90"
                    aria-label={`Ampliar foto ${i + 1} de ${r.autor}`}
                  >
                    <img
                      src={src}
                      alt={`Foto de ${nombre} subida por ${r.autor}`}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            {r.fbCommentUrl && (
              <a
                href={r.fbCommentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-blue-600 underline"
              >
                Ver comentario original en Facebook
              </a>
            )}
          </article>
        ))}
        {ordenadas && ordenadas.length === 0 && (
          <p className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 text-sm text-gray-600">
            Aún no hay opiniones publicadas de {etiqueta === "coche" ? "este coche" : etiqueta === "moto" ? "esta moto" : "este patinete"}.
            Sé la primera persona en contarlo.
          </p>
        )}
      </div>

      {/* Formulario */}
      <div className="mt-8 rounded-2xl border-2 border-red-100 bg-white p-5 sm:p-6">
        <h3 className="text-lg font-extrabold text-gray-900">
          ¿Tienes {etiqueta === "coche" ? "este coche" : etiqueta === "moto" ? "esta moto" : "este patinete"}? Cuéntalo como un periodista
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Sube tus fotos reales y tu opinión honesta: qué tal va, qué te gusta, qué cambiarías.
          La revisamos antes de publicarla.
        </p>

        {enviadoOk ? (
          <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
            ¡Gracias! Tu opinión está en revisión y se publicará tras moderarla.
          </div>
        ) : (
          <form onSubmit={onEnviar} className="mt-4 space-y-4">
            <div>
              <label htmlFor="res-nombre" className="mb-1 block text-sm font-bold text-gray-900">
                Tu nombre o nick
              </label>
              <input
                id="res-nombre"
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                maxLength={60}
                placeholder="Ej. Marta G."
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
                autoComplete="nickname"
              />
            </div>

            <div>
              <span id="res-estrellas-label" className="mb-1 block text-sm font-bold text-gray-900">
                Tu nota (opcional)
              </span>
              <div className="flex items-center gap-1" role="group" aria-labelledby="res-estrellas-label">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setEstrellas(estrellas === n ? 0 : n)}
                    aria-label={`${n} ${n === 1 ? "estrella" : "estrellas"}`}
                    aria-pressed={estrellas === n}
                    className="rounded p-1 transition hover:scale-110 motion-reduce:hover:scale-100"
                  >
                    <Star
                      className={`h-7 w-7 ${n <= estrellas ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-300"}`}
                    />
                  </button>
                ))}
                {estrellas > 0 && (
                  <span className="ml-2 text-sm font-bold text-gray-700">{estrellas}/5</span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="res-titular" className="mb-1 block text-sm font-bold text-gray-900">
                Titular (opcional)
              </label>
              <input
                id="res-titular"
                type="text"
                value={titular}
                onChange={(e) => setTitular(e.target.value)}
                maxLength={90}
                placeholder="Ej. Perfecta para ciudad, justa en carretera"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="res-texto" className="mb-1 block text-sm font-bold text-gray-900">
                Tu opinión
              </label>
              <textarea
                id="res-texto"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                rows={5}
                maxLength={2000}
                placeholder="Cuéntalo como un periodista: cómo va, consumo/autonomía real, comodidad, fallos que has visto, si la recomiendas…"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              />
              <div className="mt-1 text-right text-xs text-gray-400">
                {texto.trim().length}/2000 (mínimo 30)
              </div>
            </div>

            <div>
              <span className="mb-1 block text-sm font-bold text-gray-900">Tus fotos (máx. 6, opcional)</span>
              <input
                ref={inputFotosRef}
                type="file"
                accept="image/*"
                multiple
                onChange={onElegirFotos}
                className="hidden"
                id="res-fotos"
              />
              <label
                htmlFor="res-fotos"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm font-bold text-gray-700 transition hover:border-red-400 hover:text-red-700"
              >
                <Camera className="h-5 w-5" /> Elegir fotos
              </label>
              <p className="mt-1 text-xs text-gray-400">Se comprimen automáticamente antes de subirse.</p>
              {fotos.length > 0 && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {fotos.map((f, i) => (
                    <div key={i} className="relative overflow-hidden rounded-xl border border-gray-200">
                      <img src={f.preview} alt={`Foto ${i + 1} para tu opinión`} width={300} height={225} className="aspect-[4/3] w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => quitarFoto(i)}
                        aria-label={`Quitar foto ${i + 1}`}
                        className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white transition hover:bg-black/80"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-start gap-2">
              <input
                id="res-consent"
                type="checkbox"
                checked={consentimiento}
                onChange={(e) => setConsentimiento(e.target.checked)}
                className="mt-1 h-4 w-4 accent-red-600"
              />
              <label htmlFor="res-consent" className="text-xs leading-relaxed text-gray-600">
                Soy el autor de estas fotos y autorizo su publicación en RecurreTuMulta.online junto a mi opinión.
              </label>
            </div>

            {/* Honeypot anti-bots: invisible para humanos */}
            <input
              ref={honeypotRef}
              type="text"
              name="empresa"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />

            {error && (
              <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="w-full rounded-xl bg-red-600 px-6 py-3 text-sm font-black text-white transition hover:bg-red-700 disabled:opacity-50 sm:w-auto"
            >
              {enviando ? "Enviando…" : "Enviar mi opinión"}
            </button>
            <p className="text-[11px] leading-relaxed text-gray-400">
              Al enviar aceptas que tu opinión y tus fotos se publiquen en esta ficha tras nuestra revisión.
              Puedes pedir la eliminación escribiendo a hola@recurretumulta.online.
            </p>
          </form>
        )}
      </div>

      {fotoAmpliada && (
        <Lightbox src={fotoAmpliada} alt={`Foto ampliada de ${nombre}`} onClose={() => setFotoAmpliada(null)} />
      )}
    </section>
  );
}

// 12/10/2026: si el backend Convex aún no tiene resenasVehiculos:* desplegado
// (o falla la red), la sección se oculta en vez de tumbar la página entera.
class ResenasBoundary extends Component<{ children: ReactNode }, { fallo: boolean }> {
  state = { fallo: false };
  static getDerivedStateFromError() {
    return { fallo: true };
  }
  componentDidCatch(e: unknown) {
    console.warn("[ResenasVehiculo] sección oculta:", e);
  }
  render() {
    return this.state.fallo ? null : this.props.children;
  }
}

// 13/10/2026: oculta hasta que el backend de reseñas (resenasVehiculos:*) esté
// desplegado en Convex; así ni el HTML prerenderizado ni la app la muestran,
// igual que producción 6ac8e7ec. Poner a true tras el deploy de Convex.
const RESENAS_ACTIVAS = false;

export default function ResenasVehiculo(props: Props) {
  if (!RESENAS_ACTIVAS) return null;
  return (
    <ResenasBoundary>
      <LazyConvexProvider>
        <ResenasVehiculoInner {...props} />
      </LazyConvexProvider>
    </ResenasBoundary>
  );
}
