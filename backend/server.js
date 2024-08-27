// imports for the server 
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const {ConnectDB} = require("./config/Db");

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// running the server on port by first checking the condition if the Connection is successfully build with database Atlas  
const Port = 6000;
// ConnectDB().then(()=>{
    app.listen(Port,()=>{
        console.log(`Server successfully running on port no http://localhost:${Port}/`)
    })
// })
