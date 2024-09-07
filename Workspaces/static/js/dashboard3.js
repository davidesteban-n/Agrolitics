// Datos de ejemplo para los gráficos
const hydrationData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [{
        label: 'Hidratación (%)',
        data: [70, 75, 72, 78, 74, 76, 80],
        backgroundColor: 'rgba(46, 125, 50, 0.2)',
        borderColor: 'rgba(46, 125, 50, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
    }]
};

const temperatureData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [{
        label: 'Temperatura (°C)',
        data: [20, 22, 21, 23, 22, 24, 25],
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
        borderColor: 'rgba(255, 87, 34, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
    }]
};

// Configuración de gráficos
const hydrationConfig = {
    type: 'line',
    data: hydrationData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Nivel de Hidratación Durante la Semana'
            }
        }
    },
};

const temperatureConfig = {
    type: 'line',
    data: temperatureData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Temperatura Ambiental Durante la Semana'
            }
        }
    },
};

// Renderización de gráficos
const hydrationChart = new Chart(
    document.getElementById('hydrationChart'),
    hydrationConfig
);

const temperatureChart = new Chart(
    document.getElementById('temperatureChart'),
    temperatureConfig
);

// Función para generar el calendario
function generateCalendar(month, year) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const date = new Date(year, month, 1);
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Encabezados de días
    const headerRow = document.createElement('div');
    headerRow.classList.add('calendar-row', 'calendar-header');
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        headerRow.appendChild(dayElement);
    });
    calendar.appendChild(headerRow);

    // Espacios en blanco para los días antes del primer día del mes
    const firstDayIndex = date.getDay(); // Día de la semana en que comienza el mes
    let currentRow = document.createElement('div');
    currentRow.classList.add('calendar-row');

    for (let i = 0; i < firstDayIndex; i++) {
        const blankElement = document.createElement('div');
        blankElement.classList.add('calendar-day', 'empty');
        currentRow.appendChild(blankElement);
    }

    // Días del mes
    const totalDays = new Date(year, month + 1, 0).getDate(); // Total de días en el mes
    for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        currentRow.appendChild(dayElement);

        if (currentRow.children.length === 7 || day === totalDays) {
            calendar.appendChild(currentRow);
            currentRow = document.createElement('div');
            currentRow.classList.add('calendar-row');
        }
    }
}

// Generar el calendario para el mes actual
const today = new Date();
generateCalendar(today.getMonth(), today.getFullYear());




// // Funcionalidad del calendario
// const datePicker = document.getElementById('datePicker');
//     const daysPassedText = document.getElementById('daysPassed');

//     // Iniciar el valor del calendario con la fecha actual
//     const today = new Date().toISOString().split('T')[0];
//     datePicker.value = today;

//     // Calcular días transcurridos desde una fecha seleccionada
//     datePicker.addEventListener('change', function () {
//         const selectedDate = new Date(datePicker.value);
//         const todayDate = new Date();
//         const differenceInTime = todayDate - selectedDate;
//         const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

//         daysPassedText.innerText = `Días transcurridos: ${differenceInDays}`;
//     });
