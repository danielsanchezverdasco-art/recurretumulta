import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ADMIN_EMAILS } from "./users.ts";
import { requireUser, getUserFromSession } from "./authSimple";

// Helper para verificar que el usuario es admin
async function requireAdmin(ctx: any, sessionToken?: string) {
  const user = await requireUser(ctx, sessionToken);
  const isAdmin = user.isAdmin === true || ADMIN_EMAILS.includes(user.email ?? "");
  if (!isAdmin) {
    throw new ConvexError({ code: "FORBIDDEN", message: "Solo administradores" });
  }
  return user;
}

async function isAdminSession(ctx: any, sessionToken?: string) {
  const user = await getUserFromSession(ctx, sessionToken);
  return !!user && (user.isAdmin === true || ADMIN_EMAILS.includes(user.email ?? ""));
}

// ── Queries ────────────────────────────────────────────────────────────────

/** Todos los posts publicados (para el blog público) */
export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .order("desc")
      .collect();
  },
});

/** Todos los posts (admin — incluye borradores) */
export const listAll = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!(await isAdminSession(ctx, args.sessionToken))) return null;
    return await ctx.db.query("blogPosts").order("desc").collect();
  },
});

/** Un post por slug (público si publicado, cualquier estado si es admin) */
export const getBySlug = query({
  args: { slug: v.string(), sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    if (!post) return null;
    if (post.published) return post;
    // Si no publicado, solo devolver al admin
    if (await isAdminSession(ctx, args.sessionToken)) return post;
    return null;
  },
});

// ── Mutations ──────────────────────────────────────────────────────────────

export const create = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    category: v.string(),
    date: v.string(),
    readTime: v.number(),
    keywords: v.array(v.string()),
    content: v.string(),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.sessionToken);
    // Verificar slug único
    const existing = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    if (existing) throw new ConvexError({ code: "CONFLICT", message: "Ya existe un artículo con ese slug" });
    const now = new Date().toISOString();
    const { sessionToken: _st, ...fields } = args;
    return await ctx.db.insert("blogPosts", {
      ...fields,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    id: v.id("blogPosts"),
    slug: v.optional(v.string()),
    title: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    date: v.optional(v.string()),
    readTime: v.optional(v.number()),
    keywords: v.optional(v.array(v.string())),
    content: v.optional(v.string()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.sessionToken);
    const { id, sessionToken: _st, ...fields } = args;
    // Si cambia el slug, verificar que no exista
    if (fields.slug) {
      const existing = await ctx.db
        .query("blogPosts")
        .withIndex("by_slug", (q) => q.eq("slug", fields.slug!))
        .unique();
      if (existing && existing._id !== id) {
        throw new ConvexError({ code: "CONFLICT", message: "Ya existe un artículo con ese slug" });
      }
    }
    await ctx.db.patch("blogPosts", id, { ...fields, updatedAt: new Date().toISOString() });
  },
});

export const remove = mutation({
  args: { sessionToken: v.optional(v.string()), id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.sessionToken);
    await ctx.db.delete("blogPosts", args.id);
  },
});

export const togglePublished = mutation({
  args: { sessionToken: v.optional(v.string()), id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.sessionToken);
    const post = await ctx.db.get("blogPosts", args.id);
    if (!post) throw new ConvexError({ code: "NOT_FOUND", message: "Artículo no encontrado" });
    await ctx.db.patch("blogPosts", args.id, { published: !post.published, updatedAt: new Date().toISOString() });
  },
});

// ── Admin por token (sync local → Convex, 05/10/2026) ─────────────────────
// Protegido con LANZAMIENTOS_ADMIN_TOKEN (mismo patrón que lanzamientos.ts).
// Permite subir correcciones hechas en el fichero generado blog-posts-db.ts
// sin necesidad de sesión de usuario admin.
export const adminUpsertBySlug = mutation({
  args: {
    token: v.string(),
    slug: v.string(),
    title: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    date: v.optional(v.string()),
    readTime: v.optional(v.number()),
    keywords: v.optional(v.array(v.string())),
    content: v.optional(v.string()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const expected = process.env.LANZAMIENTOS_ADMIN_TOKEN;
    if (!expected || args.token !== expected) {
      throw new ConvexError("FORBIDDEN");
    }
    const { token: _t, slug, ...fields } = args;
    const clean: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(fields)) {
      if (val !== undefined) clean[k] = val;
    }
    const existing = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
    const now = new Date().toISOString();
    if (existing) {
      await ctx.db.patch(existing._id, { ...clean, updatedAt: now });
      return { ok: true, op: "patched" as const };
    }
    for (const f of ["title", "excerpt", "category", "date", "readTime", "keywords", "content"] as const) {
      if (clean[f] === undefined) {
        throw new ConvexError({ code: "BAD_REQUEST", message: `Falta campo obligatorio para crear: ${f}` });
      }
    }
    await ctx.db.insert("blogPosts", {
      slug,
      title: clean.title as string,
      excerpt: clean.excerpt as string,
      category: clean.category as string,
      date: clean.date as string,
      readTime: clean.readTime as number,
      keywords: clean.keywords as string[],
      content: clean.content as string,
      published: (clean.published as boolean | undefined) ?? true,
      createdAt: now,
      updatedAt: now,
    });
    return { ok: true, op: "created" as const };
  },
});
