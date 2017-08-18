// This is where I can configure EXPRESSJS.
const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

module.exports = (app, config) => {
    app.use(bodyParser.urlencoded({
        extended: true
    })); // enable url-encoded bodies
    app.use(bodyParser.json()); //enable json-encoded bodies

    // To enable CORS... this only works on DEV environment currently. :(
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin, Accept');
        next();
    }

    app.use(allowCrossDomain);

    // Static routing for anything inside root/src/client
    app.use(express.static(config.rootPath + "src/client"));

    // Static routing for anything inside root/bower_components
    app.use('/bower_components', express.static(config.rootPath + "bower_components"));


    // Set express <views> = <root>/src/client
    app.set('views', config.rootPath + 'src/client');

    // Set express "view engine"
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);


    app.get("/", function(req, res) {
        res.render("index.html");// looks inside VIEWS
    });


	/* RIOT API ROUTES */
	require('./routes/riotapi')(app, config)

    // For now, route everything else to <views>/index.html
    app.get("*", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });
};
