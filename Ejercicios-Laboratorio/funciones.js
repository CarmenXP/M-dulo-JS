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

console.log (isEmpty("ñññññññ"));
console.log(isEmpty(""));
console.log(isEmpty("  "));

/*
2- El n-ésimo número estrella
Escribe una función que calcule el n-ésimo número estrella
 */


 /*
 3- Mínimo y máximo de un arreglo
 Escribe una función que dado un arreglo de longitud N indique con un objeto, 
 cuál es el número más pequeño y el más grande dentro del arreglo

 */
let arr = [1, 0, 8, 2, 5];

function max(arr){
  if(arr.length===1) return "Valor máximo: " + arr[0]
  if(arr[0] > arr[1]){
    arr[1]=arr[0]
    arr.shift()
  }else{
    
    arr.shift()
  }
  return max(arr)
}
console.log(max(arr))

let array = [1, 0, 8, 2, 5];
function min(array){
   if(array.length===1) return "Valor mínimo: " + array[0]
   if(array[1]>array[0]){
     array[1] = array[0]
     array.shift()
   } else{
     array.shift()
   }
   return min(array)
 }
 console.log(min(array))


/*
 4- Combinación más grande V2
 Escribe una función que dado un número de dos dígitos  (entre 10 y 99)
  indique si dicho número forma la combinación más grande entre sus dos dígitos.
 */
function largestSwap(num){
   if(num>= 10 && num <=99) {
      let number= num.toString()
      let num1 = number.charAt(0)
      let num2 = number.charAt(1)
      if(parseInt(num1) > parseInt(num2)){
         return true
      } return false
   } else console.log("cifra no válida")
}
 
console.log(largestSwap(43))
console.log(largestSwap(25))
console.log(largestSwap(250))

 /*
 5- ¿Cuáles vocales tiene el texto? 
Escribe una función que dado un texto indique cuáles son las vocales que contiene (sin repetir y no es necesario que estén ordenadas).
 */

let vowels= ["a", "e", "i", "o", "u"]

function getVowels(word){
  let result = [];
  let wordDiv= word.split("")
  for(let i=0; i<wordDiv.length; i++){
    for (let j=0; j< vowels.length; j++){
      if(wordDiv[i]=== vowels[j]){
      result.push(wordDiv[i]) 
    } 

    } 
    
  }
  return result
}

console.log(getVowels("murcielago"))

/*
6- ¿Es un subconjunto?
Un conjunto es una colección de elementos que no se repiten y que no tiene un orden en particular.
Un subconjunto es un conjunto que contiene elementos del conjunto original y todos los elementos del subconjunto DEBEN PERTENECER al conjunto
original. El conjunto vacío es subconjunto de cualquier conjunto. Escribe una función que dado dos arreglos indique si uno es subconjunto del
otro.
*/

function isSubset( array, arr){
   for (let i= 0; i<array.length; i++){
     for(let j= 0; j<arr.length; j++){
       if(array[i]=== arr[j]){
       return true
     }
   }
 }
 return false
 }
 console.log(isSubset([2,3,4,9,1,5] , [3, 5]))