// npm install express --save

// Start ExpressJS application
var express = require("express");
var app = express();


// Configure ExpressJS depending on the env (NodeJS)
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require("./src/server/config.js")[env];
require("./src/server/express.js")(app, config);


// Start NodeJS on configured port
app.listen(config.port, '0.0.0.0'); // 0.0.0.0 to allow any IP.
console.log("Listening on " + config.host + ":" + config.port);
