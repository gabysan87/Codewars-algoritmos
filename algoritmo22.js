// Quitar el primer y último carácter

// Es bastante sencillo. Su objetivo es crear una función que elimine el primer y el último carácter de una cadena. Se le da un parámetro, la cadena original. No tiene que preocuparse por cadenas con menos de dos caracteres.

function removeChar(str) {

  return str.slice(1, -1);
}

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ooopsss"));

//    Interpretación
// El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
