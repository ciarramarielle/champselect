'use strict';

angular
    .module('app', ['ngRoute', 'ngSanitize', 'underscore'])
    .config(($routeProvider, $locationProvider) => {
        // This is routing WITHIN ng-view only.
        //      Paths are relative to <views> (config in express.js)
        //      Right now, <views> = mean_start/src/client/
        $locationProvider.html5Mode(true)
        $routeProvider
		    .when('/champs/', {
		    	templateUrl: 'app/champs/champs.html',
	            controller: 'ChampsCtrl',
	            controllerAs: 'rc'
		    })
		    .when('/champs/:championId', {
		    	templateUrl: 'app/champs/champs.html',
	            controller: 'ChampsCtrl',
	            controllerAs: 'rc'
		    })
			.when('/summoner/:summonerName/', { // summoner route doesn't work in summoner.html
				templateUrl: 'app/summoner/summoner.html',
				controller: 'SummonerCtrl',
				controllerAs: 'sc'
			})
			.when('/summoner/', { // summoner route doesn't work in summoner.html
				templateUrl: 'app/summoner/summoner.html',
				controller: 'SummonerCtrl',
				controllerAs: 'sc'
			})
			.otherwise({
				templateUrl: 'app/summoner/summoner.html',
				controller: 'SummonerCtrl',
				controllerAs: 'sc'
			})
			// FIXME: home '/'
			// .when('/', {
			//     templateUrl: 'app/home/home.html'
			// })
    })
