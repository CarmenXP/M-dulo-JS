/*
1- ¿Es una cadena vacia?
Escribe una función que indique con un valor booleano si dada una cadena de texto
esta vacia.
*/
function isEmpty(text){
   if(text=== ""){
      return true
   }
   return false
}

let result= console.log (isEmpty("ñññññññ"))

/*
2- El n-ésimo número estrella
Escribe una función que calcule el n-ésimo número estrella
 */


 /*
 3- Mínimo y máximo de un arreglo
 Escribe una función que dado un arreglo de longitud N indique con un objeto, 
 cuál es el número más pequeño y el más grande dentro del arreglo
 */



 /*
 4- Combinación más grande V2
 Escribe una función que dado un número de dos dígitos  (entre 10 y 99)
  indique si dicho número forma la combinación más grande entre dus dos dígitos.
 */
function largestSwap(num){
   if(num>= 10 && num <=99){
     let number= num.toString()
     let num1 = number.charAt(0)
     let num2 = number.charAt(1)
      if(parseInt(num1) > parseInt(num2)){
       console.log(true)
     }else{
       console.log(false)
     }
   }else console.log ("cifra no válida")
 }
 
 largestSwap(16)