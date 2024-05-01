let codigo = `\n//Global scope
var globalVariable = "Soy una variable local.";
function testScope() {
    //Function Scope
    var functionVariable = "Soy una variable local";
    if (true){
        //Block Scope
        var blockVariable = "Soy una variable de bloque.";
        console.log("Dntro del bloque:",blockVariable);
    }
    console.log("Dntro de la funcion:",functionVariable);
}
console.log("Fuera de la funcion:",globalVariable);
testScope();`

let respuestas = [];

const pregunta1 = prompt("Es posible aceder a la variable `globalVariable` en diferentes partes del codigo? [si porque..../no porqure...]");
const pregunta2 = prompt("Es posible acceder a la variable `functionVriable` en diferentes partes del cogigo? [si porque..../no porqure...]");
const pregunta3 = prompt("Es posible acceder a la variable `blockVariable` en diferentes partes del codigo? [si porque..../no porqure...]");

respuestas.push(pregunta1,pregunta2,pregunta3);

respuestas.forEach((Element, index)=>{
    console.log("Respuesta pregunta " + (index + 1) + ": " + Element);
    if (index === 0) {
        if (Element.includes("si porque")) {
            console.log("Correcto, `globalVariable` es una variable global y se puede acceder en diferentes partes del código.");
        } else {
            console.log("Incorrecto, `globalVariable` es una variable global y se puede acceder en diferentes partes del código.");
        }
    } else if (index === 1) {
        if (Element.includes("no porque")) {
            console.log("Correcto, `functionVariable` es una variable local a la función y no se puede acceder desde fuera de ella.");
        } else {
            console.log("Incorrecto, `functionVariable` es una variable local a la función y no se puede acceder desde fuera de ella.");
        }
    } else if (index === 2) {
        if (Element.includes("no porque")) {
            console.log("Correcto, `blockVariable` es una variable local al bloque y no se puede acceder desde fuera de él.");
        } else {
            console.log("Incorrecto, `blockVariable` es una variable local al bloque y no se puede acceder desde fuera de él.");
        }
    }
});

