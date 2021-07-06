// Desestruración
// Asignación desestrarante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Iroman",
};

const { nombre, edad, clave, id = 1 } = persona;

console.info(nombre);
console.info(edad);
console.info(clave);

// Indefinida
console.info(id);

const getUser = ({ nombre, edad, clave, id = 1 }) => {
  //  console.log(id, nombre, edad, clave);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1325,
      lng: -12.4569,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = getUser(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
