const User = require("../db/models/users");

const listUsers = async(req,res) => {
    try {
        const listOfAllusers = await User.findAll({});
        res.status(200).json({
            message: "List of all users in the table is as follows: ",
            userlist: listOfAllusers
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error_message: error})
    }
}

module.exports = listUsers