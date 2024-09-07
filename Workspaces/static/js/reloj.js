// Función para actualizar el reloj
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Función para actualizar el calendario
function updateCalendar() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('es-ES', options);
    document.getElementById('calendar').innerText = currentDate;
}

// Función para comprobar los eventos
const eventos = [
    { nombre: 'Reunión de Trabajo', hora: '10:00:00' },
    { nombre: 'Almuerzo', hora: '13:00:00' },
    { nombre: 'Revisión de Proyecto', hora: '15:30:00' }
];

function checkEventos() {
    const now = new Date();
    const currentTime = now.toTimeString().split(' ')[0]; // Obtener HH:MM:SS
    
    eventos.forEach(evento => {
        if (currentTime === evento.hora) {
            alert(`¡Es hora de: ${evento.nombre}!`);
        }
    });
}

// Función para calcular días transcurridos desde una fecha específica
function calculateDays() {
    const inputDate = document.getElementById('input-date').value;
    if (inputDate) {
        const startDate = new Date(inputDate);
        const currentDate = new Date();
        const differenceInTime = currentDate - startDate;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        document.getElementById('result').innerText = `Han transcurrido ${differenceInDays} días desde ${startDate.toLocaleDateString('es-ES')}.`;
    } else {
        document.getElementById('result').innerText = "Por favor, selecciona una fecha.";
    }
}

// Ejecutar todas las funciones en intervalos regulares
function init() {
    updateClock();
    updateCalendar();
    checkEventos();
    setInterval(updateClock, 1000); // Actualizar reloj cada segundo
    setInterval(updateCalendar, 60000); // Actualizar calendario cada minuto
    setInterval(checkEventos, 1000); // Verificar eventos cada segundo

    // Agregar evento al botón de captura de tiempo
    document.getElementById('capture-btn').addEventListener('click', calculateDays);
}

init(); // Iniciar todas las funciones

//codigo para implementar las etapas del cultivo de la planta

// ... (código anterior sin cambios)

//Codigo para etapa de cultivo de la planta

// const etapasCultivo = [
//     { nombre: 'Germinación', duracion: 7 },
//     { nombre: 'Crecimiento vegetativo', duracion: 14 },
//     { nombre: 'Floración', duracion: 30 },
//     { nombre: 'Maduración', duracion: 20 },
//     { nombre: 'Cosecha', duracion: 1 }
// ];

// let diaInicioCultivo = null;

// // Función para iniciar el cultivo
// function iniciarCultivo() {
//     diaInicioCultivo = new Date();
//     localStorage.setItem('diaInicioCultivo', diaInicioCultivo.toISOString());
//     actualizarEtapaCultivo();
// }

// // Función para actualizar la etapa del cultivo
// function actualizarEtapaCultivo() {
//     if (!diaInicioCultivo) {
//         diaInicioCultivo = new Date(localStorage.getItem('diaInicioCultivo'));
//         if (!diaInicioCultivo) {
//             document.getElementById('etapa-cultivo').innerText = 'Cultivo no iniciado';
//             return;
//         }
//     }

//     const ahora = new Date();
//     const diasTranscurridos = Math.floor((ahora - diaInicioCultivo) / (1000 * 60 * 60 * 24));
//     let diasAcumulados = 0;

//     for (let etapa of etapasCultivo) {
//         if (diasTranscurridos < diasAcumulados + etapa.duracion) {
//             const diasEnEtapaActual = diasTranscurridos - diasAcumulados + 1;
//             document.getElementById('etapa-cultivo').innerText = `Etapa: ${etapa.nombre} (Día ${diasEnEtapaActual} de ${etapa.duracion})`;
//             return;
//         }
//         diasAcumulados += etapa.duracion;
//     }

//     document.getElementById('etapa-cultivo').innerText = 'Cultivo finalizado';
// }

// // Modificar la función init para incluir la nueva funcionalidad
// function init() {
//     updateClock();
//     updateCalendar();
//     checkEventos();
//     actualizarEtapaCultivo(); // Actualizar la etapa del cultivo al inicio
//     setInterval(updateClock, 1000);
//     setInterval(updateCalendar, 60000);
//     setInterval(checkEventos, 1000);
//     setInterval(actualizarEtapaCultivo, 3600000); // Actualizar la etapa del cultivo cada hora

//     document.getElementById('capture-btn').addEventListener('click', calculateDays);
    
//     // Agregar botón para iniciar el cultivo
//     const iniciarCultivoBtn = document.createElement('button');
//     iniciarCultivoBtn.innerText = 'Iniciar Cultivo';
//     iniciarCultivoBtn.addEventListener('click', iniciarCultivo);
//     document.body.appendChild(iniciarCultivoBtn);
// }

// init(); // Iniciar todas las funciones