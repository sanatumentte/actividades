FICHA({clave:'iceberg',titulo:'Mi iceberg de la ansiedad',corto:'Mi iceberg',carp:['ansiedad']});
P('ansiedad',5,'El iceberg de la ansiedad');
P('ansiedad',4,'Lo que influye en mi ansiedad','✍️ Escribe dentro de cada recuadro qué factores han influido en tu ansiedad.',
  [['amb','El medio ambiente',216,291],['qui','Química cerebral',299,376],['per','Tipo de personalidad',389,464],['pen','Pensamientos',475,551],['com','Comportamiento',562,637],['gen','Genética',648,724]]
  .map(([id,lab,y0,y1])=>ta('ai4'+id,lab,80,y0+20,478,y1-y0-25,{fs:10})),{chip:'Qué influye'});
P('ansiedad',6,'Llena tu propio iceberg','✍️ Arriba, lo que los demás ven de tu ansiedad; dentro del agua, lo que no se ve.',[
  ta('ai6ves','Lo que ves',18,250,185,88,{fs:10}),
  ta('ai6nov','Lo que no ves',232,385,188,175,{fs:10})],{chip:'Mi iceberg'});
