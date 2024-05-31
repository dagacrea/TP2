const boton = document.getElementById('boton');
function calcularArea() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);
    const mensaje = document.getElementById('mensaje');

    if (ladoA < ladoC) {
        mensaje.textContent = 'El lado A tiene que ser mayor que el lado C.';
    } else {
        const AreaTriangulo = (ladoB * (ladoA - ladoC)) / 2;
        const AreaRectangulo = ladoB * ladoC;
        const AreaTotal = AreaRectangulo + AreaTriangulo;

        mensaje.innerText = 'El área total es: ' + AreaTotal + ' metros cuadrados.';
    }
}


