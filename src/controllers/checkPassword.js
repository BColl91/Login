//bcrypt is imported, which is a library used for hashing and comparing passwords
const bcrypt = require("bcrypt");

// Example hashed password stored in the system (usually this would come from a database)
const hashedPassword = "$2b$10$9SJhff1NqkFxjm72ctBcjuotsVX6PalZRPcBC5ZKoC/7HbuADJolS";

// Example plain text password that needs to be checked against the hashed password
const plainTextPassword = "usethreewords";

// Async function that checks if the provided plain text password matches the hashed password
async function checkPassword() {
    try {
        //plain text password is compared with the hashed password using bcrypt
        const result = await bcrypt.compare(plainTextPassword, hashedPassword);
        
        //Result of the comparison is logged(true if they match, false otherwise)
        console.log(result);
    } catch (error) {
        // Log any errors again to help locate and debug
        console.log(error);
    }
}

//the checkPassword function is called to perform the password comparison
checkPassword();
