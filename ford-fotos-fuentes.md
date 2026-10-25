# Fuentes de fotos oficiales — Ford Nugget Active / Trail

> Todas son **fotos del kit de prensa oficial de Ford Europa** (distribuidas a medios; sin marcas de agua).
> Active = kit agosto 2024 (5.ª generación). Trail = kit agosto 2021 (4.ª generación; la 5.ª gen actual solo ofrece Titanium/Active).
> Estado: URLs verificadas (nombre de fichero/caption del medio). La descarga y verificación visual quedan pendientes (ver NOTA al final).

| Fichero destino | URL origen (kit de prensa Ford) | Confianza |
|---|---|---|
| `ford-nugget-active-2026-oficial-ext.webp` | https://fordauthority.com/wp-content/uploads/2024/08/2024-Ford-Transit-Nugget-Active-PHEV-Press-Photos-Exterior-006-side-tilt-roof-720x463.jpg | ALTA — nombre oficial "Press-Photos", vista lateral Active LWB con techo elevable |
| `ford-nugget-active-2026-oficial-int1.webp` | https://fordauthority.com/wp-content/uploads/2023/08/2024-Ford-Transit-PHEV-Nugget-Camper-Van-Reveal-Photos-Interior-004-kitchen-720x480.jpeg | ALTA — cocina en L del kit de prensa Ford |
| `ford-nugget-active-2026-oficial-int2.webp` | https://fordauthority.com/wp-content/uploads/2024/08/2024-Ford-Transit-Nugget-Active-PHEV-Press-Photos-Interior-002-rear-seating-720x480.jpg | ALTA — zona de estar trasera del Active, kit ago-2024 |
| `ford-nugget-trail-2026-oficial-ext.webp` | https://www.autonocion.com/wp-content/uploads/2021/08/Ford-Transit-Custom-Nugget-5.jpg | ALTA — caption del medio: "Ford Transit Custom Nugget Trail rojo" |
| `ford-nugget-trail-2026-oficial-int1.webp` | https://www.autonocion.com/wp-content/uploads/2021/08/Ford-Transit-Custom-Nugget-4.jpg | MEDIA — caption: "Ford Transit Custom Nugget Trail"; **verificar visualmente que sea interior** |
| `ford-nugget-trail-2026-oficial-int2.webp` | https://i.bstr.es/espaciofurgo/2021/08/Ford-Transit-Custom-Nugget-Trail-08-1536x1029.jpg.webp | MEDIA — galería de prensa 2021 en espaciofurgo; **verificar visualmente que sea interior del Trail** |

## Comandos para descargar y convertir (ejecutar donde haya egress directo)

```bash
mkdir -p ~/workspace/wt-campers/public/media && cd ~/workspace/wt-campers/public/media
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
dl() { curl -fsSL --connect-timeout 15 --max-time 60 -A "$UA" -H 'Accept: image/*' -o "$2" "$1"; }
dl "https://fordauthority.com/wp-content/uploads/2024/08/2024-Ford-Transit-Nugget-Active-PHEV-Press-Photos-Exterior-006-side-tilt-roof-720x463.jpg" active-ext.jpg
dl "https://fordauthority.com/wp-content/uploads/2023/08/2024-Ford-Transit-PHEV-Nugget-Camper-Van-Reveal-Photos-Interior-004-kitchen-720x480.jpeg" active-int1.jpg
dl "https://fordauthority.com/wp-content/uploads/2024/08/2024-Ford-Transit-Nugget-Active-PHEV-Press-Photos-Interior-002-rear-seating-720x480.jpg" active-int2.jpg
dl "https://www.autonocion.com/wp-content/uploads/2021/08/Ford-Transit-Custom-Nugget-5.jpg" trail-ext.jpg
dl "https://www.autonocion.com/wp-content/uploads/2021/08/Ford-Transit-Custom-Nugget-4.jpg" trail-int1.jpg
dl "https://i.bstr.es/espaciofurgo/2021/08/Ford-Transit-Custom-Nugget-Trail-08-1536x1029.jpg.webp" trail-int2.webp
python3 - <<'EOF'
from PIL import Image
import os
jobs = [
 ("active-ext.jpg","ford-nugget-active-2026-oficial-ext.webp"),
 ("active-int1.jpg","ford-nugget-active-2026-oficial-int1.webp"),
 ("active-int2.jpg","ford-nugget-active-2026-oficial-int2.webp"),
 ("trail-ext.jpg","ford-nugget-trail-2026-oficial-ext.webp"),
 ("trail-int1.jpg","ford-nugget-trail-2026-oficial-int1.webp"),
 ("trail-int2.webp","ford-nugget-trail-2026-oficial-int2.webp"),
]
for src,dst in jobs:
    im = Image.open(src).convert("RGB")
    q = 80
    im.save(dst, "WEBP", quality=q, method=6)
    while os.path.getsize(dst) > 300*1024 and q > 40:
        q -= 10
        im.save(dst, "WEBP", quality=q, method=6)
    print(dst, os.path.getsize(dst)//1024, "KB q=", q)
EOF
```

## NOTA — descarga bloqueada en el sandbox del subagente

`curl` no tiene egress en este entorno: el proxy `hatch-egress-proxy:3128` aborta con timeout **todas** las conexiones directas (probado con fordauthority.com, i.bstr.es, espaciofurgo.com, google.com y example.com, en HTTP y HTTPS). Solo funcionan las herramientas de lectura web (texto). Por eso:
1. Las 6 fotos **no están descargadas** en `public/media/` (directorio creado, vacío).
2. La **verificación visual con `muse.read` no se pudo hacer**; las URLs de confianza MEDIA deben comprobarse tras la descarga (que la foto sea del modelo exacto y sea interior donde se indica).
