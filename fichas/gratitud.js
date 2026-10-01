/* Gratitud: Roda p45 (corazón), preguntas de p46 con redacción propia (el texto original exageraba) y diario p51. */
FICHA({clave:'gratitud',titulo:'Mi gratitud: corazón y diario',corto:'Gratitud',carp:['depresion','autoestima']});
H('¿Qué es practicar la gratitud?','📖 Lee y responde lo que te salga, sin forzarte.',
  `<h2>🧡 Notar lo bueno</h2>
   <p>Practicar la gratitud es detenerte a notar y anotar lo bueno que hay en tu día, grande o pequeño. Se asocia con un pequeño aumento
   del bienestar. No se trata de negar lo difícil ni de «tener que» sentirte agradecido(a): es una práctica más, que complementa tu proceso.</p>
   <label class="lab" for="gr_v">Agradezco mi vida porque…</label><textarea class="f" id="gr_v" rows="2"></textarea>
   <label class="lab" for="gr_c">Agradezco a mi cuerpo porque…</label><textarea class="f" id="gr_c" rows="2"></textarea>
   <label class="lab" for="gr_f">Agradezco a mi familia (o a quienes son mi familia) porque…</label><textarea class="f" id="gr_f" rows="2"></textarea>
   <label class="lab" for="gr_a">Agradezco a mis amigos porque…</label><textarea class="f" id="gr_a" rows="2"></textarea>`,
  [ta('gr_v','Agradezco mi vida porque'),ta('gr_c','Agradezco a mi cuerpo porque'),ta('gr_f','Agradezco a mi familia porque'),ta('gr_a','Agradezco a mis amigos porque')],
  {chip:'Gratitud',nota:'La gratitud no sustituye el tratamiento. Si hoy no te sale nada, está bien: vuelve otro día.'});
/* Corazón: lo que se escribe en cada número aparece dentro de su espacio y lo pinta de un color distinto (relleno por inundación sobre la imagen) */
{ const N=[[280,572],[230,677],[258,803],[329,742],[432,531],[406,677],[394,773],[348,927],[431,927],[546,887],[624,762],[521,1088],[648,642],[660,1015],[744,572],[729,904],[748,741],[802,803],[842,682],[831,943]];
  const CX=[84,220,359,488], LY=[675,693,710,727,744];
  const OFF={7:[-6,70],8:[45,40],3:[0,-6]};
  const COL=['#ef5350','#f48fb1','#ffb74d','#ba68c8','#4db6ac','#ffd54f','#64b5f6','#e57373','#81c784','#ff8a65','#f06292','#9575cd','#4fc3f7','#aed581','#ffab91','#ce93d8','#80cbc4','#fff176','#90caf9','#ef9a9a'];
  P('roda-autocuidado',45,'Gratitud en el corazón','✍️ Escribe abajo, en cada número, una persona, lugar o cosa que agradeces: aparecerá en su espacio del corazón, pintado de color.',
    CX.flatMap((x,c)=>LY.map((y,r)=>inp('gc_'+(c*5+r),`Gratitud ${c*5+r+1}`,x,y-15,86,15))),{chip:'Mi corazón'});
  let base=null, W=0, H=0; const masks={};
  const prep=img=>{ W=img.naturalWidth; H=img.naturalHeight; const c=document.createElement('canvas'); c.width=W; c.height=H; const x=c.getContext('2d'); x.drawImage(img,0,0); base=x.getImageData(0,0,W,H).data; };
  const blanco=(i)=>base[i*4]+base[i*4+1]+base[i*4+2]>600;
  const semilla=(sx,sy)=>{ for(const [dx,dy] of [[0,22],[22,0],[-22,0],[0,-22],[16,16],[-16,16],[16,-16],[-16,-16],[0,30],[30,0],[-30,0]]){ const x=Math.round(sx+dx), y=Math.round(sy+dy); if(x>0&&y>0&&x<W&&y<H&&blanco(y*W+x)) return y*W+x; } return -1; };
  const mascara=k=>{ if(masks[k]) return masks[k]; const s=semilla(N[k][0]*W/1200,N[k][1]*W/1200); const m=new Uint8Array(W*H); if(s<0) return masks[k]=m;
    const st=[s]; m[s]=1; while(st.length){ const p=st.pop(), x=p%W; for(const q of [p-1,p+1,p-W,p+W]){ if(q<0||q>=W*H||m[q]) continue; if((q===p-1&&x===0)||(q===p+1&&x===W-1)) continue; if(base[q*4]+base[q*4+1]+base[q*4+2]>630){ m[q]=1; st.push(q); } } }
    return masks[k]=m; };
  const pintar=S=>{ const fig=[...document.querySelectorAll('figure')].find(f=>{ const i=f.querySelector('img'); return i&&/roda-autocuidado\/p45\.jpg/.test(i.getAttribute('src')); }); if(!fig) return;
    const img=fig.querySelector('img'); if(!img.complete||!img.naturalWidth){ img.addEventListener('load',()=>pintar(S),{once:true}); return; }
    try{ if(!base) prep(img); }catch(_){ return; }
    let cv=fig.querySelector('canvas.gc-cv'); if(!cv){ cv=document.createElement('canvas'); cv.className='gc-cv'; cv.width=W; cv.height=H; cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none'; img.after(cv); }
    const x=cv.getContext('2d'); x.clearRect(0,0,W,H); const out=x.createImageData(W,H), d=out.data; const txt=[];
    N.forEach((n,k)=>{ const v=String(S['gc_'+k]||'').trim(); if(!v) return; const m=mascara(k), c=COL[k], r=parseInt(c.slice(1,3),16), g=parseInt(c.slice(3,5),16), b=parseInt(c.slice(5,7),16);
      for(let i=0;i<m.length;i++) if(m[i]){ d[i*4]=r; d[i*4+1]=g; d[i*4+2]=b; d[i*4+3]=215; } txt.push([[n[0]+((OFF[k]||[])[0]||0),n[1]+((OFF[k]||[])[1]||0)],v]); });
    x.putImageData(out,0,0);
    x.textAlign='center'; x.textBaseline='middle'; x.lineJoin='round';
    txt.forEach(([n,v])=>{ const t=v.length>12?v.slice(0,11)+"…":v, cx=n[0]*W/1200, cy=n[1]*W/1200+22; let fs=26; x.font=`800 ${fs}px Nunito,system-ui,sans-serif`; while(x.measureText(t).width>120&&fs>14){ fs-=2; x.font=`800 ${fs}px Nunito,system-ui,sans-serif`; }
      x.lineWidth=6; x.strokeStyle='rgba(255,255,255,.9)'; x.strokeText(t,cx,cy); x.fillStyle='#3a1f2b'; x.fillText(t,cx,cy); }); };
  _ult().alCambiar=S=>pintar(S); }
P('roda-autocuidado',51,'Mi diario de gratitud','✍️ Úsalo al final del día. Toca el corazón de tu ánimo (1 a la izquierda, 5 a la derecha).',
  [inp('gd_f','Fecha',98,135,220,27),...[704,773,845,906,972].map((x,k)=>nivel('gd_h'+k,`Ánimo ${k+1}/5`,'Mi estado de ánimo hoy (1–5)',Math.round((x-22)*.54),144,24,24)),
   ta('gd_fr','Frase del día',115,240,420,60),...lineas('gd_r','6 razones por las que estoy agradecido(a) hoy',97,[365,394,427],212),...lineas('gd_r2','6 razones por las que estoy agradecido(a) hoy',333,[365,394,427],212),
   ...lineas('gd_s','Motivos para reír y sonreír',95,[495,529],450),...lineas('gd_e','Cosas que espero con ganas hoy',92,[595,629],450),...lineas('gd_a','Autorreflexión',92,[688,721],450)],{chip:'Mi diario'});
