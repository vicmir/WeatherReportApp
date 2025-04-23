# 🌤 Weather Report App

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

- HTML/CSS/JavaScript via Visual Studio

![image](https://github.com/user-attachments/assets/8fbf3631-5a2e-4453-8882-f6d38a23dccf)

 📍 **Backend Implementation:**

Serverless functions handle API requests and data processing. Steps include:

1. Registering at Azure and OpenWeather.
2. Creating a resource group in Azure.

![photo_2025-04-23_16-59-56](https://github.com/user-attachments/assets/c128ae12-4745-491f-9533-1f30d6ce1a80)

3. Creating a function app in a previously created resource group in Azure.

![photo_2025-04-23_17-00-18](https://github.com/user-attachments/assets/20171ed9-a445-44ba-9f59-11a763bf4e82)

4. Creating a function in function app to retrieve data from OpenWeather using its API key (the code is provided at ```backend/GetWeatherData```).

![image](https://github.com/user-attachments/assets/1f220aee-2303-4785-90fd-f2789fc19aa2)

5. Creating another function in function app to retrieve historical weather data from Azure Cosmos DB and send it to the frontend (the code is provided at ```backend/GetWeatherHistory```).

![image](https://github.com/user-attachments/assets/fa06f8ab-8fbc-44bb-8360-d9b6ca3f4ca9)

6. Testing of functions to ensure correct data retrieval and display.

![image](https://github.com/user-attachments/assets/64942dfb-dc1c-4f98-a9f3-effa5422ae6d)
![image](https://github.com/user-attachments/assets/8ec15009-090e-4f4c-812a-d1ab39727506)

 📍 **Database Integration:**

Utilizing Azure Cosmos DB for storing and retrieving historical weather data involves:

1. Creating a database and containers for storing data.
2. Designing a schema that supports quick access and search based on timestamps and locations.
3. Testing the database functions to ensure efficient data handling.

![photo_2025-04-23_17-02-36](https://github.com/user-attachments/assets/f258488f-69e2-4019-a151-2f23b9853f82)

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
- OpenWeatherMap API key.

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

***
![photo_2025-04-23_17-07-25](https://github.com/user-attachments/assets/f63bbe00-c000-4733-a16c-b769735f2645)

![photo_2025-04-23_17-07-55](https://github.com/user-attachments/assets/0c258db7-74d5-4d5c-a9a6-6e6bafd0c645)

![photo_2025-04-23_17-08-17](https://github.com/user-attachments/assets/00a10e98-063b-4163-b956-1144be4a496b)

![photo_2025-04-23_17-08-37](https://github.com/user-attachments/assets/e2cec566-0138-4d9d-bc1f-7df9257bfb85)

## 📌 Live Demo

![clideo_editor_56cd4c2374884a9b9258628091299af0](https://github.com/vicmir/WeatherReportApp/assets/79836020/3bb7d19d-730e-4674-9e33-c6598d09483f)
