const User = require("../db/models/users");
// const bcrypt = require("bcrypt");


async function registerUser(req,res) {
    try {
        // saltRounds = parseInt(process.env.SALT_ROUNDS);
        // plainTextPassword = req.body.password;
        // const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
        // console.log(hashedPassword);
        const user = await User.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        );
        res.status(201).send(`User ${req.body.username} has been created.`)
    } catch (error) {
        console.log(error);
        res.status(418).json({
            msg: "Database Error",
            error: error
        })
    }
}

module.exports = registerUser;