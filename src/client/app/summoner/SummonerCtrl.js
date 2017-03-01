'use strict'
angular
	.module("app")
	.controller("SummonerCtrl", SummonerCtrl)
	.filter('alphanumeric', function () {
	    return function (value) {
	        return (!value) ? '' : value.replace(/[^a-z0-9]/gi, '');
	    };
	});

function SummonerCtrl($scope, riotApiService, $filter) {
	// href /:stuff --> $routeParams.stuff
	var vm = this;

	vm.getSummoner = function(summonerName) {
		vm.summonerName= $filter('alphanumeric')(summonerName)
		var lowercaseSummonerName = $filter('lowercase')(vm.summonerName)
		// todo: need to filter out the whitespaces and symbols

		riotApiService.getSummoner(lowercaseSummonerName)
		.then(function(data) {
			vm.summonerData = data.data[lowercaseSummonerName]
			return data.data[lowercaseSummonerName];
		});
	}
}
