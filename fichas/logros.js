FICHA({clave:'logros',titulo:'Mis logros',carp:['autoestima','depresion']});
{ const B=[['bue','Cosas en las que soy bueno',[269,297,329],115,182],['elo','Elogios que ya he recibido',[267,296,328],372,182],['gus','Lo que me gusta de mí mismo',[398,428,459],115,182],['des','Desafíos que superé',[398,428,459],366,181],['ayu','Cómo ya he ayudado a otras personas',[531,559,591],115,182],['ami','Soy un buen amigo porque',[532,561,593],369,182],['log','Mis mayores logros',[663,692,724],119,181],['uni','Cosas que me hacen único',[663,692,724],373,182]];
  P('ansiedad',12,'Mis logros','✍️ Escribe sobre cada línea: tus logros, grandes o pequeños, cuentan.',
    B.flatMap(([id,lab,ys,x,w])=>ys.map((y,j)=>inp('lo'+id+j,lab,x,y-17,w,16,{fs:10,g:lab}))),{chip:'Mis logros'}); }
