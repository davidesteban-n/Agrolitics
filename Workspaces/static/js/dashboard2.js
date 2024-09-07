document.addEventListener('DOMContentLoaded', function () {
    // Configuración de los gráficos
    const hydrationChart = new Chart(document.getElementById('hydrationChart'), {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Hidratación (%)',
                data: [60, 65, 70, 75, 80, 85, 90],
                borderColor: '#42a5f5',
                fill: false
            }]
        }
    });

    const phChart = new Chart(document.getElementById('phChart'), {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'pH',
                data: [6.0, 6.2, 6.4, 6.1, 6.3, 6.5, 6.7],
                borderColor: '#66bb6a',
                fill: false
            }]
        }
    });

    const temperatureChart = new Chart(document.getElementById('temperatureChart'), {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Temperatura (°C)',
                data: [22, 23, 21, 24, 25, 26, 27],
                borderColor: '#ff7043',
                fill: false
            }]
        }
    });

    const potassiumChart = new Chart(document.getElementById('potassiumChart'), {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Potasio (ppm)',
                data: [100, 110, 120, 115, 125, 130, 140],
                borderColor: '#ab47bc',
                fill: false
            }]
        }
    });

    // Funcionalidad del calendario
    const datePicker = document.getElementById('datePicker');
    const daysPassedText = document.getElementById('daysPassed');

    // Iniciar el valor del calendario con la fecha actual
    const today = new Date().toISOString().split('T')[0];
    datePicker.value = today;

    // Calcular días transcurridos desde una fecha seleccionada
    datePicker.addEventListener('change', function () {
        const selectedDate = new Date(datePicker.value);
        const todayDate = new Date();
        const differenceInTime = todayDate - selectedDate;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

        daysPassedText.innerText = `Días transcurridos: ${differenceInDays}`;
    });
});
