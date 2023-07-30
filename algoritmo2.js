// Los números que terminan en ceros son aburridos.

// Pueden ser divertidos en tu mundo, pero no aquí.

// Deshazte de ellos. Solo los finales.


const noBoringZeros = (n) => {

return n.toString().replace(/0+$/,'')
    
  }


  console.log(noBoringZeros(1450))
  console.log(noBoringZeros(960000))
  console.log(noBoringZeros(1050))

  // Interpetacion
  // Se coloca el elemento n con toString(), para poder manipularlo como texto, insertamos el método replace(), que reemplaza esos ceros consecutivos encontrados en la cadena con una cadena vacía, lo que básicamente los elimina del final, dentro de esta se usa una expresión regular /0+$/ para buscar ceros consecutivos al final de la cadena.

