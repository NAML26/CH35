const container = document.getElementById("#container-div");
const button = document.querySelector("#card-btn");
//Agregar estilos al container para visibilidad
container.style.visibility = "visible";

//Manejar eventos para ocultar el container desde el boton

button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
})

