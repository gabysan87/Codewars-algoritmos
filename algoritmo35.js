// ¿Hay una vocal ahí?
// Dada una serie de números, compruebe si alguno de los números son los códigos de caracteres para las vocales en minúsculas ( a, e, i, o, u).

// Si lo son, cambie el valor de la matriz a una cadena de esa vocal.

// Devuelve la matriz resultante.

function isVow(a) {
    return a.map((num) =>
      /[aeiou]/.test(String.fromCharCode(num)) ? String.fromCharCode(num) : num
    );
   
  }

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
)
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));

//  Interpretacion

//  a.map((num) => ...): Utiliza el método map() para iterar sobre cada elemento num del arreglo a.

// /[aeiou]/.test(...): Realiza una prueba usando una expresión regular para verificar si el carácter obtenido en el paso anterior es una vocal en minúscula.

// El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

// String.fromCharCode(num): Convierte el código de carácter numérico a su representación de cadena. Por ejemplo, si num es igual a 97, String.fromCharCode(97) devolverá la cadena 'a'.


// ? String.fromCharCode(num) : num: Si el carácter es una vocal en minúscula, se devuelve el carácter original (cadena de la vocal); de lo contrario, se devuelve el valor numérico original sin cambios.
