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
		vm.summonerName = data.data[vm.n]
		console.log('getSummoner: ' + data.data[vm.n]);
		return data.data[vm.n];
	});
}
