let activo = true;

let mensaje = activo ? "Activo" : "Inactivo";

console.log(mensaje);

activo = false;

let mensajeInactivo = !activo && "Inactivo";

console.log(mensajeInactivo);
