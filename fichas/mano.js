/* Plan de seguridad (PDF) p4: mi mano de apoyo — 5 personas de confianza, una en cada dedo. */
FICHA({clave:'mano',titulo:'Mi mano de apoyo',corto:'Mano de apoyo',carp:['general','depresion','ansiedad']});
P('plano-seguridad',4,'Mi mano de apoyo','✍️ Escribe en cada dedo el nombre de una persona de confianza con la que puedas hablar de lo que te preocupa.',
  [['Pulgar',113,578,120],['Índice',158,362,105],['Medio',250,290,105],['Anular',378,300,105],['Meñique',452,388,100]]
    .map(([d,x,y,w],i)=>inp('mn'+i,'Persona de confianza ('+d.toLowerCase()+')',x,y,w,22)),{chip:'Mi mano'});
H('¿Cómo las contacto?','📱 Para tenerlo a mano en un momento difícil.',
  `<h2>🤝 Mis contactos</h2>${[0,1,2,3,4].map(i=>`<label class="lab" for="mt${i}">Persona ${i+1}: teléfono o cómo la busco</label><input class="f" id="mt${i}">`).join('')}`,
  [0,1,2,3,4].map(i=>inp('mt'+i,`Persona ${i+1} · contacto`)),{chip:'Contactos',nota:'Si estás en crisis o piensas en hacerte daño, no esperes: llama a una de estas personas o a la Línea 123.'});
