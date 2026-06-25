import fs from 'fs';
import puppeteer from 'puppeteer-core';
const CH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
let out='';
try{
const b=await puppeteer.launch({executablePath:CH,headless:'new',args:['--no-sandbox','--hide-scrollbars']});
const p=await b.newPage(); await p.setViewport({width:1440,height:900});
await p.goto('http://localhost:4360/',{waitUntil:'load'});
await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,150));}window.scrollTo(0,0);await new Promise(r=>setTimeout(r,400));});
await p.evaluate(()=>Promise.all([...document.querySelectorAll('img')].map(i=>i.complete?0:new Promise(r=>{i.onload=i.onerror=r;}))));
const imgs=await p.evaluate(()=>[...document.querySelectorAll('img')].map(i=>{const r=i.getBoundingClientRect();const d=getComputedStyle(i).display;return {s:(i.currentSrc||i.src).split('/').pop(),broken:!(i.complete&&i.naturalWidth>0),nat:i.naturalWidth+'x'+i.naturalHeight,rend:Math.round(r.width)+'x'+Math.round(r.height),d};}));
for(const i of imgs){const f=[];if(i.broken)f.push('BROKEN');if(i.rend==='0x0')f.push('0x0'+(i.d==='none'?'(display:none)':''));out+=(f.length?'WARN '+f.join(','):'ok').padEnd(24)+' r='+i.rend+' nat='+i.nat+' '+i.s+'\n';}
await b.close();
}catch(e){out+='ERROR: '+e.message+'\n';}
fs.writeFileSync('/tmp/audit_out.txt',out||'(no images)');
