// binario falso
// Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.

// Nota: la entrada nunca será una cadena vacía

function fakeBin(x){
    return x.split('').map(d => d < 5 ? '0' : '1').join('');
    }

    console.log(fakeBin('45385593107843568'))
    console.log(fakeBin('509321967506747'))
    console.log(fakeBin('366058562030849490134388085'))

    // Interpretación
    // Este código utiliza el método split('') para convertir la cadena en un array de caracteres, luego .map itera sobre cada dígito y reemplaza los dígitos menores que 5 con '0' y los dígitos 5 y mayores con '1'. Finalmente, join('') convierte el array resultante de nuevo en una cadena.