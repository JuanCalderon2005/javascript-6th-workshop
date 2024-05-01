
function segundos(sec) {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
    });
}

function cargarYmostrar(url) {
    return fetch(url).then((response)=>{
        if(!response.ok){
            throw new Error("Error en carga de datos");
        }
        return response.json();
    }).then(data=>{
        console.log("Datos cargados");
        console.log(data);
    }).catch(error=>{
        console.log(`Error al cargar los datos`,error.message);
    });
}

function pedirSegundos(){
    let sec = parseInt(prompt("Ingrese los segundos"));

    if(!isNaN(sec)&&sec>0){
        segundos(sec).then(()=>{
            console.log("promesa cumplida");
            cargarYmostrar(`https://jsonplaceholder.typicode.com/posts`);
        });
    }else{
        console.log("Ingrese un numero valido");
    }
}

pedirSegundos();
