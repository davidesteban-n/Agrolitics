document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    let chart;

    // Datos de ejemplo para temperatura
    const data = {
        labels: [
            "8/13/2024, 11:51:37 PM", "8/14/2024, 12:11:37 AM", "8/14/2024, 12:31:37 AM",
            "8/14/2024, 12:51:37 AM", "8/14/2024, 1:11:37 AM", "8/14/2024, 1:31:37 AM",
            "8/14/2024, 1:51:37 AM", "8/14/2024, 2:11:37 AM", "8/14/2024, 2:31:37 AM",
            "8/14/2024, 2:51:37 AM", "8/14/2024, 3:11:36 AM", "8/14/2024, 3:31:37 AM",
            "8/14/2024, 3:51:36 AM", "8/14/2024, 4:11:36 AM", "8/14/2024, 4:31:36 AM",
            "8/14/2024, 4:51:36 AM", "8/14/2024, 5:11:36 AM", "8/14/2024, 5:31:36 AM",
            "8/14/2024, 5:51:36 AM", "8/14/2024, 6:11:36 AM", "8/14/2024, 6:31:36 AM",
            "8/14/2024, 6:51:36 AM", "8/14/2024, 7:11:36 AM", "8/14/2024, 7:31:37 AM",
            "8/14/2024, 7:51:36 AM", "8/14/2024, 8:11:36 AM", "8/14/2024, 8:31:36 AM",
            "8/14/2024, 8:51:36 AM", "8/14/2024, 9:11:36 AM", "8/14/2024, 9:31:36 AM",
            "8/14/2024, 9:51:36 AM", "8/14/2024, 10:11:37 AM", "8/14/2024, 10:31:36 AM",
            "8/14/2024, 10:51:36 AM", "8/14/2024, 11:11:36 AM", "8/14/2024, 11:31:36 AM",
            "8/14/2024, 11:51:36 AM", "8/14/2024, 12:11:35 PM", "8/14/2024, 12:31:35 PM",
            "8/14/2024, 12:51:36 PM", "8/14/2024, 1:11:36 PM", "8/14/2024, 1:31:36 PM",
            "8/14/2024, 1:51:36 PM", "8/14/2024, 2:11:35 PM", "8/14/2024, 2:31:35 PM",
            "8/14/2024, 2:51:35 PM", "8/14/2024, 3:11:35 PM", "8/14/2024, 3:31:36 PM",
            "8/14/2024, 3:51:36 PM", "8/14/2024, 4:11:35 PM", "8/14/2024, 4:31:35 PM",
            "8/14/2024, 4:51:35 PM", "8/14/2024, 5:11:35 PM", "8/14/2024, 5:31:35 PM",
            "8/14/2024, 5:51:35 PM", "8/14/2024, 6:11:36 PM", "8/14/2024, 6:31:35 PM",
            "8/14/2024, 6:51:35 PM", "8/14/2024, 7:11:35 PM", "8/14/2024, 7:31:35 PM",
            "8/14/2024, 7:51:35 PM", "8/14/2024, 8:11:35 PM", "8/14/2024, 8:31:35 PM",
            "8/14/2024, 8:51:35 PM", "8/14/2024, 9:11:35 PM", "8/14/2024, 9:31:34 PM",
            "8/14/2024, 9:51:35 PM", "8/14/2024, 10:11:35 PM", "8/14/2024, 10:31:35 PM",
            "8/14/2024, 10:51:35 PM", "8/14/2024, 11:11:35 PM", "8/14/2024, 11:31:35 PM"
        ],
        datasets: [
            {
                label: 'Temperatura Máxima (°C)',
                data: [28, 30, 32, 31, 29, 27, 26],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.1
            },
            {
                label: 'Temperatura Mínima (°C)',
                data: [18, 19, 20, 19, 17, 16, 15],
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
                        text: 'Mes'
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
    toggleTimeLabelsButton.textContent = 'Mostrar/Ocultar Etiquetas de Tiempo';
    toggleTimeLabelsButton.addEventListener('click', toggleTimeLabels);
    controlsContainer.appendChild(toggleTimeLabelsButton);

});