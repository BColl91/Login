// User model is imported from the database models
const User = require("../db/models/users");

// Importing bcrypt- a library used for hashing passwords
const bcrypt = require("bcrypt");

// Async function that handles updating a user's password
async function updatePassword(req, res) {
    try {
        // Retrieve the number of salt rounds for hashing from environment variables
        const saltRounds = parseInt(process.env.SALT_ROUNDS);

        // Hash the new password provided in the request body
        const hashedNewPassword = await bcrypt.hash(req.body.newPassword, saltRounds);
        console.log(hashedNewPassword); //hashed password logged for debugging

        // Update the user's password in the database where the email matches
        const result = await User.update(
            { password: hashedNewPassword },
            { where: { email: req.body.email } }
        );
        console.log(result); // Log the result of the update operation

        //200 response would be sent indicating the password has been updated
        res.status(200).json({
            message: "Password updated",
            results: result
        });
    } catch (error) {
        //console log added incase any errors occur (this will help locate and debug the issue)
        console.log(error);
        res.status(500).json({
            message: "Oops, password not updated",
            errorMessage: error
        });
    }
}

// updatePassword exported so that it can be used in the router
module.exports = updatePassword;
