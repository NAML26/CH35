//comentarios de una solalinea 
/*para comentarios multilineales es diagonal asterisco
y cierra con asterisco diagona*/

//alert("Hola mundo"); esto nos ayuda a saber si está bien enlazado
//console.log("Este es un mensaje para mi consola")
//la consola ayuda a identificar errores, porque nos indica en qué línea estamos y si tiene errores.

//la palabra prompt es para dar mensajes 
var nombre = prompt ("Ingresa tu nombre");
alert("Hola, " + nombre + ", qué bueno que estás aquí");
//El nombre de variables debe seguir la convención camelCase, no pueden haber espacios entre las palabras y no pueden iniciar con número o caracteres especiales
/*var numero1 = parseInt (prompt ("Ingresa el primer número"));
var numero2 = parseInt (prompt ("Ingresa el segundo numero"));
//el signo + se usa para concatenar variables o texto
console.log ("La suma de esos numeros es:" + (numero1 + numero2));
console.log ("La resta de esos numeros es:" + (numero1 - numero2));
console.log ("La multiplicación de esos numeros es:" + (numero1 * numero2));
console.log ("division" + (numero1 / numero2));*/

/*var edad = parseInt (prompt ("Ingresa tu edad"))

if (edad > 18) {
    alert ("Eres mayor de edad. Adelánte");}
     {
    else ("Eres menor de edad")
}
/*

Tipo de variables
Scope-alcance que tienen las variables
Var-scope global
Let-alcance local a bloques de código
Const-Es constante durante todo el programa

Tipos de datos

String: Texto, tiene que ir entre comillas
Number: Numero
Booleano: True/False
Null: Nulo
Undefinied: No está asignado o definido*/

let nombre = "Daniel";
let invitadosExtras = 2;
let esMayorEdad = true;
let edad = 25;
let invitadoEspecial = null;
let horaDeSalida = undefined;
