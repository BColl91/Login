const SQLconnection = require("../connection");
const {DataTypes} = require("sequelize");

const User = SQLconnection.define("User",{
    user_id: {
        type: DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey: true,
        unique:true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        unique: false,
    }
})

module.exports = User;