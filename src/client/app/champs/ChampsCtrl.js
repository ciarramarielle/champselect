'use strict'
angular
	.module("app")
	.controller("ChampsCtrl", ChampsCtrl);

function ChampsCtrl($scope, riotApiService) {
	var vm = this;
	// vm.resumeData = dataService.fakeResumeData();

	riotApiService.getChampions()
    .then(function(data){
        console.log(data.data[0]);
		vm.rito = data.data;
        return data.data;
    });
}
