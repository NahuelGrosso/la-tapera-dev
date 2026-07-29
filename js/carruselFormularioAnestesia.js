/* ==========================================
   CARRUSEL DESCONGELAPP
========================================== */

const gallery = [

    {
        image: "../images/FormularioAnestesia/Capturas/Img-1.jpeg",
        title: "Formulario",
        description: "Campos para completar lugar, propietario y paciente"
    },

    {
        image: "../images/FormularioAnestesia/Capturas/Img-2.jpeg",
        title: "Formulario",
        description: "Examen clínico prequirúrgico"
    },

    {
        image: "../images/FormularioAnestesia/Capturas/Img-3.jpeg",
        title: "Formulario",
        description: "Estudios complementarios, riesgo anestésico - Pre anestesia drogas y vía de administración - Botón para iniciar preanestesia [Cronometro de anestesia]"
    },

    {
        image: "../images/FormularioAnestesia/Capturas/Img-4.jpeg",
        title: "Formulario",
        description: "Sección para registrar la induccion de la anestesia, la vía y los sus farmacos"
    },

    {
        image: "../images/FormularioAnestesia/Capturas/Img-5.jpeg",
        title: "Formulario",
        description: "Mantenimiento de anestesia, via de administración y selección de farmacos, que completa de forma autmatica la tabla que hay debajo"
    },

    {
        image: "../images/FormularioAnestesia/Capturas/Img-6.jpeg",
        title: "Formulario",
        description: "Boton para registrar  el mantenimiento de la anestesia, seleccionar el farmaco, la vía y la cantidad, al hacer click en el boton se agregan a la tabla"
    },

    {
        image: "../images/FormularioAnestesia/Capturas/Img-7.jpeg",
        title: "Formulario",
        description: "Lugar para completar con infromación que considere necesaria respecto a lo que fue la intervención - Boton para descargar el formulario"
    },

   

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