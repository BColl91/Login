const User = require("../db/models/users");

async function deleteUser(req,res) {
    try {
        const result = await User.destroy({
            where: {
                email: req.body.email
            }
        })
        console.log(result);
        res.status(200).send(`User ${req.body.email} deleted`);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "delete failed",
            errorMessage: error
        })
    }
}

module.exports = deleteUser