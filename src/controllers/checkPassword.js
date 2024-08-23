// Import bcrypt, a library used for hashing and comparing passwords
const bcrypt = require("bcrypt");

// Example hashed password stored in the system (usually this would come from a database)
const hashedPassword = "$2b$10$9SJhff1NqkFxjm72ctBcjuotsVX6PalZRPcBC5ZKoC/7HbuADJolS";

// Example plain text password that needs to be checked against the hashed password
const plainTextPassword = "usethreewords";

// Async function to check if the provided plain text password matches the hashed password
async function checkPassword() {
    try {
        // Compare the plain text password with the hashed password using bcrypt
        const result = await bcrypt.compare(plainTextPassword, hashedPassword);
        
        // Log the result of the comparison (true if they match, false otherwise)
        console.log(result);
    } catch (error) {
        // Log any errors that occur during the comparison
        console.log(error);
    }
}

// Call the checkPassword function to perform the password comparison
checkPassword();
