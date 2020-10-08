/*
1.-
Cuál es la ventaja de que JavaScript sea un lenguaje interpretado-compilado?

Cuál es la diferencia entre null y undefined

Explica el concepto de Type coercion

Qué representan los los valores númericos NaN y Infinity?
---------------------------------------------------------------------------------------
2.-
Calcula el valor booleano de las siguientes expresiones lógicas y explica tu respuesta


*/ 

/*
3.-
A- Combinación más grande. Escribe un programada que dado tres dígitos entre 0 y 9
de la combinación más grande que se pueda formar.

*/ 
function maxCombinacion(num1,num2,num3){
    if(num1>=num2 && num1>=num3 && num2>=num3){ 
        console.log(`La combinación más grade es: ${num1}${num2}${num3}`)
      }else if(num1>=num2 && num1>=num3 && num3>=num2){
        console.log(`La combinación más grade es: ${num1}${num3}${num2}`)
      }else if (num2>=num1 && num2>=num3 && num1>=num3){
        console.log(`La combinación más grade es: ${num2}${num1}${num3}`)
      }else if(num2>=num1 && num2>=num3 && num3>=num1){
        console.log(`La combinación más grade es: ${num2}${num3}${num1}`)
      }else if(num3>=num1 && num3>=num2 && num1>=num2){
        console.log(`La combinación más grade es: ${num3}${num1}${num2}`)
      }else if(num3>=num1 && num3>=num2 && num2>=num1){
        console.log(`La combinación más grade es: ${num3}${num2}${num1}`)
      }
}
maxCombinacion(5,9,2)

function combinacion(a, b, c){
  if (a>=b && a>=c){
    if(b>c){
      console.log(`la combinación más grande es: ${a} ${b} ${c}` )
    }else{
      console.log(`la combinación más grande es: ${a} ${c} ${b}` )
    }
  }else if (b>=a && b>=c){
    if(a>c){
      console.log(`la combinación más grande es: ${b} ${a} ${c}` )
    }else{
      console.log(`la combinación más grande es: ${b} ${c} ${a}` )
    }
  }else if (c>=a && c>=b){
    if(a>b){
      console.log(`la combinación más grande es: ${c} ${a} ${b}` )
    }else{
      console.log(`la combinación más grande es: ${c} ${b} ${a}` )
    }
  }
}

combinacion(0, 8, 0)
combinacion(9, 4, 9)

/*
3.-
B- ¿Es un número primo? Escribe un programa que dado cualquier número entero positivo es un número primo.
 */

function esPrimo(n){

  if ( n>= 3){
    if(!n%2=== 0 ||!n%3=== 0){
      console.log("es un número primo")

    }else{
      console.log (" no es un número primo")
    }

  } else{
      console.log (" no es un número primo")
    }
  } 


esPrimo(1)
esPrimo(0)
esPrimo(2)
esPrimo(5)
esPrimo(83)
esPrimo(48)



/*
FizzBuzz , escribe la función con Switch Case*/

for (let i=1; i<=100; i++){
  
  let num = i;

  switch(true){
    case num % 3 ===0 && num % 5 ===0:
      console.log ("FizzBuzz");
      break;
    case num % 3 ===0:
      console.log("Fizz");
      break;
    case num % 5 ===0:
     console.log("Buzz");
      break;
    default:
      console.log(num);  

  }
}
