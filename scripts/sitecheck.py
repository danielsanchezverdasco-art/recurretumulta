import re,sys,concurrent.futures as cf,urllib.request
B=sys.argv[1];O="https://recurretumulta.online"
L=re.findall(r"<loc>([^<]*)",open('dist/sitemap.xml').read())
class N(urllib.request.HTTPRedirectHandler):
  def redirect_request(s,*a,**k): return None
op=urllib.request.build_opener(N)
def f(u):
  p=u[len(O):]
  if not p.endswith('/'): return (u,'noslash')
  for i in range(3):
    try:
      r=op.open(urllib.request.Request(B+p,headers={"User-Agent":"Mozilla/5.0 (compatible; Googlebot/2.1)"}),timeout=30);h=r.read().decode('utf8','ignore')
      c=re.search(r'rel="canonical" href="([^"]+)"',h)
      if not c or c.group(1)!=u: return (u,'canon '+(c.group(1) if c else 'none'))
      if 'Algo salió mal' in h: return (u,'algo')
      return None
    except urllib.error.HTTPError as e: return (u,'http %d'%e.code)
    except Exception as e: err=str(e)
  return (u,'err '+err)
with cf.ThreadPoolExecutor(32) as ex: bad=[x for x in ex.map(f,L) if x]
print(len(L),'malas',len(bad));[print(b) for b in bad[:15]]
