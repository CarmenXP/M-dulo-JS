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

  