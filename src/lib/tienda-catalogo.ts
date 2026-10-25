// Catálogo público de la tienda (25/10/2026). SIN precios ni fotos inventados:
// los productos físicos no tienen todavía proveedor, coste ni PVP verificados
// (falta el informe de catálogo con datos reales), así que salen como «Próximamente».
// El único producto real a la venta es el recurso PDF del analizador (4,99 €, ya en producción).
export type ProductoTienda = {
  slug: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  /** null = sin precio real verificado */
  precio: number | null;
  estado: "disponible" | "proximamente";
  enlace?: string;
};

export const PRODUCTOS_TIENDA: ProductoTienda[] = [
  { slug: "recurso-pdf-multa", nombre: "Recurso de multa en PDF listo para firmar", descripcion: "El análisis es gratis; el escrito de alegaciones en PDF, personalizado con tu multa, cuesta 4,99 €. Se compra desde el analizador.", categoria: "Servicio digital", precio: 4.99, estado: "disponible", enlace: "/#analizador" },
  { slug: "aspiradora-agua-seco-bateria", nombre: "Aspiradora de agua y seco a batería", descripcion: "Para la tapicería y las alfombrillas del coche, sin cable.", categoria: "Limpieza", precio: null, estado: "proximamente" },
  { slug: "inflador-neumaticos-bateria", nombre: "Inflador de neumáticos a batería", descripcion: "Compresor portátil para coche, moto y bici.", categoria: "Neumáticos", precio: null, estado: "proximamente" },
  { slug: "arrancador-bateria-portatil", nombre: "Arrancador de batería portátil", descripcion: "Para arrancar el coche sin pinzas de otro vehículo.", categoria: "Emergencias", precio: null, estado: "proximamente" },
  { slug: "luz-led-recargable-moto", nombre: "Luz LED recargable para moto", descripcion: "Iluminación auxiliar recargable por USB.", categoria: "Iluminación", precio: null, estado: "proximamente" },
  { slug: "hidrolimpiadora-portatil-bateria", nombre: "Hidrolimpiadora portátil a batería", descripcion: "Lavado del coche sin toma de corriente.", categoria: "Limpieza", precio: null, estado: "proximamente" },
  { slug: "bomba-aire-patinete", nombre: "Bomba de aire para patinete", descripcion: "Bomba compacta para las ruedas del patinete eléctrico.", categoria: "Patinetes", precio: null, estado: "proximamente" },
];

export const CHECKOUT_ACTIVO = import.meta.env.VITE_TIENDA_CHECKOUT === "1";
