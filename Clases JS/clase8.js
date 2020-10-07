/*
  Código síncrono: Ejecuta linea por linea
  del código de manera secuencial.
*/
/*
console.log("Hola mundo");

console.log("¿Cómo estás?");

console.log("Adiós");
*/
/*
  Bajo un escenario real
  buscamos hacer varias cosas al mismo.
*/

/*
  Hilo de ejecución (Threads): Es tiempo y recursos
  que el procesador toma para ejecutar un conjunto de instrucciones.

  Un lenguaje que permite usar varios hilos de ejecución
  se llama MultiThread.

  JavaScript es un lenguaje de programación asíncrono y
  funciona solamente con 1 solo hilo de ejecución.
*/
/*
setTimeout(function () {
  console.log("Este mensaje aparece después de 5 segundos");
}, 0);

console.log("Este mensaje es síncrono");

console.log("Este es el último mensaje");
*/

// Código NO DETERMINISTA: Qué no sé cuál es el orden de ejecución

function mensaje_asincrono(mensaje, callback) {
    const milisegundos = Math.ceil(Math.random() * 5000) + 1000;
    setTimeout(function () {
      console.log(mensaje, "(después de " + milisegundos / 1000 + " segundos)");
      if (typeof callback !== "undefined") {
        callback();
      }
    }, milisegundos);
  }
  
  mensaje_asincrono("Hola, Jorge", function () {
    mensaje_asincrono("Hola, Sergio", function () {
      mensaje_asincrono("Hola, Gio", function () {
        mensaje_asincrono("Hola, Carmen", function () {
          mensaje_asincrono("Hola, Yteel");
        });
      });
    });
  });
  
  // Callback: Una función se ejecuta después de realizar cierta acción.
/*function mensaje_asincrono(mensaje, callback) {
  const milisegundos = Math.ceil(Math.random() * 1000) + 500;
  setTimeout(function () {
    console.log(mensaje, "(después de " + milisegundos / 1000 + " segundos)");
    if (typeof callback !== "undefined") {
      callback();
    }
  }, milisegundos);
}*/

// Código NO MANTENIBLE: Que es difícil moverle
// Callback Hell
/*mensaje_asincrono("Hola, Oscoy", function () {
  mensaje_asincrono("Hola, Jorge", function () {
    mensaje_asincrono("Hola, Sebastian", function () {
      mensaje_asincrono("Hola, Carlos", function () {
        mensaje_asincrono("Hola, Gil", function () {
          mensaje_asincrono("Hola, Enrique", function () {
            mensaje_asincrono("Hola, Nestor", function () {
              mensaje_asincrono("Hola, Gio", function () {
                mensaje_asincrono("Hola, Carmen", function () {
                  mensaje_asincrono("Hola, Yteel", function () {
                    mensaje_asincrono("Hola, Juan", function () {
                      mensaje_asincrono("Hola, Rafa");
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});*/

/*
  Promesas (JavaScript) - Futures (Java, Rust)

  Una Promesa es un objeto de JavaScript que ejecuta
  código asíncrono. Dicho código asíncrono puede tener
  2 posibles caminos, éxito (resolve) o error (reject).
*/

function mensaje_asincrono_promesas(mensaje) {
    const milisegundos = Math.ceil(Math.random() * 1000) + 500;
  
    const promesa = new Promise(function (resolve, reject) {
      // -------------------------------------------------------
      setTimeout(function () {
        console.log(mensaje, "(después de " + milisegundos / 1000 + " segundos)");
        reject(); // Termina la promesa de forma exitosa
      }, milisegundos);
      // ---------------------------------------------------------
    });
  
    return promesa;
  }
  
  // Method chain: .metodo().metodo().metodo() - .map().reduce().filter()
  // Promise chain: .then().then().then()
  
  /*mensaje_asincrono_promesas("Hola, Oscoy")
    // Caso de éxito (dentro de la promesa se ejecuto el resolve)
    .then(function () {
      return mensaje_asincrono_promesas("Hola, Jorge");
    })
    .then(function () {
      return mensaje_asincrono_promesas("Hola, Carlos");
    })
    .then(function () {
      return mensaje_asincrono_promesas("Hola, Gil");
    })
    .then(function () {
      return mensaje_asincrono_promesas("Hola, Enrique");
    })
    .then(function () {
      return [1, 2, 3, 4];
    })
    .then(function (arreglo) {
      console.log(arreglo);
    });*/
  
  /*.catch(function () {
      console.log("Ocurrió un error");
    }); // Caso de error (dentro de la promesa se ejecuto el reject)*/
  
  // Async/Await: Es una forma de escribir código asíncrono de manera "secuencial"
  async function la_mejor_version() {
    // Await: "Detiene" la ejecución del código
    // y continua hasta que la promesa se resuelva (resolve/reject)
    try {
      await mensaje_asincrono_promesas("Hola, Oscoy");
      await mensaje_asincrono_promesas("Hola, Jorge");
      await mensaje_asincrono_promesas("Hola, Carlos");
      await mensaje_asincrono_promesas("Hola, Gil");
      await mensaje_asincrono_promesas("Hola, Enrique");
  
      const arreglo = [1, 2, 3];
  
      console.log(arreglo[0]);
    } catch (e) {
      // Este bloque se ejecuta después de encontrar un error
      console.log("Ocurrió un error inesperado");
    }
  }
  
  la_mejor_version();
    