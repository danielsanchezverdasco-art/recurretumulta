import { useMemo, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { BadgeCheck, Check, Star, X } from "lucide-react";
import type { TipoVehiculoResena } from "@/components/ResenasVehiculo.tsx";

/* ── Moderación de reseñas (12/10/2026) ──────────────────────────────────
   Página PRIVADA: no está en el sitemap, no se prerenderiza, no se enlaza
   desde ningún sitio y lleva noindex. Acceso con ?clave= (la clave vive en
   la env Convex MODERACION_CLAVE, nunca en el repo).
   - Pestaña "Pendientes": aprobar / rechazar / destacar / verificado.
   - Pestaña "Importar": alta manual (p. ej. comentarios de Facebook con foto)
     a la misma cola de pendientes. */

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

type Accion = "aprobar" | "rechazar" | "destacar" | "quitarDestacada" | "verificar" | "quitarVerificado";

function ModerarInner() {
  const claveInicial = useMemo(
    () => new URLSearchParams(window.location.search).get("clave") ?? "",
    [],
  );
  const [clave, setClave] = useState(claveInicial);
  const [tab, setTab] = useState<"pendientes" | "importar">("pendientes");
  const [msg, setMsg] = useState<string | null>(null);

  useSeo({
    title: "Moderar reseñas",
    description: "Cola de moderación de opiniones de propietarios.",
    canonical: "/moderar-resenas",
    noindex: true,
  });

  const pendientes = useQuery(
    api.resenasVehiculos.listarPendientes,
    clave ? { clave, limite: 50 } : "skip",
  );
  const moderar = useMutation(api.resenasVehiculos.moderar);
  const generarUrlSubida = useMutation(api.resenasVehiculos.generarUrlSubida);
  const importarManual = useMutation(api.resenasVehiculos.importarManual);

  // Formulario de importación manual
  const [impTipo, setImpTipo] = useState<TipoVehiculoResena>("motos");
  const [impSlug, setImpSlug] = useState("");
  const [impNombre, setImpNombre] = useState("");
  const [impAutor, setImpAutor] = useState("");
  const [impEstrellas, setImpEstrellas] = useState(0);
  const [impTexto, setImpTexto] = useState("");
  const [impFbUrl, setImpFbUrl] = useState("");
  const [impFoto, setImpFoto] = useState<{ blob: Blob; preview: string } | null>(null);
  const [impEnviando, setImpEnviando] = useState(false);
  const impFotoRef = useRef<HTMLInputElement>(null);

  if (!clave) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-md px-4 pb-16 pt-24">
          <h1 className="text-xl font-extrabold text-gray-900">Moderar reseñas</h1>
          <p className="mt-2 text-sm text-gray-600">Introduce la clave de moderación.</p>
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const v = (new FormData(e.currentTarget).get("clave") as string) ?? "";
              if (v.trim()) window.location.search = `?clave=${encodeURIComponent(v.trim())}`;
            }}
          >
            <input
              name="clave"
              type="password"
              autoComplete="off"
              placeholder="Clave"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-red-600 px-6 py-3 text-sm font-black text-white"
            >
              Entrar
            </button>
          </form>
        </main>
        <SharedFooter editorial={false} />
      </div>
    );
  }

  async function accionar(id: Id<"resenasVehiculos">, accion: Accion) {
    setMsg(null);
    try {
      await moderar({ clave, id, accion });
      setMsg("Hecho.");
    } catch {
      setMsg("Error: ¿clave correcta?");
    }
  }

  async function onImpFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f || !f.type.startsWith("image/")) return;
    try {
      const blob = await comprimirFoto(f);
      if (impFoto) URL.revokeObjectURL(impFoto.preview);
      setImpFoto({ blob, preview: URL.createObjectURL(blob) });
    } catch {
      setMsg("No se pudo procesar la foto.");
    }
    if (impFotoRef.current) impFotoRef.current.value = "";
  }

  async function onImportar(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (impSlug.trim().length < 2 || impAutor.trim().length < 1 || impTexto.trim().length < 30) {
      setMsg("Revisa: slug, autor y texto (mín. 30 caracteres).");
      return;
    }
    setImpEnviando(true);
    try {
      const fotos: Id<"_storage">[] = [];
      if (impFoto) {
        const uploadUrl = await generarUrlSubida({});
        const res = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": "image/webp" },
          body: impFoto.blob,
        });
        if (!res.ok) throw new Error("upload");
        const { storageId } = (await res.json()) as { storageId: Id<"_storage"> };
        fotos.push(storageId);
      }
      await importarManual({
        clave,
        tipo: impTipo,
        slug: impSlug.trim(),
        nombreVehiculo: impNombre.trim() || impSlug.trim(),
        autor: impAutor.trim(),
        estrellas: impEstrellas >= 1 ? impEstrellas : undefined,
        texto: impTexto.trim(),
        fotos,
        consentimiento: true,
        fbCommentUrl: impFbUrl.trim() || undefined,
      });
      if (impFoto) URL.revokeObjectURL(impFoto.preview);
      setImpFoto(null);
      setImpSlug("");
      setImpNombre("");
      setImpAutor("");
      setImpEstrellas(0);
      setImpTexto("");
      setImpFbUrl("");
      setMsg("Importado a la cola de pendientes.");
      setTab("pendientes");
    } catch {
      setMsg("Error al importar. Revisa la clave y los campos.");
    } finally {
      setImpEnviando(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-20">
        <h1 className="text-xl font-extrabold text-gray-900">Moderar reseñas</h1>

        <div className="mt-4 flex gap-2">
          {(["pendientes", "importar"] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setMsg(null); }}
              className={`rounded-xl px-4 py-2 text-sm font-bold ${
                tab === t ? "bg-gray-900 text-white" : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {t === "pendientes" ? `Pendientes (${pendientes?.length ?? "…"})` : "Importar"}
            </button>
          ))}
        </div>

        {msg && (
          <p className="mt-3 rounded-xl bg-blue-50 p-3 text-sm font-semibold text-blue-800">{msg}</p>
        )}

        {tab === "pendientes" && (
          <div className="mt-4 space-y-4">
            {pendientes === undefined && <p className="text-sm text-gray-500">Cargando…</p>}
            {pendientes?.map((r) => (
              <article key={String(r._id)} className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 font-bold text-gray-700">
                    {r.vehiculoTipo}/{r.vehiculoSlug}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 font-bold ${
                    r.fuente === "facebook" ? "bg-blue-50 text-blue-700"
                    : r.fuente === "importacion" ? "bg-purple-50 text-purple-700"
                    : "bg-gray-100 text-gray-700"
                  }`}>
                    {r.fuente}
                  </span>
                  <span className="ml-auto text-gray-400">
                    {new Date(r.createdAt).toLocaleString("es-ES")}
                  </span>
                </div>
                <p className="mt-2 text-sm">
                  <span className="font-bold text-gray-900">{r.autor}</span>
                  {r.estrellas != null && (
                    <span className="ml-2 inline-flex items-center gap-0.5 text-amber-500">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-gray-700">{r.estrellas}/5</span>
                    </span>
                  )}
                </p>
                {r.titular && <p className="text-sm font-bold text-gray-900">{r.titular}</p>}
                <p className="mt-1 whitespace-pre-line text-sm text-gray-700">{r.texto}</p>
                {r.fotos.length > 0 && (
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {r.fotos.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Foto ${i + 1} de la reseña de ${r.autor}`}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full rounded-xl border border-gray-200 object-cover"
                      />
                    ))}
                  </div>
                )}
                {r.fbCommentUrl && (
                  <a href={r.fbCommentUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-blue-600 underline">
                    Ver comentario original
                  </a>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  <button onClick={() => accionar(r._id, "aprobar")} className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white">
                    <Check className="h-4 w-4" /> Aprobar
                  </button>
                  <button onClick={() => accionar(r._id, "rechazar")} className="inline-flex items-center gap-1 rounded-xl bg-red-600 px-3 py-2 text-xs font-black text-white">
                    <X className="h-4 w-4" /> Rechazar
                  </button>
                  <button
                    onClick={() => accionar(r._id, r.destacada ? "quitarDestacada" : "destacar")}
                    className="rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800"
                  >
                    {r.destacada ? "Quitar destacado" : "Probador del mes"}
                  </button>
                  <button
                    onClick={() => accionar(r._id, r.verificado ? "quitarVerificado" : "verificar")}
                    className="inline-flex items-center gap-1 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"
                  >
                    <BadgeCheck className="h-4 w-4" /> {r.verificado ? "Quitar verificado" : "Verificado"}
                  </button>
                </div>
              </article>
            ))}
            {pendientes && pendientes.length === 0 && (
              <p className="rounded-2xl border border-dashed border-gray-300 bg-white p-5 text-sm text-gray-600">
                No hay nada pendiente. La cola está limpia.
              </p>
            )}
          </div>
        )}

        {tab === "importar" && (
          <form onSubmit={onImportar} className="mt-4 space-y-4 rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-600">
              Alta manual a la cola de pendientes (p. ej. un comentario de Facebook con su foto).
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-bold text-gray-900">Tipo</label>
                <select
                  value={impTipo}
                  onChange={(e) => setImpTipo(e.target.value as TipoVehiculoResena)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="motos">motos</option>
                  <option value="coches">coches</option>
                  <option value="patinetes">patinetes</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-bold text-gray-900">Nota</label>
                <select
                  value={impEstrellas}
                  onChange={(e) => setImpEstrellas(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value={0}>Sin nota</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}/5</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-900">Slug de la ficha</label>
              <input
                value={impSlug}
                onChange={(e) => setImpSlug(e.target.value)}
                placeholder="yamaha-mt-07-2024-..."
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-900">Nombre del vehículo</label>
              <input
                value={impNombre}
                onChange={(e) => setImpNombre(e.target.value)}
                placeholder="Yamaha MT-07"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-900">Autor</label>
              <input
                value={impAutor}
                onChange={(e) => setImpAutor(e.target.value)}
                maxLength={60}
                placeholder="Nombre en Facebook"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-900">Texto</label>
              <textarea
                value={impTexto}
                onChange={(e) => setImpTexto(e.target.value)}
                rows={4}
                maxLength={2000}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-900">URL del comentario (opcional)</label>
              <input
                value={impFbUrl}
                onChange={(e) => setImpFbUrl(e.target.value)}
                placeholder="https://www.facebook.com/…"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <span className="mb-1 block text-sm font-bold text-gray-900">Foto (1, opcional)</span>
              <input ref={impFotoRef} type="file" accept="image/*" onChange={onImpFoto} className="hidden" id="imp-foto" />
              <label htmlFor="imp-foto" className="inline-block cursor-pointer rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-2 text-sm font-bold text-gray-700">
                Elegir foto
              </label>
              {impFoto && (
                <img src={impFoto.preview} alt="Vista previa" width={200} height={150} className="mt-2 aspect-[4/3] w-40 rounded-xl border object-cover" />
              )}
            </div>
            <button
              type="submit"
              disabled={impEnviando}
              className="w-full rounded-xl bg-gray-900 px-6 py-3 text-sm font-black text-white disabled:opacity-50"
            >
              {impEnviando ? "Importando…" : "Importar a pendientes"}
            </button>
          </form>
        )}
      </main>
      <SharedFooter editorial={false} />
    </div>
  );
}

export default function ModerarResenasPage() {
  return (
    <LazyConvexProvider>
      <ModerarInner />
    </LazyConvexProvider>
  );
}
