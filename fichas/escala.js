FICHA({clave:'escala',titulo:'Mi escala de ansiedad y qué hacer en cada nivel',corto:'Mi escala',carp:['ansiedad']});
P('ansiedad',20,'Escala de ansiedad','👆 Toca el nivel en el que te sientes hoy.',
  [['1 · Mínimo',79,128],['2 · Vivir',220,127],['3 · Moderado',360,127],['4 · Fuerte',500,128],['5 · Debilitante',639,128]]
  .map(([l,y,h],i)=>nivel('es20n'+i,l,'Hoy me siento en el nivel',61,y,522,h)),{chip:'Mi nivel hoy'});
P('ansiedad',21,'Estrategias para cada nivel','✍️ Para cada nivel, escribe cosas que puedes hacer para ayudar a reducir tu ansiedad.',
  [['Nivel 1 · Mínimo',126,92],['Nivel 2 · Vivir',260,93],['Nivel 3 · Moderado',396,92],['Nivel 4 · Fuerte',530,93],['Nivel 5 · Debilitante',664,93]]
  .map(([l,y,h],i)=>ta('es21n'+i,l,128,y,438,h,{fs:10.5,cls:'clear'})),{chip:'Mis estrategias'});
