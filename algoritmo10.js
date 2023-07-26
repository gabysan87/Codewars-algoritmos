// Eliminar duplicados de la lista

// Defina una función que elimine los duplicados de una matriz de números no negativos y los devuelva como resultado.

// El orden de la secuencia tiene que permanecer igual.

const distinct = (a) => {
    return [...new Set(a)];
  }


  console.log(distinct([1]))
  console.log(distinct([1,2]))
  console.log(distinct([1,1,2]))
  
   
// Interpretacion 

// Usando Set(), se creara una instancia de valores únicos, implícitamente al usar esta instancia borrara los duplicados .

// Así que podemos hacer uso de esta instancia y de ahi tendremos que convertir esa instancia en un nuevo array
