/*
  Paradigma:

  Es las herramientas que proporciona
  el lenguaje de programación para resolver un problema.


  Imperativo:

  Aquel lenguaje que las instrucciones son explicitas
  y se ejecutan de manera secuencial.

  Ejemplos: JavaScript, Java, C, C#, C++, Rust

  Declarativo:

  Aquel lenguaje que no es explicito como
  realiza las operaciones.

  Ejemplos: SQL, Prolog


  Programación Orientada a Objetos es Imperativo
  Programación Funcional es Declarativo


  Programación Funcional

  Es la forma de organizar/estructura un programa utilizando funciones.

  Ejemplos: "JavaScript", Haskell, "Scala", Elixir (Erlang)
*/
/*
function suma(a, b) {
    return a + b;
  }
  
  console.log(suma(1, 2));
  
  /* 
    Funciones puras 
  
    Son aquella que dada la misma entrada, siempre da la misma salida.
  */
  function potencia(a, n) {
    return a ** n;
  }
  
  // Función NO pura
  function random_between(n) {
    return Math.floor(Math.random() * n);
  }
  
  console.log(random_between(10));
  
  /*
    Funciones de Orden Superior (High Order Functions)
  
    Son funciones que reciben funciones y pueden regresar funciones.
  */
  
  const arreglo = [1, 2, 3, 4, 5];
  
  /*
  Versión Imperativa:
  
  function convertir_arreglo(arreglo) {
    const nuevo_arreglo = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      nuevo_arreglo.push(arreglo[i] * 1000);
    }
  }
  
  console.log(convertir_arreglo(arreglo));
  */
  
  // Versión Declarativa:
  const nuevo_arreglo1 = arreglo.map(function (elemento) {
    return elemento * 1000;
  });
  
  // ---------------------------------------------------------------
  
  // Problema: Buscar un elemento dentro de un arreglo
  const array = [1, 2, 3, 4];
  
  // Versión Imperativa
  function buscar_elemento(elemento, array) {
    for (let f = 0; f < array.length; f++) {
      if (elemento === array[f]) {
        return true;
      }
    }
  
    return false;
  }
  
  console.log(buscar_elemento(2, array));
  
  // Versión declarativa
  console.log(array.includes(2));
  
  // ---------------------------------------------------------------
  
  // Problema: Una función que me ayude a filtrar los elementos
  // de un arreglo de acuerdo a un criterio.
  
  // Versión Imperativa
  function filtrar_arreglo(arreglo, criterio) {
    const elementos_filtrados = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (criterio(arreglo[i])) {
        elementos_filtrados.push(arreglo[i]);
      }
    }
  
    return elementos_filtrados;
  }
  
  const nuevo_arreglo2 = filtrar_arreglo(
    [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5],
    function (elemento) {
      return elemento > 0;
    }
  );
  
  console.log("resultado" + nuevo_arreglo2);
  
  // Versión declarativa
  const nuevo_arreglo3 = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5].filter(function (
    elemento
  ) {
    return elemento > 0;
  });
  
  console.log(nuevo_arreglo3);
  
  // ---------------------------------------------------------------
  
  // Problema: Función que sume todos los elementos del arreglo.
  
  // Versión Imperativa:
  function sumar_arreglo(array) {
    let result = 0;
    for (let a = 0; a < array.length; a++) {
      result += array[a];
    }
    return result;
  }
  
  console.log(sumar_arreglo([1, 2, 3, 4, 5]));
  
  // Versión declarativa:
  const suma_array = [1, 2, 3, 4, 5].reduce(function (acumulador, elemento) {
    return acumulador + elemento;
  }, 0);
  
  console.log(suma_array);
  
  // Ejemplo: Dados varios tweets, buscar el hash tag en trending topic.
  
  const tweets = [
    "Qué pex con #ladyTacosDeCanasta ?",
    "#LordPena es pvto",
    "#QuedateEnCasa perro",
    "#NoEraPenal nos robaron",
    "#FuerzaMexico 19 Septiembre",
    "#SiSePuede mexico",
    "Día 9000 #NoEraPenal me madreo al Robben",
    "#ElQuintoPartido nunca se hace",
    "#NoEraPenal otra vez"
  ];
  
  /*
  let resultado = tweets.map(function (tweet) {
    return tweet.split(" ");
  });
  
  resultado = resultado.reduce(function (acumulador, arreglo_palabras) {
    return [...acumulador, ...arreglo_palabras];
  }, []);
  
  resultado = resultado.reduce(function (acumulador, palabra) {
    if (palabra.startsWith("#")) {
      // Es un hashtag
      const new_hashtag = palabra.toUpperCase();
  
      if (acumulador[new_hashtag]) {
        acumulador[new_hashtag]++;
      } else {
        acumulador[new_hashtag] = 1;
      }
  
      return acumulador;
    } else {
      return acumulador;
    }
  }, {});
  */
  
  // Method chain
  let resultado = tweets
    .map(function (tweet) {
      return tweet.split(" ");
    })
    .reduce(function (acumulador, arreglo_palabras) {
      return [...acumulador, ...arreglo_palabras];
    }, [])
    .reduce(function (acumulador, palabra) {
      if (palabra.startsWith("#")) {
        // Es un hashtag
        const new_hashtag = palabra.toUpperCase();
  
        if (acumulador[new_hashtag]) {
          acumulador[new_hashtag]++;
        } else {
          acumulador[new_hashtag] = 1;
        }
  
        return acumulador;
      } else {
        return acumulador;
      }
    }, {});
  
  console.log(resultado); 

  

  //Programación funcional

  /*
  Call Stack

  Es una pila que contiene el historial
  de las funciones que se van ejecutando
  durante el código.
*/

function recursiva() {
  recursiva();
}

/* 
  Call Stack (Tiene un límite de tamaño)

ERROR: Stack Overflow
recursiva()
.
.
.
recursiva()
recursiva()
recursiva()
recursiva()
recursiva()
--------------------------------------
*/

// Stack Overflow
//recursiva();

function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("Ejecutando f3");
}

//f1();

/* 
  Call Stack (Tiene un límite de tamaño)

log()
f3()
f2()
f1()
--------------------------------------
*/

// Ejercicio: Crear una función que calcule el
// factorial de un número recursivamente.

// n! = n * (n-1) * (n-2) * (n-3) * ... * 1
// 3! = 3 * 2 * 1

function factorial_imperativo(n) {
  var total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

//                               vvv Default Functions Params
function factorial_recursivo(n, total = 1) {
  if (n <= 1) {
    return total;
  } else {
    total *= n;
    return factorial_recursivo(n - 1, total);
  }
}

function factorial_recursivo_mejorado(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial_recursivo_mejorado(n - 1);
  }
}

// Por 1 punto: ¿ Cómo utilizar "memoization" ?

console.log(factorial_recursivo(5));
console.log(factorial_recursivo_mejorado(5));

console.log(factorial_imperativo(5));

// Ejercicio: Crear una función que calcule fibonacci

// fibo(1) = 1
// fibo(2) = 1
// fibo(n) = fibo(n-1) + fibo(n-2)

// 1 1 2 3 5 8 13 21 34 55 89 ...
// fibo(10) = 55

// Por 1 punto: Hacer la versión imperativa de fibonacci
function fibo_imperativo(num) {
  // num = 1;
  let res_01;
  for (let i = 0; i <= num; i++) {}

  return res_01;
}

console.log("fibo imperativo", fibo_imperativo(10));

function fibo_recursivo(num, acc = [1, 1, 0]) {
  if (acc[0] === num) return acc.reverse();
  acc.unshift(acc[0] + acc[1]);
  return fibo_recursivo(num, acc);
}

console.log(fibo_recursivo(1597));

function fibonaciRecursivo(n) {
  if (n < 3) {
    return 1;
  } else {
    return fibonaciRecursivo(n - 2) + fibonaciRecursivo(n - 1);
  }
}

// fibonaciRecursivo(5) = 2 + 3 = 5
console.log(fibonaciRecursivo(10));

/*
  Execution Context

  Es el bloque de memoría por función
  que "recuerda" las variables que tiene
  para que pueda accesar a ellas más adelante.
*/

/*
  Gargabe Collector

  Se encarga de limpiar de la memoria
  aquellas variables/funciones que ya no
  se utilizan.

  Cuando una función termina de ejecutarse
  TODAS LAS VARIABLES (del Execution Context) 
  son borradas
  por el Gargabe Collector
*/

function factorial(n) {
  for (let i = 1; i <= n; i++) {
    total *= i;
  }

  return total;
}

let total = 1;
//console.log(factorial(10));

let nombre = "Jorge";

function f1() {
  function f2() {
    let nombre = "Dulce";

    function f3() {
      console.log("f3", nombre); // Dulce
    }

    f3();
  }

  f2();

  console.log("f1", nombre); // Jorge
}

f1();

/*
  Closure

  Es la posibilidad de mantener en memoria
  variables que no le pertenecen a la función.
*/
function closure() {
  let x = 0;

  return function () {
    x++;
    return x;
  };
}

const f = closure(); // <---- Ya no debería existir x
console.log(f());
console.log(f());
console.log(f());
console.log(f());

// ....

