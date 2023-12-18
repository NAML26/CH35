alert (`Hola, mundo, (desde un doc js, esta alerta se va a ejecutar después de el primer Hola, porque el link se pone hasta abajo del body)`);

const harina = 500;
const leche = 350;
const huevo = 2;
const mantequilla = 20;

const harinaDisponible = 1000;
const lecheDisponible = 1000;
const huevosDisponibles = 3;
const mantequillaDisponible = 15;

if (
  harinaDisponible >= harina &&
  lecheDisponible >= leche &&
  huevosDisponibles >= huevo &&
  mantequillaDisponible >= mantequilla
) {
  console.log("¡Tienes suficientes ingredientes para hacer hotcakes!");
} else {
  console.log(
    "No tienes suficientes ingredientes para hacer hotcakes. Compra lo que te falta."
  );
}