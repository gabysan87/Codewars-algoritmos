// Capitalización y Mutabilidad

// Se suponía que su compañero de trabajo debía escribir una función de ayuda simple para poner en mayúscula una cadena (que contiene una sola palabra) antes de irse de vacaciones.

// Desafortunadamente, ahora se han ido y el código que te dieron no funciona. Corrija la función de ayuda que escribieron para que funcione según lo previsto (es decir, haga que el primer carácter en la cadena "palabra" esté en mayúscula).

// No se preocupe por los números, caracteres especiales o tipos que no son cadenas que se pasan a la función. La longitud de la cadena será de 1 carácter a 10 caracteres, pero nunca estará vacía.


function capitalizeWord(word) {
  
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  console.log(capitalizeWord('word'))
console.log(capitalizeWord('i'))
console.log(capitalizeWord('glasswear'))

// Interpretacion
// 1- Obtenemos el primer carácter del string
// 2- Se convierte la primera letra en mayúscula
// 3- Obten el residuo del string;
// 4- Concatena la primera letra en mayúscula con el residuo del string y retorna el resultado