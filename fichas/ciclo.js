FICHA({clave:'ciclo',titulo:'El ciclo de la ansiedad y mi plan de acción',corto:'El ciclo',carp:['ansiedad','depresion']});
P('ansiedad',10,'El ciclo de la ansiedad');
P('ansiedad',11,'Cómo darle la vuelta al ciclo');
{ const cols=[['Aumentar',80],['Reducir / detener',253],['¿Cómo cambiará esto mi comportamiento?',422]];
  const filas=[['Comportamiento',196],['Pensamientos',392],['Sentimientos / emociones',592]];
  P('ansiedad',22,'Mi plan de acción','✍️ Completa cada recuadro: qué quieres aumentar, qué quieres reducir y cómo cambiará tu comportamiento.',
    filas.flatMap(([f,y],r)=>cols.map(([c,x],k)=>ta(`ci22r${r}c${k}`,`${f} · ${c}`,x,y,148,104,{fs:9.5,cls:'clear'}))),{chip:'Mi plan de acción'}); }
