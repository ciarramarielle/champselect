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
    app.get('/api/riot/getChampions', function(req, res) {
        request(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${config.riot_api_key}`,
          function (err, response, body) {
            if (err) {
              res.send(Error('Not able to find champion data.'));
            }
            res.send(body);
          }
        )
    });

	app.get('/api/riot/getSummoner/:summonerName', function(req, res) {
		request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.summonerName}?api_key=${config.riot_api_key}`,
			function(err, response, body) {
	            if (err) {
	              res.send(Error('Not able to find summoner data.'));
	            }
				res.send(body);
		})
	});

	app.get('/api/riot/getChampion/:championId', function(req, res) {
		request(`https://na.api.pvp.net/api/lol/na/v1.4/champion/by-name/${req.params.championId}?api_key=${config.riot_api_key}`,
			function(err, response, body) {
	            if (err) {
	              res.send(Error('Not able to find champion data.'));
	            }
				res.send(body);
		})
	});

    app.get('/api/riot/matchlist/:accountId', function (req, res) {
            // request(`https://na.api.pvp.net/api/lol/na/v1.4/champion/by-name/${req.params.championId}?api_key=${config.riot_api_key}`,
            request(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${req.params.accountId}?api_key=${config.riot_api_key}`,
                function(err, response, body) {
                    if (err) {
                    res.send(Error('Not able to find matchlist data.'));
                    }
                    res.send(body);
            })
        });

    app.get('/api/riot/champion/:champId', (req, res) => {
        request(`https://na1.api.riotgames.com/lol/static-data/v3/champions/${req.params.champId}?api_key=${config.riot_api_key}`,
            (err, response, body) => {
                if (err) {
                    res.send(Error('Not able to find matchlist data.'))
                }
                res.send(body)
            })
    })

    // For now, route everything else to <views>/index.html
    app.get("*", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });
};
