// ¿Quién va a pagar el muro?

// Don Drumphet vive en un bonito barrio, pero uno de sus vecinos ha empezado a alquilar su casa. Don Drumphet quiere construir un muro entre su casa y la de su vecino, e intenta que la asociación de vecinos se lo pague. Comienza a solicitar a sus vecinos que hagan una petición para que la asociación construya el muro. Desafortunadamente para Don Drumphet, no puede leer muy bien, tiene una capacidad de atención muy limitada y solo puede recordar dos letras de cada uno de los nombres de sus vecinos. Mientras recolecta firmas, insiste en que sus vecinos sigan truncando sus nombres hasta que queden dos letras y finalmente pueda leerlas.

// Su código mostrará el nombre completo del vecino y la versión truncada del nombre como una matriz. Si el número de caracteres en el nombre es menor o igual a dos, devolverá una matriz que contiene solo el nombre tal cual"

const whoIsPaying = (name) => {

return name.length <= 2 ? [name] : [name,name.slice(0,2)]
}


console.log(whoIsPaying("Mexico"));
console.log(whoIsPaying("Melania"))
console.log(whoIsPaying("Melissa"))
console.log(whoIsPaying("Me"))
console.log(whoIsPaying(""))
console.log(whoIsPaying("I"))

// Interpretación
// La función realiza una comprobación en la longitud del nombre dado usando name.length.

// Si la longitud del nombre es menor o igual a 2 caracteres (es un nombre muy corto), se devuelve una lista que contiene solo el nombre dado. Esto se hace usando la notación de array [name], que crea un nuevo arreglo con el nombre como su único elemento.

// Si la longitud del nombre es mayor a 2 caracteres, la función toma los primeros dos caracteres del nombre utilizando name.slice(0, 2) y luego devuelve una lista con el nombre completo y los primeros dos caracteres. Esto se hace usando [name, name.slice(0, 2)], que crea un arreglo con dos elementos: el nombre completo y los primeros dos caracteres del nombre.



