// Arreglos en JS

// No se recomienda ocupar actualmente
//const array = new Array(10);

// Actualmente así se deberá de ocupar la declaración de un arreglo
const array = [1, 2, 3, 4];
let array2 = [];

// no se ocupa, ya que modifica el objeto principal
//array2.push(5);

// Se recomienda ocupar operadores spread
array2 = [...array, 5];

// Método map: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const array3 = array2.map(function(numero){
    return numero * 2;
});


console.log(array);
console.log(array2);
console.log(array3);