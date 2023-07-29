// ¿Par o impar?

// Tarea:
// Dada una lista de enteros, determina si la suma de sus elementos es par o impar.

// Da tu respuesta como una coincidencia de cadenas "odd"o "even".

// Si la matriz de entrada está vacía, considérela como: [0] (matriz con cero).

function oddOrEven(array) {

let suma = array.reduce((acc,item) => acc + item, 0)
    return suma % 2 == 0 ? "even" : "odd"

    // return array.reduce((a,b) => a+b,0) % 2 ? 'odd' : 'even';
 }

 console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))

// Interpretacion
