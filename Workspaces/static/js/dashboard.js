document.addEventListener("DOMContentLoaded", function() {
    const thresholdAlert = (value, min, max, parameter) => {
        if (value < min || value > max) {
            alert(`Warning: ${parameter} value ${value} is out of the normal range (${min} - ${max})!`);
        }
    };

    const createChart = (ctx, label, data, borderColor) => {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: borderColor,
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#ecf0f1"
                        }
                    },
                    x: {
                        ticks: {
                            color: "#ecf0f1"
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: "#ecf0f1"
                        }
                    }
                }
            }
        });
    };

    // Example sensor data
    const sensorData = {
        soilHumidity: [30, 32, 35, 40, 38, 42, 45],
        phLevel: [6.5, 6.7, 7.0, 7.2, 6.8, 7.1, 7.3],
        temperature: [22, 24, 26, 28, 25, 27, 29],
        potassium: [100, 110, 105, 115, 120, 125, 130],
        nitrogen: [90, 95, 92, 97, 93, 99, 100],
        phosphorus: [50, 55, 60, 58, 62, 65, 70]
    };

    // Thresholds for alerts
    const thresholds = {
        soilHumidity: [30, 50], // min, max
        phLevel: [6.5, 7.5],
        temperature: [20, 30],
        potassium: [90, 130],
        nitrogen: [85, 105],
        phosphorus: [50, 70]
    };

    // Creating charts and adding alerts
    const soilHumidityChart = createChart(
        document.getElementById('soilHumidityChart').getContext('2d'),
        'Soil Humidity (%)',
        sensorData.soilHumidity,
        '#1abc9c'
    );
    sensorData.soilHumidity.forEach(value => thresholdAlert(value, thresholds.soilHumidity[0], thresholds.soilHumidity[1], 'Soil Humidity'));

    const phLevelChart = createChart(
        document.getElementById('phLevelChart').getContext('2d'),
        'pH Level',
        sensorData.phLevel,
        '#e74c3c'
    );
    sensorData.phLevel.forEach(value => thresholdAlert(value, thresholds.phLevel[0], thresholds.phLevel[1], 'pH Level'));

    const temperatureChart = createChart(
        document.getElementById('temperatureChart').getContext('2d'),
        'Temperature (°C)',
        sensorData.temperature,
        '#3498db'
    );
    sensorData.temperature.forEach(value => thresholdAlert(value, thresholds.temperature[0], thresholds.temperature[1], 'Temperature'));

    const potassiumChart = createChart(
        document.getElementById('potassiumChart').getContext('2d'),
        'Potassium Level (mg/kg)',
        sensorData.potassium,
        '#9b59b6'
    );
    sensorData.potassium.forEach(value => thresholdAlert(value, thresholds.potassium[0], thresholds.potassium[1], 'Potassium Level'));

    const nitrogenChart = createChart(
        document.getElementById('nitrogenChart').getContext('2d'),
        'Nitrogen Level (mg/kg)',
        sensorData.nitrogen,
        '#f1c40f'
    );
    sensorData.nitrogen.forEach(value => thresholdAlert(value, thresholds.nitrogen[0], thresholds.nitrogen[1], 'Nitrogen Level'));

    const phosphorusChart = createChart(
        document.getElementById('phosphorusChart').getContext('2d'),
        'Phosphorus Level (mg/kg)',
        sensorData.phosphorus,
        '#e67e22'
    );
    sensorData.phosphorus.forEach(value => thresholdAlert(value, thresholds.phosphorus[0], thresholds.phosphorus[1], 'Phosphorus Level'));
});
