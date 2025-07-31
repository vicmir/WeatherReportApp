<h1 align="center">🌤 Weather Report App</h1>

<p align="center"> <!-- Frontend --> <img src="https://custom-icon-badges.demolab.com/badge/HTML%2F CSS %2F JS-F7DF1E?logo=javascript&logoColor=000000&style=for-the-badge" alt="HTML/CSS/JS"> <!-- Backend / Cloud --> <img src="https://custom-icon-badges.demolab.com/badge/Microsoft%20Azure-0089D6?logo=msazure&logoColor=white&style=for-the-badge" alt="Microsoft Azure"> <img src="https://custom-icon-badges.demolab.com/badge/Azure%20Functions-0078D7?logo=azure-functions&logoColor=white&style=for-the-badge" alt="Azure Functions"> <!-- Runtime --> <img src="https://custom-icon-badges.demolab.com/badge/Node.js-339933?logo=nodejs&logoColor=white&style=for-the-badge" alt="Node.js"> <!-- Data Format --> <img src="https://custom-icon-badges.demolab.com/badge/JSON-000000?logo=json&logoColor=white&style=for-the-badge" alt="JSON"> </p>

The Weather Report project is a simple cloud-based application designed to provide users with real-time weather updates and historical weather data. Deployed on Microsoft Azure, this project leverages several cloud services to offer a seamless and efficient weather reporting tool. Users can access current weather information for their chosen locations via a user-friendly web interface and store historical weather data for future reference.

## 📌 Features

- **Real-Time Weather Updates:** Retrieve and display current weather information for any location.
- **Historical Weather Data:** Store and access previously retrieved weather data.
- **Cloud-Based Infrastructure:** Utilizes Azure services for scalable and reliable performance.

## 📌 Project Structure

The project is organized into the following components:

1. **Frontend:** A web-based interface developed with HTML, CSS, and JavaScript.
2. **Backend:** Serverless functions created using Azure Functions to handle API requests and process data.
3. **Database:** Azure Cosmos DB for storing and retrieving historical weather data.
4. **API Integration:** Connection with the OpenWeatherMap API to fetch real-time weather data.

## 📌 Implementation
 📍 **Frontend Development:**

The web interface allows users to input a location and view the current weather and forecasts. It is developed using:

- HTML/CSS/JavaScript via Visual Studio.

 📍 **Backend Implementation:**

Serverless functions handle API requests and data processing. Steps include:

1. Registering at Azure and OpenWeather.
2. Creating a resource group in Azure.
3. Creating a function app in a previously created resource group in Azure.
4. Creating a function in function app to retrieve data from OpenWeather using its API key (the code is provided at ```backend/GetWeatherData```).
5. Creating another function in function app to retrieve historical weather data from Azure Cosmos DB and send it to the frontend (the code is provided at ```backend/GetWeatherHistory```).
6. Testing of functions to ensure correct data retrieval and display.

 📍 **Database Integration:**

Utilizing Azure Cosmos DB for storing and retrieving historical weather data involves:

1. Creating a database and containers for storing data.
2. Designing a schema that supports quick access and search based on timestamps and locations.
3. Testing the database functions to ensure efficient data handling.

 📍 **API Integration:**

Connecting the web interface with Azure functions and the database to fetch weather data involves:

1. Connecting the JS file (web interface) with Azure (functions and database).
2. Testing the integration to ensure seamless data flow.

## 📌 Tools and Technologies
- **Microsoft Azure:** Cloud platform for hosting the application, utilizing services such as Azure Functions, Azure API Management, and Azure Cosmos DB.
- **OpenWeatherMap API:** Source for real-time weather data.
- **HTML/CSS/JavaScript:** For creating the web interface.
- **Node.js:** For backend functions facilitating asynchronous API communication.
- **Data Structures:** JSON for data handling and responses between the API server functions and the frontend.

## 📌 Getting Started
 📍 **Prerequisites:**

- Azure and OpenWeatherMap accounts.
- OpenWeatherMap and Azure components API keys.

 📍 **Installation:**

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

## 📌 Usage
1. Access the Web Interface: Open the HTML file in a web browser.
2. Input a Location: Enter the desired location to retrieve current weather information.
3. View Historical Data: Access previously retrieved weather data stored in Azure Cosmos DB.

## 📌 Screenshots

![1](https://github.com/user-attachments/assets/b4ca0d2d-6a76-46bf-9702-db33cfb39575)

![5](https://github.com/user-attachments/assets/31cfb27e-625e-438a-adcf-980b0e84fe78)

![3](https://github.com/user-attachments/assets/7682ee8f-5f14-4f62-b163-9f2506ea5693)

![4](https://github.com/user-attachments/assets/dd51c481-a1b9-4a2a-a339-6ee7b0f0af8b)

## 📌 Live Demo

![weatherreportappgif](https://github.com/user-attachments/assets/05c2fa2d-ccca-4da6-ac26-b4ad490b9c7b)

## 📌 Credits

Here're the credits to **OpenWeatherMap API** used in development:

<p align="center">
 <a href="https://openweathermap.org/" title="OpenWeatherMap API"> <img src="https://img.shields.io/badge/API-OpenWeatherMap-F05023?style=for-the-badge&logo=openweathermap&logoColor=white" alt="OpenWeatherMap API"> </a>
</p>
