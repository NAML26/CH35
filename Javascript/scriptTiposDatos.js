/*Tipos de datos
Strings (cadenas de texto)
Number (numéricos)
Booleans (booleanos: true or false)
Undefined (Indefinidos)
Null (nulos)
Objects (Objects)
Objects (Arrays)
*/

/* console.log(); permite visualizar en los navegadores el codigo de js. Pero no siempre se tiene que imprimir en consola para correr todos los programas. 
console.warn(); Muestra un mensaje de advertencia.
console.error(); Muestra un mensaje de error
console.table();
*/

let firstName;
firstName = 'Daniel';
let lastName = 'Maldonado';

console.log(firstName + ' ' + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/* ECMAScript 8 (ES6) Interpolacion de cadenas
backticks (AltGr + 96)
para variables invocamos ${variable}
Texto para string*/

let age = 37;
console.log (`Mi nombre es ${firstName},
mi apellido es ${lastName} 
y tengo ${age} años`);

//console.warn();
console.warn("precaución, no es buena practica dejar sin punto y coma");
//console.error();
console.error(`Status 404: Failed`);

/*Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el que se almacena una colección de elementos de maner ordenada. 
-Los arrays se pueden manipular mediante métodos específicos. 
-Los elementos de un array se contabilizan como índices empezando por índice 0, por lo cual el primer elemento de array posee el índice 0. 
-Un array posee N cantidad de elementos. 
-Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato. 
*/
let arreglo1 = []; //Array vacío
console.log(`Array vacío ${arreglo1}`)
//Los elementos de un array se separan mediante comas. 
let cars = ["VW", "BMW","Mazda","kia"]; //Array de string
console.log(cars);
//Longitud e índice son diferentes. La longitud (lengt) es el número de elementos, y el índices es cada elemento a partir del 0. 

console.log(typeof(cars));
let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMxn.length);

/*
Objetos. Tipos de datos en JS con estructura definida que permite almacenar información mediante llaves (claves) y valores.
Su sistaxis es:
    const object = {
        clave1: valor1 (dato),
        calve2: valor2 (dato2)
    }
Los objetos pueden almacenar diferentes tipos de valores. Se usa constante porque se busca manipular lo menos posible.
Las API son objetos*/

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age: 29,
    country: "México"
}
console.log(employee);
//Mostrar el objeto como tabla
console.table(employee);
//Mostrando el array como tabla
console.table(cars)




