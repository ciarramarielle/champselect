// This will have our ExpressJS configuration
var path = require("path"); // still need to npm install
var rootPath = path.normalize(__dirname+"/../../");


module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 8080,
        host: process.env.HOST || "localhost"
    }
}
