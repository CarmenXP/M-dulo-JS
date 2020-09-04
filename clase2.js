//imrpimir del 0 al 50 con un for

/**for(var i=0;   i <=50;  i++){
    console.log(i)
} 

//imprimiendo los impares
for(var i=0; i<=50; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

var mess= "no"

function foo(mess){
    mess="yes"
}
foo(mess)
console.log(mess) **/


/**var hora = prompt("qué hora tienes?")
var saludo;

if(hora>=1 && hora <12){

    saludo="Buenos días"

}else if (hora>=12 && hora<20){
    saludo= "Buenas tardes ...."

}else if( hora>=20 && hora<=24){ 
    saludo="Buenas noches"
}
else{
    saludo="hora inválida"
}

console.log(saludo) **/

//switch

/**var dia= prompt("ingresa un número para el día de la semana");
var texto;
//console.log(typeof(dia))
//parseInt(dia)
console.log(dia)

switch(parseInt(dia)){
    case 0:
        texto= "lunes"
        break;

    case 1:
        texto = "martes"
        break;
    case 2:
        texto="miércoles"
        break;
    case 3: 
        texto="jueves"
        break;

    case 4: 
        texto="viernes"
        break;

    case 5:
        texto="sábado"
        break;
    case 6: 
        texto="domingo"
        break;

    default:
        texto="no existe ese día"

        
}
console.log (texto) **/

/**var dia = Number(6);
var texto;
console.log(typeof dia)
switch(dia){
    case 0:
        texto = "Lunes"
        break;
    case 1:
        texto = "Martes"
        break;
    case 2:
        texto = "Miércoles"
        break;
    case 3:
        texto = "Jueves"
        break;
    case 4:
        texto = "Viernes"
        break;
    case 5:
        texto = "Sábado"
        break;
    case 6:
        texto = "Domingo"
        break;
    default:
        texto = "No existe ese día"
}
console.log(texto)**/

/**var velocidad =45
var mensaje;

if(velocidad>45){
    mensaje = "eres súper rápido"
} else{
    mensaje= "puedes llegar a tu límite"
} **/
// ternario
/**var velocidad= 46;
var mensaje= velocidad > 45 ? "eres súper rápido" : "puedes llegar a tu límite"

console.log(mensaje)**/
//ciclo for

var materias= ["español", "mate", "inglés"]
var texto= "";
var i;
for(var i=0;   i <=materias.length-1;  i++){
    texto += materias[i] + "<br>";
    console.log(texto)
   
} 



