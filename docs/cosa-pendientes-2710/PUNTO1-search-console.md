# ORD-0613 punto 1 — errores de Search Console (27/10/2026)

Listas usadas (no hay export completo más reciente): /workspace/seo/cobertura-urls-2026-10-24.csv (export completo de GSC del 24/10:
98 404, 6 error de redirección, 8 soft 404, 5 5xx), cobertura-urls-2026-10-26.csv (muestras de 10 por motivo del 26/10, datos GSC 19/10)
y gsc-indexacion-2026-10-13/{03,06,07,09}. Unión: 104 404, 11 error de redirección, 9 soft 404, 6 5xx (gsc-errores-lista-2710.tsv).

Estado en vivo (curl con UA Googlebot, 27/10 ~09:35 Europe/Madrid; gsc-errores-estado-vivo-2710.tsv):
- 121 URLs ya dan 301 -> 200 en 1 salto (lo arreglaron rondas anteriores, en vivo 6adf20d7). 1 da 200 directo.
- Siguen mal: /blog/subaru-brz-24, /blog/alpine-a110, /blog/dongfeng-007-2025-precio-ficha-tecnica, /blog/toyota-rav4-hybrid-2026
  (404; 301 a su ficha /coches/ ya en a4370d5c6), /pt/blog/gasolina-mas-de-2-euros-espana-2026 (301 -> 404; 301 directo en a4370d5c6
  y ahora también /blog/gasolina-mas-de-2-euros-espana-2026), /blog/municipios-mais-multas-transito-portugal-2026 (410 -> ahora 301 al
  post de multas en el extranjero, que cubre Portugal/ANSR), /gana-dinero (410, sin equivalente: se queda 410) y /herramientas/*
  (no es URL real: sale de speculationrules en index.html; se deja 404 y se quita el splat no forzado de a4370d5c6 por riesgo).
- Error de redirección (11): todas resuelven hoy en 1 salto a 200 (o 200 directo). Nada que cambiar.
- Soft 404 (9, comparador-coches sin barra y ?a=): hoy 301 -> /comparador-coches/?a=... 200 (1.264 palabras, canonical /comparador-coches/). Nada que cambiar.
- 5xx (6, incl. 2 de comparador-motos?a=): hoy todas 301 -> 200; no hay funciones/edge en esas rutas: fallo transitorio. Nada que cambiar.
- Destinos de todas las reglas nuevas comprobados en vivo con curl: 200, sin cadenas (0 destinos que sean origen de otra regla).
