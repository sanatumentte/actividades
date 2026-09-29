/* Cartas de sentimientos: frente = emoción (planeta), reverso = sus preguntas. Debajo, se responden las preguntas. */
FICHA({clave:'cartas-sentimientos',titulo:'Mis cartas de sentimientos',corto:'Cartas de sentimientos',carp:['emociones'],
  intro:`<p>Cada emoción tiene algo que contarte. Toca una carta para voltearla y descubrir sus preguntas: qué piensas, cómo se siente tu cuerpo, qué haces y cómo se conecta todo.</p><p>Elige las emociones que más sientes (o las que hoy te llaman) y responde sus preguntas.</p>`});
{
/* [página del frente, cuadrante del frente, nombre] · el reverso está en la página siguiente, en espejo (columna invertida) */
const E=[[2,0,'Asustado(a)'],[2,1,'Triste'],[2,2,'Tonto(a)'],[2,3,'Tímido(a)'],[4,0,'Herido(a)'],[4,1,'Enojado(a)'],[4,2,'Frustrado(a)'],[4,3,'Entusiasmado(a)'],
  [6,0,'Nervioso(a)'],[6,1,'Contento(a)'],[6,2,'En calma'],[6,3,'Tranquilo(a)'],[8,0,'Feliz'],[8,1,'Cansado(a)'],[8,2,'Orgulloso(a)'],[8,3,'Amado(a)']];
const PW=1200, PH=1553, IMG=n=>`img/cartas-sentimientos/p${String(n).padStart(2,'0')}.jpg`;
const FR=[[58,64],[636,64],[58,801],[636,801]], AT=[[58,64],[630,64],[58,818],[630,818]], CW=505, CH=665;
const PREG=[['pen','Pensamientos'],['cue','Sentimientos (mi cuerpo)'],['acc','Acciones'],['con','Conexiones'],['ref','Reflexión']];
const carta=([pg,q,n],i)=>{ const [fx,fy]=FR[q], bq=[1,0,3,2][q], [bx,by]=AT[bq];
  return cartaFlip(recorte(IMG(pg),fx,fy,CW,CH,PW,PH),recorte(IMG(pg+1),bx,by,CW,CH,PW,PH),
    `<details class="cs-resp"><summary>✍️ Responder: ${n}</summary>${PREG.map(([k,l])=>`<label class="lab" for="cs_${i}_${k}">${l}</label><textarea class="f" id="cs_${i}_${k}" rows="2"></textarea>`).join('')}</details>`); };
H('Mis cartas de sentimientos','👆 Toca una carta para ver sus preguntas. Luego toca «✍️ Responder» en las emociones que elijas.',
  `<style>.cs-resp{background:#fff;border:1px solid var(--beige);border-radius:14px;padding:8px 12px}.cs-resp summary{cursor:pointer;font-weight:800;color:var(--petroleo);font-size:.9rem}.carta:has(.cs-resp[open]){grid-column:1/-1;max-width:560px;justify-self:center;width:100%}</style>
   <h2>Mis cartas de sentimientos</h2><div class="cartas">${E.map(carta).join('')}</div>`,
  E.flatMap(([pg,q,n],i)=>PREG.map(([k,l])=>ta(`cs_${i}_${k}`,`${n} · ${l}`))),{chip:'Mis sentimientos'});
/* Al abrir, las emociones que ya tienen respuestas quedan abiertas */
_ult().alCambiar=()=>document.querySelectorAll('.cs-resp:not([data-ok])').forEach(d=>{ d.dataset.ok=1; if([...d.querySelectorAll('textarea')].some(t=>t.value.trim())) d.open=true; });
}
