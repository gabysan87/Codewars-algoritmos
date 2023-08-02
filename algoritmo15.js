// ¿Qué hay entre?

// Complete la función que toma dos enteros ( a, b, where a < b) y devuelva una matriz de todos los enteros entre los parámetros de entrada, incluidos ellos.

// Por ejemplo:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) => {
  const nuevoarray = [];
  for (let i = a; i <= b; i++) {
    nuevoarray.push(i);
  }
  return nuevoarray;
};

console.log(between(1, 4));
console.log(between(-2, 2));

//   Interpretacion:
// Se crea un bucle, se asigna una constante vacia para que guarde el resultado, y luego se usa el método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
