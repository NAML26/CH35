const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById('name'); // Cambié de 'name' a 'id'
const $b = document.getElementById('blog'); // Cambié de 'blog' a 'id'
const $l = document.getElementById('location'); // Cambié de 'location' a 'id'

async function displayUser(username) {
  $n.textContent = 'Cargando...'; // Cambié de 'cargando...' a 'Cargando...'
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Cambié de 'n' a '$n'
}

displayUser('stolinski').catch(handleError);