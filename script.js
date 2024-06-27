document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('weatherForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('locationInput').value;
        fetchWeatherData(location);
        fetchWeatherHistory(location);
    });
});

function fetchWeatherData(location) {
    const url = `https://weather-report-func.azurewebsites.net/api/GetWeatherData?location=${encodeURIComponent(location)}`;
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Fetch operation error:', error.message);
            displayWeatherData({ error: "Failed to fetch weather data. Please try again later." });
        });
}

function fetchWeatherHistory(location) {
    const azureFunctionUrl = `https://weather-report-func.azurewebsites.net/api/GetWeatherHistory?location=${encodeURIComponent(location)}`;

    fetch(azureFunctionUrl)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        displayWeatherHistory(data);
    })
    .catch(error => {
        console.error('Error fetching weather history:', error.message);
        displayWeatherHistory({ error: "Failed to fetch weather history. Please try again later." });
    });
}

function displayWeatherData(data) {
    const resultDiv = document.getElementById('weatherResult');
    if (data.error) {
        resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const weatherIcon = getWeatherIcon(data.weather[0].main);
        resultDiv.innerHTML = `<h2>Current Weather:</h2>
                                <div class="weather-details">
                                    <span class="weather-icon">${weatherIcon}</span>
                                    <div class="weather-info">
                                        <span class="temperature">${temp}°C</span>
                                        <span class="description">${description}</span>
                                    </div>
                                </div>`;
    }
}

function displayWeatherHistory(data) {
    const historyDiv = document.getElementById('weatherHistory');
    if (!historyDiv) {
        console.error('Weather history display element not found');
        return;
    }
    if (data.error) {
        historyDiv.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        const entries = data.map(entry => {
            const temp = Math.round(entry.data.main.temp);
            const description = entry.data.weather[0].description;
            const weatherIcon = getWeatherIcon(entry.data.weather[0].main);
            return `<div class="history-entry">
                        <span class="weather-icon">${weatherIcon}</span>
                        <div class="weather-info">
                            <span class="temperature">${temp}°C</span>
                            <span class="description">${description}</span>
                        </div>
                    </div>`;
        }).join('');
        historyDiv.innerHTML = `<h2>Previous Reports:</h2>${entries}`;
    }
}

function getWeatherIcon(weatherType) {
    const icons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Snow': '🌨️',
        'Thunderstorm': '🌩️',
        'Drizzle': '💧',
        'Mist': '🌫️'
    };
    return icons[weatherType] || '🌈'; // Default to rainbow emoji if unknown
}