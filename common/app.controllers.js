(function() {
  'use strict';

  angular
    .module('quiltBuilder',[
      'ngRoute',
      'underscore',
      'fabric',
      'quilt'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/',{
        templateUrl:'common/views/home.html'
      })
      .when('/404', {
        templateUrl:'common/views/404.html'
      })
      .otherwise({ redirectTo: '/404'});

    });

    angular.
      .module('underscore',[])
      .factory('_',function($window){
        return $window._;
      });

}());
