# Convex — variable de build (Plan AdSense p1, 23/10/2026)

## La variable EXACTA

En **Netlify > Site settings > Environment**:

```
VITE_CONVEX_URL=https://handsome-rhinoceros-259.eu-west-1.convex.cloud
```

Copiar **carácter por carácter**. No vale la URL sin región
(`https://handsome-rhinoceros-259.convex.cloud`): responde **404** y deja
muertos en la web en vivo:

- ⭐ «Puntúa este coche» (votos) — `audiencia:puntuar`, `audiencia:ficha`
- ⚔️ Duelo — `audiencia:duelo`, `audiencia:votarDuelo`
- 🗳️ «¿Lo comprarías?» — `audiencia:comprarias`
- 🏆 Favoritos del mes — `audiencia:favoritosMes`
- 👍😮😡 Reacciones del blog — `audiencia:reacciones`, `audiencia:reaccionar`
- 👁️ Contador de visitas — `audiencia:visita`

(Las opiniones/valoraciones del lector viven en `resenasVehiculos:*`; usan el
mismo cliente Convex, así que también dependen de esta variable.)

## Guardas automáticas

1. **Build** (`scripts/check-convex-url.mjs`, corre primero en `npm run build`):
   falla con error explícito si `VITE_CONVEX_URL` está definida y no es
   `https://*.eu-west-1.convex.cloud`.
2. **Runtime** (`src/components/providers/convex-lazy.tsx`): si la URL no es
   regional, `console.error` alto y claro. La web **no se rompe**: si Convex
   no responde, la sección de audiencia queda en degradado elegante
   (fallback/inerte), como ya hacía.

## Verificación rápida tras el build

En `dist/`, la URL regional debe aparecer y la no regional no:

```sh
grep -o "https://handsome-rhinoceros-259.eu-west-1.convex.cloud" dist/assets/*.js | head -1
grep -ro "https://handsome-rhinoceros-259\.convex\.cloud" dist/ || echo "OK: sin URL no regional"
```

## Funciones exactas en `convex/audiencia.ts`

`audiencia:ficha` · `audiencia:puntuar` · `audiencia:comprarias` ·
`audiencia:duelo` · `audiencia:votarDuelo` · `audiencia:visita` ·
`audiencia:favoritosMes` · `audiencia:reacciones` · `audiencia:reaccionar`
(`audiencia:purgar` es internalMutation: solo la llama el cron interno,
nunca el frontend ni la HTTP API.)
