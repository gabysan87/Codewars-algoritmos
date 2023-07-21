// Convertir una cadena en una matriz

// Escriba una función para dividir una cadena y convertirla en una matriz de palabras.

// Ejemplos (Entrada ==> Salida):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

const stringToArray = (string) => {

return string.split(" ")
}

console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"])

// Interpretacion
// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.