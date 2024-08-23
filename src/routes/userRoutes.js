// Import the Router from Express for creating modular route handlers
const { Router } = require("express");

// Import the controller that handles user registration
const registerUser = require("../controllers/registerUser");

// Import middleware to hash passwords before saving to the database
const hashPassword = require("../middleware/hashPassword.js");

// Import the controller that lists all users
const listUsers = require("../controllers/listUsers");

// Import middleware to check if the provided password is correct
const checkPassword = require("../middleware/checkPassword");

// Import the controller that deletes a user from the database
const deleteUser = require("../controllers/deleteUser");

// Import the controller that handles updating user passwords
const updatePassword = require("../controllers/changePassword");

// Import the controller that handles user login
const login = require("../controllers/login.js");

// Import middleware to verify the validity of authentication tokens (JWT or similar)
const checkToken = require("../middleware/checkToken.js");

// Create a new instance of an Express Router to handle user-related routes
const userRouter = Router();

// Define a POST route for user registration
// Before registering the user, the hashPassword middleware hashes the password
userRouter.post("/users/register", hashPassword, registerUser);

// Define a GET route to list all users
// The checkToken middleware verifies if the user is authenticated before proceeding
userRouter.get("/users/listUsers", checkToken, listUsers);

// Define a DELETE route to remove a user
// The checkToken middleware ensures the user is authenticated before deletion
userRouter.delete("/users/deleteUser", checkToken, deleteUser);

// Define a PUT route to update the user's password
// The checkToken middleware ensures the user is authenticated before updating the password
userRouter.put("/users/updatePassword", checkToken, updatePassword);

// Define a POST route for user login
// The checkPassword middleware verifies the user's password before logging in
userRouter.post("/users/login", checkPassword, login);

// Export the userRouter so it can be used in the main server file
module.exports = userRouter;
