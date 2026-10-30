import { useParams, Link, useLocation } from "react-router-dom";
import { sanearPostBlog } from "@/lib/fotos-saneadas.ts";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  Shield, Clock, ArrowLeft, ArrowRight, Sparkles, Share2, Check, AlertTriangle, UserRound, BookOpen, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { toast } from "sonner";
import { withSession } from "@/lib/authSimple.ts";
import type { BlogPost } from "@/lib/blog-data.ts";
import type { BlogTextosPropios } from "@/lib/blog-meta.ts";
import { loadArrayItem, loadRecordEntry, loadModuleArray } from "@/lib/data-loader-utils.ts";
import type { BlogLitePost } from "@/lib/blog-lite.generated.ts";
import type { FotoCarrusel } from "@/components/CarruselFotos.tsx";
import type { CocheComparador } from "@/lib/comparador-coches-data.ts";
import type { MotoComparador } from "@/lib/comparador-motos-data.ts";
import type { PatineteComparador } from "@/lib/comparador-patinetes-data.ts";
import type { TipoVehiculoResena } from "@/components/ResenasVehiculo.tsx";
// 12/10/2026: opiniones de propietarios al final del artículo (lazy, below-the-fold).
const ResenasVehiculoLazy = lazy(() => import("@/components/ResenasVehiculo.tsx"));
// 18/10/2026: reacciones 👍 😮 😡 (solo cliente, tras la carga).
const ReaccionesPostLazy = lazy(() => import("@/components/audiencia/ReaccionesPost.tsx"));
import { Diferido } from "@/components/audiencia/Diferido.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

import SharedNavbar from "@/components/shared-navbar.tsx";
import { AUTOR_DANIEL, PUBLISHER } from "@/lib/eeat.ts";
import { EnlacesHerramientas } from "@/components/eeat/FirmaEditorial.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import NewsletterSignup from "@/components/NewsletterSignup.tsx";
import CarruselFotos from "@/components/CarruselFotos.tsx";
import { ReadingProgress, DriveInImage } from "@/components/motion.tsx";
import { postHeroImage } from "@/lib/blog-image.ts";
import FichaDestacada from "@/components/FichaDestacada.tsx";
import {
  elegirFicha,
  enlacesFicha,
  idPlausible,
  seguirRedireccion,
  type FichaCandidata,
  type FichaRef,
  type TipoFicha,
} from "@/lib/ficha-match.ts";
import { creditoDe } from "@/components/CreditoFoto.tsx";
import { conBarra } from "@/lib/barra-final";

// 13/10/2026: atribución visible bajo las fotos CC BY / CC BY-SA del cuerpo del artículo.
const escAttr = (x: string) => x.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function conCreditos(html: string): string {
  return html.replace(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/g, (tag, src) => {
    const c = creditoDe(src);
    if (!c) return tag;
    return `${tag}<small class="block mt-1 text-[10px] leading-tight text-gray-400">Foto: <a href="${escAttr(c.url)}" target="_blank" rel="noopener noreferrer nofollow" class="underline">${escAttr(c.autor)}</a> ${c.licencia === "prensa" ? "(prensa)" : `· ${escAttr(c.licencia)} · Wikimedia Commons`}</small>`;
  });
}
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import BannerJuegoMonos from "@/components/caza-monos/BannerJuegoMonos";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";

// Extrae parejas pregunta/respuesta de la sección "Preguntas frecuentes" del markdown
// para generar el schema FAQPage (rich snippets en Google).
function extractFaqs(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const normalized = content.replace(/\\n/g, "\n");
  // Localizar la sección de preguntas frecuentes
  const faqHeader = normalized.search(/^##\s+Preguntas frecuentes/im);
  if (faqHeader === -1) return faqs;
  const faqSection = normalized.slice(faqHeader);
  // Cada pregunta es un ### seguido de párrafos de respuesta
  const blocks = faqSection.split(/^###\s+/m).slice(1);
  for (const block of blocks) {
    const lines = block.split("\n");
    const question = lines[0].trim().replace(/\*\*/g, "");
    const answerLines: string[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (/^#{1,3}\s+/.test(line)) break; // siguiente encabezado
      answerLines.push(line);
    }
    // Limpiar markdown básico para el texto del schema
    const answer = answerLines.join("\n").trim()
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
      .replace(/<a[^>]*>([^<]*)<\/a>/g, "$1")
      .replace(/<[^>]+>/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }
  return faqs;
}

// Simple markdown-like renderer
function MarkdownContent({ content, galeria, dims }: { content: string; galeria?: FotoCarrusel[]; dims: Record<string, [number, number]> }) {
  // Normaliza: algunos contenidos llegan con \n literales (doble escapado desde la DB)
  // en vez de saltos de línea reales. Convertirlos antes de procesar.
  const normalized = content.replace(/\\n/g, "\n");
  const lines = normalized.split("\n");
  const elements: React.ReactNode[] = [];
  // Galería de fotos del modelo (artículos de coches): se inyecta tras la
  // introducción —antes del primer "## "— o donde aparezca [[galeria]].
  // (galeria llega por props: carga perezosa del chunk dedicado, 05/10/2026)
  const tieneMarcadorGaleria = normalized.includes("[[galeria]]");
  let galeriaInyectada = false;
  const bloqueGaleria = (key: string) =>
    galeria && galeria.length > 0 ? (
      <div key={key}>
        <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Galería</h2>
        <CarruselFotos fotos={galeria} />
      </div>
    ) : null;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "[[galeria]]") {
      const b = bloqueGaleria(`galeria-${i}`);
      if (b) {
        elements.push(b);
        galeriaInyectada = true;
      }
    } else if (line.match(/^##(?!#)\s*/) && line.trim().length > 2) {  // 17/10/2026: "###" ya no cae aquí (salía h2 "# …")
      if (galeria && galeria.length > 0 && !tieneMarcadorGaleria && !galeriaInyectada) {
        const b = bloqueGaleria(`galeria-auto-${i}`);
        if (b) {
          elements.push(b);
          galeriaInyectada = true;
        }
      }
      const headerText = line.replace(/^##\s*/, "").trim();
      if (headerText) {
        elements.push(
          <h2 key={i} className="text-xl font-black text-gray-900 mt-8 mb-3">
            {headerText}
          </h2>
        );
      } else {
        i++;
        continue;
      }
    } else if (line.match(/^###\s*/) && line.trim().length > 3) {
      const headerText = line.replace(/^###\s*/, "").trim();
      if (headerText) {
        elements.push(
          <h3 key={i} className="text-base font-black text-gray-800 mt-6 mb-2">
            {headerText}
          </h3>
        );
      } else {
        i++;
        continue;
      }
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-red-500 pl-4 my-4 bg-red-50 py-3 pr-3 rounded-r-xl">
          <p className="text-xs text-gray-700 leading-relaxed italic">{line.slice(2)}</p>
        </blockquote>
      );
    } else if (line.startsWith("| ")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const VACIA = /^(—|–|-|sin datos|n\/d|no publicad[oa]|\?)$/i;
      const rows = tableLines
        .filter((l) => !l.match(/^\|[-| ]+\|$/))
        // AdSense P2: una fila con alguna celda sin dato ("—", "Sin datos") no se muestra.
        .filter((l, ri) => ri === 0 || !l.split("|").slice(1, -1).some((c) => VACIA.test(c.trim())));
      elements.push(
        <div key={`table-${i}`} className="my-4 overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            {rows.map((row, ri) => {
              // OJO: no filtrar celdas vacías interiores (p. ej. la primera celda
              // vacía de la cabecera "| | Versión A | Versión B |"); solo se
              // quitan los bordes vacíos del split.
              let cells = row.split("|");
              if (cells.length && !cells[0].trim()) cells = cells.slice(1);
              if (cells.length && !cells[cells.length - 1].trim()) cells = cells.slice(0, -1);
              const isHeader = ri === 0;
              return (
                <tr key={ri} className={isHeader ? "bg-gray-900 text-white" : ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {cells.map((cell, ci) => (
                    isHeader
                      ? <th key={ci} className="px-2 sm:px-3 py-2 text-left font-bold text-xs rounded break-words" dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
                      : <td key={ci} className="px-2 sm:px-3 py-2 text-gray-600 border-b border-gray-100 break-words" dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
                  ))}
                </tr>
              );
            })}
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- ") || line.match(/^\d+\. /)) {
      const items: string[] = [];
      const isOrdered = line.match(/^\d+\. /);
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].match(/^\d+\. /))) {
        items.push(lines[i].replace(/^- /, "").replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className={`my-3 space-y-1.5 ${isOrdered ? "list-none" : "list-none"}`}>
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
              <span className="min-w-0 break-words" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("```")) {
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={`code-${i}`} className="bg-gray-900 text-green-300 rounded-xl p-4 text-xs overflow-x-auto my-4 leading-relaxed">
          {codeLines.join("\n")}
        </pre>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="text-sm text-gray-700 leading-relaxed my-2"
          dangerouslySetInnerHTML={{ __html: conCreditos(addImgDimensions(quoteImgAlt(formatInline(line)), dims)) }}
        />
      );
    }

    i++;
  }

  // Si el artículo no tiene ningún "## ", la galería va al final del contenido
  if (galeria && galeria.length > 0 && !galeriaInyectada) {
    const b = bloqueGaleria("galeria-final");
    if (b) elements.push(b);
  }

  return <div className="prose-sm max-w-none">{elements}</div>;
}

function formatInline(text: string): string {
  return formatInline0(text).replace(/href="(\/[^"]*)"/g, (_m, h) => `href="${conBarra(h)}"`);
}
function formatInline0(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
}

// Normaliza alt sin comillas (convención de redacción: <img src=URL alt=texto sin comillas>)
// a alt="..." antes de inyectar al DOM: sin comillas el navegador solo toma la
// primera palabra como alt y convierte el resto en atributos basura (digital="",
// minimalista="", ...), rompiendo el alt SEO/accesibilidad en ~113 imágenes.
function quoteImgAlt(html: string): string {
  return html.replace(
    /(<img\b[^>]*?)\salt=(?!["'])((?:(?!\s+[a-zA-Z][\w-]*\s*=)[^>])*)(\/?)>/g,
    (_m, head, alt, slash) => `${head} alt="${alt.replace(/\s*\/?$/, "").trim()}"${slash}>`
  );
}

// Inyecta width/height intrínsecos a las <img> de /media para evitar CLS
// (salto de layout al cargar), muy visible en móvil. Sin dimensiones conocidas
// la etiqueta se deja intacta. Además marca loading="lazy": la hero del
// artículo se extrae aparte con eager, así que aquí todo va bajo el pliegue.
function addImgDimensions(html: string, dims: Record<string, [number, number]>): string {
  // Rendimiento: los iframes (YouTube) del cuerpo del post cargan en diferido.
  html = html.replace(/<iframe(?![^>]*\sloading=)/g, '<iframe loading="lazy"');
  return html.replace(
    /<img(\s[^>]*?)src=(["']?)(\/media\/[^"'\s>]+)\2([^>]*?)>/g,
    (m, pre, q, src, post) => {
      let out = m;
      if (!/\swidth\s*=/.test(m)) {
        const file = src.split("/").pop() ?? "";
        const d = dims[file];
        if (d) out = `<img${pre}src=${q}${src}${q} width="${d[0]}" height="${d[1]}"${post}>`;
      }
      if (!/\sloading\s*=/.test(out)) out = out.replace(/<img/, '<img loading="lazy"');
      return out;
    }
  );
}

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Carga perezosa (05/10/2026): el artículo se carga desde su módulo dedicado
  // (chunk de KBs), no desde el agregado de 11.8MB. La BD de Convex sigue como
  // fallback para artículos aún no incluidos en el estático.
  const [staticPost, setStaticPost] = useState<BlogPost | null | undefined>(undefined);
  const [galeria, setGaleria] = useState<FotoCarrusel[] | undefined>(undefined);
  const [dims, setDims] = useState<Record<string, [number, number]>>({});
  const [relatedStatic, setRelatedStatic] = useState<BlogLitePost[]>([]);
  const [cocheDestacado, setCocheDestacado] = useState<CocheComparador | null>(null);
  const [fichaLink, setFichaLink] = useState<string | null>(null);
  // 12/10/2026: ficha enlazada (coche/moto/patinete) para mostrar sus reseñas al final.
  const [fichaResenas, setFichaResenas] = useState<{
    tipo: TipoVehiculoResena;
    slug: string;
    nombre: string;
  } | null>(null);

  useEffect(() => {
    let alive = true;
    const s = slug ?? "";
    delete document.body.dataset.pageReady;
    setStaticPost(undefined);
    setGaleria(undefined);
    setRelatedStatic([]);
    setCocheDestacado(null);
    setFichaLink(null);
    setFichaResenas(null);
    (async () => {
      const [modPosts, g, d] = await Promise.all([
        loadModuleArray<BlogPost>("blog", s),
        loadRecordEntry<FotoCarrusel[]>("galeria", s),
        import("@/lib/media-dimensiones.ts").then(
          (m) => (m.MEDIA_DIMENSIONS ?? {}) as Record<string, [number, number]>,
        ),
      ]);
      const p = modPosts.find((x) => x.slug === s);
      if (!alive) return;
      setStaticPost(p ?? null);
      setGaleria(g);
      setDims(d);
      // Relacionados: primero del MISMO módulo (ya en memoria, coste cero;
      // los ficheros agrupan por marca/tema). Solo si hay menos de 3 se
      // completa con el chunk lite de la categoría.
      const toLite = (x: BlogPost): BlogLitePost => {
        const hero = postHeroImage(x.content);
        return {
          slug: x.slug, title: x.title, excerpt: x.excerpt, category: x.category,
          date: x.date, locale: x.locale ?? "es",
          heroSrc: hero?.src ?? "", heroAlt: hero?.alt ?? "",
          keywords: x.keywords ?? [], readTime: x.readTime ?? 3,
        };
      };
      // 25/10/2026: si este artículo es anfitrión de un huérfano (ver
      // scripts/gen-blog-huerfanos.py), ese va primero en relacionados.
      const huerf = (await import("@/lib/blog-huerfanos.generated.json")).default as Record<string, BlogLitePost>;
      const hp = huerf[s];
      const hSlug = hp?.slug;
      const fijo: BlogLitePost[] = hp ? [hp] : [];
      if (!alive) return;
      let rel = [
        ...fijo,
        ...modPosts
          .filter((x) => x.slug !== s && x.slug !== hSlug && x.category === p?.category)
          .map(toLite),
      ].slice(0, 3);
      if (rel.length < 3 && p) {
        const catPosts = await loadModuleArray<BlogLitePost>("cat", p.category);
        if (!alive) return;
        const extra = catPosts.filter(
          (x) => x.slug !== s && !rel.some((r) => r.slug === x.slug),
        );
        rel = [...rel, ...extra].slice(0, 3);
      }
      // 18/10/2026: ficha del MODELO del artículo, por casado exacto de marca y
      // modelo (slug) con el slug/título del post. Antes se cogía el primer
      // enlace /coches/ del texto y en posts que enlazan rivales salía la ficha
      // de otro modelo (AMG GT SUV -> Porsche Cayenne Electric). Si ninguna
      // ficha casa: sin tarjeta, nunca la de otro modelo.
      const { fichaDePost } = await import("@/lib/ficha-de-post.generated");
      const curada = fichaDePost(s);
      const curadaRef: FichaRef | null = curada
        ? { tipo: curada.split("/")[1] as TipoFicha, id: curada.split("/")[2] }
        : null;
      // Las fichas con 301 forzado se sustituyen por su destino (nunca enlazar una redirección).
      const redir = (await import("@/lib/fichas-redirigidas.generated.json")).default as Record<string, string>;
      const preferida = curadaRef ? seguirRedireccion(curadaRef, redir) : null;
      const refs: FichaRef[] = [];
      const vistos = new Set<string>();
      for (const r0 of [...(preferida ? [preferida] : []), ...(p ? enlacesFicha(p.content) : [])]) {
        const r = seguirRedireccion(r0, redir);
        if (!r) continue;
        const k = `${r.tipo}/${r.id}`;
        // La ficha curada (ficha-de-post) manda aunque el slug no case palabra a palabra (Denza Z -> denza-z-coupe).
        if (vistos.has(k) || !p || (!(preferida && r0 === preferida) && !idPlausible(p, r.id))) continue;
        vistos.add(k);
        refs.push(r);
        if (refs.length >= 6) break;
      }
      type Cargada = FichaCandidata & { dato: CocheComparador | MotoComparador | PatineteComparador };
      const cargadas = (
        await Promise.all(
          refs.map(async (r): Promise<Cargada | null> => {
            const dom = r.tipo === "coches" ? "coche" : r.tipo === "motos" ? "moto" : "patinete";
            const d = await loadArrayItem<CocheComparador | MotoComparador | PatineteComparador>(
              dom, r.id, (x) => x.id === r.id,
            );
            return d ? { ...r, marca: d.marca, modelo: d.modelo, dato: d } : null;
          }),
        )
      ).filter((x): x is Cargada => x !== null);
      const elegida = p ? elegirFicha(p, cargadas, preferida) : null;
      const coche = elegida?.tipo === "coches" ? (elegida.dato as CocheComparador) : undefined;
      const fr: { tipo: TipoVehiculoResena; slug: string; nombre: string } | null = elegida
        ? { tipo: elegida.tipo, slug: elegida.id, nombre: `${elegida.marca} ${elegida.modelo}` }
        : null;
      if (alive) setFichaResenas(fr);
      // "Ver ficha completa": solo a la ficha del modelo del artículo.
      if (alive) setFichaLink(elegida ? `/${elegida.tipo}/${elegida.id}` : null);
      if (!alive) return;
      setRelatedStatic(rel);
      setCocheDestacado(coche ?? null);
      document.body.dataset.pageReady = "1";
    })();
    return () => {
      alive = false;
      delete document.body.dataset.pageReady;
    };
  }, [slug]);

  // Buscar en la BD (posts dinámicos admin) como fallback del estático
  const dbPost = useQuery(api.blog.getBySlug, slug ? withSession({ slug }) : "skip");

  // El fichero estático es la fuente canónica (revisado y enriquecido con vídeos);
  // Convex queda como fallback para artículos que aún no estén en el estático.
  const post = sanearPostBlog(staticPost ?? (dbPost ?? null)) as typeof staticPost | null;
  const tpBlog: BlogTextosPropios | undefined = post && "textosPropios" in post ? (post as BlogPost).textosPropios : undefined;

  // Estado "cargando": el módulo estático aún no resolvió. Si el estático dice
  // null, se espera a Convex (solo navegador real; en prerender Convex está
  // bloqueado y el sitemap solo tiene slugs estáticos, así que no lo bloquea).
  // Mientras se carga NO se fija canonical (el prerender espera al canonical
  // real del artículo, no captura el esqueleto de carga).
  const isLoading = staticPost === undefined || (staticPost === null && dbPost === undefined);

  // Artículos relacionados: mezcla de estáticos (misma categoría) y dinámicos.
  const allDbPosts = useQuery(api.blog.listPublished) ?? [];
  // El huérfano asignado (si lo hay) es relatedStatic[0] y debe quedarse aunque haya posts dinámicos.
  const related = [
    ...relatedStatic.slice(0, 1),
    ...allDbPosts.filter((p) => p.slug !== slug && p.category === post?.category),
    ...relatedStatic.slice(1),
  ].slice(0, 3);

  // Scroll al inicio cada vez que cambia el artículo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Blur-up progresivo en las imágenes del contenido (HTML raw):
  // solo transform/filter (clases rtm-blurup → is-loaded), sin tocar el layout.
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(".blog-content img"));
    imgs.forEach((img) => {
      img.classList.add("rtm-blurup");
      const reveal = () => img.classList.add("is-loaded");
      if (img.complete && img.naturalWidth > 0) reveal();
      else img.addEventListener("load", reveal, { once: true });
    });
  }, [post?.slug]);

  // SEO dinámico por artículo
  const DOMAIN = "https://recurretumulta.online";
  // Extraer FAQs para el schema FAQPage (rich snippets)
  const faqs = post && !isLoading ? extractFaqs(post.content) : [];
  // SEO exprés 04/10/2026: og:image propia por artículo (mejora CTR en redes/WhatsApp).
  // La hero es la primera <img> del contenido; og:image exige URL absoluta.
  const ogImage = (() => {
    if (!post || isLoading) return undefined;
    const m = post.content.match(/<img[^>]*src=("[^"]*"|'[^']*'|[^\s>]+)/);
    if (!m) return undefined;
    const src = m[1].replace(/^["']|["']$/g, "");
    return src.startsWith("http") ? src : `${DOMAIN}${src.startsWith("/") ? "" : "/"}${src}`;
  })();
  // E-E-A-T 17/10/2026: herramientas según el tema del post.
  const ambitoPost = fichaLink?.startsWith("/motos/")
    ? "motos"
    : fichaLink?.startsWith("/patinetes/")
      ? "patinetes"
      : post && ["Novedades Motor", "Motor", "Coches", "Modelos desconocidos"].includes(post.category)
        ? "coches"
        : "multas";
  useSeo(isLoading
        ? {
              title: "Cargando artículo",
              description: "Cargando el artículo solicitado.",
              type: "article",
              // Sin canonical mientras carga: el prerender espera al canonical
              // real del artículo y así nunca captura el esqueleto de carga.
              canonical: undefined,
          }
        : post ? {
    title: post.title,
    description: post.excerpt,
    canonical: hrefDesdeBlog(post.slug),
    type: "article",
    datePublished: post.date,
    dateModified: post.date,
    image: ogImage,
    keywords: post.keywords,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${DOMAIN}${hrefDesdeBlog(post.slug).replace(/\/$/, "")}#article`,
          "headline": post.title,
          "description": post.excerpt,
          "url": `${DOMAIN}${hrefDesdeBlog(post.slug).replace(/\/$/, "")}`,
          "datePublished": post.date,
          "dateModified": post.date,
          "inLanguage": "es-ES",
          // E-E-A-T 17/10/2026: autor = Daniel (como dice la firma visible), editor = la organización.
          "author": AUTOR_DANIEL,
          "publisher": PUBLISHER,
          "image": "/media/og-recurretumulta-online.png",
          "articleSection": post.category,
          "keywords": post.keywords.join(", "),
          "about": { "@type": "Thing", "name": "Recurrir multas de tráfico DGT en España" },
          "isPartOf": { "@id": `${DOMAIN}/blog` },
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${DOMAIN}/` },
            { "@type": "ListItem", "position": 2, "name": "Blog DGT", "item": `${DOMAIN}/blog` },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `${DOMAIN}${hrefDesdeBlog(post.slug).replace(/\/$/, "")}` },
          ],
        },
        // FAQPage para rich snippets (solo si hay preguntas frecuentes)
        ...(faqs.length > 0 ? [{
          "@type": "FAQPage",
          "@id": `${DOMAIN}${hrefDesdeBlog(post.slug).replace(/\/$/, "")}#faq`,
          "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer },
          })),
        }] : []),
      ],
    },
  } : {
    title: "Artículo no encontrado",
    description: "El artículo que buscas no existe. Visita nuestro blog sobre multas DGT.",
    noindex: true,
  });

  // Asegura que el <title> SEO refleje el artículo una vez cargado en cliente
    // (evita que quede fijado el "Artículo no encontrado" de la fase de carga).
    // Norma de títulos 11/10/2026 (orden de Daniel): el <title> contiene SOLO
    // lo que el usuario busca + la solución. PROHIBIDO el nombre de la web/marca.
    // El título final es el del artículo, sin sufijo.
    useEffect(() => {
        // 13/10/2026: no pisar el título SEO (titulos.csv) fijado en el HTML.
        const p = location.pathname.replace(/\/?$/, "/");
        const inicial = (window as unknown as { __SEO_INICIAL__?: { path: string } }).__SEO_INICIAL__;
        const fijo = inicial?.path === p || document.querySelector('meta[name="rtm-seo"]')?.getAttribute("data-path") === p;
        if (post && !fijo) {
            document.title = post.title;
        }
    }, [post]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-red-600" aria-label="Cargando artículo" />
            </div>
        );
    }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
          <p className="text-lg font-black text-gray-900">Artículo no encontrado</p>
          <Link to="/blog/">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
              Ver todos los artículos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Enlace copiado al portapapeles");
    }
  };

  // Hero: la primera imagen del contenido pasa a ser el fondo del cabecero
  const heroTag = post.content.match(/<img[^>]*>/);
  let heroSrc: string | null = null;
  let heroAlt = post.title;
  if (heroTag) {
    const srcM = heroTag[0].match(/src=("[^"]*"|'[^']*'|[^\s>]+)/);
    if (srcM) heroSrc = srcM[1].replace(/^["']|["']$/g, "");
    const altM = heroTag[0].match(/alt=("[^"]*"|'[^']*'|[^>]+)/);
    if (altM) heroAlt = altM[1].replace(/^["']|["']$/g, "").replace(/\s*\/?$/, "").trim();
  }
  const contentWithoutHero = heroTag
    ? post.content.replace(heroTag[0], "").replace(/^\s*\n/, "")
    : post.content;

  // ── Ficha destacada (03/10/2026, orden Daniel): se carga en paralelo con el
  // artículo (estado cocheDestacado) y se muestra ANTES de la historia. ──

  return (
    <div className="min-h-screen bg-white">
      {/* LCP 05/10/2026: preload de la hero del artículo (React 19 la eleva al <head>;
          el prerender la captura en el HTML estático). */}
      {heroSrc ? (
        <link rel="preload" as="image" href={heroSrc} fetchPriority="high" />
      ) : null}
      <ReadingProgress />
      <SharedNavbar />

      <main className="pt-[57px]">
        {/* Hero con imagen de fondo y animación de entrada */}
        <div className="relative overflow-hidden">
          {heroSrc ? (
            <>
              <DriveInImage
                src={heroSrc}
                alt={heroAlt}
                eager={true}
                width={dims[heroSrc.split("/").pop() ?? ""]?.[0]}
                height={dims[heroSrc.split("/").pop() ?? ""]?.[1]}
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
              <CosaEnBanner />
              {creditoDe(heroSrc) && (
                <p className="absolute bottom-1 right-2 z-10 text-[10px] text-white/70">
                  Foto:{" "}
                  <a href={creditoDe(heroSrc)!.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                    {creditoDe(heroSrc)!.autor}
                  </a>{" "}
                  {creditoDe(heroSrc)!.licencia === "prensa" ? "(prensa)" : `· ${creditoDe(heroSrc)!.licencia} · Wikimedia Commons`}
                </p>
              )}
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" aria-hidden="true" />
          )}
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav
              aria-label="Migas de pan"
              className="flex items-center gap-1.5 text-xs text-white/60"
            >
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/" className="hover:text-white">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">{post.title}</span>
            </nav>
            <div
              className="flex items-center gap-2 flex-wrap"
            >
              <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-white/70">
                <Clock className="w-3 h-3" /> {post.readTime} min de lectura
              </span>
              <span className="text-xs text-white/70">{post.date}</span>
            </div>
            <h1
              className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg"
            >
              {post.title}
            </h1>
            <p
              className="text-white/80 text-sm md:text-base leading-relaxed"
            >
              {post.excerpt}
            </p>
            <div
              className="flex items-center gap-2 text-xs text-white/60 pt-1"
            >
              <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0">
                <UserRound className="w-3.5 h-3.5" />
              </span>
              <span>Por <Link to="/sobre-nosotros/" rel="author" className="underline underline-offset-2 hover:text-white">Daniel</Link>, fundador y responsable de contenidos de RecurreTuMulta.online</span>
              <span aria-hidden="true">·</span>
              <span>{`Actualizado: ${post.date}`}</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
          {/* Inline CTA (26/10: <aside>, caja complementaria común a todos los posts) */}
          <aside
            aria-label="Analizador de multas"
            className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-5 text-white space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-sm">{tpBlog?.ctaTitulo ?? "¿Tienes una multa de este tipo?"}</p>
                <p className="text-white/80 text-xs">{tpBlog?.ctaTexto ?? "Analízala gratis con IA — sabemos en segundos si tiene errores anulables."}</p>
              </div>
            </div>
            <Link to="/#analizador" className="block">
              <Button className="bg-white text-red-600 hover:bg-white/90 font-black rounded-xl w-full h-11 text-sm">
                Analizar mi multa gratis ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </aside>

          {/* Ficha del modelo primero: la atracción fuerte, antes de la historia */}
          {cocheDestacado && (
            <div className="mb-6">
              <FichaDestacada coche={cocheDestacado} />
            </div>
          )}

          {/* Article content */}
          <article className="blog-content">
            <MarkdownContent content={contentWithoutHero} galeria={galeria} dims={dims} />
          </article>

          {/* Caza de monos: mono fijo al final del artículo (pose lector) */}
          {/* Caza de monos: mono superpuesto (sin hueco en el flujo) */}
          <div className="relative h-0 z-10">
            <MonoEscondido
              id={fijoId("blog-final")}
              pose="mono-senala"
              size={38}
              className="absolute -top-9 right-4"
              titulo="¿Un mono señalando el final del artículo? Haz clic para cazarlo 🦍"
            />
          </div>
          <Diferido>
            <Suspense fallback={null}>
              <ReaccionesPostLazy slug={post.slug} />
            </Suspense>
          </Diferido>
          <BannerJuegoMonos />

          {/* Fuentes y transparencia editorial */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <p className="text-sm font-black text-gray-900">Fuentes y verificación</p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Este artículo se ha redactado y revisado por Daniel, fundador y responsable de contenidos de RecurreTuMulta.online
              contrastando la normativa aplicable, principalmente el{" "}
              <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">
                Real Decreto Legislativo 6/2015 (Ley de Tráfico y Seguridad Vial)
              </a>{" "}
              y la información pública de la{" "}
              <a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">
                Dirección General de Tráfico (DGT)
              </a>
              . La IA de análisis identifica posibles defectos e indicios relevantes en tu documento, pero no
              sustituye el asesoramiento de un profesional. Consulta más sobre nuestro proceso editorial en{" "}
              <Link to="/sobre-nosotros/" className="text-red-600 underline">¿Quién está detrás?</Link> y en nuestra{" "}
              <Link to="/politica-editorial/" className="text-red-600 underline">política editorial</Link>.
            </p>
            <EnlacesHerramientas ambito={ambitoPost} />
            <p className="text-[11px] text-gray-400">{tpBlog?.revision ?? `Última revisión de este contenido: ${post.date}`}</p>
          </div>

          {fichaLink && (
            <div className="my-8 text-center">
              <Link
                to={fichaLink}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Ver ficha completa →
              </Link>
            </div>
          )}
          {/* 12/10/2026: opiniones de propietarios de la ficha enlazada en el artículo */}
          {fichaResenas && (
            <Suspense fallback={null}>
              <ResenasVehiculoLazy
                tipo={fichaResenas.tipo}
                slug={fichaResenas.slug}
                nombre={fichaResenas.nombre}
              />
            </Suspense>
          )}

          <aside aria-label="Analizador de multas">
          {/* Bottom CTA */}
          <Card className="border-2 border-red-200 overflow-hidden">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start gap-3">
                <img
                  src="/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png"
                  alt="RecurreTuMulta.online"
                  className="w-10 h-10 rounded-2xl object-contain shrink-0 bg-white p-1 shadow-md shadow-red-200"
                />
                <div>
                  <p className="font-black text-gray-900">{tpBlog?.cajaTitulo ?? "¿Tu multa encaja con alguno de estos casos?"}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {tpBlog?.cajaTexto ?? "Sube tu multa a RecurreTuMulta.online y la IA detectará automáticamente qué defectos tiene y qué argumentos usar. El análisis es completamente gratis."}
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {(tpBlog?.cajaPuntos ?? [
                  "Análisis con IA en menos de 60 segundos",
                  "% de viabilidad del recurso",
                  "Argumentos legales específicos de tu multa",
                  "PDF del recurso completo por 4,99€",
                ]).map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-gray-600">
                    <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/#analizador" className="block">
                <Button className="w-full font-black h-12 text-base bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg shadow-red-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Analizar mi multa — Gratis
                </Button>
              </Link>
            </CardContent>
          </Card>
          </aside>

          {/* Newsletter semanal: solo en artículos de motor */}
          {post.category === "Novedades Motor" && (
            <NewsletterSignup origen="articulo-motor" compact textos={tpBlog} />
          )}

          {/* Share (gap menor en móvil: a 360 px desbordaba 6 px) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <Button
              variant="secondary"
              size="sm"
              className="text-xs rounded-full gap-1.5"
              onClick={handleShare}
            >
              <Share2 className="w-3.5 h-3.5" />
              Compartir artículo
            </Button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir por WhatsApp"
              className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en X"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en Facebook"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white hover:bg-[#1464CC] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en Telegram"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#229ED9] text-white hover:bg-[#1B8AC0] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <AdBanner slotId={AD_SLOTS.horizontal} format="horizontal" className="rounded-xl overflow-hidden" />

          {/* Related posts */}
          {related.length > 0 && (
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Artículos relacionados</p>
              <div className="space-y-3">
                {related.map((rp) => (
                  <Link key={rp.slug} to={hrefDesdeBlog(rp.slug)} className="block group">
                    <div className="border border-gray-200 rounded-xl p-4 hover:border-red-200 hover:shadow-sm transition-all space-y-1">
                      <Badge className="bg-red-50 text-red-600 border-0 text-xs mb-1">{rp.category}</Badge>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        {rp.title}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-semibold text-red-600">
                        Leer <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <SharedFooter editorial={false} />
        </div>
      </main>
    </div>
  );
}

export default function BlogPostPageWithConvex() {
  return (
    <LazyConvexProvider>
      <BlogPostPage />
    </LazyConvexProvider>
  );
}
