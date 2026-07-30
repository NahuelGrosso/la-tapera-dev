/* ==========================================
   HEADER
   Funcionalidades del encabezado
========================================== */

/* ==========================================
   ELEMENTOS
========================================== */

const contactButton = document.querySelector(".contact-button");
const dropdown = document.querySelector(".contact-dropdown");
const copyButton = document.querySelector(".copy-email");

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

/* ==========================================
   FUNCIONES
========================================== */

/* Cerrar desplegable de contacto */

function closeContactDropdown() {

    dropdown.classList.remove("active");

}

/* Abrir / cerrar desplegable de contacto */

function toggleContactDropdown() {

    dropdown.classList.toggle("active");

}

/* Cerrar menú hamburguesa */

function closeMenu() {

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

}

/* Cerrar completamente el header */

function closeHeader() {

    closeMenu();

    closeContactDropdown();

}


/* ==========================================
   CONTACTO
========================================== */

contactButton.addEventListener("click", function (event) {

    event.preventDefault();

    event.stopPropagation();

    toggleContactDropdown();

});

copyButton.addEventListener("click", function () {

    navigator.clipboard.writeText("lataperadev@gmail.com");

    closeHeader();

});


/* ==========================================
   MENÚ HAMBURGUESA
========================================== */

menuToggle.addEventListener("click", function (event) {

    event.stopPropagation();

    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

});


/* ==========================================
   NAVEGACIÓN
========================================== */

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(link => {

    /* Contacto no navega */

    if (link.classList.contains("contact-button")) return;

    link.addEventListener("click", () => {

        closeHeader();

    });

});


/* ==========================================
   CLICK FUERA DEL HEADER
========================================== */

document.addEventListener("click", function (event) {

    const clickMenu = navMenu.contains(event.target);

    const clickHamburguesa = menuToggle.contains(event.target);

    const clickDropdown = dropdown.contains(event.target);

    const clickContacto = contactButton.contains(event.target);

    if (
        !clickMenu &&
        !clickHamburguesa &&
        !clickDropdown &&
        !clickContacto
    ) {

        closeHeader();

    }

});