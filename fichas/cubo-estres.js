/* Rueda de autocuidado p2–4: señales de agotamiento, el cubo de estrés y mi cubo. */
FICHA({clave:'cubo-estres',titulo:'Mi cubo de estrés',corto:'Cubo de estrés',carp:['emociones','ansiedad']});
{
  const S1=['Dolores de cabeza','Problemas intestinales','Fatiga','Enfermarme seguido','Cambios en el apetito o el sueño','Sensación de fracaso o duda','Impotencia','Menos satisfacción'],
        S2=['Sentirme desconectado(a)','Rendimiento reducido','Retirarme o aislarme','Postergar las cosas','Explosiones','Usar sustancias para sobrellevarlo','Cinismo','Tristeza, enojo o irritabilidad'];
  const pt=v=>Math.round(v*.54), bola=(id,lab,cx,cy)=>chk(id,lab,pt(cx-50),pt(cy-50),pt(100),pt(100));
  P('roda-autocuidado',2,'Señales de agotamiento emocional','👆 Toca las señales que notas en ti últimamente.',
    [...S1.map((s,i)=>bola('ag1_'+i,'Señal: '+s,228,[290,440,588,738,888,1036,1165,1310][i])),...S2.map((s,i)=>bola('ag2_'+i,'Señal: '+s,640,[290,440,588,738,888,1036,1165,1310][i]))],
    {chip:'Señales',nota:'Estas señales también pueden tener otras causas (médicas, depresión, ansiedad) y no sirven para diagnosticar. El agotamiento («burnout») es un fenómeno ligado al trabajo, no un trastorno. Coméntalo con tu psicóloga; si estás usando sustancias para aguantar o tienes pensamientos de hacerte daño, pide ayuda hoy mismo.'});
}
P('roda-autocuidado',3,'El cubo de estrés','📖 El tamaño del cubo es tu vulnerabilidad: cada persona tiene uno distinto, no es una debilidad. El estrés lo llena; el afrontamiento saludable abre la llave y lo vacía; el perjudicial alivia un rato pero agrega más agua.');
P('roda-autocuidado',4,'Mi cubo de estrés','✍️ Escribe qué llena tu cubo y cómo lo vacías hoy. Sin juzgarte: se trata de ver qué te sirve.',
  [ta('cb1','¿Qué llena mi cubo?',253,191,327,149),ta('cb2','Mis habilidades de afrontamiento saludables',254,399,327,153),
   ta('cb3','Mis habilidades de afrontamiento perjudiciales (y qué puedo hacer en su lugar)',258,613,320,149,{ph:'Lo que hago… y qué podría probar en su lugar'})],{chip:'Mi cubo'});
