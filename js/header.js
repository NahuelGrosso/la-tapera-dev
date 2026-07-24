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