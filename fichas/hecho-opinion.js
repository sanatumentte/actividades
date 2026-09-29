FICHA({clave:'hecho-opinion',titulo:'¿Hecho u opinión?',carp:['ansiedad','depresion']});
P('distorsiones-mindapp',34,'¿Hecho u opinión?','👆 En cada frase, toca si es un HECHO o una OPINIÓN.',
  [['Voy a suspender mi presentación.',389],['El médico me llamó porque tiene malas noticias.',426],['Mi novio va a romper conmigo.',458],['Mis amigos están hablando a mis espaldas.',498],['Soy un completo fracaso.',532],['Nunca conseguiré un trabajo.',566],['Circulan rumores sobre mí.',600],['Mi profesor se mete conmigo.',638],['Nadie me quiere.',672]]
  .flatMap(([f,y],i)=>[nivel(`ho${i}h`,'Hecho',f,428,y-15,60,24),nivel(`ho${i}o`,'Opinión',f,496,y-15,64,24)]),{chip:'Hecho u opinión'});
