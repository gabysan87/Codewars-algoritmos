// Súper Duper Fácil
// Cree una función que devuelva el valor multiplicado por 50 y aumentado por 6. Si el valor ingresado es una cadena, debe devolver "Error".

function problem(x) {
  if (typeof x === "string") {
    return "Error";
  } else {
    return x * 50 + 6;
  }
  // return typeof x === "number" ? x * 50 + 6 : "Error";
}

console.log(problem("hello"));
console.log(problem(1));
console.log(problem(5));
console.log(problem(0), 6);
console.log(problem(1.2));
console.log(problem(3));
console.log(problem("RyanIsCool"));
console.log(problem(-3));
console.log(problem(""));
console.log(problem(0.03));

// Interpretación 
// En el condicional ternario, se verifica si el tipo de x es "number" (es decir, si x es un número) utilizando typeof x === "number".

// Si la condición es verdadera (es decir, si x es un número), se ejecuta la primera parte del condicional ternario, que es x * 50 + 6. Esto significa que se toma el valor de x, se multiplica por 50 y se suma 6 al resultado.

// Si la condición es falsa (es decir, si x no es un número), se ejecuta la segunda parte del condicional ternario, que es "Error". Esto significa que si x no es un número, la función devuelve la cadena "Error".