// Depuración de sintaxis if/else
// Mientras creaba un juego, su compañero, Greg, decidió crear una función para verificar si el usuario aún está vivo llamada checkAlive// . Desafortunadamente, Greg cometió algunos errores al crear la función.CheckAlivecheck_alive

// checkAlive// debería devolver verdadero si la salud del jugador es mayor que 0 CheckAliveo check_alivefalso si es 0 o menor.

// La función recibe un parámetro healthque siempre será un número entero entre -10 y 10.

function checkAlive (health) {
    if (health > 0) {
      return true
    } else  {
      return false
    }
  }

  console.log(checkAlive(5))
  console.log(checkAlive(0))

  // Interpretación
  // Usamos un bucle para declarar la condicion si el elemento es mayor que 0 devuelve un booleano true sino devuelve false