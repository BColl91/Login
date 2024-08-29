require("dotenv").config(); // Load environment variables from a .env file into process.env
const express = require("express"); // Import the Express framework
const cors = require("cors");
const app = express(); // Create an instance of an Express application
app.use(express.json()); // Middleware to automatically parse incoming JSON request bodies
const User = require("./db/models/users"); // Import the User model from the database models
const userRouter = require("./routes/userRoutes"); // Import the user router to handle user-related routes

const SQLconnection = require("./db/connection"); // Import the database connection configuration

const port = process.env.PORT || 5002; // Set the port from the environment variable or default to 5002

app.get("/health", (req, res) => res.status(200).send("API is healthy")); // Define a simple health check route
app.use(cors());
app.use(userRouter); // Use the userRouter middleware to handle user routes
User.sync({ alter: true }); // Synchronize the User model with the database, potentially altering the schema
app.listen(port, () => console.log(`Server is listening on port ${port}`)); // Start the server and listen on the specified port
