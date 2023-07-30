// Agregar longitud

// ¿Qué pasa si necesitamos que la longitud de las palabras separadas por un espacio se agregue al final de esa misma palabra y se devuelva como una matriz?

// Su tarea es escribir una función que tome un String y devuelva un Array/list con la longitud de cada palabra agregada a cada elemento.

// Nota: String tendrá al menos un elemento; las palabras siempre estarán separadas por un espacio.

const addLength = (str) => {
   
    return str.split(' ').map((element) => element + " " + element.length)
    // return str.split(" ").map(s => `${s} ${s.length}`)

    }

console.log(addLength('apple ban'))
console.log(addLength("You need to return an array. Did you log to the console instead?"))
 
// Interpretacion
// Primero usamos un .split para convertir de string a array, luego usamos el .map para iterar en cada elemento, al final usamos un template string para poder separar los elementos y arroje la longitud. 
    