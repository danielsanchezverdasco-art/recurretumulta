import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { DriveInImage } from "@/components/motion.tsx";
import { Link } from "react-router-dom";
import {
  Shield, Clock, ArrowRight, Search, Sparkles, BookOpen, Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import type { BlogLitePost } from "@/lib/blog-lite.generated.ts";
import { BLOG_CATEGORIES } from "@/lib/blog-meta.ts";
import { postHeroImage, cardThumb } from "@/lib/blog-image.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";
import CocheSemana from "@/components/coche-semana.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import NewsletterSignup from "@/components/NewsletterSignup.tsx";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";

function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<"recientes" | "antiguos" | "az">("recientes");
  // Paginación (07/10/2026, SEO): /blog/ pesaba 11,35 MB con 2.602 tarjetas.
  // Solo se prerenderizan las 24 primeras; el resto se carga bajo demanda.
  const [visibleCount, setVisibleCount] = useState(24);
  const PAGE_SIZE = 24;

  // Posts dinámicos de la BD (admin puede crear desde el panel)
  const dbPosts = useQuery(api.blog.listPublished) ?? [];

  // 08/10/2026, PageSpeed: BLOG_LITE (2.1MB) se carga bajo demanda para no
  // meterlo en el chunk inicial. El HTML prerenderizado ya trae las 24 primeras.
  const [blogLite, setBlogLite] = useState<BlogLitePost[]>([]);
  useEffect(() => {
    import("@/lib/blog-lite.generated.ts").then((m) => setBlogLite(m.BLOG_LITE));
  }, []);

  // Combinar: posts de BD primero, luego los estáticos; ordenar todo por fecha
  // descendente para que lo más reciente salga primero. A igual fecha,
  // lo publicado después (más al final de los arrays) va primero.
  // Evitar duplicados por slug (DB tiene prioridad)
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const withIndex = [
    ...dbPosts,
    // 05/10/2026: metadatos lite (sin el contenido de 11.8MB) para el índice
    ...blogLite.filter((p) => !dbSlugs.has(p.slug)),
  ].map((p, i) => ({ p, i }));
  withIndex.sort((a, b) => {
    const byDate = new Date(b.p.date).getTime() - new Date(a.p.date).getTime();
    if (byDate !== 0) return byDate;
    return b.i - a.i;
  });
  const allPosts = withIndex.map((x) => x.p);

  useSeo({
    title: "Blog de motor, radares y multas: análisis y guías",
    description: "El blog de RecurreTuMulta: análisis de coches, motos y patinetes, fichas técnicas comentadas, radares y guías para recurrir multas DGT. Actualizado 2026.",
    canonical: "/blog",
    keywords: [
      "blog multas trafico España",
      "guia recurrir multa DGT 2026",
      "vicios de forma multa tráfico",
      "prescripción multa tráfico",
      "recurso reposición modelo",
      "radar velocidad multa recurrir",
      "multa semáforo rojo como recurrir",
      "multa móvil al volante recurso",
      "derecho de tráfico España",
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Blog",
          "@id": "https://recurretumulta.online/blog/#blog",
          name: "Blog de RecurreTuMulta.online",
          url: "https://recurretumulta.online/blog/",
          description:
            "Guías expertas sobre derecho de tráfico: recurrir multas DGT, vicios de forma, radares, prescripción y ZBE.",
          inLanguage: "es-ES",
        },
        {
          "@type": "ItemList",
          name: "Artículos del blog",
          url: "https://recurretumulta.online/blog/",
          numberOfItems: allPosts.length,
          itemListElement: allPosts.slice(0, 24).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://recurretumulta.online${hrefDesdeBlog(p.slug)}`,
            name: p.title,
          })),
        },
      ],
    },
  });

  const filtered = allPosts.filter((p) => {
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.keywords.some((k) => k.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = !activeCategory || p.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "antiguos")
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sort === "az") return a.title.localeCompare(b.title, "es");
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Solo se muestran las primeras `visibleCount`; el botón "cargar más" amplía.
  // Al cambiar filtros/búsqueda/orden se resetea a la primera página.
  const visiblePosts = sorted.slice(0, visibleCount);
  const hasMore = sorted.length > visibleCount;
  const resetPagination = () => setVisibleCount(24);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />

      <main className="pt-[57px]">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <DriveInImage
            src="/media/blog-indice-guias-multas.webp"
            alt="Notificación de multa de tráfico colocada bajo el limpiaparabrisas de un coche"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 text-center space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center justify-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">Blog</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <BookOpen className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Blog · Motor y tráfico 2026</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Coches, motos, radares y multas:<br />
              <span className="text-red-400">análisis y guías que sí sirven.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Análisis de coches, motos y patinetes con sus fichas técnicas, radares explicados y guías detalladas para recurrir multas DGT, Policía Local y Ayuntamientos.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }} className="pt-2">
              <Link to="/#analizador">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-black px-6 h-11 rounded-full shadow-lg shadow-red-900/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Analiza tu multa gratis ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
          {/* Search + filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Busca por tema, tipo de multa, provincia..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); resetPagination(); }}
                className="pl-10 bg-gray-50 border-gray-200 rounded-xl text-sm h-11"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setActiveCategory(null); resetPagination(); }}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  !activeCategory
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                Todos
              </button>
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(activeCategory === cat ? null : cat); resetPagination(); }}
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: String(allPosts.length), l: "Artículos publicados" },
              { v: "100%", l: "Análisis gratis" },
              { v: "24/7", l: "Disponible con IA" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-gray-50 rounded-2xl p-3 text-center border border-gray-100">
                <p className="text-xl font-black text-gray-900">{v}</p>
                <p className="text-xs text-gray-400">{l}</p>
              </div>
            ))}
          </div>

          {/* Post grid — listado principal */}

          <AdBanner slotId={AD_SLOTS.horizontal} format="horizontal" className="rounded-xl overflow-hidden" />

          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-gray-200" />
              <p className="font-semibold">No hay artículos que coincidan</p>
              <p className="text-sm">Prueba con otro término o elimina los filtros</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400 font-semibold">
                  {sorted.length} artículo{sorted.length === 1 ? "" : "s"}
                </p>
                <label className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                  Ordenar:
                  <select
                    value={sort}
                    onChange={(e) => { setSort(e.target.value as "recientes" | "antiguos" | "az"); resetPagination(); }}
                    className="bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold px-3 py-1.5 cursor-pointer outline-none"
                  >
                    <option value="recientes">Más recientes</option>
                    <option value="antiguos">Más antiguos</option>
                    <option value="az">A – Z</option>
                  </select>
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
              {visiblePosts.map((post, i) => {
                // hero: los posts lite ya traen heroSrc/heroAlt; los de BD se extraen del contenido
                const dbHero = "content" in post && typeof post.content === "string" ? postHeroImage(post.content) : null;
                const heroSrc = dbHero?.src || (post as BlogLitePost).heroSrc || "";
                const heroAlt = dbHero?.alt || (post as BlogLitePost).heroAlt || post.title;
                return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link to={hrefDesdeBlog(post.slug)} className="block h-full group">
                    <div className="border border-gray-200 rounded-2xl overflow-hidden h-full hover:border-red-200 hover:shadow-md hover:shadow-red-50 transition-all duration-200 bg-white flex flex-col">
                      <div className="aspect-video w-full overflow-hidden bg-gray-100 shrink-0">
                        {heroSrc ? (
                          <img
                            src={cardThumb(heroSrc)}
                            alt={heroAlt}
                            loading={i < 2 ? "eager" : "lazy"}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              // Fallback a la original si el thumbnail no existe
                              const t = e.currentTarget;
                              if (!t.dataset.fb && !(window as any).__PRERENDER__) {
                                t.dataset.fb = "1";
                                t.src = heroSrc;
                              }
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <img
                              src="/media/logo-recurretumulta.webp"
                              alt="RecurreTuMulta.online"
                              loading="lazy"
                              className="h-10 w-auto opacity-70"
                            />
                          </div>
                        )}
                      </div>
                      <div className="p-5 space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-red-50 text-red-600 border-0 text-xs font-semibold">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </div>
                      </div>
                      <h2 className="text-sm font-black text-gray-900 leading-tight group-hover:text-red-600 transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.keywords.slice(0, 3).map((kw) => (
                          <span key={kw} className="inline-flex items-center gap-1 text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                            <Tag className="w-2.5 h-2.5" />
                            {kw}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-red-600 group-hover:gap-2 transition-all">
                        Leer artículo <ArrowRight className="w-3 h-3" />
                      </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
                );
              })}
              </div>

              {/* Paginación: cargar más (07/10/2026) */}
              {hasMore && (
                <div className="pt-4 text-center space-y-2">
                  <p className="text-xs text-gray-400">
                    Mostrando {visiblePosts.length} de {sorted.length} artículos
                  </p>
                  <Button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full px-8 h-11"
                  >
                    Cargar más artículos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}

          {/* Featured guides — internal link hub */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-3 bg-white">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Guías temáticas</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/guias/radares", t: "Multas de radar: guía para recurrirlas" },
                { to: "/guias/alcohol-drogas", t: "Alcohol y drogas al volante: multas y recurso" },
                { to: "/guias/vicios-forma", t: "Defectos de forma que anulan multas" },
                { to: "/guias/prescripcion", t: "Prescripción y caducidad de multas" },
                { to: "/guias/itv-documentacion", t: "ITV, neumáticos y documentación" },
                { to: "/guias/zbe", t: "Multas ZBE: guía para recurrirlas" },
              ].map((g) => (
                <Link key={g.to} to={g.to} className="flex items-center justify-between gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-3 transition-colors">
                  {g.t}
                  <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              También tienes el <Link to="/multas/" className="text-red-600 font-semibold hover:underline">índice por provincias</Link> y las <Link to="/herramientas/" className="text-red-600 font-semibold hover:underline">herramientas gratuitas para conductores</Link>.
            </p>
          </div>

          {/* Novedades Motor — hub discreto de la sección motor */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-3 bg-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-600" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Novedades Motor</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/comparador-coches", t: "Comparador de coches eléctricos" },
                { to: "/comparador-motos", t: "Comparador de motos eléctricas" },
                { to: "/el-dato-del-dia", t: "El dato del día" },
                { to: "/la-pregunta-del-dia", t: "La pregunta del día" },
                { to: "/tal-dia-como-hoy-motor", t: "Tal día como hoy en el motor" },
              ].map((g) => (
                <Link key={g.to} to={g.to} className="flex items-center justify-between gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-3 transition-colors">
                  {g.t}
                  <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* El coche de la semana — destacado editorial rotativo */}
          <CocheSemana />

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-6 text-white space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-lg">¿Tienes una multa ahora?</p>
                <p className="text-white/80 text-sm">Analízala gratis con IA y descubre si tiene errores que la anulan.</p>
              </div>
            </div>
            <Link to="/#analizador" className="block">
              <Button className="bg-white text-red-600 hover:bg-white/90 font-black rounded-xl w-full h-11">
                Analizar mi multa ahora — Gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Newsletter semanal de motor */}
          <div className="max-w-3xl mx-auto px-4 pb-12">
            <NewsletterSignup origen="blog-index" />
          </div>

          {/* Footer */}
          <SharedFooter />
        </div>
      </main>
    </div>
  );
}

export default function BlogPageWithConvex() {
  return (
    <LazyConvexProvider>
      <BlogPage />
    </LazyConvexProvider>
  );
}
