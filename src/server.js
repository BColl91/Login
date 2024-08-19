require("dotenv").config();
const express = require("express");
const app = express();


const port = process.env.PORT || 5002;

app.get("/health", (req,res) => res.status(200).send("Server API is healthy"));

app.listen(port,() => console.log(`Server running on port ${port}`));