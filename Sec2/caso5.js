function manejarAsincronia(callback){
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true){
                resolve();
            }else{
                reject(new Error("La promesa fue rechazada"));
            }
        },2000);
    })

    myPromise.then(()=>{
        callback();
    }).catch((error)=>{
        console.error(`Error`,error.message);
    });
}
function myCallback(){
        console.log("Promesa cumplida, callback ejecutado");
    };
manejarAsincronia(myCallback);

/* 
¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
= La promesa se cumplira a los segundos indicados y se ejecutara myCallbak

¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
= Imprime por consola el error de la linea 15

¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
= si
*/
