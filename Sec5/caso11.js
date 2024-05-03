const url = "data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData(url) {
    // Retorna una nueva promesa que se resuelve después del setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Realiza la solicitud fetch dentro del setTimeout
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Habitaciones:", data.rooms);
                    console.log("Tipos de Habitaciones:", data.roomTypes);
                    resolve(data); // Resuelve la promesa con los datos cargados
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        }, 3000);
    });
}

const generarID = (() => {
    let id = 1;
    return () => {
        return id++;
    };
})();



function cargarYMostrarData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
            return response.json();
        })
        .then(({ rooms, roomTypes }) => {
            return { rooms, roomTypes };
        });
}

function buscarHabitacionesDisponibles(capacidad, rooms, roomTypes) {
    const habitacionesDisponibles = [];
    for (const room of rooms) {
        const roomType = roomTypes.find((type) => type.id === room.roomTypeId);
        if (roomType.capacity >= capacidad && room.availability) {
            habitacionesDisponibles.push({ number: room.number, type: roomType.name });
        }
    }
    return habitacionesDisponibles;
}

function cancelarReserva(){
    const idReserva = parseInt(prompt("ingrese el id de la resrva que desea cancelar"));
    const index = reservaciones.findIndex(reserva => reserva.id === idReserva);
    if(index !== -1){
        reservaciones.splice(index,1);
        console.log("Reservacion cancelada");
        console.log("Todas las reservas:", reservaciones);
    }else{
        console.log("No se encontro ningua reserva con ese id")
    }
}

function editarReserva() {
    const idReserva = parseInt(prompt("Ingrese el ID de la reserva que desea editar:"));
    const reserva = reservaciones.find(reserva => reserva.id === idReserva);
    if (reserva) {
        console.log("Reserva seleccionada:", reserva);
        const nombreUsuario = prompt("Ingrese su nuevo nombre (o Enter para mantener el actual):");
        reserva.nombre = nombreUsuario || reserva.nombre;
        const fechaLlegada = new Date(prompt("Ingrese la nueva fecha de llegada (YYYY-MM-DD) (o Enter para mantener la actual):"));
        reserva.fechaLlegada = fechaLlegada || reserva.fechaLlegada;
        const fechaSalida = new Date(prompt("Ingrese la nueva fecha de salida (YYYY-MM-DD) (o Enter para mantener la actual):"));
        reserva.fechaSalida = fechaSalida || reserva.fechaSalida;
        console.log("¡Reserva editada con éxito!");
        console.log("Todas las reservas:", reservaciones);
    } else {
        console.log("No se encontró ninguna reserva con ese ID.");
    }
}

let reservaciones = [];
let whil = true
cargarYMostrarData(url)
    .then(({ rooms, roomTypes }) => {
        while (whil) {
            const pregunta = prompt("Seleccione una opcion \n1.Crear reserva\n2.Cancelar reserva\n3.Editar reserva\n4.Salir");
            console.log("Todas las reservas:", reservaciones);
            switch (pregunta) {
                case "1":
                    const nombreUsuario = prompt("Ingrese su nombre:");
                    const fechaLlegada = new Date(prompt("Ingrese la fecha de llegada (YYYY-MM-DD):"));
                    const fechaSalida = new Date(prompt("Ingrese la fecha de salida (YYYY-MM-DD):"));
                    const capacidad = parseInt(prompt("Ingrese el número de personas que se quedarán: "));
                    const habitacionesDisponibles = buscarHabitacionesDisponibles(capacidad, rooms, roomTypes);

                    const verfFechaDisponible = reservaciones.filter((reserva) => {
                        const reservaInicio = reserva.fechaLlegada;
                        const reservaFin = reserva.fechaSalida;
                        if ((fechaLlegada >= reservaInicio && fechaLlegada < reservaFin) ||
                            (fechaSalida > reservaInicio && fechaSalida <= reservaFin) ||
                            (fechaLlegada <= reservaInicio && fechaSalida >= reservaFin)) {
                            return true;
                        }
                        return false;
                    });

                    if (verfFechaDisponible.length > 0) {
                        console.log("La habitacion no esta disponible para esa fecha");
                        break;
                    }

                    if (habitacionesDisponibles.length > 0) {
                        console.log(`Habitaciones disponibles para ${capacidad} personas:`);
                        habitacionesDisponibles.forEach(room => {
                            console.log(`- Habitación ${room.number} (${room.type})`);
                        });
                        const seleccion = parseInt(prompt(`Seleccione el número de la habitación que desee:`));
                        const habitacionSeleccionada = habitacionesDisponibles.find(room => room.number === seleccion);
                        if (habitacionSeleccionada) {
                            console.log(`Ha seleccionado la habitación ${habitacionSeleccionada.number}.`);
                            const reserva = {
                                id: generarID(),
                                nombre: nombreUsuario,
                                fechaLlegada: fechaLlegada,
                                fechaSalida: fechaSalida,
                                habitacion: habitacionSeleccionada
                            };
                            reservaciones.push(reserva);
                            console.log("¡Reserva realizada con éxito!");
                            console.log("Todas las reservas:", reservaciones);
                            break;
                            
                        } else {
                            alert("Por favor, seleccione un número de habitación válido.");
                        }
                    } else {
                        console.log("Lo siento, no hay habitaciones disponibles para esa cantidad de personas.");
                        break;
                    }
                case "2":
                    cancelarReserva();
                    break;
                case "3":
                    editarReserva();
                case "4":
                    whil = false;
                    break;
            }
        }
    })
    .catch((error) => {
        console.error("Error al manejar la promesa:", error);
    });

