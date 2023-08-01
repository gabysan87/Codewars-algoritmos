// Regex cuenta letras minúsculas

// Su tarea es simplemente contar el número total de letras minúsculas en una cadena.


function lowercaseCount(str){
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//       count++;
//     }
//   }
//   return count;
 return (str.match(/[a-z]/g) || []).length
}


console.log(lowercaseCount("abc"))
console.log(lowercaseCount("abcABC123"))
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
console.log(lowercaseCount(""))
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"),)
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"))

// Interpretación
// El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena, se usa la expresión regular para ubicar las letras minusculas y luego usamos .length para contar la cantidad de caracteres 