'use strict'
angular
	.module("app")
	.controller("SummonerCtrl", SummonerCtrl)
	.filter('alphanumeric', function () {
	    return function (value) {
	        return (!value) ? '' : value.replace(/[^a-z0-9]/gi, '');
	    };
	});

function SummonerCtrl ($scope, riotApiService, $filter, $log) {
	// href /:stuff --> $routeParams.stuff
	var vm = this;
	vm.$log = $log;

	/* ONLINE */
	vm.getSummoner = function(summonerName) {
		vm.summonerName= $filter('alphanumeric')(summonerName)
		var lowercaseSummonerName = $filter('lowercase')(vm.summonerName)

		riotApiService.getSummoner(lowercaseSummonerName)
			.then((data) => {
				vm.$log.info("fgsfgs: " + JSON.stringify(data))

				vm.summonerData = data.data
				riotApiService.getMatchlist(vm.summonerData.accountId)
					.then((d) => {
						vm.$log.info('got this data back', d)
						return data.data
					})
			})
			.catch((error) => {
				vm.$log.info("Could not find summoner: " + error.data)
			})
	}
}
