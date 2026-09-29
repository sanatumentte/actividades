FICHA({clave:'rueda',titulo:'Seguimiento de mis emociones del mes',corto:'Rueda de emociones',carp:['emociones']});
/* Rueda: centro (335,385), anillos de 26 pt desde r=52; 31 días de 9° desde arriba, en sentido horario.
   Anillo de afuera = Feliz, luego Triste, Preocupado y tres emociones que escribe la persona. */
{ const R={cx:335,cy:385,r0:52,dr:26,paso:9,col:['#f6c94c','#6fa8dc','#b39ddb','#8fd19e','#f4a7b9','#f6a96b']}, EMO=['Feliz','Triste','Preocupado'];
  const nom=(D,e)=>String(D['ru17e'+e]||'').trim()||(e<3?EMO[e]:'Emoción '+(+e+1));
  const pt=(r,a)=>{ const t=a*Math.PI/180; return [(R.cx+r*Math.sin(t)).toFixed(2),(R.cy-r*Math.cos(t)).toFixed(2)]; };
  const rueda={k:'x',id:'ru17r',
    html:S=>{ const M=S.ru17r||{}; let s='';
      for(let e=0;e<6;e++){ const ro=R.r0+R.dr*(6-e), ri=ro-R.dr;
        for(let d=0;d<31;d++){ const a0=d*R.paso,a1=a0+R.paso,[x1,y1]=pt(ro,a0),[x2,y2]=pt(ro,a1),[x3,y3]=pt(ri,a1),[x4,y4]=pt(ri,a0), on=M[e+'-'+(d+1)];
          s+=`<path data-e="${e}" data-d="${d+1}" role="checkbox" aria-checked="${!!on}" tabindex="0" style="${on?'fill:'+R.col[e]+';fill-opacity:.85':''}" d="M${x1} ${y1}A${ro} ${ro} 0 0 1 ${x2} ${y2}L${x3} ${y3}A${ri} ${ri} 0 0 0 ${x4} ${y4}Z"><title>Día ${d+1}</title></path>`; } }
      return `<svg viewBox="0 0 648 792" aria-label="Rueda de emociones">${s}</svg>`; },
    clic:(e,S)=>{ const p=e.target.closest('path'); if(!p) return false; const M=S.ru17r=S.ru17r||{}, k=p.dataset.e+'-'+p.dataset.d, on=!M[k];
      if(on) M[k]=1; else delete M[k]; p.style.fill=on?R.col[p.dataset.e]:''; p.style.fillOpacity=on?.85:''; p.setAttribute('aria-checked',on); },
    activo:D=>Object.keys(D.ru17r||{}).length>0,
    resumen:(D,L)=>{ const por={}; Object.keys(D.ru17r||{}).forEach(k=>{ const [e,d]=k.split('-'); (por[e]=por[e]||[]).push(+d); });
      Object.keys(por).sort().forEach(e=>L.push(`${nom(D,e)}: días ${por[e].sort((a,b)=>a-b).join(', ')}`)); },
    cambios:(A,B,L)=>{ const c=D=>{ const o={}; Object.keys(D.ru17r||{}).forEach(k=>{ const e=k.split('-')[0]; o[e]=(o[e]||0)+1; }); return o; }, a=c(A), b=c(B);
      for(let e=0;e<6;e++){ if((a[e]||0)!==(b[e]||0)) L.push(`<li><b>${esc(nom(B,e))}:</b> ${a[e]||0} → ${b[e]||0} días coloreados</li>`); } }};
  P('ansiedad',17,'Seguimiento de emociones','🎨 Toca las casillas de la rueda para colorear las emociones que sentiste cada día (el número es el día del mes). Escribe tus propias emociones: puedes cambiar Feliz, Triste y Preocupado, y llenar los espacios en blanco.',[
    ...[['Feliz',180],['Triste',206],['Preocupado',232]].map(([n,y],i)=>inp('ru17e'+i,'Emoción '+(i+1),205,y,125,21,{fs:10,ph:n,sil:true,cls:'emo'})),
    inp('ru17e3','Emoción 4',205,258,125,21,{fs:10,ph:'Emoción…',sil:true}),inp('ru17e4','Emoción 5',205,284,125,21,{fs:10,ph:'Emoción…',sil:true}),inp('ru17e5','Emoción 6',205,310,125,21,{fs:10,ph:'Emoción…',sil:true}),
    rueda,
    ...[668,691,715,740].map((y,i)=>inp('ru17n'+i,'Notas',100,y-17,450,16,{fs:10,g:'Notas'}))],{chip:'Mi rueda del mes'}); }
