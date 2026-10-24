"""Mide 8-gramas de las 50 paginas de la tanda contra todas las demas paginas del corpus.
Salida: colisiones.json + resumen por pagina. Bloque = unidad de texto (pro/contra/parrafo/FAQ)."""
import json, re, sys
sys.path.insert(0, 'hidden_files/unico-coches-50-v-001')
from extraer_corpus import norm

def blocks_grams(blocks):
    out = []  # (block_idx, set(grams))
    for i, b in enumerate(blocks):
        w = norm(b).split()
        gs = {' '.join(w[j:j+8]) for j in range(len(w)-7)} if len(w) >= 8 else set()
        out.append((i, gs))
    return out

def main(corpus_path, batch_path, out_path):
    corpus = json.load(open(corpus_path, encoding='utf-8'))
    batch = json.load(open(batch_path, encoding='utf-8'))  # [{slug, tipo, url}]
    batch_urls = {p['url'] for p in batch}
    # indice de grams de la tanda
    gram_to_batch = {}
    batch_grams = {}  # url -> {block_idx: set(grams)}
    for p in batch:
        src = corpus['fichas'] if p['tipo'] == 'ficha' else corpus['blogs']
        bg = blocks_grams(src[p['slug']])
        batch_grams[p['url']] = {i: gs for i, gs in bg}
        for i, gs in bg:
            for g in gs:
                gram_to_batch.setdefault(g, set()).add(p['url'])
    # colisiones: url_tanda -> {gram: set(url_otras)}
    batch_gram_set = set(gram_to_batch)
    collisions = {u: {} for u in batch_urls}
    def check_page(url, blocks):
        bg = blocks_grams(blocks)
        for i, gs in bg:
            for g in gs & batch_gram_set:
                for bu in gram_to_batch[g]:
                    if bu != url:
                        collisions[bu].setdefault(g, set()).add(url)
    for slug, blocks in corpus['fichas'].items():
        url = f'/coches/{slug}/'
        if url not in batch_urls:
            check_page(url, blocks)
    for slug, blocks in corpus['blogs'].items():
        url = f'/blog/{slug}/'
        if url not in batch_urls:
            check_page(url, blocks)
    # colisiones dentro de la tanda (tanda contra tanda)
    for p in batch:
        for i, gs in batch_grams[p['url']].items():
            for g in gs:
                for bu in gram_to_batch[g]:
                    if bu != p['url']:
                        collisions[p['url']].setdefault(g, set()).add(bu)
    # resumen
    resumen = []
    for p in batch:
        url = p['url']
        total = sum(len(gs) for gs in batch_grams[url].values())
        col = collisions[url]
        otras = set()
        for s in col.values(): otras |= s
        # bloques con colision
        bloques_col = {}
        for i, gs in batch_grams[url].items():
            n = len([g for g in gs if g in col])
            if n: bloques_col[i] = n
        resumen.append({'url': url, 'slug': p['slug'], 'tipo': p['tipo'],
                        'grams_totales': total, 'grams_colision': len(col),
                        'paginas_otras': len(otras), 'bloques_con_colision': bloques_col})
    json.dump({'resumen': resumen,
               'colisiones': {u: {g: sorted(s) for g, s in c.items()} for u, c in collisions.items()}},
              open(out_path, 'w', encoding='utf-8'), ensure_ascii=False)
    tot = sum(r['grams_colision'] for r in resumen)
    print(f"paginas: {len(resumen)}, grams en colision (tanda): {tot}")
    for r in resumen:
        print(f"{r['grams_colision']:5d} col / {r['grams_totales']:5d} tot | {r['paginas_otras']:4d} otras | {r['url']}")

if __name__ == '__main__':
    main('hidden_files/unico-coches-50-v-001/corpus.json',
         'hidden_files/unico-coches-50-v-001/tanda50.json',
         'hidden_files/unico-coches-50-v-001/colisiones.json')
