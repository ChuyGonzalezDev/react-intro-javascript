//Funciones en JS

// Funciones de este tipo no se recomiendan
function funcionNoRecomendada(nombre) {
  return `Hola. ${nombre}`;
}

console.log(funcionNoRecomendada("Función no recomendada"));

const funcionRecomendada = function (nombre) {
  return `Hola, ${nombre}`;
};

console.log(funcionRecomendada("Función recomendada"));

// Funciones de flecha, son más recomendables
const saludarFlecha = (nombre) => {
  return `Hola. ${nombre}`;
};

console.log(saludarFlecha("Goku Flecha"));

// Funcion de flecha simplificada.
const saludarFlecha2 = (nombre) => `Hola, ${nombre}`;

console.log(saludarFlecha2("Vegeta"));

const getUser = () => ({
  uid: "ABC123",
  username: "testuser",
});

const user = getUser();

console.log(user);

// Ejercicio

const getUsuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Jesus");
console.log(usuarioActivo);
