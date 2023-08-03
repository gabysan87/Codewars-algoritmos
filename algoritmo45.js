// Eliminación de elementos

// Tome una matriz y elimine cada segundo elemento de la matriz. Mantenga siempre el primer elemento y comience a eliminar con el siguiente elemento.

// Ejemplo:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

// Ninguna de las matrices estará vacía, ¡así que no tienes que preocuparte por eso!

function removeEveryOther(arr){
    //your code here

    return arr.filter((element, index) => index % 2 === 0)

  }

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther([[1, 2]]))
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));