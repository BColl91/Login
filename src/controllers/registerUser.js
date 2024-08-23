// Import the User model from the database models
const User = require("../db/models/users");
// Import bcrypt if password hashing is needed in the future (commented out for now)
// const bcrypt = require("bcrypt");

// Async function to handle user registration
async function registerUser(req, res) {
    try {
        // Password hashing (commented out since it's handled in middleware)
        // saltRounds = parseInt(process.env.SALT_ROUNDS);
        // plainTextPassword = req.body.password;
        // const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
        // console.log(hashedPassword);

        // Create a new user in the database using the request body data
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password // Assume password is already hashed by middleware
        });

        // Send a 201 response indicating that the user has been created successfully
        res.status(201).send(`User ${req.body.username} has been created.`);
    } catch (error) {
        // Log any errors to the console for debugging
        console.log(error);

        // Send a 418 (I'm a teapot) response for database errors with an error message
        res.status(418).json({
            msg: "Database Error",
            error: error
        });
    }
}

// Export the registerUser function so it can be used in the router
module.exports = registerUser;
