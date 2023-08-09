// El mensaje secreto de Jenny

// Jenny ha escrito una función que devuelve un saludo a un usuario. Sin embargo, está enamorada de Johnny y le gustaría saludarlo un poco diferente. Agregó un caso especial a su función, pero cometió un error.

// ¿Puedes ayudarla?

function greet(name){
    if(name === "Johnny")

    return "Hello, my love!";
   return "Hello, " + name + "!";
}

console.log(greet("Jim"))
console.log(greet("Jane"))
console.log(greet("Simon"))
console.log(greet("Johnny"))

// Interpretacion 
// en la declaración if, se verifica si el nombre es igual a "Johnny" utilizando name === "Johnny". Si el nombre es exactamente igual a "Johnny", se ejecuta el bloque de código que sigue.
// En el bloque else, se concatena la cadena "Hello, " con el nombre proporcionado y luego con "!" al final.