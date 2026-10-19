# Historial de precios de las fichas

Cada ficha técnica (coches, motos, patinetes y las secciones que vengan, como caravanas) muestra un bloque **«Historial de precios»**:

- **1 punto:** «Precio actual: X € (verificado DD/MM/AAAA)» y una nota de que el historial se irá llenando.
- **2 o más puntos:** gráfico de línea animado + tabla HTML con fecha, precio, cambio y fuente (va en el HTML prerenderizado, lo leen Google y los buscadores IA).

**Regla de oro: nunca se inventan precios pasados.** Cada punto es un precio real, con la fecha en que se vio y la fuente.

## Niky: cómo añadir un cambio de precio (solo datos, nada de código)

Cuando tu radar detecte que un precio sube o baja, añade **una fila por cambio** a `docs/precios/cambios-precio.csv` en tu rama (si el fichero no existe en tu rama, créalo con la cabecera `slug,fecha,precio_anterior,precio_nuevo,moneda,fuente_url` como primera línea). Ejemplo de formato (los precios y las URLs de este ejemplo son ilustrativos, no los copies):

```csv
slug,fecha,precio_anterior,precio_nuevo,moneda,fuente_url
leapmotor-b10-electrico-precio-espana,2026-10-20,29900,28900,EUR,https://www.leapmotor.com/es/b10
yamaha-mt-07-2025-ficha-tecnica-precio,2026-10-21,7999,8299,EUR,https://www.yamaha-motor.eu/es/es/products/motorcycles/hyper-naked/mt-07/
```

| Columna | Qué poner |
|---|---|
| `slug` | El `id` de la ficha, exactamente igual (lo que va detrás de `/coches/`, `/motos/` o `/patinetes/`, sin barras). |
| `fecha` | Día en que viste el precio nuevo, `AAAA-MM-DD` (también vale `DD/MM/AAAA`). Nunca una fecha futura. |
| `precio_anterior` | El precio que tenía antes (solo sirve para comprobar; si no cuadra con el historial, sale un aviso). |
| `precio_nuevo` | El precio nuevo. Número sin símbolo: `28900`, `28.900` o `677,59`. |
| `moneda` | `EUR` casi siempre. Para modelos que solo se venden fuera, la moneda real (`CNY`, `USD`, `GBP`...). |
| `fuente_url` | URL donde se ve el precio (web oficial de la marca, configurador, km77, carwow, nota de prensa). **Obligatoria:** sin URL la fila se ignora. |

Reglas:

1. **Una fila = un cambio real.** Si el precio no ha cambiado, no añadas nada.
2. **No borres ni edites filas antiguas** salvo para corregir un error tuyo; añade siempre al final.
3. Si te equivocas de precio en un día, añade otra fila con el mismo `slug` y `fecha` y el precio bueno: la fila nueva sustituye a la anterior (sale un aviso).
4. Repetir filas no pasa nada: se deduplican (mismo slug + fecha + precio = se ignora).
5. Precio rebajado por una campaña temporal: solo si es el **PVP de partida** que publica la marca, no ofertas de concesionario sueltas.
6. Avisa en el tablón con «@grok lote listo» y el número de filas de precios.

Si prefieres editar directamente `src/data/historial-precios.json` (también es un fichero de datos), añade un objeto al final de la lista del slug, respetando el formato:

```json
"leapmotor-b10-electrico-precio-espana": [
  {"fecha": "2026-10-04", "precio": 27900, "moneda": "EUR", "fuente": "radar-precios (web oficial / km77 / carwow)"},
  {"fecha": "2026-10-20", "precio": 28900, "moneda": "EUR", "fuente": "https://www.leapmotor.com/es/b10"}
]
```

Nunca toques `src/components/`, `src/pages/` ni `scripts/`.

## Cosa (revisión): cómo se integra

```bash
node scripts/historial-precios/importar-csv.mjs --dry   # simula y muestra avisos
node scripts/historial-precios/importar-csv.mjs         # guarda en src/data/historial-precios.json
node scripts/historial-precios/gen.mjs                  # (lo hace npm run build) genera los trozos
```

- `importar-csv.mjs` mezcla el CSV en el JSON, ordena por fecha y deduplica. Volver a pasarlo con el mismo CSV no añade nada. Avisa (e ignora la fila) si el slug no existe, falta la URL, la fecha es futura o la moneda es rara; avisa (y la añade) si `precio_anterior` no cuadra con el último registrado.
- `gen.mjs` (paso de `npm run build`) lee el JSON **y además el CSV en memoria**, así que un cambio en el CSV se publica aunque nadie haya ejecutado `importar-csv.mjs`. Escribe `src/lib/historial-precios-gen/<inicial>.json` (cada ficha carga solo su trozo, ~15 KB).
- Al revisar un cambio de precio, **actualiza también `precioDesde` / `precioEur` de la ficha** para que el precio de la cabecera y el del historial coincidan. `gen.mjs` avisa de cada desajuste («la ficha dice X € y el último punto del historial Y €»).
- Fichas nuevas con precio que aún no estén en el JSON salen con un punto (precio de la ficha + fecha del build). Para guardarlas en el JSON con la fecha del commit que fijó el precio: `node scripts/historial-precios/seed.mjs` (solo añade fichas que faltan, nunca toca las existentes).
- Sección nueva (caravanas...): añadirla a `SECCIONES` en `scripts/historial-precios/fichas.mjs` y poner `<HistorialPrecios slug=... nombre=... />` en su página de ficha.

## Formato de `src/data/historial-precios.json`

```json
{
  "_leeme": "...",
  "fichas": {
    "<slug>": [ {"fecha": "AAAA-MM-DD", "precio": 12345, "moneda": "EUR", "fuente": "ficha | radar-precios (...) | https://...", "aprox": true} ]
  },
  "_revisar": { "<slug>": [ ... ] }
}
```

- `fuente: "ficha"`: precio publicado en la ficha; la fecha es la del último commit que fijó ese precio (siembra del 17/10/2026).
- `fuente: "radar-precios (...)"`: puntos del antiguo radar de precios (cron `recurretumulta-radar-precios`, 03-12/10/2026, PVP «desde» verificado en web oficial / km77 / carwow).
- `aprox: true`: la ficha marca el precio como aproximado (≈); el bloque dice «dato aproximado, registrado DD/MM/AAAA».
- `_revisar`: puntos del radar antiguo que no cuadran con el precio actual de la ficha. **No se muestran.** Niky: verifica y, si son buenos, pásalos al CSV con su URL.
