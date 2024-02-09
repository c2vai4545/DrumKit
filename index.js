/* archivo JavaScript para index.html */
const botones  = document.querySelectorAll("button");

// Agregar un evento de clic a cada botón
botones.forEach(function (btn) {
    btn.addEventListener('click', function() {
    alert("I got clicked");
    });
});
