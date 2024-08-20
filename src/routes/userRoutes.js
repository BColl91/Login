const {Router} = require("express");
const registerUser = require("../controllers/registerUser");
const hashPassword = require("../middleware/hashPasword");
const listUsers = require("../controllers/listUsers");
const checkPassword = require("../middleware/checkPassword");
const deleteUser = require("../controllers/deleteUser");
const updatePassword = require("../controllers/changePassword");

const userRouter = Router();

userRouter.post("/users/register",hashPassword, registerUser);
userRouter.get("/users/listUser",checkPassword,listUsers);
userRouter.delete("/users/deleteUser",checkPassword,deleteUser);
userRouter.put("/users/updatePassword",checkPassword,updatePassword)


module.exports = userRouter;