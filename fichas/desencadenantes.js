FICHA({clave:'desencadenantes',titulo:'Mis desencadenantes',corto:'Desencadenantes',carp:['ansiedad','trauma']});
P('ansiedad',19,'Desencadenantes de la ansiedad','✍️ Escribe una situación que te dispare la ansiedad, lo que piensas, lo que sientes y lo que puedes hacer.',[
  ta('de19suc','Cuando esto sucede',86,251,477,117,{fs:10.5,cls:'clear'}),
  ta('de19pie','Esto es lo que pienso',86,415,227,144,{fs:10.5,cls:'clear'}),
  ta('de19sie','Así es como me siento',336,415,227,144,{fs:10.5,cls:'clear'}),
  ta('de19hac','¿Qué puedo hacer en esta situación para sentirme mejor?',86,602,477,133,{fs:10.5,cls:'clear'})],{chip:'Un desencadenante'});
{ const col=[['Escenario / evento',59],['Gatillo',193],['Acción / respuesta',326],['Resultado / consecuencia',459]];
  const fil=[222,292,361,432,502,572,642,713];
  P('ansiedad',13,'Identifica tu patrón','✍️ Llena cada fila con una situación: qué pasó, qué la disparó, qué hiciste y qué resultó.',
    fil.flatMap((y,r)=>col.map(([lab,x],c)=>ta(`de13r${r}c${c}`,`Fila ${r+1} · ${lab}`,x+2,y+2,126,55,{fs:8,cls:'clear'}))),{chip:'Mi patrón'}); }
