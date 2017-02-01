// This will have the main ExpressJS code
var express = require("express"),
    bodyParser = require("body-parser");


module.exports = function(app, config) {
    // enable URLencode and JSON bodies
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // enable JSON bodies
    app.use(bodyParser.json());

    // static routing for <root>/{stuff}
    app.use(express.static(config.rootPath+ "src/client"));

    // static routing for bower components
    app.use('/bower_components', express.static(config.rootPath + '/bower_components'))

    // <views> definition
    app.set("views", config.rootPath+"src/client");

    // set <views> engine
    app.set("view engine", "html");

    // last time I needed ejs to render html ;(
    app.engine("html", require("ejs").renderFile);


    // for all routing render index from <views>
    app.get("*", function(req, res) {
        res.render("index.html");
    })
}
