FICHA({clave:'sn-estres',titulo:'Mi respuesta al estrés',corto:'Respuesta al estrés',carp:['emociones','ansiedad']});
{ const X=64, W=478;
  P('regulacion-sn',13,'Mi respuesta al estrés (1)','✍️ Describe una situación estresante y tus reacciones físicas.',
    renglones('se13_',['1. La situación (fecha y hora)','2. Respuestas físicas'],[569,591,614,635,725,746,768],X,W),{chip:'Situación'});
  P('regulacion-sn',14,'Mi respuesta al estrés (2)','✍️ Escribe tus respuestas emocionales y tus pensamientos.',
    renglones('se14_',['3. Respuestas emocionales','4. Respuestas cognitivas (pensamientos)'],[200,227,254,280,307,334,451,477,503,529,555,581],68,460),{chip:'Emociones y pensamientos'});
  H('Reflexiona','✍️ Mira lo que escribiste.',`<h2>Reflexiona</h2><label class="lab" for="se_r1">¿Son acertados mis pensamientos? ¿Son útiles? ¿Qué podría decirme que fuera más preciso o útil?</label><textarea class="f" id="se_r1" rows="3"></textarea><label class="lab" for="se_r2">¿Cómo me sentiría si me lo dijera?</label><textarea class="f" id="se_r2" rows="2"></textarea>`,
    [ta('se_r1','Pensamiento más preciso o útil'),ta('se_r2','Cómo me sentiría')],{chip:'Reflexión'}); }
