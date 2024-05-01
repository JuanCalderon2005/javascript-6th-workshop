function contador (){
    let count = 0;
    function sumar(){
        count++
        return count;
    }
    function obtenerValor(){
        return count;
    }
    return{
        incrementar: sumar,
        obtenervalor: obtenerValor
    };
}

const Contador = contador();
let ciclo = true;
while(ciclo){
    const confirmacion = confirm(`Desea incrementar el contador?\n\nContador: ${Contador.obtenervalor()}`);
    if(confirmacion){
        Contador.incrementar();
    }else{
        ciclo = false;
    }
}