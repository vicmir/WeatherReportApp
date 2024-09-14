const { CosmosClient } = require('@azure/cosmos');

const cosmosEndpoint = process.env.COSMOS_DB_ENDPOINT;
const cosmosKey = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint: cosmosEndpoint, key: cosmosKey });
const databaseId = 'weather-report-db';
const containerId = 'WeatherData';

module.exports = async function (context, req) {
    const location = req.query.location;
    if (!location) {
        context.res = {
            status: 400,
            body: "Please specify a location"
        };
        return;
    }

    try {
        const database = client.database(databaseId);
        const container = database.container(containerId);
        const querySpec = {
            query: "SELECT * FROM c WHERE c.location = @location ORDER BY c._ts DESC",
            parameters: [{ name: "@location", value: location }]
        };

        const { resources: items } = await container.items.query(querySpec).fetchAll();

        context.res = {
            status: 200,
            body: items
        };
    } catch (error) {
        context.log(`Error retrieving weather history: ${error}`);
        context.res = {
            status: 500,
            body: `Error retrieving weather history: ${error.message}`
        };
    }
};