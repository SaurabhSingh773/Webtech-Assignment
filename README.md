Full-Stack Web Application with Node.js, Express, and MongoDB

Overview
This project demonstrates the development of a full-stack web application using Node.js, Express, and MongoDB. It includes features for managing user data and performing CRUD (Create, Read, Update, Delete) operations.

Features
Frontend: Utilizes EJS (Embedded JavaScript) templates for dynamic HTML rendering.
Backend: Implements RESTful APIs with Express.js for handling HTTP requests.
Database: Integrates MongoDB for data storage and retrieval.
User Registration: Allows users to register with their name, email, and password.
Static File Serving: Serves static files (e.g., CSS, JavaScript) from the 'public' directory.
Error Handling: Provides error handling for database operations and server requests.

Project Structure
public/: Contains static files (e.g., CSS, JavaScript) served by the application.
views/: Contains EJS templates for rendering dynamic HTML content.
app.js: Main entry point of the application where routes and middleware are defined.
package.json: Manages project dependencies and scripts.

Getting Started
Clone the repository: git clone <repository-url>
Install dependencies: npm install
Start the server: npm start
Access the application in your browser at http://localhost:3000

Dependencies
Express.js: Web application framework for Node.js
MongoDB: NoSQL database for storing application data
EJS: Templating engine for generating HTML with JavaScript
