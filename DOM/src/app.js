const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Declarar funcion que genere un numero random tomando un parametro number
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//Crear eventos de click para que al presionar un botón pase algo
botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

//--Boton de reset
botonReset.addEventListener("click", () => {
    document.body.style.background = colorFondo;
});

