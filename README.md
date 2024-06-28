# WeatherReportApp

The KICC Weather Report project is a cloud-based application designed to provide users with real-time weather updates and historical weather data. Deployed on Microsoft Azure, this project leverages several cloud services to offer a seamless and efficient weather reporting tool. Users can access current weather information for their chosen locations via a user-friendly web interface and store historical weather data for future reference.

## Features

- **Real-Time Weather Updates:** Retrieve and display current weather information for any location.
- **Historical Weather Data:** Store and access previously retrieved weather data.
- **Cloud-Based Infrastructure:** Utilizes Azure services for scalable and reliable performance.

## Project Structure

The project is organized into the following components:

1. **Frontend:** A web-based interface developed with HTML, CSS, and JavaScript.
2. **Backend:** Serverless functions created using Azure Functions to handle API requests and process data.
3. **Database:** Azure Cosmos DB for storing and retrieving historical weather data.
4. **API Integration:** Connection with the OpenWeatherMap API to fetch real-time weather data.

## Implementation
**Frontend Development**
The web interface allows users to input a location and view the current weather and forecasts. It is developed using:

- HTML/CSS/JavaScript via Visual Studio

**Backend Implementation**
Serverless functions handle API requests and data processing. Steps include:

1. Register at Azure and OpenWeather.
2. Create a function on Azure to retrieve data from OpenWeather using its API key.
3. Create another function to retrieve historical weather data from Azure Cosmos DB and send it to the frontend.
4. Testing of functions to ensure correct data retrieval and display.

**Database Integration**
Utilizing Azure Cosmos DB for storing and retrieving historical weather data involves:

1. Creating a database and containers for storing data.
2. Designing a schema that supports quick access and search based on timestamps and locations.
3. Testing the database functions to ensure efficient data handling.

**API Integration**
Connecting the web interface with Azure functions and the database to fetch weather data involves:

1. Connecting the JS file (web interface) with Azure (functions and database).
2. Testing the integration to ensure seamless data flow.

## Tools and Technologies
- **Microsoft Azure:** Cloud platform for hosting the application, utilizing services such as Azure Functions, Azure API Management, and Azure Cosmos DB.
- **OpenWeatherMap API:** Source for real-time weather data.
- **HTML/CSS/JavaScript:** For creating the web interface.
- **Node.js:** For backend functions facilitating asynchronous API communication.
- **Data Structures:** JSON for data handling and responses between the API server functions and the frontend.

## Getting Started
**Prerequisites**
- Azure account
- OpenWeatherMap API key
- Basic knowledge of web development (HTML, CSS, JavaScript)

**Installation**
1. Clone the repository:

```
git clone https://github.com/vicmir/WeatherReportApp.git
```
2. Navigate to the project directory:

```
cd WeatherReportApp
```

3. Set up the frontend:
- Open the HTML file in a web browser to view the interface.
4. Set up the backend functions on Azure:
- Follow the steps outlined in the report to create and deploy Azure Functions.

## Usage
1. Access the Web Interface: Open the HTML file in a web browser.
2. Input a Location: Enter the desired location to retrieve current weather information.
3. View Historical Data: Access previously retrieved weather data stored in Azure Cosmos DB.

## Screenshots

![clideo_editor_56cd4c2374884a9b9258628091299af0](https://github.com/vicmir/WeatherReportApp/assets/79836020/3bb7d19d-730e-4674-9e33-c6598d09483f)
