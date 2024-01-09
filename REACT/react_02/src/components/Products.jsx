import './Products.css'

/* COmenté esta linea de código porque fue la que usé para los props estructurados
const Products = (props) => {
    */

const Products = ({img, name, description, price}) => {
    
    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información

        {/*<div className="cards">
            <div className="products--card">
                <img src= "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt= 'sneakers'/>
                <h3>Descripcion</h3>
                <p>Nombre</p>
                <h4>$1895</h4>
    </div>*/}
    

        {/* Props estructurados. Puedo asignar diferentes propiedades a un div, sin tener que generar muchos props, solamente usando la palabra reserada 'props' como parámtero de la función 
        * Quiero modificar varias propiedades, puedo mandar llamar las props dentro de cada elemento, como si fueran métodos. */}
        {/*<div className="cards">
            <div className="products--card">
                <img src= {props.img} alt= 'sneakers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
    </div>*/}

    {/*Props desestructurados
        Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del objeto. 
        No utilizamos "props" como parametro de la funcion si que asignamos parametros a cada elemento, y los llamamos en dicho elemento.
        Los props desestructuradps viven como parámetros, pero entre {} y se les asigna un nombre específico. 
    */}
        <div className="cards">
            <div className="products--card">
                <img src= {img} alt= 'sneakers'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>
    )
}

export default Products