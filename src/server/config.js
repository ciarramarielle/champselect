var path = require("path");
var rootPath = path.normalize(__dirname +"/../../");
var dotenv = require("dotenv").config();

// This is also where I should configure the MongoDB (if I get one... :))
module.exports ={
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 8080,
        host: process.env.HOST || "localhost",
        riot_api_key: process.env.RIOT_API_KEY
    }
    ,
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80,
        host: process.env.HOST || "https://champselect.herokuapp.com/",
        riot_api_key: process.env.RIOT_API_KEY
    }
}
