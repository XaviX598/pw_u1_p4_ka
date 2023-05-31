let num = '';
let igual = true;

const opcionesNumericas = (numero) => {
    if (igual) {
        document.getElementById("labelResultado").innerHTML =
        document.getElementById("labelResultado").innerHTML + numero;
    } else {
        document.getElementById("labelResultado").innerHTML = numero;
        igual = true;
    }
};

const asignarNum = () =>
    parseInt(document.getElementById("labelResultado").innerHTML);

const simbologia = (operaciones) => {
    if (operaciones == "=") {
        document.getElementById("labelResultado").innerHTML = eval(num + document.getElementById("labelResultado").innerHTML);
        num = '';
        igual = false;
    } else {
        num += document.getElementById("labelResultado").innerHTML + operaciones;
        document.getElementById("labelResultado").innerHTML = '';
        console.log(num);
    }
};