// ¿Es un palíndromo?

// Escriba una función que verifique si una cadena dada (insensible a mayúsculas y minúsculas) es un palíndromo . Un palíndromo es una palabra, número, frase u otra secuencia de símbolos que se lee igual hacia atrás que hacia adelante, como señora o coche de carreras, la fecha y hora 21/12/33 12:21, y la oración: "Un hombre, un plan, un canal – Panamá".

const isPalindrome = (x) => {
//     x = x.replace(/\s/g, '').toLowerCase()
    
// return x === x.split('').reverse().join('')

// return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
  }

  console.log(isPalindrome("a"))
  console.log(isPalindrome("Abba"))
  console.log(isPalindrome("hello"))

//   Interpretacion: 
// x.toLowerCase(): Convierte la cadena x a minúsculas, Esta operación asegura que la comparación de caracteres se realice de manera insensible a mayúsculas y minúsculas..
// split(''): Convierte la cadena en un arreglo de caracteres, donde cada elemento es un carácter de la cadena.
// reverse(): Invierte el orden de los elementos del arreglo.
// join(''): Une los elementos del arreglo en una cadena, sin ningún separador entre ellos. Esto crea el reverso de la cadena original.
// En resumen, este algoritmo verifica si la cadena x es un palíndromo, ignorando las diferencias entre mayúsculas y minúsculas. Si x es un palíndromo, la función devuelve true; de lo contrario, devuelve false

