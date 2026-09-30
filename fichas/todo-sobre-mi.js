FICHA({clave:'todo-sobre-mi',titulo:'Todo sobre mí y mi pasión',corto:'Todo sobre mí',carp:['autoestima']});
/* Base: «Autoestima» (648×792). */
{ const L=(pre,lab,x,ys,w)=>ys.map((y,i)=>inp(pre+i,lab,x,y-16,w,16,{fs:10,g:lab}));
  P('autoestima',6,'Todo sobre mí','✍️ Completa tus datos y escribe sobre las líneas.',[
    inp('ts_nom','Nombre',155,128,170,18,{fs:10}),inp('ts_ape','Apellido',400,130,150,18,{fs:10}),inp('ts_fec','Fecha de nacimiento',220,156,150,18,{fs:10}),
    ...L('ts_pla','Platos favoritos',100,[249,279,308],212),...L('ts_can','Canciones favoritas',342,[251,279,309],212),
    ...L('ts_mil','Si ganara un millón, ¿qué haría con él?',100,[391,410,429,448],448),
    ...L('ts_pal','Palabras que me definen',101,[527,556,586],212),...L('ts_lib','En mi tiempo libre me gusta',342,[525,557,586],212),
    ta('ts_fra','Una frase que me llega al alma',115,650,410,88,{fs:11,cls:'clear'})],{chip:'Todo sobre mí'});
  P('autoestima',13,'Descubriendo mi pasión','✍️ Escribe tres respuestas en cada recuadro, una junto a cada punto.',
    [['Cuando era pequeño(a), me encantaba…',[170,200,234]],['Las tres personas que más me inspiran son…',[328,358,391]],['Pierdo la noción del tiempo cuando estoy…',[485,515,549]],['Si supiera que no hay manera de fracasar, yo…',[640,670,704]]]
    .flatMap(([l,ys],k)=>ys.map((y,i)=>inp(`ts_p${k}_${i}`,l,110,y-10,450,20,{fs:10.5,g:l}))),{chip:'Mi pasión'}); }
