// Import bcrypt, a library used for hashing passwords
const bcrypt = require("bcrypt");

// Middleware function to hash the password before storing it in the database
const hashPassword = async (req, res, next) => {
    try {
        // Extract the plain text password from the request body
        const plainTextPassword = req.body.password;

        // Get the number of salt rounds from the environment variables
        const saltRounds = parseInt(process.env.SALT_ROUNDS);

        // Hash the plain text password using bcrypt and the specified salt rounds
        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

        // Replace the plain text password with the hashed password in the request body
        req.body.password = hashedPassword;

        // Call next() to pass control to the next middleware or route handler
        next();
    } catch (error) {
        // Log any errors to the console
        console.log(error);

        // If an error occurs, send a 500 (Internal Server Error) response with a message and the error details
        res.status(500).json({
            message: "Internal server error",
            error: error
        });
    } 
}

// Export the hashPassword middleware function so it can be used in routes
module.exports = hashPassword;
