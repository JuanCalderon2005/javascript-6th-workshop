// 3.1
function crearSumador(nInicial){
    return function(numero){
        return nInicial+numero;
    };
}
// 3.2
const suma = crearSumador(3);
alert(suma(2));
// Adicional
// ¿?1 = Esto ocurre debido a los closure que permite que la funcion interna recuerde todo lo de la funcion externa
// ¿?2 = Conlleva a un uso significativo de memoria entre mas existan closures
