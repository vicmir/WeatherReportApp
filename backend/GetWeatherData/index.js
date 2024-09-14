const axios = require('axios');
const { CosmosClient } = require('@azure/cosmos');

const cosmosEndpoint = process.env.COSMOS_DB_ENDPOINT;
const cosmosKey = process.env.COSMOS_DB_KEY;
const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;

const client = new CosmosClient({ endpoint: cosmosEndpoint, key: cosmosKey });
const databaseId = 'weather-report-db';
const containerId = 'WeatherData';

module.exports = async function (context, req) {
    const location = req.query.location || (req.body && req.body.location);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherApiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;

        const { database } = await client.databases.createIfNotExists({ id: databaseId });
        const { container } = await database.containers.createIfNotExists({
            id: containerId,
            partitionKey: { paths: ["/location"] }
        });

        await container.items.create({
            id: `${location.replace(/\s+/g, '')}-${Date.now()}`,
            location,
            data: weatherData
        });

        context.res = {
            body: weatherData
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: `Error fetching weather data or writing to Cosmos DB: ${error.message}`
        };
    }
};
