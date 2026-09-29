FICHA({clave:'ysi',titulo:'«¿Y si…?» y descatastrofizar',corto:'¿Y si…?',carp:['ansiedad']});
{ const cl={fs:10.5,cls:'clear'};
  P('distorsiones-mindapp',36,'¿Y si…?','✍️ A la izquierda, tus «¿Y si…?» negativos. A la derecha, cámbialos por un «¿Y si…?» positivo.',[
    ta('ys_neg','Mis «¿Y si…?» negativos',70,287,243,477,cl),ta('ys_pos','Mis «¿Y si…?» positivos',335,287,243,477,cl)],{chip:'¿Y si…?'});
  P('distorsiones',10,'Prediciendo el futuro','✍️ Piensa en una vez que predijiste el futuro y asumiste lo peor, y responde.',
    [[120,95,'¿Cuál era la situación y cómo te sentiste?'],[231,92,'¿El resultado fue tan malo como lo predijiste? ¿Cuál fue?'],[339,90,'¿Qué tiene de malo predecir el futuro y sacar conclusiones precipitadas?'],[446,95,'¿De verdad alguien puede predecir el futuro?'],[572,74,'Cuando vuelva a intentar predecir el futuro, ¿qué puedo decirme?'],[662,95,'Si tuviera un amigo que «predice el futuro», ¿qué consejo le daría?']]
    .map(([y,h,l],i)=>ta('ys_p'+i,l,79,y,490,h,cl)),{chip:'Predecir el futuro'});
  P('distorsiones-mindapp',37,'Descatastrofizando','✍️ Sigue las flechas: escribe tu preocupación y responde cada pregunta.',[
    ta('ys_d0','¿Qué me preocupa?',125,150,455,78,cl),
    ta('ys_d1','¿Qué probabilidades hay de que se haga realidad?',70,292,515,62,cl),
    ta('ys_d2','Si se hiciera realidad, ¿cuál sería el peor resultado posible?',70,414,515,65,cl),
    ta('ys_d3','Si se hace realidad, ¿qué es probable que suceda? ¿Cómo me afectará?',70,540,515,64,cl),
    ta('ys_d4','¿Seguirá siendo relevante mañana, en una semana, en un mes o en un año?',70,665,515,64,cl)],{chip:'Descatastrofizar'}); }
