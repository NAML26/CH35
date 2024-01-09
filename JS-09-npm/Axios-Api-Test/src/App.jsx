import './App.css'
import axios from 'axios' 

function App() {

  //Función para async-await para consumir API

const getUsers = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    console.log(respones.data[1].name);//Output: "ERVIN HOWELL"
  } catch(error){
    console.log("¡Peligro!", error);
  }
}

//Funcion async-await para enviar un usuario
const postUsers = async () => {
  try 
    const url= "https://jsonplaceholder.typicode.com/post";
    const user = {
    userId: 1986,
    title: "Java Fullstack dev",
    body: "Daniel Maldonado"
  } 
}
   const response = await axios.post(url, user);
   console.log(response);
   //Para mostrar solamente la información en la consola
   console.log(response.data);
} catch(error) {
  console.log("Cuidado", error);
}
}
   
   return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
