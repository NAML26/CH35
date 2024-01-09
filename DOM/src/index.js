/*
Manipulación del DOM
-Leer y traer nodos del arbol del DOM
    document.gerElementById (trae elementos por ID)
    document.getElementsByClassName (trae elementos por Class)
    document.getElementsByTagName (Trae elementos por Etiquetas) 
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo); //Da información del nodo
console.log(titulo.innerText); //Da el texto que vive en el id

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos); //Es una coleccion de arrays
console.log(titulos.length); //Da longitud de elementos de la clase
console.log(typeof titulos); //Da Object porque es una coleccion de arrays

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*Metodos para llamar elementos mediante selectores de CSS
Se usa para procesos más específicos y la sintaxis querySelector
    -document.querySelector("selector"); //#,.;<>
    -document.querySelectorAll(). Selecciona los elementos que se especifiquen.
Siempre van a traer el primer elemento con el selector indicado.
*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryCLass = document.querySelector(".title");
console.log(queryCLass);

//querySelectAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesion de Manipulacion del DOM";
titulo2.style.color = "#F23D3D";

/*
Metodos para crear y agrepar elementos en el ODM. El proceso se divide en dos: Crear nodo y agregar nodo
    -Crear nodos
        * document.createElement("element") --> Crea elementos a partir de etiquetas.
        * document.createTextNode("text") --> Crea texto dentro de las etiquetas.
*/

const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    -Agregar Nodos- mandamos llamar al elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado
    
    parentElement es donde va a vivir el nuevo Nodo

    *parentElement.appendChild(const);
    *parentElement.appemd(const);
    *parentElement.insertBefore(const);
    *parentElement.insertAdjacentElement(const);
Utilizamos mayormente appendChild*/
//Obtengo el elemento padre por tag, class o id
const elementoPadre = document.getElementById("dif");
//Crear texto que vivirá en el nodo1
const textNodo1 = document.createTextNode ("Imagen agregada desde el DOM")
//Inserto el texto en el nodo1
nodo1.appendChild(nodo1);
//Insertar nodo1 en el elemento padre
parentElement.appendChild(textNodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#A62F03"
/*Agregar imagen*/
//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src="https://avatars.githubusercontent.com/u/583231?v=4";
imgNodo.alt = "Octocat-github";
imgNodo.width = "30";

/*Otra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulacion del DOM";
