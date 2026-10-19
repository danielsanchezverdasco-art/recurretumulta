// Buscador de coches (/buscador-coches/): tipos, constantes y helpers del frontend.
// El índice de modelos (2010) vive en buscador-coches-modelos.generated.ts.

export type ZonaTipo = "toda" | "ciudad" | "radio";

export interface BusquedaParams {
  marca: string;
  modelo: string;
  modeloId?: string;
  presupuestoMax: number;
  kmMax: number;
  anoMin?: number;
  zona: ZonaTipo;
  ciudad?: string;
  provincia?: string;
  radioKm?: number;
  sinGolpes: boolean;
  version?: string;
  combustible?: string;
  cambio?: string;
}

export interface Anuncio {
  id: string;
  portal: "wallapop" | "milanuncios" | "coches.net" | "autoscout24";
  titulo: string;
  precio: number;
  km?: number;
  ano?: number;
  ubicacion?: string;
  url: string;
  imagen?: string;
  vendedorTipo?: "particular" | "profesional";
  verificado: boolean;
  puntuacion: number;
  difMercadoPct?: number;
  matricula?: string;
  dgtEtiqueta?: "Cero" | "ECO" | "B" | "C";
}

export type FuenteEstado = "ok" | "fallo" | "vacio";

export interface FuentesBusqueda {
  wallapop: FuenteEstado;
  milanuncios: FuenteEstado;
  cochesNet: FuenteEstado;
  autoscout24: FuenteEstado;
}

export interface AveriaReportada {
  titulo: string;
  detalle: string;
  frecuencia: "alta" | "media" | "baja";
}

export interface FuenteAveria {
  titulo: string;
  url: string;
  dominio: string;
}

export interface AveriasInfo {
  estado: "ok" | "sin_datos";
  averias: AveriaReportada[];
  fuentes: FuenteAveria[];
}

export interface Recomendacion {
  anuncioId: string;
  posicion: 1 | 2 | 3;
  motivo: string;
  empateCon?: string;
}

export interface PuntoPrecio {
  edad: number;
  valor: number;
  real: boolean;
  etiqueta: string;
}

export interface HistorialPrecios {
  ok: boolean;
  precioNuevo?: number;
  mediana?: number;
  n?: number;
  edadMedia?: number;
  puntos: PuntoPrecio[];
  senal?: "buen_momento" | "en_linea" | "espera";
  mensaje?: string;
}

export interface DatosDGT {
  matricula: string;
  etiqueta: "Cero" | "ECO" | "B" | "C" | null;
  encontrada: boolean;
}

export interface DatosVIN {
  vin: string;
  marca?: string;
  modelo?: string;
  ano?: number;
  combustible?: string;
  pais?: string;
  encontrada: boolean;
}

export interface ValoracionAnuncio {
  ok: boolean;
  error?: string;
  portal?: string;
  titulo?: string;
  precio?: number;
  km?: number;
  ano?: number;
  ubicacion?: string;
  descripcion?: string;
  numFotos?: number;
  vendedorTipo?: "particular" | "profesional";
  url?: string;
  matricula?: string;
  vin?: string;
  dgt?: DatosDGT;
  vinInfo?: DatosVIN;
  mercado?: { mediana: number; n: number };
  difMercadoPct?: number;
  veredicto?: "chollo" | "justo" | "caro" | "dudoso";
  titular?: string;
  puntosFuertes?: string[];
  puntosDebiles?: string[];
  lineaHistorial?: string;
  consejo?: string;
  averias?: AveriaReportada[];
}

export const PORTAL_NOMBRE: Record<Anuncio["portal"], string> = {
  wallapop: "Wallapop",
  milanuncios: "Milanuncios",
  "coches.net": "Coches.net",
  autoscout24: "Autoscout24",
};

export const PROVINCIAS: string[] = [
  "A Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila",
  "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz",
  "Cantabria", "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca",
  "Girona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca",
  "Jaén", "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid",
  "Málaga", "Melilla", "Murcia", "Navarra", "Ourense", "Palencia",
  "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla",
  "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid",
  "Vizcaya", "Zamora", "Zaragoza",
];

export const COMBUSTIBLES = ["Gasolina", "Diésel", "Híbrido", "Híbrido enchufable", "Eléctrico", "GLP/GNC"];
export const CAMBIOS = ["Manual", "Automático"];

export const PRESUPUESTO_MIN = 3000;
export const PRESUPUESTO_MAX = 120000;
export const PRESUPUESTO_DEFECTO = 20000;
export const PRESUPUESTO_PASO = 500;

export const KM_MIN = 10000;
export const KM_MAX = 300000;
export const KM_DEFECTO = 100000;
export const KM_PASO = 5000;

export function formatoEur(n: number): string {
  return `${Math.round(n).toLocaleString("es-ES")} €`;
}

export function formatoKm(n?: number): string {
  if (n === undefined) return "km n/d";
  return `${n.toLocaleString("es-ES")} km`;
}

/** Normaliza para comparar textos (búsqueda del autocompletado). */
export function normalizar(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}
