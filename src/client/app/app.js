'use strict';

angular
    .module('app', ['ngRoute', 'ngSanitize'])
    .config(function ($routeProvider, $locationProvider) {
        // This is routing WITHIN ng-view only.
        //      Paths are relative to <views> (config in express.js)
        //      Right now, <views> = mean_start/src/client/
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: "app/home/home.html"
            })
	    .when("/champs/", {
	    	templateUrl: "app/champs/champs.html",
            controller: "ChampsCtrl",
            controllerAs: "rc"
	    })
    });
