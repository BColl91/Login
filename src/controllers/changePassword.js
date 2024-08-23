// Import the User model from the database models
const User = require("../db/models/users");

// Import bcrypt, a library used for hashing passwords
const bcrypt = require("bcrypt");

// Async function to handle updating a user's password
async function updatePassword(req, res) {
    try {
        // Retrieve the number of salt rounds for hashing from environment variables
        const saltRounds = parseInt(process.env.SALT_ROUNDS);

        // Hash the new password provided in the request body
        const hashedNewPassword = await bcrypt.hash(req.body.newPassword, saltRounds);
        console.log(hashedNewPassword); // Log the hashed password for debugging

        // Update the user's password in the database where the email matches
        const result = await User.update(
            { password: hashedNewPassword },
            { where: { email: req.body.email } }
        );
        console.log(result); // Log the result of the update operation

        // Send a 200 response indicating the password has been updated
        res.status(200).json({
            message: "Password updated",
            results: result
        });
    } catch (error) {
        // Log any errors that occur during the password update process
        console.log(error);

        // Send a 500 (Internal Server Error) response with an error message
        res.status(500).json({
            message: "Oops, password not updated",
            errorMessage: error
        });
    }
}

// Export the updatePassword function so it can be used in the router
module.exports = updatePassword;
