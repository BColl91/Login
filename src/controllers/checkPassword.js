const bcrypt = require("bcrypt");

const hashedPassword = "$2b$10$9SJhff1NqkFxjm72ctBcjuotsVX6PalZRPcBC5ZKoC/7HbuADJolS";
const plainTextPassword = "usethreewords"

async function checkPassword() {
    const result = await bcrypt.compare(plainTextPassword,hashedPassword);
    console.log(result);
}

checkPassword();