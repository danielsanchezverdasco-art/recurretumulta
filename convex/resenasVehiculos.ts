import { ConvexError, v } from "convex/values";
import { mutation, query, type MutationCtx } from "./_generated/server";
import type { Id } from "./_generated/dataModel";

/* ── Reseñas de usuarios con fotos ("cuéntalo como un periodista") ──────────
   Opiniones reales de propietarios en cada ficha de vehículo.
   Fuentes: "web" (formulario), "facebook" (cosecha de comentarios de
   publicaciones propias), "importacion" (manual). NADA se publica sin
   moderación: todo entra en "pendiente" y solo "aprobada" es visible.
   La clave de moderación/importación vive en la env Convex MODERACION_CLAVE
   (nunca en el repo): `npx convex env set MODERACION_CLAVE=...` */

const tipoVehiculo = v.union(
  v.literal("coches"),
  v.literal("motos"),
  v.literal("patinetes"),
);

const PALABRAS_SPAM = [
  "viagra", "cialis", "casino", "porno", "xxx", "cripto", "bitcoin",
  "http://", "https://", "www.",
];

function esSpam(texto: string): boolean {
  const t = texto.toLowerCase();
  return PALABRAS_SPAM.some((w) => t.includes(w));
}

function checkClave(clave: string | undefined) {
  const esperada = process.env.MODERACION_CLAVE;
  if (!esperada || clave !== esperada) {
    throw new ConvexError({ code: "FORBIDDEN", message: "No autorizado" });
  }
}

/* URL firmada para subir fotos desde el navegador (el cliente comprime a
   WebP <300KB antes de subir). */
export const generarUrlSubida = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

const argsResenaBase = {
  tipo: tipoVehiculo,
  slug: v.string(),
  nombreVehiculo: v.string(),
  autor: v.string(),
  estrellas: v.optional(v.number()),
  titular: v.optional(v.string()),
  texto: v.string(),
  fotos: v.array(v.id("_storage")),
  consentimiento: v.boolean(),
};

type ArgsResena = {
  tipo: "coches" | "motos" | "patinetes";
  slug: string;
  nombreVehiculo: string;
  autor: string;
  estrellas?: number;
  titular?: string;
  texto: string;
  fotos: Id<"_storage">[];
  consentimiento: boolean;
};

async function validarResena(ctx: MutationCtx, args: ArgsResena) {
  const autor = args.autor.trim();
  const texto = args.texto.trim();
  const titular = args.titular?.trim() || undefined;
  if (autor.length < 1 || autor.length > 60) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "El nombre debe tener entre 1 y 60 caracteres" });
  }
  if (args.estrellas !== undefined && (!Number.isInteger(args.estrellas) || args.estrellas < 1 || args.estrellas > 5)) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "Las estrellas deben ser entre 1 y 5" });
  }
  if (titular !== undefined && titular.length > 90) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "El titular no puede superar 90 caracteres" });
  }
  if (texto.length < 30 || texto.length > 2000) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "La opinión debe tener entre 30 y 2000 caracteres" });
  }
  if (args.slug.length < 1 || args.slug.length > 160) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "Vehículo no válido" });
  }
  if (args.nombreVehiculo.trim().length < 1 || args.nombreVehiculo.length > 120) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "Vehículo no válido" });
  }
  if (args.fotos.length > 6) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "Máximo 6 fotos por opinión" });
  }
  if (!args.consentimiento) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "Debes autorizar la publicación de tus fotos" });
  }
  if (esSpam(texto) || esSpam(autor) || (titular && esSpam(titular))) {
    throw new ConvexError({ code: "BAD_REQUEST", message: "No se ha podido enviar. Inténtalo de nuevo." });
  }
  // Las fotos deben existir en el storage (se subieron con generarUrlSubida)
  for (const sid of args.fotos) {
    const meta = await ctx.storage.getMetadata(sid);
    if (!meta) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Una de las fotos no se subió correctamente" });
    }
  }
  // Rate-limit: máx 3 reseñas/hora por (vehículo + autor)
  const unaHoraAtras = Date.now() - 3600_000;
  let recientes = 0;
  for (const estado of ["pendiente", "aprobada"] as const) {
    const docs = await ctx.db
      .query("resenasVehiculos")
      .withIndex("by_vehiculo_estado", (q) =>
        q.eq("vehiculoTipo", args.tipo).eq("vehiculoSlug", args.slug).eq("estado", estado),
      )
      .collect();
    for (const d of docs) {
      if (d.autor.trim().toLowerCase() === autor.toLowerCase() && d.createdAt >= unaHoraAtras) {
        recientes++;
      }
    }
  }
  if (recientes >= 3) {
    throw new ConvexError({ code: "RATE_LIMITED", message: "Has enviado demasiadas opiniones seguidas. Espera un poco." });
  }
  return { autor, texto, titular };
}

/* Envío público desde el formulario de la ficha. Siempre "pendiente". */
export const enviarResena = mutation({
  args: { ...argsResenaBase, honeypot: v.optional(v.string()) },
  handler: async (ctx, args) => {
    // Honeypot: los bots lo rellenan; error genérico sin dar pistas.
    if (args.honeypot && args.honeypot.trim().length > 0) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "No se ha podido enviar. Inténtalo de nuevo." });
    }
    const { autor, texto, titular } = await validarResena(ctx, args);
    return await ctx.db.insert("resenasVehiculos", {
      vehiculoTipo: args.tipo,
      vehiculoSlug: args.slug,
      vehiculoNombre: args.nombreVehiculo.trim(),
      autor,
      estrellas: args.estrellas,
      titular,
      texto,
      fotos: args.fotos.map((storageId) => ({ storageId })),
      fuente: "web",
      estado: "pendiente",
      consentimiento: true,
      verificado: false,
      destacada: false,
      createdAt: Date.now(),
    });
  },
});

/* Lista pública: solo aprobadas, con URLs de fotos resueltas. */
export const listarAprobadas = query({
  args: { tipo: tipoVehiculo, slug: v.string(), limite: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const docs = await ctx.db
      .query("resenasVehiculos")
      .withIndex("by_vehiculo_estado", (q) =>
        q.eq("vehiculoTipo", args.tipo).eq("vehiculoSlug", args.slug).eq("estado", "aprobada"),
      )
      .order("desc")
      .take(Math.min(args.limite ?? 20, 50));
    return await Promise.all(
      docs.map(async (d) => {
        const fotos: string[] = [];
        for (const f of d.fotos) {
          const url = await ctx.storage.getUrl(f.storageId);
          if (url) fotos.push(url);
        }
        return {
          _id: d._id,
          autor: d.autor,
          estrellas: d.estrellas ?? null,
          titular: d.titular ?? null,
          texto: d.texto,
          fotos,
          fuente: d.fuente,
          fbCommentUrl: d.fbCommentUrl ?? null,
          verificado: d.verificado,
          destacada: d.destacada,
          createdAt: d.createdAt,
        };
      }),
    );
  },
});

/* Resumen para AggregateRating: nº de aprobadas y media (1 decimal). */
export const resumen = query({
  args: { tipo: tipoVehiculo, slug: v.string() },
  handler: async (ctx, args) => {
    const docs = await ctx.db
      .query("resenasVehiculos")
      .withIndex("by_vehiculo_estado", (q) =>
        q.eq("vehiculoTipo", args.tipo).eq("vehiculoSlug", args.slug).eq("estado", "aprobada"),
      )
      .collect();
    const conNota = docs.filter((d) => d.estrellas !== undefined);
    const media =
      conNota.length > 0
        ? Math.round((conNota.reduce((s, d) => s + (d.estrellas as number), 0) / conNota.length) * 10) / 10
        : null;
    return { count: docs.length, media };
  },
});

/* Distribución de estrellas 5→1 (para las barras del resumen). */
export const distribucion = query({
  args: { tipo: tipoVehiculo, slug: v.string() },
  handler: async (ctx, args) => {
    const docs = await ctx.db
      .query("resenasVehiculos")
      .withIndex("by_vehiculo_estado", (q) =>
        q.eq("vehiculoTipo", args.tipo).eq("vehiculoSlug", args.slug).eq("estado", "aprobada"),
      )
      .collect();
    const dist: Record<string, number> = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };
    for (const d of docs) {
      if (d.estrellas !== undefined) dist[String(d.estrellas)]++;
    }
    return dist;
  },
});

/* Cola de moderación: pendientes de todos los vehículos (requiere clave). */
export const listarPendientes = query({
  args: { clave: v.string(), limite: v.optional(v.number()) },
  handler: async (ctx, args) => {
    checkClave(args.clave);
    const docs = await ctx.db
      .query("resenasVehiculos")
      .withIndex("by_estado", (q) => q.eq("estado", "pendiente"))
      .order("desc")
      .take(Math.min(args.limite ?? 50, 100));
    return await Promise.all(
      docs.map(async (d) => {
        const fotos: string[] = [];
        for (const f of d.fotos) {
          const url = await ctx.storage.getUrl(f.storageId);
          if (url) fotos.push(url);
        }
        return { ...d, fotos };
      }),
    );
  },
});

/* Moderación: aprobar / rechazar / destacar / verificado (requiere clave). */
export const moderar = mutation({
  args: {
    clave: v.string(),
    id: v.id("resenasVehiculos"),
    accion: v.union(
      v.literal("aprobar"),
      v.literal("rechazar"),
      v.literal("destacar"),
      v.literal("quitarDestacada"),
      v.literal("verificar"),
      v.literal("quitarVerificado"),
    ),
  },
  handler: async (ctx, args) => {
    checkClave(args.clave);
    const patch: Record<string, boolean | string> = {};
    switch (args.accion) {
      case "aprobar":
        patch.estado = "aprobada";
        break;
      case "rechazar":
        patch.estado = "rechazada";
        break;
      case "destacar":
        patch.destacada = true;
        break;
      case "quitarDestacada":
        patch.destacada = false;
        break;
      case "verificar":
        patch.verificado = true;
        break;
      case "quitarVerificado":
        patch.verificado = false;
        break;
    }
    await ctx.db.patch(args.id, patch);
    return true;
  },
});

/* Cosecha de Facebook: inserta comentarios como pendientes (dedupe por
   fbCommentId). Requiere clave. Las estrellas son opcionales: un comentario
   de FB rara vez trae nota → null = "sin nota". */
export const importarFacebook = mutation({
  args: {
    clave: v.string(),
    items: v.array(
      v.object({
        tipo: tipoVehiculo,
        slug: v.string(),
        nombreVehiculo: v.string(),
        autor: v.string(),
        texto: v.string(),
        estrellas: v.optional(v.number()),
        fbCommentId: v.string(),
        fbCommentUrl: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    checkClave(args.clave);
    let nuevos = 0;
    let duplicados = 0;
    for (const item of args.items) {
      const existente = await ctx.db
        .query("resenasVehiculos")
        .withIndex("by_fbCommentId", (q) => q.eq("fbCommentId", item.fbCommentId))
        .first();
      if (existente) {
        duplicados++;
        continue;
      }
      const texto = item.texto.trim();
      if (texto.length < 15 || texto.length > 2000 || esSpam(texto)) continue;
      await ctx.db.insert("resenasVehiculos", {
        vehiculoTipo: item.tipo,
        vehiculoSlug: item.slug,
        vehiculoNombre: item.nombreVehiculo.trim(),
        autor: item.autor.trim().slice(0, 60) || "Usuario de Facebook",
        estrellas: item.estrellas,
        titular: undefined,
        texto,
        fotos: [],
        fuente: "facebook",
        fbCommentId: item.fbCommentId,
        fbCommentUrl: item.fbCommentUrl,
        fbAutor: item.autor.trim().slice(0, 60),
        estado: "pendiente",
        consentimiento: false, // pendiente de revisión manual antes de publicar
        verificado: false,
        destacada: false,
        createdAt: Date.now(),
      });
      nuevos++;
    }
    return { nuevos, duplicados };
  },
});

/* Importación manual desde la página de moderación (requiere clave).
   La foto se sube antes con generarUrlSubida y se pasa su storageId. */
export const importarManual = mutation({
  args: {
    clave: v.string(),
    ...argsResenaBase,
    fbCommentUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    checkClave(args.clave);
    const { autor, texto, titular } = await validarResena(ctx, { ...args, consentimiento: true });
    return await ctx.db.insert("resenasVehiculos", {
      vehiculoTipo: args.tipo,
      vehiculoSlug: args.slug,
      vehiculoNombre: args.nombreVehiculo.trim(),
      autor,
      estrellas: args.estrellas,
      titular,
      texto,
      fotos: args.fotos.map((storageId) => ({ storageId })),
      fuente: "importacion",
      fbCommentUrl: args.fbCommentUrl,
      estado: "pendiente",
      consentimiento: true,
      verificado: false,
      destacada: false,
      createdAt: Date.now(),
    });
  },
});
