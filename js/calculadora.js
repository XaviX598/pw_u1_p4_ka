function sumar(num1, num2) {
    return num1 + num2;
}
function sumarNumeros() {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(convertir('idNum1'), convertir('idNum2'));

}
function restarNumeros() {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + resta(convertir('idNum1'), convertir('idNum2'));

}
function multiplicarNumeros() {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicacion(convertir('idNum1'), convertir('idNum2'));

}
function dividirNumeros() {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + division(convertir('idNum1'), convertir('idNum2'));
}


function convertir(idCampo) {
    return parseInt(document.getElementById(idCampo).value);
}


function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 == 0) {

    }
    return num1 / num2;
}

function eliminarElemento() {
    document.getElementById('idEliminar').remove();
    console.log(document.getElementById('idEliminar'))
    console.log('Test')

}

function insertarElemento() {
    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';

}
