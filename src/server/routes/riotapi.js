const request = require("request")



// FIXME: Using mock data temporarily while can't retrieve API Key
module.exports = (app, config) => {

    getData = (url, res) => {
        // FIXME: might have to retrieve config.riot_api_key somewhere first
        // request(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${config.riot_api_key}`,

        // FIXME: Should look something like this...
        // request(url, (err, response, body) => {
        //         if (err) {
        //             res.send(Error('Not able to find champion data.'));
        //         }
        //         res.send(body);
        //     }
        // )

        res.send({"data": {"champ": "champs"}})
    }

    app.get('/api/riot/getChampions', function(req, res) {
        getData(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${config.riot_api_key}`, res)
        // request(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${config.riot_api_key}`,
        //     function (err, response, body) {
        //         if (err) {
        //             res.send(Error('Not able to find champion data.'));
        //         }
        //         res.send(body);
        //     }
        // )
    });

    app.get('/api/riot/getSummoner/:summonerName', (req, res) => {
        // request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.summonerName}?api_key=${config.riot_api_key}`,
        //     function(err, response, body) {
        //         if (err) {
        //             res.send(Error('Not able to find summoner data.'));
        //         }
        //         res.send(body);
        //     })
        res.send({"a": "b"})
        return {"a": "b"}
    });

    app.get('/api/riot/getChampion/:championId', (req, res) => {
        getData(`https://na.api.pvp.net/api/lol/na/v1.4/champion/by-name/${req.params.championId}?api_key=${config.riot_api_key}`, res)
        // request(`https://na.api.pvp.net/api/lol/na/v1.4/champion/by-name/${req.params.championId}?api_key=${config.riot_api_key}`,
        //     function(err, response, body) {
        //         if (err) {
        //             res.send(Error('Not able to find champion data.'));
        //         }
        //         res.send(body);
        //     })
    });

    app.get('/api/riot/matchlist/:accountId', (req, res) => {
        // request(`https://na.api.pvp.net/api/lol/na/v1.4/champion/by-name/${req.params.championId}?api_key=${config.riot_api_key}`,
        // request(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${req.params.accountId}?api_key=${config.riot_api_key}`,
        //     function(err, response, body) {
        //         if (err) {
        //             res.send(Error('Not able to find matchlist data.'));
        //         }
        //         res.send(body);
        //     })
        res.send({"c": "d"})
        return {"c": "d"}
    });

    app.get('/api/riot/champion/:champId', (req, res) => {
        getData(`https://na1.api.riotgames.com/lol/static-data/v3/champions/${req.params.champId}?api_key=${config.riot_api_key}`, res)
        // request(`https://na1.api.riotgames.com/lol/static-data/v3/champions/${req.params.champId}?api_key=${config.riot_api_key}`,
        //     (err, response, body) => {
        //         if (err) {
        //             res.send(Error('Not able to find matchlist data.'))
        //         }
        //         res.send(body)
        //     })
    })
}
