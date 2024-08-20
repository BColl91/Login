const {Sequelize} = require("sequelize");

const SQLconnection = new Sequelize(process.env.MYSQL_URI);

try {
    SQLconnection.authenticate();
    console.log("Successfully connected to Database");}
catch (error) {
    console.log(error);}

module.exports = SQLconnection;