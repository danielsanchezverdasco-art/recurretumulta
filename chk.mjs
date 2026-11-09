import { chromium, devices } from 'playwright';
const B=process.argv[2]; const out=[];
const b=await chromium.launch();
const ctx=await b.newContext({...devices['Pixel 7'],userAgent:'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'});
const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message.slice(0,120)));
for (const u of ['/','/coches/','/motos/','/patinetes/','/juego-monos/','/juego-monos/bases/','/patinetes/kukirin-c1-pro/','/blog/fangchengbao-tai-9-suv-6-plazas/','/motos/aprilia-tuono-v4-2025-ficha-tecnica-precio/']){
  const r=await p.goto(B+u,{waitUntil:'load'}); const st=r.status(); const staticT=await (await fetch(B+u)).text().then(t=>(t.match(/<title>([^<]*)/)||[])[1]);
  await p.waitForTimeout(5500);
  const d=await p.evaluate(()=>({t:document.title,can:document.querySelector('link[rel=canonical]')?.href,txt:document.body.innerText,imgs:[...document.images].filter(i=>i.complete&&i.naturalWidth>0).map(i=>i.currentSrc||i.src),cookie:!!document.querySelector('[aria-label="Aviso de cookies"]'),broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0&&i.src&&!i.src.startsWith('data')).length}));
  const info={u,st,titleOk:d.t===staticT?'ok':`${staticT} -> ${d.t}`,can:d.can===`https://recurretumulta.online${u}`,cookie:d.cookie,broken:d.broken};
  if(u.startsWith('/juego')) Object.assign(info,{contador:/llevan vivos/.test(d.txt),r350:/1º en (encontrar|cazar|completar) los 350/.test(d.txt)||/350 monos/.test(d.txt),oct31:/31 de octubre/.test(d.txt),dorado1y:/1 año de recursos gratis/.test(d.txt),badge:/PREMIO: 1\.500/.test(d.txt)});
  if(/kukirin|fangcheng|tuono/.test(u)) info.foto=d.imgs.some(s=>/kukirin-c1-pro|fangchengbao-tai-9-hero|aprilia-tuono-v4-2025-ficha-tecnica-precio-1/.test(s));
  if(u==='/') info.contadorHome=/llevan vivos/.test(d.txt);
  if(/^\/(coches|motos|patinetes)\/$/.test(u)) info.n=(d.txt.match(/(\d+) fichas/)||[])[1];
  out.push(info);
}
console.log(out.map(x=>JSON.stringify(x)).join('\n'),'\nERR',JSON.stringify(errs.slice(0,5)));await b.close();
