import './App.css'
import Navbar from "./components/Navbar.jsx"
import Main from './components/Main.jsx'
import Button from './components/Button.jsx'
import Products from './components/Products.jsx'
import Card from "./components/Card.jsx"
import List from "./components/List.jsx"

function App() {
  const imgFashion ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const imgCamel ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
     <Navbar />
      <Main />
      <Button label="Traer informacion"/>
      <Button label="Enviar información"/>
      <Products 
        img={imgFashion}
        name="Fashion"
        description="Tennis Fitness Running Purple"
        price="$1958"
      />
      <Products
        img={imgDark}
        name="Dark"
        description="Tennis Dark Running"
        price="$2296"
      />
      <Products
      img={imgCamel}
      name="Camel"
      description="Casual Tennis"
      price="$3431"
      />

      {/*Aqui erá el componente MUI y MJoy */}
    <Card />
    <List />
</>
  )
}

export default App
