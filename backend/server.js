    // imports for the server 
    const express = require("express");
    const app = express();
    require("dotenv").config(); 
    const bodyParser = require("body-parser");
    const { ConnectDB } = require("./config/Db");

    // middlewares
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // routes 
    app.use("/api/useraccount",require("./routers/userAccountRoute"));

    // running the server on port by first checking the condition if the Connection is successfully build with database Atlas  
    const Port =  5000;
    ConnectDB().then(()=>{
        app.listen(Port,()=>{
            console.log(`Server successfully running on port no http://localhost:${Port}/`)
        })
    })
