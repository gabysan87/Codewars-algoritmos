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

// Utiliza el método split() en la cadena str, pasando letter como el separador. Esto divide la cadena en un array de subcadenas utilizando la letra letter como separador.

// Luego, calcula la longitud del array resultante.

// Resta 1 a la longitud del array obtenida en el paso anterior. Esto se hace porque cuando se utiliza split(), se crea un array donde el número de elementos será igual al número de ocurrencias de letter más 1.

