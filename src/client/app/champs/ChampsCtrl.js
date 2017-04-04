'use strict'
angular
	.module("app")
	.controller("ChampsCtrl", ChampsCtrl);

function ChampsCtrl($scope, $routeParams, riotApiService) {
	// injector ^ ...
	// constructor...
	let vm = this; // do I need this?

	//$onInit() ...
	vm.champions=[]
	riotApiService.getChampions().then(function(data){
        console.table(data.data);
		let json = data.data.data;
		for (var i in json) {
			vm.champions.push(json[i]);
		}
        return data.data;
    });

 // 	vm.champions = [ {
 // 		name: 'C1',
 // 		id: '1'
 // 	},
 // 	{
 // 		name: 'C2',
 // 		id: '2'
 // 	}]

	if ($routeParams.championId) {
		console.log("Hello " + $routeParams.championId)
		alert("Selected champ id: " + $routeParams.championId)
	}
}
