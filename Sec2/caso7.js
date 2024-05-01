const codigo = `
console.log("Inicio del script");
\n
setTimeout(() => {
    console.log("Primer setTimeout");
}, 0);
\n
setTimeout(() => {
    console.log("Segundo setTimeout");
}, 0);
\n
Promise.resolve("Promesa resuelta").then(console.log);
\n
console.log("Fin del script");`

const ordenCorrecto = [`1,5,4,2,3`];

const Respuesta = prompt("Ingrese porfavor el orden en el que se ejecuta el codigo por consola separados por `,`. Ej[1,2,3,4,5]").split(",").map(Number);

let respuestaCorrecta = ordenCorrecto.every((valor,index)=> valor === Respuesta[index])

if(respuestaCorrecta == true){
    console.log(`Tus respuestas estan correctas: ${Respuesta}`)
}else{
    console.log(`Tus respuestas son incorrectas: ${Respuesta}
    \nLa Respuesta correcta es:
    1. Inicio del script
    5. Fin del script
    4. Promesa resuelta
    2. Primer setTimeOut
    3. Segundo setTimeOut`)
}





