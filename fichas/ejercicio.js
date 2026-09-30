/* Rueda de autocuidado p19, 23, 25: movimiento y ánimo. (p21 imagen corporal: excluida por decisión clínica) */
FICHA({clave:'ejercicio',titulo:'Movimiento y estado de ánimo',corto:'Movimiento y ánimo',carp:['depresion','ansiedad']});
P('roda-autocuidado',19,'Movimiento físico','✍️ Responde las dos preguntas de abajo.',
  [ta('ej1','¿Con qué frecuencia hago ejercicio y qué suelo hacer?',70,382,510,160),ta('ej2','Otras razones para hacer ejercicio, además de verme o sentirme bien',70,606,510,160)],
  {chip:'Mis hábitos',nota:'Con más precisión: la actividad física regular se asocia con menos síntomas de ansiedad y depresión y con mejor sueño. Es un complemento: no reemplaza el tratamiento. Muévete según tus posibilidades y, si tienes alguna condición de salud, con orientación médica.'});
P('roda-autocuidado',23,'Mis razones y mi plan','✍️ Piensa en movimiento que disfrutes, no en castigo.',
  [[62,'Mis razones para querer hacer ejercicio'],[251,'Un ejercicio o deporte que disfruto'],[439,'Lo que necesito hacer para que esto suceda (cuándo, dónde, con quién)'],[628,'Cómo me siento después de hacer ejercicio']]
    .map(([y,l],i)=>ta('ej3_'+i,l,71,y+42,509,132)),{chip:'Mi plan'});
{ const D=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'], dx=[0,0,7,0,0,7,12], HX=[822,870,917,960,1004], HY=[0,43,0,43,0];
  P('roda-autocuidado',25,'Mi semana de movimiento','✍️ Escribe tus objetivos, lo que hiciste cada día y toca el corazón de tu ánimo después (1 a la izquierda, 5 a la derecha).',
    [inp('ej_sem','Semana del',402,105,140,18),...lineas('ej_obj','Mis objetivos de la semana',134,[145,173,201],407),
     ...D.flatMap((d,i)=>[ta('ej_d'+i,d+' · lo que hice',89,Math.round((425+35+i*143.5)*.54),323,48),
       ...HX.map((hx,k)=>nivel(`ej_h${i}_${k}`,`${d} · ánimo ${k+1}/5`,d+' · ánimo después (1–5)',Math.round((hx+dx[i]-24)*.54),Math.round((487+i*143.5+HY[k]-24)*.54),26,26))])],
    {chip:'Mi semana'}); }
