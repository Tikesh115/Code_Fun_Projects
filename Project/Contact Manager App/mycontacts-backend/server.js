const express = require("express");     //imports express module
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

connectDB();
const app = express();                  //creates an instance of express application

const port = process.env.PORT || 5000;  //check if in .env file PORT is defined or not or use default variable 5000                    //sets the port number    

app.use(express.json());               //middleware to parse incoming JSON requests and put the parsed data in req.body
app.use("/api/contacts", require("./routes/ContactRoutes"));  
app.use("/api/users", require("./routes/userRoutes"));         
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});                                                         //starts the server and listens on the specified port
