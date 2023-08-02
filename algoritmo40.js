// Escriba una función que devuelva una cadena en la que el nombre se intercambie con el apellido.

// Ejemplo (Entrada --> Salida)

"john McClane" --> "McClane john"

function nameShuffler(str){
    //Shuffle It

    return str.split(' ').reverse().join(' ')
  }

console.log(nameShuffler('john McClane')) 
console.log(nameShuffler('Mary jeggins'))
console.log(nameShuffler('tom jerry'))