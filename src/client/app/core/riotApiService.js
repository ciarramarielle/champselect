(() => {
    'use strict';
    angular
        .module("app")
        .factory("riotApiService", riotApiService);

    function riotApiService($http) {
        function getChampions() {
            return $http({
                method: 'GET',
                url: '/api/riot/getChampions'
            }).
            then(function(data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        return data;
                    },
                    function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    })
                .catch(function(e) {
                    console.log("Error: " + e);
                });
        }
        function getChampionById(championId) {
            return $http({
                method: 'GET',
                url: '/api/riot/getChampion/'+championId
            }).
            then(function(data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        return data;
                    },
                    function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    })
                .catch(function(e) {
                    console.log("Error: " + e);
                });
        }

        function getSummoner(summonerName) {
            return $http.get(`api/riot/getSummoner/${summonerName}`)
        }

        function getMatchlist(summonerId) {
            return $http.get(`api/riot/matchlist/${summonerId}`)
        }

        // FIXME Use champions instead
        function getChamp(champId) { //v3
            return $http.get(`api/riot/champion/${champId}`)
        }

        return {
            getChampions: getChampions,
            getSummoner: getSummoner,
            getMatchlist: getMatchlist,
            getChamp: getChamp
        }
    }
})();
