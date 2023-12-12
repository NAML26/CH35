/*Funciones. 
Son bloque de código con instrucciones que se pueden reutilizar las veces necesarias.
Algunas funciones reciben parámetros y otras no reciben paramtros. 
Notas: Las funciones "noramles" se llaman funciones por declaración*/

//Función que permite saludar
function saludar(){
    console.log("Hola desde una función");
}

/* Ejecutar la función con el nombre de la función y los parámetros.*/

function saludar() {
    console.log("Hola invocando la función con hoisting")

}
saludar();

/*Funciones que retornan algo. Para que una función retorne algo (un String, una operación, una variable, etc) necesitamos indicarle al códugi de la función que vamos a retornar mediante la palabra return*/
function greeting() {
    return "Hola desde una función que retorna"
}

console.log(greeting());

//Función que retorna y recibe parámetros
function sumar (x, y){
    return x + y;
}
let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

    
//Calcular el cuadrado de un numero

function calcCuadrado (numero) {
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow function). Es una manera de declarar una función por delcarar, sintetizando código y haciendolo más legible. 

//Función para calcular el cubo de un número.
const calcCubo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

//Funciones anónimas. SOn un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que las utilicemos.
//Las funciones anónimas no permiten el hoisting (no se pueden invocar antes de inicializarlas)
const mensaje = function () {
    return "Este es un msj desde una función anónima"
}
console.log(mensaje());

//Callback, o retrollamadas. Pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función B de forma genérica desde su código. 

const functionB = function (){
    console.log("Ejecutando función B");
}
//Función Aa que mandará a llamar a la función B
const functionA = function (callback) {
    callback();
}
functionA(functionB);
//async -await

