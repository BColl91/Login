// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Express framework
const express = require("express");

// Import the database connection configuration
const SQLconnection = require("./db/connection");

// Import the User model from the database models
const User = require("./db/models/users");

// Import the user router to handle user-related routes
const userRouter = require("./routes/userRoutes");

// Create an instance of an Express application
const app = express();

// Middleware to automatically parse incoming JSON request bodies
app.use(express.json());

// Set the port from the environment variable or default to 5002
const port = process.env.PORT || 5002;

// Define a simple health check route
app.get("/health", (req, res) => res.status(200).send("API is healthy"));

// Use the userRouter middleware to handle user routes
app.use(userRouter);

// Synchronize the User model with the database, potentially altering the schema
User.sync({ alter: true });

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server is listening on port ${port}`));
