document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    let chart;

    // Datos de ejemplo para temperatura
    const data = {
        labels: [
            "8/13/2024, 11:51:37 PM", "8/14/2024, 12:11:37 AM", "8/14/2024, 12:31:37 AM",
            "8/14/2024, 12:51:37 AM", "8/14/2024, 1:11:37 AM", "8/14/2024, 1:31:37 AM",
            // ... (más etiquetas)
            "8/14/2024, 10:51:35 PM", "8/14/2024, 11:11:35 PM", "8/14/2024, 11:31:35 PM"
        ],
        datasets: [
            {
                label: 'Temperatura Máxima (°C)',
                data: [28, 30, 32, 31, 29, 27, 26, 50, 66],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.1
            },
            {
                label: 'Temperatura Mínima (°C)',
                data: [18, 19, 20, 19, 17, 16, 15,],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.1
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Gráfico de Temperatura'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    position: 'top',
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Tiempo'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Temperatura (°C)'
                    },
                    suggestedMin: 10,
                    suggestedMax: 35
                }
            }
        }
    };

    chart = new Chart(ctx, config);

    // Detectar si alguna temperatura está fuera del rango
    const rangoSuperior = 35; // Límite superior
    const rangoInferior = 10; // Límite inferior

    function verificarRangos() {
        let alerta = '';
        chart.data.datasets.forEach((dataset, datasetIndex) => {
            dataset.data.forEach((value, index) => {
                if (value > rangoSuperior) {
                    alerta += `¡Alerta! El valor en la etiqueta "${chart.data.labels[index]}" ha superado el rango superior (${rangoSuperior} °C) en la serie "${dataset.label}".<br>`;
                }
                if (value < rangoInferior) {
                    alerta += `¡Alerta! El valor en la etiqueta "${chart.data.labels[index]}" ha caído por debajo del rango inferior (${rangoInferior} °C) en la serie "${dataset.label}".<br>`;
                }
            });
        });
        if (alerta) {
            mostrarNotificacion(alerta);
        }
    }

    function mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.innerHTML = mensaje;
        notificacion.style.position = 'fixed';
        notificacion.style.top = '10px';
        notificacion.style.right = '10px';
        notificacion.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        notificacion.style.color = 'white';
        notificacion.style.padding = '10px';
        notificacion.style.borderRadius = '5px';
        notificacion.style.zIndex = '1000';
        notificacion.style.maxWidth = '300px';
        document.body.appendChild(notificacion);

        // Ocultar notificación después de 10 segundos
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 10000);
    }

    verificarRangos(); // Llama a la función después de crear el gráfico

    // Función para alternar la visibilidad de las series
    function toggleDataset(datasetIndex) {
        const isDatasetVisible = chart.isDatasetVisible(datasetIndex);
        if (isDatasetVisible) {
            chart.hide(datasetIndex);
        } else {
            chart.show(datasetIndex);
        }
    }

    function toggleTimeLabels() {
        chart.options.scales.x.display = !chart.options.scales.x.display;
        chart.update();
    }

    // Agregar botones para controlar la visibilidad de las series
    const controlsContainer = document.querySelector('.controls');
    
    const toggleMaxTempButton = document.createElement('button');
    toggleMaxTempButton.textContent = 'Mostrar/Ocultar Temp. Máxima';
    toggleMaxTempButton.addEventListener('click', () => toggleDataset(0));
    controlsContainer.appendChild(toggleMaxTempButton);

    const toggleMinTempButton = document.createElement('button');
    toggleMinTempButton.textContent = 'Mostrar/Ocultar Temp. Mínima';
    toggleMinTempButton.addEventListener('click', () => toggleDataset(1));
    controlsContainer.appendChild(toggleMinTempButton);

    const toggleTimeLabelsButton = document.createElement('button');
    toggleTimeLabelsButton.textContent = 'Mostrar/Ocultar Tiempo';
    toggleTimeLabelsButton.addEventListener('click', toggleTimeLabels);
    controlsContainer.appendChild(toggleTimeLabelsButton);

});
