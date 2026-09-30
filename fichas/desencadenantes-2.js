FICHA({clave:'desencadenantes-2',titulo:'Mis desencadenantes y habilidades de afrontamiento',corto:'Desencadenantes y habilidades',carp:['trauma','ansiedad']});
/* Base: «Traumas» (648×792). */
{ const cl={fs:10,cls:'clear'};
  P('traumas',2,'Desencadenantes del trauma','✍️ Responde las preguntas y, en cada categoría, escribe tus desencadenantes y lo que piensas o sientes con ellos.',[
    ta('dt2p','El problema: ¿qué problema causan o agravan mis desencadenantes?',66,150,512,66,cl),
    ta('dt2e','Cuando me expongo a mis desencadenantes, ¿qué es lo peor que puede pasar?',150,265,428,55,cl),
    ...[['Situaciones',64,387],['Gente',244,389],['Lugares',422,386],['Latidos del corazón',66,515],['Pensamientos',244,515],['Estado emocional',421,515]].map(([l,x,y],i)=>ta('dt2c'+i,l,x+6,y+42,146,64,{fs:9.5,cls:'clear'})),
    ...[68,245,422].map((x,i)=>ta('dt2o'+i,'Otro desencadenante',x+6,649,145,102,{fs:9.5,cls:'clear',ph:'Otro…'}))],{chip:'Desencadenantes'});
  P('traumas',5,'Termómetro de disparo','👆 Toca el nivel de angustia que te produce tu desencadenante. Si quieres, escribe al lado de cada nivel qué desencadenante te lleva ahí.',[
    ...[['Máximo nivel de angustia',157],['Muy angustiado(a) y ansioso(a)',275],['Malestar moderado',394],['Mínima angustia',513],['Sin ansiedad, en paz',632]].map(([l,y],i)=>nivel('dt5n'+i,l,'Nivel de angustia',377,y,208,91)),
    ...[173,292,440,562,691].map((y,i)=>inp('dt5d'+i,'Desencadenante en este nivel',158,y-11,84,22,{fs:8.5,g:'Desencadenantes por nivel',ph:'Desencadenante'}))],{chip:'Termómetro'});
  P('traumas',1,'Desencadenantes y habilidades de afrontamiento','✍️ A la izquierda, tus desencadenantes; a la derecha, la habilidad que te ayuda con cada uno.',
    [90,204,318,432,548,663].flatMap((y,i)=>[ta('dt1d'+i,`${i+1} · Desencadenante`,98,y+6,218,95,cl),ta('dt1h'+i,`${i+1} · Habilidad de afrontamiento`,352,y+6,218,95,cl)]),{chip:'Desencadenante → habilidad'}); }
