FICHA({clave:'emo-1',titulo:'Emociones difíciles 1: recibir, nombrar y permitir',corto:'Emociones difíciles 1',carp:['emociones']});
{ const caja=(id,lab,x,y,w,h,o)=>ta(id,lab,x+5,y+5,w-10,h-10,Object.assign({fs:10.5,cls:'clear'},o||{}));
  P('emociones-dificiles',3,'Hoja de ruta para manejar emociones');
  P('emociones-dificiles',4,'Comprendiendo las emociones','✍️ ¿Qué emociones son más difíciles de manejar para ti? Escribe tantas como quieras.',
    [caja('e14','¿Qué emociones son más difíciles para ti de manejar?',41,620,519,148)],{chip:'Emociones que me desafían'});
  P('emociones-dificiles',5,'1. Dar la bienvenida a tus emociones','✍️ Escribe sobre una emoción intensa reciente: qué pasaba, dónde la sentiste en el cuerpo y qué hiciste con ella.',
    [caja('e15','Una emoción intensa reciente: qué pasaba, dónde la sentí, si la ignoré o me quedé con ella',40,612,525,149)],{chip:'1. Bienvenida'});
  P('emociones-dificiles',6,'2. Nombrar la emoción','✍️ Piensa en un momento en que te sentiste abrumado(a): ¿nombraste la emoción? ¿Qué nombre le darías hoy?',
    [caja('e16','Nombrar la emoción: reflexión',40,583,525,174)],{chip:'2. Nombrar'});
  P('emociones-dificiles',7,'3. Permitir la emoción','✍️ Responde las preguntas de reflexión sobre cómo sueles responder a las emociones difíciles.',
    [caja('e17','Permitir la emoción: reflexión',38,555,520,200)],{chip:'3. Permitir'}); }
