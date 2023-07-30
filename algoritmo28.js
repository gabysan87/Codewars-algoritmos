// ¡Encuentra la posición!

// Cuando se le proporciona una letra, devuelve su posición en el alfabeto.

// Entrada :: "a"

// Salida :: "Posición del alfabeto: 1"

function position(letter){

   
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let pos;
    for (var i = 0; i < letter.length; i++) {
        pos=abc.indexOf(letter[i].toLowerCase())+1;
        if(pos){
            return (letter[i] + ": " + pos);
        }
    }
}
   


console.log(position("a"))
console.log(position("z"))
console.log(position("e"))

