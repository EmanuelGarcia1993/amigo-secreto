// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista en donde se va a guardar los nombres
let listaDeAmigos = [];

//Ingreso de nombres
function agregarAmigo() {

    //toma el valor ingresado en el input con id:'amigos' y lo guarda en 'nombre'
    let nombre = document.getElementById('amigo').value;

    //comprueba que no sea un espacio en blanco y no contenga numeros
    //'/\d/'= regex; busca un numero / '.test' comprueba en la variable lo solicitado
    if (nombre === '' || /\d/.test(nombre)) {
        //En el caso de que lo ingresado no sea un nombre modifica el texto del elemento h2
        asignarTextoElemento('h2', 'Ingresa un nombre valido');
        limpiarCaja();
    } else {
        //Se agrega el nombre ingresado en la lista
        listaDeAmigos.push(nombre);
        limpiarCaja();
    }  

    console.log(listaDeAmigos);
}

//Esta funcion asigna un texto al elemento que se quiera modificar
function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

//Esta funcion es para limpiar la caja
function limpiarCaja() {

    document.querySelector('#amigo').value = '';

}