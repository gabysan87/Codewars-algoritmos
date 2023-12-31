// Suma de múltiplos

// Encuentra la suma de todos los múltiplos de n abajo m

// Tenga en cuenta: n y m son números naturales (enteros positivos) m se excluye de los múltiplos*/

const sumMul = (n, m) => {
  const element = [];
  for (let i = n; i < m; i += n) {
    element.push(i);
  }
  return n < m ? element.reduce((acc, item) => acc + item) : "INVALID";
};

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));

// Interpretacion
// se creo el array vacio para guardar el resultado, luego se aplica el bucle for, seguimos con el push agregar todos los numeros al array vacio, luego se ejecuta el operador ternario para comprobar y se utiliza el reduce para sumar
