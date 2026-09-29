FICHA({clave:'sintomas',titulo:'Mis síntomas de ansiedad',corto:'Mis síntomas',carp:['ansiedad']});
{ const fis=['Dolores musculares','Dolores de cabeza','Náuseas','Dolor de espalda','Presión arterial alta, hinchazón','Dolores de estómago','Sensación de malestar','Cansancio','Enfermarse constantemente','Pérdida de peso','Dolor en el pecho'];
  const cy1=[244,262,279,297,315,333,351,369,389,407,425];
  const pens=[['¿Y si no lo logré?',234,18],['Me daría un infarto.',252,18],['La gente se reiría de mí si me equivoco durante la presentación.',270,35],['Me volvería loco si no pudiera dejar de sentirme tan ansioso.',306,35],['Las cosas no saldrían bien.',342,18]];
  const comp=[['Aislamiento',533],['Mala higiene',550],['Trastornos del sueño',568],['Cambios en la apariencia',585],['Asuntos personales',603],['No devolver llamadas o mensajes',621],['Dejar de hacer cosas que antes disfrutabas',648,34],['Falta de ejercicio',677],['Moverse lentamente',695]];
  const sent=['Abrumado','Desesperanzado','Vacío','Insensible','Frustrado','Irritado','Triste','Culpable','Afligido','Preocupado','Enojado'];
  const cy2=[526,544,562,580,598,616,634,652,671,689,707];
  P('ansiedad',7,'Síntomas: lista de verificación','☑️ Toca las casillas con las que te identificas. En «Pensamientos», toca las frases para resaltarlas.',[
    ...fis.map((l,i)=>chk('as7f'+i,l,97,cy1[i]-9,210,18,{g:'Síntomas físicos',mx:2})),
    ...pens.map(([l,y,h],i)=>hl('as7p'+i,l,328,y,222,h,{g:'Pensamientos'})),
    ...comp.map(([l,y,h],i)=>chk('as7c'+i,l,97,y-(h||18)/2,210,h||18,{g:'Comportamiento',mx:2})),
    inp('as7cx','Otro comportamiento',116,704,190,18,{g:'Comportamiento'}),
    ...sent.map((l,i)=>chk('as7s'+i,l,326,cy2[i]-9,226,18,{g:'Sentimientos',mx:210}))],{chip:'Lista de síntomas'});
  P('ansiedad',8,'Síntomas: mi propia lista','✍️ Escribe tus propios síntomas en cada columna.',[
    ...cy1.map((c,i)=>inp('as8f'+i,'Síntomas físicos',118,c-9,188,18,{fs:9,g:'Síntomas físicos'})),
    ta('as8p','Pensamientos',329,231,222,207,{fs:10}),
    ...[533,550,568,585,603,621,639,657,677,695,713].map((c,i)=>inp('as8c'+i,'Comportamiento',116,c-9,190,18,{fs:9,g:'Comportamiento'})),
    ...cy2.map((c,i)=>inp('as8s'+i,'Sentimientos',330,c-9,200,18,{fs:9,g:'Sentimientos'}))],{chip:'Mi lista'});
}
P('ansiedad',9,'La ansiedad y mi cuerpo','👆 Toca los síntomas que tú sientes cuando tienes ansiedad.',
  [['Transpiración',107,229,118,59],['Latidos cardíacos rápidos',108,310,120,61],['Hormigueo',112,400,120,57],['Mareo',112,486,120,58],['Músculos tensos',107,572,118,62],['Respiración rápida',88,649,119,58],['Dolor de cabeza',192,693,119,57],['Irritabilidad',326,693,120,56],['Orinar',441,661,119,57],['Piernas temblorosas',432,569,119,61],['Náuseas',433,481,121,60],['Mariposas en el estómago',441,400,119,61],['Temblor',432,311,119,60],['Boca seca',432,234,119,60]]
  .map(([l,x,y,w,h],i)=>oval('as9o'+i,l,x,y,w,h,{g:'Lo que siento en el cuerpo'})),{chip:'Mi cuerpo'});
{ const sin=['Latidos cardíacos acelerados','Sudor','Dolor de cabeza','Respiración rápida','Temblores','Frío','Mariposas en el estómago','Piernas temblorosas','Náuseas','Mareo','Voltaje','Boca seca','',''];
  const col=[['Nunca',316,86],['A veces',402,80],['Frecuente y temible',482,87]];
  P('lucha-huida',11,'¿Con qué frecuencia?','👆 En cada síntoma, toca con qué frecuencia lo sientes. En las filas vacías puedes escribir otros.',
    sin.flatMap((s,i)=>{ const y=188.4+i*41.05, g=s||`Otro síntoma ${i-11}`;
      return [...(s?[]:[inp('as11o'+i,g,84,y+12,228,18,{fs:10,sil:true,ph:'Otro síntoma…'})]),...col.map(([l,x,w],k)=>nivel(`as11r${i}c${k}`,l,g,x+2,y+2,w-4,37))]; }),{chip:'Frecuencia'});
}
_ult().resumenExtra=(p,D,T)=>{ if(p.t!=='¿Con qué frecuencia?') return; for(let i=12;i<14;i++){ const n=String(D['as11o'+i]||'').trim(), g=`Otro síntoma ${i-11}`, k=T.findIndex(x=>x.startsWith(g+':')); if(n&&k>=0) T[k]=T[k].replace(g,n); } };
