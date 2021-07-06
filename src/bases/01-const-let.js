// Variables y constantes
const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Ya NO se debe de usar 'var'
if (true) {
  let valorDado = 6;
  console.log(valorDado);

  const nombre = "Peter";
  console.log(nombre);
}

console.log(valorDado);
