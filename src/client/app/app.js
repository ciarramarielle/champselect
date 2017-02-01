// This will house our main AngularJS app file
'use strict';

angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: "app/home/home.html"
            })
    });
