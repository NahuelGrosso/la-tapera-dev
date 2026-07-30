//* ==========================================
/*CONTACTO - DESPLEGABLE*/
//*========================================== */

const contactButton = document.querySelector(".contact-button");
const dropdown = document.querySelector(".contact-dropdown");
const copyButton = document.querySelector(".copy-email");

console.log(contactButton);
console.log(dropdown);
console.log(copyButton);

contactButton.addEventListener("click", function (event) {

    event.preventDefault();

    console.log("CLICK");


    dropdown.classList.toggle("active");

});

copyButton.addEventListener("click", function () {

    navigator.clipboard.writeText("lataperadev@gmail.com");

});

/* ==========================================
   MENÚ HAMBURGUESA
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

/* Función para cerrar el menú */

function closeMenu() {

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

}

/* Abrir / cerrar menú */

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

});

/* Cerrar al hacer click fuera */

document.addEventListener("click", (event) => {

    const clickDentroDelMenu = navMenu.contains(event.target);
    const clickEnBoton = menuToggle.contains(event.target);

    if (!clickDentroDelMenu && !clickEnBoton) {

        closeMenu();

    }

});

/* Cerrar al navegar */

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(link => {

    /* No cerrar si es el botón Contacto */

    if (link.classList.contains("contact-button")) return;

    link.addEventListener("click", () => {

        closeMenu();

    });

});

copyButton.addEventListener("click", function () {

    navigator.clipboard.writeText("lataperadev@gmail.com");

    closeMenu();

});