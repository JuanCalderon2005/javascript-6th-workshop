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
    let id = 0;
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

let reservaciones = [];

cargarYMostrarData(url)
    .then(({ rooms, roomTypes }) => {
        const nombreUsuario = prompt("Ingrese su nombre:");
        const fechaLlegada = prompt("Ingrese la fecha de llegada (YYYY-MM-DD):");
        const fechaSalida = prompt("Ingrese la fecha de salida (YYYY-MM-DD):");

        while (true) {
            const capacidad = parseInt(prompt("Ingrese el número de personas que se quedarán: "));
            const habitacionesDisponibles = buscarHabitacionesDisponibles(capacidad, rooms, roomTypes);
            if (habitacionesDisponibles.length > 0) {
                console.log(`Habitaciones disponibles para ${capacidad} personas:`);
                habitacionesDisponibles.forEach(room => {
                    console.log(`- Habitación ${room.number} (${room.type})`);
                });
                const seleccion = parseInt(prompt("Seleccione el número de la habitación que desee:"));
                const habitacionSeleccionada = habitacionesDisponibles.find(room => room.number === seleccion);
                if (habitacionSeleccionada) {
                    console.log(`Ha seleccionado la habitación ${habitacionSeleccionada.number}.`);
                    const reserva = {
                        nombre: nombreUsuario,
                        fechaLlegada: fechaLlegada,
                        fechaSalida: fechaSalida,
                        habitacion: habitacionSeleccionada
                    };
                    reservaciones.push(reserva);
                    console.log("¡Reserva realizada con éxito!");
                    break;
                } else {
                    alert("Por favor, seleccione un número de habitación válido.");
                }
            } else {
                console.log("Lo siento, no hay habitaciones disponibles para esa cantidad de personas.");
                break;
            }
        }
        console.log("Todas las reservas:", reservaciones);
    })
    .catch((error) => {
        console.error("Error al manejar la promesa:", error);
    });

