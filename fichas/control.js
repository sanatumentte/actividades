FICHA({clave:'control',titulo:'Mi círculo de control',corto:'Círculo de control',carp:['ansiedad']});
/* Base: «Círculo de control» (tu guía para preservar el bienestar mental). Coordenadas en puntos (612×792). */
{ const caja=(id,lab,x,y,w,h,o)=>ta(id,lab,x+5,y+5,w-10,h-10,Object.assign({fs:10.5,cls:'clear'},o||{}));
  P('circulo-control',2,'¿Qué es el círculo de control?');
  P('circulo-control',3,'Mi círculo de control','✍️ En cada pétalo escribe algo que NO puedes controlar (opiniones de otros, el clima, el pasado…). En el centro, lo que SÍ está bajo tu control.',[
    ...[[168,372,117,61],[321,367,102,61],[408,459,92,56],[367,581,122,61],[265,648,122,56],[148,612,107,61],[117,484,102,66]]
      .map(([x,y,w,h],i)=>ta('cc3p'+i,'No puedo controlar',x,y,w,h,{fs:9,cls:'clear',g:'No puedo controlar',ph:'No controlo…'})),
    ta('cc3c','Bajo mi control',242,551,133,56,{fs:9,cls:'clear',ph:'Sí controlo…'})],{chip:'Mi círculo'});
  P('circulo-control',4,'Preguntas de reflexión','✍️ Responde las preguntas sobre tu experiencia con los círculos.',
    [[148,'¿Cuál fue tu experiencia al completar los círculos? ¿Qué te surgió?'],[281,'¿Alguno de tus círculos tiene más o menos elementos? ¿Cuál fue más fácil?'],[397,'¿En qué círculos sueles pensar más cuando te sientes preocupado(a)?'],[530,'¿Deberías dividir alguna tarea en partes más pequeñas?'],[682,'¿Qué sentirías al tomar medidas concretas sobre lo que está bajo tu control?']]
    .map(([y,l],i)=>caja('cc4_'+i,l,30,y,504,75)),{chip:'Reflexión'});
  P('circulo-control',12,'Dejar ir','🎈 Escribe en cada globo algo de lo que necesitas desprenderte.',
    [[145,655],[448,655],[752,655],[1055,655],[307,1105],[610,1105],[912,1105]].map(([cx,cy],i)=>ta('cc12g'+i,'Lo que suelto',(cx-92)/1.9608,(cy-48)/1.9608,184/1.9608,96/1.9608,{fs:9.5,cls:'clear',g:'Lo que suelto',ph:'Suelto…'})),{chip:'Dejar ir'});
}
