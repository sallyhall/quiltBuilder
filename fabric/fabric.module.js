(function() {
  'use strict';

  angular
    .module('fabric',[
      'ngRoute',
      'underscore',
  ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/fabric',{
        templateUrl:'fabric/views/search.html',
        controller: 'FabricController as fabricCtrl'
      })
      .when('/fabric/results', {
        templateUrl:'fabric/views/list.html',
        controller: 'FabricController as fabricCtrl'
      });
    });

    angular
      .module('underscore',[])
      .factory('_',function($window){
        return $window._;
      });

}());
