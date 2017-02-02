(function(){
    'use strict';
    angular
        .module("app")
        .factory("riotApiService", riotApiService);

    function riotApiService($http) {
      function getChampions() {
          return $http({method: 'GET', url: '/api/riot/getChampions'}).
              then(function(data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  return data;
              },
              function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
              });
      }



    return {
            getChampions: getChampions
        }
    }
})();
