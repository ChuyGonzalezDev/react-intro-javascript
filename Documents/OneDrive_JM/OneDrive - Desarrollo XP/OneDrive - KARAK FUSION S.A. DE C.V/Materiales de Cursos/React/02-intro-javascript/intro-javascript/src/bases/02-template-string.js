// Template String.
const nombre = "Jesús";
const apellido = "González";

const nombreCompleto = nombre + " " + apellido;
const nombreCompletoTemplate = `${nombre} ${apellido}
${1 + 1}
`;

console.log("Nombre completo: ", nombreCompleto);

console.log(`Nombre completo con template string: ${nombreCompletoTemplate}`);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
