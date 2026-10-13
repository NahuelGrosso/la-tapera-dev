/* ==========================================
   CARRUSEL RAVET
========================================== */

const gallery = [

    {
        image: "../images/ravet/Capturas/RAVet-Captura-01.jpeg",
        title: "Pantalla de inicio",
        description: "Home de la aplicación, con acceso a las funciones principales"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-02.jpeg",
        title: "Formulario",
        description: "Carga de informacion general"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-03.jpeg",
        title: "Formulario",
        description: "Datos del paciente"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-04.jpeg",
        title: "Etapa de premedicación",
        description: "Selector de farmacos"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-05.jpeg",
        title: "Etapa de inducción",
        description: "Selector de farmacos y la solapa de bloqueos"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-06.jpeg",
        title: "Etapa de mantenimiento",
        description: "Farmacos inhalatorios, toma de parametros, acontesimientos durante la anestesia"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-07.jpeg",
        title: "Etapa de recuperación",
        description: "Registra cuando el animal despierta, se pueden registrar farmacos que se administran post anestesia y las observaciones"
    },

    {
        image: "../images/ravet/Capturas/RAVet-Captura-08.jpeg",
        title: "Archivos",
        description: "Vista de todos los archivos guardados para poder verlos, compartirlos o eliminarlos"
    },
    
    {
        image: "../images/ravet/Capturas/RAVet-Captura-09.jpeg",
        title: "Registro RAVet",
        description: "Vista de todos los acontesimientos registrados durante la anestesia agrupados en columnas, parametros, administración de farmacos IV, cambios en la regulacion de farmacos inhlatorios y acontesimientos que puedan surgir durante la anestesia"
    },
    
    {
        image: "../images/ravet/Capturas/RAVet-Captura-10.jpeg",
        title: "Documento",
        description: "Vista del documento generado con toda la información registrada durante la anestesia, que puede compartirse  como archivo PDF"
    },
    
    {
        image: "../images/ravet/Capturas/RAVet-Captura-11.jpeg",
        title: "Configuracion",
        description: "Aca podra configurar la alarma para recordar tomar los parametros cuando el usuario prefiera, agregar los datos del profesional anestesista, editar o eliminar los farmacos que agregue el usuario, generar un respaldo con toda la información de la aplicación. Exportar/Importar los datos."
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