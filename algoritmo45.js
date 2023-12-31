// Eliminación de elementos

// Tome una matriz y elimine cada segundo elemento de la matriz. Mantenga siempre el primer elemento y comience a eliminar con el siguiente elemento.

// Ejemplo:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

// Ninguna de las matrices estará vacía, ¡así que no tienes que preocuparte por eso!

function removeEveryOther(arr) {
  return arr.filter((element, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));


// Interpretación

// se usa el método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada, luego el modulo % con el nro. 2 para eliminar el 2do elemento del array