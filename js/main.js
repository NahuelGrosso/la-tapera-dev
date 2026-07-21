/* ==========================================
   LA TAPERA DEV
   Archivo: main.js

   Funcionalidades JavaScript del sitio.
========================================== */

/* ==========================================
   SHRINK A HERO SCROLL
========================================== */
/*     */
const hero = document.querySelector("#hero");

/* Alturas del Hero */
const HERO_MAX_HEIGHT = 100;
const HERO_MIN_HEIGHT = 80;

/* Distancia de scroll necesaria para completar la animación */
const SCROLL_DISTANCE = 300;

window.addEventListener("scroll", heroCollapse);

function heroCollapse() {

    const scroll = window.scrollY;

    /* Calculamos el progreso (0 → 1) */

    const progress = Math.min(scroll / SCROLL_DISTANCE, 1);

    /* Calculamos la altura */

    const currentHeight =
        HERO_MAX_HEIGHT -
        ((HERO_MAX_HEIGHT - HERO_MIN_HEIGHT) * progress);

    hero.style.height = `${currentHeight}vh`;

}