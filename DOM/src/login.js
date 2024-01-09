const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//Regex= expresiones regulares, determinan patrones que se tienene que cumplir
const emailREGEX= /^[\w.+\-]+@gmail\.com$/ ;

//Deshabilitar el boton
submitButton.disable = true;

/**
 * Evento para input, el cual evalaurá el patron de expresion regular y en el caso de cumplir con el patron habilitará el boton y podremos ser redirigidos a la pagina index.html
 * -Se obtiene el valor actual del campo email (input) usando e.target.value y se almacena en una variable (text)
 * -Se evalúa la REGEX 
 */

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if(emailREGEX.test(text)) == true {
        submitButton.disable = false;
    }
})
