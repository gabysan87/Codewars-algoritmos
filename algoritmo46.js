// Entrenamiento JS #18: Métodos del objeto String--concat() split() y su buen amigo join()

// Implemente una función que acepte 2 argumentos: string y separator.

// El algoritmo esperado: dividir stringen palabras por espacios, dividir cada palabra en caracteres separados y unirlos nuevamente con el especificado separator, unir todas las "palabras" resultantes nuevamente en una oración con espacios.

// Por ejemplo:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, separator) {

    return string.split(" ").map(word=>word.split("").join(separator)).join(" ")
  }

 console.log(splitAndMerge("My name is John"," "))
 console.log(splitAndMerge("My name is John","-"));
 console.log(splitAndMerge("Hello World!","."));
 console.log(splitAndMerge("Hello World!",","))

// Interpretacion
// Se utiliza un primer split para pasar el string a un Array, el map se itera alli los elementos los separa nuevamente con el split luego los une con separador con el join, al final lo convierto de array a string.