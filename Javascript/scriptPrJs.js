//comentarios de una solalinea 
/*para comentarios multilineales es diagonal asterisco
y cierra con asterisco diagona*/

//alert("Hola mundo"); esto nos ayuda a saber si está bien enlazado
//console.log("Este es un mensaje para mi consola")
//la consola ayuda a identificar errores, porque nos indica en qué línea estamos y si tiene errores.

//la palabra prompt es para dar mensajes 
/*var nombre = prompt ("Ingresa tu nombre");
alert(`Hola ${nombre}, qué bueno que estás aquí`)

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
*/

/*Tipo de variables
Scope-alcance que tienen las variables
Var-scope global
Let-alcance local a bloques de código
Const-Es constante durante todo el programa

Tipos de datos

String: Texto, tiene que ir entre comillas
Number: Numero
Booleano: True/False
Null: Nulo
Undefinied: No está asignado o definido
Todas nuestras variables deber ser declaradas con nombres específicos claros, sin espacion ni números. 
para declarar variables se pone let*/

/*let nombre = "22";
let invitadosExtras = 2;
let esMayorEdad = true;
let edad = 25;
let invitadoEspecial = null;
let horaDeSalida = undefined;*/

/*console.log(nombre);
document.write(nombre); //Con esto aparece la info en el documento.*/

/*Encacillamiento o tipado
Asignar un elemento a una variable
    Funciona para el mantenimiento del código. 
    Prevención de errores*/

   /* let numero = 15;
    let texto = "Hola"

// con encasillamiento
    let numeroEncasillado= number = 5;
    let textoEncasillado = string = "hola";

   /* typeof palabra reservada para saber qué tipo de dato tenemos. PasteInt y ParseFloat se utilizan para convertir string a number*/
   /*console.log(typeof(nombre));

   let funcionNumber = console.log (typeof Number (nombre)); frase;
   metodoParseInt = console.log(typeof parseInt (nombre));
   metodoParseFloat= console.log(typeof parseFloat (nombre));

   // Conversion de number a string
   console.log(typeof String(edad));
   console.log(typeof edad.toString());*/

   /*let numero = Number (esMayorEdad);
   console.log(typeof(numero));*/

 /*  let texto = string(esMayorEdad);
   console.log(typeof(texto));
   console.log(typeof esMayorEdad.toString()); */

   /*let negacion = !esMayorEdad;
   console.log (negacion);*/

  /* let saludo = "Hola humanx";
   let frase = ", el futuro es hoy";

   texto= saludo + frase;
   console.log(texto);*/

   let harina = parseInt("150");
   let huevo = toString ("1");
   let mantequilla = parseInt ("5");
   let leche = parseInt ("500");

   let nutella = 50;
   let nutellaToString= nutella.toString();

console.log(typeof (harina));
console.log(typeof(huevo));



   let pasoUno = "Paso 1: Viernte todos los ingredientes en la liuadora y mezla hasta lograr una consistencia homogenea";
   let pasoDos= "<br>Paso 2: Calienta un sartén con un poco de mantequilla";
   let pasoTres= "<br>Paso 3: Sirve la mezcla de masa para hotcakes al centro del sartén dejándolo caer suavemente";
   let pasoCUatro="<br> Paso 4: Mantén a flama baja y voltea una vez que aparezcan burbujas de aire";
   let pasoCinco= "<br> Paso 5: Repite agregando mantequilla al sartén cada vez que sea necesario";
   let pasoSeis= "<br> Paso 6:Sirve y disfruta";

   let texto= pasoUno + pasoDos + pasoTres + pasoCuatro +pasoCinco + pasoSeis 
   document.write(texto);
   
textoDos = "Esto es " + nutella;
