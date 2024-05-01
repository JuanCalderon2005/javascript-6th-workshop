console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/* 
¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
= la funcion `funcionDeclarada` se ejecuto bien permiten ser llamadas antes de ser declaradas, en cabio la funcion
`funcionExpresada` como es expresada primero tiene que ser declarada antes de ser llamada.

¿Cómo difieren los resultados entre la función declarada y la función expresada?
= Que la declarada si se ejecuta correctamente y la expresada no

¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
= Esto pude manejarse asi por consecuencia de la asignacion del hoisting.

 */