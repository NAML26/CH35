//Creando función para determinar si un número es par o impar
//Necesitamos exportar esta funcion para que pueda ser utilizada en cualquier parte del proyecto llamando al script. Para eso agregamos palabras recervadas `export default`
//Nota no puede ser función flecha, sino función por declaración, por commonJS
export default function determinarParImpar(numero) {
    (numero % 2 === 0) ? console.log(`El número ${numero} es par`) : console.log(`El número ${numero} es impar`);
};

