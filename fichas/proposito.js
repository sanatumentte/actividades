FICHA({clave:'proposito',titulo:'Encontrar mi propósito',corto:'Mi propósito',carp:['valores','autoestima']});
{ P('autoestima',2,'Encontrar mi propósito','✍️ Para cada pregunta escribe hasta tres respuestas, una por recuadro.',
    ['¿Qué me motiva a levantarme por la mañana?','¿Qué me encantaba hacer de niño(a)?','Si pudiera ser cualquier persona, ¿quién sería y por qué?','¿Cuál es mi recuerdo favorito?','¿Cuándo soy más feliz?','¿Cuáles son algunos de mis arrepentimientos?','¿Cómo sería mi vida ideal?']
    .flatMap((l,r)=>[222,353,485].map((x,c)=>ta(`pp${r}_${c}`,l,x,[126,213,301,389,477,567,657][r]+2,105,64,{fs:9,cls:'clear',g:l,ph:''}))),{chip:'Mi propósito'});
  P('autoestima',9,'Profundizando','✍️ Completa cada frase dentro de su recuadro.',
    [['Me gusta quien soy porque…',206,48],['Si pudiera pedir un deseo, sería…',279,49],['Me siento tranquilo(a) cuando…',353,49],['Mi festividad favorita fue…',428,48],['Mi recuerdo favorito…',498,52],['Cosas que me hacen sonreír…',578,48],['El mayor desafío que he superado fue…',653,48]]
    .map(([l,y,h],i)=>ta('pf'+i,l,114,y+19,424,h-22,{fs:9.5,cls:'clear',ph:''})),{chip:'Profundizando'}); }
