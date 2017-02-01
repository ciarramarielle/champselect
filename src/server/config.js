// This will have our ExpressJS configuration
var path = require("path"); // still need to npm install
var rootPath = path.normalize(__dirname+"/../../");
var dotenv = require("dotenv").config();

module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 8080,
        host: process.env.HOST || "localhost",
        RIOT_API_KEY: process.env.RIOT_API_KEY
    }
}
