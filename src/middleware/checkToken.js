// Import the jsonwebtoken (jwt) library to handle JWT creation and verification
const jwt = require("jsonwebtoken");

// Import the User model from the database models
const User = require("../db/models/users");

// Middleware function to check the validity of the JWT token
async function checkToken(req, res, next) {
    try {
        // Extract the token from the Authorization header and remove the "Bearer " prefix
        const token = req.header("Authorization").replace("Bearer ", "");

        // Get the private key for verifying the token from the environment variables
        const privateKey = process.env.JWT_KEY;

        // Verify the token using the private key
        const decodedtoken = await jwt.verify(token, privateKey);

        // Log the decoded token for debugging purposes
        console.log(decodedtoken);

        // Extract the email from the decoded token payload
        const userEmail = decodedtoken.email;

        // Check if a user with the extracted email exists in the database
        const checkUserExists = await User.findOne({ where: { email: userEmail } });

        // If no user is found, throw an error indicating the user no longer exists
        if (!checkUserExists) {
            throw new Error("User no longer in database");
        } else {
            // If the user exists, attach the user's email to the request body for further processing
            req.body.email = userEmail;

            // Call next() to pass control to the next middleware or route handler
            next();
        }
    } catch (error) {
        // Log any errors to the console
        console.log(error);
        if (error === "User no longer in database"){
            res.status(500).json({
                errorMessage: "User no longer exists!",
                message: "User no longer exists!"
        })
        } else {
            res.status(500).json({
                message: "Token Check Failed",
                errorMessage: error
        });
    }
}}

// Export the checkToken middleware function so it can be used in routes
module.exports = checkToken;
