// Contando ovejas...

// Considere una matriz/lista de ovejas donde algunas ovejas pueden faltar en su lugar. Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).

// Por ejemplo,
// La respuesta correcta sería 17.

// Sugerencia: no olvide verificar si hay valores incorrectos como null/undefined

let array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]

const countSheeps = (arrayOfSheep) => {
    // TODO May the force be with you
  return  arrayOfSheep.filter(Boolean).length
  }

  console.log(countSheeps(array1))


