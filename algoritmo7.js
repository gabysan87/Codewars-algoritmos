// obtener carácter de valor ASCII

// Escriba una función que tome un número y devuelva el carácter ASCII correspondiente para ese valor.

// Ejemplo:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

const getChar = (c) => {
    // ...
   
    return String.fromCharCode(c)
  }

  console.log(getChar(55))
  console.log(getChar(8))
  console.log(getChar(57))
  console.log(getChar(58))
  console.log(getChar(59))
  console.log(getChar(60))
  console.log(getChar(61))
  console.log(getChar(62))
  console.log(getChar(63))
  console.log(getChar(64))
  console.log(getChar(65))

// Interpretacion 
// El String.fromCharCode()método estático devuelve una cadena creada a partir de la secuencia especificada de unidades de código UTF-16.
// Debido fromCharCode()a que es un método estático de String, siempre lo usa como String.fromCharCode(), en lugar de como un método de un Stringvalor que creó.