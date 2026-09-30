/* Mi autocuidado: Roda p1 (rueda, contexto) + Crítico interno p23 (lista) y p25 (7 áreas) + Roda p56 (reflexión). */
FICHA({clave:'autocuidado',titulo:'Mi autocuidado: rueda, lista y plan',corto:'Mi autocuidado',carp:['emociones','depresion','general']});
P('roda-autocuidado',1,'La rueda del autocuidado','📖 Cualquier cosa que hagas por ti para sentirte mejor o más cuidado(a) es autocuidado.');
{ const pt=v=>Math.round(v*.54);
  const A=['Come 3 comidas saludables','Duerme 7 horas o más','Bebe agua fresca','Respira aire fresco','Practica la atención plena','Escribe 3 cosas que agradeces','Cepíllate los dientes','Date un baño caliente','Haz tu cama','Lee un libro','Escucha música','Pasa tiempo con amigos','Ordena un espacio pequeño'],
        B=['Desconéctate de las redes sociales','Pide un abrazo','Pasa tiempo con tu familia','Empieza un pasatiempo','Escribe en tu diario','Di cinco cosas que te gusten de ti','Haz ejercicio','Lávate el pelo','Tómate una taza de té','No hagas nada, disfruta la paz','Prueba algo nuevo','Dibuja o colorea','Prepara tu comida favorita'];
  const YA=[271,336,401,466,531,596,726,791,857,922,987,1053,1118], YB=[268,333,398,463,528,593,659,723,789,854,919,984,1050];
  const c=(id,l,cx,cy)=>chk(id,l,pt(cx-22),pt(cy-22),pt(44),pt(44));
  P('critico-interno',23,'Mi lista de autocuidado','👆 Toca lo que hiciste hoy (o esta semana). Abajo hay espacios para agregar lo tuyo.',
    [...A.map((a,i)=>c('ac_a'+i,a,171,YA[i])),...B.map((b,i)=>c('ac_b'+i,b,648,YB[i])),
     ...[1183,1249,1313].flatMap((y,i)=>[c('ac_x'+i,`Mi idea ${i+1} · hecho`,171,y),inp('ac_xt'+i,`Mi idea ${i+1}`,pt(205),pt(y)-10,pt(380),20)]),
     ...[1125,1189,1255,1318].flatMap((y,i)=>[c('ac_y'+i,`Mi idea ${i+4} · hecho`,648,y),inp('ac_yt'+i,`Mi idea ${i+4}`,pt(685),pt(y)-10,pt(380),20)])],{chip:'Mi lista'}); }
{ const Y=[384,514,643,773,902,1031,1161], L=['Físico','Emocional','Social','Espiritual','Descanso y otros','Mi espacio','Para trabajar'],
    E=['Ej.: caminar, dormir mejor, tomar agua','Ej.: escribir cómo me siento, llorar si lo necesito','Ej.: llamar a alguien, pedir ayuda','Ej.: meditar, estar en la naturaleza, orar','Ej.: una siesta corta, no hacer nada un rato','Ej.: ordenar mi cuarto, poner música','Ej.: pausas, no llevarme trabajo a casa'];
  P('critico-interno',25,'Mi plan de autocuidado por áreas','✍️ Anota una o dos formas concretas de cuidarte en cada área.',
    Y.map((y,i)=>ta('au_'+i,L[i],281,Math.round((y+8)*.54),258,Math.round(92*.54),{ph:E[i]})),{chip:'Mis áreas'}); }
P('roda-autocuidado',56,'Reflexión sobre mi autocuidado','✍️ ¿Qué descubriste? ¿Qué te cuesta? ¿Qué vas a intentar esta semana?',
  renglones('ar_',['Mi reflexión sobre el autocuidado'],[147,188,228,269,309,350,390,431,471,512,552,593,633,674,714,755],85,478),{chip:'Reflexión'});
