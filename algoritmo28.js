// ¡Encuentra la posición!

// Cuando se le proporciona una letra, devuelve su posición en el alfabeto.

// Entrada :: "a"

// Salida :: "Posición del alfabeto: 1"

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

console.log(position("a"));
console.log(position("z"));
console.log(position("e"));

// Interpretación
// El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado, se incluye el valor -96 para poder ubicar la posicion del abecedario.