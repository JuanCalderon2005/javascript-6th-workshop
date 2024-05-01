console.log("Mensaje 1: Inmediatamente");

setTimeout(()=>{
    console.log("Mensaje 2: Con timeout de 0 segundos")
},0);

setTimeout(()=>{
    console.log("Mensaje 3: Con timeout de 1 segundo");
},1000);

/* 
¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos
=Porque en el even loop se ejecuta primero el console log inicial despues el primer setTimeOut entra a las macro tareas despues el segundo entra a las macrotareas, despues se ejecuta el primero y despues el segundo.

¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
=Que de esta fotma asegura que las tareas mas importantes se ejecuten sin o con interferencia dependiendo de...
*/