// Convierta valores booleanos en cadenas 'Sí' o 'No'.

// Completa el método que toma un valor booleano y devuelve una "Yes"cadena para trueo una "No"cadena para false.

const boolToWord = ( bool ) => {
    //...

    return bool ? "Yes" : "No"
    // return bool => bool ? 'Yes' : 'No';
  }

 console.log(boolToWord(true))
console.log(boolToWord(false)) 

// Interpretacion 
// se utiliza el operador ternario ? para evaluar la condición bool. Si el valor es true, devuelve la cadena "Yes"; de lo contrario, devuelve la cadena "No". 