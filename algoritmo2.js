// Los números que terminan en ceros son aburridos.

// Pueden ser divertidos en tu mundo, pero no aquí.

// Deshazte de ellos. Solo los finales.


const noBoringZeros = (n) => {

//  return n = (n)/1000;

return n.slice(1)
    
  }


  console.log(noBoringZeros(1450))
  console.log(noBoringZeros(960000))
  console.log(noBoringZeros(1050))