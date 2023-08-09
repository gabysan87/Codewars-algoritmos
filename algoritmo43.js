// Cadenas de retorno
// Cree una función que devuelva una declaración de saludo que use una entrada; su programa debería regresar, "Hello, <name> how are you doing today?".

// [Asegúrese de escribir exactamente lo que escribí o es posible que el programa no se ejecute correctamente]

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Ryan"));
console.log(greet("Shingles"));

// Intepretación
// Se usa un template string para poder unir en name con el texto
