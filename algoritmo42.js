// Devolver Negativo

// En esta sencilla tarea se te da un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya es negativo?

// Ejemplos
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
  return -Math.abs(num);

  // return num < 0 ? num : -num;
}

console.log(makeNegative(42));

//   Interpretación
//   La función Math.abs() retorna el valor absoluto de un número
