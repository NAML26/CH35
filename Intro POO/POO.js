//Clases: PLantillas para crear objetos. Nos ayudan  a definir un tipo de objeto y crear instancias de este tipo de objetos
//Clases, Objetos, atributos, constructor

class Persona {

    nombre ="";
    apellido = "";
    edad = "";
    email = "";
    telefono = "";

    //Constructor= funcion especial para construir o instanciar Objetos
    //Para inicializar un objeto se tiene que definir al constructor

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}

comer () {
    console.log("Bon apetit");
}//Método comer

bailar(){
    console.log("Dale hasta el suelo");

}
mostrarInfo(){
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
    console.log("Telefono: ", this.telefono);
}
}
//Class: Persona Ln. 4 
let usuario1 = new Persona ("Fernanda", "Ramos",31, "fer@gmail.com", "512345678");//Instanciando objeto Usuario1
let usuario2 = new Persona ("Ana", "Ruiz", 12, "ana@gmail.com", "1354685");
let usuario3 = new Persona ("Juan","Loco", 30, "juan@gmail.com", "13598456");
let usuario4 = new Persona ("Franco", "Ruiz", 27, "franco@gmail.com","65894988");
let usuario5 = new Persona ("Nadia", "Leon", 28, "nadia@gmail.com", "556099875");

console.log(usuario1);//Imprimir objeto completo
console.log(usuario4.email); //Mostrar un atributo específico
console.log(usuario1.email)

console.log(usuario1.telefono, usuario2.apellido);

//Invocar métodos
usuario4.comer();
usuario1.bailar();
usuario2.mostrarInfo();

//Pilares de la programación Orientada a Objetos

/*
Herencia
Polimorfismo
Encapsulamiento
Abstracción
*/

//Herencia: La clase principal hereda sus atributos a clases inferiores, las clases inferiores reciben los atributos de la clase principal.

class arrendador {
    capacidad = 0;
    direccion = "";
    codigoPostal = "";
    costo = ""
    nombreLugar = "";
//Pedir de la clase padre algun atributo con la palabra super
constructor (nombre, apellido, edad, email, telefono){
    super (nombre, apellido, edad, email, telefono);
    this.capacidad = capacidad;
    this.costo = costo;
    this.nombreLugar = nombreLugar;
    }
}

mostrarInfo () {
    console.log("Capacidad: ", this.capacidad);
    console.log("Costo: ", this.costo);
    console.log("Nombre del lugar: ", this.nombreLugar);
}

//EXTENDS crea una nueva subclase relacionada a otra.
/*class arrendadorGuadalajara extends arrendador {
}*/

//Instanciar objeto de subclase

let arrendador1 = new arrendador("Rocío", "Hernandez", 29, "rocio@gmail.com, "53685566" , 100 , 50000, "CASA PANCHA");

console.log(arrendador1);
console.log(arrendador1.costo)

arrendador1.mostrarInfo();

//POLIMORFISMO: Que objetos de diferentes tipos respodan al mismo método. 

class producto {
marca = "";
precio = 0;

constructor (marca, precio) {
    this.marca = marca;
    this.precio = precio;
    }
}
mostrarDescripción (){
    console.log("Marca: ";
    console.log("Precio: ");
}


let producto1 = new producto ("cerave", 85);

//Encapsulamiento: Para coultar la implementación de un objeto y datos necesarios

class Usuario {
    #contraseña;

    constructor (userName, correo, contraseña);{
    this.userName = userName;
    this.correo = correo;
    this.#contraseña= contraseña;
    }


    verificarContrseña(contraseña) {
        return this.#contraseña === contraseña;
    }
}

//Abstraccion: Traer objetos del mundo real y aplicarlos a la programación mediante clases, métodos, constructores y objetos. 


//NOTACION DE OBJETOS TIPO JSON: Es un formato de intercambio de datos ligero, accesible, y estructurado que nos brinda mejor comunicación entre cliente y servidor. Generalmente se ejecutan con fetch. Los objetos JSON son strings

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//Principio Solid--Investigar

//Principio de responsabilidad única (Single responsability Principle): Que la clase principal no se modifique 

//Principio abierto/cerrado (open/close principle OCP): UNa clase puede estar abierta a extensiones y agregar nuevas funcionalidades pero sin generar cambios en la misma

//Principios de sustitucion de Liskov (Liskov sustituiton Principle LSP): Una clase hijo puede sustituir objetos de una clase padre

//Principio de segregacion de interdaces (Interface Segregation Principal ISP): Delimitar los métodos que necesito y dejar fuera los innecesarios

//Principio de inversion de dependencia (Dependency Inversion Principle DIP)

/*Hacer un programa que conste de una clase llamada Alumno que tenga como atributos: Nombre y calificación. Definir atributos (contructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria.

Atributos
Nombre
Calificación

Métodos
imprimirCalificación
evaluación

La calificación aprovatoria es de 6
if para evaluar la calificación 
*/

Class Alumno {
    nombre= "" ,
    calificacion= "" ,

    constructor (nombre, calificacion){
        this.nombre = nombre;
        this.calficacion = calificación;
    }

imprimirCalificacion(){
    console.log(Alumno.calficacion)
}

evaluacion(){
    if(this.calificacion >= 6){
        console.log(Aprobaste ${this.nombre});
    } else{
        console.log(Reprobaste ${this.nombre});
    }
}
    
let Alumno1 = new Alumno ("Rene, 9");
let Alumno2 = new Alumno ("Abi, 4");
let Alumno3 = new Alumno ("Karen, 9");
let Alumno4 = new Alumno ("Baruch, 9");
let Alumno5 = new Alumno ("Eunice, 9");


console.log(Alumno1, Alumno2,);

