FICHA({clave:'agradables',titulo:'Mis experiencias agradables y mi diario de amor propio',corto:'Experiencias agradables',carp:['autoestima','depresion']});
{ P('autoestima',20,'Experiencias agradables','✍️ Escribe una experiencia tuya para cada palabra.',
    [['Sacrificio',108,79],['Coraje',187,82],['Determinación',269,82],['Altruismo',351,81],['Valentía',432,82],['Orgullo',514,82],['Felicidad',596,81],['Amar',677,80]]
    .map(([l,y,h],i)=>ta('ag'+i,l,256,y+4,296,h-8,{fs:10,cls:'clear'})),{chip:'Experiencias'});
  P('autoestima',17,'Diario de amor propio (semana)','✍️ Cada día, completa las frases de la izquierda.',
    [74,102,132,178,206,237,283,311,341,387,416,446,492,520,550,589,617,648,693,721,752].map((y,i)=>inp('am'+i,`Día ${Math.floor(i/3)+1} · frase ${i%3+1}`,263,y+2,298,24,{fs:9.5,g:`Día ${Math.floor(i/3)+1}`})),{chip:'Diario'}); }
