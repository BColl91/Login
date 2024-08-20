require("dotenv").config();
const express = require("express");
const SQLconnection = require("./db/connection");
const User = require("./db/models/users");
const userRouter = require("./routes/userRoutes");
const app = express();
app.use(express.json())

const port = process.env.PORT || 5002;

app.get("/health",(req,res) => res.status(200).send("API is healthy"));

app.use(userRouter);

User.sync({alter:true});

app.listen(port, () => console.log(`Server is listening on port ${port}`));