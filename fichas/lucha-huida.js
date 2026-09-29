FICHA({clave:'lucha-huida',titulo:'Lucha, huida o parálisis: mi respuesta',corto:'Lucha o huida',carp:['ansiedad','trauma']});
P('lucha-huida',2,'La respuesta de lucha o huida');
P('lucha-huida',6,'Respuesta saludable y poco saludable','✍️ Escribe un ejemplo de respuesta saludable y uno de respuesta poco saludable de lucha o huida.',[
  ta('lh6s','Respuesta saludable',64,566,244,203,{fs:10.5,cls:'clear'}),
  ta('lh6n','Respuesta poco saludable',339,566,244,203,{fs:10.5,cls:'clear'})],{chip:'Saludable o no'});
P('lucha-huida',13,'Lucha, huida, parálisis, sumisión');
P('lucha-huida',12,'Mi respuesta a la preocupación','✍️ Para cada respuesta escribe cómo te sientes y qué puedes hacer.',
  [['Luchar',95],['Filtración',267],['Parálisis',440],['Envío',612]].flatMap(([l,y],i)=>[ta('lh12s'+i,`${l} · ¿Cómo me siento?`,256,y+3,146,158,{fs:10,cls:'clear'}),ta('lh12h'+i,`${l} · ¿Qué puedo hacer?`,420,y+3,146,158,{fs:10,cls:'clear'})]),{chip:'Mi respuesta'});
