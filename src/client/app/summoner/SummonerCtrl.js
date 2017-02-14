'use strict'
angular
	.module("app")
	.controller("SummonerCtrl", SummonerCtrl);

function SummonerCtrl($scope, riotApiService, $routeParams) {
	var vm = this;
	vm.summonerName=''

	vm.n = $routeParams.summonerName
	// get summoner name from user input
	riotApiService.getSummoner(vm.n)
	.then(function(data) {
		// data --> summonerName
		vm.summonerName = data.data
		console.log('getSummoner: ' + data.data);
		return data.data;
	});
}
