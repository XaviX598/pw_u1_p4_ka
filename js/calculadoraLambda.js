/*en js existe solo un concepto de lamba, y se los declara asi
siemrpe para declarar lambdas debemos valoresnos de una constante y el nombre de la lambda, luego igual y los argumentos
 de entrada y salida
 
 si solo tenemos una expresion como en el caso de sumar que solo es num1 + num2 se puede poner en el mismo lambda*/

const sumar = (num1, num2) => num1 + num2;


const sumarNumeros = () => {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(convertir('idNum1'), convertir('idNum2'));
}

const restarNumeros = () => {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + resta(convertir('idNum1'), convertir('idNum2'));

}
const multiplicarNumeros = () => {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicacion(convertir('idNum1'), convertir('idNum2'));

}
const dividirNumeros = () => {
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + division(convertir('idNum1'), convertir('idNum2'));
}


const convertir = (idCampo) => {
    console.log('Convertir' + idCampo) /*para imprimir como un sysout*/
    parseInt(document.getElementById(idCampo).value);
}

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;


const eliminarElemento = (num1, num2) => {
    document.getElementById('idEliminar').remove();
    console.log(document.getElementById('idEliminar'))
    console.log('Test')

}

const insertarElemento = (num1, num2) => {
    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';
}

/*dentro de js manejamos 3 tipos de variables, la mas usada era la 'var', la otra 'let' y la siguiente es la 'const'
para cualquier tipo de variable se utiliza var y let, pero la var ya no es conmunmente utulizada
la let es mas eficiente y cons es para constantes, por ejemplo detro de aqui esta const, es porque siempre se llamara asi, 
al utlizar tipos de atributos constantes usar const, os tipos de declaran asi
cuando un lenguaje hace control como java que sean los mismo tipos de variable, se llaman lenguajes fuertemente tipados
en js son mas flexibles*/

const metodoConceptoJS = () => {

    //TODO SE IMPRIME EN LA CONSOLA DE LA PAGINA CON F12
    //declaracion de variables, siempre se infiere el tipo, se pueden declarar tambien arreglos, primitivos, objetos
    var variable1 = 'Xavier';
    var variable2 = 1;

    let variable3 = 'Xavier';
    let variable4 = 2;

    const variable5 = 'Xavier';
    const variable6 = 3;

    console.log(variable3);

    //declaracion de arreglos
    const diasSemana = ['Lunes', 'Martes', 'Miercoles'];
    console.log(diasSemana);
//-----------------------------------------------------------------------------------------------------------------------------
    //para imprimir un elemento en especifico
    console.log(diasSemana[0]);
//-----------------------------------------------------------------------------------------------------------------------------
    //agregar mas elementos
    diasSemana.push('Jueves', 'Viernes')
    console.log(diasSemana)
//-----------------------------------------------------------------------------------------------------------------------------
    //para concatenar
    const diasFinSemana = ['Sabado', 'Domingo'];
    console.log(diasSemana.concat(diasFinSemana))
    console.log(diasSemana);
    const diasCompleto = diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);
//-----------------------------------------------------------------------------------------------------------------------------
    //para recorrer el vector
    //palabra reservada para recorrer es 'of'
    for (const dia of diasCompleto) {
        console.log(dia);
    }
//-----------------------------------------------------------------------------------------------------------------------------
    //para declarar objetos, siempre se declara entre llaves
    //formato JSON, es una representacion mas ligera que xml, donde se represantea o guarda informacion
    /* en formato xml es:
    <persona>
    <nombre>Xavier</nombre>
    <apellido>Aguilar</apellido>
    </persona>

    en formato JSON:
    
  "persona": {
    "nombre": "Xavier",
    "apellido": "Aguilar"
  }

*/
    //para js usamos nomenclatura JSON
    const persona = {
        nombre: 'Xavier',
        apellido: 'Aguilar',
        edad: 25,
        ciudad: 'Quito'
    }
    console.log(persona)

    //se puede tener un objeto dentro de otro objeto
    const persona2 = {
        nombre: 'Romina',
        apellido: 'Ramirez',
        edad: 21,
        ciudad: 'Pinias',
        vehiculo: {
            marca: 'Audi',
            modelo: 'R8',
            anio: '2020'
        }
    }
    console.log(persona2)
//-----------------------------------------------------------------------------------------------------------------------------
    //MODIFICAR ELEMENTOS SOLOS SI DEJA , TODO DE UNA NO DEJA

    /* 
    const nombrePrueba = 'Xavier';
    console.log(nombrePrueba)
    nombrePrueba = 'Kevin';
    console.log(nombrePrueba)
    */
    const arreglo = [1, 2];
    console.log(arreglo);
    arreglo[0] = [2];
    console.log(arreglo);
//-----------------------------------------------------------------------------------------------------------------------------
    //Desestructuracion de arreglos
    /*la desestrucutracion es la descomposisicion de un elemento JS, puede ser un arreglo, objeto, lista, cualquier tipo de
    elemento que maneje Js, la idea es descomponer, desarmar, o desestructurar en partes, al habalr de arreglos, 
    se puede desustructurar en partes*/
    const dias2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    const[dia1, dia2, dia3, dia4] = dias2;
    console.log(dia2);
    console.log(dia4);

    const[d1, d2, d3, d4, d5] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(d1);
    console.log(d5);
//-----------------------------------------------------------------------------------------------------------------------------
    //Desestructuracion de objetos
    /* en un objeto se declara los nombres de los atributos separados por coma dentro de {}*/
    const persona3 = {
        nombre: 'Xavier',
        apellido: 'Aguilar',
        edad: 25,
        ciudad: 'Quito'
    }
    console.log(persona);

    const{nombre, ciudad}=persona3;
    console.log(nombre);
    console.log(ciudad);

    const persona4 = {
        nombre: 'Romina',
        apellido: 'Ramirez',
        edad: 21,
        ciudad: 'Pinias',
        vehiculo: {
            marca: 'Audi',
            modelo: 'R8',
            anio: '2020'
        }
    }


    console.log(persona4.nombre);
    console.log(persona4.vehiculo.nombre)
    

}




