/* Rueda de autocuidado p8–10, 12, 15: higiene del sueño, reflexión, pautas y rastreador. (p7 no: datos mal traducidos) */
FICHA({clave:'sueno',titulo:'Mi sueño: hábitos y rastreador',corto:'Mi sueño',carp:['general','ansiedad','depresion']});
H('¿Cuánto es suficiente?','📖 Una guía orientativa: cada persona es distinta.',
  `<h2>😴 Horas de sueño recomendadas</h2>
   <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;text-align:center">
    <div style="background:#eef6f4;border-radius:16px;padding:12px"><b style="font-size:1.4rem;color:#047578">8–10 h</b><br>Adolescentes (14–17 años)</div>
    <div style="background:#eef6f4;border-radius:16px;padding:12px"><b style="font-size:1.4rem;color:#047578">7–9 h</b><br>Adultos (18–64 años)</div>
    <div style="background:#eef6f4;border-radius:16px;padding:12px"><b style="font-size:1.4rem;color:#047578">7–8 h</b><br>Mayores de 65 años</div></div>
   <p style="margin:10px 0 0">Dormir bien ayuda a tener más energía, concentración y equilibrio emocional. Fuente: National Sleep Foundation (Hirshkowitz et al., 2015).</p>`,[],{chip:'¿Cuánto?'});
{ const q8=['¿Cuántas horas duermo de media por noche?','¿A qué hora me acuesto y me levanto?','¿Suelo acostarme a la misma hora todas las noches?','¿Antes de dormir me relajo o trabajo?','¿Cómo me duermo? (¿leo o veo televisión en la cama?)'];
  P('roda-autocuidado',8,'Preguntas sobre mi higiene del sueño','✍️ Responde con lo que pasa en una semana normal.',
    q8.map((q,i)=>ta('su8_'+i,q,86,[259,362,464,567,670][i]+10,480,85)),{chip:'Mis hábitos'});
  const T=[57,159,262,364,467,569,672];
  const q9=['¿Qué hago si no puedo dormir?','Si me despierto en la noche, ¿vuelvo a dormir fácilmente?','¿Duermo lo suficiente? Si no, ¿qué me lo impide?','¿Necesito medicación para dormir?','¿Algún dolor interfiere con mi sueño?','¿Tengo pesadillas frecuentes?','¿Me siento descansado(a) al despertar?'];
  const q10=['¿Duermo siestas? ¿Afectan mi sueño nocturno?','¿Me ayuda un baño antes de acostarme?','¿Hago ejercicio? ¿Afecta mi sueño?','¿Tengo una cama cómoda?','¿A qué hora ceno?','¿Tomo café en la tarde o la noche?','¿Me pongo a pensar en todo lo de mañana antes de dormir?'];
  P('roda-autocuidado',9,'Más preguntas de reflexión','',q9.map((q,i)=>ta('su9_'+i,q,71,T[i]+14,510,80)));
  P('roda-autocuidado',10,'Más preguntas de reflexión (2)','',q10.map((q,i)=>ta('su10_'+i,q,71,T[i]+14,510,80)));
}
P('roda-autocuidado',12,'Pautas para un sueño saludable','👀 Marca mentalmente cuál quieres probar primero.',[],
  {nota:'Además: no te acuestes sin sueño y evita mirar el reloj. Si no te duermes en unos 20 minutos, levántate, haz algo tranquilo con poca luz y vuelve a la cama solo cuando tengas sueño. Evita siestas largas o tardías. Estas pautas ayudan, pero solas tienen un efecto modesto: si el insomnio sigue, coméntalo con tu psicóloga (el tratamiento de elección es la TCC para el insomnio). Si roncas con pausas al respirar o tienes mucho sueño en el día, consulta al médico.'});
{ const rows=[...Array(15).keys()], y=i=>Math.round((291+i*75.4)*.54);
  P('roda-autocuidado',15,'Mi rastreador de sueño','✍️ Cada mañana: a qué hora te dormiste, cuánto dormiste, si hiciste siesta (toca el círculo) y cómo fue la calidad (1–5).',
    rows.flatMap(i=>{ const d='Día '+String(i+1).padStart(2,'0');
      return [inp(`sr${i}a`,d+' · a qué hora me dormí',137,y(i)+4,86,24),inp(`sr${i}b`,d+' · duración',229,y(i)+4,161,24),
              chk(`sr${i}c`,d+' · siesta',412,y(i)+5,22,22),inp(`sr${i}d`,d+' · calidad (1–5)',456,y(i)+4,114,24)]; }),{chip:'Rastreador'}); }
