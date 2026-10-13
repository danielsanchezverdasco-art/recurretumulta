import { chromium } from 'playwright';
import fs from 'fs';
const L=JSON.parse(fs.readFileSync(process.argv[2]));const out='/workspace/fotos97/c2';
const b=await chromium.launch({args:['--disable-blink-features=AutomationControlled']});
const ctx=await b.newContext({userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36',viewport:{width:1440,height:1000},locale:'es-ES'});
const man=fs.existsSync(out+'/man.json')?JSON.parse(fs.readFileSync(out+'/man.json')):{};
for(const {slug,url} of L){const pg=await ctx.newPage();try{
 await pg.goto(url,{waitUntil:'domcontentloaded',timeout:45000});await pg.waitForTimeout(3500);
 for(let y=0;y<4;y++){await pg.mouse.wheel(0,1200);await pg.waitForTimeout(500);}
 const r=await pg.evaluate(()=>{const og=document.querySelector('meta[property="og:image"]')?.content;
  const im=[...document.images].map(i=>({s:i.currentSrc||i.src,w:i.naturalWidth,h:i.naturalHeight,a:i.alt||''})).filter(i=>i.w>=700&&i.h>=350&&!/logo/i.test(i.s));
  return {og,im}});
 const seen=new Set();const c=[];if(r.og)c.push({s:r.og,a:'og'});
 r.im.sort((a,b)=>b.w*b.h-a.w*a.h);for(const i of r.im)c.push(i);
 let n=0;man[slug]={url,files:[]};
 for(const x of c){if(n>=4||seen.has(x.s))continue;seen.add(x.s);try{const resp=await ctx.request.get(x.s,{timeout:30000});if(!resp.ok())continue;const buf=await resp.body();if(buf.length<15000)continue;const f=`${slug}__${n}.img`;fs.writeFileSync(`${out}/${f}`,buf);man[slug].files.push({f,src:x.s,alt:x.a});n++;}catch(e){}}
 console.log(slug,n,url);
}catch(e){console.log(slug,'ERR',e.message.slice(0,80));man[slug]={url,err:1,files:[]};}await pg.close();fs.writeFileSync(out+'/man.json',JSON.stringify(man,null,1));}
await b.close();
