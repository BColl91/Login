// Import the User model from the database models
const User = require("../db/models/users");

// Async function to handle deleting a user from the database
async function deleteUser(req, res) {
    try {
        // Attempt to delete a user based on the provided email
        const result = await User.destroy({
            where: {
                email: req.body.email
            }
        });

        // Log the result of the delete operation for debugging purposes
        console.log(result);

        // Send a 200 response indicating that the user has been deleted
        res.status(200).send(`User ${req.body.email} deleted`);
    } catch (error) {
        // Log any errors to the console for debugging
        console.log(error);

        // Send a 500 (Internal Server Error) response with an error message
        res.status(500).json({
            message: "Delete failed",
            errorMessage: error
        });
    }
}

// Export the deleteUser function so it can be used in the router
module.exports = deleteUser;
