// Dada la serie del 1 al 100, crear una función que imprime Fizz en lugar de números divisibles entre 3 y 
// buzz de los números divisibles entre 5, FizzBuzz si son divisibles entre 3 y 5

//for (let i=1; i <= 100; i++){
//    if( i % 3 ===0 && i % 5 ===0){
//        console.log("FizzBuzz")
//    } else if(i % 3 === 0){
//        console.log("fizz")
//    } else if(i % 5 === 0){
//        console.log("buzz")
//    }else{
//        console.log(i)
//    }
//}

/*
  Calcula el BURP

  Crear una función llamada calcula_burp que recibe como 
  parámetro un número entero positivo y debe regresar
  una cadena de texto que sea BURP con tantas R como 
  el parámetro.

  calcula_burp(5); // "BURRRRRP"
  calcula_burp(10); // "BURRRRRRRRRRP";
*/


//function burp(n){
//    let add = "";
//    for(let i=1; i <=n; i++){
//        add+= "R";
//    }
//    return "BU"+ add + "P"
//}
//
//console.log(burp(3))

/*
Crear una función que sume todos los elementos de un array
 */

 //
 //function sumaArray(arr){
 //    let sum= 0;
 //    for(let i=0; i< arr.length; i++){
 //        sum+= arr[i]
 //    }
 //    return sum
 //}
//
 //console.log(sumaArray([3,6,8,9,1,0]))

 /*
 Crear una función  a la cual al pasarle un array y un número , devuelva true si el elemento pertenece al arra, 
 caso contario devuelve false
  */
 //let arr= [3,6,8,9,1,0]
//
 // function include(arr, element){
 //     for(let i=0; i< arr.length; i++){
 //         if(arr[i] === element){
 //             return true
 //         }
 //         
 //     }
 //     return false     
 // }
//
 // console.log(include(arr, 3))
 /*
  Arreglos:

  [  "a",   "b",    "c",   "d",    "x",    "y"   ]
      0      1       2      3       4       5
  
  longitud de arreglo = 6

  La última posición de un arreglo
  de tamaño N es N - 1

  Los arreglos son un bloque completo de memoria.
*/

function array_sum(panchito) {
  let result = 0;

  for (let i = 0; i < panchito.length; i++) {
    result += panchito[i];
  }

  return result;
}

function array_sum_v2(algo) {
  let result = 0;
  let panchito = [1, 5, 6, 8, 5, 3, 6, 0];

  for (let i = 0; i < panchito.length; i++) {
    result += panchito[i] * algo;
  }

  return result;
}

console.log(array_sum([1, 2, 3, 4, 5, 6]));
console.log(array_sum_v2(10));