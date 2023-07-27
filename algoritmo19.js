// Matriz más matriz
// Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, la suma de todos sus elementos. Agradeceré tu ayuda.

// PS Cada matriz incluye solo números enteros. La salida también es un número.
const arrayPlusArray = (arr1, arr2) => {
  
    return [...arr1, ...arr2].reduce((sum, value) => sum + value) 
    // return arr1.concat(arr2).reduce((a, b) => a + b)
  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])
  )
  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
  console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))
  
//   Interpretacion 
//  Usa el operador spread ... para combinar los elementos de ambos arreglos en uno solo. Por ejemplo, si arr1 es [1, 2, 3] y arr2 es [4, 5, 6], el resultado será un nuevo arreglo [1, 2, 3, 4, 5, 6].

// Luego, utiliza el método reduce en el arreglo combinado. El método reduce se utiliza para reducir un arreglo a un solo valor, en este caso, la suma de todos los elementos.

// Luego toma dos argumentos: sum y value. sum representa el acumulado de la suma hasta el momento y value es el valor actual del arreglo en el que estamos iterando.

// La función simplemente suma value al sum acumulado.