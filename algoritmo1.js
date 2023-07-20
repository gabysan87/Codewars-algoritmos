// Multiplicación sencilla
// Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.

function simpleMultiplication(number) {
    

 return number % 2 === 0 ? number * 8 : number * 9

}

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(5))

// Interpretacion:
// Primero le establecemos % 2 para buscar el parent, luego use el operador ternario para indicarle la condicion si el nro. se multiplica por 8 es parent, y le 2da condicion se multiplica por 9 para el caso contrario.