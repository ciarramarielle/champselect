// This will have the main ExpressJS code
var express = require("express"),
    bodyParser = require("body-parser");


module.exports = function(app, config) {
    // enable URLencode bodies
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // enable JSON bodies
    app.use(bodyParser.json());

    /* ROUTING */
    /* Static routes, so I can use these paths within the client */
    // any file in src/client can be called by the path inside src/client
    app.use(express.static(config.rootPath+ "src/client"));
    // static routing for bower components
    app.use('/bower_components', express.static(config.rootPath + '/bower_components'))
    /* API Routes */
    var routes = require('./routes/riotapi')(app);



    /* Telling Express where to find the <views> */
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
