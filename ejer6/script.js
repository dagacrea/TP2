const enviar=document.getElementById("Enviar")
enviar.addEventListener("click",(e)=> {
    e.preventDefault();
    validarFormulario();
})

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseInt(document.getElementById("altura").value);
    const email = document.getElementById("email").value.trim();

    if (nombre == "" || apellido == "") {
        mostrarMensaje("Nombre y apellido son obligatorios.", "red");
    } else if (nombre.length > 50 || apellido.length > 50) {
        mostrarMensaje("Nombre y apellido deben tener menos de 50 caracteres.", "red");
    } else if (edad < 0 || isNaN(edad)) {
        mostrarMensaje("La edad debe ser un número positivo.", "red");
    } else if (edad < 18) {
        mostrarMensaje("Debe ser mayor de edad para enviar el formulario.", "red");
    } else if (altura < 30 || altura > 230 || isNaN(altura)) {
        mostrarMensaje("La altura debe estar entre 30 cm y 230 cm.", "red");
    } else if (!email.includes("@")) {
        mostrarMensaje("Ingrese una dirección de correo electrónico válida.", "red");
    } else {
        mostrarMensaje("Todos los datos son correctos.", "green");
    }
}

function mostrarMensaje(texto, color) {
    mensaje.textContent = texto;
    mensaje.style.color = color;
}
