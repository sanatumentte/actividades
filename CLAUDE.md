# Actividades Sana tu Mentte

Páginas para las pacientes de Camila Salazar (@sanatumentte). La página de pacientes está en `PaginaPaciente-Netlify/index.html`; sus recursos en `PaginaPaciente-Netlify/recursos/`.

## Convertir un PDF en interactivo "sin cambiar nada"

Cuando Camila pida hacer interactivo un PDF sin cambiar el diseño, sigue el mismo método de `PaginaPaciente-Netlify/recursos/ansiedad/`:

1. Renderiza cada página del PDF como JPG (PyMuPDF, 1200 px de ancho, calidad ~78) en `recursos/<tema>/pNN.jpg`. No se modifica ni se redibuja nada de la página.
2. Mide dónde van los ejercicios en puntos del PDF (una página carta mide 648 × 792 pt): renderiza las páginas con una cuadrícula encima para leer las coordenadas.
3. En `recursos/<tema>/index.html` define los campos de cada página en la lista `PAG` (copia `recursos/ansiedad/index.html` como plantilla). Tipos: `ta` recuadro de texto, `in` línea, `chk` casilla, `hl` frase para resaltar, `oval` óvalo para marcar, `nivel` opción única, `rueda` rueda para colorear.
4. Encima de cada página con ejercicio va una sola línea de pista (fuera de la imagen). Nada más se agrega sobre el diseño.
5. Las respuestas se guardan en el dispositivo (localStorage) y se envían copiando el texto o por WhatsApp. En teléfonos, los recuadros se abren en un editor grande. Incluye la sección «Mi cartilla»: guardar cada sesión con fecha, «Ver mis avances» (compara dos momentos) y «Pasar a otro dispositivo» (código SANA-CARTILLA1). Tiene una cartilla por paciente en el mismo dispositivo (selector «Cartilla de:»). Cambia los prefijos `sana_ansiedad_*` y `libro` para cada cuadernillo nuevo.
6. Enlaza el cuadernillo desde la biblioteca de `PaginaPaciente-Netlify/index.html` (objeto `LIBROS` y la lista `r` de su categoría).
7. Pruébalo con datos de ejemplo (capturas de las páginas con ejercicios, en escritorio y a 390 px) y muéstrale a Camila una vista previa antes de subir nada: ella aprueba primero.

## Reglas

- Escribe todo en español, con el tono cálido de la página.
- Los enlaces `#r.N` de los recursos ya enviados a pacientes no pueden cambiar de número: los recursos nuevos van al final de `RECURSOS`.
- No subas cambios a GitHub sin la aprobación de Camila.
