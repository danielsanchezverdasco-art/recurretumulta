import { chromium } from 'playwright';
const B=process.argv[2]; const P=['/','/blog/aito-m7-2025-precio-ficha-tecnica/','/blog/stelato-g9-erev-2026-precio-ficha-tecnica/','/coches/stelato-g9-erev-2026-precio-ficha-tecnica/','/motos/sym-symphony-sr-125-abs-2026-ficha-tecnica-precio/','/patinetes/currus-panther/','/multas/madrid/'];
const b=await chromium.launch(); let bad=0;
for(const p of P){const ctx=await b.newContext({userAgent:'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X) AppleWebKit/537.36 Chrome/129 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'});
await ctx.addInitScript(()=>{delete window.WebSocket;window.WebSocket=undefined;});await ctx.route(/convex|wss:/,r=>r.abort());
const pg=await ctx.newPage(); const res=await fetch(B+p,{headers:{'User-Agent':'Mozilla/5.0 Chrome/129'}}); const html=await res.text();
const st=(html.match(/<title>([^<]*)<\/title>/)||[])[1]; const sd=(html.match(/<meta name="description" content="([^"]*)"/)||[])[1];
await pg.goto(B+p,{waitUntil:'load'}); await pg.waitForTimeout(4000);
const r=await pg.evaluate(()=>({t:document.title,d:document.querySelector('meta[name="description"]')?.content}));
const dec=s=>s?.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const ok=r.t===dec(st)&&r.d===dec(sd); if(!ok)bad++; console.log(ok?'OK ':'BAD',p,'|',r.t, ok?'':'| esperado: '+st);await ctx.close();}
console.log('distintos',bad);await b.close();
