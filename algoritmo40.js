// Barajador de nombres
 
// Escriba una función que devuelva una cadena en la que el nombre se intercambie con el apellido.

// Ejemplo (Entrada --> Salida)

// "john McClane" --> "McClane john"

function nameShuffler(str){

    return str.split(' ').reverse().join(' ')
  }

console.log(nameShuffler('john McClane')) 
console.log(nameShuffler('Mary jeggins'))
console.log(nameShuffler('tom jerry'))

// Interpretacion 
// Primero usamos el metodo .split para llevar el string a un Array, luego los invertimos con .reverse y al final usamos .join para unir los elementos 