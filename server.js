// NodeJS Server file
var express = require('express');
var app = express();
// later need dotenv (npm install)

// Get configuration according to current environment.
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require("./src/server/config.js")[env];

// Express code inside express.js
require("./src/server/express.js")(app, config);

// Start NodeJS on configurations above host:port
app.listen(config.port, "0.0.0.0"); // allow all IP's
console.log("App is running at: " + config.host + ":" + config.port);
