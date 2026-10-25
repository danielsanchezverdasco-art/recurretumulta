# Fotos 283 — C3D-13 — KuKirin G2 Master

- **Trabajador:** C3D-13 (coordinador 3, lista definitiva de Grok)
- **Slug:** `kukirin-g2-master`
- **URL:** `/patinetes/kukirin-g2-master/`
- **Resultado:** ENTREGADO (hero real verificada; sin foto interior adicional)
- **Rama:** `fotos-283-niky-c3d-13` (desde `origin/fotos-283-niky` local `90153ad80`)
- **Worktree:** `~/workspace/wt-fotos-c3d-13`

## Comprobación previa

- El slug NO estaba en `docs/comunicacion-ias/listas/fotos-283-niky.csv`
  de este worktree antes de empezar (0 coincidencias con `grep`).
- No se tocó ningún otro slug, ni el worktree principal, ni `main`,
  ni el tablón, ni Netlify.

## Entrada de datos (nombre hero esperado)

- Fichero: `src/lib/comparador-patinetes-base.ts`, línea 5597
  (`id: "kukirin-g2-master"`, marca `KuKirin`, modelo `G2 Master`).
- Campo de foto: `foto: "/media/patinetes/kukirin-g2-master.webp"`
  (no hay campo `imagenOficial` en esta entrada; se usa el `foto`).
- La hero entregada usa EXACTAMENTE ese nombre, por lo que no hace
  falta ningún cambio de datos.
- Antes de este trabajo no existía ningún fichero
  `public/media/patinetes/kukirin-g2-master.webp` en la rama base.

## Ficheros entregados

| Fichero | Tamaño (bytes) | Dimensiones | Formato |
|---|---|---|---|
| `public/media/patinetes/kukirin-g2-master.webp` (hero) | 36656 | 1200 × 800 | WebP (calidad 85) |

- Límite cumplido: 36.656 bytes < 300 KB.
- Sin marcas de agua prominentes (solo los logotipos propios del
  producto: "KuKirin" en la plataforma y "KuKirin G2 Master" en el mástil).
- No se entrega foto interior adicional: tras la descarga verificada
  de la hero, el proxy de salida empezó a devolver timeouts
  (`Proxy CONNECT aborted`) en todos los demás hosts probados
  (tienda oficial kukirinstore.com, voltride.cz, gkbcdn, etc.), así que
  no se pudo descargar una segunda toma oficial verificable. La hero
  basta para la ficha; si el coordinador quiere interior, es el único
  hueco pendiente.

## Fuente y licencia

- **Fuente:** tienda oficial europea de KuKirin (kugookirin.eu),
  página de producto "KuKirin G2 Master (NUOVA VERSIONE)".
- **URL de la imagen original (descargada tal cual, variante 1200 px):**
  `https://kugookirin.eu/cdn/shop/files/G2Master02_c94d1fa1-d14f-492b-879f-7ee4e495f730.jpg?v=1751034676&width=1200`
- **Página de producto:**
  `https://kugookirin.eu/products/kukirin-g2-master-nuova-versione-2025-garanzia-italiana-monopattino-elettrico-52v-20-8ah-ruote-10`
- **Licencia:** desconocida (foto de producto oficial; crédito:
  kugookirin.eu / KuKirin). No es IA, no es foto de banco genérico.
- **Transformación:** conversión del JPEG original (1200 × 800,
  63.898 bytes) a WebP calidad 85, sin recorte ni retoque; el contenido
  visual es idéntico al original.

## Verificación de que es el modelo exacto (visual, antes de entregar)

Verificada visualmente la imagen descargada y de nuevo tras la
conversión a WebP:

1. El mástil lleva impreso literalmente **"KuKirin G2 Master"** en
   naranja, y la plataforma lleva el logo **"KuKirin"**. No es un
   G2 (monomotor, sin esa rotulación), ni un G2 Max ni un G2 Pro
   (otros modelos de la familia, con otro diseño y rotulación).
2. Coincide con los datos de la ficha: patinete negro con detalles
   naranjas, doble suspensión de muelle naranja (delantera y trasera),
   ruedas todoterreno de 10" con taco, freno de disco delantero
   visible, plataforma ancha. Datos de la ficha: 2 × 1000 W,
   52 V / 20,8 Ah (1081 Wh), 70 km, 60 km/h, 33,1 kg.
3. Nota honesta: la toma oficial es un perfil lateral con el mástil
   en posición abatida en ángulo (foto de producto oficial
   `G2Master02`), no con el mástil vertical de marcha. El modelo es
   inequívoco por la rotulación, pero si el coordinador prefiere una
   hero con el mástil vertical, habría que buscar otra toma oficial.

## Fila CSV exacta para consolidación

```
kukirin-g2-master|kugookirin.eu|https://kugookirin.eu/cdn/shop/files/G2Master02_c94d1fa1-d14f-492b-879f-7ee4e495f730.jpg?v=1751034676&width=1200
```

## Notas de proceso (para el coordinador)

- El `git fetch` a `origin` falló por red
  (`GnuTLS recv error (-110)`); se trabajó con la ref local
  `origin/fotos-283-niky` (`90153ad80`), como permite el encargo.
- El worktree se creó con `--no-checkout` + `sparse-checkout set src
  docs README-FOTOS-283.md`; el índice quedó vacío y hubo que
  poblarlo con `git reset --hard HEAD` (sin checkout completo).
  Para poder entregar, se añadieron al sparse-checkout solo
  `public/media/patinetes` (230 ficheros, 4,8 MB) y `hidden_files`
  (23 ficheros, 98 KB): el worktree sigue siendo ligero.
- `public/media/` está en `.gitignore`: la foto se añade con
  `git add -f`, como en el resto de tandas de fotos.
