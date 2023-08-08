// Cuerdas invertidas

// Complete la solución para que invierta la cadena que se le pasó.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));
console.log(solution("h"));

// Interpretacion
// El método split() separa un objeto de cadena en un arreglo de cadena al separar la cadena en subcadenas.
// El método reverse() invierte un arreglo. El primer elemento del arreglo se convierte en el último y el último se convierte en el primero.
// El método join() une todos los elementos de un arreglo en una cadena.
