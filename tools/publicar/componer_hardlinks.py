#!/usr/bin/env python3
"""Compone un stage nuevo: hardlinks del base y bytes nuevos solo del overlay.

No escribe en el base. No copia los ficheros que no cambian. No borra nada.
Si el libre menos el presupuesto de directorios no cubre la reserva, no crea
el destino. No sustituye el rehash del control oficial.
"""
import hashlib, math, os, stat, sys, tarfile

RESERVA_DEFECTO = 1000000000


class Rechazo(Exception):
    def __init__(self, codigo, mensaje):
        super().__init__(mensaje)
        self.codigo = codigo


def rec_len(nombre):
    return (8 + len(os.fsencode(nombre)) + 3) & ~3


def bloques_de_directorio(nombres, bloque):
    """Bloques de datos del directorio nuevo, hojas más índice htree si se parte."""
    usado = rec_len(".") + rec_len("..")
    for nombre in nombres:
        usado += rec_len(nombre)
    hojas = max(1, math.ceil(usado / bloque))
    if hojas <= 1:
        return hojas
    por_bloque = max(bloque // 8, 1)
    return hojas + 1 + math.ceil(hojas / por_bloque)


def cabe(libre, presupuesto, reserva):
    return libre - presupuesto >= reserva


def ruta_segura(nombre):
    nombre = nombre.replace("\\", "/").strip()
    while nombre.startswith("./"):
        nombre = nombre[2:]
    if not nombre or nombre.startswith("/"):
        return None
    partes = nombre.split("/")
    if any(p in ("", ".", "..") for p in partes):
        return None
    return "/".join(partes)


def mismo_arbol(a, b):
    a = os.path.abspath(a)
    b = os.path.abspath(b)
    return a == b or a.startswith(b + os.sep) or b.startswith(a + os.sep)


def leer_miembros(overlay):
    """Lista (ruta, tamaño, lector) sin escribir. El lector devuelve los bytes."""
    if os.path.isdir(overlay):
        salida = []
        for dirpath, dirnames, names in os.walk(overlay, followlinks=False):
            dirnames.sort()
            for name in sorted(names):
                rel = ruta_segura(os.path.relpath(os.path.join(dirpath, name), overlay))
                if rel is None:
                    raise Rechazo(6, "ruta de overlay insegura")
                p = os.path.join(dirpath, name)
                modo = os.lstat(p).st_mode
                if not stat.S_ISREG(modo):
                    raise Rechazo(6, "el overlay solo admite ficheros regulares: " + rel)
                size = os.path.getsize(p)

                def lector(path=p):
                    with open(path, "rb") as f:
                        return f.read()

                salida.append((rel, size, lector))
        return salida
    if not tarfile.is_tarfile(overlay):
        raise Rechazo(2, "el overlay no es un directorio ni un tar")
    tar = tarfile.open(overlay, "r:*")
    salida = []
    try:
        for member in tar.getmembers():
            if member.isdir():
                continue
            rel = ruta_segura(member.name)
            if rel is None:
                raise Rechazo(6, "ruta de overlay insegura: " + member.name)
            if not member.isreg():
                raise Rechazo(6, "el overlay solo admite ficheros regulares: " + rel)
            size = member.size

            def lector(m=member, t=tar):
                f = t.extractfile(m)
                if f is None:
                    raise Rechazo(6, "no se puede leer " + m.name)
                return f.read()

            salida.append((rel, size, lector))
    except Rechazo:
        tar.close()
        raise
    if not salida:
        tar.close()
        raise Rechazo(6, "el overlay no tiene ficheros")
    # El tar se cierra cuando el proceso termina. Los lectores lo usan antes.
    leer_miembros.abiertos.append(tar)
    return salida


leer_miembros.abiertos = []


def medir(base, bloque, extras):
    """Stat del base. No lee el contenido. extras son rutas nuevas del overlay."""
    dirs = {}
    ficheros = []
    for dirpath, dirnames, names in os.walk(base, followlinks=False):
        dirnames.sort()
        names.sort()
        rel = os.path.relpath(dirpath, base).replace(os.sep, "/")
        if rel == ".":
            rel = ""
        hijos = list(dirnames) + list(names)
        dirs[rel] = hijos
        for name in names:
            p = os.path.join(dirpath, name)
            st = os.lstat(p)
            ruta = name if not rel else rel + "/" + name
            if stat.S_ISREG(st.st_mode) or stat.S_ISLNK(st.st_mode):
                ficheros.append((ruta, st))
            else:
                raise Rechazo(6, "el base tiene un tipo que no se enlaza: " + ruta)
    extra_dirs = []
    for rel in extras:
        padre = os.path.dirname(rel)
        while padre and padre not in dirs and padre not in extra_dirs:
            extra_dirs.append(padre)
            padre = os.path.dirname(padre)
    bloques = 0
    for rel, hijos in dirs.items():
        nombres = list(hijos)
        for ruta in extras:
            padre = os.path.dirname(ruta)
            if padre == rel and os.path.basename(ruta) not in nombres:
                nombres.append(os.path.basename(ruta))
        bloques += bloques_de_directorio(nombres, bloque)
    for rel in extra_dirs:
        bloques += bloques_de_directorio([os.path.basename(rel)], bloque)
    return dirs, ficheros, bloques, extra_dirs


def presupuesto_bytes(bloques_dir, tamanos, bloque):
    datos = 0
    for tam in tamanos:
        datos += math.ceil(tam / bloque) * bloque
    # Un bloque más por fichero nuevo: el dirent puede abrir otro bloque del padre.
    return bloques_dir * bloque + datos + len(tamanos) * bloque


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def informar(linea):
    print(linea, flush=True)


def componer(base, overlay, dest, reserva, medir_solo=False):
    base = os.path.abspath(base)
    dest = os.path.abspath(dest)
    if not os.path.isdir(base):
        raise Rechazo(2, "el base no es un directorio")
    if os.path.lexists(dest):
        raise Rechazo(2, "el destino ya existe; no se reutiliza ni se borra")
    padre = os.path.dirname(dest)
    if not os.path.isdir(padre):
        raise Rechazo(2, "no existe el directorio padre del destino")
    if mismo_arbol(base, dest):
        raise Rechazo(2, "el destino no puede estar dentro del base ni al revés")
    if os.stat(base).st_dev != os.stat(padre).st_dev:
        raise Rechazo(4, "base y destino no están en el mismo dispositivo; no se copia")
    miembros = leer_miembros(overlay)
    vistos = set()
    for rel, _tam, _lector in miembros:
        if rel in vistos:
            raise Rechazo(6, "ruta repetida en el overlay: " + rel)
        vistos.add(rel)
    vfs = os.statvfs(padre)
    bloque = vfs.f_frsize or vfs.f_bsize or 4096
    dirs, ficheros, bloques, extra_dirs = medir(base, bloque, vistos)
    pres = presupuesto_bytes(bloques, [tam for _r, tam, _l in miembros], bloque)
    libre = vfs.f_bavail * bloque
    inodos = len(dirs) + len(extra_dirs) + len(miembros)
    decision = "CABE" if cabe(libre, pres, reserva) and vfs.f_favail >= inodos else "NO_CABE"
    informar(
        "PRESUPUESTO dirs=%d dir_bloques=%d nuevo=%d libre=%d reserva=%d inodos_nuevos=%d inodos_libres=%d decision=%s"
        % (len(dirs) + len(extra_dirs), bloques, pres, libre, reserva, inodos, vfs.f_favail, decision)
    )
    if decision != "CABE":
        raise Rechazo(3, "no cabe sin bajar de la reserva; no se crea el destino y no se borra nada")
    if medir_solo:
        informar("MEDICION sola; no se ha creado el destino")
        return {"presupuesto": pres, "libre": libre, "decision": decision}
    antes = {}
    hashes = {}
    for ruta, st in ficheros:
        antes[ruta] = (st.st_dev, st.st_ino, st.st_nlink, st.st_size, st.st_mtime_ns)
        if ruta in vistos and stat.S_ISREG(st.st_mode):
            hashes[ruta] = sha256(os.path.join(base, ruta))
    enlaces = {}
    try:
        os.mkdir(dest)
        for rel in sorted(dirs):
            if rel:
                os.makedirs(os.path.join(dest, rel), exist_ok=True)
        for rel in extra_dirs:
            os.makedirs(os.path.join(dest, rel), exist_ok=True)
        for ruta, st in ficheros:
            if ruta in vistos:
                continue
            origen = os.path.join(base, ruta)
            destino = os.path.join(dest, ruta)
            os.link(origen, destino, follow_symlinks=False)
            enlaces[st.st_ino] = enlaces.get(st.st_ino, 0) + 1
        escritos = {}
        for rel, _tam, lector in miembros:
            datos = lector()
            if len(datos) != _tam:
                raise Rechazo(6, "el tamaño leído no coincide con el anunciado: " + rel)
            destino = os.path.join(dest, rel)
            fd = os.open(destino, os.O_CREAT | os.O_EXCL | os.O_WRONLY, 0o644)
            try:
                vista = memoryview(datos)
                while vista:
                    n = os.write(fd, vista)
                    if n <= 0:
                        raise OSError("escritura vacía en " + rel)
                    vista = vista[n:]
                os.fsync(fd)
            finally:
                os.close(fd)
            escritos[rel] = hashlib.sha256(datos).hexdigest()
    except Rechazo:
        if os.path.lexists(dest):
            informar("DESTINO PARCIAL no usar; no se ha borrado")
        raise
    except OSError as e:
        if os.path.lexists(dest):
            informar("DESTINO PARCIAL no usar; no se ha borrado")
        raise Rechazo(4, "falló el hardlink, no se copia: " + str(e))
    fallos = []
    for ruta, (dev, ino, nlink, size, mtime) in antes.items():
        ahora = os.lstat(os.path.join(base, ruta))
        if (ahora.st_dev, ahora.st_ino, ahora.st_size, ahora.st_mtime_ns) != (dev, ino, size, mtime):
            fallos.append("el base cambió: " + ruta)
            continue
        nuevo = os.lstat(os.path.join(dest, ruta))
        if ruta in vistos:
            if nuevo.st_ino == ino or ahora.st_nlink != nlink:
                fallos.append("el overlay compartió el inodo del base: " + ruta)
            if ruta in hashes and stat.S_ISREG(ahora.st_mode) and sha256(os.path.join(base, ruta)) != hashes[ruta]:
                fallos.append("los bytes del base cambiaron: " + ruta)
        else:
            if (nuevo.st_dev, nuevo.st_ino) != (dev, ino):
                fallos.append("se duplicó el inodo: " + ruta)
            if ahora.st_nlink != nlink + enlaces.get(ino, 0):
                fallos.append("nlink inesperado: " + ruta)
    for rel, digest in escritos.items():
        if sha256(os.path.join(dest, rel)) != digest:
            fallos.append("el overlay escrito no coincide: " + rel)
        if rel not in antes and os.path.lexists(os.path.join(base, rel)):
            fallos.append("el overlay apareció en el base: " + rel)
    if fallos:
        informar("DESTINO PARCIAL no usar; no se ha borrado")
        raise Rechazo(5, "conservación fallida: " + "; ".join(fallos[:8]))
    informar(
        "CONSERVACION hardlinks=%d nuevos=%d inodos_base=%d bytes_base_intactos=%d"
        % (sum(enlaces.values()), len(escritos), len(antes), len(antes))
    )
    return {"presupuesto": pres, "libre": libre, "decision": decision, "nuevos": escritos}


def main(argv):
    if len(argv) < 2 or argv[1] in ("-h", "--help"):
        print("uso: componer_hardlinks.py --base DIR --overlay TAR|DIR --dest DIR [--reserva N] [--medir]")
        return 2
    base = overlay = dest = None
    reserva = RESERVA_DEFECTO
    medir_solo = False
    i = 1
    while i < len(argv):
        op = argv[i]
        if op == "--medir":
            medir_solo = True
            i += 1
            continue
        if op in ("--base", "--overlay", "--dest", "--reserva"):
            if i + 1 >= len(argv):
                print("falta el valor de", op)
                return 2
            valor = argv[i + 1]
            i += 2
            if op == "--base":
                base = valor
            elif op == "--overlay":
                overlay = valor
            elif op == "--dest":
                dest = valor
            else:
                reserva = int(valor)
            continue
        print("opción desconocida", op)
        return 2
    if not base or not overlay or not dest:
        print("hacen falta --base, --overlay y --dest")
        return 2
    if reserva < 0:
        print("la reserva no puede ser negativa")
        return 2
    try:
        componer(base, overlay, dest, reserva, medir_solo=medir_solo)
    except Rechazo as e:
        print(e)
        return e.codigo
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
