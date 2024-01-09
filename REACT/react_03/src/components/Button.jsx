import "./Button.css"

/**
 * Props: Propiedades que se asignan a los componentes para modificar el texto, la información desde la renderización del mismo.
 * Se asigna como parametro dentro de la funcion con el nombre del prop y debe ir entre {} 
 * Se manda a llamar en el bloque de condigo donde se quiere implementar utilizando {}
 */
const Button = ({ label }) => {
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button