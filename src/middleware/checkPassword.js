// Import bcrypt, a library for comparing hashed passwords
const bcrypt = require("bcrypt");

// Import the User model from the database models
const User = require("../db/models/users");

// Middleware function to check if the provided password matches the stored hashed password
const checkPassword = async (req, res, next) => {
    try {
        // Extract the plain text password from the request body
        const plainTextPassword = req.body.password;
        console.log(plainTextPassword);

        // Retrieve the user details from the database using the email from the request body
        const userDetails = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        // Log the user details for debugging purposes
        console.log(userDetails);

        // Extract the stored hashed password from the retrieved user details
        const hashedPassword = userDetails.password;
        console.log(hashedPassword);

        // Compare the provided plain text password with the stored hashed password
        const check = await bcrypt.compare(plainTextPassword, hashedPassword);
        console.log(check);

        // If the passwords match, call next() to pass control to the next middleware or route handler
        if (check === true) {
            next();
        } else {
            // If the passwords do not match, send a 400 (Bad Request) response with a message
            res.status(400).send("Password incorrect");
        }
    } catch (error) {
        // Log any errors to the console
        console.log(error);

        // If an error occurs, send a 500 (Internal Server Error) response with a message and the error details
        res.status(500).json({
            message: "Oops, something went wrong...",
            errorMessage: error
        });
    }    
}

// Export the checkPassword middleware function so it can be used in routes
module.exports = checkPassword;
