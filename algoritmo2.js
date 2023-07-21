// Los números que terminan en ceros son aburridos.

// Pueden ser divertidos en tu mundo, pero no aquí.

// Deshazte de ellos. Solo los finales.


const noBoringZeros = (n) => {

return Number(n.toString().replace(/0+$/,''));
    
  }


  console.log(noBoringZeros(1450))
  console.log(noBoringZeros(960000))
  console.log(noBoringZeros(1050))