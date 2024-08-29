// Import Sequelize, a promise-based Node.js ORM (Object-Relational Mapping) for working with SQL databases
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance, passing in the database connection URI from the environment variables
// const SQLconnection = new Sequelize(process.env.MYSQL_URI);

const SQLconnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {host: process.env.DB_HOST,
    dialect: process.env.DIALECT}
);
// Try to authenticate the connection to the database
try {
    // Attempt to authenticate with the database using the connection configuration
    SQLconnection.authenticate();
    
    // If the connection is successful, log a success message to the console
    console.log("Successfully connected to Database");
} catch (error) {
    // If an error occurs during authentication, log the error to the console
    console.log(error);
}

// Export the SQLconnection object so it can be used in other parts of the application
module.exports = SQLconnection;
