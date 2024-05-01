
console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
    console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
    console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
        setTimeout(() => {
            console.log("Macrotarea (setTimeout) inside Microtarea 1");
            return "from micro 1";
        }, 0);
    })
    .then((message) => {
        console.log("Microtarea 2 (Promesa)");
    });

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
        console.log("Microtarea 3 (Promesa)");
    })
    .then(() => {
        console.log("Microtarea 4 (Promesa)");
    });

console.log("Fin del script");

/* 
¿Qué tareas se consideran macrotareas y cuáles son microtareas?
= Las microtareas son las promesas y las macrotareas son los setTimeOut

¿Cómo se relacionan las macrotareas y microtareas con el event loop?
= Las dos tienen relacion ya que almacenan las funciones que van al event loop pero las microtareas tiene prioridad que las macrotareas

¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
= Se ejecuta primero la microtarea y despues la macrotarea

¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
= Pomesas son microtareas por ende se ejecutan primero y setTimeOut son macrotareas por ende se ejecutan despues.
*/