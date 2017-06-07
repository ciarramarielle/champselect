'use strict'
angular
	.module("app")
	.controller("SummonerCtrl", SummonerCtrl)
	.filter('alphanumeric', function () {
	    return function (value) {
	        return (!value) ? '' : value.replace(/[^a-z0-9]/gi, '');
	    };
	});

function SummonerCtrl ($scope, riotApiService, $filter, $log, _) {
	// href /:stuff --> $routeParams.stuff
	var vm = this;
	vm.$log = $log;

	/* ONLINE */
	// FIXME: Change getSummoner to something else...
	// 	we're gonna get all the champs summoner has ever played
	vm.getSummoner = function(summonerName) {
		vm.summonerName= $filter('alphanumeric')(summonerName)
		var lowercaseSummonerName = $filter('lowercase')(vm.summonerName)

		vm.toDisplay = []
		riotApiService.getSummoner(lowercaseSummonerName)
			.then((data) => {
				const summonerData = data.data
				riotApiService.getMatchlist(summonerData.accountId)
					.then((d) => {
						const stuff = d.data.matches || {}
						const allChamps = _.groupBy(stuff, 'champion')
						_.each(allChamps, (champ) => {
							let championId = champ[0].champion
							let used = champ.length
							let championName
							riotApiService.getChamp(championId)
								.then((c) => {
									vm.$log.info(used, c.data.name)
									vm.toDisplay.push({
										champion: c.data.name,
										used: used
									})

									// FIXME: This should be outside _.each but doesnt render
									vm.summonerData = _.sortBy(vm.toDisplay, 'used').reverse()
								})
						})
						return data.data
					})
			})
			.catch((error) => {
				vm.$log.info("Could not find summoner: " + error.data)
			})
	}
}
