// Ordenar números

// Finalice la solución para que clasifique la matriz de números pasada. Si la función pasa en una matriz vacía o un valor nulo/nil, entonces debería devolver una matriz vacía.

// Por ejemplo:

function solution(nums){


    return nums === null ? [] : nums.sort((a, b) => a - b ) 


   }

   console.log(solution([1,2,3,10,5]))
   console.log(solution(null))
   console.log(solution([]))

// Interpretación