//Programación sincrónica
/*
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("******************************");*/
/*Programación asíncrona. 
/setTimeout que recibe una función anónima y establece un tiempo (en milisegundos 1000ms = 1s) de ejecución para cumplir con la condición de asincronismo
*/
/*
const twoAsync = () => {
    setTimeout( () => {
        console.log("dos Async");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function() {
        console.log("uno Async");
    }, 2000);
    twoAsync();
    console.log("tres Async");
}

oneAsync();
*/
/**
 * Trabajando con promesas mediante Fetch API
 */
const url = "https://jsonplaceholder.typicode.com/users";

// > - Usando fetch para mostrar en consola
fetch(url)
    //Si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
    .then(response => response.json())
    .then(response => {
        console.log(response);//Mostrando en consola todos los usuarios de la API
        console.log(response[0].name);//Mostrando en consola el usuario con el indice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("¡Ups!, algo salió mal", error));//Mensaje de error

// > - Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la API: Debe ser de tipo null
let post = null;

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
        .then(response => response.json())
        .then(response => {
            post = response; //Guardo los datos de response en la variable de tipo null, para que modificar el dato
            //Mandamos a llamar la variable desde la función (peeeero, esa no la hemos hecho, hay que hacerla)
            mostrarDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
});

//Función que me permita manipular la variable de tipo null
//Quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

// > - Usando fetch para mostrar en navegador (MOSTRAR PRODUCTOS)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response;
            //Funcion por definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidao!", error))
});

//Función para crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //mando a llamar las llaves de title, price, description, category, image desde la API
    productos.map((productos) => { //El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
        const imagen = document.createElement("img");
        const titulo = document.createElement("h2");
        const precio = document.createElement("h3");
        const descripcion = document.createElement("p");
        const categoria = document.createElement("p");
        const separador = document.createElement("hr");

        //Enviar a HTML con innerHTML
        imagen.src = productos.image;
        imagen.width = 200;
        titulo.innerHTML = productos.title;
        precio.innerHTML = productos.price;
        descripcion.innerHTML = productos.description;
        categoria.innerHTML = productos.category;

        //Mostrarlos en navegador al agregarlos a su padre
        tienda.appendChild(imagen);
        tienda.appendChild(titulo);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(categoria);
        tienda.appendChild(separador);
    })
}