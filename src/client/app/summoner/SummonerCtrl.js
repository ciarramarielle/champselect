'use strict'
angular
	.module("app")
	.controller("SummonerCtrl", SummonerCtrl);

function SummonerCtrl($scope, riotApiService, $filter) {
	// href /:stuff --> $routeParams.stuff
	var vm = this;

	vm.getSummoner = function(summonerName) {
		vm.summonerName= summonerName
		// summonerName comes from user input. need to lowercase it
		var lowercaseSummonerName = $filter('lowercase')(summonerName)
		// todo: need to filter out the whitespaces and symbols

		riotApiService.getSummoner(lowercaseSummonerName)
		.then(function(data) {
			vm.summonerData = data.data[lowercaseSummonerName]
			return data.data[lowercaseSummonerName];
		});
	}
}
