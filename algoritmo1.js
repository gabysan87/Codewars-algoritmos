// Multiplicación sencilla
// Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.

function simpleMultiplication(number) {
    // your code........

 return number % 2 === 0 ? number * 8 : number * 9

}

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(5))
