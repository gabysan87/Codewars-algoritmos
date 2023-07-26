// eliminador de vocales

// Cree una función llamada shortcutpara eliminar las vocales minúsculas a ( , e, i, o, u) en una cadena determinada.

// Ejemplos

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string) {

    return string.replace(/[aeiou]+/g, "");
  }

  console.log(shortcut('hello'))
  console.log(shortcut('how are you today?'))
  console.log(shortcut('complain', 'cmpln'))
  console.log(shortcut('never', 'nvr'))


    // Interpretacion
    // Funcion llamada shortcut que aceptará una cadena ( string) como argumento.
    // El objetivo de esta función es eliminar todas las vocales en minúsculas de una cadena y devolver la cadena sin vocales.

    // Usamos una combinación de expresiones regulares y el replace()método para escanear todos los caracteres en una cadena. Si el carácter es una vocal, se elimina.