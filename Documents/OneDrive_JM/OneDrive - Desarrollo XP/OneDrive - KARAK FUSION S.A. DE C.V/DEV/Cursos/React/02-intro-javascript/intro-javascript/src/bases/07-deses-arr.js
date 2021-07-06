/** Ejercicio 1 */
const personajes = ["Goku", "Vegeta", "Trunks"];

const [p1, , p3] = personajes;

console.log(p1, p3);

/** Ejercicio 2 */
const retornaArreglo = () => ["ABC", 123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const funHola = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = funHola("Goku");

console.log(nombre);
setNombre();
