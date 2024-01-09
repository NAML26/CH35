/*
 Para manipular la info de un usuario, necesito crear un perfil mediante un objeto de javascript
*/

const user = {
    username:'Daniel',
    age: 37,
    email: "daniel@gmail.com",
    favFilms: ['Interestellar', "se7en",'Mindhunters', 'Mean Girls','Cars']
}

//Crear una funcion que me permita ingresar el objeto del perfil en el nodo padre.

const createUser => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent=user.email;
    /*Mostrando elementos de lista en forma de lista
    Para mostrar el array en forma de lista utilizaremos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista.
    */
   const ul = document.byElementById("favFilms");
   user.favFilms.forEach(film => {
    const li= document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);
   });



    //Mostrando elementos de lista en forma de fila
    document.getElementById("favFilms").textContent=.user.favFilms;
}
//Invocando la funcion
createUser(user);

/* Eventos para actualizar el username mediante el input y el boton
*/

const inputName = document.getElementById("name")
const profileBtn = document.ge

