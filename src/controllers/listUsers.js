// Import the User model from the database models
const User = require("../db/models/users");

// Async function to handle listing all users from the database
const listUsers = async (req, res) => {
    try {
        // Retrieve all users from the User model
        const listOfAllUsers = await User.findAll({});

        // Send a 200 response with a message and the list of users
        res.status(200).json({
            message: "List of all users in the table is as follows:",
            userlist: listOfAllUsers
        });
    } catch (error) {
        // Log any errors to the console for debugging
        console.log(error);

        // Send a 500 (Internal Server Error) response with an error message
        res.status(500).json({
            error_message: error
        });
    }
};

// Export the listUsers function so it can be used in the router
module.exports = listUsers;
