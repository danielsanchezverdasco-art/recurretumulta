import { Link } from "react-router-dom";
import { ShoppingCart, Clock, FileText } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { PRODUCTOS_TIENDA } from "@/lib/tienda-catalogo.ts";

// /tienda (25/10/2026). noindex mientras el catálogo físico no tenga datos reales.
export default function TiendaPage() {
  useSeo({
    title: "Tienda RecurreTuMulta: recurso PDF y gadgets",
    description: "Recurso de multa en PDF por 4,99 € y, próximamente, gadgets sin cable para el coche, la moto y el patinete.",
    canonical: "/tienda",
    noindex: true,
  });
  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <div className="pt-[57px]">
        <div className="bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 pt-10 pb-10 text-center space-y-3">
            <nav aria-label="Migas de pan" className="flex items-center justify-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link><span aria-hidden="true">/</span><span className="text-white/80">Tienda</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">Tienda</h1>
            <p className="text-white/80 text-sm max-w-xl mx-auto">Tu recurso de multa en PDF, y pronto gadgets sin cable para el coche, la moto y el patinete.</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Tienda en preparación.</strong> Los gadgets aún no están a la venta: no tienen precio ni foto hasta que verifiquemos proveedor, coste y normativa (CE/GPSR). Solo el recurso PDF se puede comprar ya.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTOS_TIENDA.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col gap-2 shadow-sm">
                <div className="aspect-[4/3] rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center px-3">
                  {p.estado === "disponible" ? <FileText className="w-10 h-10 text-red-600" /> : "Foto propia del producto (pendiente)"}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-red-600">{p.categoria}</p>
                <h2 className="font-black text-gray-900 leading-snug">{p.nombre}</h2>
                <p className="text-sm text-gray-600 flex-1">{p.descripcion}</p>
                {p.estado === "disponible" && p.precio !== null ? (
                  <>
                    <p className="text-xl font-black text-gray-900">{p.precio.toFixed(2).replace(".", ",")} €</p>
                    <Link to={p.enlace ?? "/"} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-700 to-red-600 px-4 py-2 text-sm font-extrabold text-white">
                      <ShoppingCart className="w-4 h-4" /> Analiza tu multa gratis
                    </Link>
                  </>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-500" aria-disabled="true">
                    <Clock className="w-4 h-4" /> Próximamente
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}
