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
        console.log(`La combinación más grade es ${num1}${num2}${num3}`)
      }else if(num1>=num2 && num1>=num3 && num3>=num2){
        console.log(`La combinación más grade es ${num1}${num3}${num2}`)
      }else if (num2>=num1 && num2>=num3 && num1>=num3){
        console.log(`La combinación más grade es ${num2}${num1}${num3}`)
      }else if(num2>=num1 && num2>=num3 && num3>=num1){
        console.log(`La combinación más grade es ${num2}${num3}${num1}`)
      }else if(num3>=num1 && num3>=num2 && num1>=num2){
        console.log(`La combinación más grade es ${num3}${num1}${num2}`)
      }else if(num3>=num1 && num3>=num2 && num2>=num1){
        console.log(`La combinación más grade es ${num3}${num2}${num1}`)
      }
}
maxCombinacion(5,9,2)

/*
3.-
B- ¿Es un número primo? Escribe un programa que dado cualquier número entero positivo es un número primo.
 */





