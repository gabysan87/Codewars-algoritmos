// Suma de múltiplos: Dado un array de números y un número multiplicador, devuelve la suma de todos los números que sean múltiplos de ese multiplicador.
// Entrada:

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multiplicador = 3;


// const multiplos = (arr, multiplicador) => 
// // Salida: 18


// function sum(nums) {
//     if (nums < 1) {
//       return -1;
//     } else {
//     //   const [...nums] = nums
//       return nums
//     }
//   }
  
//   console.log(sum(10))

let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
  };
  console.log(cuentaAtras(5))