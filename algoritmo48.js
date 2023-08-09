// ¿Puedes encontrar la aguja en el pajar?

// Escriba una función findNeedle()que tome un arraymontón de basura pero que contenga uno"needle"

// Después de que su función encuentre la aguja, debería devolver un mensaje (como una cadena) que dice:

// "found the needle at position "además indexencontró la aguja, así que:

// Ejemplo (Entrada --> Salida)
// Ejemplo (Entrada --> Salida)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Nota: En COBOL, debería devolver "found the needle at position 6"

let haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
let haystack_2 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
let haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3));

// Interpretación
// indexof() para localizar valores en un array
