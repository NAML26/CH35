/*Operador
Es un signo que especifica que debe efectuarse una determinada operación
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators*/

/*Opradores aritmeticos (+,-,*,/,%,++,--)
Op. de asignacion(=)
Op Lógicos (&&,||, !)
op, de comparacion (==,===,!=,!==,<,>,>=,<=)
Op de cadena (toLowerCase, toUpperCase, trim, toString, concat)*/

let numero1=10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 + numero2;


//Ejemplo de como aplicar un descuento

let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real: $" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + cantidadDescuento);
console.log("Precio con descuento:$" + precioConDescuento);


//Operadores de asignación

// = : Un = asigna el valor a algo

//let frutas = manzana;

/*Operadores de comparacion

(==): Igualdad
Compara valores son iguales dan true, si no dan false*/

/*let numero3 = 10;
let texto ="10";

console.log(numero3 == texto); // True, porque las dos variables son iguales. 

/*(===) Igualdad estricta
Iguala el valor y el tipo de dato*/

/*console.log(numero3 === texto);
// (!==) Desigualdad: Verifica si dos variables son iguales en valor

let numero5 = 10;
let numero6 = "10";

if (numero5 != Number (numero6)) {
    console.log("Son diferentes");{
        else {
            console.log("Los valores son iguales")
        }


// (!===) Desigualdad estricta: Verifica si don valores son iguales en valor y tipo

let numero7 = 41;
let numero8= "5";

if (numero7 !== numero8) 
    console.log("Los valores son diferentes"){
    } else {
        console.log("Los valores son iguales");
    }*/
   /* En igualdad: ==, y desigualdad: !=
    En igualdad estricta: ===, y desigualdad estricta: !==
    (Es como sustituir el primer "=" por un "!")*/

    // Mayor que >

 /*   let puntuacionFinal = 85;
    let puntuacionRequerida = 102;

    console.log(puntuacionFinal > puntuacionRequerida);

    // < Menor que

    let edad = 20;
    let edadLimite =30;

    console.log(edad < edadLimite);

//(>=) Menor o igual que 

let edad=40;
let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//(<=) Mayor o igual que

let temperatura = 14;
let temperaturaMaxima = 21;*/

/*
 * ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
 */

/*prompt ("Escribe un numero");
let numero1 = prompt
prompt ("Escribe un numero");
let numero2 = promtp


if (numero1===numero2){
    console.log("los dos numeros que ingresaste son iguales");
} else if (valor2 < valor1){
    console.log(`valor2 es menor al valor1`)
} else {
    console.log(`El valor 1 es mayor al valor 2`)
}



/*
 * ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
 */

let palabra1 = "palabra"
let palabra2 = "palabra"

if (palabra1!==palabra2) {
    console.log("Las palabras no son iguales");
} 