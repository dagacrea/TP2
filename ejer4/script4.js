


function calcularIMC() {
    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(estatura) || isNaN(peso) || estatura <= 0 || peso <= 0) {
        alert('Por favor ingrese valores válidos y mayores que cero para estatura y peso.');
        return;
    }

    let resultado = peso / (estatura ** 2);
    alert("Su IMC es " + resultado);
}

