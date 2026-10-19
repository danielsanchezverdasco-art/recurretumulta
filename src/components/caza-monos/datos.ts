// Datos del juego "Caza de monos" (05/10/2026).

// Ganadores: array de 50 slots (1º: 1.500 € + 1 año de recursos ilimitados;
// 2º–50º: 1 año de recursos ilimitados). Se actualiza A MANO cuando se entrega cada premio.
// null = premio aún sin entregar.
export interface Ganador {
  nombre: string; // nombre o apodo publicado (con permiso del ganador)
  fecha: string; // fecha de entrega, p. ej. "12/10/2026"
}

export const GANADORES: Array<Ganador | null> = [
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
];

export const PREMIOS_ENTREGADOS = GANADORES.filter(Boolean).length;

// FNV-1a 32 bits (misma función que el generador de placements).
function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/**
 * Código de reclamo: hash de los IDs encontrados (ordenados) + fecha.
 * Los IDs incluyen los tokens aleatorios de cada placement, así que el código
 * no se puede fabricar sin haber cazado los monos de verdad. La verificación
 * final es manual por WhatsApp.
 */
export function generarCodigoReclamo(ids: string[]): string {
  const base = [...ids].sort().join("|");
  const h1 = fnv1a(base).toString(16).padStart(8, "0");
  const h2 = fnv1a(base.split("").reverse().join("")).toString(16).padStart(8, "0");
  const fecha = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `MONO-${h1.slice(0, 4).toUpperCase()}${h1.slice(4).toUpperCase()}-${h2.slice(0, 4).toUpperCase()}-${fecha}`;
}

export const WHATSAPP_RECLAMO = "34711292174";

export function enlaceReclamoWhatsApp(codigo: string, nombre: string, total?: number, dorado?: boolean): string {
  const texto = `Hola, he cazado ${total ?? ""} monos en la Caza de monos 🦍${dorado ? " (¡incluido el dorado!)" : ""} Mi código de reclamo es ${codigo}. Nombre: ${nombre}`;
  return `https://wa.me/${WHATSAPP_RECLAMO}?text=${encodeURIComponent(texto)}`;
}
