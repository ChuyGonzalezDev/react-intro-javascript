// Importar un arreglo
// Snippet de Import = imp
//import { heroes } from "./data/heroes";

//Exportación por defecto y individual
//import heroes, { owners } from '../data/heroes';
import heroes from "../data/heroes";

// console.log(heroes);
// console.log(owners);

// Función de arreglo ejemplo 1:
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// Función de arreglo simplificada ejemplo 2:
const getHeroeById2 = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(1));
console.log(getHeroeById2(2));

export const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log("Get by owner:", getHeroeByOwner("Marvel"));
