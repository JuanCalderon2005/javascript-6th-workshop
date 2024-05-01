
let adivinaA = prompt("¿Cuál es el valor de a?");
let adivinaB = prompt("¿Cuál es el valor de b?");
let adivinaC = prompt("¿Cuál es el valor de c?");
let adivinaFuncionDeclarada = prompt("¿Cuál es el resultado de funcionDeclarada()?");
let adivinaFuncionExpresada = prompt("¿Cuál es el resultado de funcionExpresada()?");

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};


console.log("\nRESULTADO REAL:");

// vars call
console.log("Valor de a:", a); // 1
if (typeof b !== 'undefined') {
    console.log("Valor de b:", b);
} else {
    console.log("Valor de b:", "Error: Cannot access 'b' before initialization");
}
if (typeof c !== 'undefined') {
    console.log("Valor de c:", c);
} else {
    console.log("Valor de c:", "Error: Cannot access 'c' before initialization");
}

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada()); 
console.log("Resultado de funcionExpresada:", funcionExpresada());

// Compara las respuestas del usuario con los resultados reales
console.log("\nCOMPARACIÓN CON LAS RESPUESTAS:");
console.log("Valor de a:", adivinaA === String(a) ? "Correcto" : "Incorrecto");
console.log("Valor de b:", adivinaB === String(b) ? "Correcto" : "Incorrecto");
console.log("Valor de c:", adivinaC === String(c) ? "Correcto" : "Incorrecto");
console.log("Resultado de funcionDeclarada:", adivinaFuncionDeclarada === funcionDeclarada() ? "Correcto" : "Incorrecto");
console.log("Resultado de funcionExpresada:", adivinaFuncionExpresada === funcionExpresada() ? "Correcto" : "Incorrecto");
