
// ¡Manténgase hidratado!

// A Nathan le encanta andar en bicicleta.

// Como Nathan sabe que es importante mantenerse hidratado, bebe 0,5 litros de agua por hora de ciclismo.

// Te dan el tiempo en horas y necesitas devolver el número de litros que beberá Nathan, redondeado al valor más pequeño.

// Por ejemplo:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    
    return Math.floor(time * 0.50)
    
  }

console.log(litres(2));
console.log(litres(1.4))
console.log(litres(12.3))
console.log(litres(0.82))
console.log(litres(11.8))
console.log(litres(1787))
console.log(litres(0))

// Interpretación 
// uso la funcion Math.floor que devuelve el valor entero redondeado más bajo de la variable x, luego multiplicamos el tiempo por 0.50.