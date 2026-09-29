FICHA({clave:'critico',titulo:'Mi crítico interno',corto:'Crítico interno',carp:['autoestima']});
/* Base: «Crítico interno» (648×792). Recuadros de respuesta bajo cada pregunta. */
{ const cl={fs:10.5,cls:'clear'}, R=[[66,280],[67,409],[68,539],[70,670]];
  P('critico-interno',2,'¿Qué es el crítico interior?');
  P('critico-interno',3,'Mi crítico interior','✍️ Responde las cuatro preguntas sobre tu crítico interior.',
    ['¿Cómo explicaría, con mis palabras, qué es mi crítico interior?','¿Ha tenido un impacto negativo en mi vida?','Del 1 al 10, ¿qué tan fuerte es mi crítico interior? ¿Por qué?','Si pudiera hacerlo desaparecer, ¿qué cambios notaría en mí?']
    .map((l,i)=>ta('cr3_'+i,l,R[i][0]+4,R[i][1]+3,504,74,cl)),{chip:'Mi crítico'});
  P('critico-interno',5,'Los 7 críticos internos','👆 Toca los nombres de los críticos que reconoces en ti.',
    [['El perfeccionista',213,140,92,1],['El saboteador',350,139,75,1],['El que paga la culpa',470,131,88,2],['El complaciente',92,451,84,1],['El destructor',223,449,73,1],['El trabajador de tareas',342,439,90,2],['El controlador interno',463,439,99,2]]
    .map(([l,x,y,w,n],i)=>hl('cr5_'+i,l,x-8,y-14,w+16,n>1?42:30,{g:'Críticos que reconozco'})),{chip:'Los 7 críticos'});
  P('critico-interno',6,'¿De dónde proviene mi crítico?','✍️ Explora cómo se formó tu crítico interior.',
    ['Al reflexionar sobre mi infancia, ¿hay algo que indique cómo se formó mi crítico?','¿Siempre ha sido importante en mi vida o ha empeorado con el tiempo?','Si hablara con mi crítico ahora, ¿qué palabras firmes usaría para enfrentarlo?','Reflexión']
    .map((l,i)=>ta('cr6_'+i,l,R[i][0]+4,R[i][1]+3,504,74,cl)),{chip:'De dónde viene'});
  P('critico-interno',7,'Señales de que eres demasiado autocrítico');
  P('critico-interno',8,'Reflexión','✍️ Piensa en la lista de autocríticas y en los siete críticos: ¿con cuáles te identificas?',[
    ta('cr8a','¿Cómo me identifico con uno o más de los siete críticos? (puedo ponerle un nombre)',75,180,498,235,cl),
    ta('cr8b','¿Alguna autocrítica de la lista se relaciona con mi comportamiento?',75,490,498,265,cl)],{chip:'Reflexión'}); }
