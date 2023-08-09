// Ordenar números

// Finalice la solución para que clasifique la matriz de números pasada. Si la función pasa en una matriz vacía o un valor nulo/nil, entonces debería devolver una matriz vacía.


function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));

// Interpretación
// la función solution(nums) se utiliza para ordenar un arreglo de números en orden ascendente. Si se pasa null como argumento, la función devuelve un arreglo vacío. Si se pasa un arreglo de números, la función ordena los números en orden ascendente utilizando el método sort() con una función de comparación.