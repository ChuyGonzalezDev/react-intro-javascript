// Objetos literales.

const persona = {
  nombre: "Tony",
  apellido: "Strark",
  edad: 45,
  direccion: {
    calle: "Calle 10",
    ciudad: "New York",
    zipCode: 55321231,
    lat: 14.3232,
    lng: 34.9133,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.table({
  persona2,
});
