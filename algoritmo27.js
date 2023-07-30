// Problema de tubería de Lario y Muigi

// Asunto
// Parece que un plomero matón y su hermano han estado corriendo y dañando tus escenarios nuevamente.

// La pipesconexión de las etapas de su nivel debe arreglarse antes de que reciba más quejas.

// La lista de tuberías es correcta cuando cada uno pipedespués del primer índice es mayor (+1) que el anterior y no hay duplicados.

// Tarea
// Dada la lista de numbers, devuelva una lista fija para que los valores aumenten en 1 para cada índice desde el valor mínimo hasta el valor máximo (ambos incluidos).

// Ejemplo
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    const min = Math.min(...numbers);
    const max = Math.max(...numbers); 
    const newList = [];
    for (let i = min; i <= max; i++) {
        newList.push(i + 0);
    }
    return newList;

    // return  Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
  
  }

  console.log(pipeFix([1,2,3,5,6,8,9]))
  console.log([1,2,3,12])
  console.log(pipeFix([6,9]))
  console.log(pipeFix([-1,4]))
  console.log(pipeFix([1,2,3]))

//   Interpretacion