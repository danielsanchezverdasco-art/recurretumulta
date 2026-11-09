# rev3.py — medidor oficial de unicidad (Cosa)
Mide frases de 8+ palabras repetidas que crea la rama de Merlín frente a TODO el código en vivo (src/*.ts|tsx|json).
Uso: clona el repo, ajusta en la línea 2: R=ruta de tu clon, LIVE=c94f7b99e (base en vivo), B=21abc9238, M=origin/merlin-unicidad-2610, PREV=7130be2c (o el commit desde el que quieras medir). Cambia la ruta de salida de la última línea. `python3 rev3.py`.
Resultado: rev3.json con, por commit, las frases nuevas vs vivo y el acumulado de la rama. Objetivo: acumulado = 0.
