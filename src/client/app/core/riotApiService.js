(() => {
    'use strict'
    angular
        .module('app')
        .factory('riotApiService', riotApiService)

    function riotApiService($http) {
        const getChampions = () => {
            return $http({
                method: 'GET',
                url: '/api/riot/getChampions'
            })
            .then((data, status, headers, config) => {
                // this callback will be called asynchronously
                // when the response is available
                return data
            })
            .catch((err) => {
                console.log('Error: ' + err)
            })
        }
        const getChampionById = (championId) => {
            return $http({
                method: 'GET',
                url: `/api/riot/getChampion/${championId}`
            })
            .then((data, status, headers, config) => {
                // this callback will be called asynchronously
                // when the response is available
                return data
            })
            .catch((err) => {
                console.log('Error: ' + err)
            })
        }

        const getSummoner = (summonerName) => {
            return $http.get(`api/riot/getSummoner/${summonerName}`)
        }

        const getMatchlist = (summonerId) => {
            return $http.get(`api/riot/matchlist/${summonerId}`)
        }

        // FIXME Use champions instead
        const getChamp = (champId) => { //v3
            return $http.get(`api/riot/champion/${champId}`)
        }

        return {
            getChampions,
            getSummoner,
            getMatchlist,
            getChamp
        }
    }
})()
