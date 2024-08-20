const jwt = require("jsonwebtoken");

async function login(req,res) {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "login error",
            errorMessage: error
        })
    }
}