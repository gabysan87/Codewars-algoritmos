// Convertir número a matriz invertida de dígitos

// Dado un número aleatorio no negativo, debe devolver los dígitos de este número dentro de una matriz en orden inverso.

// Ejemplo (Entrada => Salida):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
    return Array.from(String(n)).reverse().map(Number)
  }

console.log(digitize(35231))
console.log(digitize(0))

// Interpretación
// Uso el Array.from() para convertir string a un array luego el reverse para invertir al final uso .map para iterar y pasar el array a numeros.