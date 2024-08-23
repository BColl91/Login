// Import the jsonwebtoken (jwt) library to create and sign JWTs
const jwt = require("jsonwebtoken");

// Async function to handle user login and generate a JWT
async function login(req, res) {
    try {
        // // Define the token expiration time (7 days)
        // const expirationTime = 1000 * 60 * 60 * 24 * 7;
        // // Set the options for the token, including expiration time
        // const options = {
        //     expiresIn: expirationTime
        // };

        const options = {
            expiresIn: '7d' // 7 days
        };

        // Define the payload for the token, which includes the user's email and username
        const payload = {
            email: req.body.email,
            username: req.body.email // Assuming username is same as email, adjust as necessary
        };

        // Retrieve the private key for signing the token from environment variables
        const privateKey = process.env.JWT_KEY;

        // Sign the token with the payload, private key, and options
        const token = jwt.sign(payload, privateKey, options);

        // Log the generated token for debugging purposes
        console.log(token);

        // Send a 200 response with the generated JWT token and the user's email
        res.status(200).json({
            message: "JWT Token created",
            token: token,
            email: req.body.email
        });
    } catch (error) {
        // Log any errors to the console for debugging
        console.log(error);

        // Send a 500 (Internal Server Error) response with a message and the error details
        res.status(500).json({
            message: "Login error",
            errorMessage: error
        });
    }
}

// Export the login function so it can be used in the router
module.exports = login;
