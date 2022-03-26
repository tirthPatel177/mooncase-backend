/**
Project: moon case
version : v0.1
author : 
desc : heart of the application.database connection , middleware parsing,request and response formatting occurs here.
*/


//Loading Basic Modules
const mongoose = require('mongoose');
const express = require('express');
var app = express();

//Require .env
require('dotenv').config({ path: __dirname + '/.env' });

//Require MiddleWare
const cors = require('cors');

//Helmet
const helmet = require("helmet");

//Require Swagger Modules
const swaggerJsDoc = require("swagger-jsdoc");
const SwaggerUi = require("swagger-ui-express");


const auction = require("./Routers/case");

//Making Secure Connection Use This Connection String
// var connection_string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`
var connection_string = `mongodb://localhost:27017/mooncase`;

//Making Connection
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.log(`Error connecting Database: ${err}`)
    })

//Using MiddleWare
//Adding the headers for the requests/response

app.use(express.json());

//CORS options
const corsOptions = {
    origin: '*',
    //methods:'GET,PUT,POST'
}

//Cors
app.use(cors(corsOptions));

//helmet used to block security vulnerabilities
app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use("/api", auction)

//Making Swagger 
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Moon Case",
            version: "1.0.0",
            description: "A documentation for Moon Case",
        },
        servers: [
            {
                url: "http://localhost:8000/",
            }
        ],
    },
    apis: ["./Docs/*.js", "./Docs/*/*.js"],
};

//Making Swagger Call
const swaggerDocs = swaggerJsDoc(options);

console.log(`swaggerDocs is running on http://localhost:${process.env.APPLICATION_PORT}/api-docs`);
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));


//Making app live on this port 
app.listen(process.env.APPLICATION_PORT, () => {
    console.log(`Copper apis is running on ${process.env.APPLICATION_PORT}`);
});