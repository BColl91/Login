// Import the SQLconnection instance to interact with the database
const SQLconnection = require("../connection");

// Import DataTypes from Sequelize, which provides data type definitions for models
const { DataTypes } = require("sequelize");

// Define the User model, which represents the "User" table in the database
const User = SQLconnection.define("User", {
    // Define the user_id field as a BIGINT, auto-incrementing, and the primary key
    user_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false // This field cannot be null
    },
    // Define the username field as a string, unique and not null
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    // Define the email field as a string, unique and not null
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    // Define the password field as a string, non-unique (it’s not required to be unique)
    password: {
        type: DataTypes.STRING,
        unique: false
    }
});

// Export the User model so it can be used in other parts of the application
module.exports = User;
