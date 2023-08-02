
// Súper Duper Fácil
// Cree una función que devuelva el valor multiplicado por 50 y aumentado por 6. Si el valor ingresado es una cadena, debe devolver "Error".

function problem(x){
    if(typeof (x) === "string")  {
        return "Error"
        }else { 
            return x * 50 + 6
        }
        // retunr typeof x === "number" ? x * 50 + 6 : "Error";
    } 
  

  console.log(problem("hello"));
  console.log(problem(1));
  console.log(problem(5));
  console.log(problem(0), 6);
  console.log(problem(1.2));
  console.log(problem(3))
  console.log(problem("RyanIsCool"))
  console.log(problem(-3));
  console.log(problem(""));
  console.log(problem(0.03));