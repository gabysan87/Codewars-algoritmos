// Desafío de código All Star #18
// Cree una función que acepte una cadena y un solo carácter, y devuelva un número entero de la cantidad de veces que el segundo argumento se encuentra en el primero.

// Si no se pueden encontrar ocurrencias, se debe devolver un recuento de 0.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0


    const strCount = (str, letter) => {

        return str.split(letter).length - 1
        // let count = 0;
        // for (let i = 0; i < str.length; i++) {
        //     if (str.charAt(i) === letter) {
        //     count++;
        //     }
        // }return count;
       }


console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('',      'z'))

// Interpretacion:

// str.split(letter): En esta parte, la cadena str se divide en un arreglo de subcadenas utilizando el carácter letter como separador. Esto significa que cada vez que aparece el carácter letter en la cadena str, se crea una nueva subcadena en el arreglo. El carácter letter se elimina del arreglo resultante.

// .length - 1: Después de dividir la cadena en un arreglo de subcadenas, el algoritmo calcula la longitud del arreglo y le resta 1. Esto se hace porque al dividir la cadena, el arreglo resultante tendrá un elemento más que la cantidad de veces que aparece el carácter letter en la cadena original. Por ejemplo, si letter aparece 3 veces en str, habrá 4 elementos en el arreglo resultante: el número de ocurrencias más 1.

// return str.split(letter).length - 1: La función devuelve la cantidad de veces que aparece el carácter letter en la cadena str, es decir, la longitud del arreglo resultante menos 1.

// En resumen, este algoritmo cuenta cuántas veces aparece un carácter específico (letter) en una cadena (str) utilizando el método split(). La función devuelve la cantidad de ocurrencias del carácter letter en la cadena. Es importante mencionar que esta implementación solo cuenta las ocurrencias exactas del carácter y no considera ocurrencias superpuestas. Por ejemplo, si letter es "ab" y str es "abab", el resultado será 1 en lugar de 2.