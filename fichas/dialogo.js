FICHA({clave:'dialogo',titulo:'Mi diálogo interno: del crítico al entrenador',corto:'Diálogo interno',carp:['autoestima']});
{ const cl={fs:10.5,cls:'clear'};
  P('critico-interno',9,'Crítico interior vs. entrenador interior');
  P('critico-interno',10,'Cómo calmar a tu crítico interior');
  P('critico-interno',11,'El poder del «todavía»');
  P('critico-interno',12,'Tu turno: agrega «todavía»','✍️ A la izquierda escribe tus frases críticas; a la derecha, reescríbelas agregando «todavía».',[
    ...[232,313,393,474,556,640].map((y,i)=>ta('dl12i'+i,`Frase ${i+2} · lo que me digo`,106,y+3,234,54,{fs:10,cls:'clear',ph:'Lo que me digo…'})),
    ...[152,232,313,393,474,556,640].map((y,i)=>ta('dl12d'+i,`Frase ${i+1} · con «todavía»`,396,y+22,160,36,{fs:9.5,cls:'clear',ph:'…todavía'}))],{chip:'Todavía'});
  P('critico-interno',13,'Cambia tu mentalidad, cambia tu vida');
  { const Y=[208,238,267,296,325,354,383,412,441];
    P('critico-interno',14,'Diálogo interno: ¿verdadero o falso?','✍️ Escribe tus pensamientos pesimistas (uno por fila) y marca si son verdaderos o falsos. Luego responde abajo.',[
      ...Y.map((y,i)=>inp('dl14p'+i,'Pensamiento '+(i+1),84,y-12,282,24,{fs:10,sil:true,ph:'Pensamiento…'})),
      ...Y.flatMap((y,i)=>[nivel(`dl14v${i}`,'Verdadero','Pensamiento '+(i+1),447,y-14,30,28),nivel(`dl14f${i}`,'Falso','Pensamiento '+(i+1),531,y-14,30,28)]),
      ta('dl14por','¿Por qué mis pensamientos son verdaderos o falsos?',82,515,490,90,cl),
      ta('dl14val','Razones por las que soy valioso(a)',82,643,490,90,cl)],{chip:'¿Verdadero o falso?'});
    _ult().resumenExtra=(p,D,T)=>{ if(p.t!=='Diálogo interno: ¿verdadero o falso?') return;
      Y.forEach((y,i)=>{ const t=String(D['dl14p'+i]||'').trim(), g='Pensamiento '+(i+1), k=T.findIndex(x=>x.startsWith(g+':'));
        if(k>=0) T[k]=T[k].replace(g,t?`«${t}»`:g); else if(t) T.push(`«${t}»: sin marcar`); }); }; } }
