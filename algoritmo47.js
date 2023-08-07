// Trimestre del año

// Dado un mes como un número entero del 1 al 12, devuelva a qué trimestre del año pertenece como un número entero.

// Por ejemplo: el mes 2 (febrero), forma parte del primer trimestre; el mes 6 (junio), forma parte del segundo trimestre; y el mes 11 (noviembre), forma parte del cuarto trimestre.

// Restricción:

// 1 <= month <= 12


const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3)
  

//  return Math.floor((month-1)/3)+1

//  return return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
}

console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))

    // Devuelve el máximo entero menor o igual a un número.