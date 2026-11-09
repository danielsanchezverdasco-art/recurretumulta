import { chromium } from "playwright";
import fs from "node:fs";
const base=process.argv[2]; const urls=fs.readFileSync("/tmp/sanity.txt","utf8").split("\n").filter(Boolean);
const b=await chromium.launch(); const c=await b.newContext({viewport:{width:390,height:800},isMobile:true,hasTouch:true}); let bad=0;
for (const u of urls){ const p=await c.newPage(); let st=0; try{ const r=await p.goto(base+u,{waitUntil:"domcontentloaded",timeout:30000}); st=r.status(); await p.waitForTimeout(2500);}catch(e){}
 const i=await p.evaluate(()=>({t:document.title.slice(0,50),txt:document.body.innerText.length,sw:document.documentElement.scrollWidth,broken:[...document.images].filter(im=>im.complete&&im.naturalWidth===0&&im.style.display!=="none"&&im.offsetParent).length})).catch(()=>({}));
 const ok=(st===200||(u.includes("404")&&st===404))&&i.t&&i.txt>(u.includes("404")?100:300)&&i.sw<=390;
 if(!ok)bad++; console.log(ok?"OK ":"BAD",st,i.sw,i.txt,"rotas="+i.broken,u.slice(0,60),"|",i.t); await p.close(); }
console.log("fallos:",bad); await b.close();
