'use strict'
angular
	.module("app")
	.controller("ChampsCtrl", ChampsCtrl);

function ChampsCtrl($scope, riotApiService) {
	var vm = this;
	// vm.resumeData = dataService.fakeResumeData();
	var champions = []

	riotApiService.getChampions()
    .then(function(data){
        console.table(data.data);
		let json = data.data.data;
		for (var i in json) {
			champions.push(json[i]);
		}
		vm.champions = champions
        return data.data;
    });

	console.log(vm.champions);


}
