const { Router } = require("express"); // Import the Router from Express for creating modular route handlers
const userRouter = Router(); // Create a new instance of an Express Router to handle user-related routes

const registerUser = require("../controllers/registerUser"); // Import the controller that handles user registration
const listUsers = require("../controllers/listUsers"); // Import the controller that lists all users
const deleteUser = require("../controllers/deleteUser"); // Import the controller that deletes a user from the database
const updatePassword = require("../controllers/changePassword"); // Import the controller that handles updating user passwords
const login = require("../controllers/login.js"); // Import the controller that handles user login


const checkToken = require("../middleware/checkToken.js"); // Import middleware to verify the validity of authentication tokens (JWT or similar)
const checkPassword = require("../middleware/checkPassword"); // Import middleware to check if the provided password is correct
const hashPassword = require("../middleware/hashPassword.js"); // Import middleware to hash passwords before saving to the database
 
// Before registering the user, the hashPassword middleware hashes the password
userRouter.post("/users/register", hashPassword, registerUser); // Define a POST route for user registration

// The checkToken middleware verifies if the user is authenticated before proceeding
userRouter.get("/users/listUsers", checkToken, listUsers); // Define a GET route to list all users

// The checkToken middleware ensures the user is authenticated before deletion
userRouter.delete("/users/deleteUser", checkToken, deleteUser); // Define a DELETE route to remove a user

// The checkToken middleware ensures the user is authenticated before updating the password
userRouter.put("/users/updatePassword", checkToken, updatePassword); // Define a PUT route to update the user's password

// The checkPassword middleware verifies the user's password before logging in
userRouter.post("/users/login", checkPassword, login); // Define a POST route for user login


module.exports = userRouter; // Export the userRouter so it can be used in the main server file
