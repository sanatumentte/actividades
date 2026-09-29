/* Afirmaciones de límites: mazo de cartas boca abajo; al tocarla se voltea y aparece la afirmación (imagen original). */
FICHA({clave:'afirmaciones',titulo:'Mis afirmaciones de límites',corto:'Afirmaciones',carp:['relaciones','autoestima'],
  intro:`<p>Un mazo de afirmaciones para acompañarte mientras aprendes a poner límites. Voltea las cartas (o saca una al azar), léelas en voz alta y quédate con las que más necesitas escuchar.</p>`});
{
const A={'1.0':'Mi opinión y mis sentimientos son importantes.','1.1':'Los límites me ayudan a vivir mejor en el mundo.','1.2':'No es mi responsabilidad resolver los problemas de los demás.','1.3':'Puedo escuchar a otras personas sin involucrarme emocionalmente.',
 '2.0':'No es mi trabajo arreglar a otras personas.','2.1':'Establecer límites es una forma de cuidarme.','2.2':'Está bien decir «no».',
 '3.0':'No necesito ser responsable de los demás.','3.1':'La gente no tiene por qué estar de acuerdo conmigo, y eso está bien.','3.2':'Soy responsable de mi propia felicidad.','3.3':'Tengo derecho a sentir lo que siento.',
 '4.0':'No necesito disculparme por ser quien soy.','4.1':'Los límites saludables no son barreras.','4.2':'Mis límites son como puertas que puedo abrir y cerrar cuando quiera.','4.3':'No tengo por qué aceptar a personas que no respetan mis límites.',
 '5.0':'Necesito establecer límites para no sentirme maltratada ni utilizada.','5.1':'Está bien exigir responsabilidad a las personas por sus actos.','5.2':'Los límites me permiten participar, pero también retirarme cuando sea necesario.','5.3':'Establecer límites me ayuda a evitar enojarme, amargarme o sentir resentimiento.',
 '6.0':'No necesito justificar mis límites a nadie.','6.1':'Puedo establecer límites con firmeza, delicadeza y calma.','6.2':'Establecer límites me ayuda a cuidarme mejor.','6.3':'Necesito establecer límites para mi bienestar.',
 '7.0':'Mis límites protegen mi ser interior y mi derecho a tomar decisiones.','7.1':'Mis límites son mi dignidad.','7.2':'A veces los límites pueden doler, pero nada duele más que perderse a uno mismo.',
 '8.0':'Los límites son saludables, normales y necesarios.','8.1':'Establecer límites me ayudará a alinearme con mis valores.','8.2':'Cuando establezco límites, estoy dispuesto(a) a aceptar el resultado.','8.3':'Me niego a complacer a los demás a costa de mi propio bienestar.',
 '9.1':'Establecer límites puede resultar incómodo al principio, pero con el tiempo será más fácil.','9.2':'Si la gente me quiere, respetará mis límites.','9.3':'No tengo que hacer nada que no quiera.',
 '10.0':'Puedo respetar los sentimientos de los demás y, al mismo tiempo, honrar los míos.','10.1':'Tengo derecho a defender aquello en lo que creo.','10.2':'Establecer límites me hará una persona más fuerte.','10.3':'No necesito mantener relaciones con personas que no respetan mis límites.'};
const PW=1200, PH=1695, QW=600, QH=847.5, IMG=n=>`img/cartas-afirmaciones/p${String(n).padStart(2,'0')}.jpg`;
const K=Object.keys(A), tono=['#165a6c','#047578','#c9987c','#81a9a7'];
const frente=i=>`<span style="aspect-ratio:${QW}/${QH};display:grid;place-items:center;align-content:center;gap:8px;color:#fff;background:radial-gradient(circle at 30% 20%,rgba(255,255,255,.25),transparent 45%),linear-gradient(150deg,${tono[i%4]},#1f3d45);padding:14px">
  <span style="font-size:2.2rem">✨</span><span style="font-family:'DM Serif Display',Georgia,serif;font-size:1.25rem;line-height:1.1">Mi afirmación</span><span style="font-size:.8rem;font-weight:800;opacity:.85">Toca para descubrirla</span></span>`;
const carta=(k,i)=>{ const [pg,q]=k.split('.').map(Number), x=(q%2)*QW, y=(q>1?1:0)*QH;
  return cartaFlip(frente(i),recorte(IMG(pg),x,y,QW,QH,PW,PH),`<button type="button" class="f elegir" id="af_${k.replace('.','_')}" aria-pressed="false">💛 Me la llevo</button>`,`data-af="${k}"`); };
H('Mi mazo de afirmaciones','👆 Toca una carta para voltearla, o saca una al azar. Marca con 💛 las que te quieres llevar.',
  `<h2>Mi mazo de afirmaciones</h2><div class="fila"><button type="button" class="btn teal" id="afAzar">🔀 Sacar una carta al azar</button><button type="button" class="btn sec" id="afTodas">🙈 Voltear todas boca abajo</button></div>
   <div class="cartas" id="afMazo">${K.map(carta).join('')}</div>
   <label class="lab" for="af_mia">Mi propia afirmación</label><textarea class="f" id="af_mia" placeholder="Escríbela en primera persona y en presente: «Yo…»"></textarea>`,
  [...K.map(k=>chk('af_'+k.replace('.','_'),A[k],0,0,0,0,{g:'Afirmaciones que me llevo'})),ta('af_mia','Mi propia afirmación')],{chip:'Mis afirmaciones'});
document.addEventListener('click',e=>{
  if(e.target.closest('#afAzar')){ const cs=[...document.querySelectorAll('#afMazo .carta:not(.volteada)')]; if(!cs.length) return; const c=cs[Math.floor(Math.random()*cs.length)];
    c.classList.add('volteada'); c.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'center'}); }
  if(e.target.closest('#afTodas')) document.querySelectorAll('#afMazo .carta').forEach(c=>c.classList.remove('volteada')); });
}
