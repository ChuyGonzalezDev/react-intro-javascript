// Promesas

import { getHeroeById } from "./bases/08-imp-exp";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se localizo el héroe");
      }
    }, 2000);
  });
};

// promesa
//   .then((heroe) => {
//     console.log("Heroe: ", heroe);
//   })
//   .catch((err) => console.warn(err));

// El console debido a que es una función, imprimirá lo que se le pase
// como primer parametro, así ya no es necesario declaralos.
getHeroeByIdAsync(1).then(console.log).catch(console.warn);
