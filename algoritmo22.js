
// Quitar el primer y último carácter

// Es bastante sencillo. Su objetivo es crear una función que elimine el primer y el último carácter de una cadena. Se le da un parámetro, la cadena original. No tiene que preocuparse por cadenas con menos de dos caracteres.

function removeChar(str){
    //You got this!
   return str.slice(1,-1)
   }

   console.log(removeChar('eloquent'))

   
   assert.strictEqual(removeChar('country'), 'ountr');
   assert.strictEqual(removeChar('person'), 'erso');
   assert.strictEqual(removeChar('place'), 'lac');
   assert.strictEqual(removeChar('ooopsss'), 'oopss');

