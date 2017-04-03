'use strict'
angular
	.module("app")
	.controller("SummonerCtrl", SummonerCtrl)
	.filter('alphanumeric', function () {
	    return function (value) {
	        return (!value) ? '' : value.replace(/[^a-z0-9]/gi, '');
	    };
	});

function SummonerCtrl($scope, riotApiService, $filter, $log) {
	// href /:stuff --> $routeParams.stuff
	var vm = this;
	vm.$log = $log;

	/* ONLINE */
	// vm.getSummoner = function(summonerName) {
	// 	vm.summonerName= $filter('alphanumeric')(summonerName)
	// 	var lowercaseSummonerName = $filter('lowercase')(vm.summonerName)
	// 	// todo: need to filter out the whitespaces and symbols

	// 	riotApiService.getSummoner(lowercaseSummonerName)
	// 	.then(function(data) {
	// 		vm.summonerData = data.data[lowercaseSummonerName]
	// 		return data.data[lowercaseSummonerName];
	// 	}, function(error) {
	// 		vm.$log.info("Could not find summoner: " + error.data)
	// 	});
	// }

	/* MOCK */
	vm.getSummoner = function(summonerName) {
		vm.summonerData = { key: 'value'}
		return {
			key: 'valueReturn'
		}
	}
}
