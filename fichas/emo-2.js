FICHA({clave:'emo-2',titulo:'Emociones difíciles 2: dejar pasar, explorar y soltar',corto:'Emociones difíciles 2',carp:['emociones']});
{ const caja=(id,lab,x,y,w,h,o)=>ta(id,lab,x+5,y+5,w-10,h-10,Object.assign({fs:10.5,cls:'clear'},o||{}));
  P('emociones-dificiles',8,'4. Las emociones son temporales','✍️ Escribe una emoción reciente que pasó con el tiempo y lo que puedes recordarte la próxima vez.',
    [caja('e28','Las emociones son temporales: reflexión',37,516,523,220)],{chip:'4. Temporales'});
  P('emociones-dificiles',9,'5. Cuidarte y preguntar con curiosidad','✍️ Explora con amabilidad: qué desencadenó la emoción, si te recuerda algo del pasado y qué necesitas.',
    [caja('e29','Curiosidad: desencadenante, pasado y necesidad',38,608,520,158)],{chip:'5. Curiosidad'});
  P('emociones-dificiles',10,'6. Soltar el control','✍️ Reflexiona: qué emociones intentas controlar u ocultar y qué podrías decirte cuando aparezcan.',
    [caja('e210','Soltar el control: reflexión',37,582,525,184)],{chip:'6. Soltar'});
  P('emociones-dificiles',11,'Mi hoja de ruta para manejar emociones difíciles','✍️ Responde cada paso de tu hoja de ruta en su recuadro.',
    [['¿Dónde puedes sentir tu emoción en tu cuerpo?',178],['¿Qué palabra describe mejor lo que estoy sintiendo?',277],['¿Cómo puedes reconocer y aceptar tus emociones?',378],['¿Qué puedes decirte para recordarte que las emociones son temporales?',483],['¿Qué me desencadenó? ¿Qué está causando esto?',599],['¿Qué puedes decir o hacer para ayudar a soltar el control?',704]]
    .map(([l,y],i)=>caja('e211_'+i,l,104,y,416,61,{fs:10})),{chip:'Mi hoja de ruta'});
  P('emociones-dificiles',12,'Reflexión y plan personal','✍️ Mira hacia atrás para avanzar: responde las preguntas de reflexión y tu plan personal.',
    [['¿Qué aprendí sobre mí mismo(a) a través de este cuaderno?',284,89],['¿Qué paso me resultó más difícil? ¿Por qué?',413,89],['¿Qué paso fue el más fácil o natural? ¿Por qué?',542,93],['La próxima vez que me sienta abrumado(a), yo…',675,97]]
    .map(([l,y,h],i)=>caja('e212_'+i,l,35,y,543,h)),{chip:'Mi plan'});
  P('emociones-dificiles',13,'Rueda de emociones difíciles'); }
