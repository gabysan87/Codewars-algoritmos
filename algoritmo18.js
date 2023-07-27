// Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.

// Ejemplo : n=5-->[5,4,3,2,1]

const reverseSeq = n => {
  
    // return Array.from({ length: n }, (_, i) => n - i)
    return [...Array(n)].map((_, i) => n - i);


  }

  console.log(reverseSeq(5))
  
//   Interpretacion
// Se utiliza la función Array.from() para crear un nuevo array. Esta función permite crear un array a partir de un objeto iterable 

// El objeto que se pasa como primer argumento a Array.from() es { length: n }, lo que significa que queremos crear un array con una longitud igual a n.

// Luego, se utiliza la función de flecha ((_, i) => n - i) como el segundo argumento de Array.from(). Esta función se ejecuta para cada elemento del array recién creado.

// El parámetro i representa el índice del elemento actual, pero como no nos interesa su valor, se utiliza un guion bajo _ para indicar que no lo vamos a usar.

// Dentro de la función de flecha, se realiza la operación n - i, que resta el valor del índice actual i a n. Esto genera una secuencia de números en orden descendente, comenzando desde n y disminuyendo hasta 1.

// Al final, la función reverseSeq devuelve el array que contiene la secuencia de números en orden descendente.