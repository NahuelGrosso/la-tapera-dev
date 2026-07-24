/* ==========================================
   CARRUSEL DESCONGELAPP
========================================== */

const gallery = [

    {
        image: "../images/descongelApp/Capturas/Img-1.jpeg",
        title: "Pantalla de inicio",
        description: "Botones para  día de IATF o ver archivos de IATF"
    },

    {
        image: "../images/descongelApp/Capturas/Img-2.jpeg",
        title: "Formulario",
        description: "Carga de datos del establecimiento y rodeo"
    },

    {
        image: "../images/descongelApp/Capturas/Img-3.jpeg",
        title: "Formulario",
        description: "Datos del semen, selector del volumen de las pajuelas y personal a cargo de la inseminación"
    },

    {
        image: "../images/descongelApp/Capturas/Img-4.jpeg",
        title: "Termo virtual",
        description: "Cronómetro de la duración de la actividad, termo virtual que indica dónde hay una pajuela, tiempo para descongelarse y tiempo descongelada, cantidad de animales que restan inseminar, contador de pajuelas rotas, botones para volver al formulario y finalizar actividad"
    },

    {
        image: "../images/descongelApp/Capturas/Img-5.jpeg",
        title: "Resumen de actividad",
        description: "Acá veremos toda la información que cargamos en el formulario, información que se completa automáticamente (fecha, hora de inicio, finalización, duración de la actividad), cantidad de animales inseminados, de pajuelas utilizadas, pajuelas rotas y pajuelas totales"
    },

    {
        image: "../images/descongelApp/Capturas/Img-6.jpeg",
        title: "Compartir",
        description: "Menú Compartir de Android"
    },

    {
        image: "../images/descongelApp/Capturas/Img-7.jpeg",
        title: "Archivo",
        description: "Archivos guardados, agrupados según el mes, para ingresar a ver cualquier actividad guardada"
    },

    {
        image: "../images/descongelApp/Capturas/Img-8.jpeg",
        title: "Archivo",
        description: "Selección de archivos, para poder compartirlos o eliminarlos"
    }

];

let current = 0;


/* ==========================================
   ELEMENTOS HTML
========================================== */

const image = document.querySelector(".gallery-image img");

const title = document.querySelector(".gallery-description h3");

const description = document.querySelector(".gallery-description p");


const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const indicatorsContainer = document.querySelector(".gallery-indicators");

/* ==========================================
   CREAR INDICADORES
========================================== */

gallery.forEach(() => {

    const dot = document.createElement("span");

    indicatorsContainer.appendChild(dot);

});

const indicators = indicatorsContainer.querySelectorAll("span");

/* ==========================================
   ACTUALIZAR CARRUSEL
========================================== */

function updateGallery() {

    image.src = gallery[current].image;

    title.textContent = gallery[current].title;

    description.textContent = gallery[current].description;

    indicators.forEach((dot, index) => {

        dot.classList.toggle("active", index === current);

    });

}


/* ==========================================
   BOTÓN SIGUIENTE
========================================== */

next.addEventListener("click", () => {

    current++;

    if (current >= gallery.length) {

        current = 0;

    }

    updateGallery();

});


/* ==========================================
   BOTÓN ANTERIOR
========================================== */

prev.addEventListener("click", () => {

    current--;

    if (current < 0) {

        current = gallery.length - 1;

    }

    updateGallery();

});


updateGallery();